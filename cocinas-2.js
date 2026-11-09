/* ============================================================
   COCINAS DEL MUNDO (parte 2): argentina, brasileña, boliviana y venezolana
   ============================================================ */
(function () {
  var i = GEN.i, p = GEN.p, ajo = GEN.ajo, sal = GEN.sal, aceite = GEN.aceite, R = GEN.R;

  // ================================================================ ARGENTINA
  var AR = 'Cocina argentina';

  [
    { s: 'carne', ing: [i(400, 'g', 'de carne molida de res'), i(2, '', 'cebolla grande|cebollas grandes'), i(1, 'cdta', 'de comino'), i(1, 'cda', 'de paprika'), i(2, '', 'huevo duro|huevos duros'), i(0.25, 'taza', 'de aceitunas verdes')],
      rel: 'Sofríe la cebolla picada en 2 cucharadas de aceite, 8 minutos, hasta que esté transparente. Sube el fuego, agrega la carne y dórala 6 minutos. Agrega el comino, la paprika y sal. Deja enfriar por completo y mezcla el huevo duro picado y las aceitunas.' },
    { s: 'pollo', ing: [i(2, '', 'pechuga de pollo|pechugas de pollo'), i(1, '', 'cebolla|cebollas'), i(1, '', 'pimentón rojo|pimentones rojos'), i(1, 'cdta', 'de paprika')],
      rel: 'Cocina las pechugas en agua con sal 20 minutos y desméchalas. Sofríe la cebolla y el pimentón picados 8 minutos, agrega el pollo, la paprika, sal y 3 cucharadas del caldo. Deja enfriar por completo.' },
    { s: 'jamón y queso', ing: [i(200, 'g', 'de jamón en cubitos'), i(250, 'g', 'de queso mozzarella en cubitos')],
      rel: 'Mezcla el jamón y el queso en cubitos. No necesita cocción.' },
    { s: 'humita (maíz)', ing: [i(2, 'taza', 'de maíz tierno desgranado'), i(1, '', 'cebolla|cebollas'), i(1, 'cda', 'de harina'), i(0.5, 'taza', 'de leche'), i(0.75, 'taza', 'de queso rallado')],
      rel: 'Sofríe la cebolla picada 6 minutos. Agrega el maíz y la harina, revuelve 1 minuto y vierte la leche. Cocina 5 minutos hasta que espese, sala, deja enfriar y mezcla el queso.' }
  ].forEach(function (z) {
    R(AR, 'Empanadas argentinas de ' + z.s, '🥟', 'empanadas-arg', [40, 20], 6, 'Media',
      'Empanadas al horno, doradas y con el borde trenzado, rellenas de ' + z.s.replace(/ \(.*\)/, '') + '. Salen 12.',
      'Dos claves: el relleno debe estar <strong>completamente frío</strong> antes de armar (caliente rompe la masa) y el borde bien sellado para que no se abran. Se usan tapas (discos) de masa compradas.',
      [i(12, '', 'tapa para empanadas de horno|tapas para empanadas de horno')].concat(z.ing).concat([i(1, '', 'huevo para pintar|huevos para pintar'), aceite(2), sal(1)]),
      ['Sartén grande', 'Bandeja para horno', 'Papel para hornear', 'Brocha de cocina', 'Un platico con agua'],
      [
        p('Haz el relleno', z.rel, { e: 'Si lo usas tibio, la grasa derrite la masa y las empanadas se rompen.' }),
        p('Precalienta el horno', 'Enciende el horno a 200 °C y forra la bandeja con papel.'),
        p('Rellena', 'Pon una cucharada colmada de relleno en el centro de cada tapa, sin llegar a los bordes. Moja medio borde con el dedo.', { e: 'Con demasiado relleno no cierran o se revientan.' }),
        p('Cierra y haz el repulgue', 'Dobla en media luna y aprieta el borde. Para el repulgue, dobla una esquinita del borde hacia adentro y sigue plegando, una sobre otra, hasta el otro extremo. Si no te sale, aplasta el borde con un tenedor.', { s: 'Borde cerrado en toda su vuelta, sin relleno asomando.' }),
        p('Pinta', 'Acomoda las empanadas en la bandeja y píntalas con el huevo batido.', { c: 'El huevo es lo que les da el color dorado brillante.' }),
        p('Hornea', 'Hornea 18 a 20 minutos.', { m: 18, s: 'Doradas por encima y por debajo.' }),
        p('Sirve', 'Deja reposar 3 minutos: el relleno sale muy caliente.')
      ],
      'Duran 3 días en la nevera. Crudas y sin pintar se congelan muy bien; se hornean sin descongelar, con 5 minutos más.');
  });

  R(AR, 'Chimichurri argentino', '🌿', 'chimichurri', [10, 0], 8, 'Fácil',
    'La salsa del asado argentino: perejil, ajo, orégano, vinagre y aceite. Para carnes, chorizos y pan.',
    'Se pica <strong>a cuchillo</strong>, no en licuadora: debe quedar con textura, no como una crema. Mejora si reposa unas horas.',
    [i(1, 'taza', 'de perejil fresco picado fino'), ajo(4), i(1, 'cda', 'de orégano seco'), i(1, 'cdta', 'de ají molido'), i(0.5, 'taza', 'de aceite'), i(3, 'cda', 'de vinagre de vino'), i(2, 'cda', 'de agua tibia'), sal(1)],
    ['Frasco con tapa', 'Tabla y cuchillo afilado'],
    [
      p('Hidrata las especias', 'En el frasco mezcla el orégano, el ají molido y la sal con el agua tibia. Deja 5 minutos.', { m: 5, c: 'El agua tibia despierta el sabor de las especias secas.' }),
      p('Pica', 'Pica el perejil y el ajo lo más fino que puedas.'),
      p('Mezcla', 'Agrega al frasco el perejil, el ajo, el vinagre y el aceite. Tapa y agita.', { s: 'El aceite cubre todos los ingredientes.' }),
      p('Deja reposar', 'Déjalo mínimo 30 minutos antes de usar.', { m: 30 })
    ],
    'Dura 2 semanas en la nevera, siempre cubierto de aceite.');

  R(AR, 'Milanesa a la napolitana', '🥩', 'milanesa-napolitana', [25, 20], 4, 'Media',
    'Milanesa de res frita y luego gratinada con salsa de tomate, jamón y queso derretido.',
    'Es una milanesa "con techo": primero se fríe para que quede crujiente, y solo al final se le pone la salsa y el queso, pocos minutos, para que no se ablande. ' + GEN.HIGIENE,
    [i(4, '', 'filete delgado de res para milanesa|filetes delgados de res para milanesa'), i(2, '', 'huevo|huevos'), i(2, 'taza', 'de pan rallado'), ajo(1), i(1, 'taza', 'de salsa de tomate casera o triturado'), i(4, '', 'tajada de jamón|tajadas de jamón'), i(250, 'g', 'de queso mozzarella'), i(1, 'cdta', 'de orégano'), i(1, 'taza', 'de aceite para freír'), sal(1)],
    ['Sartén grande', 'Dos platos hondos', 'Bandeja para horno', 'Pinzas'],
    [
      p('Apana', 'Bate los huevos con el ajo rallado y la sal. Pasa cada filete por huevo y luego por pan rallado, presionando bien con la palma.', { c: 'La milanesa argentina no lleva harina: solo huevo y pan.' }),
      p('Fríe', 'Fríe en el aceite caliente a fuego medio, 2 minutos por lado. Escurre sobre papel.', { m: 4, s: 'Doradas y crujientes.' }),
      p('Precalienta el horno', 'Enciende el horno a 220 °C.'),
      p('Arma', 'Pon las milanesas en la bandeja. Cubre cada una con 2 cucharadas de salsa, una tajada de jamón, mozzarella y orégano.'),
      p('Gratina', 'Hornea 6 a 8 minutos.', { m: 7, s: 'Queso derretido y con algunas manchas doradas.' }),
      p('Sirve', 'Sirve de inmediato con papas fritas o puré.')
    ],
    'Dura 2 días en la nevera. Recalienta en horno.');

  R(AR, 'Provoleta a la plancha', '🧀', 'provoleta', [5, 6], 4, 'Fácil',
    'Una rodaja gruesa de queso provolone dorada por fuera y derretida por dentro, con orégano y ají. Entrada de todo asado.',
    'Para que no se derrita y se riegue: queso <strong>frío y seco por fuera</strong> y sartén muy caliente.',
    [i(1, '', 'rodaja de queso provolone de 2 cm de grosor|rodajas de queso provolone de 2 cm de grosor', 'Unos 250 g.'), i(1, 'cdta', 'de orégano seco'), i(0.5, 'cdta', 'de ají molido'), i(1, 'cdta', 'de aceite de oliva'), i(null, '', 'Pan para acompañar')],
    ['Sartén pequeña de hierro o antiadherente', 'Espátula'],
    [
      p('Seca el queso', 'Deja el queso destapado en la nevera unas horas (o al aire 1 hora) para que forme una costra seca.', { c: 'Esa costra es la que evita que se desparrame.' }),
      p('Calienta la sartén', 'Calienta la sartén a fuego alto 3 minutos.', { m: 3 }),
      p('Dora el primer lado', 'Pon el queso y no lo muevas durante 2 minutos.', { m: 2, s: 'Costra dorada oscura por debajo.' }),
      p('Voltea', 'Voltea con la espátula de un movimiento rápido. Espolvorea orégano y ají, y cocina 2 minutos más.', { m: 2, s: 'Dorado por los dos lados y blando al presionar.' }),
      p('Sirve en la sartén', 'Rocía el aceite y sirve de inmediato, con pan.', { e: 'En minutos se enfría y se endurece: se come ya.' })
    ],
    'No se guarda.');

  R(AR, 'Choripán', '🌭', 'choripan', [5, 25], 4, 'Fácil',
    'Chorizo asado, abierto en mariposa y servido en pan crujiente con chimichurri. La comida callejera argentina por excelencia.',
    'El chorizo se cocina <strong>a fuego medio y sin pincharlo</strong>: pinchado pierde el jugo y queda seco.',
    [i(4, '', 'chorizo parrillero|chorizos parrilleros'), i(4, '', 'pan tipo baguette pequeño|panes tipo baguette pequeños'), i(0.5, 'taza', 'de chimichurri')],
    ['Sartén pesada o parrilla', 'Pinzas', 'Cuchillo'],
    [
      p('Cocina los chorizos despacio', 'Pon los chorizos en la sartén a fuego medio, con 3 cucharadas de agua. Cocina 20 minutos, volteándolos cada 5.', { m: 20, s: 'Dorados parejos y firmes al apretar.', e: 'Con fuego alto se revientan y quedan crudos por dentro.' }),
      p('Ábrelos en mariposa', 'Córtalos a lo largo sin separar las mitades y pon el lado cortado hacia abajo 2 minutos.', { m: 2, s: 'Interior dorado, sin rosado.' }),
      p('Tuesta el pan', 'Abre los panes y tuéstalos por dentro en la misma sartén, 1 minuto.'),
      p('Arma', 'Pon un chorizo en cada pan y báñalo con chimichurri.')
    ],
    'Los chorizos cocidos duran 3 días en la nevera.');

  R(AR, 'Alfajores de maicena', '🍪', 'alfajores', [40, 10], 20, 'Media',
    'Dos galletas que se deshacen en la boca, unidas con dulce de leche y con coco en el borde. Salen unos 20.',
    'Llevan más <strong>maicena que harina</strong>: por eso son tan frágiles. La masa se trabaja poco y las galletas se hornean sin dorar.',
    [i(200, 'g', 'de mantequilla blanda'), i(0.75, 'taza', 'de azúcar'), i(3, '', 'yema de huevo|yemas de huevo'), i(2.5, 'taza', 'de fécula de maíz (maicena)'), i(1.5, 'taza', 'de harina de trigo'), i(2, 'cdta', 'de polvo de hornear'), i(1, 'cdta', 'de esencia de vainilla'), i(400, 'g', 'de dulce de leche (arequipe) espeso'), i(0.5, 'taza', 'de coco rallado')],
    ['Tazón grande', 'Rodillo', 'Cortador redondo de 5 cm (o un vaso pequeño)', 'Bandeja y papel para hornear'],
    [
      p('Bate mantequilla y azúcar', 'Bate la mantequilla con el azúcar hasta que quede cremosa. Agrega las yemas una por una y la vainilla.'),
      p('Agrega los secos', 'Agrega la maicena, la harina y el polvo de hornear. Une con las manos solo hasta formar una masa.', { s: 'Masa suave, lisa, que no se pega.', e: 'Si la amasas mucho, las galletas quedan duras.' }),
      p('Enfría', 'Envuélvela y déjala 20 minutos en la nevera. Enciende el horno a 170 °C.', { m: 20 }),
      p('Estira y corta', 'Estira la masa sobre la mesa enharinada hasta medio centímetro de grosor y corta círculos. Pásalos a la bandeja.'),
      p('Hornea sin dorar', 'Hornea 10 minutos.', { m: 10, s: 'Blancas por encima y apenas doradas por debajo.', e: 'Si se doran por encima, se pasaron y quedan secas.' }),
      p('Enfría y rellena', 'Déjalas enfriar por completo (calientes se rompen). Une de a dos con una cucharadita de dulce de leche y rueda el borde por el coco.')
    ],
    'En un frasco hermético duran 1 semana; al segundo día están más tiernos.');

  // ================================================================ BRASILEÑA
  var BR = 'Cocina brasileña';

  R(BR, 'Feijão (fríjoles negros brasileños)', '🫘', 'feijao', [10, 100], 6, 'Fácil',
    'Fríjoles negros caldosos, perfumados con ajo, laurel y tocineta. Con arroz blanco, son la base de la comida diaria en Brasil.',
    '<strong>Necesitan remojo desde la noche anterior.</strong> El sabor se lo da un sofrito de ajo que se agrega al final.',
    [i(2, 'taza', 'de fríjoles negros secos'), i(8, 'taza', 'de agua'), i(2, '', 'hoja de laurel|hojas de laurel'), i(100, 'g', 'de tocineta picada'), i(1, '', 'cebolla|cebollas'), ajo(4), sal(1.5)],
    ['Olla grande (o a presión)', 'Sartén', 'Cucharón'],
    [
      p('Remoja', 'Deja los fríjoles en agua desde la noche anterior. Bota esa agua y enjuágalos.'),
      p('Cocina', 'Ponlos en la olla con las 8 tazas de agua y el laurel. Cocina a fuego bajo, medio tapados, 1 hora y media (35 minutos en olla a presión).', { m: 90, s: 'Un grano se aplasta fácil entre los dedos.' }),
      p('Haz el sofrito', 'Dora la tocineta 5 minutos. Agrega la cebolla picada 4 minutos y el ajo picado 1 minuto.', { s: 'Ajo dorado claro, muy aromático.' }),
      p('Une y espesa', 'Echa un cucharón de fríjoles al sofrito, aplástalos con un tenedor y devuelve todo a la olla. Agrega la sal y cocina 10 minutos más.', { m: 10, s: 'Caldo oscuro y espeso.' }),
      p('Sirve', 'Saca el laurel y sirve sobre arroz blanco.')
    ],
    'Duran 4 días en la nevera y se congelan muy bien.');

  R(BR, 'Pão de queijo (pan de queso brasileño)', '🧀', 'pao-de-queijo', [20, 22], 6, 'Media',
    'Bolitas de almidón de yuca y queso: crujientes por fuera, elásticas y huecas por dentro. No llevan harina de trigo. Salen unas 25.',
    'El paso clave es <strong>escaldar</strong>: se vierte el líquido hirviendo sobre el almidón. Eso es lo que les da la textura elástica.',
    [i(500, 'g', 'de almidón de yuca'), i(1, 'taza', 'de leche'), i(0.5, 'taza', 'de aceite'), sal(1.5), i(2, '', 'huevo|huevos'), i(2, 'taza', 'de queso semiduro rallado', 'Parmesano mezclado con un queso tipo costeño o mozzarella seca.')],
    ['Tazón grande', 'Olla pequeña', 'Cuchara de palo', 'Bandeja y papel para hornear'],
    [
      p('Hierve el líquido', 'Pon a hervir la leche con el aceite y la sal.'),
      p('Escalda el almidón', 'Vierte el líquido hirviendo sobre el almidón y mezcla con cuchara de palo hasta que no quede polvo seco. Deja enfriar 10 minutos.', { m: 10, s: 'Masa grumosa y pegajosa, como engrudo: es normal.' }),
      p('Agrega huevos y queso', 'Agrega los huevos uno por uno, amasando con la mano, y luego el queso.', { s: 'Masa lisa, brillante y algo pegajosa.', e: 'Si agregas los huevos con la masa caliente, se cocinan.' }),
      p('Forma las bolitas', 'Enciende el horno a 190 °C. Con las manos untadas de aceite, forma bolitas del tamaño de una nuez y sepáralas 3 centímetros en la bandeja.'),
      p('Hornea', 'Hornea 20 a 25 minutos.', { m: 22, s: 'Infladas, doradas claras y firmes al tocarlas.' }),
      p('Sirve calientes', 'Se comen recién salidos, cuando el centro está elástico.')
    ],
    'Las bolitas crudas se congelan y se hornean sin descongelar, con 5 minutos más.');

  R(BR, 'Brigadeiros', '🍫', 'brigadeiro', [10, 12], 20, 'Fácil',
    'Bolitas de chocolate y leche condensada cubiertas de grageas. El dulce de todas las fiestas brasileñas. Salen unas 20.',
    'Solo 3 ingredientes, pero hay que <strong>revolver sin parar</strong> y reconocer el punto: cuando la mezcla se despega del fondo de la olla.',
    [i(1, '', 'lata de leche condensada (395 g)|latas de leche condensada (395 g)'), i(3, 'cda', 'de cocoa en polvo'), i(1, 'cda', 'de mantequilla', 'Y un poco más para las manos.'), i(0.5, 'taza', 'de grageas de chocolate')],
    ['Olla pequeña de fondo grueso', 'Espátula', 'Plato', 'Capacillos pequeños'],
    [
      p('Mezcla en frío', 'Pon en la olla la leche condensada, la cocoa y la mantequilla. Mezcla antes de prender el fuego.'),
      p('Cocina revolviendo', 'Cocina a fuego bajo, revolviendo sin parar y raspando el fondo, unos 10 minutos.', { m: 10, s: 'Al inclinar la olla, la mezcla se despega del fondo en un bloque. Al pasar la espátula, el camino tarda 3 segundos en cerrarse.', e: 'Si la sacas antes, no se podrán formar las bolitas. Si te pasas, quedan duras.' }),
      p('Enfría', 'Pasa la mezcla a un plato untado con mantequilla y deja enfriar 1 hora.', { m: 60 }),
      p('Forma las bolitas', 'Úntate las manos con mantequilla, toma una cucharadita de mezcla, hazla bolita y pásala por las grageas.')
    ],
    'Duran 3 días a temperatura ambiente y 1 semana en la nevera.');

  R(BR, 'Moqueca de pescado', '🐟', 'moqueca', [20, 25], 4, 'Media',
    'Guiso brasileño de pescado en leche de coco con tomate, pimentón y cilantro. Se cocina en capas y sin revolver.',
    'Usa un pescado <strong>firme</strong>, que no se deshaga. Se arma en capas y se cocina tapado. El color y aroma típicos los da el aceite de palma (dendê); si no lo consigues, se reemplaza con aceite y paprika.',
    [i(800, 'g', 'de pescado blanco firme en trozos grandes'), i(2, '', 'limón|limones'), ajo(3), i(1, '', 'cebolla grande|cebollas grandes'), i(2, '', 'tomate|tomates'), i(1, '', 'pimentón rojo|pimentones rojos'), i(1, '', 'pimentón verde|pimentones verdes'), i(400, 'ml', 'de leche de coco'), i(0.5, 'taza', 'de cilantro picado'), i(2, 'cda', 'de aceite de dendê', 'O 2 cucharadas de aceite con 1 cucharadita de paprika.'), sal(1.5)],
    ['Olla ancha y baja con tapa', 'Tazón', 'Tabla y cuchillo'],
    [
      p('Marina el pescado', 'Mezcla el pescado con el jugo de los limones, el ajo rallado y la sal. Deja 15 minutos.', { m: 15 }),
      p('Corta en aros', 'Corta la cebolla, los tomates y los pimentones en aros de medio centímetro.'),
      p('Arma las capas', 'En la olla fría pon la mitad de los aros, luego el pescado con su marinada y, encima, el resto de los aros y la mitad del cilantro.'),
      p('Agrega los líquidos', 'Vierte la leche de coco y el aceite de dendê por encima.'),
      p('Cocina tapado sin revolver', 'Tapa y cocina a fuego medio-bajo 20 minutos. Mueve la olla de lado a lado de vez en cuando.', { m: 20, s: 'Caldo anaranjado y pescado que se separa en láminas.', e: 'Si revuelves con cuchara, el pescado se desbarata.' }),
      p('Sirve', 'Termina con el resto del cilantro y sirve con arroz blanco.')
    ],
    'Dura 1 día en la nevera.');

  R(BR, 'Strogonoff de pollo', '🍛', 'strogonoff', [15, 20], 4, 'Fácil',
    'La versión brasileña del strogonoff: pollo en una salsa rosada y cremosa, servido con arroz y papas paja crujientes.',
    'En Brasil lleva <strong>salsa de tomate, mostaza y crema de leche</strong>. La crema entra al final y no debe hervir. ' + GEN.HIGIENE,
    [i(600, 'g', 'de pechuga de pollo en cubos'), i(1, '', 'cebolla|cebollas'), ajo(2), i(200, 'g', 'de champiñones en láminas'), i(3, 'cda', 'de salsa de tomate (kétchup)'), i(1, 'cda', 'de mostaza'), i(1, 'taza', 'de crema de leche'), i(1, 'cda', 'de mantequilla'), sal(1), i(null, '', 'Arroz blanco y papas paja para servir')],
    ['Sartén grande y honda', 'Cuchara de palo'],
    [
      p('Dora el pollo', 'Seca y sala el pollo. Dóralo en la mantequilla a fuego medio-alto, 6 minutos.', { m: 6, s: 'Dorado y sin rosado.' }),
      p('Agrega cebolla y champiñones', 'Agrega la cebolla picada y el ajo, 3 minutos. Luego los champiñones, 4 minutos más.', { m: 7 }),
      p('Agrega las salsas', 'Agrega la salsa de tomate y la mostaza, y mezcla 1 minuto.'),
      p('Termina con la crema', 'Baja el fuego al mínimo, agrega la crema y calienta 2 minutos sin que hierva.', { s: 'Salsa rosada, lisa y brillante.', e: 'Si hierve fuerte, la crema se corta.' }),
      p('Sirve', 'Sirve con arroz blanco y cubre con papas paja justo antes de comer.')
    ],
    'Dura 3 días en la nevera. Recalienta a fuego bajo.');

  R(BR, 'Pudim de leche condensada', '🍮', 'pudim', [20, 60], 8, 'Media',
    'Flan brasileño: denso, sedoso y bañado en caramelo. Se hace en licuadora y se cocina al baño maría.',
    'El baño maría y la temperatura moderada son lo que lo deja <strong>liso y sin huecos</strong>. Necesita 6 horas de nevera antes de desmoldar.',
    [i(1, 'taza', 'de azúcar', 'Para el caramelo.'), i(1, '', 'lata de leche condensada (395 g)|latas de leche condensada (395 g)'), i(2, 'taza', 'de leche'), i(3, '', 'huevo|huevos')],
    ['Molde con hueco en el centro (o molde de torta)', 'Licuadora', 'Bandeja honda para el baño maría', 'Papel aluminio'],
    [
      p('Haz el caramelo', 'Derrite el azúcar en una sartén a fuego medio, sin revolver (solo mueve la sartén), hasta que esté color ámbar. Viértelo en el molde y gíralo para cubrir el fondo.', { s: 'Color miel oscura.', e: 'El caramelo quema muchísimo: no lo toques ni lo pruebes. Si se pone café muy oscuro, amarga.' }),
      p('Licúa', 'Licúa la leche condensada, la leche y los huevos durante 1 minuto. Deja reposar 5 minutos para que baje la espuma.'),
      p('Vierte', 'Vierte la mezcla en el molde pasándola por un colador. Tapa con papel aluminio.'),
      p('Hornea al baño maría', 'Pon el molde dentro de la bandeja honda y llénala con agua caliente hasta la mitad de la altura del molde. Hornea a 170 °C durante 1 hora.', { m: 60, s: 'Firme en los bordes y el centro tiembla como gelatina.' }),
      p('Enfría', 'Deja enfriar y lleva a la nevera mínimo 6 horas.'),
      p('Desmolda', 'Pasa un cuchillo por los bordes, pon un plato hondo encima y voltea de un golpe.')
    ],
    'Dura 5 días en la nevera.');

  R(BR, 'Bolo de cenoura (torta de zanahoria brasileña)', '🥕', 'bolo-cenoura', [20, 40], 10, 'Fácil',
    'Torta de zanahoria de color naranja intenso, hecha en licuadora y cubierta con una capa de chocolate.',
    'A diferencia de otras tortas de zanahoria, aquí la zanahoria se <strong>licúa cruda</strong> con los huevos y el aceite: no se nota en la miga, solo en el color.',
    [i(3, '', 'zanahoria mediana|zanahorias medianas', 'Unos 300 g.'), i(3, '', 'huevo|huevos'), i(0.75, 'taza', 'de aceite'), i(1.5, 'taza', 'de azúcar'), i(2.5, 'taza', 'de harina de trigo'), i(1, 'cda', 'de polvo de hornear'), i(3, 'cda', 'de cocoa en polvo'), i(3, 'cda', 'de azúcar para la cobertura'), i(1, 'cda', 'de mantequilla'), i(4, 'cda', 'de leche')],
    ['Licuadora', 'Tazón grande', 'Molde de 22 cm', 'Olla pequeña', 'Un palillo'],
    [
      p('Prepara horno y molde', 'Enciende el horno a 180 °C. Unta el molde con mantequilla y harina.'),
      p('Licúa', 'Licúa las zanahorias peladas y en trozos con los huevos, el aceite y el azúcar, 2 minutos.', { m: 2, s: 'Líquido naranja liso, sin trocitos.' }),
      p('Agrega los secos', 'Vierte en un tazón y agrega la harina y el polvo de hornear. Mezcla con batidor solo hasta que no haya grumos.'),
      p('Hornea', 'Vierte en el molde y hornea 40 minutos.', { m: 40, s: 'Un palillo en el centro sale limpio.' }),
      p('Haz la cobertura', 'Hierve la cocoa, el azúcar, la mantequilla y la leche 2 minutos, revolviendo.', { s: 'Salsa brillante que cubre la cuchara.' }),
      p('Cubre', 'Vierte la cobertura caliente sobre la torta tibia. Al enfriar forma una capa firme.')
    ],
    'Dura 4 días tapada, a temperatura ambiente.');

  R(BR, 'Limonada suiza brasileña', '🍋', 'limonada-suiza', [8, 0], 4, 'Fácil',
    'Limonada cremosa hecha con limones enteros y leche condensada, licuada con hielo.',
    'Se licúa el limón <strong>con cáscara pero solo unos segundos</strong>: si te pasas, la cáscara amarga toda la bebida. Y se toma al momento.',
    [i(3, '', 'limón de cáscara delgada|limones de cáscara delgada'), i(4, 'taza', 'de agua fría'), i(0.5, 'taza', 'de leche condensada'), i(2, 'taza', 'de hielo')],
    ['Licuadora', 'Colador', 'Jarra'],
    [
      p('Corta los limones', 'Lava muy bien los limones, córtales las puntas y pártelos en cuatro. Quita la parte blanca del centro y las semillas.'),
      p('Licúa solo unos segundos', 'Licúa los limones con el agua a pulsos, máximo 10 segundos en total.', { e: 'Más tiempo y queda amarga sin remedio.' }),
      p('Cuela', 'Cuela de inmediato y bota las cáscaras.'),
      p('Licúa con la leche condensada', 'Devuelve el jugo a la licuadora con la leche condensada y el hielo, y licúa 30 segundos.', { s: 'Blanca, espumosa y cremosa.' }),
      p('Sirve ya', 'Sirve de inmediato: con los minutos se pone amarga.')
    ],
    'No se guarda.');

  // ================================================================ BOLIVIANA
  var BO = 'Cocina boliviana';

  R(BO, 'Silpancho', '🍽️', 'silpancho', [30, 25], 4, 'Media',
    'Plato de Cochabamba: una lámina enorme y finísima de carne apanada sobre arroz y papas doradas, coronada con huevo frito y ensalada fresca.',
    'La carne se golpea <strong>con el pan molido</strong> hasta dejarla del tamaño del plato y casi transparente: el pan se incrusta en la carne. ' + GEN.HIGIENE,
    [i(4, '', 'filete de res sin grasa de unos 120 g|filetes de res sin grasa de unos 120 g'), i(2, 'taza', 'de pan molido'), i(4, '', 'papa|papas'), i(3, 'taza', 'de arroz blanco cocido'), i(4, '', 'huevo|huevos'), i(2, '', 'tomate|tomates'), i(1, '', 'cebolla|cebollas'), i(1, '', 'locoto o ají|locotos o ajíes'), ajo(1), i(1, 'taza', 'de aceite para freír'), sal(1.5)],
    ['Mazo o rodillo', 'Bolsa plástica o tabla', 'Sartén grande', 'Olla'],
    [
      p('Cocina las papas', 'Hierve las papas enteras 20 minutos. Pélalas y córtalas en rodajas de 1 centímetro.', { m: 20 }),
      p('Aplana la carne con el pan', 'Sazona cada filete con sal y ajo. Ponlo sobre una capa de pan molido, cúbrelo con más pan y golpéalo con el mazo, del centro hacia afuera, hasta dejarlo muy delgado y grande.', { s: 'Lámina de 2 o 3 milímetros, con el pan pegado por ambos lados.' }),
      p('Haz la ensalada', 'Pica el tomate, la cebolla y el locoto en cubitos. Mezcla con sal y unas gotas de aceite.'),
      p('Dora las papas', 'Fríe las rodajas de papa en un poco de aceite hasta dorarlas por ambos lados.'),
      p('Fríe la carne', 'Fríe cada lámina en aceite caliente, 1 minuto por lado.', { m: 2, s: 'Dorada y crujiente. Es tan delgada que se cocina enseguida.' }),
      p('Fríe los huevos y arma', 'Fríe los huevos dejando la yema blanda. En cada plato: arroz, papas, la carne encima, el huevo y la ensalada.')
    ],
    'Se come recién hecho.');

  R(BO, 'Pique macho', '🥩', 'pique-macho', [25, 25], 4, 'Media',
    'Montaña de carne de res y salchicha en su jugo, sobre papas fritas, con tomate, cebolla, locoto y huevo duro. Para compartir.',
    'Es un plato abundante y picante. La carne se saltea <strong>a fuego alto</strong> y al final suelta un jugo que moja las papas. ' + GEN.HIGIENE,
    [i(600, 'g', 'de carne de res tierna en cubos de 2 cm'), i(4, '', 'salchicha|salchichas'), i(5, '', 'papa|papas'), i(2, '', 'cebolla|cebollas'), i(2, '', 'tomate|tomates'), i(2, '', 'locoto o ají|locotos o ajíes'), ajo(3), i(1, 'cdta', 'de comino'), i(0.5, 'taza', 'de cerveza o caldo'), i(2, 'cda', 'de salsa de soya'), i(2, '', 'huevo duro|huevos duros'), i(2, 'taza', 'de aceite para freír'), sal(1)],
    ['Sartén grande y honda', 'Olla o sartén para freír', 'Papel de cocina'],
    [
      p('Fríe las papas', 'Corta las papas en bastones, sécalas y fríelas en el aceite caliente 8 a 10 minutos, hasta dorar. Escurre y sala.', { m: 9 }),
      p('Sazona la carne', 'Mezcla la carne con el ajo picado, el comino y la sal.'),
      p('Saltea la carne', 'En la sartén muy caliente, con 2 cucharadas de aceite, dora la carne en dos tandas, 3 minutos cada una.', { s: 'Dorada por fuera y jugosa.' }),
      p('Agrega salchicha y líquidos', 'Devuelve toda la carne, agrega las salchichas en rodajas, la cerveza y la soya. Cocina 4 minutos.', { m: 4, s: 'Queda un jugo oscuro en el fondo.' }),
      p('Agrega las verduras al final', 'Agrega la cebolla en plumas gruesas, el tomate en gajos y el locoto en tiras. Saltea solo 2 minutos.', { s: 'Verduras calientes pero crujientes.' }),
      p('Arma', 'En una fuente pon las papas, vuelca la carne con su jugo encima y decora con el huevo duro en cuartos.')
    ],
    'Se come recién hecho; las papas se ablandan rápido.');

  R(BO, 'Sopa de maní', '🥜', 'sopa-mani', [20, 60], 6, 'Media',
    'Sopa cremosa y blanca de maní molido, con carne, papa y verduras, servida con papas fritas finitas encima.',
    'Se usa maní <strong>crudo y sin sal</strong>, licuado. Debe hervir un buen rato: el maní crudo mal cocido sabe amargo y cae pesado.',
    [i(1, 'taza', 'de maní crudo pelado'), i(500, 'g', 'de costilla de res o pollo con hueso'), i(8, 'taza', 'de agua'), i(1, '', 'cebolla|cebollas'), i(1, '', 'zanahoria|zanahorias'), i(0.5, 'taza', 'de arvejas'), i(4, '', 'papa|papas'), ajo(2), i(0.5, 'cdta', 'de comino'), aceite(2), sal(2), i(1, 'taza', 'de papas fritas en tiritas (papas paja)'), i(2, 'cda', 'de perejil picado')],
    ['Olla grande', 'Licuadora', 'Sartén'],
    [
      p('Remoja y licúa el maní', 'Remoja el maní 15 minutos en agua caliente. Escúrrelo y licúalo con 2 tazas de agua hasta que quede una leche lisa.', { m: 15 }),
      p('Haz el caldo', 'Hierve la carne en las otras 6 tazas de agua con la sal, quitando la espuma. Cocina 20 minutos.', { m: 20 }),
      p('Haz el sofrito', 'Sofríe la cebolla y la zanahoria picadas finas con el ajo y el comino, 6 minutos. Agrégalo a la olla.'),
      p('Agrega el maní', 'Vierte el maní licuado y cocina a fuego bajo 30 minutos, revolviendo seguido.', { m: 30, s: 'Caldo blanco y cremoso; ya no huele a maní crudo.', e: 'Se pega y se derrama con facilidad: fuego bajo y revolver el fondo.' }),
      p('Agrega papas y arvejas', 'Agrega las papas en cuartos y las arvejas. Cocina 15 minutos más.', { m: 15 }),
      p('Sirve', 'Sirve con las papas paja y el perejil por encima.')
    ],
    'Dura 3 días en la nevera. Espesa al enfriar: agrega agua al recalentar.');

  R(BO, 'Majadito', '🍚', 'majadito', [15, 35], 4, 'Fácil',
    'Arroz del oriente boliviano, de color anaranjado, con carne desmechada, servido con huevo frito y plátano frito.',
    'Lo tradicional es con <strong>charque</strong> (carne seca). Esta versión usa carne cocida y desmechada, más fácil de conseguir. El color lo da el urucú (achiote).',
    [i(400, 'g', 'de carne de res para desmechar, ya cocida', 'O charque remojado.'), i(2, 'taza', 'de arroz'), i(4.5, 'taza', 'de caldo de la carne o agua'), i(1, '', 'cebolla|cebollas'), i(1, '', 'tomate|tomates'), ajo(2), i(1, 'cdta', 'de achiote (urucú) o paprika'), i(3, 'cda', 'de aceite'), sal(1.5), i(4, '', 'huevo|huevos'), i(2, '', 'plátano maduro|plátanos maduros')],
    ['Olla con tapa', 'Sartén', 'Dos tenedores'],
    [
      p('Desmecha y dora la carne', 'Desmecha la carne en hilos. Dórala en el aceite a fuego medio-alto 5 minutos, hasta que esté algo crujiente.', { m: 5 }),
      p('Haz el sofrito', 'Agrega la cebolla picada, el ajo y el achiote, 4 minutos. Luego el tomate picado, 3 minutos.', { s: 'Sofrito rojizo y brillante.' }),
      p('Agrega arroz y caldo', 'Agrega el arroz, mezcla 1 minuto y vierte el caldo caliente con la sal.'),
      p('Cocina', 'Cuando hierva, baja el fuego, tapa y cocina 20 minutos.', { m: 20, s: 'Arroz blando y húmedo: el majadito queda más jugoso que un arroz seco.' }),
      p('Fríe huevo y plátano', 'Fríe los plátanos en rodajas diagonales hasta dorar, y los huevos con la yema blanda.'),
      p('Sirve', 'Sirve el arroz con un huevo encima y el plátano al lado.')
    ],
    'Dura 3 días en la nevera.');

  R(BO, 'Cuñapé', '🧀', 'cunape', [15, 15], 6, 'Fácil',
    'Panecillos de queso y almidón de yuca del oriente boliviano. Crujientes por fuera y elásticos por dentro. Salen unos 20.',
    'Llevan <strong>más queso que almidón</strong>. La masa se une con muy poca leche: debe quedar firme para que no se aplasten en el horno.',
    [i(2, 'taza', 'de almidón de yuca'), i(3, 'taza', 'de queso fresco salado, rallado'), i(1, '', 'huevo|huevos'), i(4, 'cda', 'de leche', 'Solo la necesaria.'), i(1, 'cdta', 'de polvo de hornear')],
    ['Tazón grande', 'Bandeja y papel para hornear'],
    [
      p('Precalienta el horno', 'Enciende el horno a 220 °C: los cuñapés necesitan calor fuerte.'),
      p('Mezcla', 'Mezcla el almidón, el queso y el polvo de hornear. Agrega el huevo y amasa.'),
      p('Ajusta con leche', 'Agrega la leche de a cucharadas, amasando, solo hasta que la masa se una.', { s: 'Masa firme, que no se pega y no se agrieta al formar una bola.', e: 'Con mucha leche se aplastan como galletas.' }),
      p('Forma', 'Haz bolitas del tamaño de una nuez grande y hunde la base con el dedo. Ponlas en la bandeja separadas.'),
      p('Hornea', 'Hornea 15 minutos.', { m: 15, s: 'Inflados y dorados.' }),
      p('Sirve calientes', 'Se comen recién horneados, con café.')
    ],
    'Al enfriar se endurecen. Se pueden congelar crudos.');

  R(BO, 'Llajua', '🌶️', 'llajua', [10, 0], 6, 'Fácil',
    'La salsa picante de la mesa boliviana: tomate y locoto molidos con una hierba fresca. Acompaña todo.',
    'Tradicionalmente se muele en batán de piedra. En licuadora, hazlo <strong>a pulsos</strong> para que quede con textura y no como jugo.',
    [i(4, '', 'tomate maduro|tomates maduros'), i(2, '', 'locoto (o ají rojo fresco)|locotos (o ajíes rojos frescos)'), i(0.25, 'taza', 'de quirquiña o cilantro'), sal(1)],
    ['Licuadora o mortero', 'Tazón'],
    [
      p('Prepara el ají', 'Abre los locotos y quita semillas y venas si la quieres más suave.', { e: 'Lávate las manos después y no te toques los ojos.' }),
      p('Muele a pulsos', 'Licúa los tomates en trozos, el locoto y la sal con pulsos cortos, 5 o 6 veces.', { s: 'Salsa gruesa, con trocitos.' }),
      p('Agrega la hierba', 'Agrega la quirquiña o el cilantro picado y mezcla con cuchara.'),
      p('Prueba', 'Corrige la sal. Sirve fresca.')
    ],
    'Se hace para el día: al día siguiente pierde frescura.');

  R(BO, 'Picante de pollo', '🍗', 'picante-pollo', [20, 50], 4, 'Media',
    'Presas de pollo en una salsa espesa y roja de ají colorado, con papa, servidas con arroz y ensalada.',
    'El ají colorado se vende en vaina seca o molido. Si no lo consigues, mezcla <strong>paprika con un poco de ají picante</strong>. Se fríe antes de agregar el líquido para que no sepa a crudo. ' + GEN.HIGIENE,
    [i(8, '', 'presa de pollo|presas de pollo'), i(3, 'cda', 'de ají colorado molido', 'O 2 de paprika y 1 de ají picante.'), i(2, '', 'cebolla|cebollas'), ajo(3), i(1, 'cdta', 'de comino'), i(0.5, 'cdta', 'de orégano'), i(0.5, 'taza', 'de arvejas'), i(3, 'taza', 'de agua o caldo'), i(4, '', 'papa|papas'), i(3, 'cda', 'de aceite'), sal(1.5)],
    ['Olla grande con tapa', 'Olla para las papas'],
    [
      p('Dora el pollo', 'Sala las presas y dóralas en el aceite, 4 minutos por lado. Sácalas.', { m: 8 }),
      p('Sofríe', 'En la misma olla sofríe la cebolla picada fina 6 minutos. Agrega el ajo, el comino y el orégano.'),
      p('Fríe el ají', 'Agrega el ají colorado y revuelve 2 minutos a fuego bajo.', { m: 2, s: 'El aceite se tiñe de rojo y huele tostado.', e: 'Si se quema, amarga.' }),
      p('Cocina el pollo', 'Devuelve el pollo, agrega el agua y las arvejas, tapa y cocina a fuego bajo 35 minutos.', { m: 35, s: 'Pollo tierno y salsa espesa.' }),
      p('Cocina las papas', 'Mientras tanto, hierve las papas peladas en agua con sal, 20 minutos.'),
      p('Sirve', 'Sirve el pollo con su salsa sobre las papas, con arroz blanco.')
    ],
    'Dura 3 días en la nevera.');

  // ================================================================ VENEZOLANA
  var VE = 'Cocina venezolana';
  var AREPA_ING = [i(2, 'taza', 'de harina de maíz precocida'), i(2.5, 'taza', 'de agua tibia'), sal(1), aceite(1)];
  function pasosArepa() {
    return [
      p('Haz la masa', 'Disuelve la sal en el agua tibia. Agrega la harina en forma de lluvia, mezclando con la mano, y amasa 2 minutos. Deja reposar 5 minutos.', { m: 5, s: 'Masa lisa: una bolita se aplasta sin que el borde se agriete.', c: '¿Se agrieta? Una cucharada de agua. ¿Se pega? Una de harina.' }),
      p('Forma las arepas', 'Divide en 6 bolas y aplástalas entre las palmas hasta formar discos de 1,5 centímetros de grosor. Alisa el borde con el dedo mojado.'),
      p('Asa', 'Asa en una plancha o sartén untada con el aceite, a fuego medio, 6 minutos por lado.', { m: 12, s: 'Costra dorada, y al golpearla suena hueca.', e: 'Con fuego alto quedan crudas por dentro.' })
    ];
  }

  [
    { s: 'reina pepiada', foto: 'arepa-reina', ing: [i(2, '', 'pechuga de pollo|pechugas de pollo'), i(2, '', 'aguacate maduro|aguacates maduros'), i(3, 'cda', 'de mayonesa'), i(1, '', 'limón|limones'), i(2, 'cda', 'de cilantro picado')],
      rel: 'Cocina las pechugas en agua con sal 20 minutos y desméchalas. Aplasta un aguacate con el limón y la mayonesa, mezcla con el pollo y el cilantro, y agrega el otro aguacate en cubos. Corrige la sal.', desc: 'pollo desmechado con aguacate y mayonesa' },
    { s: 'dominó', foto: 'arepa-reina', ing: [i(2, 'taza', 'de caraotas negras guisadas'), i(1.5, 'taza', 'de queso blanco duro rallado')],
      rel: 'Calienta las caraotas negras (mira la receta de Caraotas negras) hasta que estén espesas, sin mucho caldo. Ralla el queso.', desc: 'caraotas negras y queso blanco: negro y blanco, como una ficha de dominó' },
    { s: 'pelúa', foto: 'arepa-reina', ing: [i(2, 'taza', 'de carne mechada'), i(1.5, 'taza', 'de queso amarillo rallado')],
      rel: 'Calienta la carne mechada (mira la receta de Carne mechada) y ralla el queso amarillo en tiras largas.', desc: 'carne mechada y queso amarillo rallado' },
    { s: 'pabellón', foto: 'arepa-reina', ing: [i(1.5, 'taza', 'de carne mechada'), i(1, 'taza', 'de caraotas negras guisadas'), i(1, '', 'plátano maduro|plátanos maduros'), i(0.5, 'taza', 'de queso blanco rallado')],
      rel: 'Calienta la carne mechada y las caraotas. Corta el plátano en tajadas diagonales y fríelas hasta dorar.', desc: 'carne mechada, caraotas, tajadas y queso: el plato nacional dentro de una arepa' },
    { s: 'perico', foto: 'arepa-reina', ing: [i(5, '', 'huevo|huevos'), i(2, '', 'tomate|tomates'), i(1, '', 'cebolla|cebollas'), i(1, 'cda', 'de mantequilla')],
      rel: 'Sofríe la cebolla y el tomate picados en la mantequilla 5 minutos, hasta que el tomate pierda el agua. Agrega los huevos batidos con sal y revuelve a fuego bajo hasta que cuajen, todavía cremosos.', desc: 'huevos revueltos con tomate y cebolla' }
  ].forEach(function (z) {
    R(VE, 'Arepa ' + z.s, '🫓', z.foto, [20, 25], 3, 'Fácil',
      'Arepa venezolana asada, abierta y rellena hasta el tope de ' + z.desc + '. Salen 6.',
      'La arepa venezolana es <strong>gruesa</strong> y se abre como un bolsillo para rellenarla. Usa harina de maíz precocida blanca.',
      AREPA_ING.concat(z.ing),
      ['Tazón grande', 'Plancha o sartén pesada', 'Cuchillo', 'Sartén u olla para el relleno'],
      pasosArepa().concat([
        p('Prepara el relleno', z.rel),
        p('Abre y rellena', 'Abre cada arepa caliente por un costado con un cuchillo, sin llegar al otro lado. Saca un poco de la masa del centro si quieres más espacio y rellena con generosidad.', { e: 'Fría, la arepa se quiebra al abrirla.' }),
        p('Sirve', 'Se comen de inmediato, con la mano y con servilletas.')
      ]),
      'Las arepas asadas duran 2 días en la nevera; recaliéntalas en plancha o tostadora. El relleno se guarda aparte.');
  });

  R(VE, 'Carne mechada', '🥩', 'carne-mechada', [20, 150], 6, 'Media',
    'Carne de res cocida hasta deshacerse, desmechada en hilos y guisada en un sofrito de tomate, cebolla y pimentón.',
    'Se usa <strong>falda de res</strong>, un corte de fibras largas que se desmecha en hilos. Necesita tiempo: primero se cuece y luego se guisa. ' + GEN.HIGIENE,
    [i(800, 'g', 'de falda de res'), i(2, '', 'cebolla|cebollas'), i(1, '', 'pimentón rojo|pimentones rojos'), i(3, '', 'tomate maduro|tomates maduros'), ajo(4), i(1, 'cdta', 'de comino'), i(1, 'cda', 'de salsa inglesa'), i(3, 'cda', 'de aceite'), sal(2)],
    ['Olla grande (o a presión)', 'Sartén grande y honda', 'Dos tenedores'],
    [
      p('Cuece la carne', 'Pon la carne en una olla con agua que la cubra, media cebolla y 1 cucharadita de sal. Cocina a fuego bajo 2 horas (45 minutos en olla a presión).', { m: 120, s: 'Al pincharla con un tenedor, se deshace.' }),
      p('Desmecha', 'Saca la carne, guarda 1 taza y media del caldo, y cuando no queme desméchala con dos tenedores, siguiendo las fibras.', { c: 'Tibia se desmecha mucho más fácil que fría.' }),
      p('Haz el sofrito', 'Sofríe la cebolla y el pimentón en tiras delgadas 6 minutos. Agrega el ajo y el comino, y luego el tomate picado, 5 minutos.', { m: 11 }),
      p('Guisa', 'Agrega la carne, la salsa inglesa, el caldo y el resto de la sal. Cocina a fuego bajo 20 minutos.', { m: 20, s: 'Jugosa, con la salsa pegada a los hilos, sin caldo suelto.' }),
      p('Sirve', 'Sirve con arroz, caraotas y tajadas, o como relleno de arepas.')
    ],
    'Dura 4 días en la nevera y se congela muy bien.');

  R(VE, 'Caraotas negras', '🫘', 'caraotas', [10, 110], 6, 'Fácil',
    'Fríjoles negros al estilo venezolano: espesos, con un sofrito de cebolla y ají dulce y un toque de papelón.',
    '<strong>Necesitan remojo desde la noche anterior.</strong> El toque dulce de papelón (panela) es típico; puedes omitirlo si las prefieres saladas.',
    [i(2, 'taza', 'de caraotas (fríjoles) negras secas'), i(8, 'taza', 'de agua'), i(1, '', 'cebolla|cebollas'), i(1, '', 'pimentón o 3 ajíes dulces'), ajo(3), i(1, 'cdta', 'de comino'), i(1, 'cda', 'de papelón (panela) rallado'), i(3, 'cda', 'de aceite'), sal(1.5)],
    ['Olla grande (o a presión)', 'Sartén'],
    [
      p('Remoja', 'Deja las caraotas en agua toda la noche. Bota el agua y enjuaga.'),
      p('Cocina', 'Cocínalas en las 8 tazas de agua, a fuego bajo y medio tapadas, 1 hora y media (35 minutos en olla a presión).', { m: 90, s: 'Blandas y enteras.' }),
      p('Haz el sofrito', 'Sofríe la cebolla y el pimentón picados finos 6 minutos; agrega el ajo y el comino 1 minuto.'),
      p('Une', 'Agrega el sofrito, la sal y el papelón a la olla. Cocina 15 minutos más, destapadas.', { m: 15, s: 'Caldo oscuro y espeso.' }),
      p('Sirve', 'Sirve con arroz o como relleno de arepas.')
    ],
    'Duran 4 días en la nevera.');

  R(VE, 'Pabellón criollo', '🍽️', 'pabellon', [15, 20], 4, 'Media',
    'El plato nacional de Venezuela: arroz blanco, carne mechada, caraotas negras y tajadas de plátano maduro, todo en el mismo plato.',
    'Es un plato de <strong>cuatro preparaciones</strong>. La carne mechada y las caraotas se hacen con anticipación (mira sus recetas); aquí se arma el plato y se fríen las tajadas.',
    [i(3, 'taza', 'de carne mechada'), i(3, 'taza', 'de caraotas negras guisadas'), i(4, 'taza', 'de arroz blanco cocido'), i(2, '', 'plátano muy maduro|plátanos muy maduros'), i(0.5, 'taza', 'de aceite'), i(0.5, 'taza', 'de queso blanco rallado')],
    ['Sartén', 'Dos ollas pequeñas', 'Papel de cocina'],
    [
      p('Calienta la carne y las caraotas', 'Calienta por separado la carne mechada y las caraotas, a fuego bajo, con un chorrito de agua si están secas.'),
      p('Corta el plátano', 'Pela los plátanos y córtalos en diagonal, en tajadas de 1 centímetro.', { c: 'El plátano debe tener la cáscara casi negra: así queda dulce y blando.' }),
      p('Fríe las tajadas', 'Fríe las tajadas en el aceite a fuego medio, 2 minutos por lado. Escurre sobre papel.', { m: 4, s: 'Doradas oscuras y caramelizadas en los bordes.', e: 'Con fuego alto se queman por fuera antes de ablandarse.' }),
      p('Arma el plato', 'Sirve en cada plato una porción de arroz, una de carne y una de caraotas, una al lado de la otra, con las tajadas encima.'),
      p('Termina', 'Espolvorea queso rallado sobre las caraotas. Con un huevo frito encima se llama "pabellón a caballo".')
    ],
    'Cada parte se guarda por separado, hasta 4 días.');

  R(VE, 'Tajadas de plátano maduro', '🍌', 'tajadas', [5, 8], 4, 'Fácil',
    'Tajadas de plátano maduro fritas: doradas, blandas y dulces. Acompañan casi cualquier plato.',
    'Todo depende de la madurez: el plátano debe tener la cáscara <strong>amarilla con muchas manchas negras</strong>.',
    [i(2, '', 'plátano muy maduro|plátanos muy maduros'), i(0.5, 'taza', 'de aceite')],
    ['Sartén', 'Pinzas o tenedor', 'Papel de cocina'],
    [
      p('Pela y corta', 'Corta las puntas, haz un corte a lo largo de la cáscara y quítala. Corta el plátano en diagonal, en tajadas de 1 centímetro.'),
      p('Calienta el aceite', 'Calienta el aceite a fuego medio.', { s: 'Al meter la punta de una tajada, burbujea suave.' }),
      p('Fríe', 'Fríe las tajadas sin amontonarlas, 2 minutos por lado.', { m: 4, s: 'Doradas oscuras con bordes caramelizados.' }),
      p('Escurre', 'Escurre sobre papel de cocina y sirve calientes.')
    ],
    'Se comen recién hechas.');

  R(VE, 'Tequeños', '🧀', 'tequenos', [45, 10], 8, 'Media',
    'Palitos de queso blanco envueltos en masa y fritos. El pasabocas que no falta en ninguna fiesta venezolana. Salen unos 20.',
    'El secreto es <strong>enrollar la tira de masa montándola sobre sí misma y sellar bien las puntas</strong>: si queda un hueco, el queso se sale al freír.',
    [i(2, 'taza', 'de harina de trigo'), i(4, 'cda', 'de mantequilla fría'), i(1, '', 'huevo|huevos'), i(1, 'cdta', 'de azúcar'), sal(0.5), i(5, 'cda', 'de agua fría'), i(400, 'g', 'de queso blanco duro (que no se derrita del todo)'), i(2, 'taza', 'de aceite para freír')],
    ['Tazón', 'Rodillo', 'Cuchillo', 'Sartén honda', 'Papel de cocina'],
    [
      p('Haz la masa', 'Mezcla la harina, el azúcar y la sal. Deshaz la mantequilla con los dedos hasta formar migas. Agrega el huevo y el agua, y amasa 3 minutos.', { s: 'Masa lisa, suave y que no se pega.' }),
      p('Deja reposar', 'Envuélvela y déjala reposar 20 minutos.', { m: 20, c: 'Reposada se estira sin encogerse.' }),
      p('Corta el queso', 'Corta el queso en bastones de 1 centímetro de grosor y 7 de largo.'),
      p('Estira y corta tiras', 'Estira la masa hasta dejarla de 2 milímetros y córtala en tiras de 2 centímetros de ancho.'),
      p('Enrolla', 'Tapa una punta del bastón de queso con el inicio de la tira y enrolla en espiral, montando cada vuelta sobre la anterior. Tapa la otra punta y pellizca para sellar.', { s: 'El queso no se ve por ningún lado.' }),
      p('Fríe', 'Fríe en aceite a fuego medio, de a 5, durante 3 minutos, girándolos.', { m: 3, s: 'Dorados parejos.', e: 'Si el aceite está muy caliente se doran antes de que el queso se ablande.' })
    ],
    'Crudos se congelan muy bien y se fríen sin descongelar.');

  R(VE, 'Cachapas con queso', '🌽', 'cachapas', [15, 15], 4, 'Fácil',
    'Tortas gruesas de maíz tierno, dulces y doradas, dobladas sobre queso blando que se derrite. Salen 6.',
    'Se hacen con <strong>maíz tierno</strong> (fresco, de lata o congelado), licuado grueso: deben verse trocitos de grano. El fuego va medio-bajo porque el dulce del maíz se quema fácil.',
    [i(3, 'taza', 'de maíz tierno desgranado'), i(1, '', 'huevo|huevos'), i(2, 'cda', 'de azúcar'), i(3, 'cda', 'de harina de maíz precocida'), i(3, 'cda', 'de leche'), sal(0.5), i(1, 'cda', 'de mantequilla'), i(300, 'g', 'de queso blando (queso de mano o mozzarella fresca)')],
    ['Licuadora', 'Sartén antiadherente', 'Cucharón', 'Espátula ancha'],
    [
      p('Licúa grueso', 'Licúa a pulsos el maíz con el huevo, el azúcar, la leche, la harina y la sal.', { s: 'Masa espesa con trocitos de maíz, que cae lenta de la cuchara.', c: 'Si queda muy líquida, agrega una cucharada más de harina.' }),
      p('Calienta la sartén', 'Calienta la sartén a fuego medio-bajo y úntala con un poco de mantequilla.'),
      p('Cocina el primer lado', 'Vierte un cucharón de masa y extiéndelo en un círculo de 12 centímetros. Cocina 3 a 4 minutos.', { m: 4, s: 'Bordes secos y burbujitas en la superficie.' }),
      p('Voltea', 'Voltea con la espátula ancha y cocina 3 minutos más.', { m: 3, s: 'Dorado oscuro con manchas caramelizadas.' }),
      p('Rellena y dobla', 'Pon queso sobre una mitad, dobla la cachapa y déjala 30 segundos para que se derrita. Sirve con mantequilla.')
    ],
    'La masa dura 1 día en la nevera. Las cachapas se comen recién hechas.');

  R(VE, 'Papelón con limón', '🍋', 'papelon', [10, 0], 6, 'Fácil',
    'La bebida fría más popular de Venezuela: agua de panela con mucho limón y hielo.',
    'El papelón es <strong>panela</strong>. Se disuelve primero en un poco de agua caliente y luego se completa con agua fría.',
    [i(200, 'g', 'de papelón (panela)'), i(6, 'taza', 'de agua'), i(4, '', 'limón|limones'), i(null, '', 'Hielo')],
    ['Olla pequeña', 'Jarra', 'Exprimidor', 'Colador'],
    [
      p('Disuelve el papelón', 'Parte el papelón en trozos y caliéntalo con 2 tazas de agua, revolviendo, hasta que se disuelva.', { s: 'Líquido oscuro, sin trozos.' }),
      p('Enfría y cuela', 'Cuela en la jarra y agrega las otras 4 tazas de agua fría.'),
      p('Agrega el limón', 'Agrega el jugo de los limones cuando el líquido ya esté frío.', { e: 'En caliente, el limón se amarga.' }),
      p('Sirve', 'Sirve con mucho hielo.')
    ],
    'Dura 2 días en la nevera, pero el limón sabe mejor el primer día.');
})();
