/* ============================================================
   TACOS Y EMPANADAS POR RELLENO (familias)
   ============================================================ */
(function () {
  var i = GEN.i, p = GEN.p, sal = GEN.sal, aceite = GEN.aceite, GR = GEN.R, ajo = GEN.ajo;
  function u(c, s, pl) { return i(c, '', s + '|' + pl); }

  // ---------------------------------------------------------------- Tacos
  var TACOS = [
    { n: 'pollo', e: 'tacos', ing: [u(2, 'pechuga de pollo', 'pechugas de pollo'), i(1, 'cdta', 'de paprika'), i(1, 'cdta', 'de comino')], como: 'Corta el pollo en tiras finas, mézclalo con paprika, comino y sal y saltéalo en aceite caliente 8 minutos, hasta que esté dorado y sin parte rosada.', m: 8, s: 'Tiras doradas y jugosas.' },
    { n: 'res', e: 'tacos', ing: [u(0.75, 'libra de lomo de res en tiras', 'libras de lomo de res en tiras'), i(1, 'cdta', 'de comino'), ajo(2)], como: 'Corta la carne en tiras delgadas, sazónala con comino, ajo machacado y sal y saltéala a fuego fuerte 5 minutos, sin amontonarla.', m: 5, s: 'Dorada por fuera y jugosa.' },
    { n: 'cerdo al pastor', e: 'tacos', ing: [u(0.75, 'libra de lomo de cerdo en láminas', 'libras de lomo de cerdo en láminas'), i(2, 'cda', 'de pasta de achiote'), i(0.25, 'taza', 'de jugo de piña'), i(0.5, 'taza', 'de piña picada')], como: 'Marina el cerdo con achiote y jugo de piña 30 minutos. Saltéalo a fuego fuerte 8 minutos y agrega la piña al final.', m: 8, s: 'Bordes dorados y color rojizo.' },
    { n: 'pescado', e: 'tacos', ing: [u(2, 'filete de pescado blanco', 'filetes de pescado blanco'), i(0.5, 'taza', 'de harina de trigo'), u(1, 'limón', 'limones'), i(null, '', 'Aceite para freír')], como: 'Corta el pescado en tiras, sécalo, pásalo por harina con sal y fríelo 3 minutos por lado. Escurre y exprímele limón.', m: 6, s: 'Dorado y crocante.' },
    { n: 'camarones', e: 'tacos', ing: [i(300, 'g', 'de camarones pelados'), ajo(2), u(1, 'limón', 'limones'), i(1, 'cdta', 'de paprika')], como: 'Saltea los camarones con ajo, paprika y sal en aceite muy caliente 3 minutos, hasta que estén rosados y enroscados. Termina con limón.', m: 3, s: 'Rosados y opacos.' },
    { n: 'champiñones', e: 'tacos', ing: [i(300, 'g', 'de champiñones en láminas'), u(0.5, 'cebolla', 'cebollas'), ajo(2), i(1, 'cdta', 'de orégano')], como: 'Saltea la cebolla 3 minutos, agrega los champiñones y el ajo y cocina 8 minutos a fuego fuerte hasta que suelten y reabsorban el agua.', m: 11, s: 'Dorados y secos.' },
    { n: 'fríjoles y queso', e: 'tacos', ing: [i(1.5, 'taza', 'de fríjoles cocidos'), i(1, 'taza', 'de queso rallado'), ajo(1), i(1, 'cdta', 'de comino')], como: 'Aplasta los fríjoles en una sartén con ajo y comino y cocina 5 minutos hasta que espesen. Rállale el queso encima al armar.', m: 5, s: 'Puré espeso.' },
    { n: 'papa con chorizo', e: 'tacos', ing: [u(2, 'papa', 'papas'), u(2, 'chorizo', 'chorizos'), u(0.5, 'cebolla', 'cebollas')], como: 'Cocina las papas en cubos 10 minutos y escúrrelas. Dora el chorizo desmenuzado 5 minutos, agrega la cebolla y las papas y saltea 5 minutos.', m: 20, s: 'Papas doradas con el aceite del chorizo.' },
    { n: 'chicharrón', e: 'tacos', ing: [i(200, 'g', 'de chicharrón de cerdo'), u(2, 'tomate', 'tomates'), u(1, 'ají verde', 'ajíes verdes'), u(0.5, 'cebolla', 'cebollas')], como: 'Sofríe cebolla, tomate y ají 6 minutos, agrega el chicharrón en trozos y cocina 8 minutos hasta que se suavice con la salsa.', m: 14, s: 'Guiso espeso y brillante.' },
    { n: 'verduras asadas', e: 'tacos', ing: [u(1, 'calabacín', 'calabacines'), u(1, 'pimentón', 'pimentones'), u(1, 'cebolla', 'cebollas'), i(1, 'cdta', 'de orégano')], como: 'Corta las verduras en tiras y saltéalas a fuego fuerte 10 minutos con sal y orégano hasta que se doren por los bordes.', m: 10, s: 'Con manchas doradas.' }
  ];
  TACOS.forEach(function (t) {
    GR('Cocina mexicana', 'Tacos de ' + t.n, '🌮', t.e, [15, 15], 3, 'Fácil',
      'Tacos mexicanos de ' + t.n + ' en tortilla de maíz tibia, con cilantro, cebolla y limón.',
      '', t.ing.concat([u(6, 'tortilla de maíz pequeña', 'tortillas de maíz pequeñas'), u(0.5, 'cebolla', 'cebollas'), i(0.25, 'taza', 'de cilantro picado'), u(1, 'limón', 'limones'), aceite(1), sal(0.75)]),
      ['Sartén', 'Tabla y cuchillo', 'Plato'],
      [p('Prepara el relleno', t.como, { m: t.m, s: t.s }),
       p('Calienta las tortillas', 'En una sartén seca caliente cada tortilla 30 segundos por lado hasta que se ablande y se inflen un poco. Mantenlas tapadas con un paño.', { c: 'Tortillas tibias no se rompen al doblarlas.' }),
       p('Prepara el acompañamiento', 'Pica la cebolla y el cilantro finos y mézclalos con una pizca de sal.'),
       p('Arma', 'Pon el relleno en cada tortilla con la cebolla y el cilantro y un chorrito de limón. Sirve de inmediato con salsa picante.')],
      'Se comen al momento; el relleno dura 3 días en la nevera.', ['almuerzo', 'cena']);
  });

  // ---------------------------------------------------------------- Empanadas colombianas
  var EMP = [
    { n: 'pollo', ing: [i(1.5, 'taza', 'de pollo cocido y desmechado'), u(1, 'tomate', 'tomates'), u(2, 'cebolla larga', 'cebollas largas'), i(0.5, 'cdta', 'de comino')], r: 'Sofríe la cebolla y el tomate 6 minutos, agrega el pollo, el comino y sal y cocina 5 minutos más. Deja enfriar.' },
    { n: 'queso', ing: [i(1.5, 'taza', 'de queso mozzarella o campesino rallado'), i(1, 'cda', 'de azúcar (opcional)')], r: 'Mezcla el queso rallado con el azúcar si quieres un toque dulce. No necesita cocción.' },
    { n: 'arroz y carne', ing: [i(1, 'taza', 'de arroz cocido'), i(0.5, 'taza', 'de carne molida'), u(1, 'tomate', 'tomates'), u(2, 'cebolla larga', 'cebollas largas')], r: 'Sofríe cebolla y tomate 5 minutos, agrega la carne y cocina 8 minutos, mezcla con el arroz y sal. Deja enfriar.' },
    { n: 'jamón y queso', ing: [i(150, 'g', 'de jamón picado'), i(1, 'taza', 'de queso rallado')], r: 'Mezcla el jamón con el queso. No necesita cocción.' },
    { n: 'verduras', ing: [u(1, 'zanahoria', 'zanahorias'), i(0.5, 'taza', 'de arvejas'), u(1, 'papa', 'papas'), u(2, 'cebolla larga', 'cebollas largas')], r: 'Cocina la zanahoria y la papa en cubitos pequeños 10 minutos. Sofríe la cebolla, agrega las verduras, las arvejas y sal; cocina 4 minutos y enfría.' }
  ];
  EMP.forEach(function (t) {
    GR('Cocina colombiana', 'Empanadas colombianas de ' + t.n, '🥟', 'empanadas', [45, 25], 10, 'Media',
      'Empanadas de masa de maíz amarilla rellenas de ' + t.n + ' y fritas hasta quedar crocantes.',
      'La masa debe quedar <strong>suave y sin grietas</strong>. Dóblala dentro de un plástico.',
      t.ing.concat([i(2, 'taza', 'de harina de maíz precocida amarilla'), i(2.25, 'taza', 'de agua tibia'), sal(1), i(null, '', 'Aceite para freír')]),
      ['Tazón', 'Sartén honda', 'Bolsa plástica'],
      [p('Prepara el relleno', t.r, { m: 8 }),
       p('Haz la masa', 'Mezcla la harina con el agua tibia y la sal. Amasa 3 minutos y deja reposar 5 minutos tapada.', { m: 5, s: 'Suave, lisa y sin grietas.' }),
       p('Forma', 'Haz bolas del tamaño de una mandarina, aplástalas entre plásticos hasta un círculo de 10 cm, pon una cucharada de relleno, dobla y sella.'),
       p('Fríe', 'Fríe en aceite a fuego medio 3 a 4 minutos por lado hasta que estén doradas.', { m: 7, s: 'Doradas e infladas.', e: 'Con el aceite muy caliente se doran por fuera y quedan crudas por dentro.' }),
       p('Sirve', 'Escurre sobre papel y sirve con ají colombiano.')],
      'Se congelan crudas hasta 2 meses.', ['almuerzo', 'cena', 'desayuno']);
  });
})();
