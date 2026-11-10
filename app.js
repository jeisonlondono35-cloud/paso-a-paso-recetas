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
        var v = localStorage.getItem(clave);
        return v ? JSON.parse(v) : defecto;
      } catch (e) { return defecto; }
    },
    guardar: function (clave, valor) {
      try { localStorage.setItem(clave, JSON.stringify(valor)); } catch (e) { /* sin almacenamiento */ }
    }
  };

  var favoritos = memoria.leer('favoritos', []);
  var porcionesElegidas = memoria.leer('porciones', {});
  var marcados = {}; // ingredientes tachados, por receta
  var filtro = { texto: '', categoria: 'Todas' };

  // Color de cada categoría (tono de 0 a 360)
  var TONOS = { 'Básicos': 42, 'Desayunos': 50, 'Platos fuertes': 14, 'Acompañamientos': 62, 'Sopas': 95, 'Ensaladas': 135, 'Comida japonesa': 350, 'Cocina italiana': 5, 'Cocina española': 38, 'Cocina mexicana': 150, 'Cocina peruana': 20, 'Cocina argentina': 205, 'Cocina brasileña': 110, 'Cocina boliviana': 0, 'Cocina venezolana': 48, 'Sándwiches y arepas': 28, 'Pasabocas': 78, 'Postres': 330, 'Bebidas': 200 };

  // El libro va ordenado por capítulos (categorías); dentro de cada uno, primero las recetas con foto
  var CAPITULOS = ['Básicos', 'Desayunos', 'Platos fuertes', 'Acompañamientos', 'Sopas', 'Ensaladas', 'Comida japonesa', 'Cocina italiana', 'Cocina española', 'Cocina mexicana', 'Cocina peruana', 'Cocina argentina', 'Cocina brasileña', 'Cocina boliviana', 'Cocina venezolana', 'Sándwiches y arepas', 'Pasabocas', 'Postres', 'Bebidas'];
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

  // Ingredientes de "¿Qué tengo en la nevera?".
  // k = palabra que se busca en los ingredientes de cada receta (sin tildes).
  var NEVERA = [
    { n: 'Huevos', e: '🥚', k: 'huevo' }, { n: 'Arroz', e: '🍚', k: 'arroz' },
    { n: 'Tomate', e: '🍅', k: 'tomate' }, { n: 'Cebolla', e: '🧅', k: 'cebolla' },
    { n: 'Ajo', e: '🧄', k: 'ajo' }, { n: 'Papa', e: '🥔', k: 'papa' },
    { n: 'Zanahoria', e: '🥕', k: 'zanahoria' }, { n: 'Pollo', e: '🍗', k: 'pollo' },
    { n: 'Carne molida', e: '🥩', k: 'carne molida' }, { n: 'Pescado', e: '🐟', k: 'pescado' },
    { n: 'Pasta', e: '🍝', k: 'espagueti' }, { n: 'Lentejas', e: '🫘', k: 'lenteja' },
    { n: 'Leche', e: '🥛', k: 'leche(?! de coco)' }, { n: 'Mantequilla', e: '🧈', k: 'mantequilla' },
    { n: 'Queso', e: '🧀', k: 'queso' }, { n: 'Harina de trigo', e: '🌾', k: 'harina de trigo' },
    { n: 'Harina para arepas', e: '🌽', k: 'harina de maiz' }, { n: 'Limón', e: '🍋', k: 'limon' },
    { n: 'Aguacate', e: '🥑', k: 'aguacate' }, { n: 'Lechuga', e: '🥬', k: 'lechuga' },
    { n: 'Pepino', e: '🥒', k: 'pepino' }, { n: 'Cilantro', e: '🌿', k: 'cilantro' },
    { n: 'Banano', e: '🍌', k: 'banano' }, { n: 'Avena', e: '🥣', k: 'avena' },
    { n: 'Chocolate', e: '🍫', k: 'chocolate' }, { n: 'Cerdo', e: '🐖', k: '(cerdo|chuleta)' },
    { n: 'Carne de res', e: '🥩', k: '(de res|bistec)' }, { n: 'Camarones', e: '🍤', k: 'camaron' },
    { n: 'Salmón', e: '🍣', k: 'salmon' }, { n: 'Champiñones', e: '🍄', k: 'champinon' },
    { n: 'Crema de leche', e: '🥛', k: 'crema de leche' }, { n: 'Yogur', e: '🥣', k: 'yogur' },
    { n: 'Pimentón', e: '🫑', k: 'pimenton(es)?( rojo| de colores| o verde|\\||$)' }, { n: 'Espinaca', e: '🥬', k: 'espinaca' },
    { n: 'Brócoli', e: '🥦', k: 'brocoli' }, { n: 'Calabacín', e: '🥒', k: 'calabacin' },
    { n: 'Naranja', e: '🍊', k: 'naranja' }, { n: 'Fresas', e: '🍓', k: 'fresa' },
    { n: 'Mango', e: '🥭', k: 'mango' }, { n: 'Pan', e: '🍞', k: 'pan (de molde|grueso|rallado)' },
    { n: 'Tortillas', e: '🌮', k: 'tortilla' }, { n: 'Atún', e: '🐟', k: 'atun' },
    { n: 'Salsa de soya', e: '🥢', k: 'salsa de soya' }, { n: 'Leche de coco', e: '🥥', k: 'leche de coco' }
  ];
  var enNevera = memoria.leer('nevera', []);

  // Qué ingredientes de la lista NEVERA necesita una receta (sin contar los opcionales)
  function necesita(r) {
    if (r._pide) return r._pide;
    var texto = r.ingredientes.filter(function (i) {
      return i.c != null && !/^Opcional/.test(i.nota || '');
    }).map(function (i) { return sinTildes(i.n); }).join(' | ');
    r._pide = NEVERA.filter(function (item) {
      return new RegExp('\\b' + item.k).test(texto);
    });
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

  // ---------- Pantalla: inicio ----------
  function verInicio() {
    var categorias = ['Todas', 'Favoritas'];
    RECETAS.forEach(function (r) {
      if (categorias.indexOf(r.categoria) < 0) categorias.push(r.categoria);
    });

    app.innerHTML =
      '<header class="cabecera">' +
        '<h1>Paso <span>a</span> Paso</h1>' +
        '<p>' + RECETAS.length + ' recetas explicadas con todo detalle: qué hacer, cómo se ve cuando va bien y qué errores evitar.</p>' +
        '<div class="acciones">' +
          '<a class="accion nevera" href="#/nevera"><span>🧊</span><div><strong>¿Qué tengo en la nevera?</strong><small>Marca lo que tienes y te digo qué puedes cocinar</small></div></a>' +
          '<a class="accion sorpresa" href="#/libro/1"><span>📖</span><div><strong>Hojear el libro</strong><small>Pasa las páginas, receta por receta</small></div></a>' +
        '</div>' +
      '</header>' +
      '<input class="buscador" id="buscador" type="search" placeholder="🔍 Busca: «algo rápido con pollo y arroz», «postre sin horno»…" value="' + filtro.texto.replace(/"/g, '&quot;') + '">' +
      EXTRAS.inicioHTML() +
      '<div class="filtros">' +
        categorias.map(function (c) {
          return '<button class="chip' + (c === filtro.categoria ? ' activo' : '') + '" data-accion="categoria" data-valor="' + c + '">' + c + '</button>';
        }).join('') +
      '</div>' +
      '<div class="rejilla" id="rejilla"></div><div id="pie-rejilla"></div>';

    document.getElementById('buscador').addEventListener('input', function (e) {
      filtro.texto = e.target.value;
      visibles = POR_PAGINA;
      pintarRejilla();
    });
    pintarRejilla();
  }

  function pintarRejilla() {
    var q = sinTildes(filtro.texto.trim());
    var pista = EXTRAS.interpretar(q); // entiende frases como "rápido", "sin horno", "para llevar"
    var lista = RECETAS.filter(function (r) {
      if (filtro.categoria === 'Favoritas' && favoritos.indexOf(r.id) < 0) return false;
      if (filtro.categoria !== 'Todas' && filtro.categoria !== 'Favoritas' && r.categoria !== filtro.categoria) return false;
      if (!EXTRAS.pasaFiltros(r) || !pista.pasa(r)) return false;
      if (!pista.palabras.length) return true;
      if (!r._busca) r._busca = sinTildes(r.nombre + ' ' + r.categoria + ' ' + r.ingredientes.map(function (i) { return i.n; }).join(' '));
      return pista.palabras.every(function (palabra) { return r._busca.indexOf(palabra) >= 0; });
    });
    var entendido = document.getElementById('entendido');
    if (entendido) entendido.innerHTML = pista.etiquetas.length ? 'Entendí: ' + pista.etiquetas.map(function (t) { return '<span>' + t + '</span>'; }).join('') : '';

    // En la portada general, primero las recetas con foto
    if (filtro.categoria === 'Todas' && !q) {
      lista = lista.filter(function (r) { return !r.gen; }).concat(lista.filter(function (r) { return r.gen; }));
    }

    var rejilla = document.getElementById('rejilla'), pie = document.getElementById('pie-rejilla');
    if (!lista.length) {
      rejilla.innerHTML = '<p class="vacio">No encontré recetas con esa búsqueda y esos filtros. Prueba con menos palabras o quita algún filtro.</p>';
      pie.innerHTML = '';
      return;
    }
    var desde = visibles - POR_PAGINA;
    rejilla.innerHTML = lista.slice(0, visibles).map(function (r, i) { return tarjetaHTML(r, Math.max(0, i - desde), ''); }).join('');
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

  // ---------- Pantalla: ¿qué tengo en la nevera? ----------
  function verNevera() {
    app.innerHTML =
      '<a class="volver" href="#/">← Todas las recetas</a>' +
      '<div class="panel">' +
        '<h2>🧊 ¿Qué tengo en la nevera?</h2>' +
        '<p class="suave">Toca los ingredientes que tienes en casa. La sal, el aceite, el azúcar y el agua ya los doy por hechos.</p>' +
        '<div class="filtros" id="nevera-chips"></div>' +
        '<button class="boton secundario" data-accion="nevera-limpiar">Vaciar la nevera</button>' +
      '</div>' +
      '<div id="nevera-resultado"></div>';
    pintarNevera();
  }

  function pintarNevera() {
    document.getElementById('nevera-chips').innerHTML = NEVERA.map(function (item) {
      var activo = enNevera.indexOf(item.k) >= 0;
      return '<button class="chip grande' + (activo ? ' activo' : '') + '" data-accion="nevera" data-valor="' + item.k + '">' + item.e + ' ' + item.n + '</button>';
    }).join('');

    var caja = document.getElementById('nevera-resultado');
    if (!enNevera.length) {
      caja.innerHTML = '<p class="vacio">👆 Marca al menos un ingrediente para ver qué puedes preparar.</p>';
      return;
    }

    var opciones = RECETAS.map(function (r) {
      var pide = necesita(r);
      var faltan = pide.filter(function (item) { return enNevera.indexOf(item.k) < 0; });
      return { r: r, pide: pide.length, tiene: pide.length - faltan.length, faltan: faltan };
    }).filter(function (o) { return o.tiene > 0; });

    opciones.sort(function (a, b) {
      return a.faltan.length - b.faltan.length || b.tiene - a.tiene;
    });
    var listasTotal = opciones.filter(function (o) { return !o.faltan.length; }).length;
    opciones = opciones.slice(0, Math.max(30, Math.min(listasTotal, 60)));

    if (!opciones.length) {
      caja.innerHTML = '<p class="vacio">Con eso solo no me alcanza para ninguna receta. Marca algo más.</p>';
      return;
    }

    var listas = listasTotal;
    caja.innerHTML =
      '<h2 class="titulo-seccion">' + (listas
        ? '🎉 Puedes preparar ' + listas + (listas === 1 ? ' receta' : ' recetas') + ' ya mismo'
        : 'Estás cerca de estas recetas') + '</h2>' +
      '<div class="rejilla">' + opciones.map(function (o, i) {
        var pct = Math.round(o.tiene / o.pide * 100);
        var extra = '<div class="barra-nevera"><div style="width:' + pct + '%"></div></div>' +
          (o.faltan.length
            ? '<p class="falta">Te falta: ' + o.faltan.map(function (f) { return f.e + ' ' + f.n.toLowerCase(); }).join(', ') + '</p>'
            : '<p class="completa">✅ ¡Tienes todo lo principal!</p>');
        return tarjetaHTML(o.r, i, extra);
      }).join('') + '</div>';
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
  var timer = { fin: 0, restante: 0, etiqueta: '', intervalo: null, pausado: false, terminado: false };

  function iniciarTimer(minutos, etiqueta) {
    clearInterval(timer.intervalo);
    timer.restante = minutos * 60;
    timer.fin = Date.now() + timer.restante * 1000;
    timer.etiqueta = etiqueta;
    timer.pausado = false;
    timer.terminado = false;
    timer.intervalo = setInterval(tic, 250);
    pintarTimer();
  }

  function tic() {
    if (timer.pausado || timer.terminado) return;
    timer.restante = Math.max(0, Math.round((timer.fin - Date.now()) / 1000));
    if (timer.restante === 0) {
      timer.terminado = true;
      sonar();
    }
    pintarTimer();
  }

  function pintarTimer() {
    cajaTimer.hidden = false;
    cajaTimer.classList.toggle('terminado', timer.terminado);
    var m = Math.floor(timer.restante / 60), s = timer.restante % 60;
    cajaTimer.innerHTML =
      '<span class="reloj">' + (timer.terminado ? '⏰ ¡Tiempo!' : m + ':' + (s < 10 ? '0' : '') + s) + '</span>' +
      '<span class="etiqueta">' + timer.etiqueta + '</span>' +
      (timer.terminado ? '' : '<button data-accion="timer-pausa">' + (timer.pausado ? 'Seguir' : 'Pausar') + '</button>') +
      '<button data-accion="timer-cerrar">' + (timer.terminado ? 'Listo' : '✕') + '</button>';
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
      if (lugar >= 0) enNevera.splice(lugar, 1); else enNevera.push(valor);
      memoria.guardar('nevera', enNevera);
      pintarNevera();
    } else if (accion === 'nevera-limpiar') {
      enNevera = [];
      memoria.guardar('nevera', enNevera);
      pintarNevera();
    } else if (accion === 'mas') {
      visibles += POR_PAGINA;
      pintarRejilla();
    } else if (accion === 'categoria') {
      filtro.categoria = valor;
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
      timer.pausado = !timer.pausado;
      if (!timer.pausado) timer.fin = Date.now() + timer.restante * 1000;
      pintarTimer();
    } else if (accion === 'timer-cerrar') {
      clearInterval(timer.intervalo);
      cajaTimer.hidden = true;
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
  var toqueX = null;
  document.addEventListener('touchstart', function (e) { toqueX = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', function (e) {
    if (toqueX == null) return;
    var dx = e.changedTouches[0].clientX - toqueX;
    toqueX = null;
    if (Math.abs(dx) > 70) pasarPagina(dx < 0 ? 1 : -1);
  }, { passive: true });

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
    inicio: function () { visibles = POR_PAGINA; verInicio(); },
    repintar: function () { navegar(true); }
  };

  window.addEventListener('hashchange', function () { navegar(); });
  navegar();
})();
