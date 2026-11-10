/* ============================================================
   COCINA COLOMBIANA (parte 2): masas, pasabocas, postres y bebidas
   ============================================================ */
(function () {
  var i = GEN.i, p = GEN.p, ajo = GEN.ajo, sal = GEN.sal, aceite = GEN.aceite, R = GEN.R;
  var CO = 'Cocina colombiana';
  function u(c, s, pl) { return i(c, '', s + '|' + pl); }

  // ---------------------------------------------------------------- Tamales
  R(CO, 'Tamales tolimenses', '🫔', 'tamales', [90, 180], 8, 'Difícil',
    'Masa de maíz con arroz, cerdo, pollo, huevo y verduras, envuelta en hoja de plátano y cocida al vapor. El plato de las celebraciones.',
    'Es un plato de <strong>un día entero</strong>, pero se arma por pasos. Se pueden preparar el guiso y el relleno el día anterior. Las hojas de plátano se pasan por la llama para volverlas flexibles.',
    [i(4, 'taza', 'de harina de maíz precocida'), u(1, 'libra de costilla de cerdo', 'libras de costilla de cerdo'), u(2, 'presa de pollo', 'presas de pollo'), i(1, 'taza', 'de arroz cocido'),
     i(1, 'taza', 'de arvejas'), u(2, 'zanahoria', 'zanahorias'), u(4, 'papa', 'papas'), u(4, 'huevo cocido', 'huevos cocidos'), u(3, 'tomate', 'tomates'), u(4, 'cebolla larga', 'cebollas largas'),
     ajo(4), i(1, 'cdta', 'de comino'), sal(3), i(5, 'taza', 'de caldo (del cerdo y el pollo)'), aceite(3), u(8, 'trozo de hoja de plátano (30 cm)', 'trozos de hoja de plátano (30 cm)'), i(null, '', 'Hilo de cocina o fibra para amarrar')],
    ['Olla grande para vapor', 'Tazón grande', 'Tabla y cuchillo', 'Hilo de cocina', 'Pinzas'],
    [
      p('Cocina las carnes', 'Cocina el cerdo y el pollo en agua con sal, ajo y cebolla 50 minutos hasta que ablanden. Reserva el caldo (lo necesitas) y desmecha o corta las carnes en trozos.', { m: 50, s: 'Las carnes se separan con facilidad.' }),
      p('Prepara el guiso', 'Sofríe en aceite la cebolla larga, el tomate y el ajo picados con el comino 8 minutos. Agrega las arvejas y la zanahoria en cubos pequeños y cocina 5 minutos más. Mezcla con el arroz y las carnes.', { m: 13 }),
      p('Haz la masa', 'En un tazón mezcla la harina con 4 tazas del caldo tibio, la sal y 2 cucharadas de aceite. Amasa hasta que quede una masa suave, como puré espeso.', { s: 'Se pega un poco a las manos pero no se deshace.', c: 'Si queda dura, agrega caldo; si queda muy blanda, un poco más de harina.' }),
      p('Suaviza las hojas', 'Pasa cada trozo de hoja de plátano un momento por la llama o por agua hirviendo hasta que cambie de color y se vuelva flexible. Sécalo.', { e: 'Si las usas sin suavizar se rompen al doblarlas.' }),
      p('Arma', 'Sobre una hoja extiende 3 cucharadas de masa en un rectángulo. Pon encima guiso, un trozo de papa cocida, medio huevo duro y más guiso. Cubre con otra capa fina de masa.', { c: 'No lo rellenes demasiado o se abre al cocinar.' }),
      p('Envuelve', 'Dobla la hoja sobre el relleno como un paquete, cierra los extremos hacia dentro y amarra con hilo en forma de cruz.', { s: 'El paquete queda firme y sin huecos.' }),
      p('Cocina al vapor', 'En la olla pon una base de hojas y un dedo de agua, acomoda los tamales y cubre con más hojas. Tapa y cocina 2 horas a fuego medio, agregando agua caliente si se seca.', { m: 120, s: 'La masa está firme y se despega de la hoja al abrir uno.' }),
      p('Reposa y sirve', 'Deja reposar 10 minutos antes de sacarlos y sirve calientes con chocolate o ají.', { m: 10 })
    ],
    'Se guardan 4 días en la nevera con la hoja y hasta 2 meses en el congelador. Se recalientan al vapor.');

  // ---------------------------------------------------------------- Empanadas
  R(CO, 'Empanadas colombianas de carne y papa', '🥟', 'empanadas', [45, 30], 12, 'Media',
    'Empanadas de masa de maíz amarilla, rellenas de carne molida con papa y fritas hasta quedar crocantes. Con ají, son lo mejor.',
    'La masa debe quedar <strong>suave y sin grietas</strong>. Dóblala dentro de un plástico para que no se rompa al cerrar.',
    [i(2, 'taza', 'de harina de maíz precocida amarilla'), i(2.25, 'taza', 'de agua tibia'), sal(1), u(0.5, 'libra de carne molida', 'libras de carne molida'), u(2, 'papa pastusa', 'papas pastusas'), u(2, 'cebolla larga', 'cebollas largas'), u(1, 'tomate', 'tomates'), ajo(2), i(0.5, 'cdta', 'de comino'), i(null, '', 'Aceite para freír'), i(null, '', 'Ají colombiano', 'Para servir. Ver la receta.')],
    ['Tazón', 'Sartén honda', 'Bolsa plástica o papel', 'Espumadera'],
    [
      p('Cocina la papa', 'Pela las papas, córtalas en cubos pequeños y cocínalas en agua con sal 12 minutos hasta que estén blandas. Escúrrelas.', { m: 12 }),
      p('Haz el relleno', 'Sofríe la cebolla, el tomate y el ajo picados, agrega la carne y el comino, y cocina 10 minutos hasta que seque. Mezcla con la papa y deja enfriar.', { m: 10, e: 'Si el relleno está caliente o húmedo, la masa se rompe.' }),
      p('Haz la masa', 'Mezcla la harina con el agua tibia y la sal. Amasa 3 minutos y deja reposar 5 minutos tapada.', { m: 5, s: 'Suave y lisa, sin grietas.' }),
      p('Forma las empanadas', 'Forma bolas de masa del tamaño de una mandarina. Aplástalas entre dos plásticos hasta un círculo de 10 centímetros. Pon una cucharada de relleno, dobla y presiona los bordes.', { c: 'Usa una taza o un plato pequeño como molde para que queden parejas.' }),
      p('Fríe', 'Calienta aceite a fuego medio y fríe las empanadas 3 a 4 minutos por lado, hasta que estén doradas.', { m: 7, s: 'Doradas, infladas y crocantes.', e: 'Con el aceite muy caliente se doran por fuera y quedan crudas dentro.' }),
      p('Sirve', 'Escurre en papel de cocina y sirve calientes con ají.')
    ],
    'Se congelan crudas hasta 2 meses y se fríen sin descongelar.');

  // ---------------------------------------------------------------- Papas rellenas
  R(CO, 'Papas rellenas', '🥔', 'papas-rellenas', [45, 25], 8, 'Media',
    'Bolas de puré de papa rellenas de carne guisada, apanadas y fritas. Crocantes por fuera, suaves por dentro.',
    'El puré debe estar <strong>seco, no aguado</strong>: si se cocina en agua en exceso las bolas se rompen al freír.',
    [u(2, 'libra de papa pastusa', 'libras de papa pastusa'), u(1, 'huevo', 'huevos'), i(0.5, 'taza', 'de harina de trigo'), i(1, 'taza', 'de pan rallado'), i(1.5, 'taza', 'de carne molida o desmechada guisada'), i(2, 'cda', 'de hogao'), sal(1), i(null, '', 'Aceite para freír')],
    ['Olla', 'Machacador', 'Tres platos', 'Sartén honda'],
    [
      p('Haz el puré', 'Pela las papas, pártelas y cocínalas 20 minutos con sal. Escúrrelas bien y machácalas hasta que no queden grumos. Deja enfriar.', { m: 20 }),
      p('Prepara el relleno', 'Mezcla la carne con el hogao y deja enfriar por completo.'),
      p('Arma', 'Toma una porción de puré, aplánala en la mano, pon una cucharada de carne y cierra formando una bola o un óvalo.', { c: 'Mójate las manos con agua para que no se pegue.' }),
      p('Apana', 'Pasa cada papa por harina, luego por huevo batido y por pan rallado. Refrigera 15 minutos.', { m: 15 }),
      p('Fríe', 'Fríe en aceite a fuego medio 3 minutos por lado hasta que estén doradas.', { m: 6, s: 'Doradas y crocantes.' })
    ],
    'Se congelan sin freír hasta 1 mes.');

  // ---------------------------------------------------------------- Arepa de choclo
  R(CO, 'Arepa de choclo con queso', '🌽', 'arepa-choclo', [15, 20], 6, 'Fácil',
    'Arepa dulce de maíz tierno licuado, cocida en sartén y rellena de queso. Típica de la sabana y los Llanos.',
    'Usa <strong>mazorca tierna (choclo)</strong>. La mezcla debe quedar espesa para poder formar las arepas.',
    [u(4, 'mazorca tierna', 'mazorcas tiernas'), i(0.5, 'taza', 'de harina de maíz precocida'), i(2, 'cda', 'de azúcar'), i(2, 'cda', 'de mantequilla derretida'), sal(0.25), i(1, 'taza', 'de queso fresco o mozzarella'), u(1, 'huevo', 'huevos')],
    ['Licuadora', 'Sartén antiadherente', 'Espátula'],
    [
      p('Desgrana y licúa', 'Desgrana las mazorcas y licúa los granos con el huevo, la mantequilla, el azúcar y la sal hasta que quede una pasta gruesa.', { s: 'Pasta espesa con textura de maíz molido.' }),
      p('Espesa', 'Pasa la mezcla a un tazón, agrega la harina y mezcla. Deja reposar 5 minutos: se hace más firme.', { m: 5, c: 'Si sigue floja, agrega harina cucharada por cucharada.' }),
      p('Forma las arepas', 'Con las manos húmedas toma una porción, aplana en círculo, pon una tajada de queso y cubre con otra capa de masa.'),
      p('Cocina', 'En sartén caliente con un poquito de mantequilla, cocina 4 minutos por lado a fuego medio hasta que estén doradas.', { m: 8, s: 'Doradas por fuera y con el queso derretido.' })
    ],
    'Se recalientan en sartén. Dura 2 días en la nevera.');

  // ---------------------------------------------------------------- Almojabanas
  R(CO, 'Almojábanas', '🧀', 'almojabanas', [20, 25], 12, 'Media',
    'Panecillos suaves de queso cuajada y harina de maíz o cuajada, típicos del desayuno bogotano. Se comen con chocolate.',
    'Se hacen con queso <strong>cuajada o campesino rallado fino</strong>. La masa debe quedar suave y húmeda al tacto.',
    [i(3, 'taza', 'de queso cuajada o campesino rallado'), i(1, 'taza', 'de harina de maíz precocida blanca'), i(2, 'cda', 'de azúcar'), i(1, 'cdta', 'de polvo de hornear'), u(2, 'huevo', 'huevos'), i(2, 'cda', 'de mantequilla blanda'), i(0.25, 'taza', 'de leche (si hace falta)')],
    ['Tazón', 'Bandeja para horno', 'Papel para hornear'],
    [
      p('Precalienta', 'Enciende el horno a 190 °C.'),
      p('Mezcla', 'Mezcla el queso con la harina, el azúcar y el polvo de hornear. Agrega los huevos y la mantequilla y amasa con las manos.', { s: 'La masa se compacta y no se pega, ni queda reseca.', c: 'Si está seca, agrega leche cucharada por cucharada.' }),
      p('Forma', 'Haz bolitas del tamaño de una nuez y ponlas separadas 3 centímetros sobre la bandeja con papel.'),
      p('Hornea', 'Hornea 20 a 25 minutos hasta que estén infladas y doradas por abajo.', { m: 22, s: 'Dorado suave arriba, firme al tocar.' })
    ],
    'Se comen tibias. Duran 2 días; recalienta 5 minutos al horno.');

  // ---------------------------------------------------------------- Pandebono
  R(CO, 'Pandebono', '🍞', 'pandebono', [20, 20], 12, 'Media',
    'Panecillos de queso y almidón de yuca, crocantes por fuera y suaves por dentro. Se comen con café o chocolate.',
    'Se hacen con <strong>almidón de yuca (agrio) y queso costeño</strong>. Amasa con paciencia: queda mejor si la masa está suave.',
    [i(2, 'taza', 'de almidón de yuca (o fécula)'), i(1, 'taza', 'de harina de maíz precocida'), i(2, 'taza', 'de queso costeño rallado'), u(1, 'huevo', 'huevos'), i(0.25, 'taza', 'de leche'), i(2, 'cda', 'de azúcar'), i(1, 'cdta', 'de polvo de hornear'), sal(0.25)],
    ['Tazón', 'Bandeja', 'Papel para hornear'],
    [
      p('Mezcla secos', 'Mezcla el almidón, la harina, el azúcar, el polvo de hornear y la sal. Agrega el queso.'),
      p('Une', 'Agrega el huevo y la leche y amasa con las manos hasta formar una masa suave.', { s: 'La masa no se pega y se moldea sin romperse.', c: 'Agrega leche de a poquitos si está seca.' }),
      p('Forma', 'Haz bolas o rosquitas de 4 centímetros y ponlas separadas sobre papel para hornear.'),
      p('Hornea', 'Hornea a 190 °C por 20 minutos hasta que estén doradas.', { m: 20, s: 'Doraditos y firmes.' })
    ],
    'Se comen tibios; duran 2 días.');

  // ---------------------------------------------------------------- Buñuelos
  R(CO, 'Buñuelos colombianos', '🧆', 'bunuelos', [20, 20], 20, 'Media',
    'Bolitas fritas de queso y almidón de maíz, doradas y esponjosas. Imprescindibles en la Navidad colombiana.',
    'El secreto es el <strong>aceite a temperatura media</strong>: si está muy caliente, se doran por fuera y quedan crudos por dentro.',
    [i(2, 'taza', 'de queso costeño rallado fino'), i(1, 'taza', 'de almidón de yuca'), i(0.5, 'taza', 'de harina de maíz'), u(1, 'huevo', 'huevos'), i(2, 'cda', 'de azúcar'), i(0.5, 'cdta', 'de polvo de hornear'), i(null, '', 'Leche para amasar'), i(null, '', 'Aceite para freír')],
    ['Tazón', 'Sartén honda', 'Espumadera'],
    [
      p('Mezcla', 'Mezcla el queso, el almidón, la harina de maíz, el azúcar y el polvo de hornear. Agrega el huevo.'),
      p('Amasa', 'Agrega leche, una cucharada cada vez, y amasa hasta formar una masa suave, no pegajosa.', { s: 'La masa se moldea sin romperse.', e: 'Si queda blanda se deshace en el aceite.' }),
      p('Forma', 'Haz bolitas del tamaño de una nuez, redondas y lisas.'),
      p('Fríe', 'Calienta el aceite a fuego medio-bajo. Fríe los buñuelos de a pocos, moviéndolos con la espumadera, 5 a 6 minutos hasta que estén dorados y floten.', { m: 6, s: 'Dorados, grandes y huecos por dentro.', e: 'Con el aceite muy caliente quedan crudos por dentro.' })
    ],
    'Mejor el mismo día, tibios.');

  // ---------------------------------------------------------------- Natilla
  R(CO, 'Natilla colombiana', '🍮', 'natilla', [10, 30], 8, 'Fácil',
    'Postre navideño de leche, panela y maicena con canela, cremoso y firme, que se corta en cuadros.',
    'Hay que <strong>revolver sin parar</strong> hasta que espese para que no se formen grumos ni se pegue.',
    [i(4, 'taza', 'de leche'), i(0.75, 'taza', 'de maicena'), i(1, 'taza', 'de panela rallada (o azúcar morena)'), u(1, 'astilla de canela', 'astillas de canela'), i(1, 'cda', 'de mantequilla'), i(0.25, 'taza', 'de coco rallado (opcional)')],
    ['Olla', 'Cuchara de palo', 'Molde o refractaria'],
    [
      p('Disuelve la maicena', 'En un tazón disuelve la maicena en 1 taza de leche fría hasta que no queden grumos.', { e: 'Si la maicena cae en la leche caliente, se hacen grumos.' }),
      p('Calienta', 'En la olla pon el resto de la leche, la panela y la canela. Calienta a fuego medio hasta que la panela se disuelva.', { m: 5 }),
      p('Espesa', 'Agrega la mezcla de maicena y revuelve sin parar con la cuchara de palo 10 a 12 minutos, hasta que espese y se despegue del fondo.', { m: 12, s: 'Al pasar la cuchara se ve el fondo de la olla por un momento.' }),
      p('Termina', 'Retira la canela y agrega la mantequilla y el coco. Pasa a un molde humedecido.'),
      p('Enfría', 'Deja enfriar 30 minutos y refrigera 2 horas. Corta en cuadros.', { m: 120 })
    ],
    'Dura 4 días en la nevera.');

  // ---------------------------------------------------------------- Arroz con leche
  R(CO, 'Arroz con leche', '🍚', 'arroz-leche', [5, 45], 6, 'Fácil',
    'Arroz cocinado lentamente en leche con canela y azúcar hasta quedar cremoso. Se come tibio o frío.',
    'La paciencia es el ingrediente: <strong>fuego bajo y revolver seguido</strong> para que quede cremoso y no se pegue.',
    [i(1, 'taza', 'de arroz'), i(3, 'taza', 'de agua'), i(4, 'taza', 'de leche'), u(2, 'astilla de canela', 'astillas de canela'), i(0.75, 'taza', 'de azúcar'), sal(0.25), i(0.25, 'taza', 'de pasas (opcional)')],
    ['Olla', 'Cuchara de palo'],
    [
      p('Cocina el arroz en agua', 'Pon el arroz con el agua y la canela a fuego medio. Cocina 15 minutos, hasta que el arroz esté casi blando y haya absorbido el agua.', { m: 15 }),
      p('Agrega la leche', 'Agrega la leche, el azúcar, la sal y las pasas. Cocina a fuego bajo 25 a 30 minutos, revolviendo seguido.', { m: 28, s: 'Espeso y cremoso. Al enfriar espesa más.', e: 'Si lo dejas sin revolver se pega y se quema.' }),
      p('Sirve', 'Retira la canela. Sirve tibio o frío con canela molida por encima.')
    ],
    'Dura 4 días en la nevera. Si espesa mucho, agrega leche al servir.');

  // ---------------------------------------------------------------- Torta de maracuya
  R(CO, 'Torta de maracuyá (sin horno)', '🥧', 'torta-maracuya', [30, 0], 10, 'Fácil',
    'Torta fría de maracuyá: base de galletas, crema suave de leche condensada y capa de maracuyá brillante. No necesita horno.',
    'Necesita <strong>mínimo 4 horas de nevera</strong> para cuajar, así que hazla con tiempo. Usa pulpa de maracuyá colada, sin semillas.',
    [i(250, 'g', 'de galletas dulces (tipo María)'), i(100, 'g', 'de mantequilla derretida'), i(1, 'taza', 'de crema de leche fría'), i(1, 'taza', 'de leche condensada'), i(0.75, 'taza', 'de pulpa de maracuyá colada'), i(2, 'cda', 'de gelatina sin sabor'), i(0.25, 'taza', 'de agua fría'), u(2, 'maracuyá para decorar', 'maracuyás para decorar'), i(1, 'cda', 'de azúcar', 'Para la capa de encima.')],
    ['Molde desmontable de 22 cm', 'Licuadora o batidora', 'Colador', 'Tazón', 'Cuchara'],
    [
      p('Haz la base', 'Tritura las galletas hasta que queden como arena. Mézclalas con la mantequilla derretida. Presiona la mezcla en el fondo del molde, bien compacta, y llévala a la nevera.', { s: 'La base queda firme al presionarla.', c: 'Usa el fondo de un vaso para compactarla bien.' }),
      p('Hidrata la gelatina', 'Pon la gelatina en el agua fría y déjala 5 minutos. Luego caliéntala 15 segundos en el microondas o a baño maría hasta que se disuelva por completo.', { m: 5, e: 'Si hierve, pierde fuerza para cuajar.' }),
      p('Bate la crema', 'Bate la crema de leche fría hasta que forme picos suaves. Agrega la leche condensada y mezcla con movimientos envolventes.', { s: 'Crema suave y espesa, sin grumos.' }),
      p('Agrega el maracuyá', 'Mezcla la pulpa colada con la gelatina tibia. Incorpora esta mezcla a la crema, despacio y en dos partes.', { c: 'La gelatina debe estar tibia, no caliente, para no derretir la crema.' }),
      p('Rellena y enfría', 'Vierte sobre la base y alisa. Refrigera 4 horas o toda la noche.', { m: 240 }),
      p('Cubre', 'Mezcla la pulpa de los 2 maracuyás con una cucharada de azúcar y viértela sobre la torta fría. Refrigera 30 minutos más y desmolda con cuidado.', { m: 30, s: 'Firme al mover el molde, sin líquido en el centro.' })
    ],
    'Dura 4 días en la nevera. No se congela bien.');

  // ---------------------------------------------------------------- Mousse maracuya
  R(CO, 'Mousse de maracuyá', '🍨', 'fruta-maracuya', [15, 0], 6, 'Fácil',
    'Postre frío y aireado de maracuyá con crema de leche y leche condensada. Muy fácil, sin gelatina ni horno.',
    'Solo tres pasos. Cuela la pulpa para quitar semillas y <strong>bate la crema bien fría</strong> para que suba.',
    [i(1, 'taza', 'de pulpa de maracuyá colada'), i(1, 'taza', 'de leche condensada'), i(1.5, 'taza', 'de crema de leche muy fría'), u(1, 'maracuyá para decorar', 'maracuyás para decorar')],
    ['Batidora o licuadora', 'Tazón', 'Copas'],
    [
      p('Bate la crema', 'Bate la crema de leche hasta que forme picos suaves.', { s: 'Al levantar el batidor, el pico se mantiene.' }),
      p('Mezcla', 'Mezcla la leche condensada con la pulpa de maracuyá. Incorpora a la crema batida con movimientos suaves de abajo hacia arriba.', { e: 'Si mezclas rápido, se baja el aire y queda líquido.' }),
      p('Enfría', 'Reparte en copas y refrigera mínimo 3 horas. Decora con pulpa de maracuyá.', { m: 180 })
    ],
    'Dura 3 días en la nevera.');

  // ---------------------------------------------------------------- Arequipe
  R(CO, 'Arequipe casero', '🍯', 'arequipe', [5, 120], 12, 'Media',
    'Dulce de leche colombiano, hecho con leche, azúcar y paciencia. Se unta, se rellena y se combina con todo.',
    'Es muy sencillo pero largo: <strong>2 horas casi sin hacer nada</strong>, solo revolver de vez en cuando. Usa una olla de fondo grueso.',
    [i(2, 'taza', 'de leche entera', 'Unos 500 ml.'), i(1, 'taza', 'de azúcar'), i(0.25, 'cdta', 'de bicarbonato de sodio'), i(1, 'cdta', 'de esencia de vainilla (opcional)')],
    ['Olla de fondo grueso', 'Cuchara de palo', 'Frasco de vidrio'],
    [
      p('Mezcla', 'Pon todos los ingredientes en la olla y revuelve hasta que el azúcar se disuelva.'),
      p('Cocina lento', 'Cocina a fuego medio-bajo, revolviendo cada 5 minutos al principio y cada minuto al final, durante unas 2 horas.', { m: 120, s: 'Primero hierve suave y se vuelve de color caramelo; al final espesa y deja ver el fondo.', e: 'Si se pega, baja el fuego. No lo dejes sin revolver al final.' }),
      p('Prueba', 'Pon una gota en un plato frío: si no corre, está listo.', { c: 'Espesa más al enfriar: apártalo cuando aún está algo líquido.' }),
      p('Guarda', 'Pasa a un frasco limpio y deja enfriar antes de taparlo.')
    ],
    'Dura 2 semanas en la nevera.');

  // ---------------------------------------------------------------- Obleas
  R(CO, 'Obleas con arequipe', '🍪', 'obleas', [5, 0], 4, 'Fácil',
    'Obleas crocantes rellenas de arequipe, queso rallado y mora o masmelos. El pasabocas más callejero de Colombia.',
    'Se arman al momento para que la oblea esté crocante.',
    [u(8, 'oblea', 'obleas'), i(1, 'taza', 'de arequipe'), i(0.5, 'taza', 'de queso rallado'), i(0.25, 'taza', 'de mora o fresa en trozos (opcional)')],
    ['Cuchillo o espátula'],
    [
      p('Unta', 'Unta una oblea con una capa gruesa de arequipe, hasta los bordes.'),
      p('Agrega', 'Esparce el queso rallado y la fruta si quieres.'),
      p('Cierra', 'Cubre con otra oblea y presiona suave. Come enseguida.', { e: 'Si esperas, la oblea se humedece y pierde lo crocante.' })
    ],
    'Se comen al momento.');

  // ---------------------------------------------------------------- Chocolate con queso
  R(CO, 'Chocolate santafereño con queso', '☕', 'chocolate-queso', [5, 10], 4, 'Fácil',
    'Chocolate caliente espumoso, de los de molinillo, con queso fresco que se derrite en la taza y almojábana o pan.',
    'En Bogotá el queso se echa <strong>dentro del chocolate</strong>. Si no tienes molinillo, usa una batidora de mano para la espuma.',
    [i(4, 'taza', 'de agua o leche'), i(4, 'cda', 'de chocolate en barra rallado'), u(1, 'astilla de canela', 'astillas de canela'), i(1, 'taza', 'de queso fresco o campesino en cubos'), i(null, '', 'Pan o almojábanas', 'Para acompañar.')],
    ['Olla', 'Molinillo o batidor', 'Tazas'],
    [
      p('Calienta', 'Calienta el agua o la leche con la canela hasta que hierva suave. Retira la canela.', { m: 5 }),
      p('Disuelve', 'Agrega el chocolate rallado, revuelve hasta que se disuelva. Cocina 3 minutos más.', { m: 3 }),
      p('Bate', 'Con el molinillo o el batidor, bate hasta que haga espuma.', { s: 'Se forma espuma espesa en la superficie.' }),
      p('Sirve', 'Pon cubos de queso en cada taza, sirve el chocolate caliente encima y acompaña con pan o almojábanas.')
    ],
    'Se toma recién hecho.');

  // ---------------------------------------------------------------- Aguapanela
  R(CO, 'Aguapanela con limón', '🍯', 'aguapanela', [5, 10], 4, 'Fácil',
    'La bebida más colombiana: panela disuelta en agua, caliente o fría, con limón. Energizante y sencilla.',
    'La panela rinde mejor <strong>rallada</strong> o en trozos pequeños para disolverse más rápido.',
    [i(0.5, 'taza', 'de panela rallada (o 1/2 bloque)'), i(4, 'taza', 'de agua'), u(2, 'limón', 'limones'), i(null, '', 'Hielo', 'Para servirla fría.')],
    ['Olla', 'Cuchara', 'Jarra'],
    [
      p('Disuelve la panela', 'Calienta el agua con la panela, moviendo hasta que se disuelva por completo. Cuela si quieres.', { m: 8, s: 'No quedan trozos de panela.' }),
      p('Agrega el limón', 'Apaga, exprime los limones y mezcla.'),
      p('Sirve', 'Sirve caliente así, o enfría y sirve con hielo.')
    ],
    'Dura 3 días en la nevera.');

  // ---------------------------------------------------------------- Salpicon
  R(CO, 'Salpicón de frutas', '🍉', 'fruta-sandia', [15, 0], 6, 'Fácil',
    'Bebida fresca de frutas en trocitos con jugo de naranja o gaseosa. Para los días de calor y las fiestas.',
    'Corta todas las frutas en cubos pequeños y parejos. <strong>Sírvelo muy frío</strong> y con poco líquido para que sea más fruta que jugo.',
    [i(2, 'taza', 'de sandía en cubos'), i(1, 'taza', 'de papaya en cubos'), i(1, 'taza', 'de melón en cubos'), u(2, 'manzana', 'manzanas'), i(2, 'taza', 'de jugo de naranja fresco'), i(2, 'taza', 'de agua con gas o gaseosa de uva (opcional)'), i(2, 'cda', 'de azúcar (opcional)'), i(null, '', 'Hielo')],
    ['Tabla y cuchillo', 'Jarra grande', 'Cuchara'],
    [
      p('Corta las frutas', 'Corta todas las frutas en cubos pequeños de 1 centímetro. Pon la manzana en el jugo de naranja para que no se oscurezca.', { c: 'El jugo de naranja evita que la manzana se oxide.' }),
      p('Mezcla', 'En la jarra mezcla las frutas con el jugo de naranja y el azúcar si quieres. Refrigera 30 minutos.', { m: 30 }),
      p('Sirve', 'Al servir agrega el agua con gas y hielo. Sirve con cuchara.')
    ],
    'Dura 1 día en la nevera sin la gaseosa.');
})();
