/* ============================================================
   DESAYUNOS, CENAS LIGERAS, POSTRES Y BEBIDAS DE CADA PAÍS (parte 1)
   Argentina, Bolivia, Brasil y España
   ============================================================ */
(function () {
  var i = GEN.i, p = GEN.p, sal = GEN.sal, aceite = GEN.aceite, GR = GEN.R;
  function u(c, s, pl) { return i(c, '', s + '|' + pl); }
  // rec(cat, nombre, emoji, foto, momento, [prep, cocción], porciones, dificultad, descripción, ingredientes, utensilios, pasos, guardar)
  function rec(cat, n, e, foto, mom, t, por, dif, desc, ing, uten, pasos, guardar) { GR(cat, n, e, foto, t, por, dif, desc, '', ing, uten, pasos, guardar || '', mom); }

  // ================================================================ ARGENTINA
  var AR = 'Cocina argentina';
  rec(AR, 'Tostado de jamón y queso', '🥪', 'sandwich', 'desayuno', [5, 6], 2, 'Fácil',
    'El tostado de todos los cafés argentinos: pan de miga o de molde con jamón y queso, apretado y dorado en la plancha.',
    [u(4, 'rebanada de pan de molde', 'rebanadas de pan de molde'), u(4, 'lonja de jamón', 'lonjas de jamón'), u(4, 'lonja de queso', 'lonjas de queso'), i(1, 'cda', 'de mantequilla')],
    ['Sartén o plancha', 'Espátula'],
    [p('Arma', 'Pon 2 lonjas de jamón y 2 de queso entre dos rebanadas de pan. Unta mantequilla por fuera.'),
     p('Dora', 'Calienta la sartén a fuego medio y cocina cada tostado 3 minutos por lado, presionando con la espátula.', { m: 6, s: 'Pan dorado y el queso derretido saliendo por los bordes.' }),
     p('Sirve', 'Corta en triángulos y sirve caliente, con café con leche.')], '');
  rec(AR, 'Tortas fritas', '🥯', 'tostadas', 'desayuno', [20, 15], 6, 'Media',
    'Discos de masa fritos que se comen con mate los días de lluvia. Esponjosos por dentro y dorados por fuera.',
    [i(3, 'taza', 'de harina de trigo'), i(1, 'cdta', 'de polvo de hornear'), sal(1), i(1, 'cda', 'de grasa o mantequilla blanda'), i(1, 'taza', 'de agua tibia'), i(null, '', 'Aceite para freír'), i(2, 'cda', 'de azúcar', 'Para espolvorear.')],
    ['Tazón', 'Sartén honda', 'Espumadera'],
    [p('Haz la masa', 'Mezcla la harina, el polvo de hornear y la sal. Agrega la grasa y el agua tibia y amasa 5 minutos hasta que quede suave. Deja reposar 15 minutos tapada.', { m: 15, s: 'Masa suave que no se pega a las manos.' }),
     p('Forma', 'Estira la masa a 1 centímetro y corta discos de 8 centímetros. Hazles un agujero en el centro con el dedo para que no se inflen de más.'),
     p('Fríe', 'Fríe en aceite a fuego medio 2 minutos por lado hasta dorar. Escurre sobre papel.', { m: 4, e: 'Con el aceite muy caliente se doran fuera y quedan crudas dentro.' }),
     p('Sirve', 'Espolvorea azúcar y come tibias.')], 'Se comen el mismo día.');
  rec(AR, 'Tostadas con dulce de leche y banano', '🍞', 'tostadas', 'desayuno', [5, 3], 2, 'Fácil',
    'Desayuno dulce y rápido: pan tostado con dulce de leche y rodajas de banano.',
    [u(4, 'rebanada de pan', 'rebanadas de pan'), i(0.25, 'taza', 'de arequipe o dulce de leche'), u(1, 'banano', 'bananos'), i(1, 'cdta', 'de canela (opcional)')],
    ['Tostadora o sartén'],
    [p('Tuesta', 'Tuesta el pan hasta que esté dorado y crujiente.'), p('Unta', 'Unta el dulce de leche mientras el pan está tibio, para que se ablande.'), p('Termina', 'Cubre con rodajas de banano y un toque de canela.')], '');
  rec(AR, 'Mate cebado', '🧉', 'limonada', 'bebida', [3, 5], 1, 'Fácil',
    'La infusión nacional de Argentina: yerba mate con agua caliente, no hirviendo, que se comparte y se toma sorbo a sorbo.',
    [i(0.5, '', 'taza de yerba mate'), i(1, 'taza', 'de agua a 75 °C (sale vapor pero no hierve)'), i(null, '', 'Azúcar o miel (opcional)')],
    ['Mate (o taza pequeña)', 'Bombilla o colador', 'Termo'],
    [p('Llena el mate', 'Llena 3/4 del mate con yerba. Tapa con la mano, inclina y sacude para que la yerba fina quede al fondo.'),
     p('Moja', 'Con el mate inclinado, vierte un poco de agua tibia en una esquina, sin tocar toda la yerba. Espera 1 minuto.', { m: 1 }),
     p('Cebar', 'Inserta la bombilla en el hueco y vierte agua caliente (no hirviendo) por el mismo lado. Toma hasta sentir el sonido del fondo y rellena.', { s: 'Se escucha un sorbido al terminar.', e: 'Con agua hirviendo se quema la yerba y amarga.' })], '');
  rec(AR, 'Submarino (chocolate caliente argentino)', '☕', 'chocolate-queso', ['bebida', 'desayuno'], [3, 5], 1, 'Fácil',
    'Un vaso de leche caliente donde se sumerge una barra de chocolate hasta que se derrite, como un submarino.',
    [i(1.5, 'taza', 'de leche'), u(2, 'cuadro de chocolate amargo o semiamargo', 'cuadros de chocolate amargo o semiamargo'), i(1, 'cda', 'de azúcar (opcional)')],
    ['Olla pequeña', 'Vaso alto o taza'],
    [p('Calienta la leche', 'Calienta la leche hasta que salga vapor, sin que hierva.', { m: 4 }),
     p('Sumerge el chocolate', 'Pon el chocolate en el fondo de un vaso y vierte la leche encima. Revuelve despacio hasta que se disuelva.', { s: 'Se disuelve en una bebida espesa y brillante.' }),
     p('Sirve', 'Sirve de inmediato, con galletas o medialunas.')], '');
  rec(AR, 'Licuado de banano con leche', '🥛', 'fruta-banano', 'bebida', [5, 0], 1, 'Fácil',
    'El licuado más pedido en Argentina: banano maduro y leche fría, cremoso y dulce.',
    [u(1, 'banano maduro', 'bananos maduros'), i(1, 'taza', 'de leche fría'), i(1, 'cda', 'de azúcar (opcional)'), i(3, '', 'cubos de hielo')],
    ['Licuadora', 'Vaso'], [p('Licúa', 'Licúa el banano en trozos con la leche, el azúcar y el hielo 30 segundos hasta que quede liso.'), p('Sirve', 'Sirve de inmediato, bien frío.')], '');
  rec(AR, 'Flan casero con dulce de leche', '🍮', 'natilla', 'postre', [20, 45], 8, 'Media',
    'El postre del domingo argentino: flan de huevo y leche con caramelo, servido con una cucharada grande de dulce de leche.',
    [u(4, 'huevo', 'huevos'), i(2, 'taza', 'de leche'), i(0.5, 'taza', 'de azúcar'), i(1, 'cdta', 'de vainilla'), i(0.5, 'taza', 'de azúcar', 'Para el caramelo.'), i(1, 'taza', 'de dulce de leche', 'Para servir.')],
    ['Molde', 'Olla', 'Bandeja honda para baño maría', 'Batidor'],
    [p('Caramelo', 'Derrite 1/2 taza de azúcar a fuego medio sin revolver hasta color miel oscuro. Vierte en el molde y gira para cubrir el fondo.', { m: 6, e: 'Cuidado: quema fuerte.' }),
     p('Mezcla', 'Bate los huevos con el azúcar y la vainilla sin hacer espuma. Agrega la leche tibia y cuela sobre el caramelo.'),
     p('Baño maría', 'Pon el molde en una bandeja con agua caliente hasta la mitad y hornea a 160 °C por 45 minutos.', { m: 45, s: 'El centro tiembla un poco; un cuchillo sale casi limpio.' }),
     p('Enfría y sirve', 'Enfría y refrigera 4 horas. Desmolda y sirve con dulce de leche.', { m: 240 })], 'Dura 4 días en la nevera.');
  rec(AR, 'Panqueques con dulce de leche', '🥞', 'panqueques', 'postre', [10, 15], 4, 'Fácil',
    'Panqueques finos como crepes, rellenos de dulce de leche y enrollados. El postre de la abuela.',
    [i(1, 'taza', 'de harina de trigo'), u(2, 'huevo', 'huevos'), i(1.25, 'taza', 'de leche'), i(1, 'cda', 'de mantequilla derretida'), i(1, 'cda', 'de azúcar'), i(0.75, 'taza', 'de dulce de leche')],
    ['Licuadora o batidor', 'Sartén antiadherente', 'Cucharón'],
    [p('Mezcla', 'Licúa la harina con los huevos, la leche, la mantequilla y el azúcar. Deja reposar 10 minutos.', { m: 10, s: 'Masa líquida y sin grumos, como crema de leche.' }),
     p('Cocina', 'En sartén caliente con un poco de mantequilla, vierte medio cucharón y gira para extenderla. Cocina 1 minuto por lado.', { m: 8, s: 'Se despega solo del borde y sale con manchas doradas.' }),
     p('Rellena', 'Unta cada panqueque con dulce de leche y enróllalo. Sirve tibio.')], 'Se guardan 2 días en la nevera.');
  rec(AR, 'Budín de pan argentino', '🍞', 'torta', 'postre', [15, 50], 8, 'Fácil',
    'Postre de aprovechamiento: pan duro remojado en leche con huevos y azúcar, horneado hasta quedar jugoso, con caramelo.',
    [i(4, 'taza', 'de pan del día anterior en trozos'), i(2, 'taza', 'de leche'), u(3, 'huevo', 'huevos'), i(0.75, 'taza', 'de azúcar'), i(1, 'cdta', 'de vainilla'), i(0.5, 'taza', 'de pasas (opcional)'), i(0.5, 'taza', 'de azúcar', 'Para el caramelo.')],
    ['Molde', 'Tazón', 'Horno'],
    [p('Remoja el pan', 'Deja el pan 15 minutos en la leche tibia y aplástalo con un tenedor hasta que quede una pasta.', { m: 15 }),
     p('Mezcla', 'Agrega los huevos, el azúcar, la vainilla y las pasas y mezcla bien.'),
     p('Caramelo y horno', 'Derrite 1/2 taza de azúcar en el molde hasta color miel. Vierte la mezcla y hornea a 170 °C por 50 minutos.', { m: 50, s: 'Dorado arriba; un cuchillo sale limpio.' }),
     p('Enfría', 'Deja enfriar completamente y desmolda.')], 'Dura 4 días en la nevera.');

  // ================================================================ BOLIVIA
  var BO = 'Cocina boliviana';
  rec(BO, 'Pastel de queso frito (boliviano)', '🥟', 'empanadas', 'desayuno', [30, 15], 8, 'Media',
    'Empanada frita rellena de queso derretido y espolvoreada con azúcar, para el desayuno con api morado.',
    [i(2, 'taza', 'de harina de trigo'), i(1, 'cdta', 'de polvo de hornear'), i(1, 'cda', 'de mantequilla'), i(0.5, 'taza', 'de agua tibia'), sal(0.5), i(2, 'taza', 'de queso fresco en trozos'), i(null, '', 'Aceite para freír'), i(2, 'cda', 'de azúcar', 'Para espolvorear.')],
    ['Tazón', 'Rodillo', 'Sartén honda'],
    [p('Haz la masa', 'Mezcla la harina, el polvo de hornear y la sal. Agrega la mantequilla y el agua y amasa hasta formar una masa suave. Reposa 15 minutos.', { m: 15 }),
     p('Rellena', 'Estira la masa fina y corta círculos de 12 cm. Pon queso en el centro, dobla y sella los bordes con un tenedor.'),
     p('Fríe', 'Fríe en aceite a fuego medio hasta que estén dorados y el queso se derrita, 3 minutos por lado.', { m: 6, s: 'Dorados e inflados; el queso se siente blando por dentro.' }),
     p('Sirve', 'Espolvorea azúcar y sirve tibios.')], '');
  rec(BO, 'Api morado', '🥤', 'chocolate-queso', ['bebida', 'desayuno'], [10, 30], 4, 'Media',
    'Bebida espesa y dulce de maíz morado con canela y clavos, típica de los desayunos fríos de Bolivia.',
    [i(1, 'taza', 'de maíz morado molido (o harina de maíz morado)'), i(4, 'taza', 'de agua'), u(1, 'astilla de canela', 'astillas de canela'), u(4, 'clavo de olor', 'clavos de olor'), i(0.5, 'taza', 'de azúcar'), i(1, 'cda', 'de jugo de limón'), i(1, 'taza', 'de piña picada (opcional)')],
    ['Olla', 'Cuchara de palo', 'Colador'],
    [p('Hierve las especias', 'Hierve el agua con la canela, los clavos y la piña 10 minutos. Cuela.', { m: 10 }),
     p('Espesa', 'Disuelve el maíz en una taza de agua fría y agrégalo al agua caliente revolviendo sin parar. Cocina 15 minutos a fuego bajo.', { m: 15, s: 'Espeso como un atole, de color morado intenso.', e: 'Sin revolver se hacen grumos.' }),
     p('Termina', 'Agrega el azúcar y el limón. Sirve caliente con pastel.')], '');
  rec(BO, 'Refresco de mocochinchi', '🍑', 'fruta-durazno', 'bebida', [20, 30], 6, 'Fácil',
    'Refresco boliviano de duraznos secos hervidos con canela, servido bien frío con el durazno hidratado en el vaso.',
    [i(1, 'taza', 'de duraznos secos (orejones)'), i(6, 'taza', 'de agua'), u(1, 'astilla de canela', 'astillas de canela'), i(0.5, 'taza', 'de azúcar')],
    ['Olla', 'Jarra'],
    [p('Hidrata', 'Lava los duraznos y déjalos en agua 20 minutos.', { m: 20 }), p('Hierve', 'Hierve los duraznos con el agua, la canela y el azúcar 30 minutos a fuego bajo.', { m: 30, s: 'El líquido toma color ámbar y huele a durazno.' }), p('Enfría', 'Enfría y refrigera. Sirve bien frío con un durazno en cada vaso.')], 'Dura 4 días en la nevera.');
  rec(BO, 'Helado de canela boliviano', '🍨', 'natilla', 'postre', [15, 15], 6, 'Media',
    'Helado de canela al estilo de Sucre: suave, aromático y simple.',
    [i(2, 'taza', 'de leche'), i(1, 'taza', 'de crema de leche'), u(3, 'astilla de canela', 'astillas de canela'), i(0.75, 'taza', 'de azúcar'), u(3, 'yema de huevo', 'yemas de huevo')],
    ['Olla', 'Batidor', 'Recipiente para congelar'],
    [p('Infusiona', 'Calienta la leche con la canela 10 minutos a fuego bajo sin hervir. Retira la canela.', { m: 10 }),
     p('Crema', 'Bate las yemas con el azúcar y agrega la leche caliente en hilo. Cocina a fuego muy bajo 5 minutos hasta que cubra la cuchara. Agrega la crema de leche y enfría.', { m: 5, s: 'La crema cubre el dorso de la cuchara.' }),
     p('Congela', 'Congela 6 horas, revolviendo cada hora las primeras 3.', { m: 360 })], 'Dura 2 semanas en el congelador.');
  rec(BO, 'Buñuelos bolivianos con miel', '🍯', 'bunuelos', 'postre', [30, 20], 10, 'Media',
    'Buñuelos fritos de masa de trigo y queso, bañados en miel de caña o de panela con canela.',
    [i(2, 'taza', 'de harina de trigo'), u(2, 'huevo', 'huevos'), i(0.5, 'taza', 'de leche'), i(1, 'cda', 'de azúcar'), i(0.5, 'taza', 'de queso rallado'), i(null, '', 'Aceite para freír'), i(0.5, 'taza', 'de panela rallada', 'Para la miel.'), i(0.5, 'taza', 'de agua'), u(1, 'astilla de canela', 'astillas de canela')],
    ['Tazón', 'Sartén honda', 'Olla pequeña'],
    [p('Masa', 'Mezcla la harina, los huevos, la leche, el azúcar y el queso hasta formar una masa suave. Reposa 15 minutos.', { m: 15 }),
     p('Miel', 'Hierve la panela con el agua y la canela 10 minutos hasta que espese un poco.', { m: 10 }),
     p('Fríe', 'Forma bolas con dos cucharas y fríe a fuego medio hasta que estén doradas, 4 minutos.', { m: 4, s: 'Doradas e infladas.' }),
     p('Sirve', 'Baña con la miel tibia.')], '');
  rec(BO, 'Ensalada tibia de quinua con queso', '🥗', 'ensalada-quinua', 'cena', [10, 20], 3, 'Fácil',
    'Cena ligera con la quinua del altiplano: tibia, con tomate, cebolla y queso fresco.',
    [i(1, 'taza', 'de quinua'), i(2, 'taza', 'de agua'), u(2, 'tomate', 'tomates'), u(0.5, 'cebolla morada', 'cebollas moradas'), i(1, 'taza', 'de queso fresco en cubos'), i(2, 'cda', 'de aceite'), u(1, 'limón', 'limones'), sal(0.5), i(2, 'cda', 'de cilantro picado')],
    ['Olla', 'Colador', 'Tazón'],
    [p('Lava la quinua', 'Lava la quinua en un colador bajo agua fría frotándola: así pierde lo amargo.'),
     p('Cocina', 'Hierve la quinua con el agua y una pizca de sal, tapada a fuego bajo, 15 minutos hasta que salga un anillito blanco.', { m: 15, s: 'Los granos se abren y muestran un hilito blanco.' }),
     p('Mezcla', 'Mezcla la quinua tibia con el tomate y la cebolla picados, el queso, el aceite, el limón y el cilantro.')], 'Dura 2 días en la nevera.');
  rec(BO, 'Humintas de queso', '🌽', 'arepa-choclo', 'cena', [30, 40], 6, 'Media',
    'Masa de maíz tierno con queso y anís, envuelta en la hoja de la mazorca y cocida al vapor.',
    [u(6, 'mazorca tierna con hojas', 'mazorcas tiernas con hojas'), i(1, 'taza', 'de queso fresco'), i(2, 'cda', 'de mantequilla'), i(1, 'cdta', 'de anís'), i(1, 'cda', 'de azúcar'), sal(0.5)],
    ['Licuadora', 'Olla para vapor'],
    [p('Muele el maíz', 'Desgrana las mazorcas guardando las hojas más grandes. Muele los granos con la mantequilla, el anís, el azúcar y la sal hasta una pasta gruesa.'),
     p('Arma', 'En una hoja pon 3 cucharadas de masa y un trozo de queso. Cubre con más masa y cierra la hoja formando un paquete.'),
     p('Vapor', 'Cocina al vapor 40 minutos.', { m: 40, s: 'La masa está firme y se despega de la hoja.' })], 'Dura 3 días en la nevera.');

  // ================================================================ BRASIL
  var BR = 'Cocina brasileña';
  rec(BR, 'Tapioca rellena de queso', '🫓', 'tostadas', ['desayuno', 'cena'], [5, 5], 2, 'Fácil',
    'Crepe de almidón de yuca hidratado, cocinado en seco y rellenado con queso. Sin gluten y muy rápido.',
    [i(1, 'taza', 'de almidón de yuca hidratado (goma de tapioca)'), i(1, 'taza', 'de queso rallado o en lonjas'), sal(0.25), i(null, '', 'Mantequilla o jamón (opcional)')],
    ['Sartén antiadherente', 'Colador'],
    [p('Calienta', 'Calienta la sartén a fuego medio, sin aceite.'), p('Tamiza', 'Pasa la tapioca por un colador sobre la sartén en una capa pareja del tamaño de un plato.'),
     p('Cuaja', 'Cocina 1 minuto hasta que se una y forme una crepe. Pon el queso sobre una mitad, dobla y cocina 1 minuto más.', { m: 2, s: 'La crepe se mueve entera al sacudir la sartén.' })], 'Se come al momento.');
  rec(BR, 'Pão na chapa (pan con mantequilla a la plancha)', '🍞', 'tostadas', 'desayuno', [2, 5], 2, 'Fácil',
    'El pan francés partido, con mantequilla, dorado en la plancha. El desayuno de las panaderías brasileñas.',
    [u(2, 'pan francés o baguette pequeño', 'panes franceses o baguettes pequeños'), i(2, 'cda', 'de mantequilla')],
    ['Sartén', 'Cuchillo'], [p('Abre y unta', 'Parte los panes a lo largo y unta mantequilla por dentro.'), p('Dora', 'Pon cada pan abierto en la sartén y presiona con una espátula 2 minutos por lado.', { s: 'Dorado y crujiente por fuera.' }), p('Sirve', 'Sirve con café con leche.')], '');
  rec(BR, 'Vitamina de aguacate', '🥑', 'limonada', 'bebida', [5, 0], 2, 'Fácil',
    'Batido dulce de aguacate con leche y azúcar, muy popular en Brasil.',
    [u(1, 'aguacate maduro', 'aguacates maduros'), i(2, 'taza', 'de leche fría'), i(3, 'cda', 'de azúcar'), i(4, '', 'cubos de hielo')],
    ['Licuadora'], [p('Licúa', 'Pela el aguacate y licúalo con la leche, el azúcar y el hielo 1 minuto hasta que quede cremoso.', { s: 'Cremoso y de color verde claro.' }), p('Sirve', 'Sirve de inmediato.')], '');
  rec(BR, 'Caipirinha sin alcohol (limonada brasileña)', '🍋', 'limonada', 'bebida', [5, 0], 2, 'Fácil',
    'La versión sin alcohol: limón macerado con azúcar, hielo y soda. Fresca y ácida.',
    [u(2, 'limón', 'limones'), i(3, 'cda', 'de azúcar'), i(1.5, 'taza', 'de hielo'), i(1, 'taza', 'de soda o agua con gas')],
    ['Vaso', 'Machacador o cuchara'], [p('Maceración', 'Corta los limones en trozos y presiónalos con el azúcar en el vaso, sin triturarlos demasiado (la cáscara amarga).', { e: 'Si aplastas fuerte la cáscara, amarga.' }), p('Sirve', 'Agrega el hielo y la soda y revuelve.')], '');
  rec(BR, 'Beijinho (bolitas de coco)', '🥥', 'brigadeiro', 'postre', [10, 10], 20, 'Fácil',
    'Bolitas de coco y leche condensada cubiertas de coco rallado. El primo blanco del brigadeiro.',
    [i(1, 'taza', 'de leche condensada'), i(1, 'cda', 'de mantequilla'), i(1.5, 'taza', 'de coco rallado'), i(0.25, 'taza', 'de coco rallado', 'Para cubrir.')],
    ['Olla', 'Cuchara de palo', 'Plato untado'],
    [p('Cocina', 'Cocina la leche condensada con la mantequilla y 1 1/2 tazas de coco a fuego bajo, revolviendo, 8 a 10 minutos.', { m: 9, s: 'Se despega del fondo de la olla.' }), p('Enfría', 'Pasa a un plato untado y deja enfriar 30 minutos.', { m: 30 }), p('Forma', 'Forma bolitas con las manos untadas y pásalas por coco rallado.')], 'Duran 5 días en la nevera.');
  rec(BR, 'Quindim', '🍮', 'natilla', 'postre', [20, 40], 8, 'Media',
    'Postre brillante amarillo de yemas, azúcar y coco. Doble capa: arriba flan, abajo coco.',
    [u(8, 'yema de huevo', 'yemas de huevo'), i(1, 'taza', 'de azúcar'), i(1, 'taza', 'de coco rallado'), i(1, 'cda', 'de mantequilla blanda'), i(0.5, 'taza', 'de agua')],
    ['Moldes pequeños untados', 'Bandeja para baño maría'],
    [p('Mezcla', 'Mezcla las yemas con el azúcar, la mantequilla, el coco y el agua sin batir fuerte.'), p('Reparte', 'Llena moldes pequeños untados con mantequilla y azúcar.'), p('Hornea', 'Hornea a baño maría a 180 °C por 40 minutos.', { m: 40, s: 'Dorado arriba y firme al tocar.' }), p('Enfría', 'Enfría y desmolda: el coco queda arriba.')], 'Dura 4 días en la nevera.');
  rec(BR, 'Salada de palmito y tomate', '🥗', 'ensalada-tomate', 'cena', [10, 0], 3, 'Fácil',
    'Ensalada fresca de palmitos, tomate y cebolla con limón y aceite de oliva.',
    [i(1, 'taza', 'de palmitos en conserva en rodajas'), u(3, 'tomate', 'tomates'), u(0.5, 'cebolla morada', 'cebollas moradas'), i(2, 'cda', 'de aceite de oliva'), u(1, 'limón', 'limones'), sal(0.5), i(2, 'cda', 'de perejil')],
    ['Tazón'], [p('Corta', 'Escurre el palmito y córtalo en rodajas. Corta el tomate en cubos y la cebolla fina.'), p('Aliña', 'Mezcla todo con el aceite, el limón, la sal y el perejil.')], 'Dura 1 día en la nevera.');
  rec(BR, 'Caldo de feijão', '🍲', 'frijoles', 'cena', [15, 45], 4, 'Fácil',
    'Caldo espeso de fríjoles negros con ajo y cebolla, la cena ligera de los días de frío en Brasil.',
    [i(2, 'taza', 'de fríjoles negros cocidos'), i(3, 'taza', 'de agua'), u(1, 'cebolla', 'cebollas'), GEN.ajo(3), aceite(1), sal(1), i(0.5, 'taza', 'de cilantro picado')],
    ['Olla', 'Licuadora'],
    [p('Sofríe', 'Sofríe la cebolla picada y el ajo en aceite 4 minutos.', { m: 4 }), p('Cocina', 'Agrega los fríjoles y el agua y cocina 20 minutos. Licúa la mitad y regresa a la olla para espesar.', { m: 20 }), p('Sirve', 'Sazona con sal y cilantro y sirve caliente.')], 'Dura 3 días en la nevera.');

  // ================================================================ ESPAÑA
  var ES = 'Cocina española';
  rec(ES, 'Pan con tomate y jamón', '🍅', 'tostadas', 'desayuno', [5, 3], 2, 'Fácil',
    'El desayuno catalán: pan tostado frotado con tomate maduro, aceite de oliva y sal, con jamón encima.',
    [u(4, 'rebanada de pan rústico', 'rebanadas de pan rústico'), u(2, 'tomate maduro', 'tomates maduros'), i(2, 'cda', 'de aceite de oliva'), sal(0.25), u(4, 'lonja de jamón serrano', 'lonjas de jamón serrano')],
    ['Tostadora', 'Rallador'],
    [p('Tuesta', 'Tuesta el pan hasta que esté crujiente.'), p('Frota', 'Ralla el tomate o frótalo directamente sobre el pan hasta cubrirlo con la pulpa.'), p('Termina', 'Agrega aceite, sal y el jamón.')], '');
  rec(ES, 'Chocolate a la taza', '☕', 'chocolate-queso', ['bebida', 'desayuno'], [3, 8], 2, 'Fácil',
    'Chocolate caliente muy espeso, de los de mojar churros. Se espesa con maicena.',
    [i(2, 'taza', 'de leche'), i(100, 'g', 'de chocolate negro en trozos'), i(1, 'cda', 'de maicena'), i(1, 'cda', 'de azúcar')],
    ['Olla', 'Batidor'],
    [p('Calienta', 'Calienta 1 3/4 tazas de leche con el chocolate y el azúcar hasta que se derrita.', { m: 4 }), p('Espesa', 'Disuelve la maicena en la leche fría restante, agrégala y revuelve 3 minutos a fuego bajo.', { m: 3, s: 'Cubre la cuchara con una capa espesa.' }), p('Sirve', 'Sirve caliente con churros o galletas.')], '');
  rec(ES, 'Sangría sin alcohol', '🍷', 'fruta-uva', 'bebida', [10, 0], 6, 'Fácil',
    'Bebida de frutas y jugo de uva con canela y gaseosa: la versión sin alcohol de la sangría.',
    [i(2, 'taza', 'de jugo de uva'), i(1, 'taza', 'de jugo de naranja'), u(1, 'manzana', 'manzanas'), u(1, 'naranja', 'naranjas'), u(1, 'limón', 'limones'), u(1, 'astilla de canela', 'astillas de canela'), i(2, 'taza', 'de agua con gas'), i(null, '', 'Hielo')],
    ['Jarra grande', 'Cuchara'],
    [p('Corta', 'Corta la manzana, la naranja y el limón en rodajas finas.'), p('Mezcla', 'En la jarra pon las frutas, los jugos y la canela. Deja reposar 30 minutos en la nevera.', { m: 30 }), p('Sirve', 'Agrega el agua con gas y hielo al servir.')], '');
  rec(ES, 'Flan casero español', '🍮', 'natilla', 'postre', [15, 50], 6, 'Media',
    'Flan clásico de huevo y leche con caramelo líquido, cocinado al baño maría.',
    [u(4, 'huevo', 'huevos'), i(2, 'taza', 'de leche'), i(0.5, 'taza', 'de azúcar'), i(1, 'cdta', 'de vainilla'), i(0.5, 'taza', 'de azúcar', 'Para el caramelo.')],
    ['Moldes', 'Bandeja para baño maría'],
    [p('Caramelo', 'Derrite el azúcar sin revolver hasta color miel oscuro y viértelo en los moldes.', { m: 6 }), p('Mezcla', 'Bate los huevos con el azúcar y la vainilla, agrega la leche y cuela.'), p('Hornea', 'Cocina a baño maría a 150 °C por 45 minutos.', { m: 45, s: 'Tiembla en el centro pero ya no está líquido.' }), p('Enfría', 'Enfría 4 horas y desmolda.', { m: 240 })], 'Dura 4 días en la nevera.');
  rec(ES, 'Crema catalana', '🍮', 'natilla', 'postre', [15, 15], 4, 'Media',
    'Crema de yema, leche, canela y limón, cubierta con azúcar caramelizada que cruje.',
    [i(2, 'taza', 'de leche'), u(4, 'yema de huevo', 'yemas de huevo'), i(0.5, 'taza', 'de azúcar'), i(2, 'cda', 'de maicena'), u(1, 'astilla de canela', 'astillas de canela'), i(1, '', 'tira de cáscara de limón'), i(4, 'cda', 'de azúcar', 'Para caramelizar.')],
    ['Olla', 'Batidor', 'Cazuelitas', 'Soplete (o plancha caliente)'],
    [p('Infusiona', 'Calienta 1 3/4 tazas de leche con la canela y la cáscara de limón. Deja reposar 10 minutos y cuela.', { m: 10 }), p('Mezcla', 'Bate las yemas con el azúcar y la maicena disuelta en la leche fría restante. Agrega la leche caliente.'), p('Espesa', 'Cocina a fuego bajo revolviendo 5 minutos hasta que espese. Reparte en cazuelas y enfría.', { m: 5, s: 'Cubre la cuchara y no cae al inclinarla.' }), p('Carameliza', 'Espolvorea azúcar y quémala con un soplete hasta que se forme una costra dorada que cruje.')], 'Dura 3 días en la nevera sin el caramelo.');
  rec(ES, 'Torrijas', '🍞', 'tostadas', ['postre', 'desayuno'], [10, 15], 6, 'Fácil',
    'Pan empapado en leche con canela, pasado por huevo y frito, espolvoreado con azúcar. El postre de Semana Santa.',
    [u(6, 'rebanada gruesa de pan del día anterior', 'rebanadas gruesas de pan del día anterior'), i(1, 'taza', 'de leche'), u(1, 'astilla de canela', 'astillas de canela'), i(2, 'cda', 'de azúcar'), u(2, 'huevo', 'huevos'), i(null, '', 'Aceite para freír'), i(3, 'cda', 'de azúcar con canela', 'Para espolvorear.')],
    ['Olla pequeña', 'Platos hondos', 'Sartén'],
    [p('Remoja', 'Calienta la leche con la canela y el azúcar y déjala entibiar. Remoja el pan 1 minuto por lado, sin que se deshaga.', { m: 2, e: 'Si se remoja mucho se rompe.' }), p('Reboza', 'Pasa cada rebanada por huevo batido.'), p('Fríe', 'Fríe en aceite a fuego medio 2 minutos por lado hasta dorar.', { m: 4 }), p('Termina', 'Escurre y pasa por azúcar con canela.')], 'Se comen el mismo día.');
  rec(ES, 'Ensalada mixta española con atún', '🥗', 'ensalada-tomate', 'cena', [10, 0], 2, 'Fácil',
    'Ensalada básica de cualquier bar español: lechuga, tomate, cebolla, huevo duro, atún y aceitunas.',
    [i(3, 'taza', 'de lechuga'), u(2, 'tomate', 'tomates'), u(0.5, 'cebolla', 'cebollas'), u(2, 'huevo cocido', 'huevos cocidos'), i(1, '', 'lata de atún escurrido'), i(0.25, 'taza', 'de aceitunas'), i(2, 'cda', 'de aceite de oliva'), i(1, 'cda', 'de vinagre'), sal(0.5)],
    ['Ensaladera'], [p('Corta', 'Corta la lechuga, el tomate y la cebolla; el huevo en cuartos.'), p('Arma', 'Pon todo en la ensaladera con el atún y las aceitunas y aliña con aceite, vinagre y sal.')], '');
  rec(ES, 'Pisto manchego', '🍅', 'verduras-salteadas', 'cena', [15, 35], 4, 'Fácil',
    'Guiso de verduras: calabacín, pimentón, cebolla y tomate cocinados lento en aceite. Sale bien con un huevo frito.',
    [u(2, 'calabacín', 'calabacines'), u(1, 'pimentón', 'pimentones'), u(1, 'cebolla', 'cebollas'), u(3, 'tomate', 'tomates'), GEN.ajo(2), aceite(3), sal(1), u(2, 'huevo', 'huevos')],
    ['Sartén honda', 'Tabla y cuchillo'],
    [p('Sofríe', 'Sofríe la cebolla y el pimentón picados en aceite 8 minutos.', { m: 8 }), p('Agrega', 'Agrega el calabacín en cubos y el ajo y cocina 8 minutos más. Agrega el tomate picado y la sal.'), p('Reduce', 'Cocina tapado a fuego bajo 20 minutos hasta que se concentre.', { m: 20, s: 'Espeso, sin agua en el fondo.' }), p('Sirve', 'Sirve caliente con un huevo frito encima.')], 'Dura 4 días en la nevera.');
})();
