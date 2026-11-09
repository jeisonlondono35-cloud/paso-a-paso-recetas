/* ============================================================
   RECETAS POR FAMILIAS (parte 3): bebidas, paletas, tortas, galletas,
   avenas y panqueques
   ============================================================ */
(function () {
  var i = GEN.i, p = GEN.p, may = GEN.may;

  // ---------------------------------------------------------------- FRUTAS
  var FRUTAS = [
    { n: 'fresa', e: '🍓', ing: i(2, 'taza', 'de fresas'), prep: 'Lava las fresas y quítales las hojas verdes.' },
    { n: 'mango', e: '🥭', ing: i(2, '', 'mango maduro|mangos maduros'), prep: 'Corta las dos "mejillas" del mango a los lados de la pepa, marca cuadros en la pulpa sin romper la cáscara y sácalos con una cuchara.' },
    { n: 'banano', e: '🍌', ing: i(2, '', 'banano maduro|bananos maduros'), prep: 'Pela los bananos y pártelos en trozos con la mano.', noAgua: true },
    { n: 'piña', e: '🍍', ing: i(2, 'taza', 'de piña en trozos'), prep: 'Quítale a la piña la cáscara y el corazón duro del centro, y córtala en trozos.' },
    { n: 'papaya', e: '🧡', ing: i(2, 'taza', 'de papaya en trozos'), prep: 'Pela la papaya, sácale todas las semillas con una cuchara y córtala en trozos.' },
    { n: 'mora', e: '🫐', ing: i(2, 'taza', 'de moras'), prep: 'Lava las moras en un colador y quítales el tallito.', colar: true, acida: true },
    { n: 'maracuyá', e: '🟡', ing: i(4, '', 'maracuyá|maracuyás'), prep: 'Parte los maracuyás por la mitad y saca toda la pulpa con una cuchara.', colar: true, acida: true, pulsos: true },
    { n: 'guanábana', e: '🍈', ing: i(2, 'taza', 'de pulpa de guanábana'), prep: 'Saca la pulpa blanca de la guanábana y quítale todas las semillas negras con los dedos.' },
    { n: 'lulo', e: '🟠', ing: i(5, '', 'lulo maduro|lulos maduros'), prep: 'Lava los lulos, pártelos por la mitad y saca la pulpa verde con una cuchara.', colar: true, acida: true },
    { n: 'guayaba', e: '🍐', ing: i(5, '', 'guayaba madura|guayabas maduras'), prep: 'Lava las guayabas, córtales las puntas y pártelas en cuatro, con cáscara.', colar: true },
    { n: 'melón', e: '🍈', ing: i(3, 'taza', 'de melón en trozos'), prep: 'Parte el melón, saca las semillas con una cuchara, quita la cáscara y corta la pulpa en trozos.' },
    { n: 'sandía', e: '🍉', ing: i(3, 'taza', 'de sandía en trozos'), prep: 'Corta la sandía en trozos y quítale las semillas negras que veas.', noLeche: true },
    { n: 'durazno', e: '🍑', ing: i(3, '', 'durazno maduro|duraznos maduros'), prep: 'Lava los duraznos, pártelos por la mitad, saca el hueso y córtalos en trozos.' },
    { n: 'manzana', e: '🍎', ing: i(2, '', 'manzana|manzanas'), prep: 'Lava las manzanas, quítales el corazón y las semillas y córtalas en trozos, con cáscara.' },
    { n: 'pera', e: '🍐', ing: i(2, '', 'pera madura|peras maduras'), prep: 'Lava las peras, quítales el corazón y córtalas en trozos.' },
    { n: 'kiwi', e: '🥝', ing: i(4, '', 'kiwi|kiwis'), prep: 'Parte los kiwis por la mitad y saca la pulpa con una cuchara.', pulsos: true, acida: true },
    { n: 'frutos rojos', e: '🍒', ing: i(2, 'taza', 'de frutos rojos congelados'), prep: 'Saca los frutos rojos del congelador; no hace falta descongelarlos.', colar: true, acida: true },
    { n: 'uva', e: '🍇', ing: i(2, 'taza', 'de uvas sin semilla'), prep: 'Lava las uvas y sepáralas del racimo.', noLeche: true },
    { n: 'tomate de árbol', e: '🍅', ing: i(4, '', 'tomate de árbol maduro|tomates de árbol maduros'), prep: 'Parte los tomates de árbol por la mitad y saca la pulpa con una cuchara (la cáscara amarga).', colar: true, acida: true },
    { n: 'curuba', e: '🟡', ing: i(6, '', 'curuba|curubas'), prep: 'Parte las curubas a lo largo y saca la pulpa con las semillas.', colar: true, acida: true, pulsos: true },
    { n: 'arándanos', e: '🫐', ing: i(2, 'taza', 'de arándanos'), prep: 'Lava los arándanos en un colador.' },
    { n: 'cereza', e: '🍒', ing: i(2, 'taza', 'de cerezas'), prep: 'Lava las cerezas, quítales el tallo y sácales el hueso partiéndolas por la mitad.' },
    { n: 'feijoa', e: '🥝', ing: i(6, '', 'feijoa madura|feijoas maduras'), prep: 'Parte las feijoas por la mitad y saca la pulpa con una cuchara.', acida: true },
    { n: 'ciruela', e: '🟣', ing: i(5, '', 'ciruela madura|ciruelas maduras'), prep: 'Lava las ciruelas, pártelas por la mitad y sácales el hueso.' }
  ];

  var BASES_BEBIDA = [
    { tipo: 'leche', nombre: function (f) { return 'Batido de ' + f.n; }, ing: [i(2, 'taza', 'de leche fría'), i(2, 'cda', 'de azúcar'), i(4, '', 'cubo de hielo|cubos de hielo')], liquido: 'la leche', desc: 'cremoso y frío, con leche' },
    { tipo: 'yogur', nombre: function (f) { return 'Smoothie de ' + f.n + ' con yogur'; }, ing: [i(1, 'taza', 'de yogur natural'), i(0.5, 'taza', 'de leche fría'), i(1, 'cda', 'de miel'), i(4, '', 'cubo de hielo|cubos de hielo')], liquido: 'el yogur y la leche', desc: 'espeso y refrescante, con yogur' },
    { tipo: 'agua', nombre: function (f) { return 'Jugo de ' + f.n; }, ing: [i(3, 'taza', 'de agua fría'), i(3, 'cda', 'de azúcar'), i(6, '', 'cubo de hielo|cubos de hielo')], liquido: 'el agua', desc: 'natural y ligero, en agua' },
    { tipo: 'avena', nombre: function (f) { return 'Batido de ' + f.n + ' con avena'; }, ing: [i(2, 'taza', 'de leche fría'), i(3, 'cda', 'de avena en hojuelas'), i(1, 'cda', 'de miel o azúcar'), i(4, '', 'cubo de hielo|cubos de hielo')], liquido: 'la leche con la avena', desc: 'llenador, con leche y avena: casi un desayuno' }
  ];

  FRUTAS.forEach(function (f) {
    BASES_BEBIDA.forEach(function (b) {
      if (b.tipo === 'agua' && f.noAgua) return;
      if (b.tipo !== 'agua' && f.noLeche) return;
      var lacteo = b.tipo !== 'agua';
      var pasos = [];
      if (b.tipo === 'avena') pasos.push(p('Remoja la avena', 'Pon la leche y la avena en el vaso de la licuadora y déjalas reposar 5 minutos.', { m: 5, c: 'Remojada se licúa mejor y el batido queda sedoso, no arenoso.' }));
      pasos.push(p('Prepara la fruta', f.prep, { c: 'Fruta bien madura = más dulce y más sabor, y menos azúcar que agregar.' }));
      pasos.push(p('Licúa', 'Pon en la licuadora primero ' + b.liquido + ', luego la fruta, el dulce y por último el hielo. Tapa, sujeta la tapa y ' +
        (f.pulsos ? 'licúa a pulsos cortos durante 15 segundos: lo justo para soltar la pulpa sin triturar las semillas.' : 'licúa 10 segundos en velocidad baja y luego 40 en alta.'),
        { s: f.pulsos ? 'La pulpa se soltó y las semillas siguen enteras.' : 'Color parejo, sin trozos, y ya no se oye el hielo golpear.',
          e: f.pulsos ? 'Si trituras las semillas, la bebida queda amarga y con puntos negros.' : '' }));
      if (f.colar) pasos.push(p('Cuela', 'Pasa la bebida por un colador sobre una jarra, ayudándote con una cuchara para empujar la pulpa. Bota las semillas que quedan en el colador.', { c: 'No aprietes demasiado contra la malla: pasan las partes ásperas.' }));
      pasos.push(p('Prueba y ajusta', 'Prueba con una cuchara. Si le falta dulce, agrega un poco más y mezcla. Si quedó muy espeso, agrega un chorrito de ' + (lacteo ? 'leche' : 'agua') + '.',
        { c: 'Agrega el dulce de a poquitos: es fácil poner más, imposible quitarlo.' }));
      pasos.push(p('Sirve de inmediato', 'Sirve en vasos altos y tómalo pronto.',
        { e: f.acida && lacteo ? 'Esta fruta es ácida y con el paso de los minutos corta la leche (se ve grumosa). No es para guardar: se prepara y se toma.' : 'Con el tiempo la fruta se separa del líquido y pierde el color. Si pasa, revuelve antes de tomar.' }));

      GEN.agregar({
        nombre: b.nombre(f), emoji: f.e, categoria: 'Bebidas', dificultad: 'Fácil',
        prep: b.tipo === 'avena' ? 12 : 8, coccion: 0, porciones: 2,
        descripcion: may(b.nombre(f).toLowerCase()) + ' ' + b.desc + '. Listo en menos de 10 minutos.',
        antes: 'Regla de la licuadora: <strong>primero los líquidos, luego lo blando y arriba el hielo</strong>. Así las cuchillas agarran bien desde el principio.',
        ingredientes: [f.ing].concat(b.ing),
        utensilios: ['Licuadora', 'Tabla y cuchillo', 'Cuchara', 'Dos vasos altos'].concat(f.colar ? ['Colador y jarra'] : []),
        pasos: pasos,
        guardar: 'Mejor recién hecho. Si sobra, guárdalo tapado en la nevera máximo unas horas y revuélvelo antes de tomar.'
      });
    });
  });

  // ---------------------------------------------------------------- PALETAS
  FRUTAS.forEach(function (f) {
    [false, true].forEach(function (cremosa) {
      GEN.agregar({
        nombre: 'Paletas ' + (cremosa ? 'cremosas ' : '') + 'de ' + f.n, emoji: '🍭', categoria: 'Postres', dificultad: 'Fácil',
        prep: 15, coccion: 0, porciones: 6,
        descripcion: 'Paletas heladas de ' + f.n + (cremosa ? ' con yogur, suaves y cremosas.' : ' hechas con fruta de verdad, sin colorantes.') + ' Solo hay que licuar y esperar.',
        antes: 'Necesitan <strong>6 horas de congelador</strong>, así que hazlas con tiempo. La mezcla debe saber un poco más dulce de lo que te gusta: el frío apaga el sabor dulce.',
        ingredientes: [f.ing].concat(cremosa
          ? [i(1, 'taza', 'de yogur natural'), i(0.5, 'taza', 'de leche'), i(3, 'cda', 'de miel o azúcar')]
          : [i(1, 'taza', 'de agua'), i(3, 'cda', 'de azúcar'), i(0.5, '', 'limón')]),
        utensilios: ['Licuadora', 'Moldes para paletas (o vasos pequeños)', 'Palos de paleta', 'Tabla y cuchillo'].concat(f.colar ? ['Colador'] : []),
        pasos: [
          p('Prepara la fruta', f.prep),
          p('Licúa', 'Licúa la fruta con ' + (cremosa ? 'el yogur, la leche y la miel' : 'el agua, el azúcar y el jugo de medio limón') + (f.pulsos ? ', a pulsos cortos para no triturar las semillas.' : ' durante 1 minuto, hasta que quede liso.'),
            { c: cremosa ? '' : 'El limón no es para que sepa ácido: resalta el sabor de la fruta.' }),
        ].concat(f.colar ? [p('Cuela', 'Pasa la mezcla por un colador para quitar las semillas.')] : []).concat([
          p('Prueba el dulce', 'Prueba la mezcla. Debe saber un poco más dulce de lo normal. Si no, agrega una cucharada más de dulce y mezcla.',
            { e: 'Si la mezcla sabe "en su punto" ahora, congelada va a saber simple.' }),
          p('Llena los moldes', 'Vierte la mezcla en los moldes dejando 1 centímetro libre arriba, porque al congelarse crece. Golpea suavemente los moldes contra la mesa para sacar burbujas.',
            { c: 'Si usas vasos sin tapa, congela 1 hora, clava el palo cuando la mezcla esté espesa y vuelve a congelar: así queda derecho.' }),
          p('Congela', 'Pon los palos y lleva al congelador mínimo 6 horas, mejor de un día para otro.',
            { s: 'Al tocar el centro está completamente duro.' }),
          p('Desmolda', 'Pasa el molde 10 segundos bajo el chorro de agua tibia y jala el palo con suavidad, girando un poco.',
            { e: 'No jales a la fuerza con la paleta recién salida del congelador: el palo se sale solo.' })
        ]),
        guardar: 'Duran 1 mes en el congelador. Ya desmoldadas, guárdalas en una bolsa cerrada para que no cojan olores.'
      });
    });
  });

  // ---------------------------------------------------------------- LIMONADAS
  var LIMONADAS = [
    { s: 'natural', ing: [], txt: '' },
    { s: 'de coco', ing: [i(1, 'taza', 'de leche de coco')], txt: 'Pon en la licuadora el jugo de limón, la leche de coco, el jarabe, solo 1 taza de agua y 2 tazas de hielo. Licúa 40 segundos hasta que quede como un granizado cremoso.', licuada: true },
    { s: 'de hierbabuena', ing: [i(0.5, 'taza', 'de hojas de hierbabuena')], txt: 'Licúa las hojas de hierbabuena lavadas con 1 taza del agua durante 15 segundos y cuela.' },
    { s: 'de panela', ing: [i(100, 'g', 'de panela')], txt: '', panela: true },
    { s: 'cerezada', ing: [i(3, 'cda', 'de jarabe de cereza o granadina'), i(6, '', 'cereza en almíbar|cerezas en almíbar')], txt: 'Agrega el jarabe de cereza y revuelve hasta que tome color rosado. Pon una cereza en cada vaso.' },
    { s: 'de fresa', ing: [i(1, 'taza', 'de fresas')], txt: 'Licúa las fresas lavadas y sin hojas con 1 taza del agua durante 30 segundos.' },
    { s: 'de mango', ing: [i(1, '', 'mango maduro|mangos maduros')], txt: 'Licúa la pulpa del mango con 1 taza del agua hasta que quede lisa.' },
    { s: 'de sandía', ing: [i(2, 'taza', 'de sandía sin semillas')], txt: 'Licúa la sandía sola (ya tiene mucha agua) y úsala en lugar de 2 de las tazas de agua.' },
    { s: 'de piña', ing: [i(1, 'taza', 'de piña en trozos')], txt: 'Licúa la piña con 1 taza del agua durante 40 segundos y cuela si quedó con fibra.' },
    { s: 'de pepino', ing: [i(0.5, '', 'pepino')], txt: 'Licúa el medio pepino (pelado y sin semillas) con 1 taza del agua y cuela.' },
    { s: 'de jengibre', ing: [i(1, 'cda', 'de jengibre fresco rallado')], txt: 'Agrega el jengibre rallado al jarabe mientras está caliente, déjalo 5 minutos y cuélalo.' },
    { s: 'con soda', ing: [i(2, 'taza', 'de agua con gas bien fría')], txt: 'Usa solo 2 tazas de agua normal. Las otras 2 son de agua con gas y se agregan justo al servir, para que no pierda las burbujas.' }
  ];

  LIMONADAS.forEach(function (l) {
    GEN.agregar({
      nombre: 'Limonada ' + l.s, emoji: '🍋', categoria: 'Bebidas', dificultad: 'Fácil',
      prep: 10, coccion: 0, porciones: 4,
      descripcion: 'Limonada ' + l.s + ' bien balanceada: ni ácida ni empalagosa, con el dulce completamente disuelto.',
      antes: 'El azúcar no se disuelve bien en agua fría y queda en el fondo. Por eso primero se hace un <strong>jarabe</strong> con un poco de agua caliente.',
      ingredientes: [i(4, '', 'limón grande y jugoso|limones grandes y jugosos'), i(4, 'taza', 'de agua fría')].concat(l.panela ? [] : [i(0.33, 'taza', 'de azúcar')]).concat(l.ing).concat([i(null, '', 'Hielo')]),
      utensilios: ['Jarra', 'Exprimidor', 'Olla pequeña o taza', 'Cuchara larga'].concat(/Licúa/.test(l.txt) || l.licuada ? ['Licuadora', 'Colador'] : []),
      pasos: [
        p('Haz el jarabe', l.panela ? 'Parte la panela en trozos y ponla en una olla pequeña con media taza de agua. Calienta a fuego medio, revolviendo, hasta que se disuelva por completo. Deja enfriar.'
          : 'Mezcla el azúcar con media taza de agua caliente (de la llave o calentada) y revuelve hasta que el líquido quede transparente.',
          { s: 'No se ve ni se siente ningún grano en el fondo.' }),
        p('Exprime los limones', 'Rueda cada limón contra la mesa apretándolo con la palma, córtalo por la mitad y exprímelo. Necesitas media taza de jugo. Saca las semillas.',
          { e: 'No exprimas hasta la última gota ni tritures la cáscara: la parte blanca amarga la limonada.' })
      ].concat(l.txt ? [p('Prepara el sabor', l.txt)] : []).concat(l.licuada ? [] : [
        p('Mezcla', 'En la jarra mezcla el jugo de limón, el jarabe' + (l.txt ? ', lo que preparaste' : '') + ' y el agua fría. Revuelve bien.')
      ]).concat([
        p('Prueba y ajusta', 'Prueba. Si está muy ácida, agrega un poco más de agua o dulce; si está simple, unas gotas más de limón.',
          { c: 'El hielo la va a aguar un poco, así que déjala ligeramente más fuerte de lo que te gusta.' }),
        p('Sirve', 'Sirve con bastante hielo y tómala pronto.', { e: 'La limonada guardada varias horas se pone amarga.' })
      ]),
      guardar: 'Se toma el mismo día. Para adelantar, guarda el jarabe en la nevera (dura 2 semanas) y exprime los limones al momento.'
    });
  });

  // ---------------------------------------------------------------- TORTAS Y MUFFINS
  var SABORES_TORTA = [
    { s: 'vainilla', ing: [i(2, 'cdta', 'de esencia de vainilla')], liq: ' y la vainilla' },
    { s: 'chocolate', ing: [i(0.5, 'taza', 'de cocoa en polvo sin azúcar')], harina: 1.5, secos: ' Agrega también la cocoa, pasándola por un colador para deshacer los grumos.' },
    { s: 'naranja', ing: [i(2, '', 'naranja|naranjas')], sinLeche: 'jugo de naranja', liq: ' y la ralladura de la cáscara de una naranja' },
    { s: 'limón', ing: [i(2, '', 'limón|limones')], liq: ', la ralladura de los 2 limones y 2 cucharadas de su jugo' },
    { s: 'banano', ing: [i(2, '', 'banano muy maduro|bananos muy maduros')], leche: 0.5, liq: ' y los bananos aplastados con un tenedor hasta hacerlos puré' },
    { s: 'zanahoria', ing: [i(1.5, 'taza', 'de zanahoria rallada fina'), i(1, 'cdta', 'de canela en polvo')], leche: 0.5, secos: ' Agrega también la canela.', fin: 'Agrega la zanahoria rallada y mezcla solo 4 o 5 veces.' },
    { s: 'coco', ing: [i(1, 'taza', 'de coco rallado')], fin: 'Agrega el coco rallado y mezcla solo 4 o 5 veces.' },
    { s: 'café', ing: [i(1, 'cda', 'de café instantáneo')], liq: ' y el café instantáneo disuelto antes en la leche' },
    { s: 'manzana y canela', ing: [i(1, '', 'manzana grande|manzanas grandes'), i(1, 'cdta', 'de canela en polvo')], secos: ' Agrega también la canela.', fin: 'Agrega la manzana pelada y cortada en cubitos de 1 centímetro y mezcla solo 4 o 5 veces.' },
    { s: 'chips de chocolate', ing: [i(0.75, 'taza', 'de chips de chocolate')], fin: 'Mezcla los chips con 1 cucharada de harina (así no se hunden) e incorpóralos con 4 o 5 movimientos.' },
    { s: 'nueces', ing: [i(0.75, 'taza', 'de nueces picadas')], fin: 'Agrega las nueces picadas y mezcla solo 4 o 5 veces.' },
    { s: 'frutos rojos', ing: [i(1, 'taza', 'de frutos rojos (frescos o congelados)')], fin: 'Mezcla los frutos rojos con 1 cucharada de harina, sin descongelarlos, e incorpóralos con muy pocos movimientos para que no tiñan toda la masa.' },
    { s: 'marmoleada', ing: [i(2, 'cda', 'de cocoa en polvo')], marmol: true }
  ];

  SABORES_TORTA.forEach(function (sa) {
    [false, true].forEach(function (muffin) {
      var harina = sa.harina || 2, leche = sa.leche || 1, min = muffin ? 20 : 42;
      var nombre = sa.marmol ? (muffin ? 'Muffins marmoleados' : 'Torta marmoleada') : (muffin ? 'Muffins de ' : 'Torta de ') + sa.s;
      var pasos = [
        p('Precalienta el horno y prepara el molde', 'Enciende el horno a 180 °C con la rejilla en el centro. ' + (muffin
          ? 'Pon 12 capacillos de papel en un molde para muffins.' : 'Unta con mantequilla un molde redondo de 22 centímetros, espolvoréalo con harina y sacude el exceso.'),
          { c: 'El horno necesita unos 15 minutos para llegar a la temperatura. La masa no debe esperar: el polvo de hornear empieza a actuar apenas se moja.' }),
        p('Mezcla los ingredientes secos', 'En un tazón grande mezcla la harina, el azúcar, el polvo de hornear y la sal con un batidor, 15 segundos.' + (sa.secos || ''),
          { c: 'Para medir la harina, llena la taza con una cuchara y empareja con un cuchillo. Metiendo la taza en la bolsa entra de más y la torta queda pesada.' }),
        p('Mezcla los ingredientes líquidos', 'En otro tazón bate los huevos con el aceite, ' + (sa.sinLeche ? 'el ' + sa.sinLeche : 'la leche') + (sa.liq || '') + ', hasta que quede de un solo color.'),
        p('Une las dos mezclas sin batir de más', 'Vierte los líquidos sobre los secos y mezcla con una espátula, con movimientos suaves desde el fondo, solo hasta que no se vea harina seca.',
          { s: 'Masa espesa que cae en cinta. Pueden quedar grumitos pequeños: desaparecen en el horno.', e: 'Si bates hasta dejarla perfectamente lisa, la torta queda dura y con túneles por dentro.' })
      ];
      if (sa.fin) pasos.push(p('Agrega lo que da el sabor', sa.fin));
      if (sa.marmol) pasos.push(p('Haz la masa de chocolate', 'Separa un tercio de la masa en otro tazón y mézclale la cocoa con 1 cucharada de leche.', { s: 'Tienes una masa clara y una oscura, de espesor parecido.' }));
      pasos.push(p(muffin ? 'Llena los capacillos' : 'Pasa al molde',
        (sa.marmol ? (muffin ? 'Pon en cada capacillo cucharadas alternadas de masa clara y oscura hasta llenar tres cuartos. ' : 'Vierte la masa clara en el molde y deja caer cucharadas de masa oscura encima. ') + 'Pasa un palillo dibujando ochos, solo 3 o 4 veces, para formar las vetas.'
          : (muffin ? 'Reparte la masa en los capacillos llenándolos solo hasta tres cuartos.' : 'Vierte la masa en el molde y alisa la superficie. Da un golpecito del molde contra la mesa para sacar burbujas grandes.')),
        { e: sa.marmol ? 'Si mezclas de más, las vetas desaparecen y queda todo café claro.' : (muffin ? 'Si los llenas hasta arriba, se derraman y quedan planos.' : '') }));
      pasos.push(p('Hornea', 'Hornea ' + min + ' minutos. No abras la puerta del horno durante los primeros ' + (muffin ? 15 : 30) + ' minutos.',
        { m: min, e: 'Abrir el horno antes de tiempo deja entrar aire frío y la torta se hunde en el centro.' }));
      pasos.push(p('Haz la prueba del palillo', 'Pincha el centro con un palillo.',
        { s: 'El palillo sale limpio y seco, y al presionar suave la superficie, vuelve a subir.', e: 'Si sale con masa húmeda, hornea 5 minutos más y repite.' }));
      pasos.push(p('Deja enfriar', muffin ? 'Deja los muffins 5 minutos en el molde y luego pásalos a una rejilla.' : 'Deja la torta 10 minutos en el molde. Pasa un cuchillo por el borde, voltéala sobre un plato y déjala enfriar del todo antes de cortar.',
        { m: muffin ? 5 : 10, c: 'Recién salida es frágil y se rompe; al enfriar toma firmeza.' }));

      GEN.agregar({
        nombre: nombre, emoji: muffin ? '🧁' : '🍰', categoria: 'Postres', dificultad: 'Media',
        prep: 20, coccion: min, porciones: muffin ? 12 : 10,
        descripcion: (muffin ? '12 muffins esponjosos' : 'Torta casera esponjosa y húmeda') + (sa.marmol ? ' con vetas de vainilla y chocolate' : ' de ' + sa.s) + ', con aceite en lugar de mantequilla: más fácil y no se reseca.',
        antes: 'En repostería las medidas importan: mide con cuidado. Y la regla de oro: <strong>mezclar poco</strong> una vez se juntan la harina y los líquidos.',
        ingredientes: [i(harina, 'taza', 'de harina de trigo'), i(1, 'taza', 'de azúcar'), i(1, 'cda', 'de polvo de hornear'), i(0.5, 'cdta', 'de sal'), i(2, '', 'huevo|huevos'), i(0.5, 'taza', 'de aceite')]
          .concat(sa.sinLeche ? [] : [i(leche, 'taza', 'de leche')]).concat(sa.ing),
        utensilios: [muffin ? 'Molde para 12 muffins y capacillos de papel' : 'Molde redondo de 22 cm', 'Dos tazones', 'Batidor de mano', 'Espátula', 'Taza y cucharas medidoras', 'Un palillo'],
        pasos: pasos,
        guardar: 'En un recipiente tapado, a temperatura ambiente, dura 4 días. Congelada y bien envuelta, 2 meses.'
      });
    });
  });

  // ---------------------------------------------------------------- GALLETAS
  var GALLETAS = [
    { s: 'de mantequilla', ing: [], txt: '' },
    { s: 'con chips de chocolate', ing: [i(0.75, 'taza', 'de chips de chocolate')], txt: 'Agrega los chips de chocolate y mezcla solo hasta repartirlos.' },
    { s: 'de avena', ing: [i(1, 'taza', 'de avena en hojuelas')], harina: 1, txt: 'Agrega la avena y mezcla hasta repartirla.' },
    { s: 'de chocolate', ing: [i(0.25, 'taza', 'de cocoa en polvo')], harina: 1.5, txt: 'Agrega la cocoa colada junto con la harina.' },
    { s: 'de limón', ing: [i(2, '', 'limón|limones')], txt: 'Agrega la ralladura de los 2 limones (solo la parte de color) a la mantequilla con azúcar.' },
    { s: 'de naranja', ing: [i(1, '', 'naranja|naranjas')], txt: 'Agrega la ralladura de la naranja a la mantequilla con azúcar.' },
    { s: 'de coco', ing: [i(0.75, 'taza', 'de coco rallado')], txt: 'Agrega el coco rallado y mezcla hasta repartirlo.' },
    { s: 'de canela', ing: [i(2, 'cdta', 'de canela en polvo'), i(3, 'cda', 'de azúcar para rebozar')], txt: 'Mezcla la canela con las 3 cucharadas de azúcar en un plato: cada bolita de masa se pasa por ahí antes de ir a la bandeja.' },
    { s: 'con nueces', ing: [i(0.75, 'taza', 'de nueces picadas')], txt: 'Agrega las nueces picadas y mezcla hasta repartirlas.' },
    { s: 'de maní', ing: [i(3, 'cda', 'de mantequilla de maní')], txt: 'Bate la mantequilla de maní junto con la mantequilla y el azúcar.' },
    { s: 'con pasas', ing: [i(0.75, 'taza', 'de uvas pasas')], txt: 'Agrega las pasas y mezcla hasta repartirlas.' },
    { s: 'de café', ing: [i(1, 'cda', 'de café instantáneo')], txt: 'Disuelve el café en 1 cucharadita de agua caliente y bátelo con el huevo.' }
  ];

  GALLETAS.forEach(function (g) {
    GEN.agregar({
      nombre: 'Galletas ' + g.s, emoji: '🍪', categoria: 'Postres', dificultad: 'Media',
      prep: 40, coccion: 12, porciones: 20,
      descripcion: 'Galletas caseras ' + g.s + ', doradas en el borde y suaves en el centro. Salen unas 20.',
      antes: 'La mantequilla debe estar <strong>blanda</strong> (sácala 30 minutos antes; al presionarla con el dedo se hunde sin resistencia) pero no derretida. Y las galletas se sacan del horno cuando el centro todavía se ve blando.',
      ingredientes: [i(120, 'g', 'de mantequilla blanda'), i(0.5, 'taza', 'de azúcar'), i(1, '', 'huevo|huevos'), i(1, 'cdta', 'de esencia de vainilla'), i(g.harina || 1.75, 'taza', 'de harina de trigo'), i(0.5, 'cdta', 'de polvo de hornear'), i(0.25, 'cdta', 'de sal')].concat(g.ing),
      utensilios: ['Tazón grande', 'Batidor de mano o cuchara de palo', 'Bandeja para horno', 'Papel para hornear', 'Cuchara sopera', 'Rejilla'],
      pasos: [
        p('Bate la mantequilla con el azúcar', 'En el tazón, bate la mantequilla blanda con el azúcar durante 2 minutos, con batidor o cuchara de palo.',
          { m: 2, s: 'La mezcla se ve más clara, cremosa y esponjada.', c: 'Este batido mete aire en la masa: es lo que hace la galleta tierna y no dura.' }),
        p('Agrega el huevo y la vainilla', 'Agrega el huevo y la vainilla y bate hasta que se integren.', { c: 'Si se ve cortada, no pasa nada: se arregla al entrar la harina.' }),
        p('Agrega la harina', 'Agrega la harina, el polvo de hornear y la sal. Mezcla con la cuchara solo hasta que no se vea harina seca.',
          { s: 'Masa suave que se despega del tazón y se puede tomar con las manos.', e: 'No amases de más: las galletas quedarían duras.' })
      ].concat(g.txt ? [p('Dale el sabor', g.txt)] : []).concat([
        p('Enfría la masa', 'Tapa el tazón y mételo 20 minutos a la nevera. Mientras tanto, enciende el horno a 180 °C y forra la bandeja con papel.',
          { m: 20, c: 'La masa fría se extiende menos en el horno: galletas gruesas, no láminas pegadas entre sí.' }),
        p('Forma las galletas', 'Toma porciones de una cucharada, hazlas bolita entre las manos y ponlas en la bandeja separadas 5 centímetros. Aplasta cada una un poco con los dedos.',
          { e: 'Muy juntas se pegan unas con otras al crecer.' }),
        p('Hornea', 'Hornea de 10 a 12 minutos.', { m: 11, s: 'Bordes dorados claros y centro todavía pálido y blando.', e: 'Si esperas a que el centro se vea firme, al enfriar quedan duras como piedra.' }),
        p('Deja enfriar', 'Déjalas 5 minutos en la bandeja (recién salidas se rompen) y luego pásalas a una rejilla.', { m: 5 })
      ]),
      guardar: 'En un frasco hermético duran 1 semana. La masa cruda en bolitas se puede congelar y hornear directo, con 2 minutos más.'
    });
  });

  // ---------------------------------------------------------------- AVENAS
  var AVENAS = [
    { s: 'con banano y canela', ing: [i(1, '', 'banano|bananos')], fin: 'Sirve con el banano en rodajas y canela en polvo por encima.' },
    { s: 'con manzana', ing: [i(1, '', 'manzana|manzanas')], coc: 'Agrega la manzana en cubitos pequeños junto con la avena, para que se ablande al cocinarse.' },
    { s: 'con fresas', ing: [i(1, 'taza', 'de fresas')], fin: 'Sirve con las fresas en láminas por encima.' },
    { s: 'con miel y nueces', ing: [i(2, 'cda', 'de miel'), i(3, 'cda', 'de nueces picadas')], fin: 'Sirve con un hilo de miel y las nueces por encima.' },
    { s: 'de chocolate', ing: [i(1, 'cda', 'de cocoa en polvo'), i(1, 'cda', 'de azúcar')], coc: 'Disuelve la cocoa y el azúcar en la leche antes de calentarla.' },
    { s: 'con coco', ing: [i(3, 'cda', 'de coco rallado')], coc: 'Agrega 2 cucharadas del coco junto con la avena.', fin: 'Sirve con el resto del coco por encima.' },
    { s: 'con mantequilla de maní', ing: [i(2, 'cda', 'de mantequilla de maní')], fin: 'Sirve con una cucharada de mantequilla de maní en el centro de cada plato y revuélvela al comer.' },
    { s: 'con pasas', ing: [i(3, 'cda', 'de uvas pasas')], coc: 'Agrega las pasas junto con la avena: se hinchan y endulzan.' },
    { s: 'con frutos rojos', ing: [i(1, 'taza', 'de frutos rojos')], fin: 'Sirve con los frutos rojos por encima (si están congelados, agrégalos el último minuto de cocción).' },
    { s: 'con mango', ing: [i(1, '', 'mango|mangos')], fin: 'Sirve con el mango en cubos por encima.' },
    { s: 'con pera', ing: [i(1, '', 'pera|peras')], coc: 'Agrega la pera en cubitos junto con la avena.' },
    { s: 'con panela', ing: [i(2, 'cda', 'de panela rallada')], coc: 'Disuelve la panela en la leche antes de calentarla.' }
  ];

  AVENAS.forEach(function (a) {
    GEN.agregar({
      nombre: 'Avena caliente ' + a.s, emoji: '🥣', categoria: 'Desayunos', dificultad: 'Fácil',
      prep: 5, coccion: 8, porciones: 2,
      descripcion: 'Avena cremosa en tazón ' + a.s + ': un desayuno que llena y se hace en 10 minutos.',
      antes: 'La proporción es fácil: <strong>1 taza de avena en hojuelas por 2 de leche</strong>. Y se revuelve seguido, porque la leche se pega y se riega con facilidad.',
      ingredientes: [i(1, 'taza', 'de avena en hojuelas'), i(2, 'taza', 'de leche'), i(1, '', 'astilla de canela|astillas de canela'), i(null, '', 'Una pizca de sal')].concat(a.ing),
      utensilios: ['Olla pequeña', 'Cuchara de palo', 'Taza medidora', 'Dos tazones'],
      pasos: [
        p('Calienta la leche', 'Pon la leche en la olla con la astilla de canela y la pizca de sal, a fuego medio.' + (a.coc && /antes de calentarla/.test(a.coc) ? ' ' + a.coc : ''),
          { s: 'Salen burbujitas en el borde y empieza a humear.', e: 'No te alejes: la leche sube de golpe y se riega.' }),
        p('Agrega la avena', 'Echa la avena en forma de lluvia mientras revuelves.' + (a.coc && !/antes de calentarla/.test(a.coc) ? ' ' + a.coc : '') + ' Baja el fuego a bajo.'),
        p('Cocina revolviendo', 'Cocina 5 minutos, revolviendo casi todo el tiempo y raspando el fondo.',
          { m: 5, s: 'Espesó como una crema, la avena está blanda y la cuchara deja un camino en el fondo.', c: 'Al enfriarse espesa más. Si la quieres más suelta, agrega un chorrito de leche.' }),
        p('Sirve', 'Saca la canela y sirve en tazones. ' + (a.fin || 'Prueba y endulza a tu gusto.'))
      ],
      guardar: 'Dura 2 días en la nevera. Queda muy espesa: recaliéntala con un chorrito de leche, revolviendo.'
    });
  });

  // ---------------------------------------------------------------- PANQUEQUES
  var PANQUEQUES = [
    { s: 'de banano', ing: [i(1, '', 'banano muy maduro|bananos muy maduros')], masa: 'Aplasta el banano con un tenedor hasta hacerlo puré y mézclalo con los líquidos.' },
    { s: 'de avena', ing: [i(0.75, 'taza', 'de avena en hojuelas')], harina: 1, masa: 'Licúa la avena en seco 20 segundos hasta hacerla harina y mézclala con los ingredientes secos.' },
    { s: 'de chocolate', ing: [i(2, 'cda', 'de cocoa en polvo')], masa: 'Agrega la cocoa colada a los ingredientes secos.' },
    { s: 'con arándanos', ing: [i(0.75, 'taza', 'de arándanos')], sarten: 'Apenas viertas la masa en la sartén, pon 5 o 6 arándanos encima de cada panqueque.' },
    { s: 'con chips de chocolate', ing: [i(0.5, 'taza', 'de chips de chocolate')], sarten: 'Apenas viertas la masa en la sartén, reparte unos chips encima de cada panqueque.' },
    { s: 'de canela', ing: [i(1, 'cdta', 'de canela en polvo')], masa: 'Agrega la canela a los ingredientes secos.' },
    { s: 'de manzana', ing: [i(1, '', 'manzana|manzanas')], masa: 'Pela la manzana, rállala por el lado grueso y mézclala con los líquidos.' },
    { s: 'de coco', ing: [i(0.5, 'taza', 'de coco rallado')], masa: 'Agrega el coco rallado a los ingredientes secos.' },
    { s: 'integrales', ing: [], integral: true, masa: 'La harina integral absorbe más: si la masa queda muy espesa, agrega 2 cucharadas más de leche.' },
    { s: 'de zanahoria', ing: [i(0.5, 'taza', 'de zanahoria rallada muy fina'), i(0.5, 'cdta', 'de canela en polvo')], masa: 'Mezcla la zanahoria rallada con los líquidos y la canela con los secos.' },
    { s: 'de naranja', ing: [i(1, '', 'naranja|naranjas')], masa: 'Agrega la ralladura de la cáscara de la naranja a los líquidos.' },
    { s: 'de yogur', ing: [i(0.5, 'taza', 'de yogur natural')], leche: 0.75, masa: 'Mezcla el yogur con los líquidos: los hace más tiernos y esponjosos.' }
  ];

  PANQUEQUES.forEach(function (x) {
    GEN.agregar({
      nombre: 'Panqueques ' + x.s, emoji: '🥞', categoria: 'Desayunos', dificultad: 'Fácil',
      prep: 15, coccion: 15, porciones: 4,
      descripcion: 'Panqueques esponjosos ' + x.s + ', hechos desde cero. Salen unos 8 medianos.',
      antes: 'Dos reglas: <strong>mezclar poco</strong> (la masa queda con grumos, y así debe ser) y <strong>fuego medio-bajo</strong>. El primer panqueque casi siempre sale feo: es el de prueba.',
      ingredientes: [i(x.harina || 1.5, 'taza', x.integral ? 'de harina de trigo integral' : 'de harina de trigo'), i(1, 'cda', 'de polvo de hornear'), i(2, 'cda', 'de azúcar'), i(0.5, 'cdta', 'de sal'), i(x.leche || 1.25, 'taza', 'de leche'), i(1, '', 'huevo|huevos'), i(3, 'cda', 'de mantequilla derretida')].concat(x.ing).concat([i(null, '', 'Miel o sirope para servir')]),
      utensilios: ['Sartén antiadherente', 'Dos tazones', 'Batidor o tenedor', 'Cucharón', 'Espátula delgada', 'Papel de cocina'],
      pasos: [
        p('Mezcla los secos', 'En un tazón grande mezcla la harina, el polvo de hornear, el azúcar y la sal.'),
        p('Mezcla los líquidos', 'En otro tazón bate el huevo con la leche y la mantequilla derretida ya tibia.', { e: 'Si la mantequilla está hirviendo, cocina el huevo.' })
      ].concat(x.masa ? [p('Agrega el sabor', x.masa)] : []).concat([
        p('Une sin batir de más', 'Vierte los líquidos sobre los secos y mezcla solo 10 a 15 vueltas, hasta que no se vea harina seca.',
          { s: 'Masa espesa y con grumos pequeños, que cae lenta de la cuchara.', e: 'Si bates hasta dejarla lisa, quedan planos y chiclosos.' }),
        p('Deja reposar', 'Deja la masa quieta 5 minutos.', { m: 5, s: 'Aparecen burbujitas en la superficie.' }),
        p('Calienta y engrasa la sartén', 'Pon la sartén a fuego medio-bajo 2 minutos. Úntala con un poquito de mantequilla usando un papel de cocina doblado.',
          { m: 2, s: 'Unas gotas de agua bailan y chisporrotean antes de evaporarse.' }),
        p('Vierte la masa', 'Vierte medio cucharón de masa en el centro y deja que se extienda sola.' + (x.sarten ? ' ' + x.sarten : '')),
        p('Espera las burbujas y voltea', 'Cocina 2 a 3 minutos sin tocar. Cuando la superficie esté llena de burbujas que revientan y dejan huequitos, voltea de un solo movimiento y cocina 1 a 2 minutos más.',
          { m: 3, s: 'Bordes opacos y secos antes de voltear; dorado parejo después.', e: 'No lo aplastes con la espátula después de voltearlo: le sacas el aire.' }),
        p('Repite y sirve', 'Guarda los panqueques listos cubiertos con un limpión. Repite con el resto de la masa, engrasando un poquito cada vez, y sirve calientes.')
      ]),
      guardar: 'Duran 3 días en la nevera en una bolsa cerrada. Recaliéntalos en la tostadora o en sartén a fuego bajo.'
    });
  });
})();
