/* ============================================================
   EXTRAS: filtros, búsqueda por frases, sustituciones, mise en place,
   voz, plan semanal, lista de compras, progreso y sección Aprender.
   Se carga ANTES de app.js; usa window.APP (que define app.js) al ejecutarse.
   Todo se guarda en este navegador (localStorage): no hay cuentas ni servidor.
   ============================================================ */
var EXTRAS = (function () {
  'use strict';
  var A = function () { return window.APP; };
  var mem = {
    // Los datos de cada persona van aparte (ver perfil.js)
    leer: function (k, d) { try { var v = localStorage.getItem(PERFIL.clave(k)); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    guardar: function (k, v) { try { localStorage.setItem(PERFIL.clave(k), JSON.stringify(v)); } catch (e) { /* sin almacenamiento */ } }
  };
  function sinT(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function hoy() { return new Date().toISOString().slice(0, 10); }

  // ================================================================ ETIQUETAS DE CADA RECETA
  var RX = {
    carne: /pollo|\bres\b|cerdo|carne|chorizo|tocineta|jamon|salchicha|panceta|costilla|pepperoni|bistec|chuleta|charque|falda/,
    pescado: /pescado|salmon|atun|camaron|calamar|mejillon|cangrejo|dashi|anchoa/,
    gluten: /harina de trigo|\bpan\b|pasta|espagueti|fideo|macarron|fettuccine|codito|conchita|tortilla de harina|galleta|panko|bizcocho|cerveza|salsa de soya|lasana|tapa para empanada|masa para gyoza|udon|ramen|baguette/,
    lacteos: /leche(?! de coco)|queso|mantequilla(?! de mani)|crema de leche|yogur|mascarpone|\bcrema\b/,
    huevo: /huevo|yema|mayonesa/,
    frutosSecos: /nuez|nueces|\bmani\b|almendra|ajonjoli/,
    soya: /soya|tofu|miso|edamame/
  };
  function etiquetas(r) {
    if (r._tags) return r._tags;
    var ing = sinT(r.ingredientes.map(function (i) { return i.n; }).join(' | '));
    var todo = sinT(r.utensilios.join(' ') + ' ' + r.pasos.map(function (p) { return p.t + ' ' + p.d; }).join(' '));
    var t = { minutos: r.prep + r.coccion };
    for (var k in RX) t[k] = RX[k].test(ing);
    t.veg = !t.carne && !t.pescado;
    t.horno = /\bhorno\b|hornea/.test(todo);
    t.licuadora = /licuadora|licua/.test(todo);
    t.llevar = /Sándwiches|Ensaladas/.test(r.categoria) || /onigiri|wrap|burrito|empanada|tortilla de patatas|arroz frito|yakimeshi|muffins|galletas/.test(sinT(r.nombre));
    r._tags = t;
    return t;
  }
  var ALERGENOS = [['gluten', 'gluten'], ['lacteos', 'lácteos'], ['huevo', 'huevo'], ['pescado', 'pescado o mariscos'], ['frutosSecos', 'frutos secos o maní'], ['soya', 'soya']];

  // ================================================================ FILTROS DE LA PORTADA
  var f = { tiempo: 0, dif: '', dieta: '', sin: [], equipo: [], abierto: false };
  var GRUPOS = [
    { g: 'tiempo', t: '⏱ Tiempo', op: [[15, 'Hasta 15 min'], [30, 'Hasta 30 min'], [60, 'Hasta 1 hora']] },
    { g: 'dif', t: '📊 Dificultad', op: [['Fácil', 'Fácil'], ['Media', 'Media']] },
    { g: 'dieta', t: '🥬 Dieta', op: [['veg', 'Vegetariana'], ['sinCarne', 'Sin carnes rojas ni pollo']] },
    { g: 'sin', t: '🚫 Sin', multi: true, op: [['gluten', 'Gluten'], ['lacteos', 'Lácteos'], ['huevo', 'Huevo'], ['pescado', 'Pescado y mariscos'], ['frutosSecos', 'Frutos secos'], ['soya', 'Soya']] },
    { g: 'equipo', t: '🍳 Equipo', multi: true, op: [['horno', 'Sin horno'], ['licuadora', 'Sin licuadora']] }
  ];
  function activos() { return (f.tiempo ? 1 : 0) + (f.dif ? 1 : 0) + (f.dieta ? 1 : 0) + f.sin.length + f.equipo.length; }
  function pasaFiltros(r) {
    if (!activos()) return true;
    var t = etiquetas(r);
    if (f.tiempo && t.minutos > f.tiempo) return false;
    if (f.dif && r.dificultad !== f.dif) return false;
    if (f.dieta === 'veg' && !t.veg) return false;
    if (f.dieta === 'sinCarne' && t.carne) return false;
    for (var i = 0; i < f.sin.length; i++) if (t[f.sin[i]]) return false;
    for (var j = 0; j < f.equipo.length; j++) if (t[f.equipo[j]]) return false;
    return true;
  }
  function inicioHTML() {
    var n = activos();
    return '<div id="entendido" class="entendido"></div>' +
      '<div class="barra-filtros"><button class="chip" data-accion="filtros-abrir">⚙️ Filtros' + (n ? ' (' + n + ')' : '') + (f.abierto ? ' ▲' : ' ▼') + '</button>' +
      (n ? '<button class="chip" data-accion="filtros-limpiar">Quitar filtros</button>' : '') +
      '<a class="chip" href="#/sustituciones">🔁 No tengo un ingrediente</a></div>' +
      (f.abierto ? '<div class="panel panel-filtros">' + GRUPOS.map(function (gr) {
        return '<div class="grupo-filtro"><strong>' + gr.t + '</strong>' + gr.op.map(function (o) {
          var on = gr.multi ? f[gr.g].indexOf(o[0]) >= 0 : f[gr.g] === o[0];
          return '<button class="chip' + (on ? ' activo' : '') + '" data-accion="filtro" data-grupo="' + gr.g + '" data-valor="' + o[0] + '">' + o[1] + '</button>';
        }).join('') + '</div>';
      }).join('') + '<p class="pista izq">Dieta y alérgenos se calculan automáticamente a partir de los ingredientes. Si tienes una alergia, revisa siempre las etiquetas de los productos.</p></div>' : '');
  }

  // ================================================================ BÚSQUEDA POR FRASES
  var FRASES = [
    [/\b(rapid[oa]s?|express|en poco tiempo)\b/, function (t) { return t.minutos <= 30; }, '⏱ hasta 30 min'],
    [/\b(facil(es)?|sencill[oa]s?|para principiantes?)\b/, function (t, r) { return r.dificultad === 'Fácil'; }, '📊 fácil'],
    [/\bsin horno\b/, function (t) { return !t.horno; }, 'sin horno'],
    [/\bsin licuadora\b/, function (t) { return !t.licuadora; }, 'sin licuadora'],
    [/\b(vegetarian[oa]s?|sin carne)\b/, function (t) { return t.veg; }, '🥬 vegetariana'],
    [/\bsin gluten\b/, function (t) { return !t.gluten; }, 'sin gluten'],
    [/\bsin (lacteos|leche)\b/, function (t) { return !t.lacteos; }, 'sin lácteos'],
    [/\bsin huevos?\b/, function (t) { return !t.huevo; }, 'sin huevo'],
    [/\b(para llevar al trabajo|llevar al trabajo|para el trabajo|al trabajo|para llevar|lonchera|para la oficina)\b/, function (t) { return t.llevar; }, '🎒 para llevar'],
    [/\b(de )?desayunos?\b/, function (t, r) { return r.categoria === 'Desayunos'; }, '🍳 desayuno'],
    [/\b(de )?postres?\b|\balgo dulce\b/, function (t, r) { return r.categoria === 'Postres'; }, '🍰 postre'],
    [/\bal horno\b|\bcon horno\b/, function (t) { return t.horno; }, 'al horno']
  ];
  var VACIAS = /^(algo|con|y|de|del|una?|unas|unos|recetas?|comidas?|para|el|la|los|las|que|quiero|algun[oa]?|hacer|cocinar|preparar|tengo|en|a|mi|me|platos?|o|e|sea|tenga|lleve)$/;
  function interpretar(q) {
    var reglas = [], etiq = [];
    FRASES.forEach(function (fr) {
      if (fr[0].test(q)) { reglas.push(fr[1]); etiq.push(fr[2]); q = q.replace(fr[0], ' '); }
    });
    var palabras = q.split(/[^a-z0-9ñ]+/).filter(function (w) { return w && !VACIAS.test(w); })
      .map(function (w) { return w.length > 4 && /[aeiou]s$/.test(w) ? w.slice(0, -1) : w; });
    if (reglas.length && palabras.length) etiq.push('con: ' + palabras.join(', '));
    return {
      palabras: palabras,
      etiquetas: reglas.length ? etiq : [],
      pasa: function (r) { var t = etiquetas(r); return reglas.every(function (fn) { return fn(t, r); }); }
    };
  }

  // ================================================================ SUSTITUCIONES
  var SUST = [
    ['buttermilk|suero de leche', 'Buttermilk (suero de leche)', '1 taza de leche + 1 cucharada de jugo de limón o vinagre. Deja reposar 10 minutos hasta que se corte.'],
    ['crema de leche|nata', 'Crema de leche (nata) para cocinar', 'Leche evaporada en la misma cantidad. Para salsas frías, yogur natural espeso.'],
    ['crema para batir', 'Crema para batir', 'No tiene reemplazo que monte igual. Para acompañar, usa yogur griego endulzado.'],
    ['mantequilla', 'Mantequilla (en tortas y masas)', '¾ de la cantidad en aceite. En galletas cambia la textura: mejor margarina en barra.'],
    ['huevo', 'Huevo (en tortas y panqueques)', 'Por cada huevo: ½ banano maduro aplastado, o 3 cucharadas de yogur, o 1 cucharada de linaza molida con 3 de agua.'],
    ['polvo de hornear', 'Polvo de hornear', 'Por cada cucharadita: ¼ de cucharadita de bicarbonato + ½ cucharadita de limón o vinagre en los líquidos.'],
    ['azucar morena|panela', 'Azúcar morena o panela', 'Azúcar blanca en la misma cantidad + 1 cucharadita de miel por cada ½ taza.'],
    ['miel', 'Miel', 'Panela derretida, o azúcar disuelta en muy poca agua caliente.'],
    ['vinagre de arroz', 'Vinagre de arroz', 'Vinagre blanco rebajado con un poco de agua y una pizca de azúcar.'],
    ['vinagre balsamico', 'Vinagre balsámico', 'Vinagre de vino o blanco + ½ cucharadita de miel o panela.'],
    ['vino blanco', 'Vino blanco', 'Caldo en la misma cantidad + unas gotas de limón al final.'],
    ['cerveza', 'Cerveza', 'Caldo en la misma cantidad + 1 cucharadita de vinagre.'],
    ['leche', 'Leche', 'Bebida vegetal (avena, almendra) en la misma cantidad, o leche en polvo disuelta.'],
    ['leche de coco', 'Leche de coco', 'Crema de leche o leche evaporada. Cambia el sabor, pero da la misma cremosidad.'],
    ['leche evaporada', 'Leche evaporada', 'Crema de leche rebajada con un poco de leche.'],
    ['yogur', 'Yogur natural', 'Crema de leche con unas gotas de limón.'],
    ['pan rallado|panko', 'Pan rallado o panko', 'Galletas de soda trituradas, pan tostado molido u hojuelas de avena.'],
    ['ajo', 'Ajo fresco', '¼ de cucharadita de ajo en polvo por cada diente.'],
    ['cilantro', 'Cilantro', 'Perejil fresco. Cambia el sabor pero cumple la misma función.'],
    ['cebollin|cebolla larga', 'Cebollín o cebolla larga', 'Se reemplazan entre sí. También sirve la parte verde del puerro.'],
    ['limon', 'Limón', 'La mitad de la cantidad en vinagre.'],
    ['salsa de soya', 'Salsa de soya', 'Salsa inglesa con una pizca de sal. No es igual, pero da el toque salado y oscuro.'],
    ['fecula de maiz|maicena', 'Maicena (para espesar)', 'El doble de cantidad en harina de trigo, cocinando 2 minutos más para quitar el sabor a crudo.'],
    ['parmesano|pecorino', 'Queso parmesano', 'Cualquier queso duro y maduro rallado fino (un costeño seco funciona).'],
    ['mascarpone', 'Mascarpone', 'Queso crema batido con 2 cucharadas de crema de leche.'],
    ['queso fresco', 'Queso fresco', 'Queso campesino, ricotta o un queso blanco suave.'],
    ['aji amarillo', 'Pasta de ají amarillo', 'Pimentón amarillo licuado con un ají fresco al gusto.'],
    ['dashi', 'Dashi (caldo japonés)', 'Caldo de pollo suave, sin mucha sal.'],
    ['tomate triturado', 'Tomate triturado en lata', 'Tomates muy maduros rallados por el lado grueso (bota la piel).'],
    ['albahaca', 'Albahaca fresca', 'Orégano seco (un tercio de la cantidad) o espinaca tierna con un poco de orégano.'],
    ['jengibre', 'Jengibre fresco', '¼ de cucharadita de jengibre en polvo por cada cucharadita de fresco.'],
    ['harina de maiz precocida', 'Harina de maíz precocida', 'No tiene reemplazo directo: la harina de maíz común no sirve para arepas.']
  ];
  function sustitucionesDe(r) {
    var ing = sinT(r.ingredientes.map(function (i) { return i.n; }).join(' | '));
    return SUST.filter(function (s) { return new RegExp('\\b(' + s[0] + ')').test(ing); });
  }
  function verSustituciones() {
    A().app.innerHTML = '<a class="volver" href="#/">← Recetas</a><div class="panel"><h2>🔁 No tengo un ingrediente</h2>' +
      '<p class="suave">Escribe lo que te falta y mira con qué reemplazarlo.</p>' +
      '<input class="buscador" id="busca-sust" type="search" placeholder="Por ejemplo: buttermilk, crema, huevo…"><div id="lista-sust"></div></div>';
    var pintar = function () {
      var q = sinT(document.getElementById('busca-sust').value.trim());
      var l = SUST.filter(function (s) { return !q || sinT(s[1] + ' ' + s[0]).indexOf(q) >= 0; });
      document.getElementById('lista-sust').innerHTML = l.length
        ? l.map(function (s) { return '<div class="sust"><strong>' + s[1] + '</strong><span>→ ' + s[2] + '</span></div>'; }).join('')
        : '<p class="vacio">No tengo un reemplazo anotado para eso.</p>';
    };
    document.getElementById('busca-sust').addEventListener('input', pintar);
    pintar();
  }

  // ================================================================ PROGRESO: cocinadas, notas, nivel y logros
  var cocinadas = mem.leer('cocinadas', {}), notas = mem.leer('notas', {});
  var tecnicasVistas = mem.leer('tecnicas', []), retosHechos = mem.leer('retos', []);
  function totalCocinadas() { return Object.keys(cocinadas).length; }
  var NIVELES = [[0, 'Aprendiz', '🌱'], [3, 'Ayudante de cocina', '🥄'], [10, 'Cocinero de casa', '🍳'], [25, 'Cocinero con oficio', '🔪'], [50, 'Chef de la casa', '👩‍🍳']];
  function nivel() {
    var n = totalCocinadas(), k = 0;
    NIVELES.forEach(function (x, i) { if (n >= x[0]) k = i; });
    var sig = NIVELES[k + 1];
    return { n: n, nombre: NIVELES[k][1], emoji: NIVELES[k][2], sig: sig, pct: sig ? Math.round((n - NIVELES[k][0]) / (sig[0] - NIVELES[k][0]) * 100) : 100 };
  }
  function recetasCocinadas() { return Object.keys(cocinadas).map(function (id) { return A().buscarReceta(id); }).filter(Boolean); }
  var LOGROS = [
    ['🥇', 'Primer plato', 'Cocina tu primera receta', function (rs) { return rs.length >= 1; }],
    ['🖐️', 'Mano en la masa', 'Cocina 5 recetas distintas', function (rs) { return rs.length >= 5; }],
    ['🔟', 'Diez y contando', 'Cocina 10 recetas distintas', function (rs) { return rs.length >= 10; }],
    ['🌍', 'Viajero', 'Cocina platos de 3 cocinas del mundo', function (rs) { var c = {}; rs.forEach(function (r) { if (/^(Cocina|Comida) /.test(r.categoria)) c[r.categoria] = 1; }); return Object.keys(c).length >= 3; }],
    ['🍣', 'Itamae', 'Prepara un sushi', function (rs) { return rs.some(function (r) { return /Maki|Uramaki|Temaki|Nigiri|Onigiri|sushi/.test(r.nombre); }); }],
    ['🍰', 'Goloso', 'Prepara un postre', function (rs) { return rs.some(function (r) { return r.categoria === 'Postres'; }); }],
    ['🥣', 'Cuchara', 'Prepara una sopa', function (rs) { return rs.some(function (r) { return r.categoria === 'Sopas'; }); }],
    ['🔥', 'Sin miedo al horno', 'Cocina algo al horno', function (rs) { return rs.some(function (r) { return etiquetas(r).horno; }); }],
    ['📈', 'Subiendo el nivel', 'Cocina 3 recetas de dificultad media', function (rs) { return rs.filter(function (r) { return r.dificultad === 'Media'; }).length >= 3; }],
    ['📚', 'Estudioso', 'Lee 3 lecciones de técnica', function () { return tecnicasVistas.length >= 3; }],
    ['🏆', 'Retador', 'Completa un reto semanal', function () { return retosHechos.length >= 1; }],
    ['📅', 'Constante', 'Cocina en 2 semanas distintas', function () { var s = {}; Object.keys(cocinadas).forEach(function (id) { cocinadas[id].forEach(function (d) { s[semanaDe(new Date(d))] = 1; }); }); return Object.keys(s).length >= 2; }]
  ];
  function semanaDe(d) { var a = new Date(d.getFullYear(), 0, 1); return d.getFullYear() + '-' + Math.ceil(((d - a) / 86400000 + a.getDay() + 1) / 7); }
  function estrellasHTML(id) {
    var e = (notas[id] || {}).estrellas || 0, h = '';
    for (var i = 1; i <= 5; i++) h += '<button class="estrella' + (i <= e ? ' on' : '') + '" data-accion="estrella" data-id="' + id + '" data-valor="' + i + '" aria-label="' + i + ' estrellas">★</button>';
    return h;
  }
  function recomendadas(max) {
    var rs = recetasCocinadas();
    if (!rs.length) return [];
    var peso = {};
    rs.forEach(function (r) { peso[r.categoria] = (peso[r.categoria] || 0) + ((notas[r.id] || {}).estrellas || 3); });
    var cats = Object.keys(peso).sort(function (a, b) { return peso[b] - peso[a]; }).slice(0, 3);
    var out = [];
    cats.forEach(function (c, k) {
      var cand = RECETAS.filter(function (r) { return r.categoria === c && !cocinadas[r.id]; });
      for (var i = 0; i < Math.ceil(max / cats.length) && cand.length; i++) out.push(cand[(totalCocinadas() * 7 + i * 13 + k) % cand.length]);
    });
    return out.filter(function (r, i) { return out.indexOf(r) === i; }).slice(0, max);
  }
  function verProgreso() {
    var nv = nivel(), rs = recetasCocinadas(), recs = recomendadas(6);
    var reto = RECETAS.filter(function (r) { return r.dificultad === 'Media' && !cocinadas[r.id] && rs.some(function (c) { return c.categoria === r.categoria; }); })[0];
    A().app.innerHTML = '<a class="volver" href="#/">← Recetas</a>' +
      '<div class="panel nivel"><div class="nivel-emoji">' + nv.emoji + '</div><div style="flex:1"><h2>' + nv.nombre + '</h2>' +
        '<p class="suave" style="margin:4px 0 8px">Has cocinado ' + nv.n + (nv.n === 1 ? ' receta' : ' recetas') + (nv.sig ? '. Te faltan ' + (nv.sig[0] - nv.n) + ' para ser «' + nv.sig[1] + '».' : '. Llegaste al nivel más alto.') + '</p>' +
        '<div class="progreso" style="margin:0"><div style="width:' + nv.pct + '%"></div></div></div></div>' +
      '<h2 class="titulo-seccion">Logros</h2><div class="logros">' + LOGROS.map(function (l) {
        var ok = l[3](rs);
        return '<div class="logro' + (ok ? ' ok' : '') + '"><span>' + l[0] + '</span><strong>' + l[1] + '</strong><small>' + l[2] + '</small></div>';
      }).join('') + '</div>' +
      (reto ? '<h2 class="titulo-seccion">La próxima vez prueba esto</h2><p class="suave">Ya cocinaste recetas de «' + reto.categoria + '». Esta sube un poco la dificultad:</p><div class="rejilla">' + A().tarjetaHTML(reto, 0, '') + '</div>' : '') +
      (recs.length ? '<h2 class="titulo-seccion">Para ti, según lo que has cocinado</h2><div class="rejilla">' + recs.map(function (r, i) { return A().tarjetaHTML(r, i, ''); }).join('') + '</div>' : '') +
      '<h2 class="titulo-seccion">Tu historial</h2>' + (rs.length ? '<div class="panel"><ul class="lista">' + rs.map(function (r) {
        var d = cocinadas[r.id], e = (notas[r.id] || {}).estrellas;
        return '<li><a href="#/receta/' + r.id + '">' + r.emoji + ' ' + r.nombre + '</a><small>' + (d.length > 1 ? d.length + ' veces · última: ' : '') + d[d.length - 1] + (e ? ' · ' + '★'.repeat(e) : '') + '</small></li>';
      }).join('') + '</ul></div>' : '<p class="vacio">Todavía no has marcado ninguna receta como cocinada. Abre una, cocínala y toca «La cociné».</p>');
  }

  // ---- Bloque dentro de cada receta
  function recetaHTML(r) {
    var t = etiquetas(r), nota = notas[r.id] || {}, veces = (cocinadas[r.id] || []).length;
    var al = ALERGENOS.filter(function (a) { return t[a[0]]; }).map(function (a) { return a[1]; });
    var su = sustitucionesDe(r);
    return '<div class="panel"><h2>Tu cocina</h2>' +
      '<div class="fila-botones"><button class="boton ' + (veces ? 'secundario' : '') + '" data-accion="cocinada" data-id="' + r.id + '">' + (veces ? '✅ Cocinada ' + veces + (veces === 1 ? ' vez' : ' veces') + ' · sumar otra' : '✅ La cociné') + '</button></div>' +
      '<div class="estrellas">' + estrellasHTML(r.id) + '</div>' +
      '<textarea class="nota-propia" data-nota="' + r.id + '" placeholder="Tus notas: qué cambiarías, cómo te quedó…">' + esc(nota.texto || '') + '</textarea>' +
      '<div class="fila-botones"><select id="dia-plan">' + DIAS.map(function (d) { return '<option>' + d + '</option>'; }).join('') + '</select>' +
      '<button class="boton secundario" data-accion="al-plan" data-id="' + r.id + '">📅 Agregar al plan</button>' +
      '<button class="boton secundario" data-accion="receta-whatsapp" data-id="' + r.id + '">💬 Compartir por WhatsApp</button></div></div>' +
      '<div class="panel"><h2>Dieta y alérgenos</h2><p style="margin:0 0 8px">' + (t.veg ? '🥬 Vegetariana. ' : '') + (al.length ? 'Contiene: <strong>' + al.join(', ') + '</strong>.' : 'No detecté alérgenos comunes en los ingredientes.') + '</p>' +
      '<p class="pista izq" style="margin:0">Calculado automáticamente a partir de la lista de ingredientes. Si tienes una alergia, revisa las etiquetas de cada producto.</p></div>' +
      (su.length ? '<div class="panel"><h2>🔁 Si te falta algo</h2>' + su.map(function (s) { return '<div class="sust"><strong>' + s[1] + '</strong><span>→ ' + s[2] + '</span></div>'; }).join('') + '</div>' : '');
  }
  // La receta como texto, para mandarla por WhatsApp
  function textoReceta(r) {
    var limpia = function (s) { return String(s || '').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&quot;/g, '"'); };
    var n = A().porcionesDe(r), f = n / r.porciones;
    var out = [r.emoji + ' *' + limpia(r.nombre) + '*', '⏱ ' + A().tiempo(r.prep + r.coccion) + ' · 🍽 ' + n + (n === 1 ? ' porción' : ' porciones'), '', '*Ingredientes*'];
    r.ingredientes.forEach(function (i) { out.push('• ' + limpia(A().textoIngrediente(i, f))); });
    out.push('', '*Paso a paso*');
    r.pasos.forEach(function (p, k) { out.push((k + 1) + '. ' + (/^Paso \d+$/.test(p.t) ? '' : limpia(p.t) + ': ') + limpia(p.d)); });
    if (!r.mia) out.push('', 'Con fotos y modo cocinar: ' + location.origin + location.pathname + '#/receta/' + r.id);
    return out.join('\n');
  }
  function finalHTML(r) {
    return '<div class="fila-botones centro"><button class="boton" data-accion="cocinada" data-id="' + r.id + '">✅ Marcar como cocinada</button></div>' +
      '<p style="margin:14px 0 4px">¿Cómo te quedó?</p><div class="estrellas centro">' + estrellasHTML(r.id) + '</div>';
  }

  // ================================================================ MODO COCINA: mise en place, lectura y voz
  function miseHTML(r) {
    var factor = A().porcionesDe(r) / r.porciones;
    return '<div class="cocina"><div class="cocina-barra"><a class="volver" style="margin:0" href="#/receta/' + r.id + '">✕ Salir</a><span>' + r.emoji + ' ' + r.nombre + ' · Antes de empezar</span></div>' +
      '<div class="panel hoja-suelta adelante"><div class="paso"><div class="paso-cabeza"><div class="numero">0</div><h3>Ten todo a la mano</h3></div>' +
      '<p>Antes de prender la estufa, saca y mide todo. Marca cada cosa cuando la tengas lista: cocinar con todo preparado evita que algo se queme mientras buscas un ingrediente.</p>' +
      (r.antes ? '<div class="nota consejo"><b>💡 Lee esto primero</b>' + r.antes + '</div>' : '') +
      '<h4>Ingredientes</h4><ul class="lista">' + r.ingredientes.map(function (ing) { return '<li><label><input type="checkbox" class="mise"><span>' + A().textoIngrediente(ing, factor) + '</span></label></li>'; }).join('') + '</ul>' +
      '<h4>Utensilios</h4><ul class="lista">' + r.utensilios.map(function (u) { return '<li><label><input type="checkbox" class="mise"><span>' + u + '</span></label></li>'; }).join('') + '</ul>' +
      '<p class="pista izq" id="mise-cuenta"></p></div></div>' +
      '<div class="cocina-nav"><a class="boton secundario" href="#/receta/' + r.id + '">← Volver a la receta</a><a class="boton" href="#/cocinar/' + r.id + '/1">Todo listo, empezar →</a></div></div>';
  }
  var voz = { activa: false, rec: null };
  var Rec = typeof window !== 'undefined' ? (window.SpeechRecognition || window.webkitSpeechRecognition) : null;
  function vozHTML() {
    return '<div class="barra-voz"><button class="chip" data-accion="leer">🔊 Leer este paso</button>' +
      (Rec ? '<button class="chip' + (voz.activa ? ' activo' : '') + '" data-accion="voz">🎤 ' + (voz.activa ? 'Escuchando… (tocar para apagar)' : 'Manos libres') + '</button>' : '') +
      (voz.activa ? '<span class="pista izq" style="margin:0">Di: «siguiente», «anterior», «repetir», «ingredientes», «cuánto falta», «temporizador 10 minutos para el arroz»</span>' : '') + '</div>';
  }
  function textoPaso() {
    var ruta = A().rutaActual();
    if (ruta.vista !== 'cocina' || !ruta.paso || ruta.paso > ruta.receta.pasos.length) return '';
    var p = ruta.receta.pasos[ruta.paso - 1], limpia = function (s) { return String(s || '').replace(/<[^>]+>/g, ''); };
    return 'Paso ' + ruta.paso + '. ' + p.t + '. ' + limpia(p.d) + (p.s ? ' Sabrás que va bien si: ' + limpia(p.s) : '') + (p.e ? ' Cuidado: ' + limpia(p.e) : '');
  }
  function hablar(t) {
    if (!window.speechSynthesis || !t) return;
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(t); u.lang = 'es-ES'; u.rate = 0.95;
    speechSynthesis.speak(u);
  }
  function textoIngredientes() {
    var ruta = A().rutaActual();
    if (ruta.vista !== 'cocina' || !ruta.receta) return '';
    var f = A().porcionesDe(ruta.receta) / ruta.receta.porciones;
    return 'Ingredientes. ' + ruta.receta.ingredientes.map(function (i) { return A().textoIngrediente(i, f).replace(/<[^>]+>/g, '').replace(/&amp;/g, 'y'); }).join('. ');
  }
  function leer() {
    if (!window.speechSynthesis) return;
    speechSynthesis.cancel();
    var t = textoPaso();
    if (!t) return;
    var u = new SpeechSynthesisUtterance(t);
    u.lang = 'es-ES'; u.rate = 0.95;
    speechSynthesis.speak(u);
  }
  var NUM = { un: 1, uno: 1, una: 1, dos: 2, tres: 3, cuatro: 4, cinco: 5, seis: 6, siete: 7, ocho: 8, nueve: 9, diez: 10, doce: 12, quince: 15, veinte: 20, treinta: 30, cuarenta: 40 };
  function orden(texto) {
    var t = sinT(texto), m;
    if ((m = /(temporizador|timer|alarma|cronometro)\D*(\d+|un[oa]?|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|doce|quince|veinte|treinta|cuarenta)/.exec(t))) {
      var n = parseInt(m[2], 10) || NUM[m[2]];
      var cola = t.slice(t.indexOf(m[0]) + m[0].length), nom = /^\s*(?:minutos?|min|segundos?)?\s*(?:para|de|del)\s+(?:el|la|los|las)?\s*([a-z ]{2,24})/.exec(cola);
      var nombreT = nom ? nom[1].trim() : '';
      if (n) A().iniciarTimer(n, nombreT ? nombreT.charAt(0).toUpperCase() + nombreT.slice(1) : 'Temporizador por voz');
    } else if (/siguiente|proximo|adelante|continua/.test(t)) A().pasarPagina(1);
    else if (/anterior|atras|volver/.test(t)) A().pasarPagina(-1);
    else if (/cuanto (falta|queda)|que tiempo|como va/.test(t)) hablar(A().timersTexto());
    else if (/ingredientes/.test(t)) hablar(textoIngredientes());
    else if (/repet|repite|leer|lee|otra vez/.test(t)) leer();
    else if (/silencio|callate|para de leer/.test(t) && window.speechSynthesis) speechSynthesis.cancel();
  }
  function alternarVoz() {
    if (!Rec) return;
    if (voz.activa) { voz.activa = false; try { voz.rec.stop(); } catch (e) { /* ya detenido */ } return; }
    voz.rec = new Rec();
    voz.rec.lang = 'es-CO'; voz.rec.continuous = true; voz.rec.interimResults = false;
    voz.rec.onresult = function (ev) { orden(ev.results[ev.results.length - 1][0].transcript); };
    voz.rec.onend = function () { if (voz.activa) { try { voz.rec.start(); } catch (e) { /* reintento */ } } };
    voz.rec.onerror = function (ev) { if (ev.error === 'not-allowed' || ev.error === 'service-not-allowed') { voz.activa = false; A().repintar(); } };
    try { voz.rec.start(); voz.activa = true; } catch (e) { voz.activa = false; }
  }
  function alMostrarPaso() { if (voz.activa) setTimeout(leer, 500); else if (window.speechSynthesis) speechSynthesis.cancel(); }

  // ================================================================ PLAN SEMANAL Y LISTA DE COMPRAS
  var DIAS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo', 'Cuando quiera'];
  var plan = mem.leer('plan', {}), hechas = mem.leer('comprasHechas', {}), extra = mem.leer('comprasExtra', []);
  function idsPlan() { var out = []; DIAS.forEach(function (d) { (plan[d] || []).forEach(function (id) { out.push(id); }); }); return out; }
  function verPlan() {
    var total = idsPlan().length;
    A().app.innerHTML = '<a class="volver" href="#/">← Recetas</a><div class="panel"><h2>📅 Plan de la semana</h2>' +
      '<p class="suave">Agrega recetas desde su página con «Agregar al plan», o deja que te proponga una semana. De aquí sale tu lista de compras.</p>' +
      '<div class="fila-botones"><button class="boton" data-accion="plan-sugerir">✨ Proponerme una semana</button>' +
      (total ? '<a class="boton secundario" href="#/compras">🛒 Ver lista de compras</a><button class="boton secundario" data-accion="plan-vaciar">Vaciar plan</button>' : '') + '</div>' +
      '<p class="pista izq">La propuesta respeta los filtros que tengas activos en la portada (tiempo, dieta, alérgenos, equipo).</p></div>' +
      (total ? presupuestoHTML() : '') +
      '<div class="semana">' + DIAS.map(function (d) {
        var rs = (plan[d] || []).map(function (id) { return A().buscarReceta(id); }).filter(Boolean);
        return '<div class="dia"><h3>' + d + '</h3>' + (rs.length ? rs.map(function (r) {
          var cr = costoReceta(r);
          return '<div class="plato"><a href="#/receta/' + r.id + '">' + r.emoji + ' ' + r.nombre + '</a><small>⏱ ' + A().tiempo(r.prep + r.coccion) + (cr.total ? ' · ≈ ' + cop(cr.total) : '') + '</small>' +
            '<button data-accion="plan-quitar" data-dia="' + d + '" data-id="' + r.id + '" aria-label="Quitar">✕</button></div>';
        }).join('') : '<p class="suave" style="margin:0">Nada todavía</p>') + '</div>';
      }).join('') + '</div>';
  }
  // Idea de lo que cuesta cada receta: suma un precio por cada ingrediente (los míos o la referencia)
  function costoReceta(r) {
    var t = { total: 0, sin: 0 };
    r.ingredientes.forEach(function (ing) {
      if (/^Opcional/.test(ing.nota || '') && ing.c == null) return;
      var d = precioDe(pkDe(nombreProducto(ing.n)));
      if (d) t.total += d.p; else t.sin++;
    });
    return t;
  }
  function presupuestoHTML() {
    var est = estimarLista(), porcs = 0, dias = DIAS.filter(function (d) { return (plan[d] || []).length; }).length;
    return '<div class="panel"><h2>💰 Presupuesto de la semana</h2>' +
      '<p class="completa" style="margin:0">Comprar todo lo de este plan costaría <strong>≈ ' + cop(est.total) + '</strong>' + (dias ? ' <small>(unos ' + cop(est.total / dias) + ' por día con plan)</small>' : '') + '.</p>' +
      '<p class="pista izq">Cuenta un precio por producto distinto, no por cantidad exacta. Usa los precios que tú anotaste y, si no hay, una referencia aproximada' + (est.sin ? '; ' + est.sin + ' productos no tienen precio y no suman' : '') + '. Sirve para tener una idea, no para cuadrar centavos. <a href="#/compras">Anota los reales en la lista</a> y se vuelve más exacto.</p></div>';
  }
  function sugerirSemana() {
    // Solo platos que sirven de comida principal (ni salsas, ni postres, ni bebidas, ni pasabocas)
    var NO_PRINCIPAL = /Hogao|Ají colombiano|Patacones|Almojábanas|Pandebono|Buñuelos|Natilla|Arroz con leche|Torta de|Mousse|Arequipe|Obleas|Chocolate santafereño|Aguapanela|Salpicón|Changua|Arepa de choclo|Empanadas colombianas|Papas rellenas|Arroz de coco|Calentado|Llajua|Chimichurri|Pico de gallo|Sunomono|Edamame|Provoleta|Tajadas|Papelón|horchata|Limonada|Brigadeiros|Alfajores|Pudim|Bolo|Tiramisú|Churros|Arroz para sushi|Tamagoyaki|Caraotas|refritos|Bruschetta|Cuñapé|Pão|Tequeños|Sopa de miso|Gazpacho|Patatas bravas|Croquetas/;
    var cand = RECETAS.filter(function (r) {
      return /Platos fuertes|Sopas|Cocina |Comida japonesa/.test(r.categoria) && !NO_PRINCIPAL.test(r.nombre) &&
        r.prep + r.coccion <= 75 && pasaFiltros(r);
    });
    if (!cand.length) return;
    // Baraja y toma 7 distintas, procurando no repetir el mismo tipo de plato
    for (var i = cand.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = cand[i]; cand[i] = cand[j]; cand[j] = t; }
    var usados = {}, elegidas = [];
    cand.forEach(function (r) {
      var tipo = r.foto || r.id;
      if (elegidas.length < 7 && !usados[tipo]) { usados[tipo] = 1; elegidas.push(r); }
    });
    DIAS.slice(0, 7).forEach(function (d, k) {
      plan[d] = elegidas.length ? [elegidas[k % elegidas.length].id] : [];
    });
    mem.guardar('plan', plan);
  }
  // ================================================================ MERCADO: lista, tiendas, precios y tiquete
  // La app NO trae precios: aprende los que tú anotas (o los que salen de un tiquete que confirmas).
  var ciudad = mem.leer('ciudad', 'Zipaquirá'), tiendas = mem.leer('tiendas', []), tiendaActual = mem.leer('tiendaActual', ''), precios = mem.leer('precios', {});
  var PASILLOS = [
    ['🥬 Frutas y verduras', /tomate|cebolla|\bajo\b|ajos|papa|zanahoria|limon|aguacate|lechuga|pepino|cilantro|perejil|pimenton|espinaca|brocoli|calabacin|naranja|fresa|mango|banano|platano|champinon|repollo|apio|jengibre|albahaca|maiz tierno|coliflor|berenjena|ahuyama|manzana|pera\b|pina|mora\b|cebollin|\baji\b|yuca|batata|remolacha|habichuela|arveja|mazorca|esparrago|fruta|verdura|guayaba|lulo|maracuya|papaya|hierbabuena|uva/],
    ['🥩 Carnes y pescados', /pollo|\bres\b|cerdo|carne|chorizo|tocineta|jamon|salchicha|panceta|costilla|bistec|chuleta|pescado|salmon|atun|camaron|calamar|mejillon|mortadela|pechuga|muslo|alita/],
    ['🥛 Lácteos y huevos', /leche(?! de coco)|queso|mantequilla(?! de mani)|crema de leche|yogur|huevo|yema|mascarpone|kumis|cuajada/],
    ['🧼 Aseo y hogar', /papel|jabon|detergente|crema dental|champu|shampoo|servilleta|limpia|esponja|bolsas? de basura|suavizante|cloro|desodorante|toalla/]
  ];
  var TIENDAS_SUGERIDAS = ['Ara', 'D1', 'Super Día', 'Éxito', 'Colsubsidio', 'Plaza de mercado', 'Tienda de barrio', 'Fruver', 'Carnicería', 'Panadería'];
  var CANASTA = [
    ['🥬', ['Papa', 'Tomate', 'Cebolla cabezona', 'Cebolla larga', 'Zanahoria', 'Plátano', 'Yuca', 'Limón', 'Aguacate', 'Banano', 'Cilantro', 'Ajo', 'Fruta para jugo']],
    ['🥩', ['Pollo', 'Carne de res', 'Carne molida', 'Cerdo', 'Pescado', 'Salchichas', 'Atún']],
    ['🥛', ['Leche', 'Huevos', 'Queso', 'Mantequilla', 'Yogur']],
    ['🧂', ['Arroz', 'Aceite', 'Sal', 'Azúcar', 'Panela', 'Café', 'Chocolate', 'Lentejas', 'Fríjol', 'Pasta', 'Harina de trigo', 'Harina para arepas', 'Avena', 'Pan', 'Galletas']],
    ['🧼', ['Papel higiénico', 'Jabón de baño', 'Detergente', 'Jabón de loza', 'Crema dental', 'Bolsas de basura']]
  ];
  var canastaAbierta = false, avisoMercado = '', ocr = null, dictado = null;

  // Clave con la que se recuerda el precio de un producto: "2 libras de arroz" y "Arroz blanco" -> "arroz"
  var COMPUESTOS = /^(carne (?:molida|de res|de cerdo)|harina (?:de trigo|de maiz|para arepas|precocida)|cebolla (?:larga|cabezona|morada|blanca)|salsa (?:inglesa|de \w+)|papel higienico|jabon (?:de \w+|liquido)|crema (?:de leche|dental)|pan (?:de molde|tajado)|aceite de \w+|leche de coco|leche en polvo)/;
  function pkDe(t) {
    var s = sinT(String(t)).replace(/\(.*?\)/g, ' ').replace(/[,.:;].*$/, ' ').trim();
    s = s.replace(/^(\d+(?:[.,]\d+)?\s*(?:kg|kilos?|libras?|lb|g|gr|gramos?|litros?|lts?|l|ml|unidades?|und|docenas?|paquetes?|bolsas?|cajas?|botellas?|latas?)?\s*(?:de\s+)?)+/, '');
    s = s.replace(/^(un|una|el|la|los|las|de|del)\s+/, '').replace(/^(?:diente|tallo|hoja|rebanada|tajada|lamina|presa|filete|rama|trozo|cubo|lata|paquete|bolsa|porcion|astilla|pizca)s?\s+de\s+/, '');
    // Quita medidas y presentaciones que vienen en los tiquetes: 1l, 500g, x30, 2kg
    s = s.split(/\s+/).filter(function (w) { return !/^(\d+(?:[.,]\d+)?(?:kg|g|gr|l|lt|lts|ml|und|u|x\d*)?|x\d+)$/.test(w); }).join(' ');
    var m = COMPUESTOS.exec(s);
    if (m) return m[0];
    var a = s.split(/\s+/)[0] || '';
    if (a.length > 4 && /[aeiou]s$/.test(a)) a = a.slice(0, -1);
    return a;
  }
  // Precios de REFERENCIA: cifras aproximadas y NO oficiales de productos comunes en Colombia (pueden estar desactualizadas).
  // Solo sirven para dar una idea cuando todavía no has anotado el precio real. Los tuyos siempre mandan.
  var REF_LISTA = [
    ['Papa', 2300, 'la libra'], ['Tomate', 3000, 'la libra'], ['Cebolla cabezona', 2500, 'la libra'], ['Cebolla larga', 3000, 'la libra'], ['Zanahoria', 1800, 'la libra'],
    ['Plátano', 1200, 'la unidad'], ['Yuca', 1800, 'la libra'], ['Limón', 3500, 'la libra'], ['Aguacate', 3500, 'la unidad'], ['Banano', 2200, 'la libra'],
    ['Cilantro', 1500, 'el atado'], ['Ajo', 1000, 'la cabeza'], ['Pimentón', 1500, 'la unidad'], ['Lechuga', 3000, 'la unidad'], ['Naranja', 2000, 'la libra'],
    ['Pollo', 8000, 'la libra'], ['Carne de res', 17000, 'la libra'], ['Carne molida', 16000, 'la libra'], ['Cerdo', 14000, 'la libra'], ['Pescado', 14000, 'la libra'],
    ['Salchicha', 9000, 'el paquete'], ['Atún', 5500, 'la lata'], ['Chorizo', 8000, 'el paquete'],
    ['Leche', 4800, 'el litro'], ['Huevo', 700, 'la unidad'], ['Queso', 14000, 'la libra'], ['Mantequilla', 6500, 'la barra'], ['Yogur', 7500, 'el litro'],
    ['Arroz', 3300, 'la libra'], ['Aceite', 14000, 'el litro'], ['Sal', 2200, 'el kilo'], ['Azúcar', 4800, 'el kilo'], ['Panela', 3200, 'la libra'], ['Café', 12000, 'la libra'],
    ['Chocolate', 11000, 'la libra'], ['Lenteja', 4500, 'la libra'], ['Fríjol', 7500, 'la libra'], ['Pasta', 3200, 'el paquete'], ['Harina de trigo', 4500, 'el kilo'],
    ['Harina para arepas', 3800, 'el paquete'], ['Avena', 4000, 'el paquete'], ['Pan', 6500, 'la bolsa'], ['Galleta', 4000, 'el paquete'],
    ['Papel higiénico', 18000, 'el paquete x12'], ['Jabón de baño', 3000, 'la unidad'], ['Detergente', 9000, 'el kilo'], ['Jabón de loza', 4500, 'la unidad'],
    ['Crema dental', 6500, 'el tubo'], ['Bolsas de basura', 5000, 'el paquete']
  ];
  var REF = {};
  REF_LISTA.forEach(function (x) { REF[pkDe(x[0])] = { p: x[1], u: x[2] }; });
  // Mejor precio que conozco de un producto: el tuyo en la tienda actual, el más barato que anotaste, o la referencia
  function precioDe(pk) {
    var p = precios[pk];
    if (p && tiendaActual && p[tiendaActual]) return { p: p[tiendaActual].p, tipo: 'mio' };
    if (p && Object.keys(p).length) return { p: Math.min.apply(null, Object.keys(p).map(function (k) { return p[k].p; })), tipo: 'mio' };
    if (REF[pk]) return { p: REF[pk].p, tipo: 'ref' };
    return null;
  }
  function estimarLista() {
    var r = { total: 0, mio: 0, ref: 0, sin: 0 };
    todosLosItems().forEach(function (it) {
      var d = precioDe(it.pk);
      if (!d) { r.sin++; return; }
      r.total += d.p * cantDe(it); r[d.tipo]++;
    });
    return r;
  }
  function nombreProducto(n) { return n.split('|')[0].replace(/^de /, '').replace(/\s*\(.*?\)/g, '').trim(); }
  function pasilloDe(nombre) {
    var nom = sinT(nombre);
    for (var i = 0; i < PASILLOS.length; i++) if (PASILLOS[i][1].test(nom)) return i;
    return PASILLOS.length;
  }
  function cop(n) { return '$' + Math.round(n).toLocaleString('es-CO'); }
  function fechaCorta(f) {
    if (!f) return '';
    var d = new Date(f + 'T12:00:00'), m = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
    return d.getDate() + ' ' + m[d.getMonth()];
  }
  function guardarPrecio(pk, tienda, valor) {
    if (!pk || !tienda) return;
    if (valor > 0) {
      var previo = precios[pk] && precios[pk][tienda];
      if (previo && previo.p !== Math.round(valor)) {
        (histPrecios[pk] = histPrecios[pk] || []).push({ t: tienda, p: previo.p, f: previo.f });
        if (histPrecios[pk].length > 12) histPrecios[pk].shift();
        mem.guardar('histPrecios', histPrecios);
      }
      (precios[pk] = precios[pk] || {})[tienda] = { p: Math.round(valor), f: hoy() };
    }
    else if (precios[pk]) { delete precios[pk][tienda]; if (!Object.keys(precios[pk]).length) delete precios[pk]; }
    mem.guardar('precios', precios);
  }

  function listaCompras() {
    var mapa = {}, orden = [];
    idsPlan().forEach(function (id) {
      var r = A().buscarReceta(id); if (!r) return;
      var factor = A().porcionesDe(r) / r.porciones;
      r.ingredientes.forEach(function (ing) {
        if (/^Opcional/.test(ing.nota || '') && ing.c == null) return;
        var k = (ing.c == null ? 'x' : ing.u) + '§' + ing.n;
        if (!mapa[k]) { mapa[k] = { c: ing.c == null ? null : 0, u: ing.u, n: ing.n, de: [] }; orden.push(k); }
        if (ing.c != null) mapa[k].c += ing.c * factor;
        if (mapa[k].de.indexOf(r.nombre) < 0) mapa[k].de.push(r.nombre);
      });
    });
    var grupos = PASILLOS.map(function (p) { return { t: p[0], items: [] }; }).concat([{ t: '🧂 Despensa', items: [] }]);
    orden.forEach(function (k) {
      var it = mapa[k], prod = nombreProducto(it.n);
      grupos[pasilloDe(it.n)].items.push({ k: k, pk: pkDe(prod), prod: prod, texto: A().textoIngrediente(it, 1), de: it.de });
    });
    extra.forEach(function (x, i) {
      grupos[pasilloDe(x)].items.push({ k: 'extra§' + x, pk: pkDe(x), prod: x, texto: esc(x), de: [], extra: i });
    });
    return grupos;
  }
  function todosLosItems() {
    var l = [];
    listaCompras().forEach(function (g) { g.items.forEach(function (it) { l.push(it); }); });
    return l;
  }

  // Precios que conozco del producto en las otras tiendas (⬇ = el más barato de todos)
  function pistaPrecio(pk) {
    var p = precios[pk]; if (!p) return '';
    var tiendasCon = Object.keys(p), min = Math.min.apply(null, tiendasCon.map(function (t) { return p[t].p; }));
    var otras = tiendasCon.filter(function (t) { return t !== tiendaActual; });
    if (!otras.length) return '';
    return otras.map(function (t) { return esc(t) + ': ' + cop(p[t].p) + ' (' + fechaCorta(p[t].f) + ')' + (p[t].p === min && tiendasCon.length > 1 ? ' ⬇' : ''); }).join(' · ');
  }
  function refrescarPistas() {
    var cur = tiendaActual;
    document.querySelectorAll('[data-pista]').forEach(function (el) {
      var pk = el.dataset.pista, p = precios[pk], t = pistaPrecio(pk);
      var barata = p && cur && p[cur] && Object.keys(p).length > 1 && p[cur].p === Math.min.apply(null, Object.keys(p).map(function (k) { return p[k].p; }));
      var ref = REF[pk], sinMio = !(p && cur && p[cur]);
      var partes = [];
      if (t) partes.push('💲 ' + t);
      var tend = cur ? tendencia(pk, cur) : ''; if (tend) partes.push(tend);
      var dd = precioDe(pk), cc = cant[pk] > 1 ? cant[pk] : 1; if (dd && cc > 1) partes.push('= ' + cop(dd.p * cc) + ' (×' + cc + ')');
      if (barata) partes.push('✅ aquí es lo más barato que he visto');
      if (ref && sinMio) partes.push('≈ ' + cop(ref.p) + ' ' + ref.u + ' (referencia aproximada)');
      el.innerHTML = partes.join(' · ');
    });
    var r = document.getElementById('resumen-mercado');
    if (r) r.innerHTML = resumenHTML();
    pintarCarrito();
  }

  function resumenHTML() {
    var items = todosLosItems();
    if (!items.length) return '';
    var est = estimarLista(), estHTML = est.total
      ? '<p class="completa" style="margin:0 0 12px">🧮 Idea del total: <strong>≈ ' + cop(est.total) + '</strong> <small>(' + est.mio + ' con tus precios, ' + est.ref + ' con precio de referencia' + (est.sin ? ', ' + est.sin + ' sin precio' : '') + ')</small></p>' : '';
    if (!tiendas.length) return estHTML + '<p class="suave" style="margin:0">Agrega tus tiendas arriba y anota lo que pagas: con eso te digo cuánto te cuesta este mercado en cada una.</p>';
    var filas = tiendas.map(function (t) {
      var total = 0, con = 0;
      items.forEach(function (it) { var p = precios[it.pk] && precios[it.pk][t.n]; if (p) { total += p.p * cantDe(it); con++; } });
      return { t: t, total: total, con: con, falta: items.length - con };
    });
    var completas = filas.filter(function (f) { return f.falta === 0; }).sort(function (a, b) { return a.total - b.total; });
    var conclusion;
    if (completas.length > 1) {
      conclusion = '<p class="completa" style="margin:10px 0 0">💰 Para esta lista conviene ' + esc(completas[0].t.n) + ': ' + cop(completas[0].total) + '. Ahorras ' + cop(completas[completas.length - 1].total - completas[0].total) + ' frente a ' + esc(completas[completas.length - 1].t.n) + '.</p>';
    } else if (completas.length === 1) {
      conclusion = '<p style="margin:10px 0 0">Solo conozco todos los precios en ' + esc(completas[0].t.n) + ' (' + cop(completas[0].total) + '). Anota los de las otras tiendas para poder comparar.</p>';
    } else {
      conclusion = '<p class="pista izq" style="margin:10px 0 0">Todavía no puedo decirte cuál tienda conviene: para comparar necesito el precio de todos los productos en cada tienda. Entre más anotes, mejor te aconsejo.</p>';
    }
    return estHTML + '<table class="tabla-tiendas"><tr><th>Tienda</th><th>Suma conocida</th><th>Faltan</th></tr>' + filas.map(function (f) {
      return '<tr' + (f.t.n === tiendaActual ? ' class="actual"' : '') + '><td>' + esc(f.t.n) + (f.t.zona ? '<small>' + esc(f.t.zona) + '</small>' : '') + '</td><td>' + (f.con ? cop(f.total) : '—') + '</td><td>' + (f.falta ? f.falta + ' de ' + items.length : '✅ ninguno') + '</td></tr>';
    }).join('') + '</table>' + conclusion +
      '<p class="pista izq">Son los precios que tú anotaste y pueden haber cambiado. Cada precio es el de ese producto en la cantidad que anotaste.</p>';
  }

  // ---------------- Terminé de comprar: gasto, historial y paso a la nevera
  var historial = mem.leer('historialCompras', []), registradas = mem.leer('comprasRegistradas', {}), ultimaCompra = null;
  function guardarHistorial() { mem.guardar('historialCompras', historial); mem.guardar('comprasRegistradas', registradas); }
  function porRegistrar() { return todosLosItems().filter(function (it) { return hechas[it.k] && !registradas[it.k]; }); }

  function terminarCompra() {
    var items = porRegistrar();
    if (!items.length) { avisoMercado = 'Primero marca con la casilla lo que ya compraste y luego toca «Terminé de comprar».'; verCompras(); return; }
    var e = { f: hoy(), tienda: tiendaActual || '', total: 0, n: items.length, items: [], mio: 0, ref: 0, sin: 0 };
    items.forEach(function (it) {
      var d = precioDe(it.pk);
      e.items.push(it.prod);
      if (d) { e.total += d.p * cantDe(it); e[d.tipo]++; } else e.sin++;
    });
    var nuevos = A().neveraDesdeTexto(e.items);
    // lo que se compró a mano sale de la lista; lo del plan queda marcado como comprado
    var idxExtra = {};
    items.forEach(function (it) { registradas[it.k] = true; if (it.extra != null) idxExtra[it.extra] = true; });
    extra = extra.filter(function (x, i) { return !idxExtra[i]; });
    mem.guardar('comprasExtra', extra);
    items.forEach(function (it) { if (it.extra != null) { delete hechas[it.k]; delete registradas[it.k]; } });
    mem.guardar('comprasHechas', hechas);
    historial.unshift(e); historial = historial.slice(0, 80);
    guardarHistorial();
    ultimaCompra = { e: e, nuevos: nuevos };
    verCompras();
    window.scrollTo(0, 0);
  }

  function ultimaCompraHTML() {
    if (!ultimaCompra) return '';
    var e = ultimaCompra.e, nv = ultimaCompra.nuevos;
    return '<div class="panel resumen-compra"><h2>✅ Compra guardada</h2>' +
      '<p style="margin:0 0 8px">' + e.n + (e.n === 1 ? ' producto' : ' productos') + (e.tienda ? ' en <strong>' + esc(e.tienda) + '</strong>' : '') + (ciudad ? ' (' + esc(ciudad) + ')' : '') +
      (e.total ? ': <strong>≈ ' + cop(e.total) + '</strong>' : '') + '.</p>' +
      (e.total ? '<p class="pista izq" style="margin:0 0 8px">' + e.mio + ' con precios tuyos' + (e.ref ? ', ' + e.ref + ' con precio de referencia' : '') + (e.sin ? ', ' + e.sin + ' sin precio (no suman)' : '') + '. ' +
        (e.sin || e.ref ? 'Anota los que faltan para que el gasto sea exacto.' : '') + '</p>' : '') +
      (nv.length ? '<p style="margin:0 0 8px">🧊 Pasé a tu nevera: ' + nv.map(esc).join(', ') + '.</p>' : '<p class="pista izq" style="margin:0 0 8px">Nada de lo que compraste es nuevo para tu nevera, o no lo reconozco como ingrediente.</p>') +
      '<div class="fila-botones"><a class="boton" href="#/nevera">🍳 Ver qué puedo cocinar con esto</a><button class="boton secundario" data-accion="compra-cerrar">Cerrar</button></div></div>';
  }

  function historialHTML() {
    if (!historial.length) return '<div class="panel"><h2>📊 Mis mercados' + (ciudad ? ' en ' + esc(ciudad) : '') + '</h2><p class="suave" style="margin:0 0 8px">Cuando termines tu primera compra aquí verás cuánto gastas, en qué tienda y qué compras más.</p>' + metaHTML() + '</div>';
    var mes = hoy().slice(0, 7), delMes = 0, suma = 0, conTotal = 0, porTienda = {}, veces = {};
    historial.forEach(function (e) {
      if (e.total) { suma += e.total; conTotal++; if (e.f.slice(0, 7) === mes) delMes += e.total; }
      var t = e.tienda || 'Sin tienda'; porTienda[t] = porTienda[t] || { n: 0, suma: 0 }; porTienda[t].n++; porTienda[t].suma += e.total || 0;
      (e.items || []).forEach(function (n) { var k = sinT(n); veces[k] = veces[k] || { n: n, c: 0 }; veces[k].c++; });
    });
    var frecuentes = Object.keys(veces).map(function (k) { return veces[k]; }).filter(function (x) { return x.c >= 2; }).sort(function (a, b) { return b.c - a.c; }).slice(0, 8);
    return '<div class="panel"><h2>📊 Mis mercados' + (ciudad ? ' en ' + esc(ciudad) : '') + '</h2>' +
      '<p style="margin:0 0 8px">' + historial.length + (historial.length === 1 ? ' compra registrada' : ' compras registradas') +
      (conTotal ? ' · promedio <strong>' + cop(suma / conTotal) + '</strong>' : '') + (delMes ? ' · este mes <strong>' + cop(delMes) + '</strong>' : '') + '.</p>' +
      '<table class="tabla-tiendas"><tr><th>Tienda</th><th>Compras</th><th>Promedio</th></tr>' + Object.keys(porTienda).map(function (t) {
        var x = porTienda[t]; return '<tr><td>' + esc(t) + '</td><td>' + x.n + '</td><td>' + (x.suma ? cop(x.suma / x.n) : '—') + '</td></tr>';
      }).join('') + '</table>' +
      (frecuentes.length ? '<p class="pista izq">Lo que más compras: ' + frecuentes.map(function (x) { return esc(x.n) + ' (' + x.c + ')'; }).join(', ') + '.</p>' : '') +
      '<ul class="lista">' + historial.slice(0, 5).map(function (e) {
        return '<li><details><summary>' + esc(fechaCorta(e.f)) + ' · ' + esc(e.tienda || 'Sin tienda') + ' · ' + (e.total ? cop(e.total) : 'sin precios') + ' · ' + e.n + ' productos</summary>' +
          '<p class="pista izq" style="margin:6px 0 0">' + (e.items || []).map(esc).join(', ') + '</p><button class="chip" data-accion="compra-repetir" data-valor="' + historial.indexOf(e) + '">↻ Repetir esta compra</button></details></li>';
      }).join('') + '</ul>' +
      '<div class="fila-botones"><button class="chip" data-accion="historial-borrar">Borrar historial</button></div>' +
      '<p class="pista izq">Los totales usan los precios que anotaste; si falta alguno, una referencia aproximada.</p>' + cambiosHTML() + metaHTML() + '</div>';
  }

  // ================================================================ MERCADO 3: cantidades, presupuesto, ruta, historial de precios, plantillas
  var cant = mem.leer('comprasCant', {}), meta = mem.leer('metaMercado', 0), histPrecios = mem.leer('histPrecios', {}), enTienda = false;
  function cantDe(it) { return cant[it.pk] > 0 ? cant[it.pk] : 1; }
  function guardarCant() { mem.guardar('comprasCant', cant); }

  var PLANTILLAS = [
    ['🧺 Semana para 2 personas', [['Arroz', 2], ['Papa', 4], ['Tomate', 2], ['Cebolla cabezona', 2], ['Cebolla larga', 1], ['Zanahoria', 2], ['Plátano', 3], ['Limón', 1], ['Aguacate', 2], ['Cilantro', 1], ['Ajo', 1], ['Pollo', 3], ['Carne de res', 2], ['Huevos', 12], ['Leche', 4], ['Queso', 1], ['Aceite', 1], ['Panela', 1], ['Café', 1], ['Pan', 1], ['Lentejas', 1], ['Pasta', 1]]],
    ['👨‍👩‍👧‍👦 Semana para 4 personas', [['Arroz', 4], ['Papa', 8], ['Tomate', 4], ['Cebolla cabezona', 4], ['Cebolla larga', 2], ['Zanahoria', 4], ['Plátano', 6], ['Limón', 2], ['Aguacate', 4], ['Cilantro', 2], ['Ajo', 2], ['Pollo', 6], ['Carne de res', 4], ['Huevos', 30], ['Leche', 8], ['Queso', 2], ['Aceite', 1], ['Panela', 2], ['Café', 1], ['Pan', 2], ['Lentejas', 2], ['Fríjol', 2], ['Pasta', 2]]],
    ['💰 Mercado económico', [['Arroz', 3], ['Papa', 5], ['Lentejas', 2], ['Fríjol', 2], ['Huevos', 15], ['Zanahoria', 3], ['Cebolla cabezona', 3], ['Tomate', 3], ['Pasta', 2], ['Avena', 1], ['Panela', 2], ['Aceite', 1], ['Sal', 1], ['Plátano', 4], ['Pollo', 3]]],
    ['🍳 Desayunos de la semana', [['Huevos', 12], ['Leche', 4], ['Pan', 2], ['Queso', 2], ['Mantequilla', 1], ['Café', 1], ['Chocolate', 1], ['Avena', 1], ['Banano', 2], ['Harina para arepas', 2]]],
    ['🧼 Aseo del hogar', [['Papel higiénico', 1], ['Jabón de baño', 2], ['Detergente', 1], ['Jabón de loza', 1], ['Crema dental', 1], ['Bolsas de basura', 1]]]
  ];
  var CATALOGO = (function () {
    var vistos = {}, l = [];
    REF_LISTA.map(function (x) { return x[0]; }).concat([].concat.apply([], CANASTA.map(function (c) { return c[1]; }))).forEach(function (n) { if (!vistos[sinT(n)]) { vistos[sinT(n)] = 1; l.push(n); } });
    return l.sort();
  })();
  function catalogoHTML() { return '<datalist id="catalogo">' + CATALOGO.map(function (n) { return '<option value="' + esc(n) + '">'; }).join('') + '</datalist>'; }

  function tendencia(pk, tienda) {
    var h = histPrecios[pk], act = precios[pk] && precios[pk][tienda];
    if (!h || !act) return '';
    var ant = null;
    for (var k = h.length - 1; k >= 0; k--) if (h[k].t === tienda) { ant = h[k]; break; }
    if (!ant || !ant.p) return '';
    var pct = Math.round((act.p - ant.p) / ant.p * 100);
    if (!pct) return '';
    return (pct > 0 ? '📈 subió ' : '📉 bajó ') + Math.abs(pct) + '% (antes ' + cop(ant.p) + ', ' + fechaCorta(ant.f) + ')';
  }

  // Ruta de compra: cada producto donde sale más barato entre tus tiendas
  function rutaHTML() {
    if (tiendas.length < 2) return '';
    var pend = todosLosItems().filter(function (it) { return !hechas[it.k]; });
    if (!pend.length) return '';
    var grupos = {}, sinDato = [], ahorro = 0, comparables = 0;
    pend.forEach(function (it) {
      var p = precios[it.pk], ops = tiendas.filter(function (t) { return p && p[t.n]; });
      if (!ops.length) { sinDato.push(it); return; }
      ops.sort(function (a, b) { return p[a.n].p - p[b.n].p; });
      var mejor = ops[0], peor = ops[ops.length - 1], c = cantDe(it);
      var g = grupos[mejor.n] = grupos[mejor.n] || { items: [], suma: 0 };
      g.items.push(it.prod + (c > 1 ? ' ×' + c : '')); g.suma += p[mejor.n].p * c;
      if (ops.length > 1) { ahorro += (p[peor.n].p - p[mejor.n].p) * c; comparables++; }
    });
    var nombres = Object.keys(grupos);
    if (!nombres.length) return '';
    return '<div class="panel panel-ruta"><h2>🗺️ Dónde comprar cada cosa</h2>' +
      nombres.sort(function (a, b) { return grupos[b].items.length - grupos[a].items.length; }).map(function (n) {
        var g = grupos[n];
        return '<div class="ruta-tienda"><strong>🛒 ' + esc(n) + '</strong> <span class="suave">(' + g.items.length + ') · ' + cop(g.suma) + '</span><br><small>' + g.items.map(esc).join(', ') + '</small></div>';
      }).join('') +
      (sinDato.length ? '<p class="pista izq">Sin precio aún (' + sinDato.length + '): ' + sinDato.slice(0, 8).map(function (it) { return esc(it.prod); }).join(', ') + (sinDato.length > 8 ? '…' : '') + '.</p>' : '') +
      (ahorro > 0 ? '<p class="completa" style="margin:10px 0 0">💰 Comprando cada cosa donde sale más barata ahorras ≈ ' + cop(ahorro) + ' frente a pagar siempre el precio más alto (' + comparables + ' productos comparados).</p>'
        : '<p class="pista izq">Anota el precio de un mismo producto en más de una tienda y aquí verás cuánto te ahorras.</p>') + '</div>';
  }

  function pintarCarrito() {
    var el = document.getElementById('carrito');
    if (!el) return;
    var todos = todosLosItems();
    if (!todos.length) { el.innerHTML = ''; el.hidden = true; return; }
    var marc = todos.filter(function (it) { return hechas[it.k] && !registradas[it.k]; }), suma = 0;
    marc.forEach(function (it) { var d = precioDe(it.pk); if (d) suma += d.p * cantDe(it); });
    el.hidden = false;
    el.innerHTML = '<span>🛒 En el carrito: <strong>' + cop(suma) + '</strong></span><span class="suave">' + marc.length + ' de ' + (todos.length - Object.keys(registradas).filter(function (k) { return registradas[k]; }).length) + ' marcados</span>';
  }

  // Presupuesto del mes
  function mesGastado() { var mes = hoy().slice(0, 7), t = 0; historial.forEach(function (e) { if (e.f.slice(0, 7) === mes) t += e.total || 0; }); return t; }
  function metaHTML() {
    var g = mesGastado(), pct = meta ? Math.round(g / meta * 100) : 0;
    return '<div class="meta-mes"><h3>🎯 Presupuesto del mes</h3>' +
      '<div class="fila-botones"><input class="buscador corto" id="meta-valor" type="number" inputmode="numeric" min="0" step="10000" placeholder="¿Cuánto quieres gastar al mes?" value="' + (meta || '') + '"><button class="boton secundario" data-accion="meta-guardar">Guardar</button></div>' +
      (meta ? '<div class="barra-meta"><div class="' + (pct > 100 ? 'pasado' : '') + '" style="width:' + Math.min(100, pct) + '%"></div></div><p class="pista izq" style="margin:4px 0 0">Llevas ' + cop(g) + ' de ' + cop(meta) + ' (' + pct + '%)' +
        (pct > 100 ? ': te pasaste por ' + cop(g - meta) + '.' : '. Te quedan ' + cop(meta - g) + '.') + '</p>' : '<p class="pista izq" style="margin:4px 0 0">Ponle una meta y te voy diciendo cuánto llevas.</p>') + '</div>';
  }

  // Precios que han cambiado
  function cambiosHTML() {
    var l = [];
    Object.keys(histPrecios).forEach(function (pk) {
      Object.keys(precios[pk] || {}).forEach(function (t) { var tx = tendencia(pk, t); if (tx) l.push({ pk: pk, t: t, tx: tx }); });
    });
    if (!l.length) return '';
    return '<p class="pista izq" style="margin-bottom:2px"><strong>Precios que han cambiado</strong></p><ul class="lista">' + l.slice(0, 6).map(function (x) {
      return '<li><small>' + esc(x.pk) + ' en ' + esc(x.t) + ': ' + x.tx + '</small></li>';
    }).join('') + '</ul>';
  }

  // Lo que sueles comprar y puede que ya no tengas
  function reposicionHTML() {
    if (historial.length < 2) return '';
    var veces = {}, enLista = {};
    todosLosItems().forEach(function (it) { enLista[sinT(it.prod)] = 1; });
    historial.forEach(function (e) { (e.items || []).forEach(function (n) { var k = sinT(n); veces[k] = veces[k] || { n: n, c: 0 }; veces[k].c++; }); });
    var s = Object.keys(veces).map(function (k) { return veces[k]; }).filter(function (x) { return x.c >= 2 && !enLista[sinT(x.n)] && !A().neveraTiene(x.n); }).sort(function (a, b) { return b.c - a.c; }).slice(0, 8);
    if (!s.length) return '';
    return '<div class="panel"><h2>💡 Puede que ya te falten</h2><p class="suave" style="margin:0 0 8px">Los compras seguido y no están en tu nevera. Toca para agregarlos a la lista:</p>' +
      '<div class="filtros" style="margin:0">' + s.map(function (x) { return '<button class="chip" data-accion="canasta" data-valor="' + esc(x.n) + '">+ ' + esc(x.n) + ' <small>(' + x.c + ' veces)</small></button>'; }).join('') + '</div></div>';
  }

  function plantillasHTML() {
    return '<p class="suave" style="margin:12px 0 6px">📋 Listas ya armadas (con cantidades):</p><div class="filtros" style="margin:0">' +
      PLANTILLAS.map(function (pl, k) { return '<button class="chip" data-accion="plantilla" data-valor="' + k + '">' + pl[0] + '</button>'; }).join('') + '</div>' +
      '<p class="pista izq">Las cantidades son por presentación (libra, litro, unidad…). Cámbialas en cada producto.</p>';
  }

  function verCompras() {
    var grupos = listaCompras(), total = 0;
    grupos.forEach(function (g) { total += g.items.length; });
    var enLista = extra.map(function (x) { return sinT(x); });
    A().app.innerHTML = '<a class="volver" href="#/">← Recetas</a>' + ultimaCompraHTML() + '<div id="carrito" class="carrito" hidden></div><div class="mercado' + (enTienda ? ' modo-tienda' : '') + '">' + catalogoHTML() +
      '<div class="panel panel-fija"><h2>🛒 Lista del mercado</h2>' +
        '<div class="fila-botones"><label class="suave" for="ciudad">Ciudad</label><input class="buscador corto" id="ciudad" placeholder="Zipaquirá" value="' + esc(ciudad) + '"></div>' +
        '<div class="fila-botones"><label class="suave" for="tienda-actual">Hoy voy a comprar en</label><select id="tienda-actual"><option value="">— elige una tienda —</option>' +
          tiendas.map(function (t) { return '<option value="' + esc(t.n) + '"' + (t.n === tiendaActual ? ' selected' : '') + '>' + esc(t.n) + (t.zona ? ' (' + esc(t.zona) + ')' : '') + '</option>'; }).join('') + '</select></div>' +
        '<details class="mis-tiendas"' + (tiendas.length ? '' : ' open') + '><summary>Mis tiendas (' + tiendas.length + ')</summary>' +
          (tiendas.length ? '<ul class="lista">' + tiendas.map(function (t, i) { return '<li class="fila-mercado"><span style="flex:1">' + esc(t.n) + (t.zona ? '<small>' + esc(t.zona) + '</small>' : '') + '</span><button class="quitar" data-accion="tienda-quitar" data-valor="' + i + '" aria-label="Quitar ' + esc(t.n) + '">✕</button></li>'; }).join('') + '</ul>' : '') +
          '<p class="suave" style="margin:10px 0 4px">Toca las tiendas donde mercas:</p>' +
          '<div class="filtros" style="margin:0 0 10px">' + TIENDAS_SUGERIDAS.filter(function (s) { return !tiendas.some(function (t) { return t.n === s; }); }).map(function (s) { return '<button class="chip" data-accion="tienda-sugerida" data-valor="' + esc(s) + '">+ ' + esc(s) + '</button>'; }).join('') + '</div>' +
          '<div class="fila-botones"><input class="buscador corto" id="tienda-nombre" placeholder="Otra tienda"><input class="buscador corto" id="tienda-zona" placeholder="Barrio o sector (opcional)"><button class="boton" data-accion="tienda-agregar">Agregar</button></div>' +
          '<p class="pista izq">Ara, D1 y Super Día son las que me nombraste para Zipaquirá. No tengo direcciones ni horarios: escribe el barrio de cada una si quieres distinguirlas.</p>' +
        '</details></div>' +
      '<div class="panel"><h2>➕ Agregar a la lista</h2>' +
        '<div class="fila-botones"><input class="buscador" id="nueva-compra" list="catalogo" autocomplete="off" placeholder="Escribe: leche, huevos, arroz…" style="flex:1;min-width:190px"><button class="boton" data-accion="compras-agregar">Agregar</button></div>' +
        '<div class="fila-botones">' + (Rec ? '<button class="boton secundario" data-accion="compras-dictar">🎤 Dictar</button>' : '') +
          '<button class="boton secundario" data-accion="tiquete-abrir">📷 Leer tiquete</button><input type="file" id="foto-tiquete" accept="image/*" hidden></div>' +
        '<p class="pista izq" id="aviso-mercado">' + (avisoMercado || 'Escribe varias cosas separadas por comas, dicta, o toma una foto al tiquete de una compra: lo leo en tu celular, sin subir la foto a ningún lado. Lo que planees cocinar se suma solo desde el <a href="#/plan">plan de la semana</a>.') + '</p>' +
        '<div id="ocr-resultado"></div>' +
        '<button class="chip" data-accion="canasta-abrir">🧺 Lo de siempre ' + (canastaAbierta ? '▲' : '▼') + '</button>' +
        (canastaAbierta ? CANASTA.map(function (c) {
          return '<div class="grupo-filtro" style="margin-top:10px"><strong style="min-width:28px">' + c[0] + '</strong>' + c[1].map(function (x) {
            return '<button class="chip' + (enLista.indexOf(sinT(x)) >= 0 ? ' activo' : '') + '" data-accion="canasta" data-valor="' + esc(x) + '">' + esc(x) + '</button>';
          }).join('') + '</div>';
        }).join('') : '') + plantillasHTML() + '</div>' +
      (total ? '<div class="panel panel-fija"><div class="fila-botones" style="margin-top:0"><button class="boton" data-accion="compra-terminar">✅ Terminé de comprar' + (porRegistrar().length ? ' (' + porRegistrar().length + ')' : '') + '</button><button class="boton secundario" data-accion="modo-tienda">' + (enTienda ? '↩️ Salir del modo tienda' : '🏪 Estoy en la tienda') + '</button><button class="boton secundario" data-accion="compras-whatsapp">💬 WhatsApp</button><button class="boton secundario" data-accion="compras-compartir">📤 Copiar / compartir</button><button class="boton secundario" data-accion="compras-desmarcar">Desmarcar todo</button><button class="boton secundario" data-accion="compras-vaciar">Borrar lo agregado a mano</button></div>' +
        '<p class="pista izq" id="aviso-compras">' + (tiendaActual ? 'Anota a la derecha lo que pagas en ' + esc(tiendaActual) + '. La próxima vez ya lo sabré.' : 'Elige arriba la tienda donde vas a comprar para poder anotar los precios.') + '</p></div>'
        : '<p class="vacio">Tu lista está vacía. Escribe, dicta, lee un tiquete o toca «Lo de siempre» para empezar.</p>') + rutaHTML() +
      grupos.filter(function (g) { return g.items.length; }).map(function (g) {
        return '<div class="panel panel-lista"><h2>' + g.t + '</h2><ul class="lista">' + g.items.map(function (it) {
          var mio = tiendaActual && precios[it.pk] && precios[it.pk][tiendaActual];
          return '<li class="fila-mercado"><label><input type="checkbox" data-compra="' + esc(it.k) + '"' + (hechas[it.k] ? ' checked' : '') + '><span>' + it.texto +
            '<small>' + (it.de.length ? esc(it.de.join(' · ')) + '<br>' : '') + '<span data-pista="' + esc(it.pk) + '"></span></small></span></label>' +
            '<input class="cant" type="number" inputmode="decimal" min="1" step="1" data-cant="' + esc(it.pk) + '" value="' + cantDe(it) + '" aria-label="Cantidad de ' + esc(it.prod) + '">' +
            '<input class="precio" type="number" inputmode="numeric" min="0" step="50" data-precio="' + esc(it.pk) + '" placeholder="$"' + (mio ? ' value="' + mio.p + '"' : '') + (tiendaActual ? '' : ' disabled') + ' aria-label="Precio de ' + esc(it.prod) + (tiendaActual ? ' en ' + esc(tiendaActual) : '') + '">' +
            (it.extra != null ? '<button class="quitar" data-accion="compras-quitar" data-valor="' + it.extra + '" aria-label="Quitar">✕</button>' : '') + '</li>';
        }).join('') + '</ul></div>';
      }).join('') +
      (total ? '<div class="panel"><h2>💰 ¿Cuánto me cuesta este mercado?</h2><div id="resumen-mercado"></div></div>' : '') + historialHTML() + reposicionHTML() + '</div>';
    avisoMercado = '';
    refrescarPistas();
  }

  function agregarACompras(texto) {
    var nuevos = 0;
    String(texto).split(/\s*(?:,|;|\n|\s+y\s)\s*/).forEach(function (x) {
      x = x.trim().replace(/\.$/, '');
      if (x.length < 2) return;
      x = x.charAt(0).toUpperCase() + x.slice(1);
      if (!extra.some(function (e) { return sinT(e) === sinT(x); })) { extra.push(x); nuevos++; }
    });
    mem.guardar('comprasExtra', extra);
    return nuevos;
  }

  function textoCompras() {
    var out = ['Lista del mercado' + (tiendaActual ? ' — ' + tiendaActual : '') + (ciudad ? ' (' + ciudad + ')' : ''), ''], suma = 0, sinPrecio = 0;
    listaCompras().forEach(function (g) {
      var pend = g.items.filter(function (it) { return !hechas[it.k]; });
      if (!pend.length) return;
      out.push(g.t);
      pend.forEach(function (it) {
        var p = tiendaActual && precios[it.pk] && precios[it.pk][tiendaActual];
        if (p) suma += p.p * cantDe(it); else sinPrecio++;
        out.push('  [ ] ' + it.texto.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&quot;/g, '"') + (cantDe(it) > 1 ? ' ×' + cantDe(it) : '') + (p ? '  ~' + cop(p.p * cantDe(it)) : ''));
      });
      out.push('');
    });
    if (suma) out.push('Total aproximado' + (sinPrecio ? ' (sin ' + sinPrecio + ' productos sin precio)' : '') + ': ' + cop(suma) + ' — precios que yo anoté, pueden haber cambiado.');
    return out.join('\n').trim();
  }

  // ---------------- Leer un tiquete con una foto (Tesseract.js, en el propio celular)
  function cargarTesseract() {
    if (window.Tesseract) return Promise.resolve();
    return new Promise(function (ok, mal) {
      var s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js';
      s.onload = ok;
      s.onerror = function () { mal(new Error('No pude descargar el lector de texto. Revisa tu conexión a internet.')); };
      document.head.appendChild(s);
    });
  }
  function prepararImagen(archivo) {
    return createImageBitmap(archivo).then(function (bmp) {
      var ancho = Math.min(1800, Math.max(bmp.width, 1100)), esc2 = ancho / bmp.width;
      var c = document.createElement('canvas');
      c.width = Math.round(bmp.width * esc2); c.height = Math.round(bmp.height * esc2);
      var x = c.getContext('2d');
      try { x.filter = 'grayscale(1) contrast(1.35)'; } catch (e) { /* sin filtros */ }
      x.drawImage(bmp, 0, 0, c.width, c.height);
      return c;
    });
  }
  var NO_PRODUCTO = /total|subtotal|sub total|iva|impoconsumo|efectivo|cambio|tarjeta|credito|debito|nit\b|factura|recibo|gracias|cajer|fecha|hora|descuento|ahorro|redime|puntos|visa|mastercard|tel[eé]fono|www\.|resoluci|autoriz|^caja|articulos|items|vendedor|nequi|daviplata|propina|redondeo|saldo|pagado|vuelto/i;
  function parsearTiquete(texto) {
    var out = [];
    texto.split(/\n/).forEach(function (linea) {
      var l = linea.replace(/[|_~]/g, ' ').replace(/\s+/g, ' ').trim();
      if (l.length < 5 || NO_PRODUCTO.test(l)) return;
      var m = /(\$?\s*)(\d{1,3}(?:[.,]\d{3})+|\d{3,6})(?:[.,]\d{1,2})?\s*[A-Za-z]?\s*$/.exec(l);
      if (!m) return;
      var precio = parseInt(m[2].replace(/[.,]/g, ''), 10);
      if (!(precio >= 100 && precio <= 900000)) return;
      var nombre = l.slice(0, m.index).replace(/\$/g, ' ')
        .replace(/^\s*\d{4,}\s*/, '')                                    // código de barras
        .replace(/\s+\d+(?:[.,]\d+)?\s*[xX*]\s*\d[\d.,]*\s*$/, '')       // "2 x 1.500"
        .replace(/^\s*\d+\s*[xX*]\s*/, '')                                // "2 x "
        .replace(/[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9 .%/-]/g, ' ').replace(/\s+/g, ' ').trim();
      if ((nombre.match(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]/g) || []).length < 3) return;
      nombre = nombre.toLowerCase();
      out.push({ n: nombre.charAt(0).toUpperCase() + nombre.slice(1), p: precio });
    });
    return out;
  }
  function pintarOCR(estado) {
    var cont = document.getElementById('ocr-resultado');
    if (!cont) return;
    if (!ocr) { cont.innerHTML = ''; return; }
    if (ocr.leyendo) { cont.innerHTML = '<div class="panel ocr"><p style="margin:0">📷 ' + esc(estado || 'Leyendo el tiquete…') + '</p></div>'; return; }
    if (ocr.error) { cont.innerHTML = '<div class="panel ocr"><p style="margin:0">⚠️ ' + esc(ocr.error) + '</p><div class="fila-botones"><button class="boton secundario" data-accion="ocr-cancelar">Cerrar</button></div></div>'; return; }
    cont.innerHTML = '<div class="panel ocr"><h3>Esto fue lo que leí del tiquete</h3>' +
      (ocr.items.length
        ? '<p class="suave">Revisa cada línea: la lectura por foto se equivoca con letras borrosas. Corrige nombres y precios, y desmarca lo que no sirva.</p>' +
          '<div class="fila-botones"><label class="suave" for="ocr-tienda">Tienda de este tiquete</label><select id="ocr-tienda"><option value="">— elige —</option>' +
            tiendas.map(function (t) { return '<option value="' + esc(t.n) + '"' + (t.n === (ocr.tienda || tiendaActual) ? ' selected' : '') + '>' + esc(t.n) + '</option>'; }).join('') + '</select></div>' +
          ocr.items.map(function (it, i) {
            return '<div class="ocr-fila"><input type="checkbox" data-ocr-ok="' + i + '" checked aria-label="Usar esta línea"><input class="buscador" data-ocr-nombre="' + i + '" value="' + esc(it.n) + '"><input class="precio" type="number" inputmode="numeric" data-ocr-precio="' + i + '" value="' + it.p + '"></div>';
          }).join('') +
          '<div class="fila-botones"><button class="boton" data-accion="ocr-guardar">Guardar precios y agregar a la lista</button><button class="boton secundario" data-accion="ocr-cancelar">Descartar</button></div>'
        : '<p>No pude encontrar productos con precio en la foto. Prueba con más luz, el tiquete bien estirado y de frente.</p><div class="fila-botones"><button class="boton secundario" data-accion="ocr-cancelar">Cerrar</button></div>') +
      '<details><summary>Ver el texto que leí</summary><pre class="ocr-texto">' + esc(ocr.texto || '') + '</pre></details></div>';
  }
  function leerTiquete(archivo) {
    ocr = { leyendo: true };
    pintarOCR('Preparando la foto…');
    prepararImagen(archivo).then(function (lienzo) {
      pintarOCR('Descargando el lector de texto (solo la primera vez)…');
      return cargarTesseract().then(function () {
        return Tesseract.recognize(lienzo, 'spa', { logger: function (m) { if (m.status === 'recognizing text') pintarOCR('Leyendo el tiquete… ' + Math.round(m.progress * 100) + ' %'); } });
      });
    }).then(function (res) {
      ocr = { items: parsearTiquete(res.data.text), texto: res.data.text, tienda: tiendaActual };
      pintarOCR();
    }).catch(function (e) {
      ocr = { error: (e && e.message) || 'No pude leer la foto.' };
      pintarOCR();
    });
  }
  function guardarOCR() {
    var tienda = (document.getElementById('ocr-tienda') || {}).value, guardados = 0, nuevos = 0, comprados = [], totalTiquete = 0;
    if (!tienda) { avisoOCR('Elige primero la tienda de este tiquete.'); return; }
    ocr.items.forEach(function (it, i) {
      var ok = document.querySelector('[data-ocr-ok="' + i + '"]'), nom = document.querySelector('[data-ocr-nombre="' + i + '"]'), pr = document.querySelector('[data-ocr-precio="' + i + '"]');
      if (!ok || !ok.checked || !nom || !pr) return;
      var nombre = nom.value.trim(), valor = parseInt(pr.value, 10), pk = pkDe(nombre);
      if (!nombre || !(valor > 0) || !pk) return;
      guardarPrecio(pk, tienda, valor); guardados++;
      comprados.push(nombre); totalTiquete += valor;
      if (!extra.some(function (e) { return pkDe(e) === pk; })) { extra.push(nombre); nuevos++; }
    });
    mem.guardar('comprasExtra', extra);
    if (tiendas.every(function (t) { return t.n !== tienda; })) { tiendas.push({ n: tienda, zona: '' }); mem.guardar('tiendas', tiendas); }
    tiendaActual = tienda; mem.guardar('tiendaActual', tiendaActual);
    ocr = null;
    if (comprados.length) {
      // Lo que sale en un tiquete ya se compró: queda marcado, se suma al historial y pasa a la nevera
      comprados.forEach(function (n) { var k = 'extra§' + n; hechas[k] = true; registradas[k] = true; });
      mem.guardar('comprasHechas', hechas);
      var ent = { f: hoy(), tienda: tienda, total: totalTiquete, n: comprados.length, items: comprados, mio: comprados.length, ref: 0, sin: 0 };
      historial.unshift(ent); historial = historial.slice(0, 80); guardarHistorial();
      ultimaCompra = { e: ent, nuevos: A().neveraDesdeTexto(comprados) };
    }
    avisoMercado = '✅ Guardé ' + guardados + (guardados === 1 ? ' precio' : ' precios') + ' de ' + tienda + (nuevos ? ' y agregué ' + nuevos + ' a la lista' : '') + '.';
    verCompras();
  }
  function avisoOCR(t) { var el = document.querySelector('#ocr-resultado .panel'); if (el) { var p = el.querySelector('.aviso-ocr') || el.insertBefore(document.createElement('p'), el.firstChild.nextSibling); p.className = 'aviso-ocr nota error'; p.textContent = t; } }

  // ================================================================ APRENDER: técnicas, glosario y reto semanal
  var TECNICAS = [
    { id: 'cuchillo', e: '🔪', t: 'Cortar sin cortarte', r: 'La forma de agarrar el cuchillo y la comida importa más que la velocidad.',
      p: ['Pon un paño húmedo debajo de la tabla para que no se mueva.', 'Agarra el cuchillo por el mango pellizcando la hoja con pulgar e índice: tendrás más control.', 'La otra mano va en "garra": dedos doblados hacia adentro, y los nudillos guían la hoja.', 'Crea siempre una base plana: corta la verdura por la mitad y apoya el lado plano.', 'El cuchillo avanza hacia adelante y abajo, como un balancín; no se aplasta hacia abajo.'],
      mal: [['Los trozos me quedan de todos los tamaños', 'Corta primero en tiras iguales y luego gira para hacer los cubos. El tamaño parejo hace que todo se cocine al tiempo.'], ['Tengo que hacer mucha fuerza', 'El cuchillo no tiene filo. Uno sin filo es más peligroso que uno afilado, porque resbala.']], rec: ['pico-de-gallo', 'guacamole', 'ensalada-fresca'] },
    { id: 'sofreir', e: '🧅', t: 'Sofreír: la base de casi todo', r: 'Cocinar cebolla, ajo y tomate despacio en un poco de grasa para construir sabor.',
      p: ['Fuego medio y una cucharada de aceite: debe sonar suave, no fuerte.', 'Primero la cebolla con una pizca de sal (la sal le saca el agua y evita que se queme).', 'Cuando esté transparente, entra el ajo: solo 30 segundos.', 'Luego el tomate, hasta que se deshaga y el aceite brille en los bordes.', 'Las especias secas se agregan aquí, para que se tuesten un momento en el aceite.'],
      mal: [['El ajo me quedó amargo', 'Se quemó. Entra siempre después de la cebolla, y si se pone café oscuro, es mejor botarlo.'], ['La cebolla se doró en vez de ablandarse', 'El fuego estaba muy alto. Baja y agrega una cucharada de agua.']], rec: ['lentejas', 'carne-molida', 'pasta-tomate'] },
    { id: 'dorar', e: '🥩', t: 'Dorar y sellar', r: 'Ese color café dorado es sabor. Se logra con calor, superficie seca y paciencia.',
      p: ['Seca la carne o el pescado con papel de cocina.', 'Calienta bien la sartén antes de poner nada: una gota de agua debe chisporrotear.', 'No llenes la sartén: deja espacio entre las piezas o cocina en tandas.', 'No muevas la pieza hasta que se despegue sola.', 'Deja reposar la carne unos minutos antes de cortarla.'],
      mal: [['La carne soltó agua y quedó gris', 'Sartén fría o demasiado llena. La próxima vez, menos piezas y más calor.'], ['Se pegó a la sartén', 'Intentaste voltearla antes de tiempo. Cuando se forma la costra, se suelta sola.']], rec: ['pollo-plancha', 'pescado-ajillo', 'bistec-de-res-al-ajo-y-limon'] },
    { id: 'hervir', e: '♨️', t: 'Hervir fuerte o hervir suave', r: 'No es lo mismo: cada cosa pide su tipo de hervor.',
      p: ['Hervor fuerte (burbujas grandes): para pasta y para blanquear verduras.', 'Hervor suave (burbujitas lentas): para caldos, guisos, legumbres y huevos.', 'Para pasar de uno a otro, baja el fuego y deja la tapa corrida.', 'Las papas y las legumbres empiezan en agua fría; la pasta y las verduras verdes, en agua ya hirviendo.'],
      mal: [['El caldo me quedó turbio', 'Hirvió muy fuerte. Los caldos se hacen a fuego bajo y quitando la espuma.'], ['La carne del guiso quedó dura', 'Hervor demasiado fuerte o poco tiempo. Fuego bajo y más paciencia.']], rec: ['sopa-pollo', 'lentejas'] },
    { id: 'arroz', e: '🍚', t: 'Arroz que queda suelto', r: 'Proporción correcta, no revolver y dejar que el vapor termine el trabajo.',
      p: ['Lava el arroz hasta que el agua salga casi clara.', 'Regla general: 1 taza de arroz por 2 de agua, con la misma taza.', 'Sofríelo un minuto en aceite antes de echar el agua.', 'Después de agregar el agua, no se revuelve más.', 'Cuando el agua baje al nivel del arroz: tapa, fuego mínimo y 15 minutos sin destapar.'],
      mal: [['Quedó masudo', 'Lo revolviste mientras se cocinaba, o tenía demasiada agua.'], ['Quedó duro', 'Poca agua o destapaste antes de tiempo. Rocía 3 cucharadas de agua caliente y tapa 5 minutos más.'], ['Se quemó abajo', 'Fuego muy alto en la etapa tapada. Debe ser el mínimo.']], rec: ['arroz-blanco', 'arroz-rojo-mexicano', 'yakimeshi-arroz-frito-japones'] },
    { id: 'pasta', e: '🍝', t: 'Pasta al dente', r: 'Agua abundante, sal de verdad y terminar la pasta dentro de la salsa.',
      p: ['Usa mucha agua: 1 litro por cada 100 g de pasta.', 'Sala el agua cuando ya hierva: debe saber a sopa bien sazonada.', 'Revuelve durante el primer minuto, que es cuando se pega.', 'Sácala un minuto antes de lo que dice el paquete.', 'Guarda una taza del agua de cocción y termina la pasta en la sartén de la salsa.'],
      mal: [['La pasta quedó pegada', 'Poca agua o no revolviste al principio. El aceite en el agua no ayuda.'], ['La salsa resbala y no se pega', 'Enjuagaste la pasta. No se enjuaga: el almidón es lo que agarra la salsa.']], rec: ['pasta-tomate', 'espaguetis-a-la-carbonara-autentica'] },
    { id: 'emulsion', e: '🥗', t: 'Emulsionar: unir agua y aceite', r: 'Vinagretas y mayonesas son lo mismo: aceite repartido en gotas diminutas dentro de un líquido.',
      p: ['La proporción base de una vinagreta es 3 partes de aceite por 1 de ácido (limón o vinagre).', 'Disuelve primero la sal en el ácido: en el aceite no se disuelve.', 'Agrega el aceite poco a poco mientras bates, o agita todo en un frasco cerrado.', 'Una cucharadita de mostaza o miel ayuda a que no se separe.'],
      mal: [['Se me separó', 'Es normal con el tiempo: vuelve a agitar. Si se separa enseguida, le falta un emulsionante (mostaza).'], ['Quedó muy ácida', 'Agrega más aceite o una pizca de miel o azúcar.']], rec: ['ensalada-fresca', 'gazpacho'] },
    { id: 'horno', e: '🔥', t: 'Hornear sin miedo', r: 'El horno es exacto: temperatura correcta, medidas correctas y no abrir la puerta.',
      p: ['Precalienta siempre: el horno tarda unos 15 minutos en llegar a la temperatura.', 'Usa la rejilla del centro, salvo que la receta diga otra cosa.', 'En tortas, mide con taza al ras y no batas de más al unir harina y líquidos.', 'No abras la puerta en los primeros dos tercios del tiempo.', 'Comprueba con un palillo: limpio para tortas, con migas húmedas para brownies.'],
      mal: [['La torta se hundió en el centro', 'Abriste el horno antes de tiempo o le faltó cocción.'], ['Quedó seca', 'Se pasó de tiempo o tenía harina de más.'], ['Dorada por fuera y cruda por dentro', 'Temperatura muy alta. Baja 20 °C y cúbrela con papel aluminio.']], rec: ['brownies', 'torta-de-vainilla', 'pizza-margarita'] },
    { id: 'legumbres', e: '🫘', t: 'Cocer legumbres', r: 'Remojo, fuego bajo y sal al final.',
      p: ['Revisa los granos sobre un plato y saca piedritas.', 'Fríjoles y garbanzos se remojan toda la noche; las lentejas no lo necesitan.', 'Bota el agua del remojo y cocina con agua nueva.', 'Fuego bajo, con la tapa corrida, para que no se rompan.', 'La sal va cuando ya están casi blandos. Si falta agua, que sea siempre caliente.'],
      mal: [['Llevan horas y siguen duros', 'Son granos viejos o les faltó remojo. La olla a presión ayuda.'], ['Se deshicieron', 'Hervor demasiado fuerte.']], rec: ['lentejas', 'caraotas-negras', 'feijao-frijoles-negros-brasilenos'] },
    { id: 'freir', e: '🍤', t: 'Freír y que quede crujiente', r: 'Aceite a la temperatura correcta y pocas piezas a la vez.',
      p: ['Prueba el aceite con una miga de pan: debe burbujear y dorarse en unos 20 segundos.', 'Seca muy bien lo que vas a freír: el agua hace saltar el aceite.', 'Fríe en tandas pequeñas para que el aceite no se enfríe.', 'Escurre sobre rejilla en lugar de papel: así no se ablanda por debajo.', 'Nunca dejes el aceite caliente sin vigilancia, y si se prende, tápalo: jamás le eches agua.'],
      mal: [['Quedó grasoso', 'El aceite estaba frío o pusiste demasiadas piezas.'], ['Se quemó por fuera y quedó crudo por dentro', 'Aceite demasiado caliente o piezas muy gruesas.']], rec: ['tequenos', 'churros-con-chocolate', 'tempura-de-verduras-y-camarones'] },
    { id: 'sal', e: '🧂', t: 'Salar y probar', r: 'La diferencia entre comida plana y comida rica casi siempre es sal y ácido.',
      p: ['Sala por etapas, de a poco, no todo al final.', 'Prueba siempre antes de servir.', 'Si algo sabe "plano", le falta sal. Si sabe "pesado", le falta ácido (limón o vinagre).', 'Sala desde unos 20 cm de altura para que caiga parejo.'],
      mal: [['Me pasé de sal', 'En sopas y guisos, agrega más líquido o una papa en trozos. Un toque de limón o azúcar disimula.'], ['Sabe a poco aunque le eché sal', 'Prueba con unas gotas de limón: muchas veces lo que falta es acidez.']], rec: ['guacamole', 'sopa-pollo'] }
  ];
  var GLOSARIO = [
    ['Al dente', 'Pasta o verdura cocida pero firme al morder.'], ['Baño maría', 'Cocinar un recipiente dentro de otro con agua caliente, para calentar suave y parejo.'],
    ['Blanquear', 'Hervir algo unos segundos y pasarlo a agua con hielo para detener la cocción.'], ['Confitar', 'Cocinar despacio, sumergido en grasa a baja temperatura.'],
    ['Cuajar', 'Cuando un líquido (huevo, flan) se vuelve sólido con el calor.'], ['Desglasar', 'Echar líquido a una sartén caliente para despegar lo dorado del fondo.'],
    ['Desmechar', 'Separar una carne cocida en hilos, con dos tenedores.'], ['Emulsionar', 'Unir dos líquidos que no se mezclan solos, como aceite y vinagre.'],
    ['Escaldar', 'Verter líquido hirviendo sobre un ingrediente, o sumergirlo un instante.'], ['Espumar', 'Quitar con una cuchara la espuma que sube en un caldo.'],
    ['Glasear', 'Cubrir con una capa brillante de salsa reducida.'], ['Gratinar', 'Dorar la superficie en el horno, normalmente con queso.'],
    ['Hervor suave', 'Burbujas pequeñas y lentas, sin que el líquido salte.'], ['Juliana', 'Corte en tiras largas y delgadas.'],
    ['Marinar', 'Dejar un alimento en un líquido con sabor antes de cocinarlo.'], ['Mise en place', 'Tener todos los ingredientes medidos y cortados antes de empezar a cocinar.'],
    ['Movimientos envolventes', 'Mezclar desde el fondo hacia arriba, con suavidad, para no sacar el aire.'], ['Nacarar', 'Sofreír el arroz crudo hasta que se vea brillante y opaco.'],
    ['Pochar', 'Cocinar despacio en grasa o líquido hasta ablandar, sin dorar.'], ['Punto de nieve', 'Claras batidas hasta quedar firmes y blancas.'],
    ['Reducir', 'Hervir un líquido destapado para que se evapore y se concentre.'], ['Rehogar', 'Cocinar a fuego bajo con poca grasa para que suelte sus jugos.'],
    ['Reposar', 'Dejar la comida quieta después de cocinarla para que los jugos se asienten.'], ['Roux', 'Mezcla de harina y mantequilla cocidas, que sirve para espesar.'],
    ['Saltear', 'Cocinar rápido a fuego alto con poca grasa, moviendo todo el tiempo.'], ['Sellar', 'Dorar la superficie de una carne a fuego alto.'],
    ['Sofrito', 'Base de cebolla, ajo y tomate cocinados despacio.'], ['Tamizar', 'Pasar harina o cocoa por un colador para quitar grumos.'],
    ['Templar', 'Igualar temperaturas poco a poco para que algo no se corte.'], ['Brunoise', 'Corte en cubitos muy pequeños.']
  ];
  var RETOS = [
    ['Cocina un huevo perfecto', 'Huevos cremosos, sacados antes de que se sequen.', 'huevos-pericos'], ['Arroz suelto a la primera', 'Sin revolver y sin destapar.', 'arroz-blanco'],
    ['Haz una vinagreta desde cero', 'Tres partes de aceite por una de ácido.', 'ensalada-fresca'], ['Tu propia salsa de tomate', 'Sin frascos: tomate, ajo y paciencia.', 'pasta-tomate'],
    ['Dora una proteína a la plancha', 'Seca, sartén caliente y sin moverla.', 'pollo-plancha'], ['Hornea algo dulce', 'Mide con cuidado y no abras el horno.', 'brownies'],
    ['Una sopa desde el caldo', 'Empezando en agua fría.', 'sopa-pollo'], ['Un plato de otro país', 'Sal de lo de siempre.', 'pollo-teriyaki'],
    ['Haz tu primer rollo de sushi', 'El secreto está en el arroz.', 'maki-de-pepino'], ['Amasa algo con tus manos', 'Pizza casera con masa hecha por ti.', 'pizza-margarita']
  ];
  function retoActual() { var w = Math.floor(Date.now() / 604800000); return { i: w % RETOS.length, clave: 'r' + w, r: RETOS[w % RETOS.length] }; }
  function verAprender(partes) {
    var app = A().app, lec = TECNICAS.filter(function (t) { return t.id === partes[1]; })[0];
    if (lec) {
      if (tecnicasVistas.indexOf(lec.id) < 0) { tecnicasVistas.push(lec.id); mem.guardar('tecnicas', tecnicasVistas); }
      var recs = lec.rec.map(function (id) { return A().buscarReceta(id); }).filter(Boolean);
      app.innerHTML = '<a class="volver" href="#/aprender">← Aprender</a><div class="panel"><h2>' + lec.e + ' ' + lec.t + '</h2><p class="suave">' + lec.r + '</p>' +
        '<ol class="lista-pasos">' + lec.p.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ol></div>' +
        '<div class="panel"><h2>Si te salió mal</h2>' + lec.mal.map(function (m) { return '<div class="nota error"><b>' + m[0] + '</b>' + m[1] + '</div>'; }).join('') + '</div>' +
        (recs.length ? '<h2 class="titulo-seccion">Practícalo con estas recetas</h2><div class="rejilla">' + recs.map(function (r, i) { return A().tarjetaHTML(r, i, ''); }).join('') + '</div>' : '');
      return;
    }
    var reto = retoActual(), rr = A().buscarReceta(reto.r[2]), hecho = retosHechos.indexOf(reto.clave) >= 0;
    app.innerHTML = '<a class="volver" href="#/">← Recetas</a>' +
      '<div class="panel reto"><small class="capitulo">Reto de esta semana</small><h2>🏆 ' + reto.r[0] + '</h2><p>' + reto.r[1] + '</p>' +
      '<div class="fila-botones">' + (rr ? '<a class="boton" href="#/receta/' + rr.id + '">Ir a la receta: ' + rr.nombre + '</a>' : '') +
      '<button class="boton secundario" data-accion="reto-hecho" data-valor="' + reto.clave + '">' + (hecho ? '✅ Reto cumplido' : 'Marcar como cumplido') + '</button></div></div>' +
      '<h2 class="titulo-seccion">Técnicas</h2><p class="suave">Lecciones cortas para leer en dos minutos. Lo que aprendes aquí sirve para cientos de recetas.</p><div class="rejilla">' + TECNICAS.map(function (t) {
        var v = tecnicasVistas.indexOf(t.id) >= 0;
        return '<a class="tarjeta leccion" href="#/aprender/' + t.id + '"><div class="cuerpo"><div class="leccion-emoji">' + t.e + '</div><h3>' + t.t + '</h3><p>' + t.r + '</p><div class="datos"><span>' + (v ? '✅ Leída' : '📖 ' + t.p.length + ' claves') + '</span></div></div></a>';
      }).join('') + '</div>' +
      '<h2 class="titulo-seccion">Glosario</h2><input class="buscador" id="busca-glosario" type="search" placeholder="Buscar un término: reducir, pochar, al dente…"><div class="panel" id="lista-glosario" style="margin-top:14px"></div>';
    var pintar = function () {
      var q = sinT(document.getElementById('busca-glosario').value.trim());
      var l = GLOSARIO.filter(function (g) { return !q || sinT(g[0] + ' ' + g[1]).indexOf(q) >= 0; }).sort(function (a, b) { return a[0].localeCompare(b[0]); });
      document.getElementById('lista-glosario').innerHTML = l.length ? l.map(function (g) { return '<div class="sust"><strong>' + g[0] + '</strong><span>' + g[1] + '</span></div>'; }).join('') : '<p class="vacio">No tengo ese término.</p>';
    };
    document.getElementById('busca-glosario').addEventListener('input', pintar);
    pintar();
  }

  // ================================================================ PERFIL: crear usuario en un paso
  function omitida() { try { return sessionStorage.getItem('omitirBienvenida') === '1'; } catch (e) { return false; } }
  function avataresHTML(sel) {
    return '<div class="avatares" role="group" aria-label="Elige un avatar">' + PERFIL.AVATARES.map(function (a) {
      return '<button type="button" class="avatar' + (a === sel ? ' sel' : '') + '" data-accion="avatar" data-valor="' + a + '" aria-label="Avatar ' + a + '">' + a + '</button>';
    }).join('') + '</div>';
  }
  function avatarElegido(contenedor, defecto) {
    var s = contenedor && contenedor.querySelector('.avatar.sel');
    return s ? s.dataset.valor : defecto;
  }
  // En la portada: si todavía no hay nombre, una tarjeta de bienvenida; si ya hay, un saludo.
  function bienvenidaHTML() {
    var yo = PERFIL.actual();
    if (yo.n) return '<p class="saludo">Hola, <strong>' + esc(yo.n) + '</strong> ' + yo.e + '</p>';
    if (omitida()) return '';
    return '<section class="bienvenida" id="bienvenida"><h2>👋 ¡Hola! ¿Cómo te llamas?</h2>' +
      '<p>Así guardo tus favoritos, tu plan de la semana, tus compras y lo que has cocinado. No pido correo ni contraseña.</p>' +
      '<div class="fila-nombre"><input class="buscador" id="nombre-nuevo" maxlength="24" placeholder="Tu nombre" autocomplete="given-name"><button class="boton" data-accion="perfil-crear">Empezar</button></div>' +
      avataresHTML(PERFIL.AVATARES[0]) +
      '<button class="chip" data-accion="perfil-omitir">Ahora no</button></section>';
  }
  function verPerfil() {
    var yo = PERFIL.actual(), todos = PERFIL.todos();
    A().app.innerHTML = '<a class="volver" href="#/">← Recetas</a>' +
      '<div class="panel"><h2>👤 Mi perfil</h2><p class="suave">Elige quién está cocinando. Cada persona tiene sus propios favoritos, plan, compras y progreso.</p>' +
        todos.map(function (p) {
          return '<div class="perfil-fila' + (p.id === yo.id ? ' actual' : '') + '"><span class="grande">' + (p.n ? p.e : '👤') + '</span><div class="quien"><strong>' + esc(p.n || 'Sin nombre') + '</strong></div>' +
            (p.id !== yo.id ? '<button class="boton secundario" data-accion="perfil-usar" data-id="' + esc(p.id) + '">Usar este perfil</button>' : '') +
            (todos.length > 1 ? '<button class="boton secundario" data-accion="perfil-borrar" data-id="' + esc(p.id) + '" aria-label="Borrar el perfil de ' + esc(p.n || 'sin nombre') + '">🗑</button>' : '') + '</div>';
        }).join('') + '</div>' +
      '<div class="panel" id="panel-editar"><h2>✏️ ' + (yo.n ? 'Cambiar mi nombre o avatar' : 'Ponerle nombre a mi perfil') + '</h2>' +
        '<div class="fila-nombre"><input class="buscador" id="perfil-editar-nombre" maxlength="24" placeholder="Tu nombre" value="' + esc(yo.n) + '"><button class="boton" data-accion="perfil-guardar">Guardar</button></div>' + avataresHTML(yo.e) + '</div>' +
      '<div class="panel" id="panel-otra"><h2>➕ Agregar a otra persona</h2><p class="suave">Para que más gente de tu casa use este mismo celular, cada quien con lo suyo.</p>' +
        '<div class="fila-nombre"><input class="buscador" id="nombre-otro" maxlength="24" placeholder="Nombre"><button class="boton" data-accion="perfil-agregar">Agregar y entrar</button></div>' + avataresHTML(PERFIL.AVATARES[(todos.length + 1) % PERFIL.AVATARES.length]) + '</div>' +
      '<div class="panel"><h2>🎨 Tema</h2><div class="filtros" style="margin:0">' + [['auto', '🌓 Automático'], ['claro', '☀️ Claro'], ['oscuro', '🌙 Oscuro']].map(function (t) {
        return '<button class="chip grande' + (PERFIL.tema() === t[0] ? ' activo' : '') + '" data-accion="tema-elegir" data-valor="' + t[0] + '">' + t[1] + '</button>';
      }).join('') + '</div><p class="pista izq">«Automático» sigue el modo claro u oscuro de tu celular. También puedes cambiarlo con el botón de arriba.</p></div>' +
      '<div class="panel"><h2>💾 Llévate tus datos</h2><p class="suave">Tus datos están solo en este celular y no hay contraseña. Para usarlos en otro celular (o guardarlos por si borras el navegador), copia tu código y pégalo allá.</p>' +
        '<div class="fila-botones"><button class="boton" data-accion="perfil-exportar">📋 Copiar mi código</button></div>' +
        '<textarea class="codigo" id="codigo-salida" readonly placeholder="Aquí aparece tu código…"></textarea>' +
        '<h3 style="margin:16px 0 6px;font-size:1rem">¿Ya tienes un código?</h3><textarea class="codigo" id="codigo-entrada" placeholder="Pega aquí tu código…"></textarea>' +
        '<div class="fila-botones"><button class="boton secundario" data-accion="perfil-importar">Recuperar mis datos</button></div><p class="pista izq" id="aviso-perfil"></p></div>' + offlineHTML();
  }
  // ---- Modo sin internet: guardar todas las fotos en el celular
  var CACHE_SW = 'paso-a-paso-v7'; // el mismo nombre que usa sw.js
  function offlineHTML() {
    var hay = 'caches' in window;
    return '<div class="panel"><h2>📴 Usar sin internet</h2><p class="suave">Las recetas ya funcionan sin conexión. De las fotos solo se guardan las que ya viste; aquí puedes bajarlas todas (unos 30 MB, mejor con wifi).</p>' +
      (hay ? '<div class="fila-botones"><button class="boton secundario" data-accion="offline-bajar">⬇️ Guardar todas las fotos</button></div>' : '<p class="pista izq">Tu navegador no permite guardar para usar sin internet.</p>') +
      '<p class="pista izq" id="aviso-offline"></p></div>';
  }
  var bajando = false;
  function bajarFotos() {
    var aviso = function (t) { var el = document.getElementById('aviso-offline'); if (el) el.textContent = t; };
    if (bajando || !('caches' in window)) return;
    if (!navigator.onLine) { aviso('Ahora no hay internet. Hazlo cuando tengas conexión.'); return; }
    bajando = true;
    var claves = typeof CREDITOS !== 'undefined' ? Object.keys(CREDITOS) : [], hechas = 0, malas = 0, i = 0;
    caches.open(CACHE_SW).then(function (c) {
      function uno() {
        if (i >= claves.length) return Promise.resolve();
        var url = 'fotos/' + claves[i++] + '.jpg';
        return c.match(url).then(function (ya) {
          return ya || fetch(url).then(function (r) { if (!r.ok) throw 0; return c.put(url, r); });
        }).then(function () { hechas++; }, function () { malas++; }).then(function () {
          aviso('Guardando fotos… ' + (hechas + malas) + ' de ' + claves.length);
          return uno();
        });
      }
      return Promise.all([uno(), uno(), uno(), uno()]);
    }).then(function () {
      aviso(malas ? '✅ Guardé ' + hechas + ' fotos; ' + malas + ' no se pudieron bajar. Inténtalo otra vez.' : '✅ Listo: ya tienes las ' + hechas + ' fotos para usar sin internet.');
    }, function () { aviso('No pude guardar las fotos (¿poco espacio?).'); }).then(function () { bajando = false; });
  }
  // Aviso cuando se pierde la conexión
  function avisoRed() {
    var el = document.getElementById('aviso-red');
    if (!el) { el = document.createElement('div'); el.id = 'aviso-red'; el.setAttribute('role', 'status'); document.body.appendChild(el); }
    el.textContent = navigator.onLine ? '' : '📴 Sin internet: puedes seguir cocinando con lo que ya está guardado.';
    el.hidden = navigator.onLine;
  }
  window.addEventListener('online', avisoRed); window.addEventListener('offline', avisoRed);
  if (!navigator.onLine) setTimeout(avisoRed, 0);
  function avisoPerfil(t) { var el = document.getElementById('aviso-perfil'); if (el) el.textContent = t; }

  // ================================================================ MIS RECETAS (las escribe la persona)
  var misRecetas = mem.leer('misRecetas', []);
  var UNI = {
    g: 'g', gr: 'g', gramo: 'g', gramos: 'g', kg: 'kg', kilo: 'kilo|kilos', kilos: 'kilo|kilos', ml: 'ml', l: 'l', litro: 'litro|litros', litros: 'litro|litros',
    libra: 'libra|libras', libras: 'libra|libras', lb: 'libra|libras', taza: 'taza|tazas', tazas: 'taza|tazas', cucharada: 'cucharada|cucharadas', cucharadas: 'cucharada|cucharadas',
    cucharadita: 'cucharadita|cucharaditas', cucharaditas: 'cucharadita|cucharaditas', lata: 'lata|latas', latas: 'lata|latas', paquete: 'paquete|paquetes', paquetes: 'paquete|paquetes',
    pizca: 'pizca|pizcas', pizcas: 'pizca|pizcas', vaso: 'vaso|vasos', vasos: 'vaso|vasos'
  };
  var FRAC = { '½': 0.5, '¼': 0.25, '¾': 0.75, '⅓': 1 / 3 };
  function aNumero(t) {
    t = t.trim();
    if (FRAC[t] != null) return FRAC[t];
    var m = /^(\d+)\s+(\d+)\/(\d+)$/.exec(t); if (m) return +m[1] + (+m[2]) / (+m[3]);
    m = /^(\d+)\/(\d+)$/.exec(t); if (m) return (+m[1]) / (+m[2]);
    return parseFloat(t.replace(',', '.'));
  }
  // "2 tazas de arroz" -> {c:2, u:'taza|tazas', n:'de arroz'}; "sal al gusto" -> {c:null, n:'sal al gusto'}
  function ingredienteDe(linea) {
    var s = linea.replace(/^[-•*\s]+/, '').trim();
    var m = /^(\d+\s+\d+\/\d+|\d+\/\d+|\d+(?:[.,]\d+)?|[½¼¾⅓])\s*(.*)$/.exec(s);
    if (!m) return { c: null, u: '', n: esc(s) };
    var c = aNumero(m[1]), resto = m[2], u = '', partes = resto.split(/\s+/), clave = sinT(partes[0] || '');
    if (UNI[clave]) { u = UNI[clave]; resto = partes.slice(1).join(' '); resto = resto.replace(/^de\s+/i, ''); resto = 'de ' + resto; }
    return { c: c || 1, u: u, n: esc(resto) };
  }
  function pasoDe(linea, i) {
    var s = linea.replace(/^\s*(?:\d+[.)]\s*|[-•*]\s*)/, '').trim(), p = { t: 'Paso ' + (i + 1), d: esc(s) };
    var h = /(\d+)\s*horas?/.exec(sinT(s)), mi = /(\d+)\s*(?:min|minutos)/.exec(sinT(s));
    var min = (h ? +h[1] * 60 : 0) + (mi ? +mi[1] : 0);
    if (min > 0 && min <= 240) p.m = min;
    return p;
  }
  function construirMia(f, id) {
    var ings = f.ingredientes.split('\n').filter(function (x) { return x.trim(); }).map(ingredienteDe);
    var pasos = f.pasos.split('\n').filter(function (x) { return x.trim(); }).map(pasoDe);
    return {
      id: id, nombre: esc(f.nombre.trim()), emoji: (f.emoji || '🍲').trim().slice(0, 4), categoria: 'Mis recetas', dificultad: 'Fácil',
      prep: Math.max(0, +f.prep || 0), coccion: Math.max(0, +f.coccion || 0), porciones: Math.max(1, +f.porciones || 2),
      descripcion: esc(f.descripcion.trim() || 'Una receta hecha por mí.'), ingredientes: ings, utensilios: [], pasos: pasos, mia: true,
      _f: f
    };
  }
  function cargarMias() {
    misRecetas.forEach(function (f) {
      if (!f || !f.nombre || !f.ingredientes || !f.pasos || typeof RECETAS === 'undefined') return;
      RECETAS.push(construirMia(f, f.id));
    });
  }
  cargarMias();

  var editandoMia = null; // null = lista, -1 = nueva, n = índice
  function verMisRecetas() {
    var h = '<a class="volver" href="#/">← Recetas</a><div class="panel"><h2>✍️ Mis recetas</h2>' +
      '<p class="suave">Escribe tus recetas de siempre y úsalas como las demás: modo cocinar, temporizadores, plan y lista del mercado. Quedan guardadas en este celular, en tu perfil.</p>';
    if (editandoMia == null) {
      h += '<div class="fila-botones"><button class="boton" data-accion="mia-nueva">➕ Escribir una receta</button></div></div>';
      h += misRecetas.length ? '<div class="panel"><ul class="lista">' + misRecetas.map(function (f, i) {
        return '<li class="fila-mercado"><a href="#/receta/' + esc(f.id) + '" style="flex:1;text-decoration:none;color:inherit">' + esc(f.emoji || '🍲') + ' <strong>' + esc(f.nombre) + '</strong></a>' +
          '<button class="chip" data-accion="mia-editar" data-valor="' + i + '">Editar</button><button class="quitar" data-accion="mia-borrar" data-valor="' + i + '" aria-label="Borrar ' + esc(f.nombre) + '">🗑</button></li>';
      }).join('') + '</ul></div>' : '<p class="vacio">Todavía no has escrito ninguna. Toca «Escribir una receta» para empezar.</p>';
      A().app.innerHTML = h;
      return;
    }
    var f = editandoMia >= 0 ? misRecetas[editandoMia] : { nombre: '', emoji: '🍲', porciones: 2, prep: 10, coccion: 20, descripcion: '', ingredientes: '', pasos: '' };
    h += '</div><div class="panel mia-form"><h2>' + (editandoMia >= 0 ? 'Editar receta' : 'Nueva receta') + '</h2>' +
      '<label class="mia-campo">Nombre<input class="buscador" id="mia-nombre" maxlength="60" placeholder="Ej: Arroz con pollo de mi mamá" value="' + esc(f.nombre) + '"></label>' +
      '<div class="mia-fila"><label class="mia-campo">Emoji<input class="buscador" id="mia-emoji" maxlength="4" value="' + esc(f.emoji) + '"></label>' +
        '<label class="mia-campo">Porciones<input class="buscador" id="mia-porciones" type="number" inputmode="numeric" min="1" value="' + esc(f.porciones) + '"></label>' +
        '<label class="mia-campo">Preparar (min)<input class="buscador" id="mia-prep" type="number" inputmode="numeric" min="0" value="' + esc(f.prep) + '"></label>' +
        '<label class="mia-campo">Cocinar (min)<input class="buscador" id="mia-coccion" type="number" inputmode="numeric" min="0" value="' + esc(f.coccion) + '"></label></div>' +
      '<label class="mia-campo">Descripción (opcional)<input class="buscador" id="mia-desc" maxlength="140" value="' + esc(f.descripcion) + '"></label>' +
      '<label class="mia-campo">Ingredientes, uno por línea<textarea class="codigo" id="mia-ing" rows="7" placeholder="2 tazas de arroz&#10;500 g de pollo&#10;1 cebolla&#10;sal al gusto">' + esc(f.ingredientes) + '</textarea></label>' +
      '<label class="mia-campo">Pasos, uno por línea<textarea class="codigo" id="mia-pasos" rows="8" placeholder="Pica la cebolla y sofríela 5 minutos&#10;Agrega el pollo y deja cocinar 20 minutos">' + esc(f.pasos) + '</textarea></label>' +
      '<p class="pista izq">Si en un paso escribes «10 minutos», te pongo el botón del temporizador. Las cantidades con número («2 tazas de arroz») cambian solas cuando cambias las porciones.</p>' +
      '<p class="pista izq" id="aviso-mia" style="color:var(--acento)"></p>' +
      '<div class="fila-botones"><button class="boton" data-accion="mia-guardar">Guardar receta</button><button class="boton secundario" data-accion="mia-cancelar">Cancelar</button></div></div>';
    A().app.innerHTML = h;
  }
  function valorMia(id) { var e = document.getElementById(id); return e ? e.value : ''; }

  // ================================================================ ACCIONES (clics)
  var acciones = {
    'tema': function () { PERFIL.siguienteTema(); },
    'tema-elegir': function (el, valor) { PERFIL.ponerTema(valor); verPerfil(); },
    'avatar': function (el) {
      var fila = el.parentNode.querySelectorAll('.avatar');
      for (var i = 0; i < fila.length; i++) fila[i].classList.toggle('sel', fila[i] === el);
    },
    'perfil-omitir': function () { try { sessionStorage.setItem('omitirBienvenida', '1'); } catch (e) { /* nada */ } A().inicio(); },
    'perfil-crear': function () {
      var inp = document.getElementById('nombre-nuevo'), n = (inp.value || '').trim();
      if (!n) { inp.focus(); inp.placeholder = 'Escribe tu nombre para empezar'; return; }
      PERFIL.establecer(n, avatarElegido(document.getElementById('bienvenida'), PERFIL.AVATARES[0]));
      A().inicio();
    },
    'perfil-guardar': function () {
      var n = (document.getElementById('perfil-editar-nombre').value || '').trim();
      if (!n) { avisoPerfil('Escribe un nombre.'); return; }
      PERFIL.renombrar(PERFIL.actual().id, n, avatarElegido(document.getElementById('panel-editar'), PERFIL.actual().e));
      verPerfil();
    },
    'perfil-agregar': function () {
      var inp = document.getElementById('nombre-otro'), n = (inp.value || '').trim();
      if (!n) { inp.focus(); inp.placeholder = 'Escribe el nombre'; return; }
      PERFIL.cambiar(PERFIL.agregar(n, avatarElegido(document.getElementById('panel-otra'), PERFIL.AVATARES[1])));
    },
    'offline-bajar': function () { bajarFotos(); },
    'receta-whatsapp': function (el) {
      var r = A().buscarReceta(el.dataset.id); if (!r) return;
      var t = textoReceta(r);
      if (navigator.share) { navigator.share({ title: r.nombre, text: t }).catch(function () {}); return; }
      window.open('https://wa.me/?text=' + encodeURIComponent(t), '_blank', 'noopener');
    },
    'mia-nueva': function () { editandoMia = -1; verMisRecetas(); window.scrollTo(0, 0); },
    'mia-editar': function (el, valor) { editandoMia = +valor; verMisRecetas(); window.scrollTo(0, 0); },
    'mia-cancelar': function () { editandoMia = null; verMisRecetas(); },
    'mia-borrar': function (el, valor) {
      var f = misRecetas[+valor];
      if (!f || !window.confirm('¿Borrar «' + f.nombre + '»? No se puede deshacer.')) return;
      misRecetas.splice(+valor, 1); mem.guardar('misRecetas', misRecetas);
      editandoMia = null; location.hash = '#/mis-recetas'; location.reload();
    },
    'mia-guardar': function () {
      var f = { nombre: valorMia('mia-nombre'), emoji: valorMia('mia-emoji'), porciones: valorMia('mia-porciones'), prep: valorMia('mia-prep'), coccion: valorMia('mia-coccion'),
        descripcion: valorMia('mia-desc'), ingredientes: valorMia('mia-ing'), pasos: valorMia('mia-pasos') };
      var aviso = function (t) { var el = document.getElementById('aviso-mia'); if (el) el.textContent = t; };
      if (!f.nombre.trim()) { aviso('Ponle un nombre a la receta.'); return; }
      if (!f.ingredientes.trim()) { aviso('Escribe al menos un ingrediente.'); return; }
      if (!f.pasos.trim()) { aviso('Escribe al menos un paso.'); return; }
      f.id = editandoMia >= 0 ? misRecetas[editandoMia].id : 'mi-' + Date.now().toString(36);
      if (editandoMia >= 0) misRecetas[editandoMia] = f; else misRecetas.push(f);
      mem.guardar('misRecetas', misRecetas);
      editandoMia = null; location.hash = '#/receta/' + f.id; location.reload();
    },
    'perfil-usar': function (el) { PERFIL.cambiar(el.dataset.id); },
    'perfil-borrar': function (el) {
      var id = el.dataset.id, p = PERFIL.todos().filter(function (x) { return x.id === id; })[0], eraActual = PERFIL.actual().id === id;
      if (!p || !window.confirm('¿Borrar el perfil de ' + (p.n || 'esta persona') + ' y todo lo que guardó? No se puede deshacer.')) return;
      if (PERFIL.borrar(id)) { if (eraActual) { location.hash = '#/'; location.reload(); } else verPerfil(); }
    },
    'perfil-exportar': function () {
      var codigo = PERFIL.exportar(), out = document.getElementById('codigo-salida');
      out.value = codigo; out.focus(); out.select();
      if (navigator.clipboard) navigator.clipboard.writeText(codigo).then(function () { avisoPerfil('✅ Código copiado. Pégalo en tus notas o envíatelo por WhatsApp.'); }, function () { avisoPerfil('Seleccioné el código: cópialo a mano.'); });
      else avisoPerfil('Seleccioné el código: cópialo a mano.');
    },
    'perfil-importar': function () {
      var r = PERFIL.importar(document.getElementById('codigo-entrada').value);
      if (!r.ok) { avisoPerfil('⚠️ ' + r.error); return; }
      PERFIL.cambiar(r.id);
    },
    'filtros-abrir': function () { f.abierto = !f.abierto; A().inicio(); },
    'filtros-limpiar': function () { f.tiempo = 0; f.dif = ''; f.dieta = ''; f.sin = []; f.equipo = []; A().inicio(); },
    'filtro': function (el) {
      var g = el.dataset.grupo, v = g === 'tiempo' ? Number(el.dataset.valor) : el.dataset.valor;
      if (Array.isArray(f[g])) { var k = f[g].indexOf(v); if (k >= 0) f[g].splice(k, 1); else f[g].push(v); }
      else f[g] = f[g] === v ? (g === 'tiempo' ? 0 : '') : v;
      A().inicio();
    },
    'cocinada': function (el) {
      var id = el.dataset.id;
      (cocinadas[id] = cocinadas[id] || []).push(hoy());
      mem.guardar('cocinadas', cocinadas);
      el.textContent = '✅ ¡Anotada! Llevas ' + totalCocinadas() + (totalCocinadas() === 1 ? ' receta' : ' recetas');
      el.disabled = true;
      pintarMenu();
    },
    'estrella': function (el) {
      var id = el.dataset.id, n = Number(el.dataset.valor);
      notas[id] = notas[id] || {};
      notas[id].estrellas = notas[id].estrellas === n ? 0 : n;
      mem.guardar('notas', notas);
      el.parentNode.innerHTML = estrellasHTML(id);
    },
    'al-plan': function (el) {
      var d = document.getElementById('dia-plan').value;
      plan[d] = plan[d] || [];
      if (plan[d].indexOf(el.dataset.id) < 0) plan[d].push(el.dataset.id);
      mem.guardar('plan', plan);
      el.textContent = '✅ Agregada a ' + d;
    },
    'plan-quitar': function (el) {
      plan[el.dataset.dia] = (plan[el.dataset.dia] || []).filter(function (id) { return id !== el.dataset.id; });
      mem.guardar('plan', plan); verPlan();
    },
    'plan-vaciar': function () { plan = {}; mem.guardar('plan', plan); verPlan(); },
    'plan-sugerir': function () { sugerirSemana(); verPlan(); },
    'compras-agregar': function () {
      var v = (document.getElementById('nueva-compra') || {}).value || '';
      var n = agregarACompras(v);
      avisoMercado = n ? '✅ Agregué ' + n + (n === 1 ? ' producto.' : ' productos.') : (v.trim() ? 'Eso ya estaba en la lista.' : '');
      verCompras();
    },
    'compras-quitar': function (el) { extra.splice(Number(el.dataset.valor), 1); mem.guardar('comprasExtra', extra); verCompras(); },
    'compras-vaciar': function () { extra = []; mem.guardar('comprasExtra', extra); verCompras(); },
    'compras-desmarcar': function () { hechas = {}; registradas = {}; mem.guardar('comprasHechas', hechas); guardarHistorial(); verCompras(); },
    'compra-terminar': function () { terminarCompra(); },
    'compra-cerrar': function () { ultimaCompra = null; verCompras(); },
    'modo-tienda': function () { enTienda = !enTienda; verCompras(); window.scrollTo(0, 0); },
    'meta-guardar': function () { meta = Math.max(0, parseInt((document.getElementById('meta-valor') || {}).value, 10) || 0); mem.guardar('metaMercado', meta); verCompras(); },
    'plantilla': function (el) {
      var pl = PLANTILLAS[Number(el.dataset.valor)]; if (!pl) return;
      var nuevos = 0;
      pl[1].forEach(function (x) {
        if (!extra.some(function (y) { return sinT(y) === sinT(x[0]); })) { extra.push(x[0]); nuevos++; }
        if (!(cant[pkDe(x[0])] > 0)) cant[pkDe(x[0])] = x[1];
      });
      mem.guardar('comprasExtra', extra); guardarCant();
      avisoMercado = '✅ Agregué ' + nuevos + ' productos de «' + pl[0].replace(/^\S+\s/, '') + '». Ajusta las cantidades en cada uno.';
      verCompras();
    },
    'compra-repetir': function (el) {
      var h = historial[Number(el.dataset.valor)]; if (!h) return;
      var n = agregarACompras((h.items || []).join(', '));
      avisoMercado = '✅ Volví a agregar ' + n + ' productos de esa compra.';
      verCompras(); window.scrollTo(0, 0);
    },
    'historial-borrar': function () { if (window.confirm('¿Borrar el historial de compras? No se puede deshacer.')) { historial = []; guardarHistorial(); verCompras(); } },
    'compras-compartir': function () {
      var t = textoCompras(), aviso = document.getElementById('aviso-compras');
      if (navigator.share) { navigator.share({ title: 'Lista del mercado', text: t }).catch(function () {}); return; }
      if (navigator.clipboard) navigator.clipboard.writeText(t).then(function () { aviso.textContent = '✅ Lista copiada. Pégala en WhatsApp o en tus notas.'; }, function () { aviso.textContent = 'No pude copiarla automáticamente.'; });
    },
    'compras-whatsapp': function () { window.open('https://wa.me/?text=' + encodeURIComponent(textoCompras()), '_blank', 'noopener'); },
    'compras-dictar': function (el) {
      if (!Rec) return;
      if (dictado) { try { dictado.stop(); } catch (e) { /* ya detenido */ } return; }
      dictado = new Rec(); dictado.lang = 'es-CO'; dictado.interimResults = false; dictado.continuous = false;
      dictado.onresult = function (ev) {
        var t = ev.results[0][0].transcript, n = agregarACompras(t);
        avisoMercado = '🎤 Escuché: «' + t + '». ' + (n ? 'Agregué ' + n + (n === 1 ? ' producto.' : ' productos.') : 'Ya estaba en la lista.');
      };
      dictado.onerror = function (ev) { avisoMercado = ev.error === 'not-allowed' ? 'Necesito permiso para usar el micrófono.' : 'No pude escuchar. Intenta otra vez.'; };
      dictado.onend = function () { dictado = null; verCompras(); };
      el.textContent = '🎤 Escuchando… (toca para parar)';
      try { dictado.start(); } catch (e) { dictado = null; }
    },
    'canasta-abrir': function () { canastaAbierta = !canastaAbierta; verCompras(); },
    'canasta': function (el) {
      var v = el.dataset.valor, k = -1;
      extra.forEach(function (x, i) { if (sinT(x) === sinT(v)) k = i; });
      if (k >= 0) extra.splice(k, 1); else extra.push(v);
      mem.guardar('comprasExtra', extra); verCompras();
    },
    'tienda-agregar': function () {
      var n = (document.getElementById('tienda-nombre').value || '').trim(), z = (document.getElementById('tienda-zona').value || '').trim();
      if (!n) return;
      if (!tiendas.some(function (t) { return sinT(t.n) === sinT(n); })) tiendas.push({ n: n, zona: z });
      if (!tiendaActual) tiendaActual = n;
      mem.guardar('tiendas', tiendas); mem.guardar('tiendaActual', tiendaActual); verCompras();
    },
    'tienda-sugerida': function (el) {
      var n = el.dataset.valor;
      if (!tiendas.some(function (t) { return t.n === n; })) tiendas.push({ n: n, zona: '' });
      if (!tiendaActual) tiendaActual = n;
      mem.guardar('tiendas', tiendas); mem.guardar('tiendaActual', tiendaActual); verCompras();
    },
    'tienda-quitar': function (el) {
      var t = tiendas.splice(Number(el.dataset.valor), 1)[0];
      if (t && t.n === tiendaActual) tiendaActual = '';
      mem.guardar('tiendas', tiendas); mem.guardar('tiendaActual', tiendaActual); verCompras();
    },
    'tiquete-abrir': function () { var i = document.getElementById('foto-tiquete'); if (i) i.click(); },
    'ocr-guardar': function () { guardarOCR(); },
    'ocr-cancelar': function () { ocr = null; pintarOCR(); },
    'reto-hecho': function (el) {
      var k = retosHechos.indexOf(el.dataset.valor);
      if (k >= 0) retosHechos.splice(k, 1); else retosHechos.push(el.dataset.valor);
      mem.guardar('retos', retosHechos); verAprender(['aprender']);
    },
    'leer': function () { leer(); },
    'voz': function () { alternarVoz(); A().repintar(); },
    'letra': function () {
      var g = !document.documentElement.classList.contains('letra-grande');
      document.documentElement.classList.toggle('letra-grande', g);
      mem.guardar('letraGrande', g);
    }
  };

  // Cambios en casillas y notas
  document.addEventListener('change', function (e) {
    var t = e.target;
    if (t.dataset && t.dataset.compra != null) { hechas[t.dataset.compra] = t.checked; mem.guardar('comprasHechas', hechas); pintarCarrito(); }
    if (t.dataset && t.dataset.cant != null) { cant[t.dataset.cant] = Math.max(1, parseFloat(t.value) || 1); guardarCant(); refrescarPistas(); }
    if (t.dataset && t.dataset.precio != null && tiendaActual) { guardarPrecio(t.dataset.precio, tiendaActual, parseInt(t.value, 10)); refrescarPistas(); }
    if (t.id === 'tienda-actual') { tiendaActual = t.value; mem.guardar('tiendaActual', tiendaActual); verCompras(); }
    if (t.id === 'ciudad') { ciudad = t.value.trim(); mem.guardar('ciudad', ciudad); }
    if (t.id === 'foto-tiquete' && t.files && t.files[0]) { var archivo = t.files[0]; t.value = ''; leerTiquete(archivo); }
    if (t.classList && t.classList.contains('mise')) {
      var todas = document.querySelectorAll('.mise'), listas = document.querySelectorAll('.mise:checked').length;
      document.getElementById('mise-cuenta').textContent = listas === todas.length ? '✅ Todo listo. ¡A cocinar!' : listas + ' de ' + todas.length + ' cosas listas';
    }
  });
  document.addEventListener('input', function (e) {
    var id = e.target.dataset && e.target.dataset.nota;
    if (!id) return;
    notas[id] = notas[id] || {};
    notas[id].texto = e.target.value;
    mem.guardar('notas', notas);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && e.target.id === 'nueva-compra') acciones['compras-agregar']();
    if (e.key === 'Enter' && e.target.id === 'nombre-nuevo') acciones['perfil-crear']();
    if (e.key === 'Enter' && e.target.id === 'nombre-otro') acciones['perfil-agregar']();
    if (e.key === 'Enter' && e.target.id === 'perfil-editar-nombre') acciones['perfil-guardar']();
    if (e.key === 'Enter' && (e.target.id === 'tienda-nombre' || e.target.id === 'tienda-zona')) acciones['tienda-agregar']();
  });

  // ================================================================ MENÚ, LETRA GRANDE Y MODO SIN CONEXIÓN
  function pintarMenu() {
    var el = document.getElementById('menu-nivel');
    if (el) { var nv = nivel(); el.textContent = nv.emoji + ' ' + nv.n; }
  }
  if (mem.leer('letraGrande', false)) document.documentElement.classList.add('letra-grande');
  document.addEventListener('DOMContentLoaded', pintarMenu);
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () { /* sin modo offline */ }); });
  }

  return {
    vistas: { 'mis-recetas': verMisRecetas, plan: verPlan, compras: verCompras, progreso: verProgreso, aprender: verAprender, sustituciones: verSustituciones, perfil: verPerfil },
    bienvenidaHTML: bienvenidaHTML, agregarACompras: agregarACompras, etiquetas: etiquetas,
    acciones: acciones, inicioHTML: inicioHTML, pasaFiltros: pasaFiltros, interpretar: interpretar,
    recetaHTML: recetaHTML, finalHTML: finalHTML, miseHTML: miseHTML, vozHTML: vozHTML, alMostrarPaso: alMostrarPaso, vozActiva: function () { return voz.activa; }
  };
})();
