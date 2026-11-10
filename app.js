/* Paso a Paso — lógica de la app.
   Las recetas viven en recetas.js (variable RECETAS). */
(function () {
  'use strict';

  var app = document.getElementById('app');
  var cajaTimer = document.getElementById('temporizador');

  // ---------- Guardado local (favoritos, porciones) ----------
  var memoria = {
    leer: function (clave, defecto) {
      try {
        var v = localStorage.getItem(PERFIL.clave(clave));
        return v ? JSON.parse(v) : defecto;
      } catch (e) { return defecto; }
    },
    guardar: function (clave, valor) {
      try { localStorage.setItem(PERFIL.clave(clave), JSON.stringify(valor)); } catch (e) { /* sin almacenamiento */ }
    }
  };

  var favoritos = memoria.leer('favoritos', []);
  var porcionesElegidas = memoria.leer('porciones', {});
  var marcados = {}; // ingredientes tachados, por receta
  var filtro = { texto: '', categoria: 'Todas', momento: '' };

  // Color de cada categoría (tono de 0 a 360)
  var TONOS = { 'Básicos': 38, 'Desayunos': 46, 'Platos fuertes': 22, 'Acompañamientos': 56, 'Sopas': 62, 'Ensaladas': 74, 'Comida japonesa': 12, 'Cocina italiana': 28, 'Cocina española': 34, 'Cocina mexicana': 68, 'Cocina peruana': 18, 'Cocina argentina': 30, 'Cocina brasileña': 72, 'Cocina boliviana': 24, 'Cocina venezolana': 42, 'Sándwiches y arepas': 33, 'Pasabocas': 50, 'Postres': 15, 'Bebidas': 58 };

  // El libro va ordenado por capítulos (categorías); dentro de cada uno, primero las recetas con foto
  var CAPITULOS = ['Mis recetas', 'Cocina colombiana', 'Básicos', 'Desayunos', 'Platos fuertes', 'Acompañamientos', 'Sopas', 'Ensaladas', 'Comida japonesa', 'Cocina italiana', 'Cocina española', 'Cocina mexicana', 'Cocina peruana', 'Cocina argentina', 'Cocina brasileña', 'Cocina boliviana', 'Cocina venezolana', 'Sándwiches y arepas', 'Pasabocas', 'Postres', 'Bebidas'];
  RECETAS.sort(function (x, y) {
    return (CAPITULOS.indexOf(x.categoria) - CAPITULOS.indexOf(y.categoria)) || ((x.gen ? 1 : 0) - (y.gen ? 1 : 0));
  });
  var POR_PAGINA = 24, visibles = POR_PAGINA;
  // Foto de la receta: la propia (fotos/<id>.jpg) o la de su familia (r.foto).
  // Solo se muestra si esa foto existe, es decir, si está registrada en creditos.js.
  function claveFoto(r) {
    var clave = r.foto || r.id;
    return (typeof CREDITOS !== 'undefined' && CREDITOS[clave]) ? clave : null;
  }

  function fotoHTML(r) {
    var clave = claveFoto(r);
    if (!clave) return '';
    return '<img src="fotos/' + clave + '.jpg" alt="" loading="lazy" onload="this.parentNode.classList.add(\'con-foto\')" onerror="this.remove()">';
  }

  // Línea de crédito de la foto (datos en creditos.js)
  function creditoHTML(r) {
    var clave = claveFoto(r);
    if (!clave) return '';
    var c = CREDITOS[clave];
    return '<p class="credito">Foto' + (r.gen ? ' de referencia' : '') + ': <a href="' + c.url + '" target="_blank" rel="noopener">' + c.autor + '</a> · ' + c.licencia + ' · Wikimedia Commons</p>';
  }

  function tono(r) { return 'style="--tono:' + (TONOS[r.categoria] != null ? TONOS[r.categoria] : 20) + '"'; }

  // ---------- Nevera y alacena ----------
  // Cada ingrediente: id (lo que se guarda), nombre, emoji, estante y k = texto que se busca en las recetas (sin tildes).
  var CATS_NEV = [['verduras', '🥬', 'Verduras'], ['frutas', '🍎', 'Frutas'], ['carnes', '🍗', 'Carnes y pescados'], ['lacteos', '🥛', 'Lácteos y huevos'], ['despensa', '🍚', 'Despensa'], ['salsas', '🫙', 'Salsas y condimentos']];
  function I(id, n, e, c, k) { return { id: id, n: n, e: e, c: c, k: k || id }; }
  var NEVERA = [
    // Verduras
    I('tomate', 'Tomate', '🍅', 'verduras'), I('cebolla', 'Cebolla', '🧅', 'verduras'), I('ajo', 'Ajo', '🧄', 'verduras', 'ajo(?!n)'),
    I('papa', 'Papa', '🥔', 'verduras', 'papa(?!ya)'), I('zanahoria', 'Zanahoria', '🥕', 'verduras'), I('lechuga', 'Lechuga', '🥬', 'verduras'),
    I('pepino', 'Pepino', '🥒', 'verduras'), I('cilantro', 'Cilantro', '🌿', 'verduras'), I('pimenton', 'Pimentón', '🫑', 'verduras', 'pimenton(?! dulce)'),
    I('espinaca', 'Espinaca', '🥬', 'verduras'), I('brocoli', 'Brócoli', '🥦', 'verduras'), I('calabacin', 'Calabacín', '🥒', 'verduras'),
    I('coliflor', 'Coliflor', '🥦', 'verduras'), I('berenjena', 'Berenjena', '🍆', 'verduras'), I('ahuyama', 'Ahuyama', '🎃', 'verduras'),
    I('maiz-tierno', 'Maíz tierno', '🌽', 'verduras', '(maiz tierno|mazorca)'), I('champinon', 'Champiñones', '🍄', 'verduras'),
    I('platano', 'Plátano', '🍌', 'verduras'), I('yuca', 'Yuca', '🍠', 'verduras'), I('batata', 'Batata', '🍠', 'verduras'),
    I('repollo', 'Repollo', '🥬', 'verduras'), I('apio', 'Apio', '🌱', 'verduras'), I('remolacha', 'Remolacha', '🟣', 'verduras'),
    I('habichuela', 'Habichuela y arveja', '🫛', 'verduras', '(habichuela|arveja)'), I('cebolla-larga', 'Cebolla larga', '🌱', 'verduras', '(cebolla larga|cebollin)'),
    I('perejil', 'Perejil', '🌿', 'verduras'), I('albahaca', 'Albahaca', '🌿', 'verduras'), I('jengibre', 'Jengibre', '🫚', 'verduras'),
    // Frutas
    I('limon', 'Limón', '🍋', 'frutas'), I('naranja', 'Naranja', '🍊', 'frutas'), I('aguacate', 'Aguacate', '🥑', 'frutas'),
    I('banano', 'Banano', '🍌', 'frutas'), I('mango', 'Mango', '🥭', 'frutas'), I('fresa', 'Fresas', '🍓', 'frutas'),
    I('pina', 'Piña', '🍍', 'frutas'), I('manzana', 'Manzana', '🍎', 'frutas'), I('mora', 'Mora', '🫐', 'frutas', 'mora\\b'),
    I('maracuya', 'Maracuyá', '🟡', 'frutas'), I('uva', 'Uvas', '🍇', 'frutas'), I('pera', 'Pera', '🍐', 'frutas', 'pera\\b'), I('lulo', 'Lulo', '🍊', 'frutas'),
    // Carnes y pescados
    I('pollo', 'Pollo', '🍗', 'carnes', '(pollo|pechuga|muslo|contramuslo|alita)'), I('carne molida', 'Carne molida', '🥩', 'carnes'),
    I('(de res|bistec)', 'Carne de res', '🥩', 'carnes', '(de res|bistec|falda|lomo de res)'), I('(cerdo|chuleta)', 'Cerdo', '🐖', 'carnes', '(cerdo|chuleta|lomo de cerdo)'),
    I('tocineta', 'Tocineta', '🥓', 'carnes', '(tocineta|panceta)'), I('jamon', 'Jamón', '🍖', 'carnes'), I('chorizo', 'Chorizo y salchicha', '🌭', 'carnes', '(chorizo|salchicha)'),
    I('pescado', 'Pescado', '🐟', 'carnes'), I('salmon', 'Salmón', '🍣', 'carnes'), I('atun', 'Atún', '🥫', 'carnes'), I('camaron', 'Camarones', '🍤', 'carnes'),
    // Lácteos y huevos
    I('huevo', 'Huevos', '🥚', 'lacteos'), I('leche(?! de coco)', 'Leche', '🥛', 'lacteos'), I('mantequilla', 'Mantequilla', '🧈', 'lacteos', 'mantequilla(?! de mani)'),
    I('queso', 'Queso', '🧀', 'lacteos'), I('crema de leche', 'Crema de leche', '🥛', 'lacteos'), I('yogur', 'Yogur', '🥣', 'lacteos'),
    // Despensa
    I('arroz', 'Arroz', '🍚', 'despensa'), I('espagueti', 'Pasta', '🍝', 'despensa', '(espagueti|macarron|fettuccine|codito|conchita|tornillo|monito|fideo|pasta corta|de pasta)'),
    I('lenteja', 'Lentejas', '🫘', 'despensa'), I('frijol', 'Fríjol y caraota', '🫘', 'despensa', '(frijol|caraota)'), I('garbanzo', 'Garbanzos', '🫘', 'despensa'),
    I('harina de trigo', 'Harina de trigo', '🌾', 'despensa'), I('harina de maiz', 'Harina de maíz', '🌽', 'despensa'), I('avena', 'Avena', '🥣', 'despensa'),
    I('pan (de molde|grueso|rallado)', 'Pan', '🍞', 'despensa', '(pan de molde|pan grueso|pan rallado|baguette|panko)'), I('tortilla', 'Tortillas', '🌮', 'despensa'),
    I('panela', 'Panela', '🟤', 'despensa', '(panela|papelon)'), I('chocolate', 'Chocolate', '🍫', 'despensa'), I('cocoa', 'Cocoa', '🍫', 'despensa'),
    I('nueces', 'Maní y nueces', '🥜', 'despensa', '(nuez|nueces|mani\\b)'), I('alga', 'Alga nori', '🍙', 'despensa', 'alga nori'), I('leche de coco', 'Leche de coco', '🥥', 'despensa'),
    // Salsas y condimentos
    I('salsa de soya', 'Salsa de soya', '🥢', 'salsas'), I('vinagre', 'Vinagre', '🫙', 'salsas'), I('mostaza', 'Mostaza', '🟡', 'salsas'),
    I('mayonesa', 'Mayonesa', '🫙', 'salsas'), I('salsa-tomate', 'Salsa de tomate', '🍅', 'salsas', '(salsa de tomate|ketchup)'), I('tomate triturado', 'Tomate triturado', '🥫', 'salsas'),
    I('aceite de oliva', 'Aceite de oliva', '🫒', 'salsas'), I('comino', 'Comino', '🌰', 'salsas'), I('paprika', 'Paprika', '🌶️', 'salsas'),
    I('oregano', 'Orégano', '🌿', 'salsas'), I('canela', 'Canela', '🟫', 'salsas'), I('curry', 'Curry', '🍛', 'salsas'), I('miso', 'Miso', '🍲', 'salsas'),
    I('vino', 'Vino', '🍷', 'salsas'), I('aji', 'Ají', '🌶️', 'salsas', 'aji\\b')
  ];
  var NEV_POR_ID = {};
  NEVERA.forEach(function (it) { it.re = new RegExp('\\b(?:' + it.k + ')'); NEV_POR_ID[it.id] = it; });
  var enNevera = memoria.leer('nevera', []).filter(function (id) { return NEV_POR_ID[id]; });

  // Qué ingredientes de la nevera necesita una receta (sin contar los opcionales)
  function necesita(r) {
    if (r._pide) return r._pide;
    var texto = r.ingredientes.filter(function (i) {
      return i.c != null && !/^Opcional/.test(i.nota || '');
    }).map(function (i) { return sinTildes(i.n); }).join(' | ');
    r._pide = NEVERA.filter(function (item) { return item.re.test(texto); });
    return r._pide;
  }

  // ---------- Utilidades ----------
  function buscarReceta(id) {
    for (var i = 0; i < RECETAS.length; i++) if (RECETAS[i].id === id) return RECETAS[i];
    return null;
  }

  function sinTildes(s) {
    return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  function tiempo(min) {
    if (min < 60) return min + ' min';
    var h = Math.floor(min / 60), m = min % 60;
    return h + ' h' + (m ? ' ' + m + ' min' : '');
  }

  // "taza|tazas" -> singular o plural según la cantidad
  function plural(texto, cantidad) {
    if (!texto) return '';
    var partes = texto.split('|');
    if (partes.length === 1) return texto;
    return cantidad > 1 ? partes[1] : partes[0];
  }

  // 1.5 -> "1 ½", 0.33 -> "⅓"
  function cantidadBonita(n, unidad) {
    if (/^(g|ml)$/.test(unidad)) {
      return String(n >= 50 ? Math.round(n / 5) * 5 : Math.round(n));
    }
    var fracciones = [[0, ''], [0.25, '¼'], [1 / 3, '⅓'], [0.5, '½'], [2 / 3, '⅔'], [0.75, '¾'], [1, '']];
    var entero = Math.floor(n), resto = n - entero, mejor = fracciones[0];
    fracciones.forEach(function (f) {
      if (Math.abs(resto - f[0]) < Math.abs(resto - mejor[0])) mejor = f;
    });
    if (mejor[0] === 1) { entero += 1; mejor = fracciones[0]; }
    if (entero === 0 && !mejor[1]) return '¼'; // nunca mostrar "0"
    return ((entero || '') + ' ' + mejor[1]).trim();
  }

  function porcionesDe(r) { return porcionesElegidas[r.id] || r.porciones; }

  function textoIngrediente(ing, factor) {
    if (ing.c == null) return plural(ing.n, 1);
    var cant = ing.c * factor;
    var unidad = plural(ing.u, cant);
    return cantidadBonita(cant, ing.u) + ' ' + (unidad ? unidad + ' ' : '') + plural(ing.n, cant);
  }

  function datosHTML(r) {
    return '<div class="datos">' +
      '<span>⏱ ' + tiempo(r.prep + r.coccion) + '</span>' +
      '<span>📊 ' + r.dificultad + '</span>' +
      '<span>🍽 ' + r.porciones + ' porciones</span>' +
      '</div>';
  }

  function corazon(id) { return favoritos.indexOf(id) >= 0 ? '❤️' : '🤍'; }

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }

  // ---------- Búsqueda fácil ----------
  // Momentos del día: un toque y ya está filtrado
  var MOMENTOS = [
    ['desayuno', '🍳', 'Desayuno', function (r) { return r.categoria === 'Desayunos' || r.categoria === 'Sándwiches y arepas'; }],
    ['almuerzo', '🍛', 'Almuerzo', function (r) { return /Platos fuertes|Sopas|Acompañamientos|Comida japonesa|Cocina /.test(r.categoria); }],
    ['cena', '🌙', 'Cena ligera', function (r) { return /Sopas|Ensaladas|Sándwiches y arepas|Pasabocas/.test(r.categoria) || (/Platos fuertes|Comida japonesa|Cocina /.test(r.categoria) && r.prep + r.coccion <= 30); }],
    ['postre', '🍰', 'Postre', function (r) { return r.categoria === 'Postres'; }],
    ['bebida', '🥤', 'Bebida', function (r) { return r.categoria === 'Bebidas'; }],
    ['rapido', '⚡', 'Rápido', function (r) { return r.prep + r.coccion <= 30; }],
    ['facil', '👍', 'Fácil', function (r) { return r.dificultad === 'Fácil'; }],
    ['veg', '🥬', 'Vegetariano', function (r) { return EXTRAS.etiquetas(r).veg; }],
    ['sinhorno', '🚫', 'Sin horno', function (r) { return !EXTRAS.etiquetas(r).horno; }]
  ];
  var Rec = window.SpeechRecognition || window.webkitSpeechRecognition;

  function indice(r) {
    if (!r._i) {
      var nom = sinTildes(r.nombre);
      r._i = {
        nombre: nom, palabras: nom.split(/[^a-z0-9]+/).filter(Boolean),
        ing: sinTildes(r.ingredientes.map(function (i) { return i.n.split('|')[0]; }).join(' ')), cat: sinTildes(r.categoria)
      };
    }
    return r._i;
  }
  // 0 = no coincide. Más puntos si la palabra empieza igual que una del nombre.
  function puntaje(r, tokens, soloNombre) {
    var ix = indice(r), total = 0;
    for (var k = 0; k < tokens.length; k++) {
      var t = tokens[k], s = 0;
      if (ix.palabras.some(function (w) { return w.indexOf(t) === 0; })) s = 5;
      else if (ix.nombre.indexOf(t) >= 0) s = 4;
      else if (!soloNombre && (ix.ing.indexOf(t) >= 0 || ix.cat.indexOf(t) >= 0)) s = 1;
      if (!s) return 0;
      total += s;
    }
    return total;
  }

  // Corrección de errores de escritura: "polo con aroz" -> "pollo con arroz"
  var vocab = null;
  function construirVocab() {
    vocab = {};
    RECETAS.forEach(function (r) {
      var ix = indice(r);
      (ix.nombre + ' ' + ix.ing).split(/[^a-z0-9]+/).forEach(function (w) { if (w.length > 2) vocab[w] = (vocab[w] || 0) + 1; });
    });
  }
  function distancia(a, b) {
    var prev = [], cur = [], i, j;
    for (j = 0; j <= b.length; j++) prev[j] = j;
    for (i = 1; i <= a.length; i++) {
      cur = [i];
      for (j = 1; j <= b.length; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1));
      prev = cur;
    }
    return prev[b.length];
  }
  function corregirPalabra(w) {
    if (w.length < 4 || vocab[w]) return null;
    var max = w.length > 6 ? 2 : 1, mejor = null, md = 99;
    for (var k in vocab) {
      if (Math.abs(k.length - w.length) > max) continue;
      var d = distancia(w, k);
      if (d <= max && (d < md || (d === md && vocab[k] > vocab[mejor]))) { md = d; mejor = k; }
    }
    return mejor;
  }
  function sugerirCorreccion(tokens) {
    if (!vocab) construirVocab();
    var cambio = false, nuevos = tokens.map(function (t) {
      var c = corregirPalabra(t);
      if (c) { cambio = true; return c; }
      return t;
    });
    return cambio ? nuevos.join(' ') : '';
  }

  function guardarReciente(t) {
    t = String(t || '').trim();
    if (t.length < 2) return;
    var l = memoria.leer('recientes', []).filter(function (x) { return x !== t; });
    l.unshift(t);
    memoria.guardar('recientes', l.slice(0, 6));
  }
  function pintarRecientes() {
    var el = document.getElementById('recientes');
    if (!el) return;
    var l = memoria.leer('recientes', []);
    el.innerHTML = (!filtro.texto && l.length) ? 'Buscaste: ' + l.map(function (t) { return '<button class="chip" data-accion="reciente" data-valor="' + esc(t) + '">' + esc(t) + '</button>'; }).join('') : '';
  }
  function ponerTexto(t) {
    filtro.texto = t; visibles = POR_PAGINA;
    var inp = document.getElementById('buscador');
    if (inp) inp.value = t;
    pintarRejilla(); pintarSugerencias(); pintarRecientes();
  }
  function buscarPorVoz(btn) {
    if (!Rec) return;
    var r = new Rec();
    r.lang = 'es-CO'; r.interimResults = false;
    r.onresult = function (ev) { var t = ev.results[0][0].transcript.replace(/[.,;]+$/, ''); ponerTexto(t); guardarReciente(t); };
    r.onend = function () { if (btn) btn.classList.remove('activo'); };
    r.onerror = function () { if (btn) btn.classList.remove('activo'); };
    if (btn) btn.classList.add('activo');
    try { r.start(); } catch (e) { if (btn) btn.classList.remove('activo'); }
  }

  function ocultarSugerencias() { var c = document.getElementById('sugerencias'); if (c) c.hidden = true; }
  function pintarSugerencias() {
    var caja = document.getElementById('sugerencias'), inp = document.getElementById('buscador'), borrar = document.getElementById('btn-borrar');
    if (borrar) borrar.hidden = !filtro.texto;
    if (!caja) return;
    var q = sinTildes(filtro.texto.trim());
    if (q.length < 2 || document.activeElement !== inp) { caja.hidden = true; return; }
    var pista = EXTRAS.interpretar(q), tokens = pista.palabras;
    if (!tokens.length) { caja.hidden = true; return; }
    var sug = [];
    RECETAS.forEach(function (r) {
      if (!pista.pasa(r)) return;
      var s = puntaje(r, tokens, true);
      if (s) sug.push({ r: r, s: s });
    });
    sug.sort(function (a, b) { return b.s - a.s; });
    sug = sug.slice(0, 6);
    if (!sug.length) { caja.hidden = true; return; }
    caja.innerHTML = sug.map(function (x) {
      return '<a href="#/receta/' + x.r.id + '" data-sug="1"><span>' + x.r.emoji + '</span> ' + esc(x.r.nombre) + '<small>' + esc(x.r.categoria) + '</small></a>';
    }).join('');
    caja.hidden = false;
  }
  function teclasBuscador(e) {
    var caja = document.getElementById('sugerencias'), links = caja ? caja.querySelectorAll('a') : [], sel = -1, i;
    for (i = 0; i < links.length; i++) if (links[i].classList.contains('sel')) sel = i;
    if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && links.length && !caja.hidden) {
      e.preventDefault();
      if (sel >= 0) links[sel].classList.remove('sel');
      sel = e.key === 'ArrowDown' ? (sel + 1) % links.length : (sel <= 0 ? links.length - 1 : sel - 1);
      links[sel].classList.add('sel');
    } else if (e.key === 'Enter') {
      guardarReciente(filtro.texto);
      if (sel >= 0 && !caja.hidden) { location.hash = links[sel].getAttribute('href'); return; }
      ocultarSugerencias(); e.target.blur();
      var r = document.getElementById('rejilla');
      if (r && r.scrollIntoView) r.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (e.key === 'Escape') {
      ocultarSugerencias();
    }
  }

  // ---------- Pantalla: inicio ----------
  function verInicio() {
    var categorias = ['Todas', 'Favoritas'];
    RECETAS.forEach(function (r) {
      if (categorias.indexOf(r.categoria) < 0) categorias.push(r.categoria);
    });

    app.innerHTML =
      '<header class="cabecera">' +
        '<img class="logo" src="logo.png" alt="Logo de Paso a Paso: un halcón con gorro de chef" width="150" height="150">' +
        '<h1>Paso <span>a</span> Paso</h1>' +
        '<p>' + RECETAS.length + ' recetas explicadas con todo detalle: qué hacer, cómo se ve cuando va bien y qué errores evitar.</p>' +
      '</header>' +
      EXTRAS.bienvenidaHTML() +
      '<div class="buscar">' +
        '<input class="buscador" id="buscador" type="search" autocomplete="off" enterkeyhint="search" aria-label="Buscar recetas" placeholder="🔍 ¿Qué cocinamos hoy?" value="' + esc(filtro.texto) + '">' +
        '<div class="buscar-btns">' + (Rec ? '<button type="button" data-accion="buscar-voz" aria-label="Buscar con la voz" title="Buscar con la voz">🎤</button>' : '') +
          '<button type="button" id="btn-borrar" data-accion="buscar-borrar" aria-label="Borrar búsqueda"' + (filtro.texto ? '' : ' hidden') + '>✕</button></div>' +
        '<div class="sugerencias" id="sugerencias" hidden></div>' +
      '</div>' +
      '<div class="recientes" id="recientes"></div>' +
      '<div class="momentos" role="group" aria-label="¿Qué se te antoja?">' +
        MOMENTOS.map(function (m) {
          return '<button type="button" class="momento' + (filtro.momento === m[0] ? ' activo' : '') + '" data-accion="momento" data-valor="' + m[0] + '"><span>' + m[1] + '</span><small>' + m[2] + '</small></button>';
        }).join('') +
      '</div>' +
      '<div class="acciones">' +
        '<a class="accion nevera" href="#/nevera"><span>🧊</span><div><strong>¿Qué tengo en la nevera?</strong><small>Llénala y te digo qué puedes cocinar</small></div></a>' +
        '<a class="accion sorpresa" href="#/libro/1"><span>📖</span><div><strong>Hojear el libro</strong><small>Pasa las páginas, receta por receta</small></div></a>' +
        '<a class="accion mias" href="#/mis-recetas"><span>✍️</span><div><strong>Mis recetas</strong><small>Escribe las tuyas y cocínalas paso a paso</small></div></a>' +
        '<a class="accion mercado" href="#/compras"><span>🛒</span><div><strong>Mi mercado</strong><small>Lista, tiendas y precios en tu ciudad</small></div></a>' +
      '</div>' +
      EXTRAS.inicioHTML() +
      '<div class="filtros">' +
        categorias.map(function (c) {
          return '<button class="chip' + (c === filtro.categoria ? ' activo' : '') + '" data-accion="categoria" data-valor="' + c + '">' + c + '</button>';
        }).join('') +
      '</div>' +
      '<div class="rejilla" id="rejilla"></div><div id="pie-rejilla"></div>';

    var inp = document.getElementById('buscador');
    inp.addEventListener('input', function (e) { filtro.texto = e.target.value; visibles = POR_PAGINA; pintarRejilla(); pintarSugerencias(); pintarRecientes(); });
    inp.addEventListener('focus', pintarSugerencias);
    inp.addEventListener('blur', function () { setTimeout(ocultarSugerencias, 220); });
    inp.addEventListener('keydown', teclasBuscador);
    document.getElementById('sugerencias').addEventListener('mousedown', function (e) { e.preventDefault(); });
    pintarRecientes();
    pintarRejilla();
  }

  // ---------- Búsqueda flexible: "postre japonés", "sopa colombiana"… ----------
  // Si la búsqueda exacta no da nada, se entiende el TIPO (postre, sopa…) y la COCINA (japonesa, colombiana…) y se muestra lo más parecido.
  var SEM_TIPOS = [
    { n: 'postres', pal: /^(postres?|dulces?|tortas?|pasteles?|helados?|tartas?)$/, cat: 'Postres', nom: /postre|torta|natilla|arroz con leche|mousse|arequipe|brigadeiro|alfajor|pudim|bolo |tiramis|churro|mochi|dorayaki|helado|flan|purin|galleta|bunuelo|cocada|oblea|gelatina|pastel|tarta|brownie|castella|kakigori|sorbete|matcha/ },
    { n: 'sopas', pal: /^(sopas?|caldos?|cremas?|guisos?)$/, cat: 'Sopas', nom: /sopa|caldo|crema de|ajiaco|sancocho|cuchuco|changua|mondongo|ramen|miso|gazpacho|minestrone|chupe|locro|puchero|udon|nikujaga|guiso/ },
    { n: 'desayunos', pal: /^(desayunos?|onces?|mananas?)$/, cat: 'Desayunos', nom: /huevo|arepa|changua|calentado|panqueque|avena|tostada|desayuno|omelette|tamagoyaki|hotcake/ },
    { n: 'bebidas', pal: /^(bebidas?|jugos?|batidos?|refrescos?|tragos?|licuados?)$/, cat: 'Bebidas', nom: /(^| )jugos?( |$)|batido|limonada|chocolate (caliente|santaf)|aguapanela|salpicon|horchata|smoothie|granizado|sorbete|matcha latte|cafe|avena/ },
    { n: 'ensaladas', pal: /^(ensaladas?)$/, cat: 'Ensaladas', nom: /ensalada|sunomono/ },
    { n: 'pasabocas', pal: /^(pasabocas?|snacks?|aperitivos?|entradas?|antojos?)$/, cat: 'Pasabocas', nom: /empanada|bunuelo|patacon|croqueta|tequeno|edamame|bruschetta|nachos|almojabana|pandebono|oblea/ }
  ];
  var SEM_COCINAS = [
    { n: 'japonesa', pal: /^(japon\w*|sushi|nipon\w*)$/, cat: 'Comida japonesa' },
    { n: 'italiana', pal: /^(italian\w*)$/, cat: 'Cocina italiana' },
    { n: 'española', pal: /^(espan\w*)$/, cat: 'Cocina española' },
    { n: 'mexicana', pal: /^(mexican\w*)$/, cat: 'Cocina mexicana' },
    { n: 'peruana', pal: /^(peruan\w*)$/, cat: 'Cocina peruana' },
    { n: 'argentina', pal: /^(argentin\w*)$/, cat: 'Cocina argentina' },
    { n: 'brasileña', pal: /^(brasil\w*)$/, cat: 'Cocina brasileña' },
    { n: 'boliviana', pal: /^(bolivian\w*)$/, cat: 'Cocina boliviana' },
    { n: 'venezolana', pal: /^(venezolan\w*)$/, cat: 'Cocina venezolana' },
    { n: 'colombiana', pal: /^(colombian\w*|criolla|criollo|tipica|tipico|paisa|bogotana|cundinamarquesa)$/, cat: 'Cocina colombiana' }
  ];
  function busquedaFlexible(tokens, ok, bono) {
    var tipo = null, cocina = null, resto = [];
    tokens.forEach(function (t) {
      var hallado = false;
      SEM_TIPOS.forEach(function (x) { if (!tipo && x.pal.test(t)) { tipo = x; hallado = true; } });
      SEM_COCINAS.forEach(function (x) { if (!cocina && x.pal.test(t)) { cocina = x; hallado = true; } });
      if (!hallado && t.length > 2 && !/^(comida|comidas|receta|recetas|plato|platos|tipo|estilo|del|con|para|las|los|una|algo|quiero|dame|busco)$/.test(t)) resto.push(t);
    });
    var base = RECETAS.filter(ok);
    var esTipo = function (r) { return tipo && (r.categoria === tipo.cat || tipo.nom.test(sinTildes(r.nombre))); };
    var esCocina = function (r) { return cocina && r.categoria === cocina.cat; };
    var restoOk = function (r) { return !resto.length || puntaje(r, resto, false) > 0; };
    var orden = function (a, b) { return (b.p - a.p) || ((a.r.gen ? 1 : 0) - (b.r.gen ? 1 : 0)); };
    if (tipo || cocina) {
      var exacta = base.filter(function (r) { return (!tipo || esTipo(r)) && (!cocina || esCocina(r)) && restoOk(r); });
      if (exacta.length) return { lista: exacta, aviso: '' };
      // Parecidas: lo de la cocina pedida y lo del tipo pedido, las que cumplen ambas primero
      var par = [];
      base.forEach(function (r) {
        var p = (esCocina(r) ? 2 : 0) + (esTipo(r) ? 2 : 0);
        if (p && restoOk(r)) par.push({ r: r, p: p + (bono && bono(r) ? 1 : 0) });
      });
      par.sort(orden);
      if (par.length) {
        var que = (tipo ? tipo.n : 'recetas') + (cocina ? ' de cocina ' + cocina.n : '');
        return { lista: par.map(function (x) { return x.r; }), aviso: 'Todavía no tengo ' + que + ' con esas palabras exactas. Te muestro lo más parecido: ' + (cocina ? 'la cocina ' + cocina.n : '') + (cocina && tipo ? ' y ' : '') + (tipo ? 'los ' + tipo.n : '') + '.' };
      }
    }
    // Sin tipo ni cocina: que sirva cualquiera de las palabras, las que más coinciden primero
    var sueltas = tokens.filter(function (t) { return t.length > 2; }), pts = [];
    base.forEach(function (r) {
      var p = 0;
      sueltas.forEach(function (t) { p += puntaje(r, [t], false); });
      if (p) pts.push({ r: r, p: p + (bono && bono(r) ? 1 : 0) });
    });
    pts.sort(orden);
    return { lista: pts.map(function (x) { return x.r; }), aviso: pts.length ? 'No hay una receta que tenga todas tus palabras. Te muestro las que coinciden con alguna.' : '' };
  }

  function pintarRejilla() {
    var q = sinTildes(filtro.texto.trim());
    var pista = EXTRAS.interpretar(q); // entiende frases como "rápido", "sin horno", "para llevar"
    var tokens = pista.palabras;
    var mom = filtro.momento ? MOMENTOS.filter(function (m) { return m[0] === filtro.momento; })[0] : null;
    var lista = [], aviso = '';
    var pasaBase = function (r) {
      if (filtro.categoria === 'Favoritas' && favoritos.indexOf(r.id) < 0) return false;
      if (filtro.categoria !== 'Todas' && filtro.categoria !== 'Favoritas' && r.categoria !== filtro.categoria) return false;
      if (mom && !mom[3](r)) return false;
      return EXTRAS.pasaFiltros(r) && pista.pasa(r);
    };
    RECETAS.forEach(function (r) {
      if (!pasaBase(r)) return;
      var s = tokens.length ? puntaje(r, tokens, false) : 1;
      if (s) lista.push({ r: r, s: s });
    });
    if (tokens.length) {
      lista.sort(function (a, b) { return b.s - a.s; }); // lo que más se parece primero
    } else if (filtro.categoria === 'Todas' && !mom) {
      // En la portada general, primero las recetas con foto propia
      lista = lista.filter(function (x) { return !x.r.gen; }).concat(lista.filter(function (x) { return x.r.gen; }));
    }
    lista = lista.map(function (x) { return x.r; });
    if (!lista.length && q) {
      // Se vuelve a leer la búsqueda tal cual la escribió la persona (sin que "postre" o "rápido" bloqueen resultados)
      var crudos = q.split(/[^a-z0-9ñ]+/).filter(function (w) { return w.length > 2; }).map(function (w) { return w.length > 4 && /[aeiou]s$/.test(w) ? w.slice(0, -1) : w; });
      var sinReglas = function (r) {
        if (filtro.categoria === 'Favoritas' && favoritos.indexOf(r.id) < 0) return false;
        if (filtro.categoria !== 'Todas' && filtro.categoria !== 'Favoritas' && r.categoria !== filtro.categoria) return false;
        if (mom && !mom[3](r)) return false;
        return EXTRAS.pasaFiltros(r);
      };
      var fx = busquedaFlexible(crudos, sinReglas, pista.pasa); lista = fx.lista; aviso = fx.aviso;
    }

    var entendido = document.getElementById('entendido');
    if (entendido) entendido.innerHTML = pista.etiquetas.length ? 'Entendí: ' + pista.etiquetas.map(function (t) { return '<span>' + t + '</span>'; }).join('') : '';

    var rejilla = document.getElementById('rejilla'), pie = document.getElementById('pie-rejilla');
    if (!rejilla) return;
    if (!lista.length) {
      var corr = tokens.length ? sugerirCorreccion(tokens) : '';
      rejilla.innerHTML = '<p class="vacio">No encontré recetas con esa búsqueda y esos filtros. Prueba con menos palabras o quita algún filtro.</p>' +
        (corr ? '<div class="dijiste">¿Quisiste decir <button type="button" data-accion="dijiste" data-valor="' + esc(corr) + '">' + esc(corr) + '</button>?</div>' : '');
      pie.innerHTML = '';
      return;
    }
    var desde = visibles - POR_PAGINA;
    rejilla.innerHTML = (aviso ? '<p class="aviso-flex">' + esc(aviso) + '</p>' : '') + lista.slice(0, visibles).map(function (r, i) { return tarjetaHTML(r, Math.max(0, i - desde), ''); }).join('');
    pie.innerHTML = '<p class="pista">Mostrando ' + Math.min(visibles, lista.length) + ' de ' + lista.length + ' recetas</p>' +
      (lista.length > visibles ? '<button class="boton grande" data-accion="mas">Ver más recetas ↓</button>' : '');
  }

  function tarjetaHTML(r, i, extra) {
    return '<a class="tarjeta" style="animation-delay:' + (i * 45) + 'ms" href="#/receta/' + r.id + '">' +
      '<div class="foto" ' + tono(r) + '><span>' + r.emoji + '</span>' + fotoHTML(r) + '<em>' + r.categoria + '</em></div>' +
      '<button class="fav" data-accion="favorito" data-valor="' + r.id + '" title="Favorita">' + corazon(r.id) + '</button>' +
      '<div class="cuerpo"><h3>' + r.nombre + '</h3>' + (extra || '<p>' + r.descripcion + '</p>') + datosHTML(r) + '</div>' +
      '</a>';
  }

  // ---------- Pantalla: mi nevera y mi alacena ----------
  var nevCat = 'verduras', nevFiltro = '', nevVisibles = 12, nevBusqueda = '', ultimoAgregado = '', nevAbierta = false;
  var ESTANTE_FRIA = /verduras|frutas|carnes|lacteos/;

  function verNevera() {
    nevAbierta = false; nevVisibles = 12; ultimoAgregado = ''; nevBusqueda = '';
    app.innerHTML =
      '<a class="volver" href="#/">← Todas las recetas</a>' +
      '<div class="panel"><h2>🧊 Mi nevera y mi alacena</h2>' +
        '<p class="suave" style="margin:0">Toca lo que tienes en casa y mira cómo se llena. Abajo te digo qué puedes cocinar y qué te falta. La sal, el aceite, el azúcar y el agua ya los doy por hechos.</p></div>' +
      '<div class="nev-barra" id="nev-barra"></div>' +
      '<div class="nev-layout">' +
        '<div class="nev-visual" id="nev-visual"></div>' +
        '<div class="panel">' +
          '<input class="buscador" id="nev-buscar" type="search" autocomplete="off" placeholder="🔍 Busca un ingrediente: pollo, arroz, ajo…" aria-label="Buscar ingrediente">' +
          '<div class="nev-pestanas" id="nev-pestanas"></div>' +
          '<div class="nev-grid" id="nev-grid"></div>' +
          '<div class="nev-acciones"><button class="chip" data-accion="nevera-basico">✨ Lo básico de casa</button><button class="chip" data-accion="nevera-limpiar">Vaciar todo</button></div>' +
        '</div>' +
      '</div>' +
      '<div id="nevera-resultado"></div>';
    document.getElementById('nev-buscar').addEventListener('input', function (e) { nevBusqueda = e.target.value; pintarPicker(); });
    pintarNevera();
  }

  var nevListas = 0;
  function pintarNevera() {
    pintarVisual();
    pintarPicker();
    pintarResultadosNevera();
    pintarBarra();
  }
  // Barra pegada arriba (en celular): lo que llevas y cuántas recetas ya puedes cocinar
  function pintarBarra() {
    var el = document.getElementById('nev-barra');
    if (!el) return;
    var n = enNevera.length;
    el.innerHTML = '<div class="nev-barra-in"><div class="nev-mini">' + (n ? enNevera.map(function (id) {
      var it = NEV_POR_ID[id];
      return '<button type="button" class="mini' + (id === ultimoAgregado ? ' nuevo' : '') + '" data-accion="nevera" data-valor="' + esc(id) + '" aria-label="Sacar ' + esc(it.n) + '">' + it.e + '</button>';
    }).join('') : '<span class="suave" style="margin:0;font-size:.9rem">Toca ingredientes para llenar tu nevera</span>') + '</div>' +
      '<button type="button" class="boton" data-accion="nevera-ir"' + (n ? '' : ' disabled') + '>' + (n ? '🍳 Ver ' + (nevListas ? nevListas + ' recetas' : 'recetas') + ' ↓' : '🍳 Recetas') + '</button></div>';
  }

  function estanteHTML(titulo, cats) {
    var items = enNevera.map(function (id) { return NEV_POR_ID[id]; }).filter(function (it) { return it && cats.indexOf(it.c) >= 0; });
    return '<div class="estante"><b>' + titulo + '</b>' + (items.length ? items.map(function (it) {
      return '<button type="button" class="cosa' + (it.id === ultimoAgregado ? ' nuevo' : '') + '" data-accion="nevera" data-valor="' + esc(it.id) + '" title="' + esc(it.n) + ' (toca para sacarlo)" aria-label="Sacar ' + esc(it.n) + '">' + it.e + '</button>';
    }).join('') : '<span class="vacio-est">vacío</span>') + '</div>';
  }

  function pintarVisual() {
    var el = document.getElementById('nev-visual');
    if (!el) return;
    var n = enNevera.length, fria = enNevera.filter(function (id) { return ESTANTE_FRIA.test(NEV_POR_ID[id].c); }).length, abre = nevAbierta ? '' : ' abre';
    nevAbierta = true;
    el.innerHTML =
      '<div class="nev-caja' + abre + '"><div class="manija"></div><div class="nev-top"><span>🧊 Nevera</span><span>' + fria + '</span></div>' +
        estanteHTML('Lácteos y huevos', ['lacteos']) + estanteHTML('Carnes y pescados', ['carnes']) + estanteHTML('Cajón de verduras y frutas', ['verduras', 'frutas']) + '</div>' +
      '<div class="nev-caja alacena' + abre + '"><div class="manija"></div><div class="nev-top"><span>🗄️ Alacena</span><span>' + (n - fria) + '</span></div>' +
        estanteHTML('Despensa', ['despensa']) + estanteHTML('Salsas y condimentos', ['salsas']) + '</div>' +
      '<p class="nev-resumen">' + (n ? 'Tienes ' + n + (n === 1 ? ' ingrediente' : ' ingredientes') + '. Toca cualquiera para sacarlo.' : 'Está vacía: toca los ingredientes de abajo para llenarla 👇') + '</p>';
  }

  function pintarPicker() {
    var tabs = document.getElementById('nev-pestanas'), grid = document.getElementById('nev-grid');
    if (!tabs || !grid) return;
    var q = sinTildes(nevBusqueda.trim());
    tabs.innerHTML = CATS_NEV.map(function (c) {
      var cuenta = enNevera.filter(function (id) { return NEV_POR_ID[id].c === c[0]; }).length;
      return '<button type="button" class="nev-pestana' + (c[0] === nevCat && !q ? ' activo' : '') + '" data-accion="nevera-cat" data-valor="' + c[0] + '">' + c[1] + ' ' + c[2] + (cuenta ? '<i>' + cuenta + '</i>' : '') + '</button>';
    }).join('');
    var lista = NEVERA.filter(function (it) { return q ? sinTildes(it.n).indexOf(q) >= 0 : it.c === nevCat; });
    grid.innerHTML = lista.length ? lista.map(function (it) {
      var on = enNevera.indexOf(it.id) >= 0;
      return '<button type="button" class="ing' + (on ? ' activo' : '') + '" aria-pressed="' + on + '" data-accion="nevera" data-valor="' + esc(it.id) + '"><span class="em">' + it.e + '</span><small>' + esc(it.n) + '</small></button>';
    }).join('') : '<p class="vacio" style="grid-column:1/-1">No tengo ese ingrediente en la lista. Prueba con otra palabra.</p>';
  }

  function pintarResultadosNevera() {
    var caja = document.getElementById('nevera-resultado');
    if (!caja) return;
    if (!enNevera.length) { nevListas = 0; caja.innerHTML = '<p class="vacio">👆 Toca lo que tienes en casa y te digo qué puedes cocinar.</p>'; return; }
    var tengo = {};
    enNevera.forEach(function (id) { tengo[id] = 1; });
    var ops = [];
    RECETAS.forEach(function (r) {
      var pide = necesita(r);
      if (!pide.length) return;
      var faltan = pide.filter(function (it) { return !tengo[it.id]; }), tiene = pide.length - faltan.length;
      if (tiene > 0) ops.push({ r: r, pide: pide.length, tiene: tiene, faltan: faltan });
    });
    var g0 = ops.filter(function (o) { return !o.faltan.length; }), g1 = ops.filter(function (o) { return o.faltan.length === 1; }), g2 = ops.filter(function (o) { return o.faltan.length === 2; });
    nevListas = g0.length;
    var f = nevFiltro || (g0.length ? 'todo' : (g1.length ? 'una' : 'dos'));
    var lista = f === 'todo' ? g0 : (f === 'una' ? g1 : g2);
    lista.sort(function (a, b) { return (b.tiene - a.tiene) || ((a.r.gen ? 1 : 0) - (b.r.gen ? 1 : 0)); }); // las que usan más de lo que tienes, primero

    var titulo = f === 'todo'
      ? (g0.length ? '🎉 Puedes cocinar ' + g0.length + (g0.length === 1 ? ' receta' : ' recetas') + ' ya mismo' : 'Todavía no tienes todo para ninguna receta')
      : (f === 'una' ? 'Te falta solo 1 ingrediente para estas' : 'Te faltan 2 ingredientes para estas');
    function pill(id, texto, n) { return '<button type="button" class="chip grande' + (f === id ? ' activo' : '') + '" data-accion="nevera-filtro" data-valor="' + id + '">' + texto + ' (' + n + ')</button>'; }

    caja.innerHTML = '<h2 class="titulo-seccion">' + titulo + '</h2>' +
      '<div class="filtros">' + pill('todo', '✅ Listas', g0.length) + pill('una', 'Falta 1', g1.length) + pill('dos', 'Faltan 2', g2.length) + '</div>' +
      (lista.length ? '<div class="rejilla">' + lista.slice(0, nevVisibles).map(function (o, i) {
        var pct = Math.round(o.tiene / o.pide * 100);
        var extra = '<div class="barra-nevera"><div style="width:' + pct + '%"></div></div>' + (o.faltan.length
          ? '<p class="falta">Te falta: ' + o.faltan.map(function (it) { return '<button type="button" class="falta-chip" data-accion="nevera-falta" data-valor="' + esc(it.id) + '" title="Toca si ya lo tienes">' + it.e + ' ' + esc(it.n.toLowerCase()) + '</button>'; }).join('') +
            '</p><div class="acciones-card"><button type="button" class="chip" data-accion="nevera-lista" data-id="' + o.r.id + '">🛒 Agregar lo que falta a mi lista</button></div>'
          : '<p class="completa">✅ ¡Tienes todo lo principal!</p>');
        return tarjetaHTML(o.r, i, extra);
      }).join('') + '</div>' + (lista.length > nevVisibles ? '<div style="margin-top:16px"><button class="boton grande" data-accion="nevera-mas">Ver más recetas ↓</button></div>' : '')
        : '<p class="vacio">No hay recetas en este grupo todavía. Agrega más ingredientes a tu nevera.</p>');
  }

  // ---------- Pantalla: hojear el libro (una receta por página doble) ----------
  function verLibro(n, direccion) {
    var total = RECETAS.length, r = RECETAS[n - 1];
    var principales = r.ingredientes.slice(0, 7);

    app.innerHTML =
      '<div class="cocina-barra">' +
        '<a class="volver" style="margin:0" href="#/">← Índice</a>' +
        '<label class="capitulos">Capítulo <select id="salto-capitulo">' +
          CAPITULOS.map(function (c) { return '<option' + (c === r.categoria ? ' selected' : '') + '>' + c + '</option>'; }).join('') +
        '</select></label>' +
        '<span>Receta ' + n + ' de ' + total + '</span>' +
      '</div>' +
      '<div class="libro ' + direccion + '">' +
        '<article class="hoja izquierda">' +
          '<div class="lamina" ' + tono(r) + '><span>' + r.emoji + '</span>' + fotoHTML(r) + '</div>' +
          '<small class="capitulo">' + r.categoria + '</small>' +
          '<h2>' + r.nombre + '</h2>' +
          '<p>' + r.descripcion + '</p>' +
          datosHTML(r) +
          '<span class="folio">' + (n * 2 - 1) + '</span>' +
        '</article>' +
        '<article class="hoja derecha">' +
          '<h3>Ingredientes</h3>' +
          '<ul class="lista">' +
            principales.map(function (ing) { return '<li>' + textoIngrediente(ing, 1) + '</li>'; }).join('') +
            (r.ingredientes.length > principales.length ? '<li class="suave">…y ' + (r.ingredientes.length - principales.length) + ' más</li>' : '') +
          '</ul>' +
          '<p class="suave">' + r.pasos.length + ' pasos explicados al detalle.</p>' +
          '<a class="boton" href="#/receta/' + r.id + '">Abrir esta receta</a>' +
          '<span class="folio">' + (n * 2) + '</span>' +
        '</article>' +
      '</div>' +
      '<div class="cocina-nav">' +
        (n > 1
          ? '<a class="boton secundario" href="#/libro/' + (n - 1) + '">← Página anterior</a>'
          : '<button class="boton secundario" disabled>← Página anterior</button>') +
        (n < total
          ? '<a class="boton" href="#/libro/' + (n + 1) + '">Pasar página →</a>'
          : '<button class="boton" disabled>Fin del libro</button>') +
      '</div>' +
      '<p class="pista">Puedes pasar las páginas con las flechas ← → del teclado o deslizando el dedo.</p>';
  }

  // ---------- Confeti de comida al terminar ----------
  function confeti() {
    var comida = ['🎉', '🍅', '🧄', '🥕', '🍋', '🌿', '🧀', '🥑', '✨', '🍳'];
    var capa = document.createElement('div');
    capa.className = 'confeti';
    for (var i = 0; i < 40; i++) {
      var s = document.createElement('span');
      s.textContent = comida[i % comida.length];
      s.style.left = (Math.random() * 100) + '%';
      s.style.animationDelay = (Math.random() * 0.9) + 's';
      s.style.fontSize = (1.2 + Math.random() * 1.4) + 'rem';
      capa.appendChild(s);
    }
    document.body.appendChild(capa);
    setTimeout(function () { capa.remove(); }, 4500);
  }

  // ---------- Un paso (se usa en el detalle y en el modo cocina) ----------
  function pasoHTML(r, i) {
    var p = r.pasos[i];
    var html = '<div class="paso">' +
      '<div class="paso-cabeza"><div class="numero">' + (i + 1) + '</div><h3>' + p.t + '</h3></div>' +
      '<p>' + p.d + '</p>';
    if (p.s) html += '<div class="nota senal"><b>👀 Cómo saber que va bien</b>' + p.s + '</div>';
    if (p.c) html += '<div class="nota consejo"><b>💡 Consejo</b>' + p.c + '</div>';
    if (p.e) html += '<div class="nota error"><b>⚠️ Error común</b>' + p.e + '</div>';
    if (p.m) html += '<button class="btn-tiempo" data-accion="timer" data-min="' + p.m + '" data-etiqueta="Paso ' + (i + 1) + ': ' + p.t + '">⏱ Poner temporizador de ' + tiempo(p.m) + '</button>';
    return html + '</div>';
  }

  // ---------- Pantalla: detalle de receta ----------
  function verReceta(r) {
    var n = porcionesDe(r), factor = n / r.porciones;
    var tachados = marcados[r.id] || {};

    app.innerHTML =
      '<a class="volver" href="#/">← Todas las recetas</a>' +
      '<section class="heroe">' +
        '<div class="emoji" ' + tono(r) + '><span>' + r.emoji + '</span>' + fotoHTML(r) + '</div>' +
        '<div><h1>' + r.nombre + '</h1><p>' + r.descripcion + '</p>' +
          '<div class="datos">' +
            '<span>🔪 Preparación: ' + tiempo(r.prep) + '</span>' +
            '<span>🔥 Cocción: ' + tiempo(r.coccion) + '</span>' +
            '<span>📊 ' + r.dificultad + '</span>' +
          '</div>' +
          creditoHTML(r) +
        '</div>' +
        '<button class="fav" data-accion="favorito" data-valor="' + r.id + '" title="Favorita">' + corazon(r.id) + '</button>' +
      '</section>' +
      '<div class="columnas">' +
        '<div>' +
          '<div class="panel">' +
            '<h2>Ingredientes</h2>' +
            '<div class="porciones">' +
              '<button data-accion="porciones" data-valor="-1" aria-label="Menos porciones">−</button>' +
              '<strong>' + n + (n === 1 ? ' porción' : ' porciones') + '</strong>' +
              '<button data-accion="porciones" data-valor="1" aria-label="Más porciones">+</button>' +
            '</div>' +
            '<ul class="lista">' +
              r.ingredientes.map(function (ing, i) {
                return '<li><label><input type="checkbox" data-ing="' + i + '"' + (tachados[i] ? ' checked' : '') + '>' +
                  '<span>' + textoIngrediente(ing, factor) + (ing.nota ? '<small>' + ing.nota + '</small>' : '') + '</span></label></li>';
              }).join('') +
            '</ul>' +
            (factor !== 1 ? '<div class="aviso">Cambiaste las porciones: las cantidades de esta lista ya están ajustadas, pero las que se mencionan dentro de los pasos son para ' + r.porciones + ' porciones.</div>' : '') +
          '</div>' +
          '<div class="panel"><h2>Lo que vas a necesitar</h2><ul class="lista">' +
            r.utensilios.map(function (u) { return '<li>' + u + '</li>'; }).join('') +
          '</ul></div>' +
          '<a class="boton grande" href="#/cocinar/' + r.id + '/0">👩‍🍳 Empezar a cocinar</a>' +
          '<div style="height:18px"></div>' + EXTRAS.recetaHTML(r) +
        '</div>' +
        '<div>' +
          (r.antes ? '<div class="panel"><h2>Antes de empezar</h2><p style="margin:0">' + r.antes + '</p></div>' : '') +
          '<div class="panel"><h2>Preparación paso a paso</h2>' +
            r.pasos.map(function (_, i) { return pasoHTML(r, i); }).join('') +
          '</div>' +
        '</div>' +
      '</div>';
  }

  // ---------- Pantalla: modo cocina (un paso a la vez) ----------
  function verCocina(r, num, direccion) {
    var total = r.pasos.length;
    mantenerPantallaEncendida();

    if (num === 0) { // mise en place: tener todo listo antes de empezar
      app.innerHTML = EXTRAS.miseHTML(r);
      return;
    }

    if (num > total) {
      app.innerHTML =
        '<div class="cocina"><div class="progreso"><div style="width:100%"></div></div>' +
        '<div class="panel final"><div class="emoji">🎉</div><h2>¡Buen provecho!</h2>' +
        '<p>Terminaste: <strong>' + r.nombre + '</strong>.</p>' +
        (r.guardar ? '<div class="nota consejo" style="text-align:left"><b>🧊 Cómo guardar lo que sobre</b>' + r.guardar + '</div>' : '') +
        EXTRAS.finalHTML(r) +
        '</div>' +
        '<div class="cocina-nav">' +
          '<a class="boton secundario" href="#/cocinar/' + r.id + '/' + total + '">← Paso anterior</a>' +
          '<a class="boton" href="#/">Ver más recetas</a>' +
        '</div></div>';
      confeti();
      return;
    }

    app.innerHTML =
      '<div class="cocina">' +
        '<div class="cocina-barra">' +
          '<a class="volver" style="margin:0" href="#/receta/' + r.id + '">✕ Salir</a>' +
          '<span>' + r.emoji + ' ' + r.nombre + ' · Paso ' + num + ' de ' + total + '</span>' +
        '</div>' +
        '<div class="progreso"><div style="width:' + Math.round((num - 1) / total * 100) + '%"></div></div>' +
        EXTRAS.vozHTML() +
        '<div class="panel hoja-suelta ' + direccion + '">' + pasoHTML(r, num - 1) + '<span class="folio">' + num + '</span></div>' +
        '<div class="cocina-nav">' +
          '<a class="boton secundario" href="#/cocinar/' + r.id + '/' + (num - 1) + '">← Anterior</a>' +
          '<a class="boton" href="#/cocinar/' + r.id + '/' + (num + 1) + '">' + (num === total ? '¡Listo! ✓' : 'Siguiente →') + '</a>' +
        '</div>' +
      '</div>';
    EXTRAS.alMostrarPaso();
  }

  function mantenerPantallaEncendida() {
    try {
      if (navigator.wakeLock) navigator.wakeLock.request('screen').catch(function () {});
    } catch (e) { /* no disponible */ }
  }

  // ---------- Temporizador flotante ----------
  var timers = [], timerId = 0, timerIntervalo = null;

  // Varios temporizadores a la vez, cada uno con su nombre
  function iniciarTimer(minutos, etiqueta) {
    var seg = Math.max(1, Math.round(minutos * 60)), nombre = etiqueta || 'Temporizador';
    var repetido = timers.filter(function (t) { return t.etiqueta === nombre && !t.terminado; })[0];
    if (repetido) { repetido.total = repetido.restante = seg; repetido.fin = Date.now() + seg * 1000; repetido.pausado = false; }
    else timers.push({ id: ++timerId, total: seg, restante: seg, fin: Date.now() + seg * 1000, etiqueta: nombre, pausado: false, terminado: false });
    if (!timerIntervalo) timerIntervalo = setInterval(tic, 250);
    pintarTimer();
  }

  function tic() {
    var cambio = false, ahora = Date.now();
    timers.forEach(function (t) {
      if (t.pausado || t.terminado) return;
      var r = Math.max(0, Math.round((t.fin - ahora) / 1000));
      if (r !== t.restante) { t.restante = r; cambio = true; }
      if (r === 0) {
        t.terminado = true; cambio = true; sonar();
        if (window.speechSynthesis && window.EXTRAS && EXTRAS.vozActiva && EXTRAS.vozActiva()) { try { speechSynthesis.speak(new SpeechSynthesisUtterance('Ya terminó el temporizador de ' + t.etiqueta.replace(/^Paso \d+: /, ''))); } catch (e) { /* sin voz */ } }
      }
    });
    if (cambio) pintarTimer();
  }

  function pintarTimer() {
    if (!timers.length) { cajaTimer.hidden = true; clearInterval(timerIntervalo); timerIntervalo = null; return; }
    cajaTimer.hidden = false;
    cajaTimer.innerHTML = timers.map(function (t) {
      var m = Math.floor(t.restante / 60), s = t.restante % 60;
      return '<div class="tim' + (t.terminado ? ' terminado' : '') + '">' +
        '<span class="reloj">' + (t.terminado ? '⏰ ¡Tiempo!' : m + ':' + (s < 10 ? '0' : '') + s) + '</span>' +
        '<span class="etiqueta">' + t.etiqueta + '</span>' +
        (t.terminado ? '' : '<button data-accion="timer-pausa" data-id="' + t.id + '">' + (t.pausado ? 'Seguir' : 'Pausar') + '</button>') +
        '<button data-accion="timer-cerrar" data-id="' + t.id + '" aria-label="Quitar temporizador">' + (t.terminado ? 'Listo' : '✕') + '</button></div>';
    }).join('');
  }

  function sonar() {
    try {
      var Ctx = window.AudioContext || window.webkitAudioContext;
      var ctx = new Ctx();
      [0, 0.35, 0.7, 1.4, 1.75, 2.1].forEach(function (t) {
        var osc = ctx.createOscillator(), gan = ctx.createGain();
        osc.frequency.value = 880;
        osc.connect(gan); gan.connect(ctx.destination);
        gan.gain.setValueAtTime(0.25, ctx.currentTime + t);
        gan.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + t + 0.28);
        osc.start(ctx.currentTime + t);
        osc.stop(ctx.currentTime + t + 0.3);
      });
    } catch (e) { /* sin sonido */ }
  }

  // ---------- Clics ----------
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-accion]');
    if (!el) return;
    var accion = el.dataset.accion, valor = el.dataset.valor;
    var ruta = rutaActual();

    if (accion === 'favorito') {
      e.preventDefault();
      var pos = favoritos.indexOf(valor);
      if (pos >= 0) favoritos.splice(pos, 1); else favoritos.push(valor);
      memoria.guardar('favoritos', favoritos);
      if (ruta.vista === 'inicio' && filtro.categoria === 'Favoritas') pintarRejilla();
      else if (ruta.vista === 'nevera') pintarNevera();
      else el.textContent = corazon(valor);
    } else if (accion === 'nevera') {
      var lugar = enNevera.indexOf(valor);
      if (lugar >= 0) { enNevera.splice(lugar, 1); ultimoAgregado = ''; } else { enNevera.push(valor); ultimoAgregado = valor; }
      memoria.guardar('nevera', enNevera);
      nevVisibles = 12;
      pintarNevera();
    } else if (accion === 'nevera-limpiar') {
      enNevera = []; ultimoAgregado = '';
      memoria.guardar('nevera', enNevera);
      pintarNevera();
    } else if (accion === 'nevera-basico') {
      ['Huevos', 'Arroz', 'Cebolla', 'Tomate', 'Papa', 'Ajo', 'Leche'].forEach(function (nom) {
        NEVERA.forEach(function (it) { if (it.n === nom && enNevera.indexOf(it.id) < 0) enNevera.push(it.id); });
      });
      ultimoAgregado = '';
      memoria.guardar('nevera', enNevera);
      pintarNevera();
    } else if (accion === 'nevera-ir') {
      var meta = document.getElementById('nevera-resultado');
      if (meta && meta.scrollIntoView) meta.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (accion === 'nevera-cat') {
      nevCat = valor; nevBusqueda = '';
      var caja = document.getElementById('nev-buscar'); if (caja) caja.value = '';
      pintarPicker();
    } else if (accion === 'nevera-filtro') {
      nevFiltro = valor; nevVisibles = 12;
      pintarResultadosNevera();
    } else if (accion === 'nevera-mas') {
      nevVisibles += 12;
      pintarResultadosNevera();
    } else if (accion === 'nevera-falta') {
      e.preventDefault();
      if (NEV_POR_ID[valor] && enNevera.indexOf(valor) < 0) { enNevera.push(valor); ultimoAgregado = valor; memoria.guardar('nevera', enNevera); pintarNevera(); }
    } else if (accion === 'nevera-lista') {
      e.preventDefault();
      var rec = buscarReceta(el.dataset.id), tengoIds = {};
      enNevera.forEach(function (id) { tengoIds[id] = 1; });
      if (rec) {
        var nombres = necesita(rec).filter(function (it) { return !tengoIds[it.id]; }).map(function (it) { return it.n; });
        EXTRAS.agregarACompras(nombres.join(', '));
        el.textContent = '✅ Agregado a tu lista del mercado';
        el.disabled = true;
      }
    } else if (accion === 'momento') {
      filtro.momento = filtro.momento === valor ? '' : valor;
      visibles = POR_PAGINA;
      document.querySelectorAll('.momento').forEach(function (b) { b.classList.toggle('activo', b.dataset.valor === filtro.momento); });
      pintarRejilla();
    } else if (accion === 'reciente' || accion === 'dijiste') {
      ponerTexto(valor); guardarReciente(valor);
    } else if (accion === 'buscar-borrar') {
      ponerTexto('');
      var campo = document.getElementById('buscador'); if (campo) campo.focus();
    } else if (accion === 'buscar-voz') {
      buscarPorVoz(el);
    } else if (accion === 'mas') {
      visibles += POR_PAGINA;
      pintarRejilla();
    } else if (accion === 'categoria') {
      filtro.categoria = valor;
      filtro.momento = '';
      visibles = POR_PAGINA;
      verInicio();
    } else if (accion === 'porciones' && ruta.receta) {
      var nuevo = Math.min(24, Math.max(1, porcionesDe(ruta.receta) + Number(valor)));
      porcionesElegidas[ruta.receta.id] = nuevo;
      memoria.guardar('porciones', porcionesElegidas);
      var y = window.scrollY;
      verReceta(ruta.receta);
      window.scrollTo(0, y);
    } else if (accion === 'timer') {
      iniciarTimer(Number(el.dataset.min), el.dataset.etiqueta);
    } else if (accion === 'timer-pausa') {
      timers.forEach(function (t) {
        if (String(t.id) !== el.dataset.id) return;
        t.pausado = !t.pausado;
        if (!t.pausado) t.fin = Date.now() + t.restante * 1000;
      });
      pintarTimer();
    } else if (accion === 'timer-cerrar') {
      timers = timers.filter(function (t) { return String(t.id) !== el.dataset.id; });
      pintarTimer();
    } else if (EXTRAS.acciones[accion]) {
      EXTRAS.acciones[accion](el, valor, ruta);
    }
  });

  // Saltar a un capítulo del libro
  document.addEventListener('change', function (e) {
    if (e.target.id !== 'salto-capitulo') return;
    for (var k = 0; k < RECETAS.length; k++) {
      if (RECETAS[k].categoria === e.target.value) { location.hash = '#/libro/' + (k + 1); return; }
    }
  });

  // Tachar ingredientes
  document.addEventListener('change', function (e) {
    var ruta = rutaActual();
    if (e.target.dataset.ing == null || !ruta.receta) return;
    marcados[ruta.receta.id] = marcados[ruta.receta.id] || {};
    marcados[ruta.receta.id][e.target.dataset.ing] = e.target.checked;
  });

  // Flechas del teclado en modo cocina
  document.addEventListener('keydown', function (e) {
    if (/^(INPUT|TEXTAREA)$/.test(e.target.tagName)) return;
    if (e.key === 'ArrowRight') pasarPagina(1);
    if (e.key === 'ArrowLeft') pasarPagina(-1);
  });

  // Deslizar el dedo para pasar página
  var toqueX = null, toqueY = null, toqueValido = false;
  document.addEventListener('touchstart', function (e) {
    toqueX = e.touches[0].clientX; toqueY = e.touches[0].clientY;
    // No cuenta si empieza sobre un campo de texto, un menú o algo que se desplaza de lado
    toqueValido = e.touches.length === 1 && !e.target.closest('input, textarea, select, .momentos, .nev-pestanas, .nev-mini, .menu');
  }, { passive: true });
  document.addEventListener('touchend', function (e) {
    if (toqueX == null || !toqueValido) { toqueX = null; return; }
    var dx = e.changedTouches[0].clientX - toqueX, dy = e.changedTouches[0].clientY - toqueY;
    toqueX = null;
    // Solo un gesto largo y claramente horizontal pasa de página (no al desplazarse hacia abajo)
    if (Math.abs(dx) > 80 && Math.abs(dx) > Math.abs(dy) * 2) pasarPagina(dx < 0 ? 1 : -1);
  }, { passive: true });

  // Con el teclado abierto se esconde el menú de abajo, para que no estorbe
  document.addEventListener('focusin', function (e) { if (e.target.matches && e.target.matches('input:not([type=checkbox]):not([type=file]), textarea, select')) document.body.classList.add('teclado'); });
  document.addEventListener('focusout', function () { setTimeout(function () { var f = document.activeElement; if (!f || !f.matches || !f.matches('input:not([type=checkbox]):not([type=file]), textarea, select')) document.body.classList.remove('teclado'); }, 60); });

  // Avanza (+1) o retrocede (-1) una página en el libro o en el modo cocina
  function pasarPagina(salto) {
    var ruta = rutaActual();
    if (ruta.vista === 'libro') {
      var n = ruta.pagina + salto;
      if (n >= 1 && n <= RECETAS.length) location.hash = '#/libro/' + n;
    } else if (ruta.vista === 'cocina') {
      var p = ruta.paso + salto;
      if (p >= 0 && p <= ruta.receta.pasos.length + 1) location.hash = '#/cocinar/' + ruta.receta.id + '/' + p;
    }
  }

  // ---------- Navegación ----------
  function rutaActual() {
    var partes = location.hash.replace(/^#\/?/, '').split('/');
    var receta = buscarReceta(partes[1]);
    if (partes[0] === 'nevera') return { vista: 'nevera' };
    if (partes[0] === 'libro') {
      return { vista: 'libro', pagina: Math.min(RECETAS.length, Math.max(1, parseInt(partes[1], 10) || 1)) };
    }
    if (partes[0] === 'receta' && receta) return { vista: 'receta', receta: receta };
    if (partes[0] === 'cocinar' && receta) {
      var pedido = parseInt(partes[2], 10);
      var paso = Math.min(receta.pasos.length + 1, Math.max(0, isNaN(pedido) ? 1 : pedido));
      return { vista: 'cocina', receta: receta, paso: paso };
    }
    if (EXTRAS.vistas[partes[0]]) return { vista: 'extra', nombre: partes[0], partes: partes };
    return { vista: 'inicio' };
  }

  var ultima = { vista: '', numero: 0 };

  function navegar(sinSubir) {
    var ruta = rutaActual();
    // ¿Hacia dónde se pasa la página? (para la animación)
    var numero = ruta.pagina || ruta.paso || 0;
    var direccion = (ruta.vista === ultima.vista && numero < ultima.numero) ? 'atras' : 'adelante';
    ultima = { vista: ruta.vista, numero: numero };

    if (ruta.vista === 'receta') verReceta(ruta.receta);
    else if (ruta.vista === 'cocina') verCocina(ruta.receta, ruta.paso, direccion);
    else if (ruta.vista === 'libro') verLibro(ruta.pagina, direccion);
    else if (ruta.vista === 'nevera') verNevera();
    else if (ruta.vista === 'extra') EXTRAS.vistas[ruta.nombre](ruta.partes);
    else verInicio();
    if (sinSubir !== true) window.scrollTo(0, 0);
  }

  // Lo que extras.js necesita de esta app
  window.APP = {
    app: app, buscarReceta: buscarReceta, tarjetaHTML: tarjetaHTML, textoIngrediente: textoIngrediente,
    porcionesDe: porcionesDe, tiempo: tiempo, iniciarTimer: iniciarTimer, pasarPagina: pasarPagina, rutaActual: rutaActual,
    // Lo que falta de cada temporizador, dicho en palabras (para el modo manos libres)
    timersTexto: function () {
      var vivos = timers.filter(function (t) { return !t.terminado; });
      if (!timers.length) return 'No tienes temporizadores.';
      return timers.map(function (t) {
        if (t.terminado) return t.etiqueta + ': ya terminó.';
        var m = Math.floor(t.restante / 60), s = t.restante % 60;
        return t.etiqueta + ': faltan ' + (m ? m + (m === 1 ? ' minuto' : ' minutos') : '') + (m && s ? ' y ' : '') + (s || !m ? s + ' segundos' : '') + '.';
      }).join(' ');
    },
    inicio: function () { visibles = POR_PAGINA; verInicio(); },
    repintar: function () { navegar(true); }
  };

  window.addEventListener('hashchange', function () { navegar(); });
  navegar();
})();
