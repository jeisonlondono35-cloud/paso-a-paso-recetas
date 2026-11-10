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
    leer: function (k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    guardar: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* sin almacenamiento */ } }
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
      '<button class="boton secundario" data-accion="al-plan" data-id="' + r.id + '">📅 Agregar al plan</button></div></div>' +
      '<div class="panel"><h2>Dieta y alérgenos</h2><p style="margin:0 0 8px">' + (t.veg ? '🥬 Vegetariana. ' : '') + (al.length ? 'Contiene: <strong>' + al.join(', ') + '</strong>.' : 'No detecté alérgenos comunes en los ingredientes.') + '</p>' +
      '<p class="pista izq" style="margin:0">Calculado automáticamente a partir de la lista de ingredientes. Si tienes una alergia, revisa las etiquetas de cada producto.</p></div>' +
      (su.length ? '<div class="panel"><h2>🔁 Si te falta algo</h2>' + su.map(function (s) { return '<div class="sust"><strong>' + s[1] + '</strong><span>→ ' + s[2] + '</span></div>'; }).join('') + '</div>' : '');
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
      (voz.activa ? '<span class="pista izq" style="margin:0">Di: «siguiente», «anterior», «repetir», «temporizador 10 minutos»</span>' : '') + '</div>';
  }
  function textoPaso() {
    var ruta = A().rutaActual();
    if (ruta.vista !== 'cocina' || !ruta.paso || ruta.paso > ruta.receta.pasos.length) return '';
    var p = ruta.receta.pasos[ruta.paso - 1], limpia = function (s) { return String(s || '').replace(/<[^>]+>/g, ''); };
    return 'Paso ' + ruta.paso + '. ' + p.t + '. ' + limpia(p.d) + (p.s ? ' Sabrás que va bien si: ' + limpia(p.s) : '') + (p.e ? ' Cuidado: ' + limpia(p.e) : '');
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
      if (n) A().iniciarTimer(n, 'Temporizador por voz');
    } else if (/siguiente|proximo|adelante|continua/.test(t)) A().pasarPagina(1);
    else if (/anterior|atras|volver/.test(t)) A().pasarPagina(-1);
    else if (/repet|repite|leer|lee|otra vez/.test(t)) leer();
    else if (/silencio|callate|para de leer/.test(t) && window.speechSynthesis) speechSynthesis.cancel();
  }
  function alternarVoz() {
    if (!Rec) return;
    if (voz.activa) { voz.activa = false; try { voz.rec.stop(); } catch (e) { /* ya detenido */ } return; }
    voz.rec = new Rec();
    voz.rec.lang = 'es-ES'; voz.rec.continuous = true; voz.rec.interimResults = false;
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
      '<div class="semana">' + DIAS.map(function (d) {
        var rs = (plan[d] || []).map(function (id) { return A().buscarReceta(id); }).filter(Boolean);
        return '<div class="dia"><h3>' + d + '</h3>' + (rs.length ? rs.map(function (r) {
          return '<div class="plato"><a href="#/receta/' + r.id + '">' + r.emoji + ' ' + r.nombre + '</a><small>⏱ ' + A().tiempo(r.prep + r.coccion) + '</small>' +
            '<button data-accion="plan-quitar" data-dia="' + d + '" data-id="' + r.id + '" aria-label="Quitar">✕</button></div>';
        }).join('') : '<p class="suave" style="margin:0">Nada todavía</p>') + '</div>';
      }).join('') + '</div>';
  }
  function sugerirSemana() {
    // Solo platos que sirven de comida principal (ni salsas, ni postres, ni bebidas, ni pasabocas)
    var NO_PRINCIPAL = /Llajua|Chimichurri|Pico de gallo|Sunomono|Edamame|Provoleta|Tajadas|Papelón|horchata|Limonada|Brigadeiros|Alfajores|Pudim|Bolo|Tiramisú|Churros|Arroz para sushi|Tamagoyaki|Caraotas|refritos|Bruschetta|Cuñapé|Pão|Tequeños|Sopa de miso|Gazpacho|Patatas bravas|Croquetas/;
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
  var PASILLOS = [
    ['🥬 Frutas y verduras', /tomate|cebolla|\bajo\b|ajos|papa|zanahoria|limon|aguacate|lechuga|pepino|cilantro|perejil|pimenton|espinaca|brocoli|calabacin|naranja|fresa|mango|banano|platano|champinon|repollo|apio|jengibre|albahaca|maiz tierno|coliflor|berenjena|ahuyama|manzana|pera|pina|mora|cebollin|\baji\b|yuca|batata|remolacha|habichuela|arveja|mazorca|esparrago/],
    ['🥩 Carnes y pescados', /pollo|\bres\b|cerdo|carne|chorizo|tocineta|jamon|salchicha|panceta|costilla|bistec|chuleta|pescado|salmon|atun|camaron|calamar|mejillon/],
    ['🥛 Lácteos y huevos', /leche(?! de coco)|queso|mantequilla(?! de mani)|crema de leche|yogur|huevo|yema|mascarpone/]
  ];
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
      var it = mapa[k], nom = sinT(it.n), g = 3;
      for (var i = 0; i < PASILLOS.length; i++) if (PASILLOS[i][1].test(nom)) { g = i; break; }
      grupos[g].items.push({ k: k, texto: A().textoIngrediente(it, 1), de: it.de });
    });
    return grupos;
  }
  function verCompras() {
    var grupos = listaCompras(), total = 0;
    grupos.forEach(function (g) { total += g.items.length; });
    A().app.innerHTML = '<a class="volver" href="#/plan">← Plan de la semana</a><div class="panel"><h2>🛒 Lista de compras</h2>' +
      (total || extra.length ? '<p class="suave">Sale de las recetas de tu plan, sumando cantidades repetidas. Marca lo que ya tienes o ya compraste.</p>' +
        '<div class="fila-botones"><button class="boton" data-accion="compras-compartir">📤 Compartir lista</button><button class="boton secundario" data-accion="compras-desmarcar">Desmarcar todo</button></div><p class="pista izq" id="aviso-compras"></p>'
        : '<p class="vacio">Tu plan está vacío. Agrega recetas al plan y aquí aparecerá todo lo que necesitas comprar.</p><a class="boton" href="#/plan">Ir al plan</a>') + '</div>' +
      grupos.filter(function (g) { return g.items.length; }).map(function (g) {
        return '<div class="panel"><h2>' + g.t + '</h2><ul class="lista">' + g.items.map(function (it) {
          return '<li><label><input type="checkbox" data-compra="' + esc(it.k) + '"' + (hechas[it.k] ? ' checked' : '') + '><span>' + it.texto + '<small>' + it.de.join(' · ') + '</small></span></label></li>';
        }).join('') + '</ul></div>';
      }).join('') +
      '<div class="panel"><h2>➕ Otras cosas</h2><ul class="lista">' + extra.map(function (x, i) {
        return '<li><label><input type="checkbox" data-compra="extra§' + esc(x) + '"' + (hechas['extra§' + x] ? ' checked' : '') + '><span>' + esc(x) + '</span></label><button class="quitar" data-accion="compras-quitar" data-valor="' + i + '" aria-label="Quitar">✕</button></li>';
      }).join('') + '</ul><div class="fila-botones"><input class="buscador" id="nueva-compra" placeholder="Agregar algo a mano (papel, jabón…)" style="flex:1"><button class="boton" data-accion="compras-agregar">Agregar</button></div></div>';
  }
  function textoCompras() {
    var out = ['Lista de compras — Paso a Paso', ''];
    listaCompras().forEach(function (g) {
      var pend = g.items.filter(function (it) { return !hechas[it.k]; });
      if (!pend.length) return;
      out.push(g.t); pend.forEach(function (it) { out.push('  [ ] ' + it.texto); }); out.push('');
    });
    var ex = extra.filter(function (x) { return !hechas['extra§' + x]; });
    if (ex.length) { out.push('Otras cosas'); ex.forEach(function (x) { out.push('  [ ] ' + x); }); }
    return out.join('\n');
  }

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

  // ================================================================ ACCIONES (clics)
  var acciones = {
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
      var v = document.getElementById('nueva-compra').value.trim();
      if (v) { extra.push(v); mem.guardar('comprasExtra', extra); verCompras(); }
    },
    'compras-quitar': function (el) { extra.splice(Number(el.dataset.valor), 1); mem.guardar('comprasExtra', extra); verCompras(); },
    'compras-desmarcar': function () { hechas = {}; mem.guardar('comprasHechas', hechas); verCompras(); },
    'compras-compartir': function () {
      var t = textoCompras(), aviso = document.getElementById('aviso-compras');
      if (navigator.share) { navigator.share({ title: 'Lista de compras', text: t }).catch(function () {}); return; }
      if (navigator.clipboard) navigator.clipboard.writeText(t).then(function () { aviso.textContent = '✅ Lista copiada. Pégala en WhatsApp o en tus notas.'; }, function () { aviso.textContent = 'No pude copiarla automáticamente.'; });
    },
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
    if (t.dataset && t.dataset.compra != null) { hechas[t.dataset.compra] = t.checked; mem.guardar('comprasHechas', hechas); }
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
    vistas: { plan: verPlan, compras: verCompras, progreso: verProgreso, aprender: verAprender, sustituciones: verSustituciones },
    acciones: acciones, inicioHTML: inicioHTML, pasaFiltros: pasaFiltros, interpretar: interpretar,
    recetaHTML: recetaHTML, finalHTML: finalHTML, miseHTML: miseHTML, vozHTML: vozHTML, alMostrarPaso: alMostrarPaso
  };
})();
