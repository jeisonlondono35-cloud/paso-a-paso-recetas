/* ============================================================
   FOTOS DE LAS RECETAS POR FAMILIAS
   ------------------------------------------------------------
   Las recetas de familia comparten foto por tipo de plato.
   Cada regla es [patrón del nombre, archivo en la carpeta fotos/].
   Gana la primera regla que coincida.
   ============================================================ */
(function () {
  var REGLAS = [
    [/^Salteado de/, 'salteado'],
    [/^Pinchos de camarones/, 'pinchos-camaron'], [/^Pinchos de res/, 'bistec'], [/^Pinchos de cerdo/, 'chuletas'], [/^Pinchos de verduras/, 'verduras-asadas'], [/^Pinchos/, 'pinchos'],
    [/^Pescado apanado/, 'pescado-apanado'], [/^Berenjena apanada/, 'berenjena-apanada'], [/apanada|^Milanesa/, 'milanesa'],
    [/^Alitas/, 'alitas'], [/^Muslos de pollo al horno/, 'muslos-horno'], [/^Pechugas de pollo al horno/, 'pollo-plancha'],
    [/^Lomo de cerdo al horno|^Medallones/, 'lomo-cerdo'], [/^Filetes de pescado al horno/, 'pescado-horno'],
    [/^Salmón/, 'salmon'], [/^Papas en cascos/, 'papas-cascos'], [/^Coliflor al horno/, 'coliflor-asada'],
    [/^Pechuga de pollo/, 'pollo-plancha'], [/^Contramuslos/, 'contramuslos'], [/^Chuletas/, 'chuletas'],
    [/^Bistec/, 'bistec'], [/^Filete de pescado blanco/, 'pescado-ajillo'], [/^Camarones/, 'camarones'], [/^Tofu/, 'tofu'],
    [/^Pollo (guisado|en salsa|al curry|a la cerveza)/, 'pollo-guisado'], [/^Carne de res/, 'estofado-res'], [/^Cerdo/, 'cerdo-guisado'],
    [/^Albóndigas/, 'albondigas'], [/^Pescado (guisado|en salsa|al curry|a la cerveza)/, 'pescado-guisado'], [/^Garbanzos/, 'garbanzos-guisados'],
    [/^Crema de (zanahoria|ahuyama|batata)/, 'crema-naranja'], [/^Crema de (brócoli|espinaca|arveja|calabacín|espárragos|apio)/, 'crema-verde'],
    [/^Crema de (tomate|pimentón|remolacha)/, 'crema-roja'], [/^Crema de/, 'crema-blanca'],
    [/^Sopa de pollo/, 'sopa-pollo'], [/^Sopa de res/, 'sopa-res'], [/^Sopa de verduras/, 'sopa-verduras'],
    [/^Arroz integral/, 'arroz-integral'], [/^Arroz (con|verde|amarillo)/, 'arroz-verduras'],
    [/en salsa de tomate$/, 'pasta-tomate'], [/al ajo y aceite$/, 'pasta-ajo'], [/con mantequilla y queso$/, 'pasta-queso'],
    [/en salsa blanca con champiñones$/, 'pasta-champinones'], [/a la boloñesa$/, 'pasta-bolonesa'], [/al pesto de albahaca$/, 'pasta-pesto'],
    [/con atún y tomate$/, 'pasta-atun'], [/con pollo en salsa cremosa$/, 'pasta-pollo'], [/con verduras salteadas$/, 'pasta-verduras'], [/con tocineta y crema$/, 'pasta-tocineta'],
    [/^Ensalada verde/, 'ensalada-fresca'], [/^Ensalada de espinaca/, 'ensalada-espinaca'], [/^Ensalada de repollo/, 'ensalada-repollo'],
    [/^Ensalada de pasta/, 'ensalada-pasta'], [/^Ensalada de quinua/, 'ensalada-quinua'], [/^Ensalada de garbanzos/, 'ensalada-garbanzos'],
    [/^Ensalada de papa/, 'ensalada-papa'], [/^Ensalada de tomate/, 'ensalada-tomate'],
    [/^Lentejas/, 'lentejas'], [/^Fríjoles/, 'frijoles'], [/^Arvejas secas/, 'arvejas'],
    [/ al vapor /, 'verduras-vapor'], [/ asad[oa]s? al horno$/, 'verduras-asadas'], [/ saltead[oa]s? al ajo$/, 'verduras-salteadas'],
    [/^Puré/, 'pure'], [/^Papas doradas/, 'papas-doradas'], [/^Papas aplastadas/, 'papas-aplastadas'], [/^Papas saladas/, 'papas-saladas'],
    [/^Omelette/, 'omelette'], [/^Huevos revueltos/, 'huevos-pericos'],
    [/^Sándwich/, 'sandwich'], [/^Quesadilla/, 'quesadilla'], [/^Arepa rellena/, 'arepas'], [/^Wrap/, 'wrap'], [/^Tostadas/, 'tostadas'],
    [/^Paletas/, 'paletas'], [/^Limonada/, 'limonada'],
    [/^(Torta|Muffins) (de chocolate|marmolead)/, 'torta-chocolate'], [/^Torta/, 'torta'], [/^Muffins/, 'muffins'],
    [/^Galletas/, 'galletas'], [/^Avena/, 'avena'], [/^Panqueques/, 'panqueques']
  ];

  var FRUTAS = ['fresa', 'mango', 'banano', 'piña', 'papaya', 'mora', 'maracuyá', 'guanábana', 'lulo', 'guayaba', 'melón', 'sandía', 'durazno', 'manzana', 'pera', 'kiwi', 'frutos rojos', 'uva', 'tomate de árbol', 'curuba', 'arándanos', 'cereza', 'feijoa', 'ciruela'];
  function slug(s) {
    return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-');
  }

  RECETAS.forEach(function (r) {
    if (!r.gen || r.foto) return;
    // Bebidas de fruta: foto de la fruta
    var m = /^(Batido|Smoothie|Jugo) de (.+?)( con (yogur|avena))?$/.exec(r.nombre);
    if (m && FRUTAS.indexOf(m[2]) >= 0) { r.foto = 'fruta-' + slug(m[2]); return; }
    // Paletas de fruta: foto de esa fruta (en vez de una sola foto para todas)
    m = /^Paletas (?:cremosas )?de (.+)$/.exec(r.nombre);
    if (m && FRUTAS.indexOf(m[1]) >= 0) { r.foto = 'fruta-' + slug(m[1]); return; }
    for (var k = 0; k < REGLAS.length; k++) {
      if (REGLAS[k][0].test(r.nombre)) { r.foto = REGLAS[k][1]; return; }
    }
  });

  // Si una receta generada tiene el mismo nombre que una escrita a mano, se distingue (después de asignar la foto)
  var escritas = {};
  RECETAS.forEach(function (r) { if (!r.gen) escritas[r.nombre] = true; });
  RECETAS.forEach(function (r) { if (r.gen && escritas[r.nombre]) r.nombre = r.nombre.replace(/^(Sopa|Crema|Ensalada|Arroz|Pasta) /, '$1 casera '); });
})();
