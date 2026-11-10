/* ============================================================
   DESAYUNOS, CENAS LIGERAS, POSTRES Y BEBIDAS DE CADA PAÍS (parte 2)
   Italia, Japón, México, Perú y Venezuela
   ============================================================ */
(function () {
  var i = GEN.i, p = GEN.p, sal = GEN.sal, aceite = GEN.aceite, GR = GEN.R, ajo = GEN.ajo;
  function u(c, s, pl) { return i(c, '', s + '|' + pl); }
  function rec(cat, n, e, foto, mom, t, por, dif, desc, ing, uten, pasos, guardar) { GR(cat, n, e, foto, t, por, dif, desc, '', ing, uten, pasos, guardar || '', mom); }

  // ================================================================ ITALIA
  var IT = 'Cocina italiana';
  rec(IT, 'Frittata de espinaca y queso', '🍳', 'omelette', ['desayuno', 'cena'], [10, 12], 2, 'Fácil',
    'Tortilla italiana gruesa cocida lento y terminada al horno o tapada. Se come tibia o fría.',
    [u(4, 'huevo', 'huevos'), i(2, 'taza', 'de espinaca fresca'), i(0.5, 'taza', 'de queso parmesano o mozzarella rallado'), aceite(1), sal(0.5), i(null, '', 'Pimienta')],
    ['Sartén antiadherente con tapa', 'Tazón'],
    [p('Saltea', 'Saltea la espinaca en aceite 2 minutos hasta que se encoja.', { m: 2 }), p('Mezcla', 'Bate los huevos con el queso, la sal y la pimienta y agrégalos a la espinaca.'), p('Cocina', 'Cocina tapada a fuego bajo 8 a 10 minutos, hasta que cuaje y solo quede húmedo en la superficie.', { m: 9, s: 'Firme al tocar y dorado por debajo.' }), p('Sirve', 'Corta en cuñas.')], 'Dura 2 días en la nevera.');
  rec(IT, 'Tostada con ricotta y miel', '🍯', 'tostadas', 'desayuno', [3, 3], 2, 'Fácil',
    'Desayuno italiano sencillo: pan tostado con ricotta cremosa, miel y un toque de canela o frutos.',
    [u(2, 'rebanada gruesa de pan', 'rebanadas gruesas de pan'), i(0.5, 'taza', 'de ricotta o queso fresco cremoso'), i(2, 'cda', 'de miel'), i(null, '', 'Canela o fruta picada')],
    ['Tostadora'], [p('Tuesta', 'Tuesta el pan hasta que esté dorado.'), p('Cubre', 'Unta la ricotta, agrega la miel y termina con canela o fruta.')], '');
  rec(IT, 'Cappuccino casero', '☕', 'chocolate-queso', ['bebida', 'desayuno'], [3, 3], 1, 'Fácil',
    'Café fuerte con leche caliente espumada. Se hace sin máquina con una cafetera moka o café concentrado.',
    [i(0.5, 'taza', 'de café fuerte (espresso o de cafetera moka)'), i(0.5, 'taza', 'de leche'), i(null, '', 'Cacao en polvo (opcional)')],
    ['Cafetera', 'Olla pequeña', 'Batidor o frasco'],
    [p('Café', 'Prepara el café fuerte y vierte en una taza.'), p('Espuma la leche', 'Calienta la leche sin hervir y bátela con un batidor o agitándola en un frasco cerrado 20 segundos.', { s: 'Doble de volumen con espuma fina.' }), p('Une', 'Vierte la leche sobre el café y termina con la espuma y cacao.')], '');
  rec(IT, 'Cioccolata calda italiana', '🍫', 'chocolate-queso', 'bebida', [3, 8], 2, 'Fácil',
    'Chocolate caliente tan espeso que se come con cuchara. Lleva maicena y chocolate negro.',
    [i(2, 'taza', 'de leche'), i(100, 'g', 'de chocolate negro'), i(1, 'cda', 'de maicena'), i(1, 'cda', 'de azúcar')],
    ['Olla', 'Batidor'], [p('Disuelve', 'Calienta 1 1/2 tazas de leche con el chocolate y el azúcar hasta que se derrita.'), p('Espesa', 'Disuelve la maicena en la leche fría restante, agrégala y revuelve 3 minutos hasta que espese.', { m: 3 }), p('Sirve', 'Sirve caliente en tazas pequeñas.')], '');
  rec(IT, 'Limonata italiana', '🍋', 'limonada', 'bebida', [10, 0], 4, 'Fácil',
    'Limonada burbujeante con ralladura y un toque de menta.',
    [u(4, 'limón', 'limones'), i(0.5, 'taza', 'de azúcar'), i(3, 'taza', 'de agua con gas'), i(null, '', 'Hojas de menta'), i(null, '', 'Hielo')],
    ['Jarra', 'Exprimidor'], [p('Jarabe', 'Mezcla el jugo de los limones con el azúcar hasta que se disuelva.'), p('Sirve', 'Agrega el agua con gas, la menta y el hielo.')], '');
  rec(IT, 'Panna cotta', '🍮', 'natilla', 'postre', [15, 5], 4, 'Fácil',
    'Postre de crema cocida y gelatina, suave y temblorosa. Se sirve con salsa de fresa o caramelo.',
    [i(2, 'taza', 'de crema de leche'), i(0.5, 'taza', 'de azúcar'), i(1, 'cdta', 'de vainilla'), i(2, 'cdta', 'de gelatina sin sabor'), i(3, 'cda', 'de agua fría'), i(1, 'taza', 'de fresas o mermelada', 'Para servir.')],
    ['Olla', 'Moldes o vasitos'],
    [p('Hidrata', 'Mezcla la gelatina con el agua fría 5 minutos.', { m: 5 }), p('Calienta', 'Calienta la crema con el azúcar sin hervir, 5 minutos. Retira, agrega la vainilla y la gelatina y mezcla hasta disolver.', { m: 5 }), p('Cuaja', 'Reparte en moldes y refrigera 4 horas.', { m: 240, s: 'Tiembla pero no se corre.' }), p('Sirve', 'Desmolda y sirve con fresas o mermelada.')], 'Dura 3 días en la nevera.');
  rec(IT, 'Affogato al caffè', '🍨', 'helado-matcha', ['postre', 'bebida'], [3, 2], 2, 'Fácil',
    'Una bola de helado de vainilla “ahogada” en café espresso caliente. Dos ingredientes y mucho efecto.',
    [i(2, '', 'bolas de helado de vainilla'), i(0.5, 'taza', 'de café fuerte caliente'), i(null, '', 'Chocolate rallado (opcional)')],
    ['Vasos o copas'], [p('Sirve el helado', 'Pon el helado en copas frías.'), p('Ahoga', 'Vierte el café caliente por encima justo al servir.', { e: 'Si esperas se derrite todo.' })], '');
  rec(IT, 'Zabaione', '🥄', 'natilla', 'postre', [10, 10], 4, 'Media',
    'Crema ligera de yemas batidas con azúcar y vino dulce (o jugo de uva), servida tibia sobre fresas.',
    [u(4, 'yema de huevo', 'yemas de huevo'), i(4, 'cda', 'de azúcar'), i(0.5, 'taza', 'de jugo de uva o vino dulce'), i(1, 'taza', 'de fresas', 'Para servir.')],
    ['Tazón resistente al calor', 'Olla con agua', 'Batidor'],
    [p('Baño maría', 'Pon el tazón sobre una olla con agua apenas hirviendo, sin tocar el agua.'), p('Bate', 'Bate yemas, azúcar y jugo 8 minutos, sin parar, hasta que triplique y haga cinta.', { m: 8, s: 'Espuma gruesa y cremosa que forma cinta.', e: 'Si el agua hierve fuerte, se cuajan las yemas.' }), p('Sirve', 'Sirve de inmediato sobre fresas.')], 'Se come al momento.');
  rec(IT, 'Caprese', '🍅', 'ensalada-tomate', 'cena', [10, 0], 2, 'Fácil',
    'Tomate, mozzarella y albahaca con aceite de oliva. Tres ingredientes y nada más.',
    [u(3, 'tomate maduro', 'tomates maduros'), i(200, 'g', 'de mozzarella fresca'), i(0.5, 'taza', 'de hojas de albahaca'), i(2, 'cda', 'de aceite de oliva'), sal(0.5)],
    ['Plato', 'Cuchillo'], [p('Corta', 'Corta el tomate y la mozzarella en rodajas de 1 cm.'), p('Arma', 'Alterna tomate, queso y albahaca en un plato. Termina con aceite y sal.')], '');

  // ================================================================ JAPÓN
  var JP = 'Comida japonesa';
  rec(JP, 'Mugicha (té de cebada frío)', '🍵', 'matcha-latte', 'bebida', [5, 10], 4, 'Fácil',
    'El té frío del verano japonés: cebada tostada hervida y enfriada. Sin cafeína, ligero y tostado.',
    [i(3, 'cda', 'de cebada tostada (o 4 bolsitas de mugicha)'), i(4, 'taza', 'de agua'), i(null, '', 'Hielo')],
    ['Olla', 'Jarra', 'Colador'], [p('Hierve', 'Hierve el agua, agrega la cebada y cocina a fuego bajo 5 minutos.', { m: 5 }), p('Reposa', 'Apaga y deja reposar 5 minutos. Cuela.', { m: 5 }), p('Enfría', 'Refrigera y sirve con hielo.')], 'Dura 3 días en la nevera.');
  rec(JP, 'Ramune casero (limonada gaseosa)', '🥤', 'limonada', 'bebida', [5, 0], 2, 'Fácil',
    'Refresco de limón y soda al estilo de los festivales japoneses.',
    [u(2, 'limón', 'limones'), i(3, 'cda', 'de azúcar'), i(1.5, 'taza', 'de agua con gas'), i(null, '', 'Hielo')],
    ['Vasos'], [p('Jarabe', 'Mezcla jugo de limón con azúcar hasta disolver.'), p('Sirve', 'Agrega hielo y el agua con gas.')], '');
  rec(JP, 'Té verde sencha caliente', '🍵', 'matcha-latte', ['bebida', 'desayuno'], [2, 3], 2, 'Fácil',
    'Infusión japonesa de té verde. El agua no debe hervir para que no amargue.',
    [i(2, 'cdta', 'de té verde sencha'), i(2, 'taza', 'de agua a 75 °C')], ['Tetera', 'Colador'],
    [p('Calienta', 'Calienta el agua hasta que suelte vapor, sin hervir.'), p('Infusiona', 'Vierte sobre el té y deja 1 minuto. Cuela y sirve.', { m: 1, e: 'Con agua hirviendo o más tiempo, se vuelve amargo.' })], '');

  // ================================================================ MÉXICO
  var MX = 'Cocina mexicana';
  rec(MX, 'Huevos rancheros', '🍳', 'huevos-pericos', 'desayuno', [10, 15], 2, 'Fácil',
    'Huevos fritos sobre tortilla con salsa de tomate picante. El desayuno mexicano por excelencia.',
    [u(4, 'huevo', 'huevos'), u(2, 'tortilla de maíz', 'tortillas de maíz'), u(3, 'tomate', 'tomates'), u(0.5, 'cebolla', 'cebollas'), GEN.ajo(1), u(1, 'ají picante', 'ajíes picantes'), aceite(2), sal(0.5)],
    ['Licuadora', 'Sartén'],
    [p('Salsa', 'Licúa los tomates, el ají, el ajo y la cebolla. Cocínala 8 minutos en una sartén con aceite y sal hasta que espese.', { m: 8 }), p('Tortillas', 'Calienta las tortillas en aceite 30 segundos por lado.'), p('Huevos', 'Fríe los huevos al gusto.'), p('Arma', 'Pon los huevos sobre las tortillas y baña con la salsa.')], '');
  rec(MX, 'Molletes', '🥖', 'tostadas', 'desayuno', [10, 8], 2, 'Fácil',
    'Pan abierto con fríjoles refritos y queso gratinado, con pico de gallo.',
    [u(2, 'pan francés o bolillo', 'panes franceses o bolillos'), i(1, 'taza', 'de fríjoles refritos'), i(1, 'taza', 'de queso rallado'), i(0.5, 'taza', 'de pico de gallo')],
    ['Horno o airfryer'], [p('Unta', 'Abre los panes y unta fríjoles refritos.'), p('Gratina', 'Cubre con queso y hornea a 200 °C hasta que se dore, 8 minutos.', { m: 8 }), p('Sirve', 'Sirve con pico de gallo.')], '');
  rec(MX, 'Huevos a la mexicana', '🍳', 'huevos-pericos', 'desayuno', [10, 8], 2, 'Fácil',
    'Huevos revueltos con tomate, cebolla y ají: los tres colores de la bandera.',
    [u(4, 'huevo', 'huevos'), u(2, 'tomate', 'tomates'), u(0.5, 'cebolla', 'cebollas'), u(1, 'ají verde', 'ajíes verdes'), aceite(1), sal(0.5)],
    ['Sartén'], [p('Sofríe', 'Sofríe cebolla, ají y tomate picados 4 minutos.', { m: 4 }), p('Huevos', 'Agrega los huevos batidos y revuelve a fuego bajo hasta cuajar.', { m: 3 })], '');
  rec(MX, 'Agua de jamaica', '🌺', 'fruta-mora', 'bebida', [10, 15], 6, 'Fácil',
    'Refresco rojo intenso de flor de jamaica. Ácido, dulce y refrescante.',
    [i(1, 'taza', 'de flor de jamaica seca'), i(6, 'taza', 'de agua'), i(0.5, 'taza', 'de azúcar'), i(null, '', 'Hielo')],
    ['Olla', 'Jarra', 'Colador'], [p('Hierve', 'Hierve la flor con 3 tazas de agua 10 minutos.', { m: 10 }), p('Cuela y endulza', 'Cuela, agrega el azúcar y el resto del agua fría.'), p('Sirve', 'Sirve con hielo.')], 'Dura 4 días en la nevera.');
  rec(MX, 'Agua de tamarindo', '🥤', 'fruta-mora', 'bebida', [20, 15], 6, 'Fácil',
    'Refresco agridulce hecho de pulpa de tamarindo.',
    [i(1, 'taza', 'de pulpa de tamarindo'), i(6, 'taza', 'de agua'), i(0.5, 'taza', 'de azúcar'), i(null, '', 'Hielo')],
    ['Olla', 'Colador'], [p('Hierve', 'Hierve el tamarindo con 2 tazas de agua 10 minutos y aplástalo.', { m: 10 }), p('Cuela', 'Cuela y agrega el azúcar y el resto del agua.'), p('Sirve', 'Sirve con hielo.')], 'Dura 4 días en la nevera.');
  rec(MX, 'Chocolate caliente mexicano', '☕', 'chocolate-queso', ['bebida', 'desayuno'], [3, 8], 2, 'Fácil',
    'Chocolate con canela batido con molinillo hasta hacer espuma.',
    [i(2, 'taza', 'de leche'), i(60, 'g', 'de chocolate en barra'), u(1, 'astilla de canela', 'astillas de canela'), i(1, 'cda', 'de azúcar')],
    ['Olla', 'Molinillo o batidor'], [p('Calienta', 'Calienta la leche con la canela y el chocolate hasta disolverlo.', { m: 6 }), p('Bate', 'Bate con molinillo hasta que haga espuma.')], '');
  rec(MX, 'Flan napolitano', '🍮', 'natilla', 'postre', [15, 50], 8, 'Media',
    'Flan cremoso con queso crema y leche evaporada, con caramelo. Un clásico de todas las fiestas.',
    [u(5, 'huevo', 'huevos'), i(1, 'taza', 'de leche condensada'), i(1, 'taza', 'de leche evaporada'), i(100, 'g', 'de queso crema'), i(1, 'cdta', 'de vainilla'), i(0.5, 'taza', 'de azúcar', 'Para el caramelo.')],
    ['Molde', 'Licuadora', 'Bandeja honda'],
    [p('Caramelo', 'Derrite el azúcar sin revolver hasta color miel y cubre el fondo del molde.', { m: 6 }), p('Licúa', 'Licúa los huevos, las leches, el queso y la vainilla y vierte sobre el caramelo.'), p('Hornea', 'Hornea a baño maría a 170 °C por 50 minutos.', { m: 50, s: 'Tiembla un poco al centro.' }), p('Enfría', 'Enfría 4 horas y desmolda.', { m: 240 })], 'Dura 5 días en la nevera.');
  rec(MX, 'Pastel de tres leches', '🍰', 'torta', 'postre', [30, 35], 12, 'Media',
    'Bizcocho esponjoso empapado en tres leches y cubierto de crema.',
    [u(5, 'huevo', 'huevos'), i(1, 'taza', 'de azúcar'), i(1, 'taza', 'de harina de trigo'), i(1, 'cdta', 'de polvo de hornear'), i(1, 'taza', 'de leche condensada'), i(1, 'taza', 'de leche evaporada'), i(0.5, 'taza', 'de crema de leche'), i(1, 'taza', 'de crema de leche', 'Para cubrir.')],
    ['Molde rectangular', 'Batidora'],
    [p('Bizcocho', 'Bate los huevos con el azúcar 8 minutos. Agrega la harina con el polvo y mezcla suave. Hornea a 180 °C por 30 minutos.', { m: 30, s: 'Un palillo sale limpio.' }), p('Pincha', 'Cuando enfríe, pincha todo el bizcocho con un tenedor.'), p('Empapa', 'Mezcla las tres leches y viértelas poco a poco sobre el bizcocho. Refrigera 4 horas.', { m: 240 }), p('Cubre', 'Bate la crema con 2 cucharadas de azúcar y cubre.')], 'Dura 4 días en la nevera.');
  rec(MX, 'Cocadas mexicanas', '🥥', 'brigadeiro', 'postre', [10, 15], 12, 'Fácil',
    'Dulces horneados de coco rallado y leche condensada, dorados por fuera.',
    [i(2, 'taza', 'de coco rallado'), i(1, 'taza', 'de leche condensada'), u(1, 'clara de huevo', 'claras de huevo')],
    ['Bandeja', 'Papel para hornear'], [p('Mezcla', 'Mezcla el coco con la leche condensada y la clara.'), p('Forma', 'Forma montoncitos con una cuchara sobre papel para hornear.'), p('Hornea', 'Hornea a 180 °C por 15 minutos hasta que estén dorados.', { m: 15 })], 'Duran 5 días.');
  rec(MX, 'Tostadas de aguacate y fríjol', '🥑', 'tostadas', 'cena', [10, 5], 2, 'Fácil',
    'Tortilla crujiente con fríjoles, aguacate, tomate y queso. Cena rápida y fresca.',
    [u(4, 'tostada o tortilla tostada', 'tostadas o tortillas tostadas'), i(1, 'taza', 'de fríjoles refritos'), u(1, 'aguacate', 'aguacates'), u(1, 'tomate', 'tomates'), i(0.25, 'taza', 'de queso rallado'), u(1, 'limón', 'limones')],
    ['Plato'], [p('Unta', 'Unta fríjoles sobre cada tostada.'), p('Cubre', 'Agrega aguacate en láminas, tomate picado y queso. Termina con limón y sal.')], '');

  // ================================================================ PERÚ
  var PE = 'Cocina peruana';
  rec(PE, 'Pan con chicharrón', '🥖', 'chicharron', 'desayuno', [10, 5], 2, 'Fácil',
    'Pan francés con tajadas de cerdo dorado, camote frito y salsa criolla de cebolla. El desayuno del fin de semana en Lima.',
    [u(2, 'pan francés', 'panes franceses'), i(200, 'g', 'de cerdo cocido y dorado en tajadas'), u(1, 'camote o batata', 'camotes o batatas'), u(1, 'cebolla morada', 'cebollas moradas'), u(1, 'limón', 'limones'), i(2, 'cda', 'de cilantro')],
    ['Sartén'], [p('Salsa criolla', 'Corta la cebolla en pluma fina, mézclala con limón, sal y cilantro 10 minutos.', { m: 10 }), p('Camote', 'Corta el camote en rodajas y fríelo hasta dorar.'), p('Arma', 'Rellena el pan con cerdo, camote y salsa criolla.')], '');
  rec(PE, 'Quinua caliente con leche', '🥣', 'avena', 'desayuno', [5, 25], 3, 'Fácil',
    'Desayuno de quinua cocida en leche con canela y azúcar, como un atol o avena espesa.',
    [i(0.5, 'taza', 'de quinua'), i(1, 'taza', 'de agua'), i(2, 'taza', 'de leche'), u(1, 'astilla de canela', 'astillas de canela'), i(2, 'cda', 'de azúcar')],
    ['Olla'], [p('Lava', 'Lava la quinua bien para quitar lo amargo.'), p('Cocina', 'Cocina la quinua en agua con canela 12 minutos. Agrega la leche y cocina 10 minutos más.', { m: 22, s: 'Cremoso y espeso.' }), p('Endulza', 'Agrega azúcar y sirve caliente.')], '');
  rec(PE, 'Pan con palta y huevo', '🥑', 'tostadas', 'desayuno', [5, 5], 2, 'Fácil',
    'Pan con aguacate aplastado y huevo frito: desayuno rápido de Lima.',
    [u(2, 'pan francés o rebanada', 'panes franceses o rebanadas'), u(1, 'aguacate', 'aguacates'), u(2, 'huevo', 'huevos'), sal(0.25), u(1, 'limón', 'limones')],
    ['Sartén'], [p('Aplasta', 'Aplasta el aguacate con sal y limón.'), p('Fríe', 'Fríe los huevos.'), p('Arma', 'Unta el pan y pon el huevo encima.')], '');
  rec(PE, 'Chicha morada', '🥤', 'fruta-mora', 'bebida', [10, 45], 8, 'Fácil',
    'Refresco de maíz morado hervido con piña, manzana, canela y clavos. Dulce, aromático y de color morado.',
    [i(500, 'g', 'de maíz morado'), i(10, 'taza', 'de agua'), u(1, 'piña (la cáscara y un trozo)', 'piñas (la cáscara y un trozo)'), u(2, 'manzana', 'manzanas'), u(2, 'astilla de canela', 'astillas de canela'), u(6, 'clavo de olor', 'clavos de olor'), i(1, 'taza', 'de azúcar'), u(3, 'limón', 'limones')],
    ['Olla grande', 'Colador', 'Jarra'], [p('Hierve', 'Hierve el maíz con el agua, la cáscara de piña, las manzanas, la canela y los clavos 45 minutos a fuego medio.', { m: 45, s: 'El agua queda de color morado profundo.' }), p('Cuela', 'Cuela y deja enfriar.'), p('Endulza', 'Agrega azúcar y jugo de limón al gusto. Sirve frío.')], 'Dura 5 días en la nevera.');
  rec(PE, 'Emoliente', '🍵', 'limonada', ['bebida', 'desayuno'], [10, 20], 4, 'Fácil',
    'Bebida caliente de cebada, linaza y hierbas, vendida en las calles de Lima por las mañanas. Con limón y miel.',
    [i(0.25, 'taza', 'de cebada perlada'), i(1, 'cda', 'de linaza'), i(4, 'taza', 'de agua'), i(2, 'cda', 'de hierbas secas (manzanilla, cola de caballo)'), u(1, 'limón', 'limones'), i(3, 'cda', 'de miel')],
    ['Olla', 'Colador'], [p('Hierve', 'Hierve la cebada y la linaza en el agua 15 minutos.', { m: 15 }), p('Infusiona', 'Agrega las hierbas y deja 5 minutos. Cuela.', { m: 5 }), p('Endulza', 'Agrega limón y miel y sirve caliente.')], '');
  rec(PE, 'Mazamorra morada', '🍇', 'fruta-mora', 'postre', [15, 60], 8, 'Media',
    'Postre de maíz morado espesado con camote y fécula, con frutas secas y canela.',
    [i(500, 'g', 'de maíz morado'), i(8, 'taza', 'de agua'), u(2, 'astilla de canela', 'astillas de canela'), u(4, 'clavo de olor', 'clavos de olor'), i(1, 'taza', 'de azúcar'), i(0.5, 'taza', 'de fécula de camote o maicena'), i(0.5, 'taza', 'de orejones o pasas'), u(1, 'limón', 'limones')],
    ['Olla grande', 'Colador'], [p('Cocina', 'Hierve el maíz con el agua, canela y clavos 45 minutos y cuela.', { m: 45 }), p('Espesa', 'Disuelve la fécula en agua fría y agrégala al líquido con azúcar y frutas. Cocina 10 minutos revolviendo.', { m: 10, s: 'Espeso como una crema.' }), p('Sirve', 'Agrega limón y sirve tibio o frío.')], 'Dura 4 días en la nevera.');
  rec(PE, 'Arroz zambito', '🍚', 'arroz-leche', 'postre', [10, 40], 6, 'Fácil',
    'Arroz con leche con chancaca (panela), canela y coco.',
    [i(1, 'taza', 'de arroz'), i(3, 'taza', 'de agua'), i(2, 'taza', 'de leche'), i(0.5, 'taza', 'de panela rallada'), u(1, 'astilla de canela', 'astillas de canela'), i(0.25, 'taza', 'de coco rallado')],
    ['Olla'], [p('Arroz', 'Cocina el arroz en agua con canela 15 minutos.', { m: 15 }), p('Leche', 'Agrega la leche y la panela y cocina 25 minutos a fuego bajo revolviendo.', { m: 25 }), p('Sirve', 'Sirve con coco rallado.')], 'Dura 4 días en la nevera.');
  rec(PE, 'Suspiro a la limeña', '🍮', 'natilla', 'postre', [15, 30], 6, 'Media',
    'Dulce de leche suave cubierto con merengue de oporto y canela. El postre limeño más poético.',
    [i(1, 'taza', 'de leche condensada'), i(1, 'taza', 'de leche evaporada'), u(4, 'yema de huevo', 'yemas de huevo'), u(2, 'clara de huevo', 'claras de huevo'), i(0.5, 'taza', 'de azúcar'), i(1, 'cdta', 'de canela')],
    ['Olla', 'Batidora', 'Copas'], [p('Manjar', 'Cocina las leches con las yemas a fuego bajo 25 minutos revolviendo hasta que espese y se vea el fondo.', { m: 25 }), p('Merengue', 'Bate las claras con el azúcar hasta picos firmes.', { s: 'Picos firmes y brillantes.' }), p('Arma', 'Reparte el manjar en copas y cubre con merengue y canela.')], 'Dura 3 días en la nevera.');

  // ================================================================ VENEZUELA
  var VE = 'Cocina venezolana';
  rec(VE, 'Quesillo venezolano', '🍮', 'natilla', 'postre', [15, 50], 8, 'Media',
    'Flan venezolano de leche condensada, huevos y caramelo. Más firme y dulce que otros flanes.',
    [u(5, 'huevo', 'huevos'), i(1, 'taza', 'de leche condensada'), i(1, 'taza', 'de leche'), i(1, 'cdta', 'de vainilla'), i(0.5, 'taza', 'de azúcar', 'Para el caramelo.')],
    ['Molde', 'Licuadora', 'Bandeja honda'], [p('Caramelo', 'Derrite el azúcar hasta color miel y cubre el molde.', { m: 6 }), p('Licúa', 'Licúa huevos, leche condensada, leche y vainilla.'), p('Hornea', 'Hornea a baño maría a 170 °C por 50 minutos.', { m: 50 }), p('Enfría', 'Enfría 4 horas y desmolda.', { m: 240 })], 'Dura 5 días en la nevera.');
  rec(VE, 'Majarete venezolano', '🌽', 'natilla', 'postre', [10, 30], 8, 'Fácil',
    'Postre cremoso de maíz tierno con leche, canela y panela, servido frío.',
    [u(4, 'mazorca tierna', 'mazorcas tiernas'), i(3, 'taza', 'de leche'), i(0.5, 'taza', 'de azúcar'), u(1, 'astilla de canela', 'astillas de canela'), i(2, 'cda', 'de maicena')],
    ['Licuadora', 'Olla'], [p('Licúa', 'Licúa el maíz con una taza de leche y cuela.'), p('Cocina', 'Cocina con el resto de la leche, azúcar y canela 25 minutos revolviendo sin parar.', { m: 25, s: 'Espeso como una crema.' }), p('Enfría', 'Sirve frío con canela molida.')], 'Dura 4 días en la nevera.');
  rec(VE, 'Plátanos en gloria', '🍌', 'fruta-banano', 'postre', [10, 30], 4, 'Fácil',
    'Plátano maduro cocido con canela y panela, con queso rallado por encima. Dulce, salado y cremoso.',
    [u(3, 'plátano muy maduro', 'plátanos muy maduros'), i(0.5, 'taza', 'de panela rallada'), u(1, 'astilla de canela', 'astillas de canela'), i(1, 'taza', 'de agua'), i(0.5, 'taza', 'de queso rallado')],
    ['Olla'], [p('Cocina', 'Corta el plátano en trozos y cocínalo con la panela, canela y agua 20 minutos a fuego bajo.', { m: 20, s: 'Tierno, con un almíbar espeso.' }), p('Sirve', 'Sirve con queso rallado por encima.')], 'Dura 3 días en la nevera.');
  rec(VE, 'Batido de lechosa', '🥤', 'fruta-papaya', 'bebida', [5, 0], 2, 'Fácil',
    'Batido de papaya con leche, el desayuno de todos los días en Venezuela.',
    [i(2, 'taza', 'de papaya madura en trozos'), i(1, 'taza', 'de leche fría'), i(2, 'cda', 'de azúcar'), i(4, '', 'cubos de hielo')],
    ['Licuadora'], [p('Licúa', 'Licúa todo 40 segundos hasta que quede cremoso.'), p('Sirve', 'Sirve de inmediato.')], '');
  rec(VE, 'Chicha venezolana', '🥛', 'arroz-leche', ['bebida', 'postre'], [10, 40], 6, 'Media',
    'Bebida espesa de arroz y leche con canela y leche condensada, servida fría. Muy venezolana.',
    [i(1, 'taza', 'de arroz'), i(4, 'taza', 'de agua'), i(2, 'taza', 'de leche'), i(0.5, 'taza', 'de leche condensada'), u(1, 'astilla de canela', 'astillas de canela'), i(1, 'cdta', 'de vainilla')],
    ['Olla', 'Licuadora'], [p('Cocina', 'Cocina el arroz en el agua con canela 30 minutos hasta que esté muy blando.', { m: 30 }), p('Licúa', 'Licúa con la leche, la leche condensada y la vainilla hasta que quede liso.'), p('Sirve', 'Enfría y sirve con canela molida.')], 'Dura 4 días en la nevera.');
  rec(VE, 'Ensalada de gallina venezolana', '🥗', 'ensalada-papa', 'cena', [20, 30], 5, 'Fácil',
    'Ensalada fría de pollo desmechado, papa, zanahoria y arvejas con mayonesa, típica de las fiestas.',
    [i(2, 'taza', 'de pollo cocido y desmechado'), u(2, 'papa', 'papas'), u(2, 'zanahoria', 'zanahorias'), i(0.5, 'taza', 'de arvejas'), i(0.5, 'taza', 'de mayonesa'), u(1, 'limón', 'limones'), sal(0.5)],
    ['Olla', 'Tazón'], [p('Cocina', 'Cocina papa y zanahoria en cubos 12 minutos hasta que estén blandas. Escurre y enfría.', { m: 12 }), p('Mezcla', 'Mezcla con el pollo, las arvejas, la mayonesa, el limón y la sal.'), p('Enfría', 'Refrigera 1 hora y sirve.')], 'Dura 2 días en la nevera.');
  rec(VE, 'Pan de jamón sencillo (rollo)', '🥖', 'sandwich', ['cena', 'desayuno'], [90, 30], 8, 'Difícil',
    'Pan enrollado relleno de jamón, tocineta y aceitunas, tradicional en la Navidad venezolana.',
    [i(3, 'taza', 'de harina de trigo'), i(1, 'cdta', 'de levadura'), i(0.5, 'taza', 'de leche tibia'), i(2, 'cda', 'de azúcar'), i(2, 'cda', 'de mantequilla'), u(1, 'huevo', 'huevos'), i(150, 'g', 'de jamón'), i(100, 'g', 'de tocineta cocida'), i(0.25, 'taza', 'de aceitunas')],
    ['Tazón', 'Rodillo', 'Bandeja'],
    [p('Masa', 'Mezcla harina, levadura, azúcar, huevo, mantequilla y leche. Amasa 8 minutos y deja crecer 1 hora tapada.', { m: 60, s: 'Dobló su tamaño.' }), p('Rellena', 'Estira en rectángulo, cubre con jamón, tocineta y aceitunas y enrolla apretado.'), p('Hornea', 'Barniza con huevo y hornea a 180 °C por 30 minutos.', { m: 30, s: 'Dorado y suena hueco al golpearlo.' })], 'Dura 3 días.');
})();
