/* ============================================================
   COCINA COLOMBIANA (parte 1): sopas, caldos y platos fuertes
   ============================================================ */
(function () {
  var i = GEN.i, p = GEN.p, ajo = GEN.ajo, sal = GEN.sal, aceite = GEN.aceite, R = GEN.R;
  var CO = 'Cocina colombiana';
  // u(cantidad, singular, plural): "2 libras de papa" -> u(2, 'libra de papa', 'libras de papa')
  function u(c, s, pl) { return i(c, '', s + '|' + pl); }
  var HOGAO = [u(2, 'tomate', 'tomates'), u(4, 'cebolla larga', 'cebollas largas'), ajo(1), aceite(2), sal(0.5)];

  // ---------------------------------------------------------------- Ajiaco
  R(CO, 'Ajiaco santafereño', '🍲', 'ajiaco', [25, 75], 6, 'Media',
    'La sopa de Bogotá y Cundinamarca: caldo espeso de tres papas con pollo y mazorca, que se sirve con crema de leche, alcaparras y aguacate.',
    'El secreto del espesor es la <strong>papa criolla</strong>: se deshace por completo y vuelve cremoso el caldo. Las otras dos papas se mantienen en trozos. La <strong>guasca</strong> es la hierba que le da el sabor típico; se consigue seca en cualquier plaza o supermercado.',
    [u(2, 'pechuga de pollo con hueso', 'pechugas de pollo con hueso'), u(1, 'libra de papa sabanera (blanca)', 'libras de papa sabanera (blanca)'), u(1, 'libra de papa pastusa', 'libras de papa pastusa'), u(1, 'libra de papa criolla', 'libras de papa criolla'),
     u(3, 'mazorca', 'mazorcas'), u(3, 'cebolla larga', 'cebollas largas'), ajo(3), i(3, 'cda', 'de guascas secas'), u(3, 'litro de agua', 'litros de agua'), sal(2), i(null, '', 'Pimienta'),
     i(1, 'taza', 'de crema de leche', 'Para servir.'), i(3, 'cda', 'de alcaparras', 'Para servir.'), u(2, 'aguacate', 'aguacates'), i(null, '', 'Arroz blanco', 'Para acompañar.')],
    ['Olla grande', 'Tabla y cuchillo', 'Cuchara de palo', 'Dos tenedores (para desmechar)', 'Platos hondos'],
    [
      p('Prepara las papas', 'Pela las papas sabanera y pastusa y córtalas en rodajas de medio centímetro; ponlas en agua para que no se oscurezcan. La papa criolla solo se lava, no hace falta pelarla. Corta cada mazorca en 3 trozos.', { c: 'Mantén las papas sumergidas en agua hasta que las vayas a usar.' }),
      p('Cocina el pollo', 'En la olla pon el agua, las pechugas, las cebollas largas enteras, el ajo machacado, la sal y una pizca de pimienta. Tapa y lleva a hervor; baja el fuego y cocina 25 minutos.', { m: 25, s: 'El pollo está cocido cuando al pincharlo con un tenedor sale jugo transparente, no rosado.', c: 'Retira la espuma que sube al inicio con una cuchara: deja el caldo más limpio.' }),
      p('Saca el pollo', 'Pasa las pechugas a un plato y déjalas enfriar. Retira las cebollas del caldo. Deja el caldo hirviendo suave.', { c: 'Cuando se enfríen un poco, desmecha el pollo con dos tenedores y guárdalo tapado.' }),
      p('Cocina las papas', 'Echa al caldo las rodajas de papa sabanera y pastusa y las mazorcas. Cocina 20 minutos destapado, moviendo de vez en cuando con suavidad.', { m: 20, s: 'Las papas se parten fácil con una cuchara pero no se han deshecho.' }),
      p('Agrega la papa criolla y las guascas', 'Echa la papa criolla y 2 cucharadas de guascas. Cocina 20 minutos más: la criolla se deshace y espesa el caldo.', { m: 20, s: 'El caldo está espeso y cremoso, de color amarillo.', e: 'Si queda muy espeso agrega un poco de agua caliente; si queda aguado, aplasta unas papas con la cuchara contra la pared de la olla.' }),
      p('Rectifica y regresa el pollo', 'Prueba el caldo y corrige la sal. Agrega el pollo desmechado y la cucharada de guascas que queda. Deja 5 minutos más.', { m: 5 }),
      p('Sirve a la manera tradicional', 'Sirve el ajiaco bien caliente en platos hondos con un trozo de mazorca. Cada comensal agrega su crema de leche, alcaparras y aguacate en trozos. El arroz blanco se sirve aparte.', { c: 'La crema y las alcaparras se ponen al final, en el plato, no en la olla.' })
    ],
    'Se guarda hasta 3 días en la nevera. Al recalentar, agrega un poco de agua porque espesa. Sin la crema ni el aguacate, se puede congelar 1 mes.');

  // ---------------------------------------------------------------- Sancocho de pollo
  R(CO, 'Sancocho de pollo', '🍲', 'sancocho', [25, 70], 6, 'Fácil',
    'El sancocho de todos los domingos: caldo con pollo, plátano verde, yuca, papa y mazorca, servido con arroz, aguacate y ají.',
    'El orden importa: lo que más tarda en cocinarse (yuca y plátano) entra primero, y lo que se deshace rápido (papa) entra de último.',
    [u(1, 'pollo entero en presas', 'pollos enteros en presas'), u(2, 'plátano verde', 'plátanos verdes'), u(1, 'libra de yuca', 'libras de yuca'), u(1, 'libra de papa', 'libras de papa'), u(2, 'mazorca', 'mazorcas'),
     u(3, 'cebolla larga', 'cebollas largas'), ajo(3), u(2, 'tomate', 'tomates'), i(0.5, 'taza', 'de cilantro picado'), u(3, 'litro de agua', 'litros de agua'), sal(2), i(1, 'cdta', 'de comino'), i(null, '', 'Arroz blanco, aguacate y ají', 'Para servir.')],
    ['Olla grande', 'Tabla y cuchillo', 'Cuchara de palo', 'Platos hondos'],
    [
      p('Pica las verduras', 'Pela el plátano y la yuca y córtalos en trozos de 5 centímetros (a la yuca quítale el hilo del centro). Pela las papas y pártelas en mitades. Corta las mazorcas en 3 trozos. Pica la cebolla larga y el tomate.', { c: 'Pela el plátano verde con la ayuda de un cuchillo, haciendo un corte a lo largo; con la mano se pega.' }),
      p('Haz el caldo', 'En la olla pon el agua, el pollo, la mitad de la cebolla, el tomate, el ajo machacado, el comino y la sal. Lleva a hervor, baja el fuego y cocina 25 minutos.', { m: 25, s: 'El pollo ya casi se separa del hueso.' }),
      p('Agrega yuca, plátano y mazorca', 'Echa la yuca, el plátano y las mazorcas. Cocina 25 minutos a fuego medio.', { m: 25, s: 'La yuca se parte al presionarla con un tenedor.' }),
      p('Agrega la papa', 'Echa las papas y el resto de la cebolla. Cocina 15 minutos más.', { m: 15, e: 'Si la papa entra muy temprano se deshace y el caldo queda turbio.' }),
      p('Termina con cilantro', 'Prueba y corrige la sal. Apaga y agrega el cilantro picado. Tapa y deja reposar 5 minutos.', { m: 5 }),
      p('Sirve', 'Sirve en cada plato una presa de pollo, un trozo de yuca, plátano, papa y mazorca con caldo. Acompaña con arroz, aguacate y ají.')
    ],
    'Dura 3 días en la nevera. Se recalienta muy bien; la yuca y el plátano se ponen más blandos.');

  // ---------------------------------------------------------------- Sancocho de res
  R(CO, 'Sancocho de costilla de res', '🍖', 'sancocho', [25, 120], 6, 'Fácil',
    'Sancocho contundente con costilla de res que suelta todo su sabor al caldo. Lleva yuca, plátano, papa y mazorca.',
    'La costilla pide tiempo: <strong>una olla a presión</strong> reduce el tiempo de cocción a 40 minutos si tienes una.',
    [u(1.5, 'kilo de costilla de res', 'kilos de costilla de res'), u(2, 'plátano verde', 'plátanos verdes'), u(1, 'libra de yuca', 'libras de yuca'), u(1, 'libra de papa', 'libras de papa'), u(2, 'mazorca', 'mazorcas'),
     u(3, 'cebolla larga', 'cebollas largas'), ajo(3), u(2, 'tomate', 'tomates'), i(0.5, 'taza', 'de cilantro picado'), u(3, 'litro de agua', 'litros de agua'), sal(2), i(1, 'cdta', 'de comino')],
    ['Olla grande (o a presión)', 'Tabla y cuchillo', 'Cuchara de palo'],
    [
      p('Cocina la costilla', 'Lava la costilla. En la olla pon el agua, la costilla, la mitad de la cebolla larga, el ajo machacado, el comino y la sal. Hierve y baja el fuego. Cocina 75 minutos (o 40 en olla a presión).', { m: 75, s: 'La carne se separa del hueso con facilidad.', c: 'Retira la espuma gris de los primeros minutos.' }),
      p('Pica las verduras', 'Mientras tanto, pela y corta el plátano, la yuca y las papas en trozos grandes; corta la mazorca en trozos y pica el tomate.'),
      p('Agrega yuca, plátano y mazorca', 'Echa la yuca, el plátano, la mazorca y el tomate a la olla. Cocina 25 minutos.', { m: 25 }),
      p('Agrega la papa', 'Echa la papa y el resto de la cebolla. Cocina 15 minutos más, hasta que la papa esté blanda.', { m: 15 }),
      p('Termina y sirve', 'Corrige la sal, agrega el cilantro y apaga. Sirve cada plato con costilla, verduras y caldo, y acompaña con arroz y aguacate.')
    ],
    'Se conserva 3 días en la nevera.');

  // ---------------------------------------------------------------- Changua
  R(CO, 'Changua bogotana', '🥣', 'changua', [5, 15], 2, 'Fácil',
    'El desayuno clásico de Bogotá: caldo suave de leche con cebolla larga, huevo pochado y cilantro, con pan para mojar.',
    'Se hace en minutos. El huevo se cocina dentro del caldo hirviendo suave, <strong>sin revolver</strong>, para que la clara cuaje y la yema quede blanda.',
    [i(2, 'taza', 'de leche'), i(2, 'taza', 'de agua'), u(2, 'cebolla larga', 'cebollas largas'), sal(0.5), u(2, 'huevo', 'huevos'), u(2, 'cda de cilantro picado', 'cdas de cilantro picado'), u(2, 'pan (tostado o de ayer)', 'panes (tostados o de ayer)')],
    ['Olla pequeña', 'Cuchara', 'Dos tazones'],
    [
      p('Pica la cebolla', 'Pica la parte blanca y un poco de la parte verde de la cebolla larga en rodajas finas.'),
      p('Hierve el caldo', 'En la olla pon el agua, la leche, la cebolla y la sal. Lleva a hervor suave y cocina 5 minutos.', { m: 5, s: 'La cebolla está transparente y el caldo huele dulce.', e: 'Con fuego fuerte la leche se derrama y se corta: mantenla en hervor suave.' }),
      p('Agrega los huevos', 'Con una cuchara haz un pequeño hueco en el caldo y abre un huevo dentro; repite con el otro. Tapa y cocina 3 minutos sin revolver.', { m: 3, s: 'La clara está blanca y firme, la yema todavía blandita.' }),
      p('Sirve', 'Con cuidado pasa cada huevo con caldo a un tazón. Agrega cilantro, un poco más de sal si hace falta, y acompaña con el pan partido en trozos para mojar.')
    ],
    'Se come recién hecha; no se guarda.');

  // ---------------------------------------------------------------- Cuchuco
  R(CO, 'Cuchuco de trigo con costilla de cerdo', '🍲', 'cuchuco', [20, 110], 6, 'Media',
    'Sopa espesa de trigo molido con costilla de cerdo, papa y arvejas: el plato de frío de Cundinamarca y Boyacá.',
    'El trigo se <strong>remoja desde la noche anterior</strong>. Si no puedes, cocínalo un rato más. Revuelve de vez en cuando porque se pega al fondo.',
    [i(1.5, 'taza', 'de cuchuco de trigo (trigo partido)'), u(0.75, 'kilo de costilla de cerdo', 'kilos de costilla de cerdo'), u(1, 'libra de papa', 'libras de papa'), u(1, 'taza de arvejas', 'tazas de arvejas'), u(1, 'zanahoria', 'zanahorias'),
     u(3, 'cebolla larga', 'cebollas largas'), ajo(2), u(2.5, 'litro de agua', 'litros de agua'), sal(2), i(0.5, 'taza', 'de cilantro picado'), i(null, '', 'Aguacate', 'Para servir.')],
    ['Olla grande', 'Colador', 'Cuchara de palo'],
    [
      p('Remoja el trigo', 'La noche anterior, lava el cuchuco y déjalo en agua que lo cubra por 3 dedos. Al día siguiente, escúrrelo.', { c: 'Si olvidaste remojarlo, hierve el trigo 20 minutos más al cocinar.' }),
      p('Cocina la costilla', 'En la olla pon el agua, la costilla, la cebolla larga, el ajo y la sal. Cocina 40 minutos a fuego medio.', { m: 40 }),
      p('Agrega el trigo', 'Echa el cuchuco escurrido y cocina 40 minutos, moviendo cada 10 minutos desde el fondo.', { m: 40, e: 'No lo dejes sin revolver: se pega y se quema en el fondo.' }),
      p('Agrega las verduras', 'Pela y pica la papa y la zanahoria en cubos. Agrégalos con las arvejas y cocina 25 minutos más.', { m: 25, s: 'El trigo está blando y el caldo espeso.' }),
      p('Sirve', 'Corrige la sal, agrega cilantro y sirve caliente con aguacate.')
    ],
    'Espesa al reposar: añade agua al recalentar. Dura 3 días en nevera.');

  // ---------------------------------------------------------------- Caldo de costilla
  R(CO, 'Caldo de costilla', '🍲', 'caldo-costilla', [10, 70], 4, 'Fácil',
    'El caldo de la mañana después de una fiesta, o de un día frío: costilla de res, papa y cilantro.',
    'Es sencillo pero pide paciencia: mientras más lento hierve, más sabor tiene el caldo.',
    [u(1, 'kilo de costilla de res', 'kilos de costilla de res'), u(1, 'libra de papa', 'libras de papa'), u(3, 'cebolla larga', 'cebollas largas'), ajo(2), u(2, 'litro de agua', 'litros de agua'), sal(1.5), i(0.5, 'taza', 'de cilantro picado'), u(2, 'huevo', 'huevos'), i(null, '', 'Arepa o pan', 'Para acompañar.')],
    ['Olla', 'Cuchara', 'Platos hondos'],
    [
      p('Cocina la costilla', 'Pon la costilla en la olla con el agua, la cebolla larga entera, el ajo machacado y la sal. Hierve, retira la espuma y cocina a fuego bajo 50 minutos.', { m: 50, s: 'La carne está muy blanda.' }),
      p('Agrega la papa', 'Pela la papa, córtala en trozos y agrégala. Cocina 20 minutos más.', { m: 20 }),
      p('Sirve', 'Sirve caliente con cilantro por encima. Si quieres, rompe un huevo crudo en cada plato muy caliente y revuelve para que se cuaje, como en la changua. Acompaña con arepa.')
    ],
    'Dura 3 días en la nevera.');

  // ---------------------------------------------------------------- Hogao
  R(CO, 'Hogao colombiano', '🍅', 'hogao', [10, 15], 6, 'Fácil',
    'La salsa base de la cocina colombiana: tomate y cebolla larga sofritos. Va con arroz, fríjoles, arepas, papas y carnes.',
    'Se hace en un momento y mejora todo. Hazlo en cantidad y guárdalo.',
    HOGAO.concat([i(0.5, 'cdta', 'de comino')]),
    ['Sartén', 'Tabla y cuchillo', 'Cuchara de palo'],
    [
      p('Pica', 'Pica los tomates en cubos pequeños y la cebolla larga en rodajas finas. Pica el ajo muy fino.'),
      p('Sofríe la cebolla', 'Calienta el aceite a fuego medio y sofríe la cebolla con el ajo y el comino 3 minutos, hasta que esté suave.', { m: 3 }),
      p('Agrega el tomate', 'Echa el tomate y la sal. Cocina 10 minutos, moviendo de vez en cuando, hasta que se deshaga.', { m: 10, s: 'La salsa está espesa y brillante; el aceite empieza a asomar.', c: 'Aplasta el tomate con la cuchara para que suelte su jugo.' })
    ],
    'Dura 5 días en frasco tapado en la nevera.');

  // ---------------------------------------------------------------- Aji
  R(CO, 'Ají colombiano', '🌶️', 'aji', [10, 0], 6, 'Fácil',
    'La salsa fresca de la mesa colombiana: cilantro, cebolla, tomate, limón y picante. Se sirve con empanadas, sancocho y carnes.',
    'Se prepara sin cocinar. Pica todo muy fino: la textura es parte del plato.',
    [i(0.5, 'taza', 'de cilantro picado fino'), u(2, 'cebolla larga', 'cebollas largas'), u(1, 'tomate', 'tomates'), u(1, 'limón', 'limones'), u(1, 'ají picante (o al gusto)', 'ajíes picantes (o al gusto)'), i(2, 'cda', 'de agua'), sal(0.5)],
    ['Tabla y cuchillo', 'Tazón pequeño'],
    [
      p('Pica fino', 'Pica el cilantro, la cebolla larga y el tomate sin semillas en cuadritos pequeños. Pica el ají muy fino (con guantes si es muy picante).', { e: 'No te toques los ojos después de picar ají.' }),
      p('Mezcla', 'Pon todo en el tazón con el jugo del limón, el agua y la sal. Revuelve y deja reposar 10 minutos.', { m: 10, s: 'Huele fresco y el tomate ya soltó un poco de su jugo.' })
    ],
    'Dura 2 días en la nevera.');

  // ---------------------------------------------------------------- Bandeja paisa
  R(CO, 'Bandeja paisa', '🍽️', 'bandeja-paisa', [40, 150], 4, 'Difícil',
    'El plato más grande de Antioquia: fríjoles, arroz, carne molida, chicharrón, chorizo, huevo frito, plátano maduro, arepa y aguacate.',
    'Parece mucho, pero se organiza: <strong>los fríjoles se cocinan primero y largo</strong> y el resto se hace mientras tanto. Remójalos desde la noche anterior.',
    [i(2, 'taza', 'de fríjoles rojos (cargamanto)'), u(0.5, 'libra de costilla de cerdo', 'libras de costilla de cerdo'), u(1, 'plátano verde', 'plátanos verdes'), u(0.5, 'libra de carne molida', 'libras de carne molida'),
     u(0.5, 'libra de chicharrón (tocino de cerdo)', 'libras de chicharrón (tocino de cerdo)'), u(4, 'chorizo', 'chorizos'), u(4, 'huevo', 'huevos'), u(2, 'plátano maduro', 'plátanos maduros'),
     i(2, 'taza', 'de arroz blanco cocido'), u(4, 'arepa', 'arepas'), u(1, 'aguacate', 'aguacates'), u(2, 'tomate', 'tomates'), u(3, 'cebolla larga', 'cebollas largas'), ajo(3), sal(2), aceite(4)],
    ['Olla grande o a presión', 'Dos sartenes', 'Tabla y cuchillo', 'Platos grandes'],
    [
      p('Remoja y cocina los fríjoles', 'Desde la noche anterior, remoja los fríjoles en agua fría. Escúrrelos, ponlos en la olla con agua que los cubra 4 dedos, la costilla de cerdo, el plátano verde en trozos y media cebolla. Cocina tapado 90 minutos (40 en olla a presión).', { m: 90, s: 'El fríjol se aplasta fácil entre dos dedos.', e: 'No les agregues sal al inicio: se endurecen. La sal va al final.' }),
      p('Haz el hogao', 'En una sartén con 2 cucharadas de aceite sofríe la cebolla larga picada y el tomate picado con una pizca de sal 10 minutos, hasta formar una salsa espesa. Mezcla la mitad con los fríjoles.', { m: 10 }),
      p('Sazona los fríjoles', 'Agrega los fríjoles el hogao y la sal. Cocina 15 minutos más. Aplasta el plátano verde contra el fondo para que espese el caldo.', { m: 15 }),
      p('Prepara la carne', 'Sofríe la carne molida con ajo, sal y un poco del hogao que quedó, 10 minutos, hasta que seque.', { m: 10 }),
      p('Fríe el chicharrón y el chorizo', 'Corta el chicharrón en tiras y fríelo a fuego medio en su propia grasa hasta que esté dorado y crocante. Aparte, cocina los chorizos en una sartén con un poco de agua que se evapora, hasta que se doren.', { m: 15, s: 'El chicharrón se pone dorado y suena al golpearlo.', e: 'Tápalo parcialmente: salta grasa caliente.' }),
      p('Fríe los plátanos y los huevos', 'Corta el plátano maduro en tajadas y fríelo 2 minutos por lado hasta dorar. Fríe los huevos al gusto.', { m: 8 }),
      p('Sirve', 'En un plato grande pon el arroz, los fríjoles, la carne molida, el chicharrón, el chorizo, el plátano, un huevo, una arepa y medio aguacate. Se come con ají y hogao.')
    ],
    'Los fríjoles y la carne se guardan 3 días en la nevera. Chicharrón y huevo fresco, siempre al momento.');

  // ---------------------------------------------------------------- Calentado
  R(CO, 'Calentado paisa', '🍳', 'calentado', [5, 10], 2, 'Fácil',
    'El desayuno de siempre: arroz y fríjoles del día anterior recalentados con hogao, con huevo, arepa y aguacate.',
    'Funciona mejor con arroz del día anterior: sale más suelto y se dora mejor.',
    [i(1.5, 'taza', 'de arroz cocido (del día anterior)'), i(1, 'taza', 'de fríjoles cocidos con su caldo'), i(0.25, 'taza', 'de hogao'), u(2, 'huevo', 'huevos'), u(2, 'arepa', 'arepas'), i(0.5, '', 'aguacate'), aceite(1)],
    ['Sartén', 'Cuchara de palo'],
    [
      p('Calienta', 'En la sartén calienta el aceite a fuego medio. Agrega el hogao y cocina 1 minuto.', { m: 1 }),
      p('Mezcla', 'Agrega los fríjoles con un poco de caldo y el arroz. Revuelve 4 minutos, aplastando algunos fríjoles, hasta que quede seco y se pegue ligeramente en el fondo.', { m: 4, s: 'Se forma una costra dorada en el fondo.' }),
      p('Fríe el huevo', 'Aparte, fríe los huevos al gusto.'),
      p('Sirve', 'Sirve el calentado con huevo encima, arepa tibia y aguacate.')
    ],
    'Se come al momento.');

  // ---------------------------------------------------------------- Sobrebarriga
  R(CO, 'Sobrebarriga en salsa criolla', '🥩', 'sobrebarriga', [20, 120], 5, 'Media',
    'Sobrebarriga tierna cocida y luego dorada, bañada en salsa criolla de tomate y cebolla. Un clásico de Bogotá con papa y arroz.',
    'Se hace en dos tiempos: <strong>cocinarla hasta que ablande</strong> y luego dorarla. Si se cocina en olla a presión, quedan 45 minutos.',
    [u(1, 'kilo de sobrebarriga', 'kilos de sobrebarriga'), u(1, 'cebolla cabezona', 'cebollas cabezonas'), ajo(3), sal(2), i(1, 'cdta', 'de comino'), aceite(2)].concat(HOGAO),
    ['Olla (o a presión)', 'Sartén o parrilla', 'Tabla y cuchillo'],
    [
      p('Cocina la carne', 'Pon la sobrebarriga en la olla con la cebolla cabezona partida, el ajo, la sal, el comino y agua para cubrirla. Cocina 90 minutos a fuego bajo (45 en olla a presión).', { m: 90, s: 'Un tenedor entra y sale sin resistencia.' }),
      p('Haz la salsa criolla', 'Mientras tanto prepara el hogao: sofríe las cebollas largas con el ajo, agrega los tomates picados y la sal, y cocina 10 minutos hasta que espese. Agrega un poco del caldo de la carne.', { m: 10 }),
      p('Dora la carne', 'Saca la carne, sécala con papel y córtala en tajadas gruesas. En una sartén caliente con aceite dórala 3 minutos por lado.', { m: 6, s: 'Las tajadas quedan doradas por fuera y jugosas por dentro.' }),
      p('Sirve', 'Baña las tajadas con la salsa criolla y sirve con papa cocida y arroz blanco.')
    ],
    'Dura 3 días en la nevera. Guarda la carne y la salsa por separado.');

  // ---------------------------------------------------------------- Carne desmechada
  R(CO, 'Carne desmechada', '🥩', 'desmechada', [15, 100], 5, 'Fácil',
    'Falda de res cocida hasta deshacerse y sofrita en hogao. Sirve para arroz, arepas, papas rellenas y empanadas.',
    'Después de cocida, la carne se desmecha <strong>mientras está tibia</strong>: se separa mucho más fácil que fría.',
    [u(1, 'kilo de falda o pecho de res', 'kilos de falda o pecho de res'), u(1, 'cebolla cabezona', 'cebollas cabezonas'), ajo(3), sal(2), i(1, 'cdta', 'de comino')].concat(HOGAO),
    ['Olla', 'Sartén grande', 'Dos tenedores'],
    [
      p('Cocina la carne', 'Pon la carne en una olla con agua que la cubra, la cebolla cabezona, 2 dientes de ajo, la sal y el comino. Cocina 90 minutos a fuego bajo.', { m: 90, s: 'La carne se deshace al presionarla con un tenedor.' }),
      p('Desmecha', 'Saca la carne, déjala entibiar y sepárala en hebras con dos tenedores. Guarda una taza del caldo.', { c: 'Corta contra la fibra si quedan hebras muy largas.' }),
      p('Haz el hogao', 'Sofríe las cebollas largas con ajo, agrega los tomates picados y sal. Cocina 10 minutos hasta que espese.', { m: 10 }),
      p('Une', 'Agrega la carne al hogao con media taza del caldo. Cocina 10 minutos a fuego bajo hasta que el líquido se evapore.', { m: 10, s: 'La carne queda húmeda pero sin caldo suelto.' })
    ],
    'Dura 4 días en la nevera y 2 meses en el congelador.');

  // ---------------------------------------------------------------- Pollo sudado
  R(CO, 'Pollo sudado', '🍗', 'pollo-sudado', [15, 50], 4, 'Fácil',
    'Presas de pollo cocinadas al vapor de sus propios jugos con papa, tomate y cebolla. Suave, jugoso y sencillo.',
    'No lleva casi líquido: <strong>la verdura suelta el agua</strong> y cocina al pollo. Mantén la olla tapada.',
    [u(1, 'pollo en presas', 'pollos en presas'), u(1, 'libra de papa', 'libras de papa'), u(3, 'tomate', 'tomates'), u(1, 'cebolla cabezona', 'cebollas cabezonas'), u(3, 'cebolla larga', 'cebollas largas'), ajo(3), i(1, 'cdta', 'de comino'), sal(2), i(0.5, 'taza', 'de caldo o agua'), i(0.5, 'taza', 'de cilantro picado'), aceite(2)],
    ['Olla con tapa', 'Tabla y cuchillo', 'Cuchara'],
    [
      p('Adoba', 'Mezcla el pollo con 2 dientes de ajo machacados, el comino y una cucharadita de sal. Deja reposar 15 minutos.', { m: 15 }),
      p('Prepara las verduras', 'Corta la cebolla en aros, el tomate en rodajas y la cebolla larga en trozos. Pela la papa y córtala en rodajas gruesas.'),
      p('Arma por capas', 'En la olla pon aceite y arma capas: cebolla, tomate, papa y pollo. Termina con tomate y cebolla larga. Agrega el caldo y el resto de la sal.'),
      p('Cocina al vapor', 'Tapa y cocina a fuego bajo 45 minutos sin destapar mucho.', { m: 45, s: 'El pollo se separa del hueso y la papa está tierna con una salsa espesa.' }),
      p('Termina', 'Agrega el cilantro, mezcla suave y sirve con arroz blanco.')
    ],
    'Dura 3 días en la nevera.');

  // ---------------------------------------------------------------- Higado encebollado
  R(CO, 'Hígado encebollado', '🧅', 'higado', [15, 12], 3, 'Fácil',
    'Hígado de res en filetes salteado con abundante cebolla. Rápido, económico y tierno si no se pasa de cocción.',
    'El hígado se pone <strong>duro y amargo si se cocina de más</strong>. Quedan solo 2 a 3 minutos por lado.',
    [u(0.75, 'libra de hígado de res en filetes', 'libras de hígado de res en filetes'), u(2, 'cebolla cabezona', 'cebollas cabezonas'), u(2, 'tomate', 'tomates'), i(0.5, 'taza', 'de leche', 'Para remojar.'), ajo(2), sal(1), aceite(2), i(null, '', 'Arroz y papa cocida', 'Para acompañar.')],
    ['Sartén grande', 'Tabla y cuchillo'],
    [
      p('Remoja', 'Pon los filetes en la leche 15 minutos: le quita lo amargo. Escúrrelos y sécalos con papel.', { m: 15 }),
      p('Sofríe la cebolla', 'Corta la cebolla en aros y el tomate en rodajas. En sartén con aceite sofríe la cebolla 5 minutos con una pizca de sal hasta que esté suave. Pasa a un plato.', { m: 5 }),
      p('Sella el hígado', 'En la misma sartén bien caliente sella los filetes 2 a 3 minutos por lado, con el ajo machacado y la sal.', { m: 6, s: 'Por fuera dorado; por dentro apenas rosado.', e: 'Más tiempo lo endurece como suela.' }),
      p('Une', 'Regresa la cebolla y el tomate. Mezcla 1 minuto y sirve con arroz y papa.')
    ],
    'Mejor al momento. Se guarda 1 día en la nevera.');

  // ---------------------------------------------------------------- Chicharron
  R(CO, 'Chicharrón crocante', '🥓', 'chicharron', [10, 60], 4, 'Media',
    'Tocino de cerdo con cuero, cocido y luego frito hasta quedar dorado y crocante por fuera y suave por dentro.',
    'Se hace en dos tiempos: <strong>primero cocinar en agua</strong> para ablandar, luego freír. Seca muy bien el tocino: el agua hace saltar la grasa.',
    [u(1, 'libra de tocino de cerdo con cuero (panceta)', 'libras de tocino de cerdo con cuero (panceta)'), i(2, 'taza', 'de agua'), sal(2), ajo(2), i(1, 'cda', 'de limón (opcional)'), i(null, '', 'Aceite para freír', 'Si hace falta.')],
    ['Olla', 'Sartén profunda con tapa', 'Papel de cocina'],
    [
      p('Cocina en agua', 'Pon el tocino en una olla con el agua, la sal y el ajo. Cocina tapado 30 minutos a fuego medio hasta que el agua se evapore casi del todo.', { m: 30, s: 'El cuero está blando y la grasa transparente.' }),
      p('Seca y corta', 'Saca el tocino, sécalo muy bien con papel y córtalo en tiras o cuadros.', { e: 'Si queda húmedo, salta grasa al freír: sécalo muy bien.' }),
      p('Fríe', 'En sartén a fuego medio fríe el tocino en su propia grasa 20 a 25 minutos, volteando, hasta dorar. Tapa parcialmente con una tapa o malla.', { m: 22, s: 'Burbujea y se pone dorado oscuro; al golpearlo suena crocante.' }),
      p('Escurre', 'Pasa a un plato con papel de cocina para quitar el exceso de grasa y sirve de inmediato con limón.')
    ],
    'Pierde lo crocante al enfriar; recalienta en sartén seca.');

  // ---------------------------------------------------------------- Arroz atollado
  R(CO, 'Arroz atollado', '🍚', 'arroz-atollado', [30, 70], 6, 'Media',
    'Arroz caldoso del Valle del Cauca con pollo, costilla de cerdo, chorizo y papa. Jugoso, sabroso y para compartir.',
    'Se llama <strong>atollado</strong> porque queda húmedo, casi como una sopa espesa. Usa el doble de líquido que en un arroz normal.',
    [i(2, 'taza', 'de arroz'), u(1, 'presa de pollo (muslo y contramuslo)', 'presas de pollo (muslo y contramuslo)'), u(0.5, 'libra de costilla de cerdo', 'libras de costilla de cerdo'), u(2, 'chorizo', 'chorizos'), u(2, 'papa mediana', 'papas medianas'),
     u(3, 'tomate', 'tomates'), u(4, 'cebolla larga', 'cebollas largas'), ajo(3), i(5, 'taza', 'de agua o caldo'), sal(2), i(1, 'cdta', 'de comino'), i(0.5, 'taza', 'de arvejas'), aceite(3)],
    ['Olla ancha con tapa', 'Tabla y cuchillo', 'Cuchara de palo'],
    [
      p('Dora las carnes', 'En la olla con el aceite dora el pollo, la costilla y el chorizo cortado en rodajas, 8 minutos. Retira y reserva.', { m: 8 }),
      p('Haz el sofrito', 'En la misma olla sofríe la cebolla larga, el ajo y el tomate picados con el comino 8 minutos, hasta que forme una salsa.', { m: 8 }),
      p('Cocina las carnes', 'Regresa las carnes, agrega 5 tazas de agua y la sal. Tapa y cocina 30 minutos a fuego medio.', { m: 30, s: 'La costilla ya está casi blanda.' }),
      p('Agrega la papa y el arroz', 'Pela las papas y córtalas en trozos. Agrégalas junto con el arroz lavado y las arvejas. Cocina destapado 20 minutos, revolviendo de vez en cuando.', { m: 20, s: 'El arroz está blando y queda caldoso, como una sopa espesa.', e: 'Si se seca demasiado, agrega una taza de agua caliente.' }),
      p('Reposa y sirve', 'Apaga, tapa y deja reposar 5 minutos. Sirve en platos hondos.', { m: 5 })
    ],
    'Espesa mucho al enfriar; agrega agua al recalentar. Dura 3 días.');

  // ---------------------------------------------------------------- Arroz de coco
  R(CO, 'Arroz de coco costeño', '🥥', 'arroz-coco', [10, 40], 4, 'Media',
    'Arroz de la costa Caribe cocinado con leche de coco hasta quedar dulce y tostadito. Perfecto con pescado frito.',
    'Lo característico es la <strong>costra de coco tostada</strong> (el titoté). Se logra dejando que la leche de coco hierva hasta soltar aceite antes de agregar el arroz.',
    [i(2, 'taza', 'de arroz'), i(2, 'taza', 'de leche de coco espesa (de lata)'), i(1.5, 'taza', 'de agua'), i(2, 'cda', 'de azúcar'), sal(1), i(0.25, 'taza', 'de pasas (opcional)')],
    ['Olla con tapa', 'Cuchara de palo'],
    [
      p('Lava el arroz', 'Lava el arroz en un colador hasta que el agua salga casi clara.'),
      p('Hierve la leche de coco', 'En la olla pon la leche de coco, el agua, el azúcar y la sal. Lleva a hervor y cocina 10 minutos sin tapar, hasta que espese.', { m: 10, s: 'La leche suelta un poco de aceite en la superficie.' }),
      p('Agrega el arroz', 'Echa el arroz y las pasas. Cuando el líquido baje a la altura del arroz, baja el fuego al mínimo, tapa y cocina 18 minutos.', { m: 18, s: 'El arroz está suave y sin agua en el fondo.', e: 'No destapes ni revuelvas durante la cocción.' }),
      p('Reposa', 'Apaga y déjalo reposar tapado 5 minutos. Suelta con un tenedor y sirve.', { m: 5 })
    ],
    'Dura 3 días en la nevera.');

  // ---------------------------------------------------------------- Patacones
  R(CO, 'Patacones con hogao', '🍌', 'patacones', [10, 15], 4, 'Fácil',
    'Plátano verde frito dos veces: primero cocinado, luego aplastado y dorado hasta quedar crocante. Con hogao o queso.',
    'El truco es la <strong>doble fritura</strong>: la primera lo cocina por dentro; el aplastado lo aplana; la segunda lo deja crocante.',
    [u(2, 'plátano verde', 'plátanos verdes'), i(null, '', 'Aceite abundante para freír'), sal(0.5), i(0.5, 'taza', 'de hogao', 'Para servir.'), i(null, '', 'Agua con sal', 'Para remojar los trozos.')],
    ['Sartén honda', 'Cuchillo', 'Un vaso o tabla para aplastar', 'Papel de cocina'],
    [
      p('Pela y corta', 'Haz un corte a lo largo en la cáscara de cada plátano y pélalo con ayuda del cuchillo. Córtalo en trozos de 3 centímetros.', { c: 'Si se pega, moja el cuchillo con aceite.' }),
      p('Primera fritura', 'Calienta el aceite a fuego medio y fríe los trozos 4 minutos por lado hasta que estén dorados claro. Sácalos y escúrrelos.', { m: 8, s: 'Están doraditos pálidos y blandos por dentro.' }),
      p('Aplasta', 'Pon cada trozo sobre una tabla y aplástalo con el fondo de un vaso hasta que tenga 1 centímetro de grosor. Mójalos en agua con sal y sécalos.', { e: 'No los dejes mojados: el aceite salta.' }),
      p('Segunda fritura', 'Fríe de nuevo a fuego medio-alto 3 minutos por lado, hasta que estén dorados y crocantes.', { m: 6, s: 'Dorados y crocantes, suenan al golpear.' }),
      p('Sirve', 'Escurre sobre papel, ponles sal y sirve de inmediato con hogao encima.')
    ],
    'Se comen al momento: se ponen blandos al enfriarse.');

  // ---------------------------------------------------------------- Pescado frito
  R(CO, 'Pescado frito con arroz de coco y patacón', '🐟', 'pescado-frito', [20, 25], 2, 'Media',
    'El almuerzo de la costa: mojarra o tilapia frita entera, crocante por fuera, con arroz de coco, patacón y ensalada.',
    'El pescado debe estar <strong>seco y con cortes en la piel</strong> para que se fría parejo. Aceite bien caliente, sin moverlo antes de tiempo.',
    [u(2, 'mojarra o tilapia entera limpia', 'mojarras o tilapias enteras limpias'), u(2, 'limón', 'limones'), ajo(2), sal(1.5), i(0.5, 'taza', 'de harina de trigo (opcional)'), i(null, '', 'Aceite para freír'), i(2, 'taza', 'de arroz de coco cocido', 'Ver la receta.'), u(1, 'patacón (patacones)', 'patacones (varios)'), i(null, '', 'Ensalada de tomate y cebolla', 'Para acompañar.')],
    ['Sartén honda', 'Cuchillo', 'Papel de cocina'],
    [
      p('Adoba el pescado', 'Haz 3 cortes diagonales en cada lado del pescado. Frótalo con jugo de limón, ajo machacado y sal y déjalo 15 minutos.', { m: 15 }),
      p('Seca', 'Sécalo con papel de cocina, por dentro y por fuera. Pásalo por harina y sacude el exceso.', { e: 'Un pescado mojado salpica y se rompe en el aceite.' }),
      p('Fríe', 'Calienta mucho aceite (que cubra la mitad del pescado) a fuego medio-alto. Fríe cada pescado 6 a 7 minutos por lado sin moverlo.', { m: 14, s: 'La piel está dorada y crocante, la carne blanca se desprende fácil.' }),
      p('Escurre y sirve', 'Pasa sobre papel. Sirve con arroz de coco, patacones y ensalada con limón.')
    ],
    'Se come recién frito.');

  // ---------------------------------------------------------------- Papas chorreadas
  R(CO, 'Papas chorreadas', '🥔', 'papas-chorreadas', [10, 30], 4, 'Fácil',
    'Papas cocidas bañadas en salsa de tomate, cebolla y queso derretido. Un plato típico del altiplano cundiboyacense.',
    'La salsa es un hogao al que se le agrega queso al final. Usa <strong>papa criolla o pastusa</strong>.',
    [u(2, 'libra de papa criolla o pastusa', 'libras de papa criolla o pastusa'), u(2, 'tomate', 'tomates'), u(3, 'cebolla larga', 'cebollas largas'), i(1, 'taza', 'de queso costeño o campesino rallado'), i(0.5, 'taza', 'de leche'), aceite(1), sal(1)],
    ['Olla', 'Sartén', 'Tabla y cuchillo'],
    [
      p('Cocina las papas', 'Lava las papas y cocínalas con piel en agua con sal 20 minutos, hasta que estén blandas. Escúrrelas y pélalas si quieres.', { m: 20 }),
      p('Haz la salsa', 'Sofríe en aceite la cebolla larga picada y el tomate picado con una pizca de sal 8 minutos, hasta que estén suaves y se deshagan.', { m: 8 }),
      p('Agrega el queso', 'Baja el fuego y agrega la leche y el queso. Revuelve 2 a 3 minutos hasta que se derrita y quede una salsa cremosa.', { m: 3, s: 'La salsa está cremosa y ligeramente espesa.', e: 'No hiervas fuerte después de agregar el queso: se corta.' }),
      p('Sirve', 'Pon las papas en un plato y báñalas con la salsa caliente.')
    ],
    'Se come al momento; la salsa espesa al enfriarse.');
})();
