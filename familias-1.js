/* ============================================================
   RECETAS POR FAMILIAS (parte 1): carnes, pescados, guisos y salteados
   ------------------------------------------------------------
   Aquí no se escribe cada receta una por una. Cada "familia" es una
   técnica explicada al detalle, y se combina con listas de variantes
   (por ejemplo: 9 proteínas × 13 adobos = 117 recetas a la plancha).
   Para sumar recetas basta con agregar un elemento a una lista.
   ============================================================ */

var GEN = (function () {
  var usados = {};
  RECETAS.forEach(function (r) { usados[r.id] = 1; });

  var UNIDADES = { taza: 'taza|tazas', cda: 'cucharada|cucharadas', cdta: 'cucharadita|cucharaditas', g: 'g', ml: 'ml' };

  // Ingrediente: i(cantidad, unidad, nombre, nota). Sin cantidad = al gusto.
  function i(c, u, n, nota) {
    var o = { n: n };
    if (c != null) { o.c = c; o.u = UNIDADES[u] || ''; }
    if (nota) o.nota = nota;
    return o;
  }

  // Paso: p(título, explicación, { s: señal, c: consejo, e: error, m: minutos })
  function p(t, d, extra) {
    var o = { t: t, d: d };
    if (extra) for (var k in extra) if (extra[k]) o[k] = extra[k];
    return o;
  }

  function slug(s) {
    return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  function agregar(r) {
    r.id = slug(r.nombre);
    if (usados[r.id]) return;
    usados[r.id] = 1;
    r.gen = true; // receta de familia (sin foto propia)
    RECETAS.push(r);
  }

  function may(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  return {
    i: i, p: p, agregar: agregar, may: may,
    ajo: function (n) { return i(n, '', 'diente de ajo|dientes de ajo'); },
    sal: function (n) { return i(n, 'cdta', 'de sal'); },
    aceite: function (n) { return i(n, 'cda', 'de aceite'); },
    HIGIENE: 'Lávate las manos con jabón después de tocar la carne cruda, y lava la tabla y el cuchillo antes de usarlos para otra cosa.'
  };
})();

(function () {
  var i = GEN.i, p = GEN.p, ajo = GEN.ajo, sal = GEN.sal, aceite = GEN.aceite, may = GEN.may;

  // ---------------------------------------------------------------- ADOBOS
  // s = cómo se llama en el nombre de la receta · dulce = se quema fácil
  var ADOBOS = GEN.ADOBOS = [
    { s: 'al ajo y limón', ing: [ajo(3), i(1, '', 'limón|limones'), aceite(1), sal(1), i(null, '', 'Pimienta')],
      como: 'Pela los 3 dientes de ajo y pícalos muy fino (o rállalos). Mézclalos en un tazón con el jugo del limón, la cucharada de aceite, la sal y una pizca de pimienta.',
      tip: 'Rueda el limón contra la mesa apretándolo con la palma antes de cortarlo: suelta mucho más jugo.', acido: true },
    { s: 'con paprika y comino', ing: [i(1, 'cdta', 'de paprika o pimentón dulce'), i(0.5, 'cdta', 'de comino molido'), i(0.5, 'cdta', 'de ajo en polvo'), aceite(1), sal(1)],
      como: 'En un tazón mezcla la paprika, el comino, el ajo en polvo y la sal. Agrega la cucharada de aceite y revuelve hasta formar una pasta roja.',
      tip: 'El aceite ayuda a que las especias se peguen parejo y no se quemen sueltas en la sartén.' },
    { s: 'a las finas hierbas', ing: [i(1, 'cdta', 'de orégano seco'), i(1, 'cdta', 'de tomillo seco'), ajo(2), aceite(1), sal(1), i(null, '', 'Pimienta')],
      como: 'Pica muy fino los 2 dientes de ajo. Mézclalos en un tazón con el orégano, el tomillo, el aceite, la sal y una pizca de pimienta.',
      tip: 'Frota las hierbas secas entre las palmas al echarlas: se rompen y sueltan más aroma.' },
    { s: 'a la mostaza y miel', ing: [i(2, 'cda', 'de mostaza'), i(1, 'cda', 'de miel'), aceite(1), sal(1)],
      como: 'En un tazón mezcla la mostaza, la miel, el aceite y la sal hasta que quede una salsa lisa y de un solo color.',
      tip: 'Si la miel está dura, caliéntala 10 segundos en el microondas para que se mezcle fácil.', dulce: true },
    { s: 'en soya y jengibre', ing: [i(3, 'cda', 'de salsa de soya'), i(1, 'cdta', 'de jengibre fresco rallado'), ajo(1), i(1, 'cdta', 'de miel o azúcar'), aceite(1)],
      como: 'Pela un trocito de jengibre raspándolo con una cuchara y rállalo fino hasta tener 1 cucharadita. Pica el ajo. Mezcla en un tazón la soya, el jengibre, el ajo, la miel y el aceite.',
      tip: 'No agregues sal: la salsa de soya ya es bastante salada.', dulce: true },
    { s: 'con chimichurri', ing: [i(0.5, 'taza', 'de perejil fresco picado'), ajo(2), i(1, 'cdta', 'de orégano seco'), i(3, 'cda', 'de aceite'), i(1, 'cda', 'de vinagre'), sal(1)],
      como: 'Pica el perejil y los 2 dientes de ajo lo más fino que puedas. Mézclalos en un tazón con el orégano, el aceite, el vinagre y la sal. Separa la mitad en un platico aparte: esa parte limpia es para servir al final.',
      tip: 'El chimichurri mejora si reposa: puedes hacerlo con horas de anticipación.', mitad: true, acido: true },
    { s: 'a la naranja', ing: [i(1, '', 'naranja|naranjas'), ajo(1), i(1, 'cdta', 'de miel'), aceite(1), sal(1)],
      como: 'Exprime la naranja en un tazón (necesitas unas 4 cucharadas de jugo). Agrega el ajo picado fino, la miel, el aceite y la sal, y mezcla bien.',
      tip: 'Si tienes rallador, ralla un poco de la cáscara de la naranja antes de exprimirla y agrégala: ahí está el aroma más fuerte.', dulce: true, acido: true },
    { s: 'a la pimienta y limón', ing: [i(1, 'cdta', 'de pimienta negra recién molida'), i(1, '', 'limón|limones'), aceite(1), sal(1)],
      como: 'Ralla la cáscara del limón (solo la parte verde o amarilla; la blanca amarga) y luego exprímelo. Mezcla en un tazón la ralladura, el jugo, la pimienta, el aceite y la sal.',
      tip: 'La pimienta recién molida pica y huele mucho más que la que ya viene en polvo.', acido: true },
    { s: 'al curry', ing: [i(2, 'cdta', 'de curry en polvo'), ajo(1), aceite(1), sal(1)],
      como: 'Pica el ajo muy fino. Mézclalo en un tazón con el curry, el aceite y la sal hasta formar una pasta amarilla.',
      tip: 'El curry mancha: usa un tazón de vidrio o metal, no de plástico claro.' },
    { s: 'en salsa BBQ casera', ing: [i(3, 'cda', 'de salsa de tomate (kétchup)'), i(1, 'cda', 'de panela rallada o azúcar morena'), i(1, 'cda', 'de salsa de soya'), i(1, 'cdta', 'de vinagre'), i(0.5, 'cdta', 'de paprika')],
      como: 'Mezcla en un tazón la salsa de tomate, la panela, la soya, el vinagre y la paprika hasta que el dulce se disuelva. Separa 2 cucharadas en un platico para pincelar al final.',
      tip: 'Pruébala con la punta de una cuchara: debe saber dulce, ácida y salada a la vez.', dulce: true },
    { s: 'al ajillo con perejil', ing: [ajo(4), i(2, 'cda', 'de perejil fresco picado'), i(2, 'cda', 'de aceite'), sal(1)],
      como: 'Pica los 4 dientes de ajo muy fino y pica el perejil. Mézclalos en un tazón con el aceite y la sal.',
      tip: 'Para picar el ajo fácil, aplástalo primero con la parte plana del cuchillo: la cáscara se suelta sola.' },
    { s: 'en adobo criollo', ing: [ajo(2), i(2, '', 'tallo de cebolla larga|tallos de cebolla larga'), i(0.5, 'cdta', 'de comino molido'), i(1, 'cdta', 'de paprika o color'), i(1, 'cda', 'de vinagre'), aceite(1), sal(1)],
      como: 'Pica el ajo y la cebolla larga lo más fino que puedas, casi como una pasta. Mézclalos en un tazón con el comino, la paprika, el vinagre, el aceite y la sal.',
      tip: 'Entre más fino piques la cebolla, mejor se pega y menos se quema.', acido: true },
    { s: 'al limón y cilantro', ing: [i(1, '', 'limón|limones'), i(3, 'cda', 'de cilantro fresco picado'), ajo(1), aceite(1), sal(1)],
      como: 'Lava y pica el cilantro (hojas y tallos delgados) y pica el ajo. Mézclalos en un tazón con el jugo del limón, el aceite y la sal.',
      tip: 'Guarda un poco de cilantro fresco para espolvorear al servir.', acido: true }
  ];

  function reposoMarinado(min, a) {
    return a.acido && min > 15 ? 15 : min;
  }

  // ---------------------------------------------------------------- A LA PLANCHA
  var PLANCHA = [
    { n: 'Pechuga de pollo', e: '🍗', el: 'las pechugas', lo: 'las', ing: i(2, '', 'pechuga de pollo sin piel ni hueso|pechugas de pollo sin piel ni hueso', 'De unos 200 g cada una.'),
      prepT: 'Deja las pechugas de un grosor parejo',
      prepD: 'Mete cada pechuga en una bolsa plástica y golpea la parte más gruesa con el fondo de una olla pequeña hasta que toda quede de 1,5 centímetros de alto. Sécalas con papel de cocina.',
      prepC: 'Con el mismo grosor en toda la pieza no queda una punta seca y la otra cruda.',
      fuego: 'medio-alto', m1: 5, m2: 5, marina: 20, reposo: 5, crudo: true,
      puntoD: 'Haz un corte pequeño en la parte más gruesa y mira por dentro.',
      puntoS: 'La carne está blanca hasta el centro y el jugo que sale es transparente (74 °C si tienes termómetro).',
      puntoE: 'Si ves algo rosado, devuélvela a la sartén 1 o 2 minutos por lado. El pollo siempre va bien cocido.' },
    { n: 'Contramuslos de pollo', e: '🍗', el: 'los contramuslos', lo: 'los', ing: i(4, '', 'contramuslo de pollo deshuesado y sin piel|contramuslos de pollo deshuesados y sin piel'),
      prepT: 'Abre y limpia los contramuslos',
      prepD: 'Extiende cada contramuslo abierto sobre la tabla. Recorta con el cuchillo los trozos grandes de grasa amarilla y sécalos con papel de cocina.',
      prepC: 'El contramuslo es más jugoso que la pechuga y perdona más si te pasas un poco de tiempo.',
      fuego: 'medio', m1: 6, m2: 6, marina: 20, reposo: 5, crudo: true,
      puntoD: 'Corta el más grueso por la mitad.',
      puntoS: 'Carne sin partes rosadas ni gelatinosas y jugos transparentes.',
      puntoE: 'Si el centro se ve rosado o brillante, cocina 2 minutos más por lado.' },
    { n: 'Chuletas de cerdo', e: '🥩', el: 'las chuletas', lo: 'las', ing: i(2, '', 'chuleta de cerdo de 2 cm de grosor|chuletas de cerdo de 2 cm de grosor'),
      prepT: 'Prepara las chuletas',
      prepD: 'Seca las chuletas con papel de cocina. Con la punta del cuchillo haz 3 cortes pequeños en el borde de grasa, separados dos dedos entre sí.',
      prepC: 'Esos cortes evitan que la chuleta se curve como un plato al calentarse y se cocine disparejo.',
      fuego: 'medio-alto', m1: 4, m2: 4, marina: 20, reposo: 5, crudo: true,
      puntoD: 'Haz un corte cerca del hueso, que es la parte que más tarda.',
      puntoS: 'Carne blanca o con un rosado muy pálido, firme al tacto y con jugos claros.',
      puntoE: 'El cerdo pasado queda seco como cartón: no lo dejes "por si acaso" 10 minutos más.' },
    { n: 'Medallones de lomo de cerdo', e: '🥩', el: 'los medallones', lo: 'los', ing: i(350, 'g', 'de lomo de cerdo'),
      prepT: 'Corta el lomo en medallones',
      prepD: 'Corta el lomo en rodajas de 2 centímetros de grosor. Aplasta cada una suavemente con la palma para emparejarla y sécalas con papel de cocina.',
      prepC: 'Trata de que todas queden del mismo grosor para que estén listas al mismo tiempo.',
      fuego: 'medio-alto', m1: 3, m2: 3, marina: 20, reposo: 4, crudo: true,
      puntoD: 'Parte un medallón por la mitad.',
      puntoS: 'Por dentro se ve blanco o apenas rosado pálido, y jugoso.',
      puntoE: 'Son delgados y se pasan rápido: sácalos apenas lleguen al punto.' },
    { n: 'Bistec de res', e: '🥩', el: 'los bistecs', lo: 'los', ing: i(2, '', 'bistec de res de 1,5 cm de grosor|bistecs de res de 1,5 cm de grosor', 'Lomo, churrasco o punta de anca.'),
      prepT: 'Atempera y seca la carne',
      prepD: 'Saca la carne de la nevera 15 minutos antes. Sécala muy bien con papel de cocina por los dos lados.',
      prepC: 'La carne seca se dora; la mojada se hierve y queda gris.',
      fuego: 'alto', m1: 3, m2: 3, marina: 15, reposo: 5, crudo: true,
      puntoD: 'Presiona el centro con el dedo o haz un corte pequeño. Los tiempos dados dejan la carne en término medio; para tres cuartos, suma 1 minuto por lado.',
      puntoS: 'Término medio: centro rosado y jugoso, y al presionar se siente como la base del pulgar cuando juntas pulgar y dedo medio.',
      puntoE: 'No aplastes la carne con la espátula: le sacas el jugo.' },
    { n: 'Filete de pescado blanco', e: '🐟', el: 'los filetes', lo: 'los', ing: i(2, '', 'filete de pescado blanco|filetes de pescado blanco', 'Tilapia, merluza o corvina, de unos 150 g.'),
      prepT: 'Seca y revisa el pescado',
      prepD: 'Seca los filetes con papel de cocina por los dos lados. Pasa el dedo por el centro para sentir si queda alguna espina y sácala.',
      prepC: 'El pescado mojado se pega a la sartén y se rompe.',
      fuego: 'medio-alto', m1: 3, m2: 2, marina: 10, reposo: 0, pescado: true, antiadherente: true,
      puntoD: 'Presiona suave la parte más gruesa con un tenedor.',
      puntoS: 'La carne está blanca y opaca hasta el centro y se separa en láminas.',
      puntoE: 'Un minuto de más y queda seco. Retíralo apenas pierda el aspecto transparente.' },
    { n: 'Salmón', e: '🐟', el: 'los filetes de salmón', lo: 'los', ing: i(2, '', 'filete de salmón con piel|filetes de salmón con piel', 'De unos 150 g cada uno.'),
      prepT: 'Seca el salmón',
      prepD: 'Seca los filetes con papel de cocina, sobre todo la piel, hasta que ya no se sienta húmeda.',
      prepC: 'La piel bien seca queda crujiente como una galleta.',
      fuego: 'medio-alto', m1: 5, m2: 2, marina: 10, reposo: 2, pescado: true, antiadherente: true, pielAbajo: true,
      puntoD: 'Mira el filete de lado y presiona el centro con el dedo.',
      puntoS: 'El color rosado opaco subió por los lados casi hasta arriba, y el centro cede un poco pero no está blando.',
      puntoE: 'Si empieza a salir mucha sustancia blanca por los lados, ya se está pasando: retíralo.' },
    { n: 'Camarones', e: '🍤', el: 'los camarones', lo: 'los', ing: i(350, 'g', 'de camarones crudos pelados y limpios'),
      prepT: 'Limpia y seca los camarones',
      prepD: 'Si están congelados, descongélalos en un colador bajo agua fría 5 minutos. Revisa que no tengan la venita oscura del lomo (se saca con la punta del cuchillo) y sécalos muy bien con papel de cocina.',
      prepC: 'Secos se doran; mojados se hierven en su propia agua.',
      fuego: 'alto', m1: 2, m2: 1, marina: 10, reposo: 0, pescado: true,
      puntoD: 'Mira el color y la forma.',
      puntoS: 'Están rosados y opacos, y se doblan en forma de letra C.',
      puntoE: 'Si se cierran en forma de O apretada, se pasaron y quedan gomosos. Se cocinan en 3 minutos.' },
    { n: 'Tofu', e: '🧈', el: 'las tajadas de tofu', lo: 'las', ing: i(350, 'g', 'de tofu firme'),
      prepT: 'Prensa y corta el tofu',
      prepD: 'Envuelve el bloque de tofu en papel de cocina o un limpión limpio, ponle encima una tabla con algo pesado y déjalo 15 minutos para que suelte agua. Luego córtalo en tajadas de 1,5 centímetros.',
      prepC: 'Sin esa agua, el tofu absorbe mejor el adobo y se dora en lugar de deshacerse.',
      fuego: 'medio-alto', m1: 4, m2: 4, marina: 20, reposo: 0, antiadherente: true,
      puntoD: 'Voltea una tajada con la espátula y mira las dos caras.',
      puntoS: 'Costra dorada y firme por ambos lados; por dentro sigue blando.',
      puntoE: 'No lo muevas antes de tiempo: mientras no se dore, se pega y se rompe.' }
  ];

  PLANCHA.forEach(function (pr) {
    ADOBOS.forEach(function (a) {
      var marina = reposoMarinado(pr.marina, a);
      var fuego = a.dulce && pr.fuego !== 'medio' ? 'medio' : pr.fuego;
      GEN.agregar({
        nombre: pr.n + ' ' + a.s,
        emoji: pr.e, categoria: 'Platos fuertes', dificultad: pr.pescado ? 'Media' : 'Fácil',
        prep: 10 + marina, coccion: pr.m1 + pr.m2 + 2, porciones: 2,
        descripcion: may(pr.el) + ' se marinan ' + a.s.replace(/^(al|a la|a las|con|en) /, function (m) { return m; }) + ' y se doran en sartén bien caliente. Jugoso por dentro, dorado por fuera.',
        antes: 'Tres claves de todo lo que va a la plancha: la pieza <strong>seca</strong>, la sartén <strong>bien caliente</strong> y <strong>no moverla</strong> hasta que se dore.' + (pr.crudo ? ' ' + GEN.HIGIENE : ''),
        ingredientes: [pr.ing].concat(a.ing).concat([i(1, 'cdta', 'de aceite para la sartén')]),
        utensilios: [pr.antiadherente ? 'Sartén antiadherente grande' : 'Sartén pesada o plancha', 'Tazón mediano', 'Tabla y cuchillo', 'Papel de cocina', 'Pinzas o espátula', 'Un plato limpio para servir'],
        pasos: [
          p('Prepara el adobo', a.como, { c: a.tip }),
          p(pr.prepT, pr.prepD, { c: pr.prepC }),
          p('Deja marinar',
            'Pon ' + pr.el + ' en el tazón del adobo y da vueltas hasta que todo quede bien cubierto. Deja reposar ' + marina + ' minutos' + (marina >= 20 ? ' (en la nevera si en tu cocina hace calor).' : '.') +
            (a.mitad ? ' Usa solo la mitad del chimichurri; la otra mitad es para servir.' : ''),
            { m: marina,
              c: a.acido && pr.pescado ? 'No lo dejes más tiempo: el ácido del adobo empieza a "cocinar" el pescado y la textura cambia.' : 'El reposo deja que la sal entre en la pieza y que no sepa solo por fuera.',
              e: pr.crudo || pr.pescado ? 'El adobo que tocó la pieza cruda no se usa como salsa al final.' : '' }),
          p('Calienta bien la sartén',
            'Pon la sartén a fuego ' + fuego + ' durante 2 minutos. Agrega la cucharadita de aceite y repártela por todo el fondo.',
            { s: 'El aceite corre como agua y una gota de agua chisporrotea al instante.', m: 2,
              e: a.dulce ? 'Este adobo lleva dulce y el dulce se quema rápido: por eso el fuego va en medio y no más alto. Si ves que se pone negro, baja la llama.' : 'Si el aceite echa humo, se pasó: retira la sartén unos segundos del fuego.' }),
          p('Dora el primer lado sin mover',
            'Saca ' + pr.el + ' del adobo dejando escurrir el exceso y acomoda todo en la sartén sin amontonar' + (pr.pielAbajo ? ', con la piel hacia abajo. Presiona 10 segundos con la espátula para que la piel quede plana' : '') + '. No ' + pr.lo + ' muevas durante ' + pr.m1 + ' minutos.',
            { s: 'Se oye un chisporroteo constante y los bordes van cambiando de color de abajo hacia arriba.', m: pr.m1,
              e: 'Si la sartén queda muy llena, la temperatura baja y todo se cuece en su jugo. Es mejor hacerlo en dos tandas.' }),
          p('Voltea y termina',
            'Voltea ' + pr.el + ' con las pinzas o la espátula; si se resisten, espera 30 segundos más, que cuando están dorados se sueltan solos. Cocina ' + pr.m2 + (pr.m2 === 1 ? ' minuto' : ' minutos') + ' más.' +
            (/BBQ/.test(a.s) ? ' En el último minuto, pincela por encima la salsa BBQ que separaste.' : ''),
            { m: pr.m2, c: 'Voltea una sola vez. Cada vuelta extra enfría la superficie y quita dorado.' }),
          p('Comprueba el punto', pr.puntoD, { s: pr.puntoS, e: pr.puntoE }),
          p(pr.reposo ? 'Deja reposar y sirve' : 'Sirve de inmediato',
            (pr.reposo ? 'Pasa ' + pr.el + ' a un plato limpio y deja reposar ' + pr.reposo + ' minutos antes de cortar. ' : 'Pasa ' + pr.el + ' al plato enseguida, porque con el calor de la sartén se siguen cocinando. ') +
            (a.mitad ? 'Sirve con el chimichurri que guardaste por encima.' : 'Acompaña con arroz, ensalada o papas.'),
            { m: pr.reposo, c: pr.reposo ? 'En el reposo los jugos se reparten otra vez por la carne. Si cortas de inmediato, se quedan en el plato.' : '' })
        ],
        guardar: 'En un recipiente tapado en la nevera dura ' + (pr.pescado ? '1 día' : '3 días') + '. Recalienta a fuego bajo con unas gotas de agua para que no se seque.'
      });
    });
  });

  // ---------------------------------------------------------------- AL HORNO
  var HORNO = [
    { n: 'Muslos de pollo', e: '🍗', el: 'los muslos', ing: i(6, '', 'muslo de pollo con piel y hueso|muslos de pollo con piel y hueso'), por: 3, temp: 200, min: 40, voltear: false, crudo: true,
      prep: 'Seca muy bien los muslos con papel de cocina, sobre todo la piel.',
      lado: 'con la piel hacia arriba',
      punto: 'Pincha el muslo más grande cerca del hueso.', senal: 'Piel dorada y crujiente; el jugo que sale es transparente, sin nada de rosado (74 °C junto al hueso).' },
    { n: 'Pechugas de pollo', e: '🍗', el: 'las pechugas', ing: i(3, '', 'pechuga de pollo sin hueso|pechugas de pollo sin hueso'), por: 3, temp: 200, min: 22, voltear: false, crudo: true,
      prep: 'Aplana la parte gruesa de cada pechuga dentro de una bolsa, golpeando con el fondo de una olla, hasta dejarla de unos 2 centímetros. Sécalas con papel.',
      lado: 'sin que se toquen',
      punto: 'Corta la más gruesa por el centro.', senal: 'Carne blanca hasta el centro y jugos transparentes.' },
    { n: 'Alitas de pollo', e: '🍗', el: 'las alitas', ing: i(1000, 'g', 'de alitas de pollo', 'Unas 12 alitas.'), por: 4, temp: 220, min: 40, voltear: true, crudo: true,
      prep: 'Si las alitas vienen enteras, córtalas por la coyuntura para separar la parte carnosa de la del medio (la punta se puede botar). Sécalas muchísimo con papel de cocina.',
      lado: 'en una sola capa y separadas',
      punto: 'Mueve el hueso de una alita.', senal: 'Piel dorada y crujiente; la carne se separa del hueso con facilidad.' },
    { n: 'Lomo de cerdo', e: '🥩', el: 'el lomo', ing: i(600, 'g', 'de lomo de cerdo en una sola pieza'), por: 4, temp: 190, min: 38, voltear: false, crudo: true, reposo: 10,
      prep: 'Seca el lomo con papel de cocina. Si tiene una capa de grasa por encima, déjala: lo mantiene jugoso.',
      lado: 'con la grasa hacia arriba',
      punto: 'Corta por la mitad la parte más gruesa (o usa termómetro: 65 °C).', senal: 'Centro blanco o con un rosado muy pálido, y jugos claros.' },
    { n: 'Filetes de pescado', e: '🐟', el: 'los filetes', ing: i(4, '', 'filete de pescado blanco|filetes de pescado blanco'), por: 4, temp: 200, min: 13, voltear: false, pescado: true,
      prep: 'Seca los filetes con papel de cocina y revisa con el dedo que no tengan espinas.',
      lado: 'sin montarlos uno sobre otro',
      punto: 'Presiona la parte más gruesa con un tenedor.', senal: 'Carne blanca, opaca y que se separa en láminas.' },
    { n: 'Salmón', e: '🐟', el: 'los filetes de salmón', ing: i(4, '', 'filete de salmón|filetes de salmón'), por: 4, temp: 200, min: 12, voltear: false, pescado: true,
      prep: 'Seca los filetes con papel de cocina.',
      lado: 'con la piel hacia abajo',
      punto: 'Presiona el centro con un tenedor.', senal: 'Se separa en láminas grandes y el centro está rosado opaco, todavía jugoso.' },
    { n: 'Papas en cascos', e: '🥔', el: 'las papas', ing: i(5, '', 'papa mediana|papas medianas'), por: 4, temp: 220, min: 38, voltear: true, acomp: true,
      prep: 'Lava bien las papas (van con cáscara). Córtalas a lo largo por la mitad y cada mitad en 3 o 4 cascos. Sécalas muy bien con un limpión.',
      lado: 'con un lado cortado tocando la bandeja',
      punto: 'Pincha un casco grueso con un tenedor.', senal: 'Doradas y crujientes por fuera; el tenedor entra sin resistencia.' },
    { n: 'Coliflor', e: '🥦', el: 'los ramitos de coliflor', ing: i(1, '', 'coliflor mediana|coliflores medianas'), por: 4, temp: 220, min: 25, voltear: true, acomp: true,
      prep: 'Quita las hojas y corta la coliflor en ramitos del tamaño de un bocado, parejos. Lávalos y sécalos muy bien.',
      lado: 'con un lado plano tocando la bandeja',
      punto: 'Pincha un tallo con un cuchillo.', senal: 'Bordes tostados color café y el cuchillo entra fácil en el tallo.' }
  ];

  HORNO.forEach(function (h) {
    ADOBOS.forEach(function (a) {
      var mitad = Math.round(h.min / 2);
      GEN.agregar({
        nombre: h.n + ' al horno ' + a.s,
        emoji: h.e, categoria: h.acomp ? 'Acompañamientos' : 'Platos fuertes', dificultad: 'Fácil',
        prep: 15, coccion: h.min + (h.reposo || 0), porciones: h.por,
        descripcion: 'El horno hace casi todo el trabajo: ' + h.el + ' quedan doraditos con su adobo ' + a.s + '.',
        antes: 'El horno debe estar caliente <strong>antes</strong> de meter la bandeja, y la comida va en una sola capa con espacio entre las piezas: amontonada se cuece al vapor y no se dora.' + (h.crudo ? ' ' + GEN.HIGIENE : ''),
        ingredientes: [h.ing].concat(a.ing),
        utensilios: ['Bandeja para horno', 'Papel para hornear o papel aluminio', 'Tazón grande', 'Tabla y cuchillo', 'Papel de cocina', 'Pinzas', 'Guantes o agarraollas'],
        pasos: [
          p('Precalienta el horno', 'Enciende el horno a ' + h.temp + ' °C con la rejilla en el centro. Forra la bandeja con papel para hornear.',
            { c: 'Tarda unos 15 minutos en llegar a la temperatura. Aprovecha ese tiempo para los pasos siguientes.' }),
          p('Prepara el adobo', a.como, { c: a.tip }),
          p('Prepara ' + h.el, h.prep, { c: 'Bien seco es igual a bien dorado. La humedad es enemiga del crujiente.' }),
          p('Cubre con el adobo', 'Pon ' + h.el + ' en el tazón del adobo y mezcla con las manos o una cuchara hasta cubrir todo por parejo. Déjalo así mientras el horno termina de calentar.' +
            (a.mitad ? ' Usa solo la mitad del chimichurri; el resto es para servir.' : ''),
            { e: h.crudo || h.pescado ? 'Lávate las manos después, y no uses el adobo sobrante como salsa: tocó la pieza cruda.' : '' }),
          p('Acomoda en la bandeja', 'Pasa todo a la bandeja ' + h.lado + ', dejando al menos un dedo de espacio entre las piezas.',
            { e: 'Si no cabe todo en una capa, usa dos bandejas. Amontonado no se dora.' }),
          p('Hornea', 'Mete la bandeja al horno y hornea ' + h.min + ' minutos en total.' +
            (h.voltear ? ' A los ' + mitad + ' minutos saca la bandeja, voltea cada pieza con las pinzas y vuelve a meterla.' : ' No hace falta voltear.') +
            (/BBQ/.test(a.s) ? ' Cuando falten 5 minutos, pincela por encima la salsa BBQ que separaste.' : ''),
            { m: h.voltear ? mitad : h.min,
              c: h.voltear ? 'Pon de nuevo el temporizador para la segunda mitad después de voltear.' : 'Cada horno es distinto: empieza a mirar 5 minutos antes del tiempo.',
              e: a.dulce ? 'Este adobo lleva dulce. Si ves que se oscurece demasiado antes de tiempo, cubre la bandeja con papel aluminio sin apretar.' : '' }),
          p('Comprueba el punto', h.punto, { s: h.senal, e: h.crudo ? 'Si falta, devuelve la bandeja 5 minutos y revisa otra vez. El pollo y el cerdo no se comen a medio cocinar.' : 'Si falta, dale 3 a 5 minutos más y vuelve a revisar.' }),
          p(h.reposo ? 'Deja reposar y corta' : 'Sirve',
            (h.reposo ? 'Deja reposar ' + h.el + ' ' + h.reposo + ' minutos sobre la tabla, cubierto sin apretar con papel aluminio, y luego corta en tajadas de 1 centímetro. ' : 'Sirve caliente, recién salido del horno. ') +
            (a.mitad ? 'Pon por encima el chimichurri que guardaste.' : ''),
            { m: h.reposo, c: h.reposo ? 'Si lo cortas de inmediato, el jugo se riega en la tabla y la carne queda seca.' : '' })
        ],
        guardar: 'Dura ' + (h.pescado ? '1 día' : '3 días') + ' en la nevera en un recipiente tapado. Para recalentar, mejor 8 minutos de horno o sartén que microondas: así recupera algo del dorado.'
      });
    });
  });

  // ---------------------------------------------------------------- PINCHOS
  var PINCHOS = [
    { n: 'pollo', e: '🍢', ing: i(500, 'g', 'de pechuga de pollo'), corte: 'Corta la pechuga en cubos de 2,5 centímetros, lo más parejos posible.', min: 10, crudo: true, senal: 'Al partir el cubo más grande, está blanco hasta el centro y con jugo transparente.' },
    { n: 'res', e: '🍢', ing: i(500, 'g', 'de carne de res tierna (lomo o punta de anca)'), corte: 'Corta la carne en cubos de 2,5 centímetros, quitando los nervios duros.', min: 8, crudo: true, senal: 'Dorados por fuera y rosados y jugosos por dentro (o más cocidos si así te gustan).' },
    { n: 'cerdo', e: '🍢', ing: i(500, 'g', 'de lomo de cerdo'), corte: 'Corta el lomo en cubos de 2,5 centímetros.', min: 10, crudo: true, senal: 'Al partir un cubo, está blanco o rosado muy pálido y jugoso, sin partes rojas.' },
    { n: 'camarones', e: '🍤', ing: i(500, 'g', 'de camarones grandes pelados y limpios'), corte: 'Seca los camarones con papel de cocina. Si son pequeños, ensarta dos juntos para que no se pasen.', min: 4, pescado: true, senal: 'Rosados, opacos y en forma de C. Se cocinan muy rápido.' },
    { n: 'verduras', e: '🍢', ing: i(250, 'g', 'de champiñones enteros'), corte: 'Limpia los champiñones con un papel húmedo y corta 1 calabacín en rodajas gruesas de 1,5 centímetros.', min: 10, veg: true, senal: 'Verduras con marcas doradas, tiernas pero todavía firmes al morder.' }
  ];

  PINCHOS.forEach(function (k) {
    ADOBOS.forEach(function (a) {
      var marina = reposoMarinado(k.pescado ? 10 : 20, a);
      GEN.agregar({
        nombre: 'Pinchos de ' + k.n + ' ' + a.s,
        emoji: k.e, categoria: 'Platos fuertes', dificultad: 'Media',
        prep: 25 + marina, coccion: k.min + 2, porciones: 4,
        descripcion: 'Brochetas de ' + k.n + ' con pimentón y cebolla, marinadas ' + a.s + ' y doradas a la plancha. Salen unos 8 pinchos.',
        antes: 'Los cubos deben ser <strong>del mismo tamaño</strong> para que se cocinen parejo, y no se aprietan en el palo: con un poquito de espacio, el calor llega a todos los lados.' + (k.crudo ? ' ' + GEN.HIGIENE : ''),
        ingredientes: [k.ing].concat(k.veg ? [i(1, '', 'calabacín|calabacines')] : []).concat([i(1, '', 'pimentón rojo o verde|pimentones rojos o verdes'), i(1, '', 'cebolla cabezona|cebollas cabezonas')]).concat(a.ing).concat([i(8, '', 'palo de madera para pincho|palos de madera para pincho')]),
        utensilios: ['Sartén grande, plancha o parrilla', 'Palos de pincho', 'Tazón grande', 'Tabla y cuchillo', 'Pinzas', 'Recipiente con agua para remojar los palos'],
        pasos: [
          p('Remoja los palos', 'Pon los palos de madera en un recipiente con agua, completamente cubiertos, mientras preparas todo lo demás (mínimo 20 minutos).',
            { c: 'Mojados no se queman ni se astillan con el calor.' }),
          p('Prepara el adobo', a.como, { c: a.tip }),
          p('Corta todo en trozos parejos', k.corte + ' Corta el pimentón en cuadros de ese mismo tamaño, sin semillas. Corta la cebolla en cuartos y separa las capas de dos en dos.',
            { c: 'El tamaño parejo es lo que hace que todo esté listo al mismo tiempo.' }),
          p('Marina', 'Mezcla ' + (k.veg ? 'las verduras' : 'los trozos de ' + k.n) + ' con el adobo hasta cubrir bien y deja reposar ' + marina + ' minutos.' + (a.mitad ? ' Usa solo la mitad del chimichurri.' : ''),
            { m: marina, e: k.crudo || k.pescado ? 'El adobo que sobra no se usa como salsa: estuvo en contacto con la carne cruda.' : '' }),
          p('Arma los pinchos', 'Ensarta alternando: un trozo de ' + (k.veg ? 'champiñón' : k.n) + ', uno de pimentón, uno de cebolla' + (k.veg ? ', uno de calabacín' : '') + ', y repite hasta llenar el palo dejando 3 centímetros libres en cada punta para agarrarlo.',
            { s: 'Los trozos se tocan apenas, sin quedar apretados.', e: 'Si los aprietas mucho, los lados que se tocan quedan crudos.' }),
          p('Calienta la plancha', 'Pon la sartén o plancha a fuego ' + (a.dulce ? 'medio' : 'medio-alto') + ' durante 2 minutos y úntala con unas gotas de aceite usando un papel de cocina doblado.',
            { m: 2, e: a.dulce ? 'Este adobo lleva dulce: con fuego muy alto se quema por fuera antes de cocinarse por dentro.' : '' }),
          p('Cocina dando vueltas', 'Acomoda los pinchos sin que se toquen. Cocina ' + k.min + ' minutos en total, girándolos un cuarto de vuelta cada ' + (k.min <= 4 ? 'minuto' : '2 minutos') + ' para dorar los cuatro lados.' +
            (/BBQ/.test(a.s) ? ' En la última vuelta, pincela con la salsa BBQ que separaste.' : ''),
            { m: k.min, s: k.senal }),
          p('Sirve', 'Pásalos a una bandeja y sirve de inmediato' + (a.mitad ? ', con el chimichurri que guardaste por encima.' : ', con unas gotas de limón si te gusta.') + ' Van muy bien con arepa, papa o ensalada.')
        ],
        guardar: 'Saca los trozos del palo y guárdalos en un recipiente tapado en la nevera hasta ' + (k.pescado ? '1 día' : '3 días') + '.'
      });
    });
  });

  // ---------------------------------------------------------------- APANADOS
  var APANAR = [
    { n: 'Pechuga de pollo apanada', e: '🍗', el: 'las pechugas', ing: i(2, '', 'pechuga de pollo|pechugas de pollo'), fino: 'Abre cada pechuga por la mitad como un libro y aplánala dentro de una bolsa plástica, golpeando con el fondo de una olla, hasta dejarla de menos de 1 centímetro.', min: 3, crudo: true, senal: 'Al cortar la parte más gruesa, está blanca hasta el centro.' },
    { n: 'Milanesa de cerdo', e: '🥩', el: 'los filetes', ing: i(4, '', 'filete delgado de lomo de cerdo|filetes delgados de lomo de cerdo'), fino: 'Aplana los filetes dentro de una bolsa plástica, golpeando con el fondo de una olla, hasta dejarlos de medio centímetro.', min: 3, crudo: true, senal: 'Al cortar, la carne está blanca y jugosa, sin partes rojas.' },
    { n: 'Milanesa de res', e: '🥩', el: 'los filetes', ing: i(4, '', 'filete delgado de res para apanar|filetes delgados de res para apanar'), fino: 'Aplana los filetes dentro de una bolsa plástica, golpeando con el fondo de una olla, hasta dejarlos de medio centímetro. Corta los nervios del borde para que no se encojan.', min: 2, crudo: true, senal: 'Apanado dorado y carne cocida pero flexible, no tiesa.' },
    { n: 'Pescado apanado', e: '🐟', el: 'los filetes', ing: i(4, '', 'filete de pescado blanco|filetes de pescado blanco'), fino: 'Seca muy bien los filetes con papel de cocina y revisa que no tengan espinas. No hace falta aplanarlos.', min: 3, pescado: true, senal: 'Al abrir con un tenedor, la carne está blanca, opaca y en láminas.' },
    { n: 'Berenjena apanada', e: '🍆', el: 'las rodajas', ing: i(1, '', 'berenjena grande|berenjenas grandes'), fino: 'Corta la berenjena en rodajas de 1 centímetro. Espolvoréalas con sal, déjalas 15 minutos en un colador para que suelten el agua amarga y sécalas muy bien con papel.', min: 3, senal: 'Al pinchar con un cuchillo, entra como en mantequilla.' }
  ];
  var REBOZADOS = [
    { s: '', nota: 'clásico', extra: [], mezcla: '' },
    { s: ' con parmesano', nota: 'con queso', extra: [i(0.5, 'taza', 'de queso parmesano rallado')], mezcla: ' Mezcla el queso parmesano con el pan rallado.' },
    { s: ' con ajo y perejil', nota: 'con ajo', extra: [i(1, 'cdta', 'de ajo en polvo'), i(2, 'cda', 'de perejil seco o fresco picado')], mezcla: ' Mezcla el ajo en polvo y el perejil con el pan rallado.' },
    { s: ' con ajonjolí', nota: 'con ajonjolí', extra: [i(3, 'cda', 'de ajonjolí (sésamo)')], mezcla: ' Mezcla el ajonjolí con el pan rallado.' }
  ];

  APANAR.forEach(function (x) {
    REBOZADOS.forEach(function (rb) {
      GEN.agregar({
        nombre: x.n + rb.s,
        emoji: x.e, categoria: 'Platos fuertes', dificultad: 'Media',
        prep: 25, coccion: 12, porciones: 4,
        descripcion: 'Crujiente por fuera y jugoso por dentro, con un apanado ' + rb.nota + ' que no se despega.',
        antes: 'El apanado tiene un orden que no se cambia: <strong>harina, huevo, pan</strong>. La harina seca la superficie, el huevo es el pegante y el pan da el crujiente. Usa una mano para lo seco y la otra para el huevo, y no terminarás con los dedos empanizados.' + (x.crudo ? ' ' + GEN.HIGIENE : ''),
        ingredientes: [x.ing, i(0.5, 'taza', 'de harina de trigo'), i(2, '', 'huevo|huevos'), i(1.5, 'taza', 'de pan rallado')].concat(rb.extra).concat([sal(1), i(null, '', 'Pimienta'), i(1, 'taza', 'de aceite para freír'), i(1, '', 'limón|limones', 'Para servir.')]),
        utensilios: ['Sartén grande y honda', 'Tres platos hondos', 'Tenedor', 'Pinzas', 'Rejilla o plato con papel de cocina', 'Bolsa plástica (para aplanar)'],
        pasos: [
          p('Prepara ' + x.el, x.fino + ' Sazona por los dos lados con la mitad de la sal y un poco de pimienta.',
            { c: 'Delgado y parejo: así se cocina por dentro en el mismo tiempo que se dora por fuera.' }),
          p('Arma la estación de apanado', 'Pon tres platos hondos en fila. En el primero, la harina. En el segundo, los huevos batidos con el resto de la sal. En el tercero, el pan rallado.' + rb.mezcla,
            { c: 'Deja al final de la fila un plato vacío para ir poniendo las piezas ya apanadas.' }),
          p('Apana en orden', 'Pasa cada pieza por harina y sacude el exceso. Luego por huevo, dejando escurrir lo que sobre. Por último por el pan, presionando con la palma para que se pegue bien por ambos lados.',
            { s: 'Queda cubierta por completo, sin parches donde se vea la carne o el huevo.', e: 'Si te saltas la harina, el apanado se despega entero al freír.' }),
          p('Deja reposar', 'Deja las piezas apanadas en el plato, sin montarlas, durante 10 minutos.',
            { m: 10, c: 'En el reposo el pan se hidrata con el huevo y se agarra mucho mejor.' }),
          p('Calienta el aceite', 'Pon el aceite en la sartén (debe subir medio centímetro) a fuego medio durante 3 minutos. Echa una miga de pan para probar.',
            { s: 'La miga burbujea enseguida y se dora en unos 20 segundos.', m: 3, e: 'Si la miga se hunde sin burbujas, falta calor y el apanado se llenará de grasa. Si se quema en 5 segundos, el aceite está demasiado caliente: baja el fuego.' }),
          p('Fríe el primer lado', 'Pon las piezas en el aceite soltándolas hacia el lado contrario a ti, sin llenar la sartén. Fríe ' + x.min + ' minutos sin mover.',
            { m: x.min, s: 'Burbujeo parejo alrededor y bordes dorados.' }),
          p('Voltea y termina', 'Voltea con las pinzas y fríe ' + x.min + ' minutos más, hasta que el otro lado tenga el mismo color.',
            { m: x.min, s: x.senal }),
          p('Escurre y sirve', 'Pasa las piezas a una rejilla o a un plato con papel de cocina y déjalas 1 minuto. Sirve con cascos de limón.',
            { c: 'Sobre rejilla quedan más crujientes; sobre papel, el vapor ablanda la parte de abajo.' })
        ],
        guardar: 'Guarda en la nevera hasta 2 días. Para que vuelva a quedar crujiente, recalienta en horno o sartén seca; en microondas queda blando.'
      });
    });
  });

  // ---------------------------------------------------------------- GUISOS
  var GUISAR = [
    { n: 'Pollo', e: '🍲', ing: i(8, '', 'presa de pollo (muslos y contramuslos)|presas de pollo (muslos y contramuslos)'), el: 'las presas de pollo', min: 35, dorar: true, crudo: true, senal: 'La carne se separa del hueso con facilidad y no tiene nada de rosado.' },
    { n: 'Carne de res', e: '🍲', ing: i(700, 'g', 'de carne de res para guisar, en cubos de 3 cm'), el: 'los cubos de res', min: 75, dorar: true, crudo: true, senal: 'Un cubo se parte fácilmente con el borde de la cuchara.' },
    { n: 'Cerdo', e: '🍲', ing: i(700, 'g', 'de carne de cerdo (pierna o brazo), en cubos de 3 cm'), el: 'los cubos de cerdo', min: 50, dorar: true, crudo: true, senal: 'La carne está tierna y se parte con la cuchara sin esfuerzo.' },
    { n: 'Albóndigas', e: '🧆', ing: i(500, 'g', 'de carne molida de res'), el: 'las albóndigas', min: 20, dorar: true, crudo: true, bolas: true, senal: 'Al partir una albóndiga, está cocida hasta el centro, sin rosado.' },
    { n: 'Garbanzos', e: '🫘', ing: i(3, 'taza', 'de garbanzos cocidos', 'O 2 latas, escurridos y enjuagados.'), el: 'los garbanzos', min: 15, senal: 'Los garbanzos están cremosos por dentro y tomaron el color de la salsa.' },
    { n: 'Pescado', e: '🐟', ing: i(600, 'g', 'de pescado blanco firme en trozos grandes'), el: 'los trozos de pescado', min: 8, pescado: true, senal: 'El pescado está blanco, opaco y se separa en láminas al tocarlo.' }
  ];
  var SALSAS_GUISO = [
    { s: 'guisado en salsa criolla', ing: [i(2, '', 'tomate maduro|tomates maduros'), i(0.5, 'cdta', 'de comino molido')], liq: i(1.5, 'taza', 'de agua'),
      base: 'Agrega los tomates picados en cuadritos y el comino. Cocina 5 minutos, revolviendo, hasta que el tomate se deshaga en una pasta rojiza.', liqT: 'Vierte la taza y media de agua' },
    { s: 'en salsa de champiñones', ing: [i(250, 'g', 'de champiñones en láminas'), i(0.5, 'taza', 'de crema de leche')], liq: i(1, 'taza', 'de agua'),
      base: 'Agrega los champiñones en láminas y cocina 6 minutos sin taparlos: primero sueltan agua y luego se doran.', liqT: 'Vierte la taza de agua', fin: 'Agrega la crema de leche, revuelve y deja 2 minutos más a fuego bajo, sin que hierva fuerte.' },
    { s: 'al curry con leche de coco', ing: [i(1, 'cda', 'de curry en polvo'), i(1, 'cdta', 'de jengibre fresco rallado'), i(400, 'ml', 'de leche de coco')], liq: i(0.5, 'taza', 'de agua'),
      base: 'Agrega el curry y el jengibre y revuelve 1 minuto, hasta que huela intenso: las especias se "despiertan" al tostarse en el aceite.', liqT: 'Vierte la leche de coco y la media taza de agua' },
    { s: 'en salsa de tomate y pimentón', ing: [i(1, '', 'pimentón rojo|pimentones rojos'), i(3, '', 'tomate maduro|tomates maduros'), i(1, 'cdta', 'de paprika')], liq: i(1, 'taza', 'de agua'),
      base: 'Agrega el pimentón en tiras delgadas y cocina 4 minutos. Luego los tomates picados y la paprika, y cocina 5 minutos más hasta que se forme una salsa espesa.', liqT: 'Vierte la taza de agua' },
    { s: 'guisado con papa y zanahoria', ing: [i(2, '', 'tomate maduro|tomates maduros'), i(3, '', 'papa mediana|papas medianas'), i(2, '', 'zanahoria|zanahorias')], liq: i(2.5, 'taza', 'de agua'),
      base: 'Agrega los tomates picados y cocina 5 minutos hasta que se deshagan.', liqT: 'Vierte las dos tazas y media de agua', papas: true },
    { s: 'a la cerveza', ing: [i(1, 'taza', 'de cerveza rubia'), i(1, 'cda', 'de mostaza'), i(1, 'cdta', 'de tomillo seco')], liq: i(0.5, 'taza', 'de agua'),
      base: 'Agrega la mostaza y el tomillo y revuelve 30 segundos.', liqT: 'Vierte la cerveza y la media taza de agua (el alcohol se evapora al hervir y queda solo el sabor)' }
  ];

  GUISAR.forEach(function (g) {
    SALSAS_GUISO.forEach(function (sg) {
      var pasos = [];
      pasos.push(p('Pica las verduras', 'Pica la cebolla en cuadritos pequeños y los 3 dientes de ajo muy fino. Deja picado y listo también lo que lleva la salsa.' +
        (sg.papas ? ' Pela las papas y córtalas en cubos de 3 centímetros (déjalas en agua); pela las zanahorias y córtalas en rodajas de 1 centímetro.' : ''),
        { c: 'Tener todo picado antes de prender la estufa evita que algo se queme mientras cortas lo siguiente.' }));

      if (g.bolas) {
        pasos.push(p('Forma las albóndigas', 'En un tazón mezcla la carne molida con el huevo, el pan rallado, media cucharadita de sal y una pizca de pimienta, solo hasta que se una. Con las manos mojadas forma bolitas del tamaño de una nuez grande (salen unas 16).',
          { c: 'Las manos mojadas evitan que la carne se pegue.', e: 'Si amasas demasiado, las albóndigas quedan duras y apretadas.' }));
      }

      if (g.dorar) {
        pasos.push(p('Dora ' + g.el, (g.bolas ? '' : 'Seca ' + g.el + ' con papel de cocina y sazona con la mitad de la sal. ') + 'Calienta 1 cucharada de aceite en la olla a fuego medio-alto. Dora ' + g.el + ' en dos tandas, 2 a 3 minutos por lado, y pásalos a un plato.',
          { s: 'Costra café dorado por fuera. Por dentro siguen crudos: se terminan de cocinar en la salsa.', e: 'Si echas todo de una vez, la olla se enfría, la carne suelta agua y se hierve gris en lugar de dorarse.' }));
      } else {
        pasos.push(p('Deja listo lo principal', g.pescado ? 'Seca ' + g.el + ' con papel de cocina, sazónalos con la mitad de la sal y déjalos aparte. Entran a la olla casi al final.' : 'Escurre ' + g.el + ' en un colador, enjuágalos bajo el chorro y déjalos aparte.',
          { c: g.pescado ? 'El pescado se deshace si se cocina mucho: por eso primero se hace la salsa.' : 'El enjuague les quita el líquido espeso de la lata y el exceso de sal.' }));
      }

      pasos.push(p('Sofríe la cebolla y el ajo', 'En la misma olla, a fuego medio, pon la otra cucharada de aceite y la cebolla con una pizca de sal. Cocina 4 minutos, raspando el fondo con la cuchara de palo. Agrega el ajo y revuelve 30 segundos.',
        { s: 'Cebolla blanda y transparente, sin dorarse.', m: 4, c: g.dorar ? 'Lo doradito que quedó pegado en el fondo se disuelve con la cebolla y le da muchísimo sabor a la salsa.' : '' }));
      pasos.push(p('Arma la base de la salsa', sg.base));

      var conPapaAntes = sg.papas && g.min < 25;
      if (g.pescado || conPapaAntes) {
        pasos.push(p('Cocina la salsa', sg.liqT + ', agrega el resto de la sal y deja que hierva.' + (sg.papas ? ' Agrega la papa y la zanahoria.' : '') + ' Baja el fuego y cocina ' + (sg.papas ? 15 : 10) + ' minutos, con la olla medio tapada.',
          { m: sg.papas ? 15 : 10, s: sg.papas ? 'La papa ya casi está: el cuchillo entra con un poco de resistencia.' : 'La salsa espesó un poco y huele a guiso.' }));
        pasos.push(p('Agrega ' + g.el, 'Acomoda ' + g.el + ' dentro de la salsa' + (g.pescado ? ', sin revolver para que no se rompan; mueve la olla suavemente de lado a lado' : '') + '. Cocina ' + g.min + ' minutos a fuego bajo.',
          { m: g.min, s: g.senal }));
      } else {
        var primera = sg.papas ? g.min - 20 : g.min;
        pasos.push(p('Agrega el líquido y cocina a fuego bajo', sg.liqT + ', agrega el resto de la sal y devuelve ' + g.el + ' a la olla con el jugo que soltaron. Cuando hierva, baja el fuego a bajo, tapa dejando una rendija y cocina ' + primera + ' minutos' + (sg.papas ? '.' : ', revolviendo de vez en cuando.'),
          { m: primera, s: 'Burbujeo suave y lento. Un hervor fuerte endurece la carne.', e: 'Si el líquido baja mucho antes de tiempo, agrega medio pocillo de agua caliente.' }));
        if (sg.papas) {
          pasos.push(p('Agrega la papa y la zanahoria', 'Escurre las papas y agrégalas con la zanahoria. Revuelve, tapa otra vez y cocina 20 minutos más.',
            { m: 20, s: 'El tenedor entra en la papa sin resistencia.' }));
        }
        pasos.push(p('Comprueba que esté tierno', 'Saca una pieza y pruébala.', { s: g.senal, e: 'Si todavía está dura, no subas el fuego: dale 10 minutos más a fuego bajo. La carne para guisar se ablanda con tiempo, no con llama.' }));
      }

      if (sg.fin) pasos.push(p('Termina la salsa', sg.fin, { e: 'Si la crema hierve a borbotones se puede cortar. Fuego bajo.' }));
      pasos.push(p('Ajusta y sirve', 'Prueba la salsa y corrige la sal. Si está muy líquida, cocina destapado 5 minutos; si está muy espesa, agrega un chorrito de agua caliente. Sirve con arroz blanco.',
        { c: 'Los guisos saben mejor después de reposar 10 minutos tapados, y todavía mejor al día siguiente.' }));

      GEN.agregar({
        nombre: g.n + ' ' + sg.s,
        emoji: g.e, categoria: 'Platos fuertes', dificultad: g.min > 40 ? 'Media' : 'Fácil',
        prep: 20, coccion: g.min + 20, porciones: 4,
        descripcion: may(g.el) + ', cocinados despacio en su salsa hasta quedar tiernos. De esos platos que piden arroz al lado.',
        antes: 'Un buen guiso se hace con <strong>fuego bajo y paciencia</strong>. Usa una olla de fondo grueso con tapa.' + (g.crudo ? ' ' + GEN.HIGIENE : ''),
        ingredientes: [g.ing].concat(g.bolas ? [i(1, '', 'huevo|huevos'), i(0.25, 'taza', 'de pan rallado')] : []).concat([i(1, '', 'cebolla cabezona grande|cebollas cabezonas grandes'), ajo(3)]).concat(sg.ing).concat([sg.liq, aceite(2), sal(1.5), i(null, '', 'Pimienta')]),
        utensilios: ['Olla grande de fondo grueso con tapa', 'Tabla y cuchillo', 'Cuchara de palo', 'Pinzas', 'Un plato hondo'],
        pasos: pasos,
        guardar: 'Dura ' + (g.pescado ? '1 día' : '4 días') + ' en la nevera' + (g.pescado ? '.' : ' y hasta 3 meses congelado.') + ' Recalienta a fuego bajo con un chorrito de agua.'
      });
    });
  });

  // ---------------------------------------------------------------- SALTEADOS (WOK)
  var WOK = [
    { n: 'pollo', ing: i(400, 'g', 'de pechuga de pollo'), corte: 'Corta la pechuga en tiras de 1 centímetro de ancho.', min: 4, crudo: true, senal: 'Tiras blancas por fuera con bordes dorados.' },
    { n: 'res', ing: i(400, 'g', 'de carne de res tierna (lomo o bistec)'), corte: 'Corta la carne en tiras delgadas de medio centímetro, atravesando las fibras (las líneas de la carne).', min: 2, crudo: true, senal: 'Doradas por fuera y aún jugosas; se terminan de hacer con la salsa.' },
    { n: 'cerdo', ing: i(400, 'g', 'de lomo de cerdo'), corte: 'Corta el lomo en tiras de 1 centímetro de ancho.', min: 4, crudo: true, senal: 'Tiras doradas, sin partes rosadas por fuera.' },
    { n: 'camarones', ing: i(400, 'g', 'de camarones pelados y limpios'), corte: 'Seca muy bien los camarones con papel de cocina.', min: 2, pescado: true, senal: 'Rosados y en forma de C.' },
    { n: 'tofu', ing: i(400, 'g', 'de tofu firme'), corte: 'Envuelve el tofu en papel de cocina, ponle peso encima 10 minutos y córtalo en cubos de 2 centímetros.', min: 6, senal: 'Cubos dorados por al menos dos caras.' },
    { n: 'verduras', ing: i(200, 'g', 'de champiñones'), corte: 'Corta los champiñones en cuartos.', min: 4, senal: 'Champiñones dorados y sin agua en la sartén.' }
  ];
  var SALSAS_WOK = [
    { s: 'en salsa de soya y ajo', ing: [i(3, 'cda', 'de salsa de soya'), ajo(3), i(1, 'cdta', 'de azúcar')], como: 'la soya, los 3 ajos picados fino y el azúcar' },
    { s: 'agridulce', ing: [i(3, 'cda', 'de salsa de tomate (kétchup)'), i(2, 'cda', 'de vinagre'), i(2, 'cda', 'de azúcar'), i(1, 'cda', 'de salsa de soya')], como: 'la salsa de tomate, el vinagre, el azúcar y la soya' },
    { s: 'teriyaki', ing: [i(4, 'cda', 'de salsa de soya'), i(2, 'cda', 'de miel o panela rallada'), i(1, 'cdta', 'de jengibre fresco rallado'), ajo(1)], como: 'la soya, la miel, el jengibre rallado y el ajo picado' },
    { s: 'al jengibre y limón', ing: [i(1, 'cda', 'de jengibre fresco rallado'), i(1, '', 'limón|limones'), i(2, 'cda', 'de salsa de soya'), i(1, 'cdta', 'de miel')], como: 'el jengibre rallado, el jugo del limón, la soya y la miel' },
    { s: 'picante', ing: [i(3, 'cda', 'de salsa de soya'), i(1, '', 'ají fresco|ajíes frescos', 'O 1 cucharadita de ají en hojuelas.'), ajo(2), i(1, 'cdta', 'de azúcar')], como: 'la soya, el ají picado sin semillas, los ajos picados y el azúcar' },
    { s: 'en salsa de maní', ing: [i(2, 'cda', 'de mantequilla de maní'), i(2, 'cda', 'de salsa de soya'), i(1, '', 'limón|limones'), i(1, 'cdta', 'de miel')], como: 'la mantequilla de maní, la soya, el jugo del limón y la miel (revuelve hasta que quede lisa)' }
  ];

  WOK.forEach(function (w) {
    SALSAS_WOK.forEach(function (sw) {
      GEN.agregar({
        nombre: 'Salteado de ' + w.n + ' ' + sw.s,
        emoji: '🥡', categoria: 'Platos fuertes', dificultad: 'Media',
        prep: 20, coccion: 10, porciones: 3,
        descripcion: 'Salteado rápido al estilo oriental: ' + w.n + ' con verduras crujientes y una salsa brillante. Se cocina en 10 minutos.',
        antes: 'Un salteado se cocina tan rápido que no hay tiempo de picar nada sobre la marcha. <strong>Todo cortado y la salsa mezclada antes de prender el fuego.</strong> La sartén va muy caliente y la comida se mueve todo el tiempo.' + (w.crudo ? ' ' + GEN.HIGIENE : ''),
        ingredientes: [w.ing, i(1, '', 'zanahoria|zanahorias'), i(1, '', 'pimentón|pimentones'), i(1, '', 'cebolla cabezona|cebollas cabezonas'), i(2, 'taza', 'de ramitos pequeños de brócoli')].concat(sw.ing).concat([i(1, 'cdta', 'de fécula de maíz (maicena)'), i(4, 'cda', 'de agua'), aceite(2)]),
        utensilios: ['Sartén grande y honda o wok', 'Tabla y cuchillo', 'Tazón pequeño', 'Espátula o cuchara de palo', 'Un plato'],
        pasos: [
          p('Mezcla la salsa', 'En un tazón pequeño disuelve la cucharadita de maicena en las 4 cucharadas de agua fría. Agrega ' + sw.como + ' y revuelve.',
            { c: 'La maicena es la que hace que la salsa espese y quede brillante, pegada a la comida. Siempre se disuelve en frío; en caliente forma grumos.' }),
          p('Corta todo', w.corte + ' Corta la zanahoria en rodajas diagonales muy delgadas, el pimentón en tiras, y la cebolla en gajos. Deja el brócoli en ramitos pequeños.',
            { c: 'Lo duro (zanahoria) se corta más delgado que lo blando, para que todo esté listo al mismo tiempo.' }),
          p('Calienta la sartén al máximo', 'Pon la sartén a fuego alto durante 2 minutos. Agrega 1 cucharada de aceite.',
            { m: 2, s: 'El aceite se mueve como agua y está a punto de humear.' }),
          p('Saltea ' + (w.n === 'verduras' ? 'los champiñones' : (w.n === 'tofu' ? 'el tofu' : (w.n === 'camarones' ? 'los camarones' : 'la carne'))), 'Echa lo que cortaste en una sola capa. Déjalo quieto 1 minuto para que dore y luego mueve constantemente hasta completar ' + w.min + ' minutos. Pásalo a un plato.',
            { m: w.min, s: w.senal, e: 'Si lo dejas en la sartén mientras se hacen las verduras, se pasa y queda seco. Por eso sale y vuelve al final.' }),
          p('Saltea las verduras duras', 'Agrega la otra cucharada de aceite, la zanahoria y el brócoli. Saltea 3 minutos sin dejar de mover. Si se pega, echa 2 cucharadas de agua: el vapor ayuda a cocinarlas.',
            { m: 3, s: 'El brócoli se pone verde brillante.' }),
          p('Agrega las verduras blandas', 'Echa la cebolla y el pimentón y saltea 2 minutos más.',
            { m: 2, s: 'Todo se ve brillante y de color vivo; al morder, aún cruje un poco.', e: 'Si las verduras se ven opacas y blandas, se pasaron. Deben quedar crujientes.' }),
          p('Une todo con la salsa', 'Devuelve a la sartén lo que tenías en el plato. Revuelve la salsa (la maicena se asienta en el fondo) y viértela. Mueve durante 1 minuto.',
            { m: 1, s: 'La salsa hierve, pasa de turbia a brillante y cubre todo como un barniz.' }),
          p('Sirve de inmediato', 'Apaga y sirve enseguida sobre arroz blanco. Prueba antes de agregar sal: la soya normalmente ya es suficiente.')
        ],
        guardar: 'Dura 2 días en la nevera. Al recalentar, las verduras pierden el crujiente; hazlo rápido en sartén caliente, no en microondas.'
      });
    });
  });
})();
