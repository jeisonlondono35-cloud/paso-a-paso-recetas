/* ============================================================
   PLATOS TÍPICOS DE CADA PAÍS (almuerzos y comidas fuertes)
   ============================================================ */
(function () {
  var i = GEN.i, p = GEN.p, sal = GEN.sal, aceite = GEN.aceite, GR = GEN.R, ajo = GEN.ajo;
  function u(c, s, pl) { return i(c, '', s + '|' + pl); }
  function rec(cat, n, e, foto, t, por, dif, desc, ing, uten, pasos, guardar, antes) { GR(cat, n, e, foto, t, por, dif, desc, antes || '', ing, uten, pasos, guardar || ''); }

  // ================================================================ COLOMBIA
  var CO = 'Cocina colombiana';
  rec(CO, 'Posta cartagenera', '🥩', 'estofado-res', [20, 150], 6, 'Media',
    'Carne de res cocida lentamente en una salsa oscura, dulce y salada, con panela, cerveza y especias. Plato de Cartagena y la costa.',
    [u(1.5, 'kilo de posta o muchacho de res', 'kilos de posta o muchacho de res'), u(2, 'cebolla cabezona', 'cebollas cabezonas'), ajo(4), i(0.5, 'taza', 'de salsa de soya'), i(3, 'cda', 'de panela rallada'), i(1, 'taza', 'de agua'), u(2, 'tomate', 'tomates'), aceite(3), i(1, 'cdta', 'de comino'), sal(1.5)],
    ['Olla pesada con tapa', 'Tabla y cuchillo'],
    [p('Sella la carne', 'Seca la carne y dórala en el aceite caliente por todos los lados, 10 minutos. Retírala.', { m: 10, s: 'Costra dorada oscura por todos los lados.' }),
     p('Haz la base', 'En la misma olla sofríe la cebolla, el ajo y el tomate picados con el comino 8 minutos.', { m: 8 }),
     p('Cocina lento', 'Regresa la carne, agrega soya, panela, agua y sal. Tapa y cocina a fuego bajo 2 horas, volteando la carne a la mitad.', { m: 120, s: 'La carne se corta con cuchara y la salsa está espesa y brillante.' }),
     p('Corta y sirve', 'Deja reposar 10 minutos, corta en tajadas y sirve con la salsa, arroz con coco y patacones.', { m: 10 })], 'Dura 4 días en la nevera.');
  rec(CO, 'Mazorcada', '🌽', 'papas-chorreadas', [20, 40], 4, 'Fácil',
    'Plato abundante de mazorca desgranada con pollo, chorizo, papas, queso derretido y salsa. Muy bogotano.',
    [u(3, 'mazorca', 'mazorcas'), u(1, 'pechuga de pollo', 'pechugas de pollo'), u(2, 'chorizo', 'chorizos'), u(4, 'papa criolla o pequeña', 'papas criollas o pequeñas'), i(1.5, 'taza', 'de queso mozzarella o campesino'), i(0.5, 'taza', 'de crema de leche'), aceite(1), sal(1)],
    ['Olla', 'Sartén grande', 'Cuchillo'],
    [p('Cocina', 'Cocina las mazorcas, el pollo y las papas en agua con sal 30 minutos. Escurre. Desgrana las mazorcas y desmecha el pollo.', { m: 30 }), p('Dora', 'Corta el chorizo en rodajas y dóralo en la sartén 5 minutos.', { m: 5 }), p('Une', 'Agrega a la sartén el maíz, el pollo y las papas con la crema. Mezcla 3 minutos.'), p('Gratina', 'Cubre con el queso, tapa 3 minutos hasta que se derrita y sirve caliente.', { m: 3 })], 'Dura 2 días en la nevera.');
  rec(CO, 'Fritanga con papa criolla', '🍖', 'chicharron', [20, 50], 4, 'Media',
    'Plato de carnes fritas variadas: costilla, chorizo, morcilla y chicharrón con papa criolla, yuca y arepa.',
    [u(0.5, 'libra de costilla de cerdo', 'libras de costilla de cerdo'), u(2, 'chorizo', 'chorizos'), u(2, 'morcilla', 'morcillas'), u(0.5, 'libra de tocino', 'libras de tocino'), u(1, 'libra de papa criolla', 'libras de papa criolla'), u(0.5, 'libra de yuca', 'libras de yuca'), sal(1), i(null, '', 'Limón y ají', 'Para servir.')],
    ['Sartén grande', 'Olla'],
    [p('Cocina la costilla', 'Cocina la costilla en agua con sal 30 minutos hasta que ablande. Escurre.', { m: 30 }), p('Fríe', 'Fríe en su propia grasa a fuego medio el tocino, la costilla, los chorizos y las morcillas, 15 minutos, volteando.', { m: 15, s: 'Todo dorado y crocante por fuera.' }), p('Acompaña', 'Cocina las papas criollas y la yuca. Sirve todo junto con limón y ají.')], 'Se come al momento.');
  rec(CO, 'Envueltos de mazorca', '🌽', 'arepa-choclo', [20, 45], 8, 'Media',
    'Masa dulce de maíz tierno envuelta en las hojas de la mazorca y cocida al vapor. Típicos de Cundinamarca y Boyacá.',
    [u(8, 'mazorca tierna con hojas', 'mazorcas tiernas con hojas'), i(0.5, 'taza', 'de queso rallado'), i(2, 'cda', 'de mantequilla'), i(3, 'cda', 'de azúcar'), sal(0.25)],
    ['Licuadora', 'Olla para vapor'],
    [p('Desgrana y muele', 'Desgrana las mazorcas guardando las hojas. Muele los granos con mantequilla, azúcar y sal hasta una pasta espesa.'), p('Envuelve', 'En una hoja pon 3 cucharadas de masa y un poco de queso. Dobla la hoja y amarra con un trozo de hoja.'), p('Vapor', 'Cocina al vapor 45 minutos.', { m: 45, s: 'La masa está firme y se despega de la hoja.' })], 'Dura 3 días en la nevera.');
  rec(CO, 'Pernil de cerdo al horno', '🍖', 'lomo-cerdo', [30, 210], 8, 'Media',
    'Pierna de cerdo marinada en cerveza, ajo y especias, horneada lentamente hasta dorarse. Clásico de las fiestas.',
    [u(2, 'kilo de pernil de cerdo', 'kilos de pernil de cerdo'), i(1, 'taza', 'de cerveza'), ajo(6), u(1, 'cebolla', 'cebollas'), i(2, 'cda', 'de mostaza'), i(2, 'cda', 'de panela o azúcar morena'), i(1, 'cda', 'de comino'), sal(2)],
    ['Bandeja honda', 'Papel aluminio', 'Cuchillo afilado'],
    [p('Adoba', 'Pincha el pernil con un cuchillo por todos lados. Licúa ajo, cebolla, mostaza, comino, sal y la mitad de la cerveza y frota bien. Marina mínimo 4 horas (mejor toda la noche).', { m: 240 }),
     p('Hornea tapado', 'Pon el pernil en la bandeja con el resto de la cerveza, tapa con aluminio y hornea a 160 °C por 3 horas.', { m: 180, s: 'La carne se separa con un tenedor.' }),
     p('Dora', 'Destapa, unta con panela y sube a 220 °C por 20 minutos para dorar la piel.', { m: 20 }), p('Reposa y corta', 'Deja reposar 15 minutos antes de cortar.', { m: 15 })], 'Dura 5 días en la nevera.');
  rec(CO, 'Lengua en salsa criolla', '🥩', 'sobrebarriga', [20, 150], 6, 'Media',
    'Lengua de res tierna cocida y cortada en rodajas, bañada en salsa criolla de tomate y cebolla.',
    [u(1, 'lengua de res', 'lenguas de res'), u(1, 'cebolla', 'cebollas'), ajo(3), sal(2), u(4, 'tomate', 'tomates'), u(4, 'cebolla larga', 'cebollas largas'), aceite(2), i(1, 'cdta', 'de comino')],
    ['Olla a presión o grande', 'Cuchillo'],
    [p('Cocina', 'Cocina la lengua con cebolla, ajo y sal 2 horas (50 minutos en olla a presión).', { m: 120, s: 'Un cuchillo entra sin resistencia.' }), p('Pela y corta', 'Sácala y pélala mientras está tibia (la piel se quita fácil). Corta en rodajas.'), p('Salsa', 'Sofríe cebolla larga y tomate picados con comino 10 minutos y agrega 1/2 taza del caldo.', { m: 10 }), p('Sirve', 'Baña las rodajas con la salsa y sirve con papa y arroz.')], 'Dura 4 días en la nevera.');
  rec(CO, 'Mondongo', '🍲', 'cuchuco', [30, 180], 8, 'Difícil',
    'Sopa espesa de callo de res con papa, yuca, arveja y verduras. Pide tiempo, pero es plato de domingo en todo el país.',
    [u(1, 'kilo de callo (mondongo) de res', 'kilos de callo (mondongo) de res'), u(0.5, 'libra de costilla de cerdo', 'libras de costilla de cerdo'), u(3, 'papa', 'papas'), u(1, 'yuca', 'yucas'), u(2, 'zanahoria', 'zanahorias'), i(0.5, 'taza', 'de arvejas'), u(3, 'cebolla larga', 'cebollas largas'), ajo(4), i(2, 'cda', 'de cilantro'), sal(2), i(3, 'litro', 'de agua'), u(1, 'limón', 'limones')],
    ['Olla a presión', 'Olla grande', 'Tabla'],
    [p('Limpia', 'Lava el callo con limón y sal, enjuágalo bien y córtalo en cuadros pequeños.', { e: 'Si no lo lavas bien, queda con olor fuerte.' }), p('Cocina', 'Cocina el callo con la costilla, cebolla, ajo y agua en olla a presión 90 minutos.', { m: 90, s: 'El callo está muy blando.' }), p('Agrega verduras', 'Pasa a una olla grande. Agrega yuca, papa y zanahoria en trozos y cocina 25 minutos. Añade las arvejas 10 minutos antes.', { m: 25 }), p('Sirve', 'Agrega cilantro y sirve con arroz y aguacate.')], 'Dura 3 días en la nevera.');
  rec(CO, 'Parrillada con papa criolla y chorizo', '🔥', 'bistec', [20, 30], 4, 'Fácil',
    'Carne de res, chorizo y pollo a la parrilla o sartén, con papa criolla, arepa y ají. Plato de fin de semana.',
    [u(1, 'libra de lomo de res', 'libras de lomo de res'), u(2, 'chorizo', 'chorizos'), u(2, 'muslo de pollo', 'muslos de pollo'), u(1, 'libra de papa criolla', 'libras de papa criolla'), u(4, 'arepa', 'arepas'), aceite(2), sal(2), i(1, 'cdta', 'de comino'), ajo(3)],
    ['Parrilla o sartén grande', 'Olla'],
    [p('Adoba', 'Mezcla ajo machacado, sal, comino y aceite y frota la carne y el pollo. Deja 30 minutos.', { m: 30 }), p('Papas', 'Cocina las papas criollas con piel 12 minutos y escurre.', { m: 12 }), p('Asa', 'Asa el pollo 25 minutos, el chorizo 10 y el lomo 4 minutos por lado, a fuego fuerte.', { m: 25, s: 'Jugos claros en el pollo; el lomo dorado.' }), p('Sirve', 'Sirve todo junto con las papas, arepas y ají.')], 'Se come al momento.');

  // ================================================================ ARGENTINA
  var AR = 'Cocina argentina';
  rec(AR, 'Locro argentino', '🍲', 'estofado-res', [30, 180], 8, 'Media',
    'Guiso espeso de maíz blanco, zapallo (ahuyama), carne y chorizo, el plato patrio del 25 de Mayo.',
    [i(2, 'taza', 'de maíz blanco (mote) remojado una noche'), u(1, 'libra de carne de res en trozos', 'libras de carne de res en trozos'), u(0.5, 'libra de costilla de cerdo', 'libras de costilla de cerdo'), u(2, 'chorizo', 'chorizos'), i(2, 'taza', 'de ahuyama en cubos'), u(2, 'papa', 'papas'), u(1, 'cebolla', 'cebollas'), i(1, 'cdta', 'de paprika'), sal(2), i(2, 'litro', 'de agua')],
    ['Olla grande', 'Cuchara de palo'],
    [p('Cocina el maíz', 'Cocina el maíz remojado con la carne, la costilla y la cebolla en el agua 90 minutos a fuego bajo.', { m: 90 }), p('Agrega verduras', 'Agrega la ahuyama, las papas, la paprika y la sal. Cocina 45 minutos más, revolviendo.', { m: 45, s: 'La ahuyama se deshace y espesa el guiso.' }), p('Chorizo', 'Agrega el chorizo en rodajas y cocina 15 minutos.', { m: 15 }), p('Sirve', 'Sirve caliente con cebolla larga picada y ají.')], 'Dura 4 días en la nevera; mejora al otro día.');
  rec(AR, 'Pastel de papa', '🥧', 'pure', [30, 40], 6, 'Fácil',
    'Carne molida con cebolla bajo una capa de puré de papa, gratinado. El pastel de papa de todas las casas argentinas.',
    [u(1, 'libra de carne molida', 'libras de carne molida'), u(1, 'cebolla', 'cebollas'), u(1, 'libra de papa', 'libras de papa'), i(2, 'cda', 'de mantequilla'), i(0.5, 'taza', 'de leche'), u(2, 'huevo cocido', 'huevos cocidos'), i(0.25, 'taza', 'de aceitunas'), i(1, 'cdta', 'de comino'), i(0.5, 'cdta', 'de paprika'), sal(1.5), aceite(1), i(0.5, 'taza', 'de queso rallado')],
    ['Sartén', 'Olla', 'Refractaria'],
    [p('Puré', 'Cocina las papas peladas 20 minutos, escúrrelas y haz puré con mantequilla, leche y sal.', { m: 20 }), p('Relleno', 'Sofríe la cebolla en aceite 5 minutos, agrega la carne, comino, paprika y sal y cocina 10 minutos. Mezcla con las aceitunas y el huevo picado.', { m: 15 }), p('Arma', 'Pon la carne en la refractaria y cubre con el puré. Espolvorea queso.'), p('Gratina', 'Hornea a 200 °C por 15 minutos hasta dorar.', { m: 15, s: 'Superficie dorada.' })], 'Dura 3 días en la nevera.');
  rec(AR, 'Bife de chorizo con chimichurri', '🥩', 'bistec', [10, 10], 2, 'Fácil',
    'Corte grueso de carne a la parrilla o sartén, dorado por fuera y rosado por dentro, con salsa chimichurri.',
    [u(2, 'bife de chorizo (lomo ancho) de 3 cm', 'bifes de chorizo (lomo ancho) de 3 cm'), sal(1), i(0.5, 'taza', 'de chimichurri', 'Ver la receta.'), aceite(1)],
    ['Sartén pesada o parrilla', 'Pinzas'],
    [p('Atempera', 'Saca la carne de la nevera 30 minutos antes. Sécala y sálala.', { m: 30 }), p('Sella', 'En sartén muy caliente con aceite, cocina 4 minutos por lado sin moverla.', { m: 8, s: 'Costra dorada oscura.' }), p('Reposa', 'Deja reposar 5 minutos antes de cortar. Sirve con chimichurri.', { m: 5 })], 'Se come al momento.');
  rec(AR, 'Fugazzeta rellena', '🍕', 'pizza', [40, 25], 4, 'Media',
    'Pizza argentina doble con queso por dentro y cebolla caramelizada por fuera. Gruesa y muy sabrosa.',
    [i(3, 'taza', 'de harina de trigo'), i(1, 'cdta', 'de levadura seca'), i(1.25, 'taza', 'de agua tibia'), sal(1), u(3, 'cebolla grande', 'cebollas grandes'), i(300, 'g', 'de queso mozzarella'), aceite(3), i(1, 'cdta', 'de orégano')],
    ['Tazón', 'Bandeja', 'Sartén'],
    [p('Masa', 'Mezcla harina, levadura, sal y agua tibia y amasa 8 minutos. Deja crecer 1 hora.', { m: 60 }), p('Cebolla', 'Corta la cebolla en pluma y cocínala con aceite y sal a fuego bajo 15 minutos hasta que esté dulce.', { m: 15 }), p('Arma', 'Estira la mitad de la masa en la bandeja, cubre con queso, tapa con la otra mitad y sella los bordes. Cubre con la cebolla y orégano.'), p('Hornea', 'Hornea a 220 °C por 25 minutos.', { m: 25, s: 'Dorada y el queso se ve burbujear por los bordes.' })], 'Dura 2 días.');
  rec(AR, 'Revuelto gramajo', '🍳', 'huevos-pericos', [10, 15], 2, 'Fácil',
    'Huevos revueltos con papas fritas en palitos, jamón y cebolla. Plato de cena o almuerzo rápido.',
    [u(4, 'huevo', 'huevos'), u(2, 'papa', 'papas'), i(100, 'g', 'de jamón en tiras'), u(0.5, 'cebolla', 'cebollas'), i(null, '', 'Aceite para freír'), sal(0.5)],
    ['Sartén'], [p('Fríe las papas', 'Corta las papas en palitos finos y fríelas hasta dorar. Escurre.', { m: 10 }), p('Saltea', 'Saltea la cebolla y el jamón en un poco de aceite 4 minutos.', { m: 4 }), p('Une', 'Agrega los huevos batidos, revuelve a fuego bajo y al final agrega las papas.', { m: 3 })], 'Se come al momento.');

  // ================================================================ BOLIVIA
  var BO = 'Cocina boliviana';
  rec(BO, 'Chairo paceño', '🍲', 'sopa-verduras', [30, 90], 6, 'Media',
    'Sopa espesa de La Paz con chuño, carne, papa, arveja, habas y trigo. Se sirve bien caliente.',
    [u(0.5, 'kilo de carne de res', 'kilos de carne de res'), i(0.5, 'taza', 'de trigo mote o cebada'), u(3, 'papa', 'papas'), u(1, 'zanahoria', 'zanahorias'), i(0.5, 'taza', 'de arvejas'), i(0.5, 'taza', 'de habas'), u(1, 'cebolla', 'cebollas'), ajo(2), i(2, 'litro', 'de agua'), sal(2), i(1, 'cda', 'de perejil')],
    ['Olla grande'], [p('Caldo', 'Cocina la carne con la cebolla, ajo, sal y el trigo en el agua 60 minutos.', { m: 60 }), p('Verduras', 'Agrega papa, zanahoria, arvejas y habas y cocina 25 minutos.', { m: 25, s: 'Papas tiernas y caldo espeso.' }), p('Sirve', 'Agrega perejil y sirve caliente.')], 'Dura 3 días.');
  rec(BO, 'Falso conejo', '🥩', 'milanesa', [20, 40], 4, 'Media',
    'Bistec de res aplanado y cocinado en salsa de tomate y cebolla, que se sirve con arroz, papa y huevo frito.',
    [u(4, 'bistec de res delgado', 'bistecs de res delgados'), u(2, 'cebolla', 'cebollas'), u(3, 'tomate', 'tomates'), ajo(2), aceite(3), sal(1.5), i(1, 'cdta', 'de comino'), i(1, 'taza', 'de agua'), i(2, 'taza', 'de arroz blanco', 'Para acompañar.')],
    ['Sartén honda'], [p('Aplana', 'Aplana los bistecs con un mazo y sálalos.'), p('Sella', 'Dóralos en aceite 2 minutos por lado y reserva.', { m: 4 }), p('Salsa', 'Sofríe cebolla, tomate y ajo con comino 8 minutos, agrega el agua y los bistecs y cocina tapado 25 minutos.', { m: 33 }), p('Sirve', 'Sirve con arroz, papa cocida y huevo frito.')], 'Dura 3 días.');
  rec(BO, 'Fricasé paceño', '🍲', 'cerdo-guisado', [20, 90], 6, 'Media',
    'Sopa picante amarilla de cerdo con ají amarillo, maíz mote y chuño. Famosa por curar el guayabo.',
    [u(1, 'kilo de cerdo con hueso', 'kilos de cerdo con hueso'), i(0.5, 'taza', 'de ají amarillo en pasta'), i(1, 'taza', 'de maíz mote cocido'), u(4, 'papa', 'papas'), u(1, 'cebolla', 'cebollas'), ajo(3), i(1, 'cdta', 'de comino'), sal(2), i(2, 'litro', 'de agua'), i(2, 'cda', 'de perejil')],
    ['Olla grande'], [p('Cocina el cerdo', 'Cocina el cerdo con cebolla, ajo, comino y sal 60 minutos.', { m: 60 }), p('Agrega ají', 'Agrega el ají amarillo y las papas y cocina 25 minutos.', { m: 25 }), p('Sirve', 'Sirve con mote y perejil por encima.')], 'Dura 3 días.');
  rec(BO, 'Sajta de pollo', '🍗', 'pollo-guisado', [20, 50], 4, 'Media',
    'Pollo en salsa espesa de ají amarillo con papa y arroz, típico de Bolivia.',
    [u(1, 'pollo en presas', 'pollos en presas'), i(0.5, 'taza', 'de ají amarillo en pasta'), u(1, 'cebolla', 'cebollas'), ajo(3), u(4, 'papa', 'papas'), i(1, 'cdta', 'de comino'), sal(2), aceite(2), i(2, 'taza', 'de agua')],
    ['Olla'], [p('Sofríe', 'Sofríe la cebolla y el ajo, agrega el ají y el comino y cocina 5 minutos.', { m: 5 }), p('Cocina', 'Agrega el pollo, el agua y la sal. Cocina tapado 30 minutos.', { m: 30 }), p('Papas', 'Agrega las papas peladas y cocina 20 minutos más.', { m: 20, s: 'Salsa espesa y papas tiernas.' }), p('Sirve', 'Sirve con arroz.')], 'Dura 3 días.');

  // ================================================================ BRASIL
  var BR = 'Cocina brasileña';
  rec(BR, 'Feijoada brasileña', '🍲', 'feijao', [30, 150], 8, 'Media',
    'Guiso de fríjoles negros con carnes de cerdo y res, chorizo y tocino. Se sirve con arroz, naranja y farofa.',
    [i(2, 'taza', 'de fríjoles negros remojados una noche'), u(0.5, 'libra de costilla de cerdo', 'libras de costilla de cerdo'), u(0.5, 'libra de carne de res en trozos', 'libras de carne de res en trozos'), u(2, 'chorizo', 'chorizos'), i(100, 'g', 'de tocino'), u(1, 'cebolla', 'cebollas'), ajo(4), u(2, 'hoja de laurel', 'hojas de laurel'), sal(1.5), i(2, 'litro', 'de agua'), u(2, 'naranja', 'naranjas'), i(2, 'taza', 'de arroz blanco', 'Para servir.')],
    ['Olla grande o a presión'],
    [p('Cocina', 'Cocina los fríjoles con las carnes, el laurel y el agua 1 hora a presión o 2 1/2 horas en olla normal.', { m: 90, s: 'Fríjoles suaves y caldo espeso.' }), p('Sofrito', 'Sofríe la cebolla, el ajo y el chorizo en rodajas y agrégalos a la olla. Cocina 30 minutos más.', { m: 30 }), p('Sirve', 'Sirve con arroz, rodajas de naranja y farofa.')], 'Dura 4 días y mejora al segundo día.');
  rec(BR, 'Escondidinho de carne', '🥘', 'pure', [30, 35], 6, 'Media',
    'Carne desmechada con puré de yuca o papa gratinado con queso. El nombre significa "escondidito".',
    [i(2, 'taza', 'de carne de res desmechada'), u(1, 'libra de yuca o papa', 'libras de yuca o papa'), i(2, 'cda', 'de mantequilla'), i(0.5, 'taza', 'de leche'), u(1, 'cebolla', 'cebollas'), u(2, 'tomate', 'tomates'), aceite(1), sal(1.5), i(1, 'taza', 'de queso mozzarella')],
    ['Olla', 'Sartén', 'Refractaria'],
    [p('Puré', 'Cocina la yuca o papa en agua con sal 25 minutos, escurre y haz puré con mantequilla y leche.', { m: 25 }), p('Relleno', 'Sofríe cebolla y tomate 8 minutos y mezcla con la carne.'), p('Arma', 'Pon la carne en una refractaria, cubre con puré y queso.'), p('Gratina', 'Hornea a 200 °C por 15 minutos hasta dorar.', { m: 15 })], 'Dura 3 días.');
  rec(BR, 'Galinhada (arroz con pollo brasileño)', '🍗', 'arroz-verduras', [20, 45], 5, 'Fácil',
    'Arroz con pollo cocinado en una sola olla con cúrcuma, maíz y arveja.',
    [i(2, 'taza', 'de arroz'), u(1, 'pollo en trozos', 'pollos en trozos'), u(1, 'cebolla', 'cebollas'), ajo(3), i(1, 'cdta', 'de cúrcuma'), i(0.5, 'taza', 'de maíz'), i(0.5, 'taza', 'de arvejas'), i(4, 'taza', 'de agua'), aceite(2), sal(2)],
    ['Olla con tapa'], [p('Dora el pollo', 'Dora el pollo en aceite 8 minutos y reserva.', { m: 8 }), p('Sofríe', 'Sofríe cebolla, ajo y cúrcuma, agrega el arroz y revuelve 2 minutos.', { m: 4 }), p('Cocina', 'Agrega agua, sal, pollo y verduras. Tapa y cocina a fuego bajo 25 minutos.', { m: 25, s: 'El arroz absorbió todo el líquido.' })], 'Dura 3 días.');
  rec(BR, 'Churrasco de picanha', '🥩', 'bistec', [10, 15], 4, 'Fácil',
    'La picanha, corte estrella de Brasil, con una capa de grasa: sal gruesa y fuego fuerte.',
    [u(1, 'kilo de picanha (cuadril)', 'kilos de picanha (cuadril)'), i(2, 'cda', 'de sal gruesa'), i(null, '', 'Farofa y vinagrete', 'Para acompañar.')],
    ['Parrilla o sartén', 'Pinzas'], [p('Corta y sala', 'Corta la picanha en bistecs gruesos de 3 cm y cubre con sal gruesa.'), p('Asa', 'Asa 4 minutos por lado a fuego fuerte, con la grasa hacia abajo primero.', { m: 8, s: 'Costra dorada y centro rosado.' }), p('Reposa', 'Deja reposar 5 minutos y sirve en tajadas.', { m: 5 })], 'Se come al momento.');

  // ================================================================ ESPAÑA
  var ES = 'Cocina española';
  rec(ES, 'Cocido madrileño', '🍲', 'sopa-res', [30, 180], 6, 'Media',
    'Plato de olla de garbanzos con carnes, chorizo y verduras, que se sirve en dos tiempos: primero la sopa, luego lo sólido.',
    [i(2, 'taza', 'de garbanzos remojados'), u(0.5, 'kilo de carne de res', 'kilos de carne de res'), u(2, 'chorizo', 'chorizos'), u(4, 'papa', 'papas'), u(3, 'zanahoria', 'zanahorias'), u(0.5, 'repollo', 'repollos'), u(1, 'cebolla', 'cebollas'), sal(2), i(3, 'litro', 'de agua'), i(1, 'taza', 'de fideos', 'Para la sopa.')],
    ['Olla grande o a presión'], [p('Cocina', 'Cocina los garbanzos, la carne y la cebolla en el agua 90 minutos (40 a presión).', { m: 90 }), p('Verduras', 'Agrega zanahoria, papa, repollo y chorizo y cocina 35 minutos.', { m: 35 }), p('Sopa', 'Cuela parte del caldo y cocina en él los fideos 6 minutos.', { m: 6 }), p('Sirve', 'Sirve primero la sopa; después los garbanzos, las verduras y las carnes.')], 'Dura 4 días.');
  rec(ES, 'Pollo al ajillo', '🍗', 'pollo-guisado', [10, 35], 4, 'Fácil',
    'Presas de pollo doradas con muchos dientes de ajo, vino blanco o caldo y perejil.',
    [u(1, 'pollo en presas pequeñas', 'pollos en presas pequeñas'), ajo(10), i(0.5, 'taza', 'de vino blanco o caldo'), aceite(4), sal(1.5), i(2, 'cda', 'de perejil picado'), u(1, 'limón', 'limones')],
    ['Sartén honda'], [p('Dora', 'Sazona el pollo con sal y dóralo en aceite a fuego medio 10 minutos.', { m: 10 }), p('Ajos', 'Agrega los ajos con piel, aplastados, y cocina 5 minutos.', { m: 5, e: 'Si el ajo se quema amarga: baja el fuego.' }), p('Cocina', 'Agrega el vino o caldo, tapa y cocina 20 minutos.', { m: 20, s: 'Jugos claros y salsa aromática.' }), p('Termina', 'Agrega perejil y limón.')], 'Dura 3 días.');
  rec(ES, 'Albóndigas en salsa española', '🍝', 'albondigas', [25, 35], 4, 'Media',
    'Albóndigas de carne en salsa de cebolla, tomate y caldo. Se comen con pan para mojar.',
    [u(0.75, 'libra de carne molida', 'libras de carne molida'), u(1, 'huevo', 'huevos'), i(0.25, 'taza', 'de pan rallado'), ajo(2), i(1, 'cda', 'de perejil'), u(1, 'cebolla', 'cebollas'), u(2, 'tomate', 'tomates'), i(1, 'taza', 'de caldo'), aceite(3), sal(1.5), i(0.25, 'taza', 'de harina de trigo')],
    ['Sartén', 'Cazuela'], [p('Forma', 'Mezcla carne, huevo, pan, ajo, perejil y sal y forma bolitas. Pásalas por harina.'), p('Dora', 'Dóralas en aceite 6 minutos y reserva.', { m: 6 }), p('Salsa', 'Sofríe cebolla y tomate 10 minutos, agrega el caldo y las albóndigas y cocina tapado 20 minutos.', { m: 30, s: 'Salsa espesa y albóndigas firmes.' })], 'Dura 3 días.');
  rec(ES, 'Lentejas estofadas con chorizo', '🍲', 'lentejas', [10, 50], 4, 'Fácil',
    'Lentejas cocidas lentamente con chorizo, papa, zanahoria y pimentón.',
    [i(1.5, 'taza', 'de lentejas'), u(1, 'chorizo', 'chorizos'), u(1, 'papa', 'papas'), u(1, 'zanahoria', 'zanahorias'), u(1, 'cebolla', 'cebollas'), ajo(2), i(1, 'cdta', 'de pimentón dulce'), aceite(2), i(5, 'taza', 'de agua'), sal(1.5)],
    ['Olla'], [p('Sofríe', 'Sofríe cebolla, ajo y chorizo en rodajas 5 minutos. Agrega el pimentón.', { m: 5 }), p('Cocina', 'Agrega lentejas, agua, papa y zanahoria picadas y sal. Cocina 40 minutos a fuego bajo.', { m: 40, s: 'Lentejas blandas y caldo ligado.' })], 'Dura 4 días.');
  rec(ES, 'Merluza en salsa verde', '🐟', 'pescado-guisado', [10, 20], 3, 'Media',
    'Pescado blanco en salsa de ajo, perejil y vino blanco. Plato vasco ligero.',
    [u(3, 'filete de merluza o pescado blanco', 'filetes de merluza o pescado blanco'), ajo(4), i(0.5, 'taza', 'de perejil'), i(0.5, 'taza', 'de caldo o agua'), i(2, 'cda', 'de harina'), aceite(3), sal(1), i(0.25, 'taza', 'de vino blanco (opcional)')],
    ['Cazuela'], [p('Ajos', 'Sofríe los ajos laminados en aceite sin que se doren, 2 minutos.', { m: 2 }), p('Salsa', 'Agrega la harina, el caldo y el vino y cocina 3 minutos hasta ligar.', { m: 3 }), p('Pescado', 'Agrega el pescado salado y el perejil. Cocina 8 minutos moviendo la cazuela.', { m: 8, s: 'El pescado se ve opaco y se separa en láminas.' })], 'Se come al momento.');
  rec(ES, 'Fabada asturiana', '🍲', 'frijoles', [20, 180], 6, 'Media',
    'Guiso de alubias blancas con chorizo, morcilla y tocino. Contundente y lleno de sabor.',
    [i(2, 'taza', 'de alubias o fríjoles blancos remojados'), u(2, 'chorizo', 'chorizos'), u(1, 'morcilla', 'morcillas'), i(150, 'g', 'de tocino'), u(1, 'cebolla', 'cebollas'), i(1, 'cdta', 'de pimentón'), i(2, 'litro', 'de agua'), sal(1.5)],
    ['Olla'], [p('Cocina', 'Pon los fríjoles con las carnes y la cebolla en agua fría. Hierve y baja el fuego; cocina 2 horas sin que hierva fuerte.', { m: 120, e: 'El hervor fuerte rompe los fríjoles.' }), p('Termina', 'Agrega pimentón y sal y cocina 30 minutos más hasta que el caldo esté cremoso.', { m: 30 })], 'Dura 4 días.');

  // ================================================================ ITALIA
  var IT = 'Cocina italiana';
  rec(IT, 'Pollo alla cacciatora', '🍗', 'pollo-guisado', [15, 45], 4, 'Fácil',
    'Pollo cazador: presas guisadas en tomate con cebolla, pimentón y aceitunas.',
    [u(1, 'pollo en presas', 'pollos en presas'), u(1, 'cebolla', 'cebollas'), u(1, 'pimentón', 'pimentones'), i(1.5, 'taza', 'de tomate triturado'), ajo(3), i(0.25, 'taza', 'de aceitunas'), i(1, 'cdta', 'de orégano'), aceite(3), sal(1.5)],
    ['Sartén honda con tapa'], [p('Dora', 'Dora el pollo en aceite 10 minutos y reserva.', { m: 10 }), p('Sofríe', 'Sofríe cebolla, pimentón y ajo 8 minutos.', { m: 8 }), p('Guisa', 'Agrega tomate, orégano, sal, aceitunas y el pollo. Tapa y cocina 30 minutos.', { m: 30, s: 'Pollo tierno en salsa espesa.' })], 'Dura 3 días.');
  rec(IT, 'Parmigiana di melanzane', '🍆', 'lasana', [30, 50], 6, 'Media',
    'Capas de berenjena frita, salsa de tomate y queso gratinado en el horno.',
    [u(3, 'berenjena', 'berenjenas'), i(2, 'taza', 'de salsa de tomate'), i(250, 'g', 'de mozzarella'), i(0.5, 'taza', 'de parmesano rallado'), i(null, '', 'Aceite para freír'), i(0.5, 'taza', 'de albahaca'), sal(1)],
    ['Sartén', 'Refractaria'], [p('Berenjenas', 'Corta en láminas, sala 15 minutos y seca. Fríe 2 minutos por lado y escurre.', { m: 20 }), p('Arma', 'En la refractaria alterna salsa, berenjena, mozzarella, albahaca y parmesano en 3 capas.'), p('Hornea', 'Hornea a 190 °C por 30 minutos hasta dorar.', { m: 30 })], 'Dura 3 días.');
  rec(IT, 'Saltimbocca alla romana', '🥓', 'milanesa', [10, 10], 2, 'Fácil',
    'Filetes de ternera o pollo con jamón y salvia, salteados en mantequilla y vino. "Salta en la boca".',
    [u(4, 'filete fino de pollo o ternera', 'filetes finos de pollo o ternera'), u(4, 'lonja de jamón', 'lonjas de jamón'), i(8, '', 'hojas de salvia'), i(2, 'cda', 'de mantequilla'), i(0.25, 'taza', 'de vino blanco o caldo'), sal(0.5)],
    ['Sartén', 'Palillos'], [p('Arma', 'Aplana los filetes, cubre con jamón y salvia y sujeta con un palillo.'), p('Dora', 'Dora en mantequilla 3 minutos por lado, con el jamón hacia abajo primero.', { m: 6 }), p('Salsa', 'Retira, agrega el vino a la sartén y reduce 2 minutos. Baña los filetes.', { m: 2 })], 'Se come al momento.');
  rec(IT, 'Penne all\'arrabbiata', '🍝', 'pasta-ajo', [10, 20], 3, 'Fácil',
    'Pasta con salsa de tomate muy picante: ajo, ají y tomate. "Arrabbiata" quiere decir enojada.',
    [i(250, 'g', 'de pasta penne'), i(2, 'taza', 'de tomate triturado'), ajo(3), u(1, 'ají picante o 1 cdta de hojuelas', 'ajíes picantes o 1 cdta de hojuelas'), aceite(3), sal(1.5), i(2, 'cda', 'de perejil'), i(0.25, 'taza', 'de queso parmesano')],
    ['Olla', 'Sartén'], [p('Pasta', 'Cocina la pasta en agua con sal según el paquete.', { m: 10 }), p('Salsa', 'Sofríe ajo y ají en aceite 1 minuto, agrega el tomate y cocina 12 minutos.', { m: 13 }), p('Une', 'Mezcla la pasta con la salsa y sirve con perejil y parmesano.')], 'Dura 3 días.');
  rec(IT, 'Polenta con ragú', '🍲', 'estofado-res', [15, 90], 6, 'Media',
    'Polenta cremosa de maíz con un ragú lento de carne y tomate.',
    [i(1, 'taza', 'de harina de maíz para polenta'), i(4, 'taza', 'de agua'), sal(1), i(2, 'cda', 'de mantequilla'), u(0.5, 'libra de carne molida', 'libras de carne molida'), i(2, 'taza', 'de tomate triturado'), u(1, 'cebolla', 'cebollas'), u(1, 'zanahoria', 'zanahorias'), ajo(2), aceite(2)],
    ['Olla', 'Sartén'], [p('Ragú', 'Sofríe cebolla, zanahoria rallada y ajo, agrega la carne y cocina 10 minutos. Agrega el tomate y cocina tapado 60 minutos a fuego bajo.', { m: 70 }), p('Polenta', 'Hierve el agua con sal, agrega la harina en lluvia revolviendo y cocina 20 minutos hasta espesar. Agrega mantequilla.', { m: 20, s: 'Cremosa y se despega de la olla.' }), p('Sirve', 'Sirve la polenta con el ragú encima.')], 'Dura 3 días.');

  // ================================================================ MÉXICO
  var MX = 'Cocina mexicana';
  rec(MX, 'Pozole rojo', '🍲', 'sopa-res', [30, 120], 8, 'Media',
    'Sopa festiva de maíz cacahuazintle con cerdo y chiles guajillo, que se sirve con lechuga, rábano, cebolla y limón.',
    [i(3, 'taza', 'de maíz pozolero cocido (mote)'), u(1, 'kilo de cerdo con hueso', 'kilos de cerdo con hueso'), u(4, 'chile guajillo', 'chiles guajillo'), u(1, 'cebolla', 'cebollas'), ajo(4), sal(2), i(2, 'litro', 'de agua'), i(null, '', 'Lechuga, rábano, cebolla picada, orégano y limón', 'Para servir.')],
    ['Olla grande', 'Licuadora'], [p('Cocina el cerdo', 'Cocina el cerdo con cebolla, ajo y sal en el agua 90 minutos.', { m: 90 }), p('Salsa', 'Hidrata los chiles en agua caliente 15 minutos, licúalos con un poco de caldo y cuela.', { m: 15 }), p('Une', 'Agrega la salsa y el maíz y cocina 25 minutos.', { m: 25 }), p('Sirve', 'Sirve con las guarniciones al gusto.')], 'Dura 4 días.');
  rec(MX, 'Tinga de pollo', '🌮', 'tacos', [15, 30], 6, 'Fácil',
    'Pollo desmechado en salsa de tomate, cebolla y chipotle. Se sirve en tostadas, tacos o tortas.',
    [u(2, 'pechuga de pollo', 'pechugas de pollo'), u(3, 'tomate', 'tomates'), u(1, 'cebolla', 'cebollas'), u(2, 'chile chipotle en adobo', 'chiles chipotle en adobo'), ajo(2), aceite(2), sal(1.5)],
    ['Olla', 'Licuadora', 'Sartén'], [p('Cocina el pollo', 'Hierve el pollo 20 minutos y desmecha.', { m: 20 }), p('Salsa', 'Licúa tomate, chipotle, ajo y media cebolla. Fríe la otra media cebolla en rodajas y agrega la salsa; cocina 10 minutos.', { m: 10 }), p('Une', 'Mezcla el pollo con la salsa y cocina 5 minutos.', { m: 5 })], 'Dura 4 días.');
  rec(MX, 'Chiles rellenos', '🌶️', 'pimenton-relleno', [30, 30], 4, 'Difícil',
    'Pimentones o chiles poblanos asados y rellenos de queso, capeados en huevo y fritos, en caldillo de tomate.',
    [u(4, 'chile poblano o pimentón verde', 'chiles poblanos o pimentones verdes'), i(250, 'g', 'de queso fresco'), u(3, 'huevo', 'huevos'), i(0.5, 'taza', 'de harina'), i(2, 'taza', 'de salsa de tomate'), i(null, '', 'Aceite para freír'), sal(1)],
    ['Sartén honda', 'Tazones'], [p('Asa y pela', 'Asa los chiles hasta que la piel se ampolle. Cúbrelos 10 minutos, pélalos y quítales las semillas.', { m: 15 }), p('Rellena', 'Rellénalos con queso y pásalos por harina.'), p('Capea', 'Bate las claras a punto de nieve, mezcla con las yemas y pasa los chiles. Fríe hasta dorar.', { m: 8 }), p('Caldillo', 'Sirve en salsa de tomate caliente.')], 'Dura 2 días.');
  rec(MX, 'Cochinita pibil', '🐷', 'lomo-cerdo', [30, 180], 8, 'Media',
    'Cerdo marinado en achiote y naranja agria, cocido lentamente. Típico de Yucatán, se sirve en tacos con cebolla morada encurtida.',
    [u(1.5, 'kilo de cerdo (pierna o paleta)', 'kilos de cerdo (pierna o paleta)'), i(3, 'cda', 'de pasta de achiote'), i(0.5, 'taza', 'de jugo de naranja'), i(0.25, 'taza', 'de jugo de limón'), ajo(5), sal(2), i(1, 'cdta', 'de orégano'), u(2, 'cebolla morada', 'cebollas moradas')],
    ['Bandeja honda', 'Papel aluminio'], [p('Marina', 'Licúa achiote, jugos, ajo, orégano y sal y cubre el cerdo en trozos. Marina 4 horas o toda la noche.', { m: 240 }), p('Hornea', 'Envuelve en aluminio y hornea a 160 °C por 3 horas.', { m: 180, s: 'Se deshace con un tenedor.' }), p('Cebolla', 'Encurte la cebolla en rodajas con limón y sal 30 minutos.', { m: 30 }), p('Sirve', 'Desmecha y sirve en tortillas con cebolla.')], 'Dura 4 días.');
  rec(MX, 'Sopa azteca', '🍲', 'sopa-tortilla', [15, 30], 4, 'Fácil',
    'Sopa de tomate y chile con tiras de tortilla crujientes, aguacate, queso y crema.',
    [u(4, 'tomate', 'tomates'), u(2, 'chile guajillo o pasilla', 'chiles guajillo o pasilla'), u(0.5, 'cebolla', 'cebollas'), ajo(2), i(4, 'taza', 'de caldo de pollo'), u(4, 'tortilla de maíz', 'tortillas de maíz'), u(1, 'aguacate', 'aguacates'), i(1, 'taza', 'de queso fresco'), i(null, '', 'Aceite para freír'), sal(1)],
    ['Olla', 'Licuadora', 'Sartén'], [p('Caldo', 'Licúa tomate, chile, cebolla y ajo con una taza de caldo. Fríe la salsa 5 minutos, agrega el resto del caldo y cocina 20 minutos.', { m: 25 }), p('Tortilla', 'Corta las tortillas en tiras y fríelas hasta que estén crujientes.', { m: 4 }), p('Sirve', 'Sirve la sopa con tortilla, aguacate, queso y crema.')], 'Dura 3 días (sin tortilla).');

  // ================================================================ PERÚ
  var PE = 'Cocina peruana';
  rec(PE, 'Anticuchos de corazón', '🍢', 'pinchos', [30, 15], 4, 'Media',
    'Pinchos de corazón de res marinados en ají panca y vinagre, asados a la parrilla. Clásico callejero de Lima.',
    [u(1, 'libra de corazón de res en cubos', 'libras de corazón de res en cubos'), i(3, 'cda', 'de pasta de ají panca'), i(0.25, 'taza', 'de vinagre'), ajo(4), i(1, 'cdta', 'de comino'), sal(1.5), aceite(2), u(2, 'papa', 'papas'), i(null, '', 'Palillos de brocheta')],
    ['Brochetas', 'Parrilla o sartén'], [p('Marina', 'Mezcla ají, vinagre, ajo, comino, sal y aceite. Marina el corazón 4 horas (o toda la noche).', { m: 240 }), p('Ensarta', 'Ensarta en brochetas.'), p('Asa', 'Asa a fuego fuerte 3 minutos por lado, pincelando con el adobo.', { m: 6, s: 'Dorados por fuera y jugosos por dentro.' }), p('Sirve', 'Sirve con papa cocida y salsa de ají.')], 'Se come al momento.');
  rec(PE, 'Seco de res', '🍲', 'estofado-res', [20, 90], 6, 'Media',
    'Guiso de res con culantro licuado, ají amarillo y cerveza, servido con arroz y fríjoles.',
    [u(1, 'kilo de carne de res en trozos', 'kilos de carne de res en trozos'), i(1, 'taza', 'de cilantro'), i(2, 'cda', 'de ají amarillo en pasta'), u(1, 'cebolla', 'cebollas'), ajo(3), i(0.5, 'taza', 'de cerveza o caldo'), i(1, 'taza', 'de arvejas'), u(3, 'papa', 'papas'), aceite(3), sal(1.5), i(1, 'cdta', 'de comino')],
    ['Olla'], [p('Dora', 'Dora la carne en aceite 8 minutos y reserva.', { m: 8 }), p('Aderezo', 'Licúa el cilantro con la cerveza. Sofríe cebolla, ajo y ají con comino 6 minutos y agrega el licuado.', { m: 6 }), p('Guisa', 'Regresa la carne con agua que casi la cubra, sal y cocina tapado 60 minutos. Agrega papas y arvejas 20 minutos antes del final.', { m: 60 }), p('Sirve', 'Sirve con arroz y fríjoles.')], 'Dura 4 días.');
  rec(PE, 'Arroz con pollo peruano', '🍗', 'arroz-verduras', [20, 45], 5, 'Media',
    'Arroz verde de cilantro con pollo, arvejas y zanahoria. Se acompaña con salsa criolla.',
    [i(2, 'taza', 'de arroz'), u(4, 'presa de pollo', 'presas de pollo'), i(1, 'taza', 'de cilantro licuado con 1/2 taza de agua'), u(1, 'cebolla', 'cebollas'), ajo(3), i(0.5, 'taza', 'de arvejas'), u(1, 'zanahoria', 'zanahorias'), i(1, 'cda', 'de ají amarillo'), i(3, 'taza', 'de caldo'), aceite(3), sal(2)],
    ['Olla con tapa', 'Licuadora'], [p('Dora', 'Dora el pollo salado y reserva.', { m: 8 }), p('Aderezo', 'Sofríe cebolla, ajo y ají 5 minutos y agrega el cilantro licuado; cocina 5 minutos.', { m: 10 }), p('Arroz', 'Agrega el arroz, el caldo, el pollo y las verduras. Cocina tapado a fuego bajo 22 minutos.', { m: 22, s: 'Arroz suelto y de color verde intenso.' })], 'Dura 3 días.');
  rec(PE, 'Tacu tacu', '🍚', 'frijoles', [10, 15], 3, 'Fácil',
    'Arroz con fríjoles refritos dorados en forma de tortilla, con huevo y plátano frito. Aprovecha las sobras.',
    [i(1.5, 'taza', 'de arroz cocido'), i(1, 'taza', 'de fríjoles cocidos'), u(0.5, 'cebolla', 'cebollas'), ajo(1), i(1, 'cda', 'de ají amarillo'), aceite(3), u(3, 'huevo', 'huevos'), u(1, 'plátano maduro', 'plátanos maduros')],
    ['Sartén antiadherente'], [p('Sofrito', 'Sofríe cebolla, ajo y ají 4 minutos.', { m: 4 }), p('Mezcla', 'Agrega fríjoles aplastados y el arroz y mezcla.'), p('Dora', 'Forma una tortilla gruesa y dórala 4 minutos por lado.', { m: 8, s: 'Costra dorada.' }), p('Sirve', 'Sirve con huevo frito y plátano maduro frito.')], 'Dura 2 días.');
  rec(PE, 'Sopa criolla', '🍲', 'sopa-res', [15, 40], 4, 'Fácil',
    'Sopa de fideos con carne, ají, tomate y leche evaporada. Muy popular en la noche limeña.',
    [i(300, 'g', 'de carne de res en tiras'), i(100, 'g', 'de fideos'), u(1, 'cebolla', 'cebollas'), u(2, 'tomate', 'tomates'), ajo(2), i(1, 'cda', 'de ají amarillo'), i(1, 'taza', 'de leche evaporada'), i(4, 'taza', 'de agua'), aceite(2), sal(1.5), u(2, 'huevo', 'huevos')],
    ['Olla'], [p('Sofríe', 'Sofríe cebolla, ajo, ají y tomate 8 minutos. Agrega la carne y dora 5 minutos.', { m: 13 }), p('Caldo', 'Agrega el agua y cocina 20 minutos.', { m: 20 }), p('Fideos', 'Agrega los fideos y cocina 7 minutos. Termina con la leche.', { m: 7 }), p('Sirve', 'Escalfa un huevo en cada plato o sírvelo duro.')], 'Dura 2 días.');

  // ================================================================ VENEZUELA
  var VE = 'Cocina venezolana';
  rec(VE, 'Asado negro', '🥩', 'estofado-res', [20, 180], 8, 'Media',
    'Corte de res cocinado lentamente en una salsa oscura de papelón. Se sirve con arroz, plátano frito y ensalada.',
    [u(1.5, 'kilo de muchacho o punta trasera de res', 'kilos de muchacho o punta trasera de res'), i(0.5, 'taza', 'de papelón o panela rallada'), u(1, 'cebolla', 'cebollas'), u(1, 'pimentón', 'pimentones'), ajo(5), i(0.25, 'taza', 'de vinagre'), i(0.25, 'taza', 'de salsa inglesa o soya'), i(1, 'taza', 'de agua'), aceite(3), sal(2)],
    ['Olla pesada con tapa'], [p('Caramelo', 'Derrite el papelón en el aceite 4 minutos hasta que oscurezca, sin quemarlo.', { m: 4 }), p('Dora', 'Dora la carne en el caramelo por todos los lados 10 minutos.', { m: 10 }), p('Cocina', 'Agrega cebolla, pimentón, ajo, vinagre, salsa y agua. Tapa y cocina a fuego bajo 2 1/2 horas.', { m: 150, s: 'La carne se corta con cuchara y la salsa es espesa y brillante.' }), p('Sirve', 'Corta y baña con la salsa.')], 'Dura 4 días.');
  rec(VE, 'Pasticho venezolano', '🍝', 'lasana', [40, 50], 8, 'Media',
    'Lasaña venezolana con carne, salsa de tomate, bechamel y queso, a veces con lonjas de jamón.',
    [i(250, 'g', 'de láminas de lasaña'), u(0.75, 'libra de carne molida', 'libras de carne molida'), i(2, 'taza', 'de salsa de tomate'), i(2, 'taza', 'de leche'), i(3, 'cda', 'de mantequilla'), i(3, 'cda', 'de harina'), i(1.5, 'taza', 'de queso mozzarella'), u(1, 'cebolla', 'cebollas'), sal(1.5)],
    ['Olla', 'Sartén', 'Refractaria'], [p('Carne', 'Sofríe la cebolla y la carne 10 minutos y mezcla con la salsa de tomate.', { m: 10 }), p('Bechamel', 'Derrite la mantequilla, agrega la harina, luego la leche poco a poco, y cocina 8 minutos revolviendo hasta espesar.', { m: 8 }), p('Arma', 'En la refractaria alterna láminas, carne, bechamel y queso en 3 capas.'), p('Hornea', 'Hornea a 190 °C por 30 minutos.', { m: 30 })], 'Dura 4 días.');
  rec(VE, 'Sancocho venezolano de gallina', '🍲', 'sancocho', [25, 80], 6, 'Fácil',
    'Sopa de gallina con ocumo, yuca, ñame, ahuyama y mazorca. Plato dominguero.',
    [u(1, 'gallina o pollo en presas', 'gallinas o pollos en presas'), u(2, 'mazorca', 'mazorcas'), u(1, 'libra de yuca', 'libras de yuca'), u(1, 'libra de ahuyama', 'libras de ahuyama'), u(2, 'papa', 'papas'), u(2, 'cebolla larga', 'cebollas largas'), ajo(3), i(0.5, 'taza', 'de cilantro'), i(3, 'litro', 'de agua'), sal(2)],
    ['Olla grande'], [p('Cocina la gallina', 'Cocina la gallina con cebolla, ajo y sal en el agua 45 minutos.', { m: 45 }), p('Verduras', 'Agrega yuca, mazorca, ahuyama y papa en trozos y cocina 30 minutos.', { m: 30 }), p('Sirve', 'Agrega cilantro y sirve con arroz y aguacate.')], 'Dura 3 días.');
  rec(VE, 'Mandocas', '🍩', 'arepas', [20, 15], 8, 'Media',
    'Roscas fritas de harina de maíz, plátano maduro y queso. Desayuno típico del llano venezolano.',
    [u(2, 'plátano muy maduro', 'plátanos muy maduros'), i(1.5, 'taza', 'de harina de maíz precocida'), i(0.5, 'taza', 'de queso rallado'), i(0.25, 'taza', 'de papelón rallado o azúcar'), i(0.5, 'taza', 'de agua tibia'), i(null, '', 'Aceite para freír')],
    ['Tazón', 'Sartén honda'], [p('Masa', 'Aplasta el plátano, mezcla con harina, queso, azúcar y el agua y amasa hasta formar una masa suave.'), p('Forma', 'Forma tiras gruesas y únelas en roscas.'), p('Fríe', 'Fríe en aceite a fuego medio 4 minutos por lado hasta dorar.', { m: 8, s: 'Doradas e infladas.' })], 'Se comen el mismo día.');
})();
