/* ============================================================
   COMIDA JAPONESA: sushi de varios tipos y platos caseros
   (usa los mismos ayudantes GEN de familias-1.js)
   ============================================================ */
(function () {
  var i = GEN.i, p = GEN.p, ajo = GEN.ajo, sal = GEN.sal, aceite = GEN.aceite;
  var CAT = 'Comida japonesa';
  var CRUDO = '<strong>Pescado crudo:</strong> usa solo pescado vendido como "apto para sushi o sashimi", o que haya estado congelado al menos 7 días a −20 °C. Si no lo consigues, usa salmón ahumado o pescado cocido: queda igual de rico.';

  // ---------------------------------------------------------------- ARROZ DE SUSHI (pasos compartidos)
  var ARROZ_ING = [i(2, 'taza', 'de arroz para sushi (grano corto)'), i(2.25, 'taza', 'de agua'), i(4, 'cda', 'de vinagre de arroz'), i(2, 'cda', 'de azúcar'), sal(1)];
  function pasosArroz() {
    return [
      p('Lava el arroz', 'Pon el arroz en un tazón, cúbrelo con agua fría, muévelo con la mano haciendo círculos y bota el agua blanca. Repite 4 o 5 veces. Déjalo escurrir en un colador 15 minutos.',
        { s: 'El agua sale casi transparente.', m: 15, c: 'El arroz de sushi es de grano corto y redondo: es el que queda pegajoso. Con arroz de grano largo los rollos se desbaratan.' }),
      p('Cocina el arroz', 'Pon el arroz y las 2 tazas y cuarto de agua en una olla con tapa. Lleva a hervir a fuego alto; apenas hierva, tapa, baja el fuego al mínimo y cocina 13 minutos. Apaga y deja reposar 10 minutos sin destapar.',
        { m: 13, e: 'No destapes ni revuelvas mientras se cocina: se escapa el vapor y queda duro por arriba.' }),
      p('Prepara el aderezo de vinagre', 'Calienta en una olla pequeña (o 30 segundos en microondas) el vinagre de arroz con el azúcar y la sal, revolviendo, solo hasta que se disuelvan. No debe hervir.',
        { s: 'Líquido transparente, sin granos en el fondo.' }),
      p('Mezcla y enfría el arroz', 'Pasa el arroz caliente a una bandeja o tazón ancho (mejor de madera, vidrio o plástico). Rocía el aderezo por encima y mezcla con una espátula haciendo cortes, como rebanando, sin aplastar. Abanica mientras mezclas. Cúbrelo con un paño húmedo.',
        { s: 'Granos brillantes, sueltos pero pegajosos, a temperatura tibia.', e: 'Si lo aplastas o lo revuelves en círculos se vuelve puré. Y no lo metas a la nevera: se endurece.' })
    ];
  }

  GEN.agregar({
    nombre: 'Arroz para sushi', emoji: '🍚', categoria: CAT, dificultad: 'Media', foto: 'arroz-sushi',
    prep: 25, coccion: 25, porciones: 4,
    descripcion: 'La base de todo el sushi: arroz de grano corto, brillante y pegajoso, aliñado con vinagre dulce. Alcanza para unos 4 rollos.',
    antes: 'El sushi es 80 % arroz. Si el arroz queda bien, todo lo demás es fácil. Necesitas arroz de <strong>grano corto</strong> y vinagre de arroz (en la sección de comida asiática del supermercado).',
    ingredientes: ARROZ_ING,
    utensilios: ['Olla mediana con tapa', 'Colador', 'Bandeja o tazón ancho', 'Espátula de madera o plástico', 'Un paño limpio', 'Algo para abanicar'],
    pasos: pasosArroz().concat([p('Úsalo tibio', 'Usa el arroz cuando esté tibio, a la temperatura de tu mano. Mantén cerca un tazón con agua y un chorrito de vinagre para mojarte los dedos: así no se te pega.')]),
    guardar: 'Se usa el mismo día. Tapado con un paño húmedo aguanta unas 4 horas a temperatura ambiente.'
  });

  // ---------------------------------------------------------------- RELLENOS
  var RELLENOS = [
    { s: 'pepino', ing: [i(1, '', 'pepino|pepinos')], prep: 'Corta el pepino a lo largo en cuatro, quítale las semillas con una cuchara y córtalo en tiras largas de medio centímetro.' },
    { s: 'salmón', ing: [i(250, 'g', 'de salmón apto para sushi')], prep: 'Con un cuchillo muy afilado, corta el salmón en tiras largas de 1 centímetro de grosor. Manténlo en la nevera hasta el momento de usarlo.', crudo: true },
    { s: 'atún', ing: [i(250, 'g', 'de atún fresco apto para sushi')], prep: 'Con un cuchillo muy afilado, corta el atún en tiras largas de 1 centímetro de grosor. Manténlo en la nevera hasta usarlo.', crudo: true },
    { s: 'aguacate', ing: [i(1, '', 'aguacate maduro pero firme|aguacates maduros pero firmes')], prep: 'Parte el aguacate, quita el hueso y la cáscara, y córtalo en láminas de medio centímetro. Ponle unas gotas de limón para que no se oscurezca.' },
    { s: 'cangrejo y aguacate (California)', ing: [i(6, '', 'palito de cangrejo (kanikama)|palitos de cangrejo (kanikama)'), i(1, '', 'aguacate|aguacates'), i(0.5, '', 'pepino')], prep: 'Abre los palitos de cangrejo a lo largo. Corta el aguacate en láminas y el pepino, sin semillas, en tiras delgadas.' },
    { s: 'camarón', ing: [i(250, 'g', 'de camarones medianos')], prep: 'Cocina los camarones 2 minutos en agua hirviendo con sal, hasta que estén rosados. Pásalos a agua fría, pélalos y ábrelos a lo largo.' },
    { s: 'salmón y queso crema (Philadelphia)', ing: [i(200, 'g', 'de salmón apto para sushi o ahumado'), i(100, 'g', 'de queso crema')], prep: 'Corta el salmón en tiras de 1 centímetro. Corta el queso crema frío en bastones del mismo grosor (con el cuchillo mojado se corta más limpio).', crudo: true },
    { s: 'vegetales', ing: [i(1, '', 'zanahoria|zanahorias'), i(0.5, '', 'pepino'), i(1, '', 'aguacate|aguacates')], prep: 'Corta la zanahoria en tiras muy delgadas (como fósforos), el pepino sin semillas en tiras y el aguacate en láminas.' }
  ];
  var MESA = [i(null, '', 'Salsa de soya, wasabi y jengibre encurtido para servir')];

  var TIPOS = [
    { n: 'Maki de', foto: 'sushi-maki', alga: i(4, '', 'hoja de alga nori|hojas de alga nori'), rinde: '4 rollos (unas 24 piezas)',
      desc: 'El rollo clásico con el alga por fuera', utensilios: ['Esterilla de bambú para sushi'],
      pasos: [
        p('Extiende el arroz sobre el alga', 'Pon una hoja de nori sobre la esterilla, con el lado áspero hacia arriba y las líneas del alga paralelas a las varitas. Mójate los dedos y extiende una capa delgada de arroz (menos de 1 centímetro), dejando libres 2 centímetros en el borde de arriba.',
          { s: 'Se alcanza a ver un poco del alga entre los granos.', e: 'Demasiado arroz es el error número uno: el rollo no cierra y se revienta.' }),
        p('Pon el relleno', 'Coloca el relleno formando una línea horizontal en el tercio de abajo del arroz, de lado a lado.', { c: 'Poco relleno: una sola fila. Si te pasas, no enrolla.' }),
        p('Enrolla', 'Levanta el borde de la esterilla más cercano a ti con los pulgares, sosteniendo el relleno con los otros dedos, y enrolla hacia adelante hasta cubrirlo. Aprieta a lo largo, levanta la punta de la esterilla y sigue enrollando hasta el final. Moja el borde libre del alga para sellar.',
          { s: 'Rollo firme y redondo (o cuadrado), sin huecos en el centro.' }),
        p('Corta', 'Moja la hoja de un cuchillo muy afilado. Corta el rollo por la mitad con un movimiento largo, sin aplastar; pon las mitades lado a lado y córtalas en 3. Limpia y moja el cuchillo entre cortes.',
          { e: 'Con cuchillo seco o sin filo, el arroz se pega y el rollo se aplasta.' })
      ] },
    { n: 'Uramaki de', foto: 'sushi-uramaki', alga: i(2, '', 'hoja de alga nori|hojas de alga nori', 'Se usan partidas por la mitad.'), rinde: '4 rollos (unas 32 piezas)', extra: [i(3, 'cda', 'de ajonjolí')],
      desc: 'El rollo invertido, con el arroz por fuera y cubierto de ajonjolí', utensilios: ['Esterilla de bambú forrada con papel film'],
      pasos: [
        p('Forra la esterilla y cubre el alga de arroz', 'Envuelve la esterilla en papel film para que el arroz no se pegue. Pon media hoja de nori encima y, con los dedos mojados, cúbrela por completo con una capa delgada de arroz, hasta los bordes. Espolvorea ajonjolí.',
          { s: 'Capa pareja y delgada que cubre toda el alga.' }),
        p('Voltea', 'Voltea la hoja de un solo movimiento para que el arroz quede abajo, contra el film, y el alga arriba.', { c: 'El arroz, al ser pegajoso, no se cae al voltear.' }),
        p('Rellena y enrolla', 'Pon el relleno en línea sobre el alga, cerca del borde de abajo. Enrolla con ayuda de la esterilla, apretando a lo largo en cada vuelta.',
          { s: 'Rollo compacto con el arroz y el ajonjolí por fuera.', e: 'Si no aprietas, al cortar se desarma.' }),
        p('Corta', 'Con el cuchillo afilado y mojado, corta el rollo por la mitad y luego cada mitad en 4 piezas. Limpia y moja el cuchillo entre cortes.')
      ] },
    { n: 'Temaki de', foto: 'temaki', alga: i(4, '', 'hoja de alga nori|hojas de alga nori'), rinde: '8 conos',
      desc: 'Conos de alga enrollados a mano: el sushi más fácil, sin esterilla', utensilios: ['Tijeras de cocina'],
      pasos: [
        p('Corta el alga', 'Corta cada hoja de nori por la mitad con tijeras para tener 8 rectángulos. Trabaja con las manos secas para el alga y mojadas para el arroz.', { e: 'El alga húmeda se pone gomosa. Arma los conos justo antes de comer.' }),
        p('Pon el arroz', 'Sostén un rectángulo de alga en la palma izquierda, con el lado áspero hacia arriba. Pon 2 cucharadas de arroz sobre el tercio izquierdo y extiéndelo en diagonal.', { s: 'El arroz ocupa solo un tercio del alga, en forma de triángulo.' }),
        p('Agrega el relleno', 'Coloca el relleno en diagonal sobre el arroz, apuntando hacia la esquina superior izquierda.'),
        p('Enrolla en cono', 'Lleva la esquina inferior izquierda del alga sobre el relleno y sigue enrollando hacia la derecha hasta formar un cono. Pega la punta con un grano de arroz aplastado.',
          { s: 'Cono cerrado en la punta, con el relleno asomando arriba.' })
      ] }
  ];

  TIPOS.forEach(function (t) {
    RELLENOS.forEach(function (r) {
      GEN.agregar({
        nombre: t.n + ' ' + r.s, emoji: '🍣', categoria: CAT, dificultad: 'Media', foto: t.foto,
        prep: 45, coccion: 25, porciones: 4,
        descripcion: t.desc + ', relleno de ' + r.s.replace(/ \(.*\)/, '') + '. Salen ' + t.rinde + '.',
        antes: 'Ten a la mano un tazón con agua y un chorrito de vinagre para <strong>mojarte los dedos</strong>: el arroz de sushi se pega a todo lo que esté seco.' + (r.crudo ? ' ' + CRUDO : ''),
        ingredientes: ARROZ_ING.concat([t.alga]).concat(r.ing).concat(t.extra || []).concat(MESA),
        utensilios: ['Olla mediana con tapa', 'Bandeja o tazón ancho', 'Espátula', 'Cuchillo muy afilado', 'Tazón con agua y vinagre'].concat(t.utensilios),
        pasos: pasosArroz().concat([p('Prepara el relleno', r.prep, { c: 'Corta todo antes de empezar a armar: con las manos llenas de arroz ya no se puede.' })]).concat(t.pasos).concat([
          p('Sirve', 'Sirve de inmediato con salsa de soya en un platico, una pizca de wasabi y jengibre encurtido.', { c: 'Se moja en la soya el lado del relleno o del alga, no el arroz: el arroz absorbe demasiada y se deshace.' })
        ]),
        guardar: r.crudo ? 'El sushi con pescado crudo se come recién hecho. No lo guardes de un día para otro.' : 'Mejor recién hecho. Si sobra, envuélvelo en film y cómelo el mismo día: en la nevera el arroz se endurece.'
      });
    });
  });

  // ---------------------------------------------------------------- NIGIRI
  [
    { s: 'salmón', ing: [i(200, 'g', 'de salmón apto para sushi')], prep: 'Corta el salmón en láminas diagonales de medio centímetro de grosor, de unos 3 por 7 centímetros.', crudo: true },
    { s: 'atún', ing: [i(200, 'g', 'de atún apto para sushi')], prep: 'Corta el atún en láminas de medio centímetro de grosor, de unos 3 por 7 centímetros, atravesando las fibras.', crudo: true },
    { s: 'camarón', ing: [i(12, '', 'camarón grande|camarones grandes')], prep: 'Atraviesa cada camarón a lo largo con un palillo para que no se curve. Cocínalos 2 minutos en agua hirviendo con sal, enfríalos, pélalos dejando la cola y ábrelos por el vientre como una mariposa.' },
    { s: 'tortilla dulce (tamago)', ing: [i(3, '', 'huevo|huevos'), i(1, 'cda', 'de azúcar'), i(1, 'cdta', 'de salsa de soya')], prep: 'Bate los huevos con el azúcar y la soya. Haz una tortilla gruesa en una sartén pequeña a fuego bajo, doblándola sobre sí misma en tres. Déjala enfriar y córtala en láminas de 1 centímetro.' },
    { s: 'aguacate', ing: [i(1, '', 'aguacate maduro pero firme|aguacates maduros pero firmes'), i(1, '', 'hoja de alga nori|hojas de alga nori')], prep: 'Corta el aguacate en láminas de medio centímetro. Corta el alga en tiritas de 1 centímetro de ancho para amarrar cada pieza.' }
  ].forEach(function (r) {
    GEN.agregar({
      nombre: 'Nigiri de ' + r.s, emoji: '🍣', categoria: CAT, dificultad: 'Media', foto: 'nigiri',
      prep: 45, coccion: 25, porciones: 4,
      descripcion: 'Bolitas de arroz moldeadas a mano con una lámina de ' + r.s.replace(/ \(.*\)/, '') + ' encima. Salen unas 20 piezas.',
      antes: 'El nigiri se forma con las manos <strong>mojadas</strong> y con muy poca presión: la bolita debe sostenerse pero deshacerse en la boca.' + (r.crudo ? ' ' + CRUDO : ''),
      ingredientes: ARROZ_ING.concat(r.ing).concat(MESA),
      utensilios: ['Olla mediana con tapa', 'Bandeja o tazón ancho', 'Espátula', 'Cuchillo muy afilado', 'Tazón con agua y vinagre'],
      pasos: pasosArroz().concat([
        p('Prepara lo que va encima', r.prep),
        p('Forma las bolitas de arroz', 'Mójate las manos. Toma una cucharada colmada de arroz (del tamaño de una nuez grande) y apriétala suavemente en la palma, dándole forma ovalada y alargada, de unos 5 centímetros.',
          { s: 'Se sostiene sola pero se ven los granos enteros.', e: 'Si la aprietas como plastilina queda dura y pesada.' }),
        p('Monta la pieza', 'Si te gusta, unta un punto mínimo de wasabi en la lámina. Ponla sobre la bolita y presiona suave con dos dedos para que tome la forma del arroz.' + (/aguacate|tamago/.test(r.s) ? ' Amarra por el centro con una tirita de alga, pegándola con una gota de agua.' : ''),
          { s: 'La lámina cubre el arroz y cae un poco por los lados.' }),
        p('Sirve', 'Acomoda las piezas en un plato y sirve enseguida con salsa de soya y jengibre encurtido.', { c: 'Al comer, voltea la pieza y moja en la soya solo la parte de encima, no el arroz.' })
      ]),
      guardar: r.crudo ? 'Se come recién hecho. No se guarda.' : 'Mejor recién hecho; envuelto en film aguanta unas horas.'
    });
  });

  // ---------------------------------------------------------------- ONIGIRI
  [
    { s: 'atún con mayonesa', ing: [i(1, '', 'lata de atún|latas de atún'), i(2, 'cda', 'de mayonesa')], prep: 'Escurre muy bien el atún y mézclalo con la mayonesa y unas gotas de salsa de soya.' },
    { s: 'salmón asado', ing: [i(150, 'g', 'de salmón')], prep: 'Ponle sal al salmón y cocínalo en una sartén 3 minutos por lado. Déjalo enfriar y desmenúzalo con un tenedor, quitando piel y espinas.' },
    { s: 'pollo teriyaki', ing: [i(1, '', 'contramuslo de pollo deshuesado|contramuslos de pollo deshuesados'), i(2, 'cda', 'de salsa de soya'), i(1, 'cda', 'de miel')], prep: 'Corta el pollo en cubitos y dóralo 5 minutos en una sartén. Agrega la soya y la miel y cocina 2 minutos más, hasta que la salsa quede espesa y pegada al pollo.' },
    { s: 'ajonjolí y sal', ing: [i(2, 'cda', 'de ajonjolí tostado')], prep: 'Tuesta el ajonjolí 2 minutos en una sartén seca, moviendo, hasta que huela. Mézclalo con el arroz: este onigiri no lleva relleno.' }
  ].forEach(function (r) {
    GEN.agregar({
      nombre: 'Onigiri de ' + r.s, emoji: '🍙', categoria: CAT, dificultad: 'Fácil', foto: 'onigiri',
      prep: 30, coccion: 25, porciones: 4,
      descripcion: 'Triángulos de arroz rellenos de ' + r.s + ', envueltos en una tira de alga. La lonchera típica de Japón. Salen 6.',
      antes: 'El onigiri <strong>no lleva vinagre</strong>: es arroz de grano corto solo con sal. Se forma con el arroz todavía caliente y las manos mojadas y saladas.',
      ingredientes: [i(2, 'taza', 'de arroz para sushi (grano corto)'), i(2.25, 'taza', 'de agua'), sal(1), i(2, '', 'hoja de alga nori|hojas de alga nori')].concat(r.ing),
      utensilios: ['Olla mediana con tapa', 'Colador', 'Tazón con agua', 'Un platico con sal'],
      pasos: pasosArroz().slice(0, 2).concat([
        p('Prepara el relleno', r.prep),
        p('Moja y sala las manos', 'Mójate las manos y frótate una pizca de sal en las palmas. Repítelo antes de cada onigiri.', { c: 'El agua evita que el arroz se pegue y la sal lo sazona por fuera.' }),
        p('Rellena', 'Toma un puñado de arroz caliente (media taza) en la palma. Haz un hueco en el centro con el pulgar, pon una cucharadita de relleno y ciérralo con el arroz de los lados.', { e: 'Con mucho relleno no cierra y se abre al morder.' }),
        p('Dale forma de triángulo', 'Pon una mano plana por debajo y la otra en forma de techo (una V) por encima. Presiona suave, gira un tercio de vuelta y repite 3 o 4 veces.',
          { s: 'Triángulo grueso, de bordes redondeados, firme pero no apelmazado.' }),
        p('Envuelve y sirve', 'Corta el alga en tiras de 3 centímetros y envuelve la base de cada onigiri. Se comen con la mano, tibios o a temperatura ambiente.')
      ]),
      guardar: 'Envueltos en film aguantan el día en una lonchera. Guarda el alga aparte y ponla al comer para que siga crujiente.'
    });
  });

  // ---------------------------------------------------------------- TAZONES DE SUSHI
  [
    { s: 'salmón', ing: [i(250, 'g', 'de salmón apto para sushi')], prep: 'Corta el salmón en cubos de 1,5 centímetros y mézclalo con 1 cucharada de salsa de soya.', crudo: true },
    { s: 'atún', ing: [i(250, 'g', 'de atún apto para sushi')], prep: 'Corta el atún en cubos de 1,5 centímetros y mézclalo con 1 cucharada de salsa de soya.', crudo: true },
    { s: 'camarón', ing: [i(250, 'g', 'de camarones pelados')], prep: 'Cocina los camarones 2 minutos en agua hirviendo con sal, hasta que estén rosados, y enfríalos en agua fría.' },
    { s: 'vegetales', ing: [i(1, 'taza', 'de edamames o arvejas cocidas'), i(1, '', 'zanahoria|zanahorias')], prep: 'Ralla la zanahoria en tiras finas y ten listos los edamames cocidos y sin vaina.' }
  ].forEach(function (r) {
    GEN.agregar({
      nombre: 'Tazón de sushi de ' + r.s, emoji: '🥗', categoria: CAT, dificultad: 'Fácil', foto: 'tazon-sushi',
      prep: 30, coccion: 25, porciones: 3,
      descripcion: 'Todo el sabor del sushi sin enrollar nada: arroz avinagrado en un tazón con ' + r.s + ', aguacate y pepino.',
      antes: 'Es la forma más fácil de comer sushi en casa. Lo importante es el arroz y cortar todo de tamaño parecido.' + (r.crudo ? ' ' + CRUDO : ''),
      ingredientes: ARROZ_ING.concat(r.ing).concat([i(1, '', 'aguacate|aguacates'), i(1, '', 'pepino|pepinos'), i(3, 'cda', 'de salsa de soya'), i(1, 'cda', 'de ajonjolí'), i(1, '', 'hoja de alga nori|hojas de alga nori', 'Opcional, en tiritas.')]),
      utensilios: ['Olla mediana con tapa', 'Bandeja o tazón ancho', 'Espátula', 'Cuchillo afilado', 'Tazones para servir'],
      pasos: pasosArroz().concat([
        p('Prepara lo principal', r.prep),
        p('Corta el aguacate y el pepino', 'Corta el aguacate en cubos y el pepino en medias lunas delgadas.'),
        p('Arma el tazón', 'Reparte el arroz tibio en los tazones. Acomoda encima cada ingrediente en su propio montón, sin mezclar, para que se vean los colores.'),
        p('Termina y sirve', 'Rocía la salsa de soya por encima y espolvorea el ajonjolí y las tiritas de alga. Se mezcla al comer.')
      ]),
      guardar: r.crudo ? 'Con pescado crudo se come recién hecho.' : 'Guarda el arroz y los ingredientes por separado y arma el tazón al momento.'
    });
  });

  // ---------------------------------------------------------------- PLATOS JAPONESES
  var DASHI = 'El caldo japonés se llama <strong>dashi</strong>. Lo más fácil es usar dashi en polvo (1 cucharadita por cada 2 tazas de agua); si no lo consigues, usa un caldo de pollo suave.';

  GEN.agregar({
    nombre: 'Sopa de miso', emoji: '🍲', categoria: CAT, dificultad: 'Fácil', foto: 'miso', prep: 5, coccion: 10, porciones: 4,
    descripcion: 'La sopa que acompaña casi todas las comidas en Japón: caldo suave con pasta de miso, tofu y cebollín. Lista en 15 minutos.',
    antes: DASHI + ' La regla de oro: <strong>el miso nunca se hierve</strong>, porque pierde su aroma.',
    ingredientes: [i(4, 'taza', 'de agua'), i(2, 'cdta', 'de dashi en polvo'), i(3, 'cda', 'de pasta de miso'), i(150, 'g', 'de tofu blando'), i(2, '', 'tallo de cebollín|tallos de cebollín'), i(1, 'cda', 'de alga wakame seca', 'Opcional.')],
    utensilios: ['Olla mediana', 'Cucharón', 'Colador pequeño o tazón', 'Tabla y cuchillo'],
    pasos: [
      p('Prepara los ingredientes', 'Corta el tofu en cubos de 1 centímetro y el cebollín en rodajitas finas. Si usas alga wakame, remójala 5 minutos en agua y escúrrela.'),
      p('Calienta el caldo', 'Pon el agua con el dashi en polvo a fuego medio hasta que hierva suave.', { s: 'Burbujas pequeñas en el borde.' }),
      p('Agrega el tofu', 'Baja el fuego y agrega el tofu y el alga. Calienta 2 minutos, sin revolver fuerte para no romper el tofu.', { m: 2 }),
      p('Disuelve el miso fuera del hervor', 'Apaga el fuego. Pon el miso en un colador pequeño (o en un cucharón), sumérgelo en el caldo y deshazlo con una cuchara hasta que se disuelva por completo.',
        { s: 'Caldo turbio y parejo, color café claro, sin grumos de pasta.', e: 'Si echas el miso entero quedan pelotas saladas. Y si lo hierves, pierde sabor.' }),
      p('Sirve', 'Sirve de inmediato en tazones y reparte el cebollín por encima.', { c: 'El miso se asienta en el fondo: es normal, se revuelve con los palillos al tomarla.' })
    ],
    guardar: 'Mejor recién hecha. Si sobra, recalienta a fuego bajo sin dejar hervir.'
  });

  GEN.agregar({
    nombre: 'Ramen casero de pollo', emoji: '🍜', categoria: CAT, dificultad: 'Media', foto: 'ramen', prep: 20, coccion: 45, porciones: 2,
    descripcion: 'Tazón de fideos en caldo de pollo con soya, huevo de yema cremosa y pollo en láminas. Una versión casera, hecha en menos de una hora.',
    antes: 'Un ramen tiene cuatro partes: <strong>caldo, sazón (tare), fideos y lo que va encima</strong>. Los fideos se cocinan aparte y al final, para que no se pasen ni enturbien el caldo.',
    ingredientes: [i(2, '', 'contramuslo de pollo con hueso|contramuslos de pollo con hueso'), i(5, 'taza', 'de agua'), ajo(3), i(1, '', 'trozo de jengibre de 3 cm'), i(3, '', 'tallo de cebollín|tallos de cebollín'), i(4, 'cda', 'de salsa de soya'), i(1, 'cdta', 'de aceite de ajonjolí'), i(2, '', 'huevo|huevos'), i(200, 'g', 'de fideos para ramen'), sal(0.5)],
    utensilios: ['Olla grande', 'Olla pequeña', 'Colador', 'Dos tazones hondos', 'Tabla y cuchillo'],
    pasos: [
      p('Haz el caldo', 'Pon en la olla grande el pollo, el agua, los ajos aplastados, el jengibre en rodajas, la parte blanca del cebollín y la sal. Cuando hierva, quita la espuma, baja el fuego y cocina 35 minutos medio tapado.', { m: 35, s: 'Caldo dorado claro y pollo que se suelta del hueso.' }),
      p('Cocina los huevos', 'Mientras tanto, hierve agua en la olla pequeña. Baja los huevos con una cuchara y cocínalos 7 minutos exactos. Pásalos a agua con hielo y pélalos.', { m: 7, s: 'Clara firme y yema cremosa, color naranja intenso.', e: 'Con 10 minutos la yema queda seca y pálida.' }),
      p('Prepara la sazón en los tazones', 'En cada tazón pon 2 cucharadas de salsa de soya y media cucharadita de aceite de ajonjolí.', { c: 'En el ramen el caldo no se sala en la olla: el sabor se pone en el tazón.' }),
      p('Saca el pollo y cuela el caldo', 'Saca el pollo, quítale el hueso y córtalo en láminas. Cuela el caldo y mantenlo muy caliente a fuego bajo.'),
      p('Cocina los fideos aparte', 'Hierve agua limpia en la olla pequeña y cocina los fideos el tiempo que diga el paquete (normalmente 3 minutos). Escúrrelos bien.', { m: 3, e: 'Si los cocinas dentro del caldo, sueltan almidón y el caldo queda espeso y turbio.' }),
      p('Arma el tazón', 'Vierte 2 tazas de caldo hirviendo en cada tazón y revuelve con la sazón. Agrega los fideos, y encima el pollo, el huevo partido por la mitad y el cebollín verde picado.', { c: 'Se come de inmediato: los fideos siguen absorbiendo caldo y se ablandan en minutos.' })
    ],
    guardar: 'Guarda el caldo, el pollo y los huevos por separado hasta 3 días. Los fideos se cocinan al momento.'
  });

  GEN.agregar({
    nombre: 'Pollo teriyaki', emoji: '🍗', categoria: CAT, dificultad: 'Fácil', foto: 'teriyaki', prep: 10, coccion: 15, porciones: 2,
    descripcion: 'Pollo dorado y bañado en una salsa dulce y salada que queda brillante como un barniz. Se sirve sobre arroz blanco.',
    antes: 'La salsa teriyaki casera son solo <strong>soya, dulce y un poco de agua</strong> que se reducen en la sartén. No necesita maicena si se le da tiempo. ' + GEN.HIGIENE,
    ingredientes: [i(4, '', 'contramuslo de pollo deshuesado|contramuslos de pollo deshuesados'), i(4, 'cda', 'de salsa de soya'), i(2, 'cda', 'de miel o azúcar'), i(3, 'cda', 'de agua'), i(1, 'cdta', 'de jengibre rallado'), aceite(1), i(1, 'cda', 'de ajonjolí')],
    utensilios: ['Sartén grande', 'Tazón pequeño', 'Pinzas', 'Papel de cocina'],
    pasos: [
      p('Mezcla la salsa', 'En un tazón mezcla la soya, la miel, el agua y el jengibre.'),
      p('Seca el pollo', 'Abre los contramuslos, sécalos muy bien con papel de cocina y pínchalos varias veces con un tenedor para que no se encojan.'),
      p('Dora el pollo', 'Calienta el aceite en la sartén a fuego medio-alto. Pon el pollo y no lo muevas durante 5 minutos. Voltéalo y cocina 4 minutos más.', { m: 5, s: 'Costra dorada y pollo cocido: al cortar el más grueso, sin rosado.' }),
      p('Agrega la salsa y reduce', 'Retira el exceso de grasa con papel de cocina. Baja el fuego a medio, vierte la salsa y cocina 3 a 4 minutos, bañando el pollo con una cuchara.', { m: 4, s: 'La salsa hace burbujas grandes y lentas, espesa y cubre el pollo como un barniz.', e: 'Al final se reduce muy rápido: si te descuidas, se quema y amarga.' }),
      p('Corta y sirve', 'Corta el pollo en tiras, ponlo sobre arroz blanco, báñalo con la salsa de la sartén y espolvorea ajonjolí.')
    ],
    guardar: 'Dura 3 días en la nevera. Recalienta con una cucharada de agua para soltar la salsa.'
  });

  [{ n: 'Tonkatsu (cerdo apanado japonés)', ing: i(2, '', 'filete de lomo de cerdo de 1,5 cm|filetes de lomo de cerdo de 1,5 cm'), q: 'el cerdo', min: 4 },
   { n: 'Katsu de pollo', ing: i(2, '', 'pechuga de pollo|pechugas de pollo'), q: 'el pollo', min: 4 }].forEach(function (k) {
    GEN.agregar({
      nombre: k.n, emoji: '🍱', categoria: CAT, dificultad: 'Media', foto: 'katsu', prep: 20, coccion: 10, porciones: 2,
      descripcion: 'Apanado japonés con panko: una costra gruesa, aireada y muy crujiente. Se sirve en tiras, con repollo y salsa.',
      antes: 'El <strong>panko</strong> es pan rallado japonés, en hojuelas grandes: absorbe menos aceite y queda más crujiente que el pan rallado normal. ' + GEN.HIGIENE,
      ingredientes: [k.ing, i(0.5, 'taza', 'de harina de trigo'), i(1, '', 'huevo|huevos'), i(1.5, 'taza', 'de panko'), sal(1), i(1.5, 'taza', 'de aceite para freír'), i(2, 'taza', 'de repollo en tiras muy finas'), i(3, 'cda', 'de salsa de tomate (kétchup)'), i(1, 'cda', 'de salsa de soya'), i(1, 'cdta', 'de azúcar')],
      utensilios: ['Sartén honda', 'Tres platos hondos', 'Pinzas', 'Rejilla', 'Bolsa plástica (para aplanar)'],
      pasos: [
        p('Prepara ' + k.q, 'Aplana ' + k.q + ' dentro de una bolsa, golpeando con el fondo de una olla, hasta dejarlo de 1 centímetro parejo. Haz pequeños cortes en los bordes y sazona con la sal.', { c: 'Los cortes en el borde evitan que se curve al freír.' }),
        p('Apana: harina, huevo, panko', 'Pasa cada pieza por harina (sacude el exceso), luego por huevo batido y por último por el panko, presionando con la palma para que se pegue.', { s: 'Cubierta gruesa y pareja, sin parches.' }),
        p('Calienta el aceite', 'Calienta el aceite (1 centímetro de alto) a fuego medio durante 3 minutos. Echa una hojuela de panko.', { m: 3, s: 'La hojuela burbujea y se dora en unos 20 segundos.' }),
        p('Fríe', 'Fríe ' + k.min + ' minutos por lado, sin mover, hasta dorar. Escurre de pie sobre una rejilla 2 minutos.', { m: k.min, s: 'Color dorado profundo y, al cortar, carne cocida sin rosado.', e: 'Sobre papel el vapor ablanda la costra de abajo. Mejor rejilla.' }),
        p('Haz la salsa', 'Mezcla la salsa de tomate, la soya y el azúcar: es una versión casera de la salsa tonkatsu.'),
        p('Corta y sirve', 'Corta en tiras de 2 centímetros con un cuchillo afilado, de un solo golpe. Sirve con el repollo crudo, arroz y la salsa por encima o al lado.')
      ],
      guardar: 'Dura 2 días en la nevera. Para que vuelva a crujir, recalienta en horno o sartén seca.'
    });
  });

  GEN.agregar({
    nombre: 'Yakisoba (fideos salteados)', emoji: '🍜', categoria: CAT, dificultad: 'Fácil', foto: 'yakisoba', prep: 15, coccion: 12, porciones: 3,
    descripcion: 'Fideos salteados a fuego alto con cerdo, repollo y zanahoria, en una salsa oscura, dulce y salada. Comida callejera japonesa.',
    antes: 'Como todo salteado: <strong>todo cortado y la salsa mezclada antes de prender el fuego</strong>. Si no consigues fideos para yakisoba, usa fideos de ramen o espaguetis delgados ya cocidos.',
    ingredientes: [i(300, 'g', 'de fideos para yakisoba o ramen, cocidos'), i(200, 'g', 'de cerdo o pollo en tiras delgadas'), i(2, 'taza', 'de repollo en trozos'), i(1, '', 'zanahoria|zanahorias'), i(0.5, '', 'cebolla'), i(3, 'cda', 'de salsa de soya'), i(2, 'cda', 'de salsa de tomate (kétchup)'), i(1, 'cda', 'de salsa inglesa'), i(1, 'cdta', 'de azúcar'), aceite(2)],
    utensilios: ['Sartén grande o wok', 'Tazón pequeño', 'Pinzas o palillos', 'Tabla y cuchillo'],
    pasos: [
      p('Mezcla la salsa', 'Mezcla en un tazón la soya, la salsa de tomate, la salsa inglesa y el azúcar.'),
      p('Corta las verduras', 'Corta el repollo en cuadros de 3 centímetros, la zanahoria en tiras delgadas y la cebolla en plumas.'),
      p('Dora la carne', 'Calienta 1 cucharada de aceite a fuego alto y saltea la carne 3 minutos, hasta dorar. Sácala a un plato.', { m: 3, e: GEN.HIGIENE }),
      p('Saltea las verduras', 'Con el resto del aceite, saltea la cebolla y la zanahoria 2 minutos; agrega el repollo y saltea 2 minutos más.', { m: 4, s: 'Verduras brillantes y todavía crujientes.' }),
      p('Agrega los fideos', 'Suelta los fideos con las manos y agrégalos con 2 cucharadas de agua. Mueve con las pinzas 2 minutos, hasta que se calienten y se separen.', { m: 2 }),
      p('Une con la salsa', 'Devuelve la carne, vierte la salsa y mezcla a fuego alto 1 minuto, hasta que los fideos tomen color parejo. Sirve de inmediato.', { s: 'Fideos color café brillante, sin salsa líquida en el fondo.' })
    ],
    guardar: 'Dura 2 días en la nevera. Recalienta en sartén con un chorrito de agua.'
  });

  GEN.agregar({
    nombre: 'Gyozas de cerdo', emoji: '🥟', categoria: CAT, dificultad: 'Media', foto: 'gyoza', prep: 40, coccion: 10, porciones: 4,
    descripcion: 'Empanaditas japonesas: doradas y crujientes por debajo, tiernas y al vapor por arriba. Salen unas 24.',
    antes: 'El truco de la gyoza es que se cocina de dos formas en la misma sartén: <strong>primero se dora y luego se le echa agua y se tapa</strong>. Usa masa para gyoza o wantán (discos), que se consigue congelada. ' + GEN.HIGIENE,
    ingredientes: [i(24, '', 'disco de masa para gyoza|discos de masa para gyoza'), i(250, 'g', 'de carne molida de cerdo'), i(2, 'taza', 'de repollo picado muy fino'), i(2, '', 'tallo de cebollín|tallos de cebollín'), ajo(2), i(1, 'cdta', 'de jengibre rallado'), i(1, 'cda', 'de salsa de soya'), i(1, 'cdta', 'de aceite de ajonjolí'), sal(0.5), aceite(1), i(0.33, 'taza', 'de agua'), i(null, '', 'Salsa de soya con unas gotas de vinagre, para mojar')],
    utensilios: ['Sartén antiadherente con tapa', 'Tazón grande', 'Un platico con agua', 'Bandeja', 'Tabla y cuchillo'],
    pasos: [
      p('Saca el agua del repollo', 'Mezcla el repollo picado con la sal y déjalo 10 minutos. Luego apriétalo con las manos para escurrir toda el agua que suelte.', { m: 10, e: 'Si te saltas esto, el relleno queda aguado y la masa se rompe.' }),
      p('Mezcla el relleno', 'Mezcla la carne con el repollo escurrido, el cebollín picado, el ajo y el jengibre rallados, la soya y el aceite de ajonjolí. Amasa 1 minuto, hasta que se vuelva pegajoso.', { s: 'Masa que se mantiene unida al levantarla.' }),
      p('Rellena y cierra', 'Pon una cucharadita de relleno en el centro de un disco. Moja el borde con el dedo, dobla en media luna y cierra apretando; si te animas, haz 4 o 5 pliegues en el lado de adelante. Apóyala en la bandeja para que tenga base plana.', { c: 'Mantén los discos tapados con un paño húmedo: se secan rápido y se agrietan.', e: 'Con mucho relleno no cierra. Una cucharadita basta.' }),
      p('Dora la base', 'Calienta el aceite en la sartén a fuego medio. Acomoda las gyozas con la base plana hacia abajo, sin que se toquen, y dóralas 2 a 3 minutos.', { m: 3, s: 'Base dorada color caramelo.' }),
      p('Agrega agua y tapa', 'Vierte el tercio de taza de agua (salpica: ten la tapa lista) y tapa de inmediato. Cocina 5 minutos al vapor.', { m: 5, s: 'La masa se ve translúcida y el agua casi se evaporó.' }),
      p('Destapa y vuelve a dorar', 'Destapa y cocina 1 a 2 minutos más para que se evapore el agua y la base vuelva a crujir. Sirve con la base hacia arriba y la salsa para mojar.')
    ],
    guardar: 'Crudas se congelan muy bien: sepáralas en una bandeja, congélalas y pásalas a una bolsa. Se cocinan sin descongelar, con 2 minutos más de vapor.'
  });

  GEN.agregar({
    nombre: 'Tempura de verduras y camarones', emoji: '🍤', categoria: CAT, dificultad: 'Media', foto: 'tempura', prep: 20, coccion: 15, porciones: 4,
    descripcion: 'Fritura japonesa de capa finísima, clara y crujiente, que no queda grasosa. El secreto es una masa helada y mal mezclada.',
    antes: 'Tres reglas de la tempura: <strong>agua helada, mezclar muy poco (con grumos) y freír en tandas pequeñas</strong>. Todo lo contrario a un apanado normal.',
    ingredientes: [i(8, '', 'camarón grande pelado|camarones grandes pelados'), i(1, '', 'zanahoria|zanahorias'), i(1, '', 'calabacín|calabacines'), i(0.5, '', 'berenjena'), i(1, 'taza', 'de harina de trigo'), i(2, 'cda', 'de fécula de maíz (maicena)'), i(1, '', 'huevo frío|huevos fríos'), i(1, 'taza', 'de agua helada, con hielo'), i(3, 'taza', 'de aceite para freír'), i(null, '', 'Salsa de soya para mojar')],
    utensilios: ['Olla honda o sartén profunda', 'Tazón', 'Palillos o tenedor', 'Pinzas', 'Rejilla', 'Papel de cocina'],
    pasos: [
      p('Corta y seca todo', 'Corta la zanahoria, el calabacín y la berenjena en rodajas diagonales de medio centímetro. Haz 3 cortes pequeños en el vientre de cada camarón y estíralo para que quede recto. Seca todo muy bien con papel de cocina.', { e: 'El agua en la superficie hace saltar el aceite y despega la masa.' }),
      p('Calienta el aceite', 'Calienta el aceite a fuego medio (debe tener al menos 4 centímetros de alto). Está listo cuando una gota de masa se hunde a medias y sube burbujeando enseguida.', { s: 'Unos 175 °C si tienes termómetro.' }),
      p('Haz la masa al último momento', 'Bate el huevo con el agua helada. Agrega la harina y la maicena de una vez y mezcla con palillos solo 10 segundos, con movimientos cortos.', { s: 'Masa líquida y con grumos de harina seca. Así debe quedar.', e: 'Si la bates hasta dejarla lisa, la tempura queda gruesa y dura como un buñuelo.' }),
      p('Fríe en tandas pequeñas', 'Pasa las piezas por la masa, deja escurrir un segundo y fríe 4 o 5 a la vez: verduras 2 minutos, camarones 1 a 2 minutos. Voltea una vez.', { m: 2, s: 'Capa clara, apenas dorada, y el burbujeo se vuelve más suave y agudo.', e: 'Con muchas piezas el aceite se enfría y todo queda aceitoso.' }),
      p('Escurre y sirve', 'Escurre sobre rejilla y sirve de inmediato con salsa de soya. Retira con una espumadera las miguitas de masa del aceite entre tandas, para que no se quemen.')
    ],
    guardar: 'La tempura no se guarda: pierde el crujiente en minutos. Haz solo lo que se vaya a comer.'
  });

  GEN.agregar({
    nombre: 'Tamagoyaki (tortilla japonesa enrollada)', emoji: '🍳', categoria: CAT, dificultad: 'Media', foto: 'tamagoyaki', prep: 5, coccion: 8, porciones: 2,
    descripcion: 'Tortilla dulce y salada hecha en capas delgadas que se enrollan una sobre otra. Típica del desayuno y las loncheras japonesas.',
    antes: 'Se hace en <strong>3 capas delgadas</strong>: cada una se enrolla sobre la anterior. En Japón se usa una sartén rectangular, pero sale bien en una sartén pequeña redonda.',
    ingredientes: [i(4, '', 'huevo|huevos'), i(1, 'cda', 'de azúcar'), i(1, 'cdta', 'de salsa de soya'), i(1, 'cda', 'de agua'), i(1, 'cdta', 'de aceite')],
    utensilios: ['Sartén antiadherente pequeña', 'Tazón', 'Espátula o palillos', 'Papel de cocina', 'Esterilla o papel film (para darle forma)'],
    pasos: [
      p('Bate los huevos', 'Bate los huevos con el azúcar, la soya y el agua, sin hacer mucha espuma (mueve el tenedor de lado a lado, no en círculos).'),
      p('Engrasa la sartén', 'Calienta la sartén a fuego medio-bajo y pásale un papel de cocina mojado en el aceite. Guarda el papel: se usa antes de cada capa.'),
      p('Primera capa', 'Vierte un tercio del huevo y mueve la sartén para cubrir el fondo. Cuando esté cuajado por debajo pero húmedo por encima, enróllalo desde el lado lejano hacia ti con la espátula.', { s: 'Capa delgada como una crepe, sin dorar.', e: 'Si esperas a que seque por arriba, las capas no se pegan entre sí.' }),
      p('Segunda y tercera capa', 'Empuja el rollo al lado lejano, engrasa otra vez y vierte otro tercio, levantando el rollo para que el huevo corra por debajo. Cuando cuaje, enrolla de nuevo sobre el rollo anterior. Repite con el resto.', { s: 'Un solo rollo grueso con capas visibles al cortarlo.' }),
      p('Dale forma y corta', 'Pasa el rollo caliente a una esterilla o a papel film, envuélvelo apretando para que tome forma rectangular y déjalo 3 minutos. Corta en rodajas de 2 centímetros.', { m: 3 })
    ],
    guardar: 'Dura 2 días en la nevera y se come frío o a temperatura ambiente.'
  });

  GEN.agregar({
    nombre: 'Okonomiyaki (tortilla japonesa de repollo)', emoji: '🥞', categoria: CAT, dificultad: 'Media', foto: 'okonomiyaki', prep: 15, coccion: 12, porciones: 2,
    descripcion: 'Una torta gruesa de repollo y huevo, dorada en sartén y cubierta con salsa dulce y mayonesa. Su nombre significa "a tu gusto".',
    antes: 'Lleva <strong>mucho repollo y poca masa</strong>: la masa solo sirve para pegar. Y no se aplasta al cocinarla, para que quede esponjosa.',
    ingredientes: [i(3, 'taza', 'de repollo picado fino'), i(0.75, 'taza', 'de harina de trigo'), i(0.5, 'taza', 'de agua o caldo'), i(2, '', 'huevo|huevos'), i(2, '', 'tallo de cebollín|tallos de cebollín'), i(4, '', 'tira de tocineta|tiras de tocineta'), sal(0.5), aceite(1), i(2, 'cda', 'de salsa de tomate (kétchup)'), i(1, 'cda', 'de salsa de soya'), i(1, 'cdta', 'de azúcar'), i(null, '', 'Mayonesa para decorar')],
    utensilios: ['Sartén antiadherente con tapa', 'Tazón grande', 'Dos espátulas', 'Tabla y cuchillo'],
    pasos: [
      p('Haz la masa', 'Mezcla la harina, el agua y la sal hasta que no haya grumos. Agrega los huevos, el repollo y el cebollín, y mezcla levantando desde el fondo, solo hasta cubrir todo.', { s: 'Parece casi puro repollo apenas unido por la masa.' }),
      p('Forma la torta', 'Calienta el aceite a fuego medio. Vierte la mitad de la mezcla formando un círculo de 2 centímetros de alto y acomoda 2 tiras de tocineta encima.', { e: 'No la aplastes: debe quedar alta y aireada.' }),
      p('Cocina tapada el primer lado', 'Tapa y cocina 5 minutos.', { m: 5, s: 'Base dorada y bordes firmes.' }),
      p('Voltea y termina', 'Voltea con las dos espátulas de un movimiento decidido (la tocineta queda abajo). Cocina 5 minutos más, sin tapar.', { m: 5, s: 'Tocineta crujiente y, al pinchar el centro con un palillo, sale limpio.' }),
      p('Cubre con las salsas', 'Mezcla la salsa de tomate, la soya y el azúcar. Pasa la torta a un plato con la tocineta hacia arriba, úntala con la salsa y decora con líneas de mayonesa. Repite con la otra mitad.')
    ],
    guardar: 'Dura 2 días en la nevera, sin las salsas. Recalienta en sartén tapada.'
  });

  GEN.agregar({
    nombre: 'Curry japonés de pollo', emoji: '🍛', categoria: CAT, dificultad: 'Media', foto: 'curry-japones', prep: 20, coccion: 40, porciones: 4,
    descripcion: 'Curry espeso, suave y ligeramente dulce, con pollo, papa y zanahoria, servido al lado de arroz blanco. Comida casera favorita en Japón.',
    antes: 'El curry japonés se espesa con un <strong>roux</strong> (harina tostada en mantequilla con curry en polvo). Lo hacemos en casa, aunque también se venden pastillas listas. ' + GEN.HIGIENE,
    ingredientes: [i(500, 'g', 'de contramuslos de pollo sin hueso'), i(2, '', 'cebolla cabezona|cebollas cabezonas'), i(2, '', 'zanahoria|zanahorias'), i(2, '', 'papa|papas'), i(3, 'taza', 'de agua'), i(3, 'cda', 'de mantequilla'), i(4, 'cda', 'de harina de trigo'), i(1.5, 'cda', 'de curry en polvo'), i(1, 'cda', 'de salsa de soya'), i(1, 'cda', 'de miel o media manzana rallada'), sal(1), aceite(1)],
    utensilios: ['Olla grande con tapa', 'Sartén pequeña', 'Cuchara de palo', 'Tabla y cuchillo'],
    pasos: [
      p('Corta todo', 'Corta el pollo en trozos de 3 centímetros, las cebollas en plumas, las zanahorias en trozos irregulares y las papas en cubos de 3 centímetros.'),
      p('Dora la cebolla y el pollo', 'Calienta el aceite en la olla a fuego medio. Cocina la cebolla 8 minutos hasta que esté blanda y dorada. Sube el fuego, agrega el pollo con la sal y dóralo 4 minutos.', { m: 8, c: 'La cebolla bien dorada es la que da el dulce de fondo del curry.' }),
      p('Agrega verduras y agua', 'Agrega la zanahoria, la papa y el agua. Cuando hierva, quita la espuma, baja el fuego, tapa y cocina 20 minutos.', { m: 20, s: 'La papa se deja atravesar con un cuchillo.' }),
      p('Haz el roux', 'Mientras tanto, derrite la mantequilla en la sartén pequeña a fuego bajo. Agrega la harina y revuelve sin parar 5 minutos, hasta que tome color café claro. Agrega el curry en polvo y revuelve 30 segundos. Apaga.', { m: 5, s: 'Pasta color caramelo que huele a nuez y a curry.', e: 'A fuego alto la harina se quema y el curry queda amargo.' }),
      p('Espesa el guiso', 'Apaga el fuego de la olla. Agrega el roux y revuelve hasta que se disuelva por completo. Enciende otra vez a fuego bajo, agrega la soya y la miel y cocina 5 minutos, revolviendo el fondo.', { m: 5, s: 'Salsa espesa y brillante que cubre la cuchara.', e: 'Si agregas el roux con el guiso hirviendo, se forman grumos.' }),
      p('Sirve', 'Sirve en plato hondo: arroz blanco a un lado y curry al otro.')
    ],
    guardar: 'Dura 4 días en la nevera y sabe mejor al día siguiente. Al recalentar, agrega un chorrito de agua.'
  });

  [{ n: 'Oyakodon (tazón de pollo y huevo)', foto: 'oyakodon', carne: i(300, 'g', 'de contramuslos de pollo sin hueso'), corte: 'Corta el pollo en trozos de 2 centímetros.', min: 6, huevo: true, senal: 'Pollo blanco y cocido al partir un trozo.' },
   { n: 'Gyudon (tazón de res y cebolla)', foto: 'gyudon', carne: i(300, 'g', 'de carne de res en láminas muy delgadas'), corte: 'Si la carne no viene en láminas, congélala 30 minutos y córtala lo más delgada que puedas.', min: 4, huevo: false, senal: 'La carne perdió el color rojo y está tierna.' }].forEach(function (d) {
    GEN.agregar({
      nombre: d.n, emoji: '🍚', categoria: CAT, dificultad: 'Fácil', foto: d.foto, prep: 10, coccion: 15, porciones: 2,
      descripcion: 'Un tazón de arroz cubierto con carne y cebolla cocinadas en un caldo dulce y salado' + (d.huevo ? ', terminado con huevo apenas cuajado.' : '.') + ' Comida rápida japonesa, lista en 20 minutos.',
      antes: 'Los "don" son tazones de arroz con algo encima. ' + DASHI + ' ' + GEN.HIGIENE,
      ingredientes: [d.carne, i(1, '', 'cebolla cabezona|cebollas cabezonas'), i(0.75, 'taza', 'de agua'), i(0.5, 'cdta', 'de dashi en polvo'), i(3, 'cda', 'de salsa de soya'), i(1.5, 'cda', 'de azúcar')].concat(d.huevo ? [i(3, '', 'huevo|huevos')] : []).concat([i(2, 'taza', 'de arroz blanco cocido, caliente'), i(1, '', 'tallo de cebollín|tallos de cebollín')]),
      utensilios: ['Sartén mediana con tapa', 'Tazón', 'Dos tazones hondos', 'Tabla y cuchillo'],
      pasos: [
        p('Corta', d.corte + ' Corta la cebolla en plumas delgadas.'),
        p('Cocina la cebolla en el caldo', 'Pon en la sartén el agua, el dashi, la soya y el azúcar. Cuando hierva, agrega la cebolla y cocina 4 minutos a fuego medio.', { m: 4, s: 'Cebolla blanda y transparente.' }),
        p('Agrega la carne', 'Reparte la carne sobre la cebolla, separando los trozos, y cocina ' + d.min + ' minutos.', { m: d.min, s: d.senal })
      ].concat(d.huevo ? [
        p('Agrega el huevo', 'Bate los huevos apenas, dejando vetas de clara. Viértelos en círculos sobre el pollo, tapa y cocina 1 minuto. Apaga.', { m: 1, s: 'Huevo cuajado en los bordes y todavía cremoso en el centro.', e: 'Si lo dejas más tiempo queda seco: se termina de hacer con el calor del arroz.' })
      ] : []).concat([
        p('Sirve sobre el arroz', 'Pon el arroz caliente en los tazones y desliza encima el contenido de la sartén con su jugo. Termina con cebollín picado.')
      ]),
      guardar: 'Mejor recién hecho. La mezcla sin el arroz dura 2 días en la nevera.'
    });
  });

  GEN.agregar({
    nombre: 'Edamames con sal', emoji: '🫛', categoria: CAT, dificultad: 'Fácil', foto: 'edamame', prep: 2, coccion: 6, porciones: 4,
    descripcion: 'Vainas de soya tierna hervidas con sal gruesa: el pasabocas japonés más fácil que existe.',
    antes: 'Los edamames se consiguen congelados. <strong>La vaina no se come</strong>: se aprieta con los dientes para sacar los granos.',
    ingredientes: [i(400, 'g', 'de edamames congelados en vaina'), i(2, 'cda', 'de sal gruesa')],
    utensilios: ['Olla mediana', 'Colador', 'Tazón'],
    pasos: [
      p('Hierve agua con sal', 'Pon a hervir 2 litros de agua con 1 cucharada de la sal.'),
      p('Cocina', 'Echa los edamames congelados y cocina 4 a 5 minutos desde que vuelva a hervir.', { m: 5, s: 'Vainas verde brillante; al abrir una, el grano está tierno pero firme.', e: 'Pasados de tiempo se ponen opacos y harinosos.' }),
      p('Escurre y sala', 'Escurre sin enjuagar. Pásalos a un tazón y mézclalos con el resto de la sal mientras están calientes.'),
      p('Sirve', 'Sirve tibios o fríos, con un platico al lado para las vainas vacías.')
    ],
    guardar: 'Duran 2 días en la nevera.'
  });

  GEN.agregar({
    nombre: 'Yakitori (pinchos japoneses de pollo)', emoji: '🍢', categoria: CAT, dificultad: 'Media', foto: 'yakitori', prep: 25, coccion: 12, porciones: 4,
    descripcion: 'Pinchitos de pollo y cebollín glaseados con una salsa dulce de soya, dorados a la plancha. Salen unos 10.',
    antes: 'La salsa (tare) se pincela <strong>al final</strong>: tiene azúcar y se quemaría si se pone desde el principio. ' + GEN.HIGIENE,
    ingredientes: [i(500, 'g', 'de contramuslos de pollo sin hueso'), i(4, '', 'tallo de cebolla larga|tallos de cebolla larga'), i(5, 'cda', 'de salsa de soya'), i(3, 'cda', 'de azúcar'), i(3, 'cda', 'de agua'), i(10, '', 'palo de pincho pequeño|palos de pincho pequeños'), i(1, 'cdta', 'de aceite')],
    utensilios: ['Sartén grande o plancha', 'Olla pequeña', 'Brocha de cocina o cuchara', 'Tabla y cuchillo'],
    pasos: [
      p('Remoja los palos', 'Deja los palos en agua 20 minutos para que no se quemen.', { m: 20 }),
      p('Haz la salsa', 'Hierve la soya, el azúcar y el agua en la olla pequeña a fuego medio durante 5 minutos, hasta que espese un poco.', { m: 5, s: 'Cubre la cuchara como un jarabe ligero. Al enfriar espesa más.' }),
      p('Corta y ensarta', 'Corta el pollo en cubos de 2,5 centímetros y la parte blanca de la cebolla en trozos de 3 centímetros. Ensarta alternando pollo y cebolla, 3 trozos de pollo por palo.'),
      p('Dora los pinchos', 'Calienta la sartén a fuego medio-alto con el aceite. Cocina los pinchos 8 minutos, girándolos cada 2 minutos.', { m: 8, s: 'Dorados por todos los lados y pollo cocido, sin rosado al partir un cubo.' }),
      p('Glasea al final', 'Baja el fuego a medio. Pincela los pinchos con la salsa, voltea, pincela el otro lado y cocina 1 minuto por lado.', { s: 'Capa brillante y pegajosa, color caoba.', e: 'Si la salsa se pone negra, el fuego está muy alto.' }),
      p('Sirve', 'Sirve calientes, con un poco más de salsa por encima.')
    ],
    guardar: 'Duran 2 días en la nevera. Recalienta en sartén con una cucharada de agua.'
  });

  GEN.agregar({
    nombre: 'Udon en caldo', emoji: '🍜', categoria: CAT, dificultad: 'Fácil', foto: 'udon', prep: 5, coccion: 12, porciones: 2,
    descripcion: 'Fideos gruesos y elásticos en un caldo claro y suave de soya. El plato más reconfortante y sencillo de la cocina japonesa.',
    antes: DASHI + ' Los fideos udon se venden precocidos (al vacío o congelados) o secos.',
    ingredientes: [i(2, '', 'porción de fideos udon|porciones de fideos udon'), i(3, 'taza', 'de agua'), i(1.5, 'cdta', 'de dashi en polvo'), i(2, 'cda', 'de salsa de soya'), i(1, 'cdta', 'de azúcar'), i(2, '', 'tallo de cebollín|tallos de cebollín'), i(2, '', 'huevo|huevos', 'Opcional.')],
    utensilios: ['Dos ollas', 'Colador', 'Dos tazones hondos'],
    pasos: [
      p('Prepara el caldo', 'Calienta el agua con el dashi, la soya y el azúcar hasta que hierva suave. Prueba: debe saber un poco más salado que una sopa normal, porque los fideos no llevan sal.'),
      p('Cocina los fideos aparte', 'En otra olla con agua hirviendo, cocina los udon: 2 minutos si son precocidos, o lo que diga el paquete si son secos. Escurre.', { m: 2, s: 'Fideos gruesos, elásticos y resbalosos.', e: 'Cocinados en el caldo lo dejan espeso y turbio.' }),
      p('Agrega el huevo (opcional)', 'Rompe un huevo en el caldo hirviendo suave por cada porción, tapa y cocina 2 minutos sin revolver.', { m: 2, s: 'Clara cuajada y yema todavía blanda.' }),
      p('Sirve', 'Reparte los fideos en los tazones, vierte el caldo muy caliente encima y termina con el cebollín en rodajitas.', { c: 'En Japón se sorben haciendo ruido: enfría el fideo y no es mala educación.' })
    ],
    guardar: 'Guarda el caldo aparte hasta 3 días. Los fideos se cocinan al momento.'
  });

  GEN.agregar({
    nombre: 'Yakimeshi (arroz frito japonés)', emoji: '🍚', categoria: CAT, dificultad: 'Fácil', foto: 'yakimeshi', prep: 10, coccion: 10, porciones: 3,
    descripcion: 'Arroz salteado con huevo, verduras y soya, de granos sueltos y un punto tostado. La mejor forma de usar arroz del día anterior.',
    antes: 'El arroz debe estar <strong>frío y del día anterior</strong>: el arroz recién hecho tiene mucha humedad y queda masudo.',
    ingredientes: [i(3, 'taza', 'de arroz blanco cocido y frío'), i(2, '', 'huevo|huevos'), i(1, '', 'zanahoria|zanahorias'), i(3, '', 'tallo de cebollín|tallos de cebollín'), i(100, 'g', 'de jamón o pollo cocido en cubitos'), i(2, 'cda', 'de salsa de soya'), i(1, 'cdta', 'de aceite de ajonjolí'), aceite(2)],
    utensilios: ['Sartén grande o wok', 'Espátula', 'Tazón', 'Tabla y cuchillo'],
    pasos: [
      p('Prepara todo', 'Suelta el arroz frío con las manos mojadas para deshacer los terrones. Corta la zanahoria en cubitos muy pequeños y el cebollín en rodajitas. Bate los huevos.'),
      p('Haz el huevo', 'Calienta 1 cucharada de aceite a fuego alto. Vierte el huevo, revuélvelo 30 segundos hasta que cuaje en trozos y sácalo a un plato.'),
      p('Saltea la zanahoria y el jamón', 'Agrega el resto del aceite y saltea la zanahoria y el jamón 2 minutos.', { m: 2 }),
      p('Agrega el arroz', 'Echa el arroz y saltea a fuego alto 3 minutos, aplastando los terrones con la espátula y moviendo todo el tiempo.', { m: 3, s: 'Granos sueltos que saltan en la sartén y suenan secos.' }),
      p('Sazona y sirve', 'Vierte la soya por el borde de la sartén (no sobre el arroz) para que se tueste un segundo, y mezcla. Agrega el huevo, el cebollín y el aceite de ajonjolí, mezcla 30 segundos y sirve.', { c: 'La soya que toca el metal caliente da el sabor ahumado típico.' })
    ],
    guardar: 'Dura 2 días en la nevera. Recalienta en sartén caliente.'
  });

  GEN.agregar({
    nombre: 'Sunomono (ensalada japonesa de pepino)', emoji: '🥒', categoria: CAT, dificultad: 'Fácil', foto: 'sunomono', prep: 15, coccion: 0, porciones: 4,
    descripcion: 'Pepino en láminas finísimas con un aliño agridulce de vinagre de arroz. Fresca, crujiente y lista en 15 minutos.',
    antes: 'El paso clave es <strong>sacarle el agua al pepino con sal</strong>: así queda crujiente y el aliño no se agua.',
    ingredientes: [i(2, '', 'pepino|pepinos'), sal(1), i(3, 'cda', 'de vinagre de arroz'), i(1, 'cda', 'de azúcar'), i(1, 'cdta', 'de salsa de soya'), i(1, 'cda', 'de ajonjolí')],
    utensilios: ['Tazón', 'Tabla y cuchillo afilado', 'Colador'],
    pasos: [
      p('Corta el pepino muy fino', 'Lava los pepinos y córtalos en rodajas lo más delgadas que puedas, casi transparentes.'),
      p('Sala y espera', 'Mezcla el pepino con la sal y déjalo 10 minutos en un colador.', { m: 10, s: 'El pepino se ablanda y suelta bastante agua.' }),
      p('Escurre apretando', 'Toma el pepino por puñados y apriétalo con las manos para sacar toda el agua.', { e: 'Si queda mojado, la ensalada sabe aguada.' }),
      p('Aliña', 'Disuelve el azúcar en el vinagre con la soya. Mezcla con el pepino y espolvorea el ajonjolí.'),
      p('Sirve fría', 'Déjala 5 minutos en la nevera y sirve en tazones pequeños, como acompañamiento.')
    ],
    guardar: 'Dura 1 día en la nevera; después pierde el crujiente.'
  });
})();
