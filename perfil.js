/* ============================================================
   PERFILES Y TEMA
   ------------------------------------------------------------
   No hay servidor ni contraseñas: un perfil es un nombre y un avatar, y
   sus datos (favoritos, plan, compras, progreso…) se guardan en este
   navegador. En un mismo celular pueden usarse varios perfiles (familia).
   Para pasar los datos a otro celular hay un código de copia de seguridad.
   Se carga ANTES de extras.js y app.js.
   ============================================================ */
var PERFIL = (function () {
  'use strict';

  // Datos que pertenecen a cada perfil (todo lo demás es del dispositivo, como el tema)
  var DATOS = ['favoritos', 'porciones', 'nevera', 'cocinadas', 'notas', 'tecnicas', 'retos', 'plan', 'comprasHechas', 'comprasExtra', 'ciudad', 'tiendas', 'tiendaActual', 'precios', 'misRecetas', 'historialCompras', 'comprasRegistradas'];
  var AVATARES = ['🍳', '🥑', '🍕', '🍰', '🌶️', '🍋', '🥕', '🧁', '🍜', '🥘', '🦊', '🐼', '🦉', '🌻', '⭐', '🔥'];

  function leer(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function escribir(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* sin almacenamiento */ } }

  // El primer perfil (id vacío) usa las claves de siempre: así nadie pierde lo que ya había guardado.
  var lista = leer('perfiles', null);
  if (!Array.isArray(lista) || !lista.length) lista = [{ id: '', n: '', e: AVATARES[0] }];
  var actualId = leer('perfilActual', '');
  if (!lista.some(function (p) { return p.id === actualId; })) actualId = lista[0].id;

  function persistir() { escribir('perfiles', lista); escribir('perfilActual', actualId); }
  function prefijo(id) { return id ? 'p:' + id + ':' : ''; }
  function clave(k) { return DATOS.indexOf(k) >= 0 ? prefijo(actualId) + k : k; }
  function actual() { return lista.filter(function (p) { return p.id === actualId; })[0] || lista[0]; }
  function sinNombre() { return !actual().n; }

  function establecer(nombre, avatar) {
    var p = actual();
    p.n = String(nombre || '').trim().slice(0, 24);
    p.e = avatar || p.e;
    persistir();
    pintarCabecera();
  }
  function agregar(nombre, avatar) {
    var id = 'u' + Date.now().toString(36) + Math.floor(Math.random() * 1000).toString(36);
    lista.push({ id: id, n: String(nombre || '').trim().slice(0, 24), e: avatar || AVATARES[lista.length % AVATARES.length] });
    persistir();
    return id;
  }
  function cambiar(id) {
    if (!lista.some(function (p) { return p.id === id; })) return;
    actualId = id; persistir();
    location.hash = '#/';
    location.reload();
  }
  function renombrar(id, nombre, avatar) {
    lista.forEach(function (p) { if (p.id === id) { p.n = String(nombre || '').trim().slice(0, 24) || p.n; if (avatar) p.e = avatar; } });
    persistir(); pintarCabecera();
  }
  function borrar(id) {
    if (lista.length < 2) return false;
    DATOS.forEach(function (k) { try { localStorage.removeItem(prefijo(id) + k); } catch (e) { /* nada */ } });
    lista = lista.filter(function (p) { return p.id !== id; });
    if (actualId === id) actualId = lista[0].id;
    persistir();
    return true;
  }

  // ---- Copia de seguridad: un texto que se copia y se pega en otro celular
  function utf8(s) { return btoa(unescape(encodeURIComponent(s))); }
  function deUtf8(s) { return decodeURIComponent(escape(atob(s))); }
  function exportar() {
    var datos = {};
    DATOS.forEach(function (k) {
      var v = null;
      try { v = localStorage.getItem(clave(k)); } catch (e) { /* nada */ }
      if (v !== null) { try { datos[k] = JSON.parse(v); } catch (e) { /* dato dañado: se omite */ } }
    });
    var p = actual();
    return 'PAP1:' + utf8(JSON.stringify({ app: 'paso-a-paso', v: 1, n: p.n, e: p.e, datos: datos }));
  }
  function importar(texto) {
    var t = String(texto || '').trim().replace(/\s+/g, '');
    if (t.indexOf('PAP1:') === 0) t = t.slice(5);
    var o;
    try { o = JSON.parse(deUtf8(t)); } catch (e) { return { ok: false, error: 'Ese código no se pudo leer. Cópialo completo, sin cortar.' }; }
    if (!o || o.app !== 'paso-a-paso' || typeof o.datos !== 'object') return { ok: false, error: 'Ese código no es de Paso a Paso.' };
    var id = agregar((o.n || 'Importado') + (o.n ? ' (copia)' : ''), o.e);
    DATOS.forEach(function (k) { if (o.datos[k] !== undefined) escribir(prefijo(id) + k, o.datos[k]); });
    return { ok: true, id: id };
  }

  // ---- Tema: automático (según el celular), claro u oscuro
  var TEMAS = ['auto', 'claro', 'oscuro'], ICONOS = { auto: '🌓', claro: '☀️', oscuro: '🌙' }, NOMBRES = { auto: 'Automático', claro: 'Claro', oscuro: 'Oscuro' };
  function tema() { var t = leer('tema', 'auto'); return TEMAS.indexOf(t) >= 0 ? t : 'auto'; }
  function aplicarTema(t) {
    if (t === 'auto') document.documentElement.removeAttribute('data-tema'); else document.documentElement.setAttribute('data-tema', t);
    var meta = document.querySelector('meta[name=theme-color]');
    var oscuro = t === 'oscuro' || (t === 'auto' && window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches);
    if (meta) meta.setAttribute('content', oscuro ? '#1f160d' : '#98501b');
  }
  function ponerTema(t) {
    if (TEMAS.indexOf(t) < 0) return;
    escribir('tema', t); aplicarTema(t); pintarCabecera();
  }
  function siguienteTema() {
    var t = TEMAS[(TEMAS.indexOf(tema()) + 1) % TEMAS.length];
    escribir('tema', t); aplicarTema(t); pintarCabecera();
    return t;
  }

  // ---- Encabezado y menú
  function pintarCabecera() {
    var p = actual(), a = document.getElementById('perfil-avatar'), n = document.getElementById('perfil-nombre'), b = document.getElementById('btn-tema');
    if (a) a.textContent = p.n ? p.e : '👤';
    if (n) n.textContent = p.n || 'Entrar';
    if (b) { b.textContent = ICONOS[tema()]; b.title = 'Tema: ' + NOMBRES[tema()] + ' (toca para cambiar)'; b.setAttribute('aria-label', b.title); }
  }
  function marcarMenu() {
    var h = location.hash.replace(/^#\/?/, '').split('/')[0], seccion = { nevera: 1, plan: 1, compras: 1, aprender: 1, progreso: 1 }[h] ? h : (h === 'perfil' ? '' : 'recetas');
    var items = document.querySelectorAll('.menu a[data-ruta]');
    for (var i = 0; i < items.length; i++) items[i].classList.toggle('activo', items[i].dataset.ruta === seccion);
  }

  aplicarTema(tema());
  document.addEventListener('DOMContentLoaded', function () { pintarCabecera(); marcarMenu(); });
  window.addEventListener('hashchange', marcarMenu);

  return {
    DATOS: DATOS, AVATARES: AVATARES, clave: clave, actual: actual, todos: function () { return lista.slice(); }, sinNombre: sinNombre,
    establecer: establecer, agregar: agregar, cambiar: cambiar, renombrar: renombrar, borrar: borrar, exportar: exportar, importar: importar,
    tema: tema, siguienteTema: siguienteTema, ponerTema: ponerTema, nombreTema: function () { return NOMBRES[tema()]; }, pintarCabecera: pintarCabecera, marcarMenu: marcarMenu
  };
})();
