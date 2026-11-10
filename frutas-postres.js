/* ============================================================
   POSTRES Y BEBIDAS POR FRUTA (generados por familias)
   Cada fruta se combina con mousse, torta fría, helado, gelatina,
   sorbete, compota, tarta y granizado.
   ============================================================ */
(function () {
  var i = GEN.i, p = GEN.p, R = GEN.R;
  function slug(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
  function u(c, s, pl) { return i(c, '', s + '|' + pl); }

  // n = nombre · pulpa = ingrediente base (≈ 1 taza de puré) · prep = cómo se prepara el puré
  // a = ácida (necesita más azúcar) · c = sirve para compota · t = sirve para tarta · troz = fruta en trozos para compota y tarta
  var FRUTAS = [
    { n: 'fresa', pulpa: i(2, 'taza', 'de fresas'), prep: 'Lava las fresas, quítales las hojitas verdes y pícalas. Licúalas con 2 cucharadas de agua hasta hacer un puré.', c: 1, t: 1 },
    { n: 'mango', pulpa: i(2, 'taza', 'de mango maduro en trozos'), prep: 'Pela el mango, corta la pulpa en trozos y licúala hasta que quede lisa, sin hilos.', c: 1 },
    { n: 'banano', pulpa: u(3, 'banano muy maduro', 'bananos muy maduros'), prep: 'Pela los bananos y aplástalos con un tenedor o licúalos con una cucharadita de jugo de limón para que no se oscurezcan.', c: 1, troz: 'de banano en rodajas' },
    { n: 'piña', pulpa: i(2, 'taza', 'de piña en trozos'), prep: 'Pela la piña, quita el centro duro y pica la pulpa. Licúala con 1/4 de taza de agua hasta que quede lisa.', a: 1, c: 1, t: 1 },
    { n: 'papaya', pulpa: i(2, 'taza', 'de papaya madura en trozos'), prep: 'Pela la papaya, quita las semillas negras y licúa la pulpa hasta que quede lisa.', c: 1 },
    { n: 'mora', pulpa: i(2, 'taza', 'de moras'), prep: 'Lava las moras y licúalas con 1/4 de taza de agua. Cuela el puré para quitar las semillas.', a: 1, c: 1, t: 1 },
    { n: 'maracuyá', pulpa: i(1, 'taza', 'de pulpa de maracuyá (unos 6 maracuyás)'), prep: 'Parte los maracuyás y saca la pulpa con una cuchara. Licúala unos 5 segundos a velocidad baja, para no triturar las semillas, y cuela.', a: 1 },
    { n: 'guanábana', pulpa: i(1.5, 'taza', 'de pulpa de guanábana'), prep: 'Pela la guanábana y saca la pulpa con las manos, quitando una por una las semillas negras.' },
    { n: 'lulo', pulpa: i(1, 'taza', 'de pulpa de lulo (unos 6 lulos)'), prep: 'Parte los lulos y saca la pulpa con una cuchara. Licúala con 1/4 de taza de agua a velocidad baja y cuela.', a: 1 },
    { n: 'guayaba', pulpa: i(2, 'taza', 'de guayaba roja en trozos'), prep: 'Lava las guayabas, córtalas y licúalas con 1/2 taza de agua. Cuela bien para quitar las semillas duras.', c: 1, troz: 'de guayaba sin semillas en trozos' },
    { n: 'melón', pulpa: i(2, 'taza', 'de melón en trozos'), prep: 'Pela el melón, quita las semillas y licúa la pulpa hasta que quede lisa.' },
    { n: 'sandía', pulpa: i(3, 'taza', 'de sandía sin semillas en trozos'), prep: 'Quita la cáscara y las semillas de la sandía, pícala y licúala. Cuela si quieres que quede más fina.' },
    { n: 'durazno', pulpa: i(2, 'taza', 'de durazno maduro en trozos'), prep: 'Lava los duraznos, quita el hueso y pícalos. Licúalos hasta que quede un puré liso.', c: 1, t: 1 },
    { n: 'manzana', pulpa: u(3, 'manzana', 'manzanas'), prep: 'Pela las manzanas, quita el centro y pica en trozos. Cocínalas 5 minutos con 2 cucharadas de agua y licúalas hasta que quede un puré.', c: 1, t: 1 },
    { n: 'pera', pulpa: u(3, 'pera madura', 'peras maduras'), prep: 'Pela las peras, quita el centro y pícalas. Cocínalas 5 minutos con 2 cucharadas de agua y licúalas hasta que quede un puré.', c: 1, t: 1 },
    { n: 'kiwi', pulpa: u(6, 'kiwi', 'kiwis'), prep: 'Pela los kiwis y licúalos solo 5 segundos para no triturar las semillas.', a: 1 },
    { n: 'frutos rojos', pulpa: i(2, 'taza', 'de frutos rojos mezclados (fresa, mora, arándano)'), prep: 'Lava los frutos rojos y licúalos con 2 cucharadas de agua. Cuela si quieres quitar las semillas.', a: 1, c: 1, t: 1 },
    { n: 'uva', pulpa: i(2, 'taza', 'de uvas'), prep: 'Lava las uvas, licúalas con 1/4 de taza de agua y cuela para quitar la cáscara y las semillas.', c: 1 },
    { n: 'tomate de árbol', pulpa: i(1, 'taza', 'de pulpa de tomate de árbol (unos 6 tomates)'), prep: 'Escalda los tomates 2 minutos en agua hirviendo, pélalos y saca la pulpa. Licúala con 1/4 de taza de agua y cuela.', a: 1 },
    { n: 'curuba', pulpa: i(1, 'taza', 'de pulpa de curuba (unas 5 curubas)'), prep: 'Parte las curubas y saca la pulpa con una cuchara. Licúala con 1/4 de taza de agua a velocidad baja y cuela.', a: 1 },
    { n: 'arándanos', pulpa: i(2, 'taza', 'de arándanos'), prep: 'Lava los arándanos y licúalos con un chorrito de agua hasta que quede un puré.', a: 1, c: 1, t: 1 },
    { n: 'cereza', pulpa: i(2, 'taza', 'de cerezas sin hueso'), prep: 'Lava las cerezas, quítales el hueso y el rabito, y licúalas hasta que quede un puré.', c: 1, t: 1 },
    { n: 'feijoa', pulpa: u(8, 'feijoa', 'feijoas'), prep: 'Parte las feijoas por la mitad y saca la pulpa con una cuchara. Licúala hasta que quede lisa.', a: 1 },
    { n: 'ciruela', pulpa: u(8, 'ciruela madura', 'ciruelas maduras'), prep: 'Lava las ciruelas, quita el hueso y pícalas. Licúalas hasta que quede un puré.', c: 1, t: 1 }
  ];
  function tr(f) { return f.troz || ('de ' + f.n + ' en trozos'); }

  FRUTAS.forEach(function (f) {
    var foto = 'fruta-' + slug(f.n), n = f.n;
    var prepara = p('Prepara la fruta', f.prep, { s: 'Un puré liso y sin trozos duros.' });

    // ---- Mousse (el de maracuyá está escrito a mano)
    if (n !== 'maracuyá') {
      R('Postres', 'Mousse de ' + n, '🍨', foto, [20, 0], 6, 'Fácil',
        'Postre frío, aireado y cremoso de ' + n + ', con crema de leche y leche condensada. Sin horno ni gelatina.',
        'Solo tres pasos. <strong>La crema de leche debe estar muy fría</strong> para que suba al batirla.',
        [f.pulpa, i(1, 'taza', 'de leche condensada'), i(1.5, 'taza', 'de crema de leche muy fría')],
        ['Licuadora', 'Batidora', 'Tazón', 'Copas'],
        [
          prepara,
          p('Bate la crema', 'Bate la crema de leche fría hasta que forme picos suaves.', { s: 'Al levantar el batidor, el pico se mantiene.' }),
          p('Mezcla', 'Mezcla la leche condensada con 1 taza del puré. Incorpora a la crema batida con movimientos suaves de abajo hacia arriba.', { e: 'Si mezclas rápido se baja el aire y queda líquido.' }),
          p('Enfría', 'Reparte en copas y refrigera mínimo 3 horas.', { m: 180 })
        ],
        'Dura 3 días en la nevera.');
    }

    // ---- Torta fría (sin horno)
    if (n !== 'maracuyá') {
      R('Postres', 'Torta fría de ' + n, '🥧', foto, [30, 0], 10, 'Fácil',
        'Torta fría de ' + n + ' con base de galletas y relleno cremoso. No necesita horno.',
        'Necesita <strong>mínimo 4 horas de nevera</strong> para cuajar. Hazla con tiempo.',
        [i(250, 'g', 'de galletas dulces'), i(100, 'g', 'de mantequilla derretida'), f.pulpa, i(1, 'taza', 'de crema de leche fría'), i(1, 'taza', 'de leche condensada'), i(2, 'cda', 'de gelatina sin sabor'), i(0.25, 'taza', 'de agua fría')],
        ['Molde desmontable de 22 cm', 'Licuadora', 'Batidora', 'Tazón'],
        [
          p('Haz la base', 'Tritura las galletas hasta que parezcan arena y mézclalas con la mantequilla. Presiona la mezcla en el fondo del molde y llévala a la nevera.', { c: 'Compacta bien con el fondo de un vaso.' }),
          prepara,
          p('Hidrata la gelatina', 'Pon la gelatina en el agua fría 5 minutos y luego caliéntala 15 segundos en el microondas hasta que se disuelva.', { m: 5, e: 'Si hierve pierde fuerza para cuajar.' }),
          p('Haz el relleno', 'Bate la crema hasta picos suaves, agrega la leche condensada y 1 taza del puré. Incorpora la gelatina tibia y mezcla con movimientos envolventes.', { s: 'Crema suave y espesa, sin grumos.' }),
          p('Cuaja', 'Vierte sobre la base, alisa y refrigera 4 horas. Desmolda con cuidado.', { m: 240 })
        ],
        'Dura 4 días en la nevera.');
    }

    // ---- Helado cremoso
    R('Postres', 'Helado cremoso de ' + n, '🍦', foto, [20, 0], 6, 'Fácil',
      'Helado casero de ' + n + ' sin máquina, suave y cremoso, con crema de leche y leche condensada.',
      'Se bate la crema antes de mezclar y <strong>se congela 6 horas</strong>. Sácalo unos minutos antes de servir.',
      [f.pulpa, i(1, 'taza', 'de crema de leche muy fría'), i(0.5, 'taza', 'de leche condensada')],
      ['Licuadora', 'Batidora', 'Recipiente para congelar'],
      [
        prepara,
        p('Bate la crema', 'Bate la crema de leche fría hasta picos suaves. Agrega la leche condensada.'),
        p('Une', 'Mezcla 1 taza del puré con la crema, con movimientos envolventes. No batas fuerte.', { s: 'Mezcla uniforme, suave y aireada.' }),
        p('Congela', 'Pasa a un recipiente, tapa y congela 6 horas.', { m: 360, c: 'Si puedes, a las 2 horas revuélvelo con un tenedor para quitar cristales.' }),
        p('Sirve', 'Deja el helado 5 minutos fuera antes de servirlo con cuchara.')
      ],
      'Dura 2 semanas en el congelador.');

    // ---- Gelatina cremosa
    R('Postres', 'Gelatina cremosa de ' + n, '🍮', foto, [15, 5], 6, 'Fácil',
      'Postre de ' + n + ' firme y cremoso con leche, que se corta en cuadros.',
      'Se usa <strong>gelatina sin sabor</strong>. Si hierve pierde fuerza para cuajar.',
      [f.pulpa, i(2, 'cda', 'de gelatina sin sabor'), i(0.25, 'taza', 'de agua fría'), i(1, 'taza', 'de leche'), i(0.5, 'taza', 'de leche condensada')],
      ['Licuadora', 'Olla pequeña', 'Molde'],
      [
        prepara,
        p('Hidrata la gelatina', 'Pon la gelatina en el agua fría 5 minutos y luego caliéntala suavemente hasta que se disuelva, sin hervir.', { m: 5 }),
        p('Mezcla', 'Licúa 1 taza del puré con la leche, la leche condensada y la gelatina tibia hasta que quede lisa.'),
        p('Cuaja', 'Vierte en el molde y refrigera 4 horas.', { m: 240, s: 'Firme al mover el molde, no se corre.' })
      ],
      'Dura 4 días en la nevera.');

    // ---- Sorbete
    R('Postres', 'Sorbete de ' + n, '🍧', foto, [20, 0], 6, 'Fácil',
      'Sorbete helado de ' + n + ', sin crema y muy fresco. Se hace con el puré, azúcar y limón.',
      'Se congela y se <strong>revuelve cada hora</strong> para que quede esponjoso y no en un bloque de hielo.',
      [f.pulpa, i(f.a ? 0.75 : 0.5, 'taza', 'de azúcar'), i(1, 'cda', 'de jugo de limón'), i(0.5, 'taza', 'de agua')],
      ['Licuadora', 'Recipiente para congelar', 'Tenedor'],
      [
        prepara,
        p('Mezcla', 'Mezcla el puré con el azúcar, el limón y el agua hasta que el azúcar se disuelva. Prueba y ajusta.', { c: 'Al congelarse se siente menos dulce: debe quedar un poco dulce de más.' }),
        p('Congela', 'Congela 1 hora, revuelve con un tenedor rompiendo los cristales. Repite 3 veces, cada hora.', { m: 180, s: 'Queda esponjoso y raspado, tipo nieve.' }),
        p('Sirve', 'Sirve en bolas o en vasos.')
      ],
      'Dura 2 semanas en el congelador.');

    // ---- Granizado (bebida)
    R('Bebidas', 'Granizado de ' + n, '🥤', foto, [10, 0], 2, 'Fácil',
      'Bebida helada de ' + n + ' con hielo triturado. Refrescante y lista en minutos.',
      'Usa <strong>hielo en cantidad</strong> y licúa fuerte; se sirve al momento.',
      [f.pulpa, i(2, 'taza', 'de hielo'), i(2, 'cda', 'de azúcar o miel'), i(0.5, 'taza', 'de agua')],
      ['Licuadora', 'Vasos'],
      [
        p('Prepara la fruta', f.prep + ' Si puedes, déjala 1 hora en el congelador.', { c: 'La fruta congelada hace el granizado más espeso.' }),
        p('Licúa', 'Licúa el puré con el hielo, el azúcar y el agua hasta que quede una textura raspada y espesa.', { s: 'Una nieve espesa y fina.' }),
        p('Sirve', 'Sirve de inmediato en vasos fríos.')
      ],
      'Se toma al momento.');

    // ---- Compota (frutas que se cocinan bien)
    if (f.c) {
      R('Postres', 'Compota de ' + n, '🍯', foto, [10, 20], 4, 'Fácil',
        'Compota casera de ' + n + ' cocida con canela y un poco de azúcar. Sirve sola, con yogur o con helado.',
        'Se cocina a <strong>fuego bajo</strong>, hasta que la fruta esté suave y el jugo espese un poco.',
        [i(3, 'taza', tr(f)), i(0.5, 'taza', 'de azúcar'), i(0.5, 'taza', 'de agua'), u(1, 'astilla de canela', 'astillas de canela'), i(1, 'cda', 'de jugo de limón')],
        ['Olla', 'Cuchara de palo'],
        [
          p('Prepara', 'Lava la fruta y córtala en trozos de 2 centímetros (pela y quita semillas o huesos si hace falta).'),
          p('Cocina', 'Pon la fruta en la olla con el azúcar, el agua, la canela y el limón. Cocina a fuego bajo 15 a 20 minutos, revolviendo de vez en cuando.', { m: 18, s: 'La fruta está suave y el jugo brilla y ha espesado un poco.', e: 'Si la fruta se deshace del todo, cocinaste de más: baja el fuego.' }),
          p('Enfría', 'Retira la canela y deja enfriar. Sirve tibia o fría.')
        ],
        'Dura 5 días en la nevera.');
    }

    // ---- Tarta de fruta
    if (f.t) {
      R('Postres', 'Tarta de ' + n, '🥧', foto, [40, 40], 8, 'Media',
        'Tarta casera de ' + n + ' con masa quebrada de mantequilla y relleno de fruta cocida al horno.',
        'La masa pide <strong>mantequilla muy fría</strong> y poco amasado: así queda crocante.',
        [i(1.5, 'taza', 'de harina de trigo'), i(100, 'g', 'de mantequilla fría en cubos'), i(3, 'cda', 'de azúcar'), u(1, 'huevo', 'huevos'), i(2, 'cda', 'de agua helada'), i(3, 'taza', tr(f)), i(0.5, 'taza', 'de azúcar', 'Para el relleno.'), i(1, 'cda', 'de maicena'), i(1, 'cda', 'de jugo de limón')],
        ['Molde de tarta de 24 cm', 'Tazón', 'Rodillo o vaso', 'Tenedor'],
        [
          p('Haz la masa', 'Mezcla la harina con el azúcar y frota la mantequilla fría con las yemas de los dedos hasta que parezca arena gruesa. Agrega el huevo y el agua helada y une sin amasar de más.', { s: 'Una masa que se une al apretarla, sin quedar pegajosa.' }),
          p('Enfría', 'Forma un disco, envuélvelo y refrigera 30 minutos.', { m: 30 }),
          p('Prepara el relleno', 'Mezcla la fruta en trozos con el azúcar, la maicena y el limón.'),
          p('Arma', 'Extiende la masa y forra el molde, subiendo por los bordes. Pínchala con un tenedor y vierte el relleno.', { c: 'Con la masa que sobre, haz tiritas decorativas para cubrir.' }),
          p('Hornea', 'Hornea a 190 °C por 40 minutos hasta que la masa esté dorada y el relleno burbujee.', { m: 40, s: 'Borde dorado y relleno brillante y burbujeante.' }),
          p('Reposa', 'Deja enfriar 30 minutos antes de cortar para que el relleno cuaje.', { m: 30 })
        ],
        'Dura 3 días en la nevera.');
    }
  });
})();
