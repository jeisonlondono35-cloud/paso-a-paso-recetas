/* ============================================================
   COCINAS DEL MUNDO (parte 1): italiana, española, mexicana y peruana
   ============================================================ */
(function () {
  var i = GEN.i, p = GEN.p, ajo = GEN.ajo, sal = GEN.sal, aceite = GEN.aceite;

  // Atajo: R(categoría, nombre, emoji, foto, [prep, cocción], porciones, dificultad, descripción, antes, ingredientes, utensilios, pasos, guardar)
  var R = GEN.R = function (cat, nombre, emoji, foto, t, por, dif, desc, antes, ing, uten, pasos, guardar) {
    GEN.agregar({ nombre: nombre, emoji: emoji, categoria: cat, dificultad: dif, foto: foto, prep: t[0], coccion: t[1], porciones: por,
      descripcion: desc, antes: antes, ingredientes: ing, utensilios: uten, pasos: pasos, guardar: guardar });
  };

  // ================================================================ ITALIANA
  var IT = 'Cocina italiana';

  // ---- Pizza
  var MASA_PIZZA = [i(3, 'taza', 'de harina de trigo', 'Unos 400 g.'), i(1, 'cdta', 'de levadura seca instantánea'), i(1.25, 'taza', 'de agua tibia'), sal(1.5), i(1, 'cda', 'de aceite de oliva'), i(1, 'taza', 'de tomate triturado'), i(250, 'g', 'de queso mozzarella')];
  [
    { s: 'margarita', ing: [i(1, 'taza', 'de hojas de albahaca fresca')], pon: 'Solo la mozzarella en trozos. La albahaca va al salir del horno, para que no se queme.' },
    { s: 'de pepperoni', ing: [i(100, 'g', 'de pepperoni en rodajas')], pon: 'La mozzarella y encima las rodajas de pepperoni, sin montarlas.' },
    { s: 'de champiñones', ing: [i(200, 'g', 'de champiñones')], pon: 'La mozzarella y los champiñones cortados en láminas muy delgadas, crudos: así se asan y no sueltan agua.' },
    { s: 'cuatro quesos', ing: [i(80, 'g', 'de queso parmesano rallado'), i(80, 'g', 'de queso azul'), i(80, 'g', 'de queso semiduro (gouda o provolone)')], pon: 'La mozzarella y los otros tres quesos repartidos en trocitos. Esta pizza puede ir sin salsa de tomate.' },
    { s: 'de vegetales', ing: [i(1, '', 'pimentón|pimentones'), i(0.5, '', 'cebolla morada'), i(0.5, 'taza', 'de aceitunas negras')], pon: 'La mozzarella y los vegetales cortados muy delgados, bien repartidos y sin amontonar.' }
  ].forEach(function (z) {
    R(IT, 'Pizza ' + z.s, '🍕', 'pizza', [90, 10], 4, 'Media',
      'Pizza casera ' + z.s + ' de masa delgada, con borde inflado y crujiente. Salen 2 pizzas medianas.',
      'Dos secretos: dejar que la masa <strong>repose una hora</strong> y hornear en el horno <strong>lo más caliente posible</strong>, sobre una bandeja ya caliente.',
      MASA_PIZZA.concat(z.ing),
      ['Tazón grande', 'Bandeja para horno', 'Papel para hornear', 'Paño limpio', 'Cuchara'],
      [
        p('Mezcla y amasa', 'Mezcla la harina, la levadura y la sal. Agrega el agua tibia y el aceite, y une con una cuchara. Pasa a la mesa y amasa 8 minutos: estira con la base de la mano, dobla y gira.', { m: 8, s: 'Masa lisa y elástica: al presionarla con un dedo, vuelve a subir despacio.', c: 'Si se pega mucho, espolvorea harina de a poquitos. Debe quedar suave, no dura.' }),
        p('Deja crecer', 'Pon la masa en un tazón untado de aceite, cúbrela con un paño húmedo y déjala 1 hora en un lugar tibio.', { m: 60, s: 'Dobló su tamaño.', e: 'El agua muy caliente mata la levadura y la masa no crece. Debe sentirse apenas tibia.' }),
        p('Precalienta el horno al máximo', 'Enciende el horno a 250 °C (o lo máximo que dé) con la bandeja adentro, mínimo 20 minutos.', { c: 'La bandeja caliente hace que la base se cocine de golpe y quede crujiente.' }),
        p('Estira con las manos', 'Divide la masa en 2. Sobre un papel para hornear enharinado, aplasta cada bola desde el centro hacia afuera con los dedos, dejando 1 centímetro de borde sin tocar, hasta tener un disco de 28 centímetros.', { e: 'El rodillo saca todo el aire y la pizza queda como galleta. Mejor con las manos.' }),
        p('Arma', 'Mezcla el tomate triturado con una pizca de sal y un hilo de aceite, y unta 3 cucharadas en cada disco, sin llegar al borde. ' + z.pon, { e: 'Con mucha salsa o muchos ingredientes, el centro queda mojado y crudo.' }),
        p('Hornea', 'Desliza el papel con la pizza sobre la bandeja caliente y hornea 8 a 10 minutos.', { m: 9, s: 'Borde inflado y dorado con manchas tostadas; queso burbujeante.' }),
        p('Sirve', 'Saca, deja reposar 1 minuto, corta y sirve.' + (z.s === 'margarita' ? ' Pon las hojas de albahaca frescas y un hilo de aceite de oliva.' : ''))
      ],
      'La pizza hecha dura 2 días en la nevera; recaliéntala en sartén tapada para que la base vuelva a crujir. La masa cruda se puede congelar después de crecer.');
  });

  // ---- Risotto
  [
    { s: 'de champiñones', ing: [i(300, 'g', 'de champiñones')], antes: 'Corta los champiñones en láminas y dóralos 6 minutos en la olla con la mitad de la mantequilla. Sácalos y resérvalos.', fin: 'Devuelve los champiñones a la olla.' },
    { s: 'de queso parmesano', ing: [i(0.5, 'taza', 'de queso parmesano rallado extra')], fin: 'Agrega el queso extra junto con la mantequilla final.' },
    { s: 'de pollo', ing: [i(1, '', 'pechuga de pollo|pechugas de pollo')], antes: 'Corta la pechuga en cubos de 2 centímetros, sálala y dórala 6 minutos en la olla con la mitad de la mantequilla. Sácala y resérvala.', fin: 'Devuelve el pollo a la olla.' },
    { s: 'de espárragos', ing: [i(300, 'g', 'de espárragos verdes')], medio: 'A los 10 minutos de cocción, agrega los espárragos cortados en trozos de 3 centímetros (sin la base dura).' },
    { s: 'de camarones', ing: [i(300, 'g', 'de camarones pelados')], medio: 'Cuando falten 3 minutos, agrega los camarones crudos: se cocinan con el calor del arroz.' },
    { s: 'de ahuyama', ing: [i(300, 'g', 'de ahuyama en cubitos de 1 cm')], antes: 'Sofríe los cubitos de ahuyama 3 minutos junto con la cebolla: se van deshaciendo y tiñen el arroz.' }
  ].forEach(function (z) {
    R(IT, 'Risotto ' + z.s, '🍚', 'risotto', [10, 30], 4, 'Media',
      'Arroz cremoso ' + z.s + ', de los que se riegan despacio en el plato. Cremoso sin llevar crema.',
      'El risotto pide arroz <strong>arborio o carnaroli</strong> (grano corto y gordo, que suelta almidón), caldo <strong>siempre caliente</strong> y que no te alejes de la olla: son 18 minutos de revolver.',
      [i(1.5, 'taza', 'de arroz arborio'), i(5, 'taza', 'de caldo de pollo o verduras'), i(1, '', 'cebolla cabezona pequeña|cebollas cabezonas pequeñas'), i(0.5, 'taza', 'de vino blanco seco', 'O más caldo.'), i(3, 'cda', 'de mantequilla'), i(0.5, 'taza', 'de queso parmesano rallado')].concat(z.ing).concat([i(null, '', 'Sal y pimienta')]),
      ['Olla ancha de fondo grueso', 'Olla pequeña para el caldo', 'Cucharón', 'Cuchara de palo'],
      [
        p('Calienta el caldo', 'Pon el caldo en la olla pequeña a fuego bajo y manténlo caliente todo el tiempo, al lado de la olla del arroz.', { e: 'El caldo frío corta la cocción cada vez que lo agregas y el arroz queda duro por dentro.' }),
        p('Sofríe la base', (z.antes ? z.antes + ' Luego, d' : 'D') + 'errite 1 cucharada de mantequilla a fuego medio y cocina la cebolla picada muy fina 4 minutos, sin dorar.', { s: 'Cebolla transparente.' }),
        p('Tuesta el arroz', 'Agrega el arroz sin lavar y revuelve 2 minutos.', { m: 2, s: 'Los granos se ven brillantes y con el borde transparente.', c: 'No se lava: el almidón de la superficie es el que hace la crema.' }),
        p('Agrega el vino', 'Vierte el vino y revuelve hasta que se evapore casi por completo.', { s: 'Ya no huele a alcohol y casi no queda líquido.' }),
        p('Agrega el caldo de a cucharones', 'Agrega un cucharón de caldo caliente y revuelve con calma hasta que el arroz lo absorba. Repite, un cucharón a la vez, durante unos 18 minutos.' + (z.medio ? ' ' + z.medio : ''), { m: 18, s: 'Al pasar la cuchara por el fondo queda un camino que se cierra despacio.', e: 'Si echas todo el caldo de una vez, tendrás arroz hervido, no risotto.' }),
        p('Prueba el punto', 'Prueba un grano: debe estar blando pero con un punto firme en el centro. El conjunto debe verse suelto y cremoso; si está seco, agrega medio cucharón más.' + (z.fin ? ' ' + z.fin : '')),
        p('Termina fuera del fuego', 'Apaga. Agrega el resto de la mantequilla y el parmesano, revuelve con energía 1 minuto, tapa y deja reposar 2 minutos. Corrige la sal y sirve en platos calientes.', { s: 'Al mover el plato, el risotto se extiende como una ola lenta.' })
      ],
      'El risotto se come recién hecho. Con lo que sobre puedes formar bolitas, apanarlas y freírlas.');
  });

  R(IT, 'Lasaña de carne', '🍝', 'lasana', [40, 45], 6, 'Media',
    'Capas de pasta, salsa de carne y salsa blanca, gratinadas hasta burbujear. El plato de domingo por excelencia.',
    'Son tres preparaciones (salsa de carne, bechamel y armado), pero ninguna es difícil. Usa láminas <strong>precocidas</strong> (dicen "sin hervir") y deja las salsas un poco líquidas: la pasta absorbe humedad en el horno. ' + GEN.HIGIENE,
    [i(12, '', 'lámina de lasaña precocida|láminas de lasaña precocidas'), i(500, 'g', 'de carne molida de res'), i(1, '', 'cebolla cabezona|cebollas cabezonas'), ajo(2), i(700, 'g', 'de tomate triturado'), i(3, 'cda', 'de mantequilla'), i(3, 'cda', 'de harina de trigo'), i(2.5, 'taza', 'de leche'), i(300, 'g', 'de queso mozzarella rallado'), i(0.5, 'taza', 'de queso parmesano rallado'), aceite(1), sal(1.5)],
    ['Molde rectangular hondo de unos 20 × 30 cm', 'Sartén honda', 'Olla mediana', 'Batidor de mano', 'Papel aluminio'],
    [
      p('Haz la salsa de carne', 'Dora la carne en el aceite a fuego alto 7 minutos, desbaratándola. Baja el fuego, agrega la cebolla y el ajo picados 3 minutos, luego el tomate y 1 cucharadita de sal. Cocina 20 minutos a fuego bajo.', { m: 20, s: 'Salsa espesa pero todavía jugosa.' }),
      p('Haz la bechamel', 'Derrite la mantequilla a fuego medio, agrega la harina y revuelve 1 minuto. Vierte la leche poco a poco, batiendo sin parar, y cocina 5 minutos hasta que espese. Sala.', { m: 5, s: 'Cubre el dorso de la cuchara y deja un camino al pasar el dedo.', e: 'Si echas la leche de golpe, se llena de grumos. Si pasa, bátela fuerte o cuélala.' }),
      p('Precalienta el horno', 'Enciende el horno a 180 °C.'),
      p('Arma las capas', 'En el molde: una capa fina de salsa de carne, láminas de pasta sin montarlas, salsa de carne, bechamel y mozzarella. Repite hasta tener 4 capas de pasta. Termina con bechamel, mozzarella y el parmesano.', { c: 'La primera capa de salsa evita que la pasta se pegue al molde.' }),
      p('Hornea tapada y luego destapada', 'Cubre con papel aluminio y hornea 25 minutos. Destapa y hornea 15 a 20 minutos más.', { m: 25, s: 'Superficie dorada con burbujas en los bordes; un cuchillo entra sin resistencia.' }),
      p('Deja reposar', 'Deja reposar 10 minutos antes de cortar.', { m: 10, e: 'Recién salida se desbarata y se riega: el reposo es lo que permite sacar porciones enteras.' })
    ],
    'Dura 4 días en la nevera y se congela muy bien en porciones. Recalienta tapada en horno o microondas.');

  R(IT, 'Ñoquis de papa', '🥔', 'noquis', [50, 5], 4, 'Media',
    'Almohaditas tiernas de papa que se deshacen en la boca, para servir con salsa de tomate, mantequilla o pesto.',
    'El secreto es usar <strong>la menor cantidad de harina posible</strong> y amasar poco: con mucha harina o mucho amasado quedan como goma.',
    [i(1000, 'g', 'de papa harinosa (de la que se deshace)'), i(1.5, 'taza', 'de harina de trigo', 'Y un poco más para la mesa.'), i(1, '', 'huevo|huevos'), sal(1)],
    ['Olla grande', 'Pisapuré o tenedor', 'Cuchillo', 'Espumadera', 'Bandeja enharinada'],
    [
      p('Cocina las papas con cáscara', 'Hierve las papas enteras y con cáscara en agua con sal, unos 30 minutos, hasta que un cuchillo entre sin resistencia.', { m: 30, c: 'Con cáscara absorben menos agua, y así la masa pide menos harina.' }),
      p('Pela y aplasta en caliente', 'Pélalas apenas puedas tocarlas y aplástalas con el pisapuré sobre la mesa. Extiende el puré y déjalo soltar vapor 5 minutos.', { e: 'No uses licuadora: vuelve la papa un pegante.' }),
      p('Forma la masa', 'Haz un hueco en el puré, pon el huevo y la sal, y espolvorea la mitad de la harina. Une con las manos, agregando harina solo hasta que deje de pegarse. Amasa menos de 1 minuto.', { s: 'Masa suave y tibia que casi no se pega a los dedos.' }),
      p('Corta los ñoquis', 'Divide la masa en 6 trozos y haz con cada uno un rollo de 2 centímetros de grosor. Córtalos en trocitos de 2 centímetros y pásalos a la bandeja enharinada. Si quieres, márcalos rodándolos sobre un tenedor.'),
      p('Cocina', 'Echa los ñoquis en agua hirviendo con sal, en dos tandas. Cuando floten, cuenta 30 segundos y sácalos con la espumadera.', { s: 'Suben solos a la superficie.', e: 'Si los dejas más, se deshacen.' }),
      p('Sirve', 'Pásalos directo a la sartén con la salsa caliente, mezcla con cuidado y sirve con queso rallado.')
    ],
    'Crudos se congelan sueltos en una bandeja y luego en bolsa; se cocinan sin descongelar.');

  R(IT, 'Bruschetta de tomate', '🍅', 'bruschetta', [15, 5], 4, 'Fácil',
    'Pan tostado frotado con ajo y cubierto de tomate fresco con albahaca. La entrada italiana más simple.',
    'Depende por completo de la calidad del <strong>tomate</strong> (maduro y con sabor) y de armarla justo antes de comer, para que el pan no se ablande.',
    [i(8, '', 'rebanada de pan de corteza dura|rebanadas de pan de corteza dura'), i(4, '', 'tomate maduro|tomates maduros'), ajo(1), i(8, '', 'hoja de albahaca fresca|hojas de albahaca fresca'), i(3, 'cda', 'de aceite de oliva'), sal(0.5)],
    ['Sartén u horno', 'Tazón', 'Tabla y cuchillo'],
    [
      p('Prepara el tomate', 'Corta los tomates en cubitos, quitando las semillas. Mézclalos con la sal, 2 cucharadas de aceite y la albahaca rota con las manos. Deja reposar 10 minutos.', { m: 10 }),
      p('Tuesta el pan', 'Tuesta las rebanadas en una sartén seca o en el horno, 2 minutos por lado.', { s: 'Doradas y crujientes por fuera, aún tiernas en el centro.' }),
      p('Frota con ajo', 'Corta el diente de ajo por la mitad y frótalo sobre un lado de cada tostada caliente. Rocía el resto del aceite.', { c: 'El pan tostado actúa como rallador y se queda con el aroma del ajo.' }),
      p('Arma y sirve', 'Escurre el exceso de líquido del tomate, repártelo sobre las tostadas y sirve de inmediato.')
    ],
    'No se guarda armada. La mezcla de tomate dura 1 día en la nevera.');

  R(IT, 'Tiramisú', '🍰', 'tiramisu', [30, 0], 8, 'Media',
    'Capas de bizcochos mojados en café y crema de mascarpone, con cocoa por encima. Postre frío que no necesita horno.',
    'Esta versión no lleva huevo crudo: la crema se hace con mascarpone y crema batida. Necesita <strong>6 horas de nevera</strong>, así que hazlo con tiempo.',
    [i(250, 'g', 'de queso mascarpone', 'O queso crema.'), i(1, 'taza', 'de crema de leche para batir, muy fría'), i(0.33, 'taza', 'de azúcar'), i(1.5, 'taza', 'de café fuerte, frío'), i(200, 'g', 'de bizcochos de soletilla (deditos)'), i(2, 'cda', 'de cocoa en polvo sin azúcar')],
    ['Molde de unos 20 × 20 cm', 'Dos tazones', 'Batidor', 'Plato hondo', 'Colador pequeño'],
    [
      p('Bate la crema', 'Bate la crema de leche fría con el azúcar hasta que forme picos suaves.', { s: 'Al levantar el batidor, la punta se dobla.', e: 'Si te pasas, se corta y se vuelve mantequilla.' }),
      p('Une con el mascarpone', 'Ablanda el mascarpone con una cuchara y mézclalo con la crema batida en tres partes, con movimientos envolventes.', { s: 'Crema lisa, espesa y sin grumos.' }),
      p('Moja los bizcochos', 'Pon el café en un plato hondo. Pasa cada bizcocho 1 segundo por lado y acomódalo en el molde.', { e: 'Si los dejas más tiempo, se deshacen y el postre queda aguado.' }),
      p('Arma las capas', 'Cubre la capa de bizcochos con la mitad de la crema. Haz otra capa de bizcochos mojados y termina con el resto de la crema, alisando.'),
      p('Enfría', 'Tapa y lleva a la nevera mínimo 6 horas.', { c: 'En ese tiempo los bizcochos se ablandan y los sabores se mezclan.' }),
      p('Termina y sirve', 'Justo antes de servir, espolvorea la cocoa pasándola por un colador.')
    ],
    'Dura 3 días en la nevera, tapado.');

  R(IT, 'Sopa minestrone', '🥣', 'minestrone', [20, 40], 6, 'Fácil',
    'Sopa italiana espesa de verduras, fríjoles blancos y pasta corta. Un plato completo en una olla.',
    'No hay una receta única: se hace con las verduras que haya. Lo importante es <strong>sofreír primero</strong> y agregar la pasta al final.',
    [i(1, '', 'cebolla|cebollas'), i(2, '', 'zanahoria|zanahorias'), i(2, '', 'tallo de apio|tallos de apio'), i(1, '', 'calabacín|calabacines'), i(2, '', 'papa|papas'), ajo(2), i(400, 'g', 'de tomate triturado'), i(1.5, 'taza', 'de fríjoles blancos cocidos'), i(6, 'taza', 'de agua o caldo'), i(1, 'taza', 'de pasta corta'), i(2, 'cda', 'de aceite de oliva'), sal(2)],
    ['Olla grande', 'Tabla y cuchillo', 'Cuchara de palo'],
    [
      p('Corta las verduras', 'Corta todas las verduras en cubos de 1 centímetro, parejos.'),
      p('Sofríe', 'Calienta el aceite a fuego medio y sofríe cebolla, zanahoria y apio 8 minutos. Agrega el ajo 30 segundos.', { m: 8, s: 'Verduras blandas y brillantes.' }),
      p('Agrega el resto', 'Agrega el tomate, la papa, el calabacín, el agua y la sal. Cuando hierva, baja el fuego y cocina 20 minutos.', { m: 20 }),
      p('Agrega fríjoles y pasta', 'Echa los fríjoles y la pasta y cocina 9 minutos más, revolviendo de vez en cuando.', { m: 9, s: 'Pasta al dente y sopa espesa.' }),
      p('Sirve', 'Corrige la sal y sirve con un hilo de aceite de oliva y queso rallado.')
    ],
    'Dura 4 días en la nevera. La pasta sigue absorbiendo caldo: agrega agua al recalentar.');

  R(IT, 'Espaguetis a la carbonara auténtica', '🍝', 'pasta-tocineta', [10, 15], 4, 'Media',
    'La carbonara de verdad: sin crema. La salsa se hace con yemas, queso y el agua de la pasta.',
    'El paso delicado es el último: el huevo se mezcla <strong>fuera del fuego</strong>. Con calor directo se vuelve huevo revuelto.',
    [i(400, 'g', 'de espaguetis'), i(150, 'g', 'de panceta o tocineta gruesa'), i(3, '', 'yema de huevo|yemas de huevo'), i(1, '', 'huevo entero|huevos enteros'), i(1, 'taza', 'de queso pecorino o parmesano rallado fino'), i(1, 'cdta', 'de pimienta negra recién molida'), i(2, 'cda', 'de sal para el agua')],
    ['Olla grande', 'Sartén grande', 'Tazón', 'Pinzas', 'Una taza'],
    [
      p('Dora la panceta', 'Corta la panceta en tiras y ponla en la sartén fría. Enciende a fuego medio y cocina 8 minutos hasta que esté dorada y haya soltado su grasa. Apaga y deja todo en la sartén.', { m: 8 }),
      p('Mezcla huevo y queso', 'En un tazón bate las yemas, el huevo, el queso y la pimienta hasta formar una crema espesa.'),
      p('Cocina la pasta', 'Cocina los espaguetis en agua hirviendo con sal, 1 minuto menos de lo que diga el paquete. Guarda 1 taza del agua antes de escurrir.', { m: 9 }),
      p('Une fuera del fuego', 'Pasa la pasta a la sartén de la panceta (apagada) y mézclala con la grasa. Espera 30 segundos, vierte la crema de huevo y mezcla rápido, agregando agua de cocción de a cucharadas.', { s: 'Salsa cremosa y brillante que cubre la pasta, sin grumos de huevo.', e: 'Si la sartén está al fuego o demasiado caliente, el huevo se cuaja en pedazos.' }),
      p('Sirve', 'Sirve de inmediato con más queso y pimienta.')
    ],
    'Se come recién hecha: recalentada, el huevo se cuaja.');

  // ================================================================ ESPAÑOLA
  var ES = 'Cocina española';

  R(ES, 'Tortilla de patatas', '🥔', 'tortilla-patatas', [15, 35], 4, 'Media',
    'La tortilla española: papa y cebolla cocinadas despacio en aceite y cuajadas con huevo. Jugosa por dentro.',
    'La papa no se fríe: se <strong>confita</strong> a fuego suave hasta quedar blanda. El momento que asusta es la vuelta, y se hace con un plato más grande que la sartén.',
    [i(600, 'g', 'de papa'), i(1, '', 'cebolla cabezona|cebollas cabezonas'), i(6, '', 'huevo|huevos'), i(1, 'taza', 'de aceite de oliva'), sal(1.5)],
    ['Sartén antiadherente de unos 22 cm', 'Tazón grande', 'Colador', 'Un plato llano más grande que la sartén', 'Espátula'],
    [
      p('Corta la papa y la cebolla', 'Pela las papas y córtalas en láminas delgadas e irregulares, de unos 3 milímetros. Corta la cebolla en plumas finas. Mezcla con la mitad de la sal.'),
      p('Cocina despacio en aceite', 'Calienta el aceite a fuego medio-bajo, agrega la papa y la cebolla (deben quedar casi cubiertas) y cocina 20 minutos, moviendo de vez en cuando.', { m: 20, s: 'La papa se parte con la espátula y está blanda, apenas dorada.', e: 'Si el aceite chisporrotea fuerte, quedan papas fritas crujientes. Baja el fuego.' }),
      p('Escurre y mezcla con el huevo', 'Escurre en un colador (guarda el aceite: sirve otra vez). Bate los huevos con el resto de la sal, agrega la papa caliente y deja reposar 10 minutos.', { m: 10, c: 'En el reposo la papa absorbe huevo y la tortilla queda más jugosa.' }),
      p('Cuaja el primer lado', 'Calienta 1 cucharada del aceite en la sartén a fuego medio. Vierte la mezcla, alisa y cocina 4 minutos, moviendo la sartén para que no se pegue.', { m: 4, s: 'Bordes cuajados; el centro aún se mueve un poco.' }),
      p('Da la vuelta', 'Pon el plato sobre la sartén, sujétalo con la palma, voltea de un golpe sobre el lavaplatos y desliza la tortilla de nuevo a la sartén. Cocina 3 minutos más, metiendo los bordes con la espátula.', { m: 3, c: 'Con decisión y rápido: dudar es lo que hace que se riegue.' }),
      p('Reposa y sirve', 'Pásala a un plato y déjala 5 minutos. Se come tibia o a temperatura ambiente.')
    ],
    'Dura 2 días en la nevera. Fría, dentro de un pan, es un clásico.');

  [
    { s: 'de pollo', ing: [i(600, 'g', 'de pollo en trozos pequeños con hueso'), i(200, 'g', 'de habichuelas')], caldo: 'de pollo', dorar: 'Sala el pollo y dóralo en el aceite a fuego medio-alto 8 minutos, por todos los lados. Agrega las habichuelas en trozos y saltea 2 minutos.', final: '' },
    { s: 'de mariscos', ing: [i(300, 'g', 'de camarones con cáscara'), i(300, 'g', 'de calamar en anillos'), i(300, 'g', 'de mejillones limpios')], caldo: 'de pescado', dorar: 'Dora los camarones 1 minuto por lado y sácalos. En el mismo aceite, saltea el calamar 2 minutos.', final: 'Cuando falten 8 minutos, acomoda encima los camarones y los mejillones, sin revolver.' }
  ].forEach(function (z) {
    R(ES, 'Paella ' + z.s, '🥘', 'paella', [20, 40], 4, 'Media',
      'Arroz seco al estilo valenciano ' + z.s + ', en capa delgada, con el fondo tostado que todos se pelean.',
      'Tres reglas: sartén <strong>ancha y baja</strong>, caldo <strong>hirviendo</strong> y, una vez repartido el arroz, <strong>no se revuelve</strong>. No es un risotto.',
      [i(2, 'taza', 'de arroz de grano redondo'), i(5, 'taza', 'de caldo ' + z.caldo)].concat(z.ing).concat([i(1, '', 'pimentón rojo|pimentones rojos'), i(2, '', 'tomate maduro|tomates maduros'), ajo(3), i(1, 'cdta', 'de paprika'), i(1, '', 'pizca de azafrán o media cucharadita de cúrcuma'), i(4, 'cda', 'de aceite de oliva'), sal(1.5), i(1, '', 'limón|limones')]),
      ['Paellera o sartén muy ancha (de 34 cm o más)', 'Olla para el caldo', 'Rallador', 'Cuchara de palo'],
      [
        p('Calienta el caldo', 'Pon el caldo a fuego bajo con el azafrán o la cúrcuma y manténlo caliente.'),
        p('Dora lo principal', z.dorar, { s: 'Bien dorado: ese color es el sabor del arroz.' }),
        p('Haz el sofrito', 'Agrega el pimentón en tiras 3 minutos. Luego el ajo picado, la paprika y los tomates rallados. Cocina 5 minutos hasta que el tomate pierda el agua.', { m: 5, e: 'La paprika se quema en segundos: échala y enseguida el tomate.' }),
        p('Agrega el arroz y el caldo', 'Reparte el arroz por toda la sartén, mezcla 1 minuto, vierte el caldo hirviendo, agrega la sal y distribuye todo parejo. Es la última vez que se revuelve.', { c: 'Prueba el caldo: debe estar un poco subido de sal.' }),
        p('Cocina sin revolver', 'Cocina 10 minutos a fuego fuerte y luego 8 minutos a fuego bajo. ' + z.final, { m: 10, s: 'El caldo se consume y aparecen huequitos en la superficie.' }),
        p('Busca el tostado del fondo', 'En el último minuto sube el fuego. Cuando oigas un chisporroteo seco y huela a tostado, apaga.', { e: 'Si huele a quemado, ya te pasaste.' }),
        p('Reposa y sirve', 'Cubre con un paño limpio y deja reposar 5 minutos. Sirve con cascos de limón.', { m: 5 })
      ],
      'Dura 2 días en la nevera. Recalienta en sartén con unas gotas de agua.');
  });

  R(ES, 'Gazpacho', '🍅', 'gazpacho', [15, 0], 4, 'Fácil',
    'Sopa fría de tomate y verduras crudas, licuada con aceite de oliva. Refrescante y sin prender la estufa.',
    'Todo va crudo, así que usa <strong>tomates muy maduros</strong>. Se sirve bien frío: necesita 2 horas de nevera.',
    [i(1000, 'g', 'de tomates muy maduros'), i(1, '', 'pepino|pepinos'), i(1, '', 'pimentón verde|pimentones verdes'), ajo(1), i(1, '', 'rebanada de pan del día anterior'), i(4, 'cda', 'de aceite de oliva'), i(2, 'cda', 'de vinagre'), sal(1)],
    ['Licuadora', 'Colador', 'Jarra', 'Tabla y cuchillo'],
    [
      p('Corta las verduras', 'Corta en trozos los tomates, el pepino pelado y el pimentón sin semillas. Quítale el centro al ajo para que no repita.'),
      p('Licúa', 'Licúa todo con el pan remojado en un poco de agua, el vinagre y la sal, 2 minutos, hasta que quede muy liso.', { m: 2 }),
      p('Agrega el aceite en hilo', 'Con la licuadora andando, vierte el aceite en un hilo fino.', { s: 'El color pasa de rojo a naranja cremoso.' }),
      p('Cuela y enfría', 'Pásalo por un colador apretando con una cuchara. Prueba la sal y el vinagre, y enfría mínimo 2 horas.'),
      p('Sirve', 'Sirve muy frío, con cubitos de pepino y un hilo de aceite por encima.')
    ],
    'Dura 3 días en la nevera, bien tapado.');

  [{ s: 'jamón', ing: i(150, 'g', 'de jamón serrano o cocido picado muy fino') }, { s: 'pollo', ing: i(1.5, 'taza', 'de pollo cocido y desmechado muy fino') }].forEach(function (z) {
    R(ES, 'Croquetas de ' + z.s, '🧆', 'croquetas', [30, 15], 6, 'Media',
      'Crujientes por fuera y cremosas por dentro, casi líquidas. Salen unas 24.',
      'Una croqueta es una <strong>bechamel muy espesa</strong> que se enfría, se forma y se apana. La masa necesita mínimo 4 horas de nevera: hazla el día anterior.',
      [z.ing, i(4, 'cda', 'de mantequilla'), i(0.5, 'taza', 'de harina de trigo'), i(2.5, 'taza', 'de leche caliente'), sal(0.5), i(2, '', 'huevo|huevos'), i(1.5, 'taza', 'de pan rallado'), i(2, 'taza', 'de aceite para freír')],
      ['Olla de fondo grueso', 'Batidor', 'Bandeja', 'Papel film', 'Dos platos hondos', 'Sartén honda'],
      [
        p('Haz la base', 'Derrite la mantequilla a fuego medio, agrega la harina y revuelve 2 minutos sin que se dore.', { m: 2 }),
        p('Agrega la leche poco a poco', 'Vierte la leche caliente en tres partes, batiendo fuerte cada vez hasta que quede lisa. Agrega el ' + z.s + ' y la sal.'),
        p('Cocina hasta que se despegue', 'Cocina a fuego bajo 10 minutos, revolviendo sin parar con cuchara de palo.', { m: 10, s: 'La masa se separa de las paredes de la olla y se mueve como un bloque.', e: 'Si queda blanda, las croquetas se abren al freír.' }),
        p('Enfría', 'Extiende la masa en una bandeja, pega papel film directamente encima y lleva a la nevera mínimo 4 horas.', { c: 'El film pegado evita que se forme costra.' }),
        p('Forma y apana', 'Con dos cucharas o las manos mojadas, forma cilindros pequeños. Pásalos por huevo batido y luego por pan rallado, cubriendo bien las puntas.'),
        p('Fríe', 'Fríe en aceite caliente (una miga debe dorarse en 20 segundos), de a 5 o 6, durante 2 minutos, hasta dorar. Escurre sobre papel.', { m: 2, e: 'Con el aceite tibio se abren y se deshacen.' })
      ],
      'Ya apanadas se congelan muy bien; se fríen sin descongelar, a fuego un poco más bajo.');
  });

  R(ES, 'Patatas bravas', '🥔', 'patatas-bravas', [15, 30], 4, 'Fácil',
    'Cubos de papa crujientes con una salsa roja picante por encima. La tapa de bar más famosa de España.',
    'La salsa brava auténtica no lleva tomate en todos lados, pero esta versión casera con tomate y paprika es la más fácil y sale muy bien.',
    [i(800, 'g', 'de papa'), i(1, 'taza', 'de aceite para freír'), i(0.5, '', 'cebolla'), ajo(2), i(1, 'cda', 'de paprika'), i(1, 'cdta', 'de ají picante en polvo', 'Ajusta al gusto.'), i(1, 'cda', 'de harina de trigo'), i(1, 'taza', 'de tomate triturado'), i(0.5, 'taza', 'de agua'), i(1, 'cdta', 'de vinagre'), sal(1)],
    ['Sartén honda', 'Olla pequeña', 'Licuadora', 'Papel de cocina'],
    [
      p('Corta y hierve las papas', 'Pela las papas y córtalas en cubos irregulares de 3 centímetros. Hiérvelas 6 minutos en agua con sal y escúrrelas bien.', { m: 6 }),
      p('Haz la salsa', 'Sofríe la cebolla y el ajo picados en 2 cucharadas de aceite, 5 minutos. Agrega la paprika, el ají y la harina, revuelve 20 segundos y agrega el tomate, el agua, el vinagre y media cucharadita de sal. Cocina 10 minutos y licúa.', { m: 10, s: 'Salsa lisa, roja oscura, que cubre la cuchara.' }),
      p('Fríe las papas', 'Fríe las papas secas en el aceite a fuego medio-alto, 8 minutos, moviendo poco.', { m: 8, s: 'Doradas y crujientes por todos los lados.' }),
      p('Sirve', 'Escurre sobre papel, sala y sirve con la salsa caliente por encima.')
    ],
    'Las papas se comen recién hechas. La salsa dura 5 días en la nevera.');

  R(ES, 'Gambas al ajillo', '🍤', 'gambas-ajillo', [10, 4], 4, 'Fácil',
    'Camarones cocinados en aceite de oliva con mucho ajo. Se hacen en 4 minutos y se comen mojando pan en el aceite.',
    'Todo pasa muy rápido: ten el ajo cortado, los camarones secos y el pan listo antes de prender el fuego.',
    [i(400, 'g', 'de camarones pelados'), ajo(6), i(0.5, 'taza', 'de aceite de oliva'), i(1, '', 'ají seco pequeño|ajíes secos pequeños'), i(2, 'cda', 'de perejil picado'), sal(0.5), i(null, '', 'Pan para mojar')],
    ['Sartén o cazuela de barro', 'Tabla y cuchillo', 'Papel de cocina'],
    [
      p('Prepara', 'Seca muy bien los camarones con papel y sálalos. Corta los ajos en láminas.'),
      p('Perfuma el aceite', 'Pon el aceite, el ajo y el ají en la sartén fría y enciende a fuego medio.', { s: 'El ajo burbujea y apenas empieza a dorarse.', e: 'Si el ajo se quema, el aceite amarga y hay que empezar de nuevo.' }),
      p('Agrega los camarones', 'Sube el fuego, agrega los camarones en una capa y cocina 1 minuto por lado.', { m: 2, s: 'Rosados y en forma de C.' }),
      p('Sirve hirviendo', 'Apaga, espolvorea el perejil y lleva a la mesa en la misma sartén, con pan.')
    ],
    'Se comen al momento.');

  R(ES, 'Churros con chocolate', '🥖', 'churros', [15, 15], 4, 'Media',
    'Masa frita crujiente y estriada, rebozada en azúcar, con chocolate espeso para mojar.',
    '<strong>Importante por seguridad:</strong> usa siempre una boquilla en forma de estrella. Los churros lisos y gruesos atrapan vapor y pueden reventar en el aceite.',
    [i(1, 'taza', 'de agua'), i(1, 'taza', 'de harina de trigo'), sal(0.5), aceite(1), i(3, 'taza', 'de aceite para freír'), i(0.5, 'taza', 'de azúcar para rebozar'), i(200, 'g', 'de chocolate oscuro'), i(1.5, 'taza', 'de leche'), i(1, 'cdta', 'de fécula de maíz (maicena)')],
    ['Olla mediana', 'Manga pastelera con boquilla de estrella', 'Sartén honda', 'Tijeras', 'Olla pequeña'],
    [
      p('Haz la masa', 'Hierve el agua con la sal y la cucharada de aceite. Apaga, agrega la harina de golpe y revuelve con fuerza hasta formar una bola que se despega de la olla.', { s: 'Masa compacta, lisa y pegajosa.' }),
      p('Llena la manga', 'Deja entibiar 5 minutos y pasa la masa a la manga con boquilla de estrella.', { m: 5 }),
      p('Calienta el aceite', 'Calienta el aceite a fuego medio. Está listo cuando un trocito de masa sube burbujeando enseguida.'),
      p('Fríe', 'Aprieta la manga sobre el aceite y corta tiras de 12 centímetros con las tijeras. Fríe 3 o 4 a la vez, 2 minutos por lado.', { m: 4, s: 'Dorados y firmes.' }),
      p('Reboza', 'Escurre sobre papel y pásalos por el azúcar mientras están calientes.'),
      p('Haz el chocolate', 'Disuelve la maicena en la leche fría. Calienta con el chocolate en trozos a fuego bajo, revolviendo, hasta que espese.', { s: 'Cubre la cuchara como una crema.' })
    ],
    'Se comen recién hechos; fríos se ponen duros.');

  // ================================================================ MEXICANA
  var MX = 'Cocina mexicana';
  var TACO_BASE = [i(12, '', 'tortilla de maíz|tortillas de maíz'), i(0.5, '', 'cebolla blanca'), i(0.5, 'taza', 'de cilantro picado'), i(2, '', 'limón|limones'), i(null, '', 'Salsa picante al gusto')];
  [
    { s: 'carne asada', ing: [i(500, 'g', 'de res para asar en filete delgado (falda o sobrebarriga delgada)'), ajo(2), i(0.5, 'cdta', 'de comino'), sal(1)],
      pasos: [p('Marina la carne', 'Mezcla la carne con el jugo de 1 limón, el ajo rallado, el comino y la sal. Deja 20 minutos.', { m: 20 }),
              p('Asa a fuego alto', 'Calienta una sartén pesada al máximo. Seca la carne y ásala 3 minutos por lado, sin moverla.', { m: 6, s: 'Costra oscura por fuera, jugosa por dentro.' }),
              p('Reposa y pica', 'Déjala reposar 5 minutos y pícala en cubitos pequeños, atravesando las fibras.', { m: 5 })] },
    { s: 'pollo', ing: [i(500, 'g', 'de contramuslos de pollo sin hueso'), i(1, 'cdta', 'de paprika'), i(0.5, 'cdta', 'de comino'), i(0.5, 'cdta', 'de orégano'), sal(1)],
      pasos: [p('Adoba el pollo', 'Mezcla el pollo con la paprika, el comino, el orégano, la sal y el jugo de medio limón.'),
              p('Cocina', 'Dora el pollo en una sartén a fuego medio-alto, 6 minutos por lado.', { m: 12, s: 'Dorado y sin rosado al cortarlo.' }),
              p('Pica', 'Deja reposar 5 minutos y pícalo en trozos pequeños.')] },
    { s: 'cerdo al pastor', ing: [i(500, 'g', 'de lomo o pierna de cerdo en láminas delgadas'), i(1, 'cda', 'de paprika'), i(1, 'cda', 'de pasta de achiote', 'Opcional.'), i(2, 'cda', 'de vinagre'), ajo(2), i(1, 'taza', 'de piña en cubitos'), sal(1)],
      pasos: [p('Adoba el cerdo', 'Mezcla el cerdo con la paprika, el achiote, el vinagre, el ajo rallado y la sal. Deja 30 minutos.', { m: 30 }),
              p('Dora por tandas', 'En una sartén muy caliente, dora el cerdo en dos tandas, 2 minutos por lado. Pícalo.', { s: 'Bordes tostados y rojizos.' }),
              p('Dora la piña', 'En la misma sartén, dora la piña 2 minutos y mézclala con la carne.')] },
    { s: 'carnitas', ing: [i(800, 'g', 'de cerdo con algo de grasa (brazo o paleta), en cubos de 5 cm'), i(1, '', 'naranja|naranjas'), ajo(3), sal(1.5)],
      pasos: [p('Cocina el cerdo en agua', 'Pon el cerdo en una olla con el jugo y las cáscaras de la naranja, los ajos, la sal y agua hasta apenas cubrir. Cocina destapado a fuego medio 1 hora y cuarto.', { m: 75, s: 'El agua se evaporó casi toda y la carne se deshace.' }),
              p('Dora en su propia grasa', 'Cuando solo quede grasa en el fondo, sube el fuego y dora los trozos 5 minutos, volteándolos.', { s: 'Crujientes por fuera, tiernos por dentro.' }),
              p('Desmenuza', 'Saca las cáscaras y desmenuza la carne con dos tenedores.')] },
    { s: 'pescado', ing: [i(500, 'g', 'de filete de pescado blanco'), i(1, 'cdta', 'de paprika'), i(1, 'taza', 'de repollo en tiras finas'), i(3, 'cda', 'de crema o mayonesa'), sal(1), aceite(1)],
      pasos: [p('Sazona el pescado', 'Corta el pescado en tiras, sécalo y mézclalo con la paprika y la sal.'),
              p('Cocina', 'Dóralo en el aceite a fuego medio-alto, 2 minutos por lado.', { s: 'Blanco, opaco y que se separa en láminas.' }),
              p('Haz la crema', 'Mezcla la crema con el jugo de medio limón y una pizca de sal. Se sirve con el repollo crudo.')] }
  ].forEach(function (z) {
    R(MX, 'Tacos de ' + z.s, '🌮', 'tacos', [20, 20], 4, 'Fácil',
      'Tacos de ' + z.s + ' en tortilla de maíz caliente, con cebolla, cilantro y limón, como en una taquería.',
      'Un buen taco es simple: relleno jugoso, tortilla <strong>bien caliente</strong> y poca cosa encima. Se arman y se comen al momento. ' + GEN.HIGIENE,
      z.ing.concat(TACO_BASE), ['Sartén pesada', 'Tabla y cuchillo', 'Paño limpio para las tortillas'],
      z.pasos.concat([
        p('Pica la cebolla y el cilantro', 'Pica la cebolla en cuadritos muy pequeños y mézclala con el cilantro. Corta los limones en cascos.'),
        p('Calienta las tortillas', 'Calienta cada tortilla en una sartén seca a fuego alto, 30 segundos por lado, y guárdalas envueltas en un paño.', { s: 'Flexibles y con algunas manchas tostadas.', e: 'Una tortilla fría se rompe al doblarla.' }),
        p('Arma y sirve', 'Pon relleno en cada tortilla (sin llenar demasiado), cebolla con cilantro, unas gotas de limón y salsa.')
      ]),
      'El relleno dura 3 días en la nevera. Las tortillas se calientan al momento.');
  });

  R(MX, 'Pico de gallo', '🍅', 'pico-de-gallo', [10, 0], 4, 'Fácil',
    'Salsa fresca de tomate, cebolla, cilantro y limón picados a cuchillo. Acompaña tacos, carnes y nachos.',
    'No se licúa: todo se pica en cubitos del mismo tamaño. Entre más parejo el corte, mejor.',
    [i(4, '', 'tomate maduro pero firme|tomates maduros pero firmes'), i(0.5, '', 'cebolla blanca'), i(0.5, 'taza', 'de cilantro picado'), i(1, '', 'ají jalapeño o serrano|ajíes jalapeños o serranos'), i(1, '', 'limón|limones'), sal(0.5)],
    ['Tazón', 'Tabla y cuchillo afilado'],
    [
      p('Pica el tomate', 'Corta los tomates en cuatro, quita las semillas y pica la pulpa en cubitos de medio centímetro.'),
      p('Pica lo demás', 'Pica la cebolla en cuadritos del mismo tamaño, el cilantro, y el ají muy fino (sin semillas si lo quieres suave).', { e: 'Lávate las manos después de tocar el ají y no te toques los ojos.' }),
      p('Mezcla y reposa', 'Mezcla todo con el jugo de limón y la sal. Deja reposar 10 minutos.', { m: 10, c: 'En el reposo los sabores se juntan.' }),
      p('Prueba', 'Prueba y corrige sal y limón.')
    ],
    'Dura 1 día en la nevera; después suelta mucha agua.');

  [
    { s: 'rojas', foto: 'enchiladas', salsa: [i(4, '', 'tomate maduro|tomates maduros'), i(1, 'cda', 'de chile o ají en polvo'), i(1, 'cdta', 'de paprika')], como: 'Hierve los tomates 5 minutos y licúalos con la cebolla, el ajo, el chile en polvo, la paprika, la sal y media taza del agua de cocción.' },
    { s: 'verdes', foto: 'enchiladas', salsa: [i(500, 'g', 'de tomate verde (tomatillo)'), i(1, '', 'ají verde|ajíes verdes'), i(0.5, 'taza', 'de cilantro')], como: 'Hierve los tomates verdes y el ají 6 minutos, hasta que cambien de color. Licúalos con la cebolla, el ajo, el cilantro, la sal y media taza del agua de cocción.' }
  ].forEach(function (z) {
    R(MX, 'Enchiladas ' + z.s + ' de pollo', '🌯', z.foto, [25, 30], 4, 'Media',
      'Tortillas de maíz rellenas de pollo, bañadas en salsa ' + z.s.replace(/s$/, '') + ' y gratinadas con queso.',
      'El paso que no se salta: pasar cada tortilla por <strong>aceite caliente unos segundos</strong>. Eso la vuelve flexible y evita que se deshaga con la salsa. ' + GEN.HIGIENE,
      [i(12, '', 'tortilla de maíz|tortillas de maíz'), i(2, '', 'pechuga de pollo|pechugas de pollo')].concat(z.salsa).concat([i(0.5, '', 'cebolla'), ajo(2), i(1.5, 'taza', 'de queso rallado que derrita'), i(0.5, 'taza', 'de crema de leche'), i(0.25, 'taza', 'de aceite'), sal(1.5)]),
      ['Olla', 'Licuadora', 'Sartén', 'Molde para horno', 'Pinzas'],
      [
        p('Cocina y desmecha el pollo', 'Cocina las pechugas en agua con sal a fuego bajo 20 minutos. Desméchalas con dos tenedores.', { m: 20 }),
        p('Haz la salsa', z.como + ' Cocínala en una olla con 1 cucharada de aceite, 8 minutos.', { m: 8, s: 'Espesa un poco y cambia a un color más oscuro.' }),
        p('Pasa las tortillas por aceite', 'Calienta el aceite en la sartén. Pasa cada tortilla 5 segundos por lado y escúrrela sobre papel.', { e: 'Si las dejas más, se ponen tiesas como tostadas.' }),
        p('Rellena y enrolla', 'Pon pollo en cada tortilla, enrolla y acomoda en el molde con el cierre hacia abajo.'),
        p('Baña y hornea', 'Cubre con la salsa caliente y el queso. Hornea a 190 °C durante 15 minutos.', { m: 15, s: 'Queso derretido y salsa burbujeando en los bordes.' }),
        p('Sirve', 'Sirve con hilos de crema y cebolla en aros por encima.')
      ],
      'Duran 2 días en la nevera. Recalienta tapadas para que no se sequen.');
  });

  R(MX, 'Chilaquiles rojos', '🍳', 'chilaquiles', [15, 20], 3, 'Fácil',
    'Triángulos de tortilla crujientes bañados en salsa roja, con queso, crema y huevo. El desayuno mexicano que arregla el día.',
    'Los chilaquiles se bañan en salsa <strong>justo antes de servir</strong>: deben quedar entre crujientes y suaves, no hechos una papilla.',
    [i(10, '', 'tortilla de maíz del día anterior|tortillas de maíz del día anterior'), i(4, '', 'tomate maduro|tomates maduros'), i(0.25, '', 'cebolla'), ajo(1), i(1, '', 'ají seco o 1 cucharadita de chile en polvo'), i(0.5, 'taza', 'de aceite'), i(0.5, 'taza', 'de queso fresco desmoronado'), i(0.25, 'taza', 'de crema'), i(3, '', 'huevo|huevos'), sal(1)],
    ['Sartén grande', 'Licuadora', 'Papel de cocina'],
    [
      p('Corta y fríe las tortillas', 'Corta cada tortilla en 8 triángulos. Fríelos en el aceite caliente, por tandas, 2 minutos, hasta que estén dorados y tiesos. Escurre sobre papel.', { s: 'Suenan al golpearlos entre sí.', c: 'También se pueden hornear 12 minutos a 190 °C con un poco de aceite.' }),
      p('Haz la salsa', 'Hierve los tomates 5 minutos y licúalos con la cebolla, el ajo, el ají y la sal. Cocina la salsa en la sartén con 1 cucharada de aceite, 6 minutos.', { m: 6 }),
      p('Fríe los huevos', 'En otra sartén, fríe los huevos a tu gusto.'),
      p('Baña los totopos', 'Echa los triángulos en la salsa hirviendo y mezcla solo 30 segundos.', { e: 'Si los dejas más, se deshacen.' }),
      p('Sirve ya', 'Sirve de inmediato con el queso, la crema, cebolla en aros y el huevo encima.')
    ],
    'No se guardan armados. Los triángulos fritos y la salsa sí, por separado.');

  R(MX, 'Fríjoles refritos', '🫘', 'frijoles-refritos', [5, 15], 4, 'Fácil',
    'Fríjoles cocidos, sofritos y machacados hasta quedar como un puré espeso. El acompañamiento de casi todo plato mexicano.',
    '"Refritos" significa bien fritos, no fritos dos veces. Usa fríjoles ya cocidos con un poco de su caldo.',
    [i(3, 'taza', 'de fríjoles cocidos (negros o rojos), con su caldo'), i(0.5, '', 'cebolla'), i(3, 'cda', 'de aceite o manteca'), sal(0.5)],
    ['Sartén grande', 'Machacador o tenedor'],
    [
      p('Sofríe la cebolla', 'Calienta el aceite a fuego medio y cocina la cebolla picada fina 5 minutos, hasta dorar.', { m: 5 }),
      p('Agrega los fríjoles', 'Agrega los fríjoles con media taza de su caldo y deja que hiervan 2 minutos.'),
      p('Machaca', 'Machaca dentro de la sartén, moviendo, hasta formar un puré. Cocina 5 minutos más.', { s: 'Puré espeso que se despega del fondo. Si se seca, agrega caldo.' }),
      p('Sirve', 'Corrige la sal y sirve con queso desmoronado encima.')
    ],
    'Duran 4 días en la nevera. Recalienta con un chorrito de agua.');

  R(MX, 'Arroz rojo mexicano', '🍚', 'arroz-rojo', [10, 30], 4, 'Fácil',
    'Arroz dorado en aceite y cocinado en un puré de tomate, cebolla y ajo. Suelto y de color anaranjado.',
    'El paso que lo distingue: <strong>dorar el arroz crudo</strong> en aceite antes de agregar el líquido. Eso lo deja suelto y con sabor a nuez.',
    [i(1.5, 'taza', 'de arroz blanco'), i(3, '', 'tomate maduro|tomates maduros'), i(0.25, '', 'cebolla'), ajo(1), i(2.25, 'taza', 'de agua o caldo de pollo'), i(3, 'cda', 'de aceite'), sal(1), i(0.5, 'taza', 'de arvejas y zanahoria en cubitos', 'Opcional.')],
    ['Olla con tapa', 'Licuadora', 'Colador'],
    [
      p('Licúa el tomate', 'Licúa los tomates con la cebolla, el ajo y media taza del agua.'),
      p('Dora el arroz', 'Calienta el aceite a fuego medio y dora el arroz (lavado y bien escurrido), moviendo, unos 5 minutos.', { m: 5, s: 'Granos color dorado claro que suenan como arena.' }),
      p('Agrega el puré', 'Vierte el puré de tomate colado (cuidado, salpica) y cocina 2 minutos, hasta que se seque un poco.'),
      p('Cocina', 'Agrega el resto del agua, la sal y las verduras. Cuando hierva, tapa, baja el fuego al mínimo y cocina 18 minutos sin destapar.', { m: 18 }),
      p('Reposa y esponja', 'Apaga, deja reposar 5 minutos tapado y esponja con un tenedor.')
    ],
    'Dura 3 días en la nevera.');

  R(MX, 'Burritos de carne', '🌯', 'burritos', [15, 15], 4, 'Fácil',
    'Tortilla de harina grande, rellena de carne, arroz, fríjoles y queso, cerrada como un paquete y sellada en sartén.',
    'El truco está en el doblado: <strong>tortilla tibia</strong>, relleno en el centro y los lados hacia adentro antes de enrollar.',
    [i(4, '', 'tortilla de harina grande|tortillas de harina grandes'), i(400, 'g', 'de carne molida de res'), i(0.5, '', 'cebolla'), i(1, 'cdta', 'de comino'), i(1, 'cdta', 'de paprika'), i(1.5, 'taza', 'de arroz cocido'), i(1, 'taza', 'de fríjoles cocidos o refritos'), i(1, 'taza', 'de queso rallado'), sal(1), aceite(1)],
    ['Sartén grande', 'Espátula'],
    [
      p('Cocina la carne', 'Dora la carne en el aceite a fuego alto 6 minutos, desbaratándola. Agrega la cebolla picada, el comino, la paprika y la sal, y cocina 4 minutos más.', { m: 10, e: GEN.HIGIENE }),
      p('Calienta las tortillas', 'Calienta cada tortilla 20 segundos por lado en una sartén seca.'),
      p('Rellena', 'En el centro de cada tortilla pon una línea de arroz, fríjoles, carne y queso, dejando 5 centímetros libres por los lados.', { e: 'Si la llenas demasiado, no cierra.' }),
      p('Dobla', 'Dobla los dos lados hacia adentro y enrolla desde abajo, apretando.'),
      p('Sella', 'Dora cada burrito con el cierre hacia abajo, 2 minutos, y 1 minuto por el otro lado.', { s: 'Cierre pegado y dorado.' })
    ],
    'Envueltos en papel aluminio duran 3 días en la nevera y se congelan bien.');

  R(MX, 'Sopa de tortilla', '🥣', 'sopa-tortilla', [15, 25], 4, 'Fácil',
    'Caldo rojo de tomate con tiras de tortilla crujientes, aguacate, queso y crema, que se arma en el plato.',
    'Las tiras de tortilla se ponen <strong>en el plato y al final</strong>, para que lleguen crujientes a la mesa.',
    [i(4, '', 'tomate maduro|tomates maduros'), i(0.5, '', 'cebolla'), ajo(2), i(5, 'taza', 'de caldo de pollo'), i(6, '', 'tortilla de maíz|tortillas de maíz'), i(0.5, 'taza', 'de aceite'), i(1, '', 'aguacate|aguacates'), i(0.5, 'taza', 'de queso fresco en cubos'), i(0.25, 'taza', 'de crema'), sal(1)],
    ['Olla', 'Licuadora', 'Sartén', 'Papel de cocina'],
    [
      p('Asa y licúa', 'Asa los tomates, la cebolla y los ajos en una sartén seca hasta que tengan manchas negras, unos 8 minutos. Licúalos con 1 taza de caldo.', { m: 8, c: 'Asar da un sabor ahumado que hervir no da.' }),
      p('Cocina el caldo', 'Fríe el puré en una olla con 1 cucharada de aceite 5 minutos. Agrega el resto del caldo y la sal, y hierve suave 10 minutos.', { m: 10 }),
      p('Fríe las tiras', 'Corta las tortillas en tiras delgadas y fríelas en el aceite 2 minutos, hasta dorar. Escurre sobre papel.'),
      p('Arma en el plato', 'En cada plato pon tiras de tortilla, cubos de aguacate y queso. Vierte el caldo hirviendo y termina con crema.')
    ],
    'El caldo dura 4 días en la nevera. Lo demás se prepara al servir.');

  R(MX, 'Agua de horchata', '🥛', 'horchata', [15, 0], 6, 'Fácil',
    'Bebida fría de arroz y canela, blanca, dulce y muy refrescante.',
    'El arroz necesita <strong>remojo de al menos 4 horas</strong> (mejor toda la noche) para que se pueda licuar bien.',
    [i(1, 'taza', 'de arroz blanco'), i(1, '', 'astilla de canela|astillas de canela'), i(5, 'taza', 'de agua'), i(1, 'taza', 'de leche', 'Opcional, la hace más cremosa.'), i(0.5, 'taza', 'de azúcar'), i(1, 'cdta', 'de esencia de vainilla')],
    ['Licuadora', 'Colador fino o tela', 'Jarra', 'Tazón'],
    [
      p('Remoja', 'Lava el arroz y ponlo en un tazón con la canela partida y 2 tazas del agua. Deja en remojo mínimo 4 horas.'),
      p('Licúa', 'Licúa el arroz con su agua y la canela durante 3 minutos.', { m: 3, s: 'Líquido blanco, sin granos enteros.' }),
      p('Cuela', 'Cuela por un colador fino o una tela, apretando para sacar todo el líquido.', { e: 'Sin colar bien queda arenosa.' }),
      p('Endulza', 'Agrega el resto del agua, la leche, el azúcar y la vainilla. Revuelve hasta disolver.'),
      p('Sirve', 'Sirve con mucho hielo y canela en polvo. Revuelve antes de servir: el arroz se asienta.')
    ],
    'Dura 3 días en la nevera.');

  // ================================================================ PERUANA
  var PE = 'Cocina peruana';
  var FRESCO = '<strong>Pescado para ceviche:</strong> debe ser muy fresco, o haber estado congelado antes (el limón da sabor y textura, pero no elimina parásitos). Compra en un sitio de confianza y manténlo frío.';

  [
    { s: 'pescado', ing: i(500, 'g', 'de pescado blanco muy fresco (corvina, lenguado o tilapia)'), prep: 'Corta el pescado en cubos de 2 centímetros con un cuchillo bien afilado y manténlo en la nevera.' },
    { s: 'camarón', ing: i(500, 'g', 'de camarones pelados'), prep: 'Cocina los camarones 1 minuto en agua hirviendo con sal, solo hasta que cambien de color, y pásalos a agua con hielo. Escúrrelos.' }
  ].forEach(function (z) {
    R(PE, 'Ceviche de ' + z.s, '🐟', 'ceviche', [20, 0], 4, 'Media',
      'El plato bandera del Perú: ' + z.s + ' marinado unos minutos en limón con ají, cebolla morada y cilantro.',
      'El ceviche peruano se marina <strong>solo de 5 a 10 minutos</strong> y se come enseguida: no es pescado "cocido" por horas en limón. ' + FRESCO,
      [z.ing, i(12, '', 'limón|limones', 'Necesitas 1 taza de jugo.'), i(1, '', 'cebolla morada|cebollas moradas'), i(1, '', 'ají limo o ají fresco|ajíes limo o ajíes frescos'), i(0.25, 'taza', 'de cilantro picado'), sal(1), i(1, '', 'camote o batata cocida|camotes o batatas cocidas'), i(1, 'taza', 'de maíz tierno cocido')],
      ['Tazón de vidrio o acero (frío)', 'Exprimidor', 'Cuchillo muy afilado'],
      [
        p('Corta la cebolla', 'Corta la cebolla en plumas muy finas y déjala 5 minutos en agua con hielo. Escúrrela.', { c: 'El agua fría la deja crujiente y le quita el picor.' }),
        p('Prepara lo principal', z.prep),
        p('Exprime los limones al momento', 'Exprime los limones sin apretar hasta el final.', { e: 'Si los exprimes hasta la última gota, sale el amargo de la cáscara.' }),
        p('Sazona', 'En el tazón frío mezcla el ' + z.s + ' con la sal y el ají picado muy fino. Revuelve 1 minuto.'),
        p('Agrega el limón', 'Vierte el jugo de limón, agrega el cilantro y la mitad de la cebolla, y mezcla. Deja marinar entre 5 y 10 minutos.', { m: 5, s: 'El pescado se pone blanco y opaco por fuera, pero sigue tierno por dentro.' }),
        p('Sirve de inmediato', 'Sirve con el resto de la cebolla encima, rodajas de camote y maíz, y un poco del jugo (la "leche de tigre").')
      ],
      'El ceviche no se guarda: se prepara y se come.');
  });

  R(PE, 'Lomo saltado', '🥩', 'lomo-saltado', [20, 10], 3, 'Media',
    'Tiras de res salteadas a fuego altísimo con cebolla, tomate y soya, mezcladas con papas fritas y servidas con arroz.',
    'Es un salteado de origen chino-peruano: <strong>fuego al máximo, por tandas y todo listo antes de empezar</strong>. La cebolla y el tomate deben quedar crujientes. ' + GEN.HIGIENE,
    [i(500, 'g', 'de lomo de res en tiras de 1 cm'), i(1, '', 'cebolla morada grande|cebollas moradas grandes'), i(2, '', 'tomate firme|tomates firmes'), i(1, '', 'ají amarillo o pimentón amarillo en tiras'), ajo(2), i(3, 'cda', 'de salsa de soya'), i(1, 'cda', 'de vinagre'), i(2, 'cda', 'de cilantro picado'), i(2, 'taza', 'de papas fritas en bastones'), aceite(3), sal(0.5), i(null, '', 'Arroz blanco para servir')],
    ['Sartén grande y pesada o wok', 'Tazón', 'Espátula'],
    [
      p('Corta todo', 'Corta la cebolla en gajos gruesos y el tomate en 8 gajos, sin semillas. Mezcla la soya con el vinagre. Seca y sala la carne.'),
      p('Sella la carne por tandas', 'Calienta la sartén al máximo con 1 cucharada de aceite hasta que humee. Dora la mitad de la carne 1 minuto sin mover, voltea 30 segundos y sácala. Repite.', { s: 'Dorada por fuera, rosada por dentro.', e: 'Toda de una vez, suelta jugo y se hierve.' }),
      p('Saltea la cebolla y el ají', 'Con otra cucharada de aceite, saltea la cebolla, el ají y el ajo 1 minuto.', { m: 1 }),
      p('Agrega tomate y salsa', 'Agrega el tomate, devuelve la carne y vierte la soya con vinagre. Saltea 1 minuto más.', { s: 'Tomate caliente pero entero; jugo oscuro en el fondo.' }),
      p('Mezcla con las papas y sirve', 'Apaga, agrega el cilantro y las papas fritas, mezcla y sirve de inmediato con arroz blanco.', { c: 'Las papas entran al final para que no se ablanden.' })
    ],
    'Se come recién hecho.');

  R(PE, 'Ají de gallina', '🍛', 'aji-de-gallina', [25, 35], 4, 'Media',
    'Pollo desmechado en una crema amarilla, suave y apenas picante, espesada con pan. Se sirve con papa, arroz, huevo y aceitunas.',
    'El sabor viene del <strong>ají amarillo</strong> (en pasta, en tiendas latinas). Si no lo consigues, usa pimentón amarillo licuado con un poco de ají. ' + GEN.HIGIENE,
    [i(2, '', 'pechuga de pollo con hueso|pechugas de pollo con hueso'), i(4, '', 'rebanada de pan de molde sin corteza|rebanadas de pan de molde sin corteza'), i(1, 'taza', 'de leche evaporada'), i(3, 'cda', 'de pasta de ají amarillo'), i(1, '', 'cebolla|cebollas'), ajo(2), i(0.25, 'taza', 'de nueces picadas'), i(0.25, 'taza', 'de queso parmesano'), aceite(2), sal(1), i(null, '', 'Papa cocida, arroz, huevo duro y aceitunas para servir')],
    ['Olla', 'Licuadora', 'Sartén honda'],
    [
      p('Cocina el pollo', 'Cocina las pechugas en 4 tazas de agua con sal, a fuego bajo, 25 minutos. Guarda el caldo y desmecha el pollo en hilos gruesos.', { m: 25 }),
      p('Licúa el pan', 'Remoja el pan en la leche evaporada y licúalo con 1 taza del caldo.'),
      p('Haz el sofrito', 'Sofríe la cebolla picada muy fina 6 minutos. Agrega el ajo y la pasta de ají y cocina 3 minutos más.', { m: 9, s: 'Sofrito amarillo intenso que huele a ají cocido, no a crudo.' }),
      p('Espesa', 'Vierte el pan licuado y cocina a fuego bajo 5 minutos, revolviendo.', { s: 'Crema espesa que cubre la cuchara. Si está muy densa, agrega caldo.' }),
      p('Agrega el pollo', 'Agrega el pollo, las nueces y el queso. Calienta 3 minutos y corrige la sal.'),
      p('Sirve', 'Sirve sobre rodajas de papa cocida, con arroz, medio huevo duro y una aceituna.')
    ],
    'Dura 3 días en la nevera. Al recalentar, suéltalo con un poco de leche o caldo.');

  R(PE, 'Arroz chaufa', '🍚', 'arroz-chaufa', [15, 10], 3, 'Fácil',
    'El arroz frito peruano de los chifas: arroz salteado con pollo, tortilla de huevo en tiras, cebolla china y soya.',
    'Usa arroz <strong>frío, del día anterior</strong>, y fuego muy alto. Con arroz recién hecho queda masudo.',
    [i(3, 'taza', 'de arroz blanco cocido y frío'), i(2, '', 'huevo|huevos'), i(1, '', 'pechuga de pollo en cubitos|pechugas de pollo en cubitos'), i(4, '', 'tallo de cebolla china (cebollín)|tallos de cebolla china (cebollín)'), i(1, 'cdta', 'de jengibre rallado'), ajo(1), i(3, 'cda', 'de salsa de soya'), i(1, 'cdta', 'de aceite de ajonjolí'), aceite(3)],
    ['Sartén grande o wok', 'Espátula', 'Tabla y cuchillo'],
    [
      p('Haz la tortilla', 'Bate los huevos y haz una tortilla delgada con 1 cucharadita de aceite. Enróllala y córtala en tiras.'),
      p('Dora el pollo', 'A fuego alto, dora el pollo salado en 1 cucharada de aceite, 4 minutos. Sácalo.', { m: 4 }),
      p('Saltea el arroz', 'Con el resto del aceite, saltea el jengibre, el ajo y la parte blanca de la cebolla 20 segundos. Agrega el arroz suelto y saltea 3 minutos.', { m: 3, s: 'Granos sueltos que saltan.' }),
      p('Sazona', 'Vierte la soya por el borde de la sartén, mezcla, y agrega el pollo y la tortilla.'),
      p('Termina', 'Apaga, agrega el aceite de ajonjolí y la parte verde de la cebolla picada, mezcla y sirve.')
    ],
    'Dura 2 días en la nevera.');

  [{ s: 'pollo', ing: [i(1, '', 'pechuga de pollo cocida y desmechada|pechugas de pollo cocidas y desmechadas')], q: 'el pollo desmechado' }, { s: 'atún', ing: [i(2, '', 'lata de atún escurrido|latas de atún escurrido')], q: 'el atún desmenuzado' }].forEach(function (z) {
    R(PE, 'Causa limeña de ' + z.s, '🥔', 'causa', [40, 25], 6, 'Media',
      'Pastel frío de puré de papa amarilla con limón y ají, relleno de ' + z.s + ' con mayonesa y aguacate.',
      'La masa debe quedar <strong>suave y sin grumos</strong>, como plastilina. Se sirve fría, así que hazla con anticipación.',
      [i(1000, 'g', 'de papa amarilla (o papa harinosa)'), i(2, 'cda', 'de pasta de ají amarillo'), i(2, '', 'limón|limones'), i(3, 'cda', 'de aceite'), sal(1.5)].concat(z.ing).concat([i(0.33, 'taza', 'de mayonesa'), i(0.25, '', 'cebolla morada picada muy fina'), i(1, '', 'aguacate|aguacates'), i(2, '', 'huevo duro|huevos duros'), i(null, '', 'Aceitunas para decorar')]),
      ['Olla', 'Pisapuré', 'Molde o aro', 'Papel film', 'Tazón'],
      [
        p('Cocina y prensa la papa', 'Hierve las papas con cáscara hasta que estén blandas, unos 25 minutos. Pélalas calientes y pásalas por el pisapuré.', { m: 25, e: 'Si se enfrían antes de prensarlas, quedan grumos.' }),
        p('Haz la masa', 'Cuando el puré esté tibio, agrega el ají, el jugo de limón, el aceite y la sal. Amasa con las manos hasta que quede lisa.', { s: 'Masa amarilla, suave, que no se pega a las manos.' }),
        p('Prepara el relleno', 'Mezcla ' + z.q + ' con la mayonesa y la cebolla.'),
        p('Arma en capas', 'Forra un molde con papel film. Pon la mitad de la masa y aplánala; encima el aguacate en láminas y el relleno; cubre con el resto de la masa.'),
        p('Enfría y sirve', 'Lleva a la nevera 1 hora. Desmolda, decora con rodajas de huevo y aceitunas, y corta en porciones.', { m: 60 })
      ],
      'Dura 2 días en la nevera.');
  });

  R(PE, 'Papa a la huancaína', '🥔', 'huancaina', [15, 25], 4, 'Fácil',
    'Rodajas de papa cocida bañadas en una crema fría de queso y ají amarillo. Entrada clásica peruana.',
    'La salsa se hace en licuadora en 2 minutos. El espesor se ajusta con <strong>galletas de soda</strong> (más espesa) o leche (más suelta).',
    [i(6, '', 'papa mediana|papas medianas'), i(250, 'g', 'de queso fresco'), i(3, 'cda', 'de pasta de ají amarillo'), i(0.75, 'taza', 'de leche evaporada'), i(4, '', 'galleta de soda|galletas de soda'), i(3, 'cda', 'de aceite'), sal(0.5), i(null, '', 'Lechuga, huevo duro y aceitunas para servir')],
    ['Olla', 'Licuadora'],
    [
      p('Cocina las papas', 'Hierve las papas con cáscara en agua con sal, unos 25 minutos. Pélalas y córtalas en rodajas gruesas.', { m: 25 }),
      p('Licúa la salsa', 'Licúa el queso, el ají, la leche, las galletas, el aceite y la sal hasta que quede una crema lisa.', { s: 'Crema amarilla que cae en cinta gruesa.', c: 'Muy espesa: más leche. Muy líquida: otra galleta.' }),
      p('Sirve', 'Pon hojas de lechuga en el plato, las papas encima y báñalas con la salsa. Decora con huevo duro y aceitunas.')
    ],
    'La salsa dura 3 días en la nevera.');

  R(PE, 'Tallarines verdes', '🍝', 'tallarines-verdes', [15, 15], 4, 'Fácil',
    'Espaguetis en una salsa verde cremosa de espinaca, albahaca y queso fresco: el "pesto" peruano.',
    'A diferencia del pesto italiano, esta salsa <strong>sí se cocina</strong> unos minutos y lleva leche y queso fresco.',
    [i(400, 'g', 'de espaguetis'), i(2, 'taza', 'de espinaca'), i(1, 'taza', 'de albahaca'), i(150, 'g', 'de queso fresco'), i(0.5, 'taza', 'de leche evaporada'), i(0.5, '', 'cebolla'), ajo(2), aceite(2), sal(1)],
    ['Olla grande', 'Licuadora', 'Sartén honda'],
    [
      p('Escalda las hojas', 'Sumerge la espinaca y la albahaca 20 segundos en agua hirviendo y pásalas a agua fría.', { c: 'Así la salsa queda verde brillante y no oscura.' }),
      p('Licúa', 'Licúa las hojas escurridas con el queso, la leche y la sal.'),
      p('Cocina la pasta', 'Cocina los espaguetis en agua con sal según el paquete. Guarda media taza del agua.'),
      p('Cocina la salsa', 'Sofríe la cebolla picada fina y el ajo 4 minutos. Agrega la salsa verde y cocina 3 minutos a fuego bajo.', { m: 3, e: 'Si hierve fuerte, pierde el color.' }),
      p('Une', 'Mezcla la pasta con la salsa, suelta con el agua de cocción si hace falta, y sirve con queso rallado.')
    ],
    'Dura 2 días en la nevera.');
})();
