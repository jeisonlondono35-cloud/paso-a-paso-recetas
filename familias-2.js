/* ============================================================
   RECETAS POR FAMILIAS (parte 2): sopas, arroces, pastas, ensaladas,
   legumbres, verduras, papas, huevos y sándwiches
   ============================================================ */
(function () {
  var i = GEN.i, p = GEN.p, ajo = GEN.ajo, sal = GEN.sal, aceite = GEN.aceite, may = GEN.may;

  // ---------------------------------------------------------------- CREMAS
  // min = minutos de hervor hasta ablandar · papa = lleva una papa para dar cuerpo
  var VERDURAS_CREMA = [
    { n: 'zanahoria', cant: i(500, 'g', 'de zanahoria'), corte: 'Pela las zanahorias y córtalas en rodajas de 1 centímetro.', min: 20, papa: true, e: '🥕' },
    { n: 'ahuyama', cant: i(700, 'g', 'de ahuyama (calabaza)'), corte: 'Quita la cáscara y las semillas de la ahuyama y córtala en cubos de 3 centímetros.', min: 20, e: '🎃' },
    { n: 'brócoli', cant: i(500, 'g', 'de brócoli'), corte: 'Separa el brócoli en ramitos y pela y pica también el tallo: tiene mucho sabor.', min: 12, papa: true, e: '🥦' },
    { n: 'coliflor', cant: i(600, 'g', 'de coliflor'), corte: 'Separa la coliflor en ramitos medianos.', min: 15, papa: true, e: '🥦' },
    { n: 'espinaca', cant: i(400, 'g', 'de espinaca fresca'), corte: 'Lava muy bien la espinaca en un tazón con agua (suele traer tierra) y quita los tallos gruesos.', min: 5, papa: true, papas: 2, hoja: true, e: '🥬' },
    { n: 'tomate', cant: i(1000, 'g', 'de tomates muy maduros'), corte: 'Corta los tomates en cuartos y quítales el centro duro.', min: 15, e: '🍅', pocaAgua: true },
    { n: 'champiñones', cant: i(500, 'g', 'de champiñones'), corte: 'Limpia los champiñones con un papel húmedo (no los remojes, absorben agua) y córtalos en láminas.', min: 12, papa: true, e: '🍄' },
    { n: 'calabacín', cant: i(600, 'g', 'de calabacín'), corte: 'Lava los calabacines y córtalos en medias lunas de 1 centímetro, con cáscara.', min: 12, papa: true, e: '🥒' },
    { n: 'apio', cant: i(400, 'g', 'de apio'), corte: 'Lava los tallos de apio, quítales los hilos gruesos jalándolos con el cuchillo y córtalos en trozos de 1 centímetro.', min: 20, papa: true, papas: 2, e: '🥬' },
    { n: 'espárragos', cant: i(500, 'g', 'de espárragos verdes'), corte: 'Dobla cada espárrago cerca de la base: se parte solo donde termina la parte dura, que se bota. Corta el resto en trozos.', min: 10, papa: true, e: '🥬' },
    { n: 'arveja', cant: i(500, 'g', 'de arvejas verdes (frescas o congeladas)'), corte: 'Si las arvejas son congeladas, no hace falta descongelarlas.', min: 10, papa: true, e: '🫛' },
    { n: 'maíz tierno', cant: i(3, 'taza', 'de granos de maíz tierno'), corte: 'Si usas mazorcas, párate cada una sobre la tabla y corta los granos de arriba hacia abajo. Si es de lata, escúrrelo.', min: 15, papa: true, e: '🌽' },
    { n: 'puerro y papa', cant: i(3, '', 'puerro|puerros'), corte: 'Corta los puerros a lo largo y lávalos bajo el chorro abriendo las capas (guardan tierra). Usa la parte blanca y verde clara, en rodajas.', min: 20, papa: true, papas: 3, e: '🥔' },
    { n: 'pimentón rojo', cant: i(4, '', 'pimentón rojo grande|pimentones rojos grandes'), corte: 'Quita el tallo, las semillas y las venas blancas de los pimentones y córtalos en trozos.', min: 15, papa: true, e: '🫑' },
    { n: 'remolacha', cant: i(500, 'g', 'de remolacha'), corte: 'Pela las remolachas (usa guantes o una bolsa en la mano: manchan) y córtalas en cubos de 2 centímetros.', min: 30, papa: true, e: '🍠' },
    { n: 'cebolla', cant: i(5, '', 'cebolla cabezona grande|cebollas cabezonas grandes'), corte: 'Pela las cebollas y córtalas en plumas delgadas.', min: 20, papa: true, cebolla: true, e: '🧅' },
    { n: 'plátano verde', cant: i(3, '', 'plátano verde|plátanos verdes'), corte: 'Corta las puntas de los plátanos, haz un corte a lo largo de la cáscara y quítala con el pulgar. Córtalos en rodajas de 2 centímetros.', min: 20, e: '🍌' },
    { n: 'batata', cant: i(600, 'g', 'de batata (camote)'), corte: 'Pela las batatas y córtalas en cubos de 3 centímetros.', min: 20, e: '🍠' }
  ];
  var ESTILOS_CREMA = [
    { s: '', ing: [i(0.5, 'taza', 'de crema de leche')], aroma: '', lacteo: 'la crema de leche', top: 'un hilo de crema y pan tostado' },
    { s: ' con jengibre', ing: [i(1, 'cda', 'de jengibre fresco rallado'), i(0.5, 'taza', 'de crema de leche')], aroma: ' Agrega también el jengibre rallado y revuelve 30 segundos hasta que huela.', lacteo: 'la crema de leche', top: 'unas gotas de limón' },
    { s: ' al curry', ing: [i(1.5, 'cdta', 'de curry en polvo'), i(200, 'ml', 'de leche de coco')], aroma: ' Agrega también el curry y revuelve 30 segundos para que se tueste y suelte el aroma.', lacteo: 'la leche de coco', top: 'cilantro picado' }
  ];

  VERDURAS_CREMA.forEach(function (v) {
    ESTILOS_CREMA.forEach(function (es) {
      var papas = v.papa ? (v.papas || 1) : 0;
      var agua = v.pocaAgua ? 2 : 4;
      var hervor = v.hoja ? 15 : v.min;
      GEN.agregar({
        nombre: 'Crema de ' + v.n + es.s,
        emoji: v.e, categoria: 'Sopas', dificultad: 'Fácil',
        prep: 15, coccion: hervor + 15, porciones: 4,
        descripcion: 'Sedosa y reconfortante, sin harinas ni polvos de sobre: el cuerpo se lo da la propia verdura' + (papas ? ' y un poco de papa.' : '.'),
        antes: 'Todas las cremas siguen el mismo camino: <strong>sofreír, hervir hasta ablandar, licuar y ajustar</strong>. Cuidado al licuar líquidos calientes: el vapor puede botar la tapa.',
        ingredientes: [v.cant].concat(papas ? [i(papas, '', 'papa mediana|papas medianas')] : []).concat(v.cebolla ? [] : [i(1, '', 'cebolla cabezona|cebollas cabezonas')]).concat([ajo(2), i(agua, 'taza', 'de agua o caldo')]).concat(es.ing).concat([i(1, 'cda', 'de mantequilla o aceite'), sal(1.5), i(null, '', 'Pimienta')]),
        utensilios: ['Olla mediana con tapa', 'Licuadora (o licuadora de mano)', 'Tabla y cuchillo', 'Cuchara de palo', 'Cucharón'],
        pasos: [
          p('Prepara la verdura', v.corte + (papas ? ' Pela ' + (papas > 1 ? 'las papas y córtalas' : 'la papa y córtala') + ' en cubos de 2 centímetros.' : '') + (v.cebolla ? '' : ' Pica la cebolla en cuadros y aplasta y pela los ajos.'),
            { c: 'No importa que los cortes queden feos: todo se va a licuar. Lo que importa es que sean de tamaño parecido para que se ablanden al tiempo.' }),
          p('Sofríe la base', 'Derrite la mantequilla en la olla a fuego medio. Agrega ' + (v.cebolla ? 'toda la cebolla con una pizca de sal y cocínala 12 minutos, revolviendo, hasta que esté muy blanda y dorada clara. Agrega el ajo' : 'la cebolla con una pizca de sal y cocina 4 minutos. Agrega el ajo y revuelve 30 segundos') + '.' + es.aroma,
            { s: v.cebolla ? 'Cebolla dorada color miel y muy reducida.' : 'Cebolla transparente y blanda, sin dorarse.', m: v.cebolla ? 12 : 4 }),
          p(v.hoja ? 'Cocina primero la papa' : 'Agrega la verdura y el líquido',
            v.hoja ? 'Agrega la papa y las ' + agua + ' tazas de agua con la sal. Cuando hierva, baja a fuego medio-bajo y cocina 15 minutos, hasta que la papa esté blanda.'
                   : (v.cebolla ? 'Agrega la papa' : 'Agrega ' + (v.n === 'puerro y papa' ? 'el puerro y la papa' : 'la verdura' + (papas ? ' y la papa' : ''))) + ' y revuelve 2 minutos para que tome sabor. Vierte las ' + agua + ' tazas de agua, agrega la sal y sube el fuego hasta que hierva.',
            { m: v.hoja ? 15 : 0, c: v.pocaAgua ? 'El tomate ya suelta mucho jugo; por eso lleva menos agua que otras cremas.' : '' }),
          p(v.hoja ? 'Agrega la espinaca al final' : 'Cocina hasta que esté muy blanda',
            v.hoja ? 'Echa la espinaca por puñados, hundiéndola con la cuchara. Cocina solo ' + v.min + ' minutos.'
                   : 'Baja el fuego a medio-bajo, tapa dejando una rendija y cocina ' + v.min + ' minutos.',
            { m: v.min,
              s: v.hoja ? 'La espinaca se marchita y queda verde intenso.' : 'Al pinchar el trozo más grande con un cuchillo, entra sin ninguna resistencia y casi se deshace.',
              e: v.hoja ? 'Si la cocinas de más, pierde el verde brillante y queda color oliva.' : 'Si la verdura queda a medio cocer, la crema sale granulosa. Ante la duda, 5 minutos más.' }),
          p('Licúa con cuidado', 'Apaga y deja reposar 5 minutos. Llena la licuadora solo hasta la mitad, tapa, pon un limpión doblado sobre la tapa y sujétala con la mano. Empieza en la velocidad más baja y sube poco a poco, 1 minuto. Repite con el resto.',
            { s: 'Queda completamente lisa, sin trocitos.', e: 'Nunca llenes la licuadora con líquido hirviendo ni arranques en velocidad alta: el vapor empuja la tapa y te puedes quemar.', c: 'Con una licuadora de mano puedes licuar directamente en la olla.' }),
          p('Devuelve a la olla y termina', 'Regresa la crema a la olla a fuego bajo. Agrega ' + es.lacteo + ' y revuelve 2 minutos, sin dejar que hierva fuerte.',
            { m: 2 }),
          p('Ajusta el espesor y la sal', 'Si está muy espesa, agrega agua caliente de a chorritos. Si está muy líquida, cocina destapada unos minutos revolviendo. Prueba y corrige la sal y la pimienta.',
            { s: 'Punto ideal: cubre el dorso de la cuchara y, al pasar el dedo, queda un camino limpio.' }),
          p('Sirve', 'Sirve bien caliente en platos hondos con ' + es.top + ' por encima.')
        ],
        guardar: 'Dura 4 días en la nevera y 3 meses congelada. Al recalentar suele espesar: agrégale un poco de agua o leche.'
      });
    });
  });

  // ---------------------------------------------------------------- SOPAS
  var CALDOS = [
    { n: 'pollo', ing: i(500, 'g', 'de pollo con hueso, sin piel'), min: 30, carne: true, crudo: true },
    { n: 'res', ing: i(600, 'g', 'de costilla o hueso carnudo de res'), min: 70, carne: true, crudo: true },
    { n: 'verduras', ing: i(2, '', 'tallo de apio|tallos de apio'), min: 20 }
  ];
  var CON_SOPA = [
    { s: 'con fideos', ing: i(0.75, 'taza', 'de fideos delgados'), min: 5, txt: 'Echa los fideos y revuelve durante el primer minuto para que no se peguen entre sí.', senal: 'Fideos blandos pero enteros.' },
    { s: 'con arroz', ing: i(0.5, 'taza', 'de arroz blanco'), min: 15, txt: 'Agrega el arroz (sin lavar, para que espese un poco el caldo) y revuelve.', senal: 'El grano de arroz está abierto y blando.' },
    { s: 'con papa', ing: i(4, '', 'papa mediana|papas medianas'), min: 18, txt: 'Agrega las papas peladas y cortadas en cubos de 2 centímetros.', senal: 'La papa se parte con el borde de la cuchara.' },
    { s: 'con pasta corta', ing: i(1, 'taza', 'de pasta corta (conchitas o coditos)'), min: 9, txt: 'Echa la pasta y revuelve al principio para que no se pegue al fondo.', senal: 'Pasta blanda con un poquito de firmeza al morder.' },
    { s: 'con verduras', ing: i(2, 'taza', 'de verduras picadas (habichuela, arveja, calabacín)'), min: 12, txt: 'Agrega las verduras picadas en trozos pequeños y parejos.', senal: 'Verduras tiernas pero de color vivo.' },
    { s: 'con plátano verde', ing: i(2, '', 'plátano verde|plátanos verdes'), min: 20, txt: 'Pela los plátanos y pártelos en trozos con la mano o con la punta de una cuchara, no con cuchillo: así sueltan almidón, espesan el caldo y no se oscurecen.', senal: 'El plátano está blando y el caldo se ve más espeso.' },
    { s: 'con mazorca', ing: i(2, '', 'mazorca tierna|mazorcas tiernas'), min: 20, txt: 'Agrega las mazorcas cortadas en rodajas de 3 centímetros (apoya el cuchillo y golpea el lomo con la palma para cortarlas).', senal: 'Los granos se ven hinchados y se desprenden fácil.' },
    { s: 'con avena', ing: i(0.33, 'taza', 'de avena en hojuelas'), min: 8, txt: 'Agrega la avena en forma de lluvia mientras revuelves.', senal: 'El caldo espesó y la avena casi desapareció.' },
    { s: 'con yuca', ing: i(400, 'g', 'de yuca'), min: 22, txt: 'Pela la yuca (corta la cáscara gruesa a lo largo y levántala), quítale la vena del centro y córtala en trozos de 3 centímetros. Agrégala al caldo.', senal: 'La yuca se abre sola y se deshace al presionarla.' },
    { s: 'con ahuyama', ing: i(400, 'g', 'de ahuyama (calabaza)'), min: 15, txt: 'Agrega la ahuyama pelada y cortada en cubos de 2 centímetros.', senal: 'La ahuyama se deshace al tocarla y tiñe el caldo de naranja.' }
  ];

  CALDOS.forEach(function (c) {
    CON_SOPA.forEach(function (x) {
      var pasos = [
        p(c.carne ? 'Empieza con agua fría' : 'Sofríe las verduras del caldo',
          c.carne ? 'Pon ' + (c.n === 'pollo' ? 'el pollo' : 'la carne') + ' en la olla con las 8 tazas de agua fría, los tallos de cebolla enteros, los ajos aplastados y la sal. Enciende el fuego en alto.'
                  : 'Calienta 1 cucharada de aceite en la olla a fuego medio. Sofríe 5 minutos la cebolla larga picada, el apio en rodajas finas y los ajos aplastados. Agrega las 8 tazas de agua y la sal y sube el fuego.',
          { c: c.carne ? 'En agua fría la carne suelta su sabor poco a poco. En agua hirviendo se sella y el caldo queda sin gracia.' : 'Sofreír primero las verduras es lo que hace que un caldo sin carne tenga sabor de verdad.' })
      ];
      if (c.carne) {
        pasos.push(p('Retira la espuma', 'Cuando empiece a hervir sube una espuma gris. Quítala con una cuchara y bótala, hasta que casi no salga más.', { c: 'No hace daño, pero deja el caldo turbio.' }));
      }
      pasos.push(p('Cocina el caldo a fuego bajo', 'Baja el fuego, tapa dejando una rendija y cocina ' + c.min + ' minutos.',
        { m: c.min, s: 'Burbujas pequeñas y lentas. Con hervor fuerte el caldo se enturbia' + (c.carne ? ' y la carne se endurece.' : '.') }));
      pasos.push(p('Pica la zanahoria', 'Mientras tanto, pela la zanahoria y córtala en cuadritos pequeños. Deja listo también lo demás que lleva la sopa.'));
      if (c.carne) {
        pasos.push(p('Saca la carne y desmecha', 'Saca ' + (c.n === 'pollo' ? 'el pollo' : 'la carne') + ' a un plato hondo y retira la cebolla del caldo. Cuando no queme, separa la carne del hueso con dos tenedores, en hilos o trozos pequeños. Bota huesos y cartílagos.',
          { s: c.n === 'pollo' ? 'La carne se suelta sola del hueso y está blanca.' : 'La carne se deshace con el tenedor. Si todavía está dura, devuélvela al caldo 15 minutos más.' }));
      }
      pasos.push(p('Agrega lo que lleva la sopa', x.txt + ' Agrega también la zanahoria. Sube el fuego hasta que vuelva a hervir, bájalo otra vez y cocina ' + x.min + ' minutos.',
        { m: x.min, s: x.senal }));
      pasos.push(p('Termina y sirve', (c.carne ? 'Devuelve la carne desmechada a la olla y deja que se caliente 1 minuto. ' : '') + 'Prueba el caldo y corrige la sal de a pizcas. Sirve con cilantro picado por encima.',
        { c: 'Unas gotas de limón en el plato le levantan mucho el sabor.' }));

      GEN.agregar({
        nombre: 'Sopa de ' + c.n + ' ' + x.s,
        emoji: '🥣', categoria: 'Sopas', dificultad: 'Fácil',
        prep: 15, coccion: c.min + x.min + 5, porciones: 4,
        descripcion: 'Caldo de ' + c.n + ' hecho desde cero, ' + x.s + '. Sopa de casa, de las que reconfortan.',
        antes: 'El secreto de un buen caldo es cocinarlo <strong>despacio</strong>, con burbujas pequeñas.' + (c.crudo ? ' ' + GEN.HIGIENE : ''),
        ingredientes: [c.ing, i(8, 'taza', 'de agua'), i(2, '', 'tallo de cebolla larga|tallos de cebolla larga'), ajo(2), i(1, '', 'zanahoria|zanahorias'), x.ing, sal(2)].concat(c.carne ? [] : [aceite(1)]).concat([i(null, '', 'Cilantro fresco picado')]),
        utensilios: ['Olla grande con tapa', 'Tabla y cuchillo', 'Cucharón', 'Cuchara de palo'].concat(c.carne ? ['Dos tenedores y un plato hondo'] : []),
        pasos: pasos,
        guardar: 'Dura 3 días en la nevera. Las sopas con fideos, pasta o arroz espesan al guardarse porque siguen absorbiendo caldo: agrégales agua al recalentar.'
      });
    });
  });

  // ---------------------------------------------------------------- ARROCES
  var CON_ARROZ = [
    { s: 'con zanahoria', ing: [i(1, '', 'zanahoria grande|zanahorias grandes')], antes: 'Ralla la zanahoria por el lado grueso del rallador y sofríela 2 minutos en el aceite.' },
    { s: 'con maíz', ing: [i(1, 'taza', 'de maíz tierno desgranado')], agua: 'Agrega el maíz junto con el agua.' },
    { s: 'con fideos', ing: [i(0.5, 'taza', 'de fideos delgados partidos')], antes: 'Echa los fideos al aceite y muévelos sin parar 1 a 2 minutos, hasta que estén dorados color caramelo (se queman rápido).' },
    { s: 'con ajo', ing: [ajo(5)], antes: 'Pica 5 dientes de ajo en láminas y sofríelos 1 minuto, solo hasta que huelan y estén dorados claros.' },
    { s: 'con tomate y cebolla', ing: [i(2, '', 'tomate maduro|tomates maduros'), i(2, '', 'tallo de cebolla larga|tallos de cebolla larga')], antes: 'Sofríe la cebolla larga picada 2 minutos, agrega el tomate picado en cuadritos y cocina 4 minutos más, hasta formar una salsa espesa.' },
    { s: 'verde con cilantro', ing: [i(1, 'taza', 'de cilantro fresco (hojas y tallos)'), ajo(1)], agua: 'Antes de empezar, licúa el cilantro y el ajo con el agua de la receta: esa agua verde es la que se usa para cocinar el arroz.' },
    { s: 'con espinaca', ing: [i(2, 'taza', 'de espinaca picada')], fin: 'Al destapar, pon la espinaca picada encima, vuelve a tapar 3 minutos con el fuego apagado y luego mezcla: se cocina con el vapor.' },
    { s: 'con champiñones', ing: [i(200, 'g', 'de champiñones en láminas')], antes: 'Sube el fuego a medio-alto y dora los champiñones 5 minutos sin moverlos mucho, hasta que el agua que sueltan se evapore.' },
    { s: 'con arvejas y zanahoria', ing: [i(0.5, 'taza', 'de arvejas verdes'), i(1, '', 'zanahoria|zanahorias')], antes: 'Corta la zanahoria en cuadritos pequeños y sofríela 2 minutos.', agua: 'Agrega las arvejas junto con el agua.' },
    { s: 'con pimentón', ing: [i(1, '', 'pimentón rojo|pimentones rojos')], antes: 'Corta el pimentón en cuadritos pequeños y sofríelo 3 minutos, hasta que se ablande.' },
    { s: 'amarillo con cúrcuma', ing: [i(1, 'cdta', 'de cúrcuma en polvo')], antes: 'Agrega la cúrcuma al aceite caliente y revuelve 15 segundos, solo hasta que huela.' },
    { s: 'con coco', ing: [i(1, 'taza', 'de leche de coco'), i(1, 'cdta', 'de azúcar')], agua: 'Aquí una de las tazas de agua se cambia por la taza de leche de coco. Agrega también el azúcar.' },
    { s: 'con lentejas', ing: [i(1, 'taza', 'de lentejas ya cocidas y escurridas')], fin: 'Al destapar, agrega las lentejas cocidas, mezcla con el tenedor y tapa 3 minutos más con el fuego apagado para que se calienten.' },
    { s: 'con pollo', ing: [i(2, 'taza', 'de pollo cocido y desmechado')], fin: 'Al destapar, agrega el pollo desmechado, mezcla con el tenedor y tapa 3 minutos más con el fuego apagado.' },
    { s: 'con atún', ing: [i(2, '', 'lata de atún escurrido|latas de atún escurrido')], fin: 'Al esponjar el arroz, mezcla el atún escurrido y desmenuzado. No hace falta cocinarlo.' },
    { s: 'con tocineta', ing: [i(100, 'g', 'de tocineta picada')], antes: 'Dora la tocineta picada 4 minutos a fuego medio, hasta que esté crujiente. Si soltó mucha grasa, retira un poco con una cuchara.' }
  ];
  var TIPOS_ARROZ = [
    { n: 'Arroz', ing: i(2, 'taza', 'de arroz blanco de grano largo'), agua: 4, integral: false },
    { n: 'Arroz integral', ing: i(2, 'taza', 'de arroz integral'), agua: 5, integral: true }
  ];

  TIPOS_ARROZ.forEach(function (t) {
    CON_ARROZ.forEach(function (x) {
      var pasos = [
        p('Mide el arroz y el agua', 'Mide 2 tazas de arroz y, con la misma taza, ' + t.agua + ' tazas de agua. Déjalas aparte.' + (x.agua && /licúa|cambia/.test(x.agua) ? ' ' + x.agua : ''),
          { c: t.integral ? 'El arroz integral conserva su cáscara, por eso pide más agua y más tiempo que el blanco.' : 'La regla es 1 taza de arroz por 2 de líquido, con la misma taza.' }),
        p('Lava el arroz', 'Pon el arroz en un colador bajo el chorro de agua fría y muévelo con los dedos 30 segundos. Deja que escurra bien.',
          { s: 'El agua sale casi transparente.' }),
        p('Sofríe la base', 'Calienta la cucharada de aceite en la olla a fuego medio. ' + (x.antes || 'Espera 30 segundos a que esté caliente.'),
          { e: x.antes ? 'Vigila el fuego: lo que se quema aquí amarga todo el arroz.' : '' }),
        p('Sella el arroz', 'Agrega el arroz escurrido y revuélvelo 1 a 2 minutos para que cada grano se cubra de aceite.',
          { s: 'Los granos se ven más blancos y opacos, y suenan secos al moverlos.', m: 2 }),
        p('Agrega el líquido y la sal', 'Vierte el agua de una sola vez, agrega la sal y revuelve una única vez. ' + (x.agua && !/licúa|cambia/.test(x.agua) ? x.agua + ' ' : '') + 'Sube el fuego a alto.',
          { c: 'Prueba el líquido: debe saber como una sopa suave. Es el único momento para corregir la sal.', e: 'A partir de aquí no se revuelve más, o el arroz queda masudo.' })
      ];
      if (t.integral) {
        pasos.push(p('Tapa y cocina a fuego mínimo', 'Cuando hierva fuerte, baja el fuego al mínimo, tapa bien y cocina 40 minutos sin destapar.',
          { m: 40, e: 'No abras la olla para mirar: se escapa el vapor que cocina el grano.' }));
        pasos.push(p('Comprueba y deja reposar', 'Destapa y prueba un grano: debe estar tierno pero con cuerpo. Si aún hay agua en el fondo, cocina 5 minutos más. Apaga y deja reposar tapado 10 minutos.',
          { m: 10, s: 'Grano entero, tierno y ligeramente masticable; no queda agua en el fondo.' }));
      } else {
        pasos.push(p('Hierve destapado hasta que baje el agua', 'Deja hervir a fuego alto, sin tocar, hasta que el líquido baje al nivel del arroz (entre 6 y 10 minutos).',
          { m: 8, s: 'Ya no hay agua por encima y en la superficie se ven huequitos por donde sale vapor.', e: 'Si esperas a que se seque del todo, el fondo se quema.' }));
        pasos.push(p('Tapa y baja el fuego', 'Baja el fuego al mínimo, tapa y cocina 15 minutos sin destapar. Luego apaga y deja reposar 5 minutos, todavía tapado.',
          { m: 15 }));
      }
      pasos.push(p('Esponja y sirve', (x.fin ? x.fin + ' ' : '') + 'Pasa un tenedor por el arroz levantándolo desde el fondo para separar los granos, y sirve.',
        { s: 'Granos sueltos, enteros y brillantes.' }));

      GEN.agregar({
        nombre: t.n + ' ' + x.s,
        emoji: '🍚', categoria: 'Acompañamientos', dificultad: 'Fácil',
        prep: 10, coccion: t.integral ? 55 : 32, porciones: 4,
        descripcion: may(t.n.toLowerCase()) + ' suelto ' + x.s + ', con el método de siempre para que no se pegue ni quede masudo.',
        antes: 'Usa una olla con tapa que cierre bien: el arroz se termina de cocinar con el vapor. Y después de agregar el agua, <strong>no se revuelve</strong>.',
        ingredientes: [t.ing, i(x.s === 'con coco' ? t.agua - 1 : t.agua, 'taza', 'de agua')].concat(x.ing).concat([aceite(1), sal(1)]),
        utensilios: ['Olla mediana con tapa', 'Taza para medir', 'Colador', 'Cuchara de palo', 'Tenedor'].concat(/licúa/.test(x.agua || '') ? ['Licuadora'] : []),
        pasos: pasos,
        guardar: 'Enfríalo y guárdalo tapado en la nevera antes de 2 horas. Dura 3 días. Recalienta con una cucharada de agua, tapado.'
      });
    });
  });

  // ---------------------------------------------------------------- PASTAS
  var FORMAS = [
    { n: 'Espaguetis', ing: 'de espaguetis', min: 9 }, { n: 'Macarrones', ing: 'de macarrones (penne)', min: 11 },
    { n: 'Tornillos', ing: 'de pasta tornillo (fusilli)', min: 10 }, { n: 'Moñitos', ing: 'de pasta moñitos (farfalle)', min: 11 },
    { n: 'Fettuccine', ing: 'de fettuccine', min: 10 }, { n: 'Coditos', ing: 'de coditos', min: 8 }, { n: 'Conchitas', ing: 'de pasta conchitas', min: 9 }
  ];
  // larga = la salsa se empieza antes que el agua de la pasta
  var SALSAS_PASTA = [
    { s: 'en salsa de tomate', larga: true, ing: [i(800, 'g', 'de tomate triturado'), ajo(3), i(3, 'cda', 'de aceite de oliva'), sal(1)],
      pasos: [p('Arranca la salsa de tomate', 'Pon el aceite y los ajos en láminas en una sartén grande todavía fría, y enciende a fuego medio-bajo. Cuando el ajo empiece a dorarse por los bordes (unos 2 minutos), agrega el tomate triturado y la sal.', { e: 'El ajo quemado amarga toda la salsa. En cuanto tome color, entra el tomate.' }),
              p('Cocina la salsa', 'Cuando burbujee, baja el fuego y cocina destapada 20 minutos, revolviendo cada tanto. Mientras tanto sigue con la pasta.', { m: 20, s: 'Salsa más oscura y espesa: la cuchara deja un camino en el fondo.' })] },
    { s: 'al ajo y aceite', ing: [ajo(5), i(5, 'cda', 'de aceite de oliva'), i(2, 'cda', 'de perejil picado'), i(null, '', 'Ají en hojuelas', 'Opcional.')],
      pasos: [p('Prepara el aceite de ajo', 'Mientras la pasta hierve, pon el aceite y los ajos en láminas delgadas en una sartén grande fría. Enciende a fuego bajo y deja que el ajo se dore muy despacio, 4 a 5 minutos.', { m: 5, s: 'Ajo dorado claro, como paja. Apaga ahí mismo.', e: 'Con fuego alto el ajo se quema en segundos y el plato queda amargo.' })] },
    { s: 'con mantequilla y queso', ing: [i(4, 'cda', 'de mantequilla'), i(1, 'taza', 'de queso parmesano rallado fino'), i(null, '', 'Pimienta negra')],
      pasos: [p('Deja lista la base', 'Mientras la pasta hierve, pon la mantequilla en una sartén grande a fuego bajo solo hasta que se derrita, y apaga. Ten el queso rallado a mano.', { c: 'Esta salsa se forma al final, con el agua de la pasta: por eso es clave guardarla.' })] },
    { s: 'en salsa blanca con champiñones', ing: [i(300, 'g', 'de champiñones en láminas'), i(1, 'taza', 'de crema de leche'), ajo(2), i(1, 'cda', 'de mantequilla'), sal(0.5)],
      pasos: [p('Dora los champiñones', 'Mientras hierve el agua, derrite la mantequilla en una sartén grande a fuego medio-alto. Agrega los champiñones en una capa y déjalos 6 minutos, moviéndolos poco.', { m: 6, s: 'Primero sueltan agua; cuando se evapora, se doran.', e: 'No les pongas sal al principio: sueltan más agua y se cuecen en vez de dorarse.' }),
              p('Agrega la crema', 'Baja el fuego, agrega el ajo picado 30 segundos, luego la crema y la sal. Cocina 3 minutos a fuego bajo.', { m: 3, e: 'La crema no debe hervir fuerte o se corta.' })] },
    { s: 'a la boloñesa', larga: true, ing: [i(400, 'g', 'de carne molida de res'), i(1, '', 'cebolla cabezona|cebollas cabezonas'), i(1, '', 'zanahoria|zanahorias'), ajo(2), i(500, 'g', 'de tomate triturado'), aceite(2), sal(1)],
      pasos: [p('Dora la carne', 'Calienta el aceite en una sartén honda a fuego alto. Reparte la carne molida y déjala quieta 2 minutos; luego desbarátala y dórala 5 minutos más.', { m: 7, s: 'Sin rosado y sin líquido en el fondo: suena a fritura.', e: GEN.HIGIENE }),
              p('Agrega las verduras y el tomate', 'Baja a fuego medio. Agrega la cebolla picada fina, la zanahoria rallada y el ajo, y cocina 4 minutos. Vierte el tomate triturado y la sal.', { m: 4 }),
              p('Cocina la boloñesa', 'Cuando burbujee, baja el fuego y cocina 25 minutos medio tapada, revolviendo de vez en cuando. Mientras tanto, la pasta.', { m: 25, s: 'Salsa espesa, oscura, con la carne muy tierna.' })] },
    { s: 'al pesto de albahaca', ing: [i(2, 'taza', 'de hojas de albahaca fresca'), ajo(1), i(0.33, 'taza', 'de queso parmesano rallado'), i(0.33, 'taza', 'de aceite de oliva'), i(3, 'cda', 'de nueces o maní sin sal'), sal(0.5)],
      pasos: [p('Licúa el pesto', 'Mientras hierve el agua, pon en la licuadora la albahaca lavada y seca, el ajo, las nueces, el queso, la sal y el aceite. Licúa a pulsos cortos, bajando la mezcla con una espátula, hasta tener una pasta verde con algo de textura.', { c: 'A pulsos cortos, porque el calor de la licuadora oscurece la albahaca.', e: 'El pesto no se cocina: se mezcla con la pasta fuera del fuego.' })] },
    { s: 'con atún y tomate', ing: [i(2, '', 'lata de atún|latas de atún'), i(400, 'g', 'de tomate triturado'), ajo(2), aceite(2), sal(0.5)],
      pasos: [p('Haz la salsa', 'Mientras la pasta hierve, sofríe el ajo picado en el aceite a fuego medio 1 minuto. Agrega el tomate y la sal y cocina 8 minutos.', { m: 8 }),
              p('Agrega el atún', 'Escurre el atún, agrégalo en trozos grandes y calienta 1 minuto sin revolver mucho, para que no se vuelva puré.')] },
    { s: 'con pollo en salsa cremosa', ing: [i(1, '', 'pechuga de pollo|pechugas de pollo'), i(1, 'taza', 'de crema de leche'), ajo(2), aceite(1), sal(1)],
      pasos: [p('Dora el pollo', 'Corta la pechuga en cubos de 2 centímetros, sécalos y ponles la mitad de la sal. Dóralos en el aceite a fuego medio-alto 6 minutos, moviendo cada tanto.', { m: 6, s: 'Cubos dorados y blancos por dentro al partir uno.', e: GEN.HIGIENE }),
              p('Agrega la crema', 'Baja el fuego, agrega el ajo picado 30 segundos, luego la crema y el resto de la sal. Cocina 3 minutos a fuego bajo.', { m: 3 })] },
    { s: 'con verduras salteadas', ing: [i(1, '', 'calabacín|calabacines'), i(1, '', 'pimentón rojo|pimentones rojos'), i(1, '', 'cebolla cabezona|cebollas cabezonas'), i(1, 'taza', 'de tomates cherry'), ajo(2), i(3, 'cda', 'de aceite de oliva'), sal(1)],
      pasos: [p('Corta las verduras', 'Corta el calabacín en medias lunas, el pimentón en tiras, la cebolla en plumas y los tomates cherry por la mitad.'),
              p('Saltea', 'Mientras la pasta hierve, calienta el aceite en una sartén grande a fuego medio-alto. Saltea cebolla y pimentón 3 minutos, agrega el calabacín 3 minutos más y por último el ajo, los tomates y la sal, 2 minutos.', { m: 8, s: 'Verduras con bordes dorados, tiernas pero firmes.' })] },
    { s: 'con tocineta y crema', ing: [i(150, 'g', 'de tocineta en tiras'), i(1, 'taza', 'de crema de leche'), i(0.5, 'taza', 'de queso parmesano rallado'), i(null, '', 'Pimienta negra')],
      pasos: [p('Dora la tocineta', 'Mientras hierve el agua, pon la tocineta en una sartén grande fría y enciende a fuego medio. Cocina 6 minutos, moviendo, hasta que esté crujiente.', { m: 6, c: 'Empezar en frío hace que la tocineta suelte su grasa y quede crocante. No hace falta aceite.' }),
              p('Agrega la crema', 'Retira parte de la grasa si es mucha. Baja el fuego, agrega la crema y pimienta, y calienta 2 minutos sin que hierva.', { m: 2 })] }
  ];

  FORMAS.forEach(function (f) {
    SALSAS_PASTA.forEach(function (sp) {
      var agua = [
        p('Pon a hervir el agua', 'Llena una olla grande con unos 4 litros de agua, tápala y ponla a fuego alto.', { s: 'Hierve a borbotones, con burbujas grandes que no paran al revolver.', c: 'Mucha agua evita que la pasta se pegue.' }),
        p('Sala el agua y cocina la pasta', 'Agrega las 2 cucharadas de sal y luego la pasta. Revuelve bien el primer minuto. Cocina destapada ' + (f.min - 1) + ' minutos (un minuto menos de lo que suele indicar el paquete) y prueba una.',
          { m: f.min - 1, s: 'Al dente: blanda por fuera con un poquito de resistencia en el centro al morder.', e: 'No le eches aceite al agua ni enjuagues la pasta después: la salsa ya no se le agarra.' })
      ];
      var fin;
      if (/pesto|mantequilla y queso/.test(sp.s)) {
        fin = p('Mezcla fuera del fuego', 'Pasa la pasta escurrida a la sartén o a un tazón grande, con el fuego apagado. Agrega ' + (/pesto/.test(sp.s) ? 'el pesto' : 'el queso') + ' y 4 cucharadas del agua de cocción, y mezcla con energía durante 1 minuto. Si se ve seca, agrega más agua de a cucharadas.',
          { s: 'Se forma una salsa cremosa que cubre cada pieza de pasta, sin grumos de queso.', e: 'Con el fuego encendido el queso se vuelve chicle y el pesto se oscurece.' });
      } else {
        fin = p('Termina la pasta dentro de la salsa', 'Pasa la pasta escurrida a la sartén de la salsa, a fuego medio. Agrega 4 cucharadas del agua de cocción y mezcla durante 1 a 2 minutos.' + (/ajo y aceite/.test(sp.s) ? ' Agrega el perejil al final.' : '') + (/tocineta/.test(sp.s) ? ' Apaga y mezcla el queso.' : ''),
          { m: 2, s: 'La salsa cubre la pasta de manera pareja y no queda un charco en el fondo.' });
      }
      var pasos = (sp.larga ? sp.pasos.concat(agua) : [agua[0]].concat([agua[1]]).concat(sp.pasos));
      if (!sp.larga && sp.pasos.length) pasos = [agua[0]].concat(sp.pasos.slice(0, 1)).concat([agua[1]]).concat(sp.pasos.slice(1));
      pasos = pasos.concat([
        p('Guarda agua de la cocción y escurre', 'Antes de escurrir, saca una taza del agua donde se cocinó la pasta. Luego vacía la olla en un colador en el lavaplatos, con la cara hacia atrás por el vapor.',
          { c: 'Esa agua tiene almidón: es lo que hace que la salsa quede sedosa y se pegue a la pasta.' }),
        fin,
        p('Prueba y sirve', 'Prueba, corrige la sal y sirve de inmediato en platos calientes' + (/queso|pesto|tocineta/.test(sp.s) ? '.' : ', con queso rallado si te gusta.'))
      ]);

      GEN.agregar({
        nombre: f.n + ' ' + sp.s,
        emoji: '🍝', categoria: 'Platos fuertes', dificultad: sp.larga ? 'Media' : 'Fácil',
        prep: 10, coccion: sp.larga ? 40 : 20, porciones: 4,
        descripcion: f.n + ' al dente ' + sp.s + ', con la pasta terminada dentro de la salsa como se hace en Italia.',
        antes: 'Dos reglas para cualquier pasta: <strong>agua abundante y bien salada</strong>, y <strong>guardar una taza del agua de cocción</strong> antes de escurrir.',
        ingredientes: [i(400, 'g', f.ing)].concat(sp.ing).concat([i(2, 'cda', 'de sal para el agua de la pasta')]),
        utensilios: ['Olla grande', 'Sartén grande y honda', 'Colador', 'Cuchara de palo', 'Una taza', 'Tabla y cuchillo'].concat(/pesto/.test(sp.s) ? ['Licuadora o procesador'] : []),
        pasos: pasos,
        guardar: 'Dura 2 días en la nevera. Recalienta en sartén con un chorrito de agua para que la salsa vuelva a soltarse.'
      });
    });
  });

  // ---------------------------------------------------------------- ENSALADAS
  var BASES_ENSALADA = [
    { n: 'Ensalada verde', ing: [i(1, '', 'lechuga|lechugas'), i(2, '', 'tomate|tomates'), i(1, '', 'pepino|pepinos')], reposa: false,
      pasos: [p('Lava y seca la lechuga', 'Separa las hojas, lávalas una por una en agua fría y sécalas muy bien dentro de un limpión limpio. Rómpelas con las manos en trozos de bocado.', { e: 'Con las hojas mojadas, el aderezo resbala y la ensalada queda aguada.' }),
              p('Corta el tomate y el pepino', 'Corta los tomates en gajos y el pepino en medias lunas de medio centímetro. Ponlos con la lechuga en una ensaladera.')] },
    { n: 'Ensalada de espinaca', ing: [i(4, 'taza', 'de espinaca tierna'), i(1, '', 'manzana|manzanas'), i(0.33, 'taza', 'de nueces o maní')], reposa: false,
      pasos: [p('Lava y seca la espinaca', 'Lava la espinaca en un tazón con agua, levantando las hojas para que la tierra quede en el fondo. Sécala muy bien y quita los tallos gruesos.'),
              p('Corta la manzana y tuesta las nueces', 'Corta la manzana en láminas delgadas, con cáscara. Tuesta las nueces 3 minutos en una sartén seca a fuego medio, moviendo, hasta que huelan.', { m: 3, e: 'Las nueces pasan de tostadas a quemadas en segundos: no te alejes.' })] },
    { n: 'Ensalada de repollo', ing: [i(0.5, '', 'repollo pequeño'), i(2, '', 'zanahoria|zanahorias')], reposa: true,
      pasos: [p('Corta el repollo muy fino', 'Quita las hojas de afuera y el tronco duro. Apoya el repollo por el lado plano y córtalo en tiras lo más delgadas que puedas.', { c: 'Entre más fino, más tierno y agradable de comer.' }),
              p('Ralla la zanahoria y ablanda el repollo', 'Ralla las zanahorias por el lado grueso. Pon el repollo en un tazón con media cucharadita de sal y apriétalo con las manos 1 minuto.', { s: 'El repollo se pone más flexible y brillante.' })] },
    { n: 'Ensalada de pasta', ing: [i(250, 'g', 'de pasta corta (tornillos o coditos)'), i(1, 'taza', 'de maíz tierno'), i(1, '', 'pimentón|pimentones'), i(1, '', 'zanahoria|zanahorias')], reposa: true,
      pasos: [p('Cocina la pasta', 'Cocina la pasta en abundante agua hirviendo con sal, el tiempo que diga el paquete. Escúrrela y, esta vez sí, enjuágala con agua fría para detener la cocción.', { m: 10, c: 'En las ensaladas frías la pasta se enjuaga para que no siga cocinándose ni se pegue.' }),
              p('Pica las verduras', 'Corta el pimentón en cuadritos pequeños y ralla la zanahoria. Mézclalos con el maíz escurrido y la pasta fría en un tazón grande.')] },
    { n: 'Ensalada de quinua', ing: [i(1, 'taza', 'de quinua'), i(2, 'taza', 'de agua'), i(1, '', 'pepino|pepinos'), i(2, '', 'tomate|tomates'), i(0.25, 'taza', 'de cilantro o perejil picado')], reposa: true,
      pasos: [p('Lava y cocina la quinua', 'Lava la quinua en un colador fino bajo el chorro 30 segundos, frotándola. Ponla en una olla con las 2 tazas de agua y una pizca de sal; cuando hierva, baja el fuego, tapa y cocina 15 minutos. Déjala enfriar extendida en un plato.', { m: 15, s: 'Los granos se ven transparentes y sueltan un "hilito" blanco en espiral.', e: 'Sin lavar, la quinua queda amarga.' }),
              p('Pica las verduras', 'Corta el pepino y los tomates (sin semillas) en cuadritos. Mézclalos con la quinua fría y las hierbas.')] },
    { n: 'Ensalada de garbanzos', ing: [i(2, 'taza', 'de garbanzos cocidos'), i(2, '', 'tomate|tomates'), i(1, '', 'pepino|pepinos'), i(0.25, '', 'de cebolla morada')], reposa: true,
      pasos: [p('Enjuaga los garbanzos', 'Escurre los garbanzos en un colador y enjuágalos bajo el chorro hasta que no salga espuma. Deja que escurran bien.'),
              p('Pica las verduras', 'Corta los tomates y el pepino en cubos del tamaño de un garbanzo. Corta la cebolla en tiras muy finas y déjala 10 minutos en agua con sal para quitarle el picor. Mezcla todo en un tazón.')] },
    { n: 'Ensalada de papa', ing: [i(700, 'g', 'de papa'), i(2, '', 'huevo|huevos'), i(2, '', 'tallo de cebolla larga|tallos de cebolla larga')], reposa: true,
      pasos: [p('Cocina las papas y los huevos', 'Pela las papas, córtalas en cubos de 2 centímetros y ponlas en una olla con agua fría y sal. Desde que hierva, cocina 12 minutos. En otra olla pequeña, hierve los huevos 10 minutos.', { m: 12, s: 'El cuchillo entra en la papa sin resistencia, pero el cubo no se deshace.', e: 'Si se pasan, la ensalada se vuelve puré.' }),
              p('Enfría y pica', 'Escurre las papas y déjalas entibiar. Pasa los huevos por agua fría, pélalos y pícalos. Pica la cebolla larga en rodajas finas. Mezcla todo con cuidado.')] },
    { n: 'Ensalada de tomate y pepino', ing: [i(4, '', 'tomate maduro pero firme|tomates maduros pero firmes'), i(2, '', 'pepino|pepinos'), i(0.5, '', 'cebolla morada')], reposa: false,
      pasos: [p('Remoja la cebolla', 'Corta la cebolla en tiras muy delgadas y déjala 10 minutos en agua fría con una pizca de sal.', { c: 'El remojo le quita el picor fuerte.' }),
              p('Corta el tomate y el pepino', 'Corta los tomates en gajos y el pepino en rodajas gruesas. Ponlos en una ensaladera con la cebolla escurrida.')] }
  ];
  var ADEREZOS = [
    { s: 'con vinagreta de limón', ing: [i(1, '', 'limón|limones'), i(3, 'cda', 'de aceite de oliva'), sal(0.5)], como: 'En un frasco con tapa pon 1 cucharada de jugo de limón, la sal y el aceite. Tapa y agita con fuerza 15 segundos.' },
    { s: 'con aderezo de mostaza y miel', ing: [i(1, 'cda', 'de mostaza'), i(1, 'cda', 'de miel'), i(1, 'cda', 'de vinagre'), i(3, 'cda', 'de aceite'), sal(0.25)], como: 'En un frasco con tapa pon la mostaza, la miel, el vinagre, el aceite y la sal. Tapa y agita 15 segundos.' },
    { s: 'con aderezo de yogur', ing: [i(0.5, 'taza', 'de yogur natural sin dulce'), i(0.5, '', 'limón'), ajo(1), sal(0.5)], como: 'En un tazón mezcla el yogur con el jugo de medio limón, el ajo rallado muy fino y la sal.' },
    { s: 'con vinagreta balsámica', ing: [i(1, 'cda', 'de vinagre balsámico'), i(3, 'cda', 'de aceite de oliva'), i(1, 'cdta', 'de miel'), sal(0.5)], como: 'En un frasco con tapa pon el vinagre balsámico, la miel, la sal y el aceite. Tapa y agita 15 segundos.' },
    { s: 'con aderezo de cilantro', ing: [i(1, 'taza', 'de cilantro fresco'), i(1, '', 'limón|limones'), i(4, 'cda', 'de aceite'), ajo(1), sal(0.5)], como: 'Licúa el cilantro con el jugo del limón, el aceite, el ajo, la sal y 2 cucharadas de agua hasta que quede una salsa verde y lisa.' },
    { s: 'con aderezo cremoso de ajo', ing: [i(3, 'cda', 'de mayonesa'), ajo(1), i(0.5, '', 'limón'), i(1, 'cda', 'de agua')], como: 'En un tazón mezcla la mayonesa con el ajo rallado muy fino, el jugo de medio limón y la cucharada de agua, hasta que quede fluida.' },
    { s: 'con vinagreta de naranja', ing: [i(1, '', 'naranja|naranjas'), i(3, 'cda', 'de aceite de oliva'), i(1, 'cdta', 'de mostaza'), sal(0.5)], como: 'En un frasco con tapa pon 3 cucharadas de jugo de naranja, la mostaza, la sal y el aceite. Tapa y agita 15 segundos.' }
  ];

  BASES_ENSALADA.forEach(function (b) {
    ADEREZOS.forEach(function (a) {
      GEN.agregar({
        nombre: b.n + ' ' + a.s,
        emoji: '🥗', categoria: 'Ensaladas', dificultad: 'Fácil',
        prep: b.reposa ? 30 : 15, coccion: 0, porciones: 4,
        descripcion: b.n + ' fresca ' + a.s + '. El aliño se prepara en casa en un minuto.',
        antes: b.reposa ? 'Esta ensalada mejora si reposa: los ingredientes absorben el aderezo. Puedes hacerla con anticipación.' : 'Las ensaladas de hojas y tomate se aliñan <strong>justo antes de servir</strong>; si esperan, se ponen lacias y sueltan agua.',
        ingredientes: b.ing.concat(a.ing),
        utensilios: ['Ensaladera o tazón grande', 'Tabla y cuchillo', 'Frasco con tapa o tazón pequeño', 'Limpión limpio o papel de cocina'],
        pasos: b.pasos.concat([
          p('Prepara el aderezo', a.como, { s: 'Se ve de un solo color y un poco espeso, sin el aceite separado.', c: 'Pruébalo mojando un trozo de la ensalada, no con cuchara: así sabes cómo sabrá de verdad.' }),
          p(b.reposa ? 'Mezcla y deja reposar' : 'Aliña y sirve', b.reposa
            ? 'Vierte el aderezo sobre la ensalada y mezcla con cuidado desde el fondo. Tapa y deja reposar 15 minutos en la nevera. Prueba y corrige la sal antes de servir.'
            : 'Vierte la mitad del aderezo, mezcla con las manos limpias levantando desde el fondo y prueba. Agrega más si hace falta y sirve de inmediato.',
            { m: b.reposa ? 15 : 0, s: b.reposa ? '' : 'Todo brillante y apenas cubierto, sin charco en el fondo.' })
        ]),
        guardar: b.reposa ? 'Dura 2 días en la nevera en un recipiente tapado.' : 'Ya aliñada no se conserva. Si quieres adelantar, guarda las verduras y el aderezo por separado.'
      });
    });
  });

  // ---------------------------------------------------------------- LEGUMBRES
  var LEGUMBRES = [
    { n: 'Lentejas', ing: i(2, 'taza', 'de lentejas secas'), remojo: false, min: 40, agua: 6 },
    { n: 'Fríjoles rojos', ing: i(2, 'taza', 'de fríjoles rojos secos'), remojo: true, min: 100, agua: 8 },
    { n: 'Garbanzos', ing: i(2, 'taza', 'de garbanzos secos'), remojo: true, min: 100, agua: 8 },
    { n: 'Arvejas secas', ing: i(2, 'taza', 'de arvejas secas'), remojo: true, min: 70, agua: 7 }
  ];
  var CON_LEGUMBRE = [
    { s: 'guisados', ing: [], antes: '', tarde: '' },
    { s: 'con chorizo', ing: [i(2, '', 'chorizo|chorizos')], antes: 'Corta los chorizos en rodajas y dóralos 4 minutos en la olla, sin aceite. Sácalos a un plato y deja la grasa en la olla para el sofrito. ', tarde: 'Devuelve el chorizo a la olla. ' },
    { s: 'con plátano verde', ing: [i(1, '', 'plátano verde|plátanos verdes')], antes: '', tarde: 'Pela el plátano y pártelo con la mano en trozos pequeños directamente sobre la olla (así espesa el caldo). ' },
    { s: 'con papa y zanahoria', ing: [i(2, '', 'papa|papas'), i(1, '', 'zanahoria|zanahorias')], antes: '', tarde: 'Agrega las papas en cubos de 2 centímetros y la zanahoria en cuadritos. ' },
    { s: 'con tocineta', ing: [i(150, 'g', 'de tocineta picada')], antes: 'Dora la tocineta picada 5 minutos en la olla hasta que esté crujiente y sácala a un plato, dejando la grasa. ', tarde: 'Devuelve la tocineta a la olla. ' }
  ];

  LEGUMBRES.forEach(function (l) {
    CON_LEGUMBRE.forEach(function (x) {
      var fem = /as$/.test(l.n.split(' ')[0]);
      var nombre = l.n + ' ' + (x.s === 'guisados' && fem ? 'guisadas' : x.s) + (x.s === 'guisados' ? ' con hogao' : '');
      var pasos = [
        p('Revisa y lava', 'Riega ' + l.n.toLowerCase() + ' sobre un plato llano y saca piedritas o granos dañados. Lávalos en un colador bajo el chorro de agua fría.')
      ];
      if (l.remojo) pasos.push(p('Remoja desde la noche anterior', 'Pon los granos en un tazón grande y cúbrelos con el triple de agua. Déjalos en remojo mínimo 8 horas. Al día siguiente bota esa agua y enjuágalos.',
        { s: 'Los granos se ven hinchados, casi del doble de tamaño.', c: 'El remojo acorta la cocción y hace que caigan menos pesados.' }));
      pasos.push(p('Haz el sofrito', x.antes + 'En la olla, a fuego medio, calienta el aceite y sofríe la cebolla picada 4 minutos. Agrega el ajo 30 segundos y luego el tomate picado y el comino. Cocina 5 minutos hasta formar una pasta.',
        { m: 9, s: 'El tomate se deshace y el aceite brilla en los bordes.' }));
      pasos.push(p('Agrega los granos y el agua', 'Echa ' + l.n.toLowerCase() + ' y las ' + l.agua + ' tazas de agua. Sube el fuego hasta que hierva. Todavía sin sal.',
        { c: 'Si sale espuma gris al hervir, quítala con una cuchara.' }));
      pasos.push(p('Cocina a fuego bajo', 'Baja el fuego, tapa dejando una rendija y cocina ' + (l.min - 20) + ' minutos, revisando cada tanto que los granos sigan cubiertos de líquido.',
        { m: l.min - 20, e: 'Si se quedan sin agua, agrega siempre agua caliente: el agua fría corta la cocción y endurece el grano.', c: l.remojo ? 'En olla a presión el tiempo total baja a unos 35 minutos desde que empieza a sonar.' : '' }));
      pasos.push(p('Agrega la sal' + (x.tarde ? ' y lo demás' : ''), x.tarde + 'Agrega la sal, revuelve y cocina 20 minutos más.',
        { m: 20, s: 'Un grano aplastado entre los dedos se deshace fácil y es cremoso por dentro.', e: 'Si aún está duro, sigue cocinando de 10 en 10 minutos. Los granos viejos tardan más.' }));
      pasos.push(p('Espesa y deja reposar', 'Para espesar, aplasta un cucharón de granos contra la pared de la olla y revuelve. Prueba la sal, apaga y deja reposar tapado 5 minutos. Sirve con arroz y cilantro picado.', { m: 5 }));

      GEN.agregar({
        nombre: nombre,
        emoji: '🫘', categoria: 'Platos fuertes', dificultad: 'Fácil',
        prep: 15, coccion: l.min + 15, porciones: 5,
        descripcion: l.n + ': un plato espeso y sabroso, cocinado despacio sobre un buen sofrito. Rinde mucho y sabe mejor al día siguiente.',
        antes: (l.remojo ? '<strong>Ojo: necesitan remojo desde la noche anterior.</strong> ' : 'Las lentejas no necesitan remojo. ') + 'La sal va casi al final, y el fuego siempre bajo para que los granos no se rompan.',
        ingredientes: [l.ing, i(l.agua, 'taza', 'de agua'), i(1, '', 'cebolla cabezona|cebollas cabezonas'), i(2, '', 'tomate maduro|tomates maduros'), ajo(2), i(1, 'cdta', 'de comino molido'), aceite(2), sal(1.5)].concat(x.ing).concat([i(null, '', 'Cilantro fresco')]),
        utensilios: ['Olla grande con tapa (o a presión)', 'Colador', 'Tabla y cuchillo', 'Cuchara de palo', 'Cucharón'].concat(l.remojo ? ['Tazón grande para el remojo'] : []),
        pasos: pasos,
        guardar: 'Duran 4 días en la nevera y 3 meses congelados. Al recalentar espesan: agrégales un chorrito de agua.'
      });
    });
  });

  // ---------------------------------------------------------------- VERDURAS
  // tiempos: [salteado, horno a 220 °C, vapor]
  var VERDURAS = [
    { n: 'Brócoli', ing: i(500, 'g', 'de brócoli'), corte: 'Separa el brócoli en ramitos del tamaño de un bocado. Pela el tallo y córtalo en rodajas: también se come.', t: [5, 18, 5], e: '🥦' },
    { n: 'Coliflor', ing: i(600, 'g', 'de coliflor'), corte: 'Separa la coliflor en ramitos parejos del tamaño de un bocado.', t: [7, 25, 7], e: '🥦' },
    { n: 'Zanahorias', ing: i(500, 'g', 'de zanahoria'), corte: 'Pela las zanahorias y córtalas en bastones de 1 centímetro de grosor y 6 de largo.', t: [8, 28, 8], e: '🥕' },
    { n: 'Calabacín', ing: i(600, 'g', 'de calabacín'), corte: 'Lava los calabacines y córtalos en medias lunas de 1 centímetro, con cáscara.', t: [5, 18, 4], e: '🥒' },
    { n: 'Habichuelas', ing: i(400, 'g', 'de habichuelas'), corte: 'Corta las puntas de las habichuelas y jala el hilo del costado si lo tienen. Déjalas enteras o pártelas por la mitad.', t: [7, 18, 6], e: '🫛' },
    { n: 'Espárragos', ing: i(400, 'g', 'de espárragos verdes'), corte: 'Dobla cada espárrago cerca de la base: se parte justo donde termina la parte dura, que se bota.', t: [5, 12, 4], e: '🥬' },
    { n: 'Champiñones', ing: i(500, 'g', 'de champiñones'), corte: 'Limpia los champiñones con un papel húmedo y córtalos en cuartos.', t: [7, 20, 0], e: '🍄' },
    { n: 'Berenjena', ing: i(2, '', 'berenjena mediana|berenjenas medianas'), corte: 'Corta las berenjenas en cubos de 2 centímetros, con cáscara.', t: [10, 25, 0], e: '🍆' },
    { n: 'Pimentones', ing: i(3, '', 'pimentón de colores|pimentones de colores'), corte: 'Quita semillas y venas de los pimentones y córtalos en tiras de 1 centímetro.', t: [7, 22, 0], e: '🫑' },
    { n: 'Repollo', ing: i(0.5, '', 'repollo mediano'), corte: 'Quita el tronco del repollo y córtalo en tiras de 1 centímetro.', t: [6, 22, 6], e: '🥬' },
    { n: 'Ahuyama', ing: i(700, 'g', 'de ahuyama (calabaza)'), corte: 'Quita cáscara y semillas de la ahuyama y córtala en cubos de 2 centímetros.', t: [12, 30, 10], e: '🎃' },
    { n: 'Batata', ing: i(600, 'g', 'de batata (camote)'), corte: 'Pela las batatas y córtalas en cubos de 2 centímetros.', t: [12, 30, 12], e: '🍠' },
    { n: 'Coles de Bruselas', ing: i(500, 'g', 'de coles de Bruselas'), corte: 'Corta la base de cada col, quita las hojas de afuera y pártelas por la mitad.', t: [9, 25, 8], e: '🥬' },
    { n: 'Remolacha', ing: i(500, 'g', 'de remolacha'), corte: 'Pela las remolachas (manchan: usa guantes) y córtalas en cubos de 1,5 centímetros.', t: [15, 40, 20], e: '🍠' },
    { n: 'Cebollas', ing: i(4, '', 'cebolla cabezona|cebollas cabezonas'), corte: 'Pela las cebollas y córtalas en gajos gruesos, dejando un poco de la raíz para que no se desarmen.', t: [10, 30, 0], e: '🧅' }
  ];

  VERDURAS.forEach(function (v) {
    var fem = /Coliflor|Zanahorias|Habichuelas|Berenjena|Ahuyama|Batata|Coles|Remolacha|Cebollas/.test(v.n);
    var plural = /s$/.test(v.n);
    var adj = function (base) { return base + (fem ? 'a' : 'o') + (plural ? 's' : ''); };
    var comun = { emoji: v.e, categoria: 'Acompañamientos', dificultad: 'Fácil', porciones: 4,
      guardar: 'Dura 3 días en la nevera. Recalienta en sartén caliente para que no quede aguado.' };

    // Salteado
    GEN.agregar(Object.assign({}, comun, {
      nombre: v.n + ' ' + adj('saltead') + ' al ajo', prep: 10, coccion: v.t[0] + 3,
      descripcion: v.n + ' con bordes dorados y mucho sabor a ajo, listo en pocos minutos.',
      antes: 'Para que la verdura se dore y no se cueza: sartén grande, <strong>bien caliente</strong>, la verdura seca y en una sola capa.',
      ingredientes: [v.ing, ajo(3), aceite(2), sal(0.5), i(null, '', 'Pimienta')],
      utensilios: ['Sartén grande', 'Tabla y cuchillo', 'Espátula', 'Papel de cocina o limpión'],
      pasos: [
        p('Corta y seca', v.corte + ' Seca todo muy bien con un limpión. Pica los ajos en láminas.', { c: 'El agua en la superficie hace vapor y la verdura queda hervida en vez de dorada.' }),
        p('Calienta la sartén', 'Pon la sartén a fuego medio-alto 2 minutos y agrega el aceite.', { m: 2, s: 'El aceite corre fácil y brilla.' }),
        p('Saltea sin mover demasiado', 'Echa la verdura en una sola capa y déjala quieta 2 minutos para que dore. Luego mueve cada minuto hasta completar ' + v.t[0] + ' minutos.' + (v.t[0] >= 10 ? ' Si se pega, agrega 2 cucharadas de agua y deja que se evapore.' : ''),
          { m: v.t[0], s: 'Bordes dorados y color vivo; al pinchar está tierna pero firme.', e: 'Si llenas mucho la sartén, suelta agua y se cuece. Mejor en dos tandas.' }),
        p('Agrega el ajo al final', 'Baja el fuego a medio, agrega el ajo, la sal y la pimienta, y mueve 1 minuto.', { m: 1, e: 'El ajo entra al final porque se quema mucho antes que la verdura.' }),
        p('Sirve', 'Prueba, corrige la sal y sirve de inmediato. Unas gotas de limón le van muy bien.')
      ]
    }));

    // Al horno
    GEN.agregar(Object.assign({}, comun, {
      nombre: v.n + ' ' + adj('asad') + ' al horno', prep: 10, coccion: v.t[1],
      descripcion: 'El horno concentra el dulce natural de la verdura: ' + v.n.toLowerCase() + ' con bordes tostados y centro tierno.',
      antes: 'Horno <strong>muy caliente</strong> y la verdura bien separada en la bandeja. Amontonada suelta vapor y no se tuesta.',
      ingredientes: [v.ing, aceite(2), sal(0.75), i(null, '', 'Pimienta')],
      utensilios: ['Bandeja para horno', 'Papel para hornear', 'Tazón grande', 'Tabla y cuchillo', 'Espátula'],
      pasos: [
        p('Precalienta el horno', 'Enciende el horno a 220 °C y forra la bandeja con papel para hornear.', { c: 'Tarda unos 15 minutos en calentar.' }),
        p('Corta y seca', v.corte + ' Seca todo muy bien.'),
        p('Mezcla con aceite y sal', 'En el tazón, mezcla la verdura con el aceite, la sal y la pimienta, usando las manos, hasta que todo brille.', { s: 'Cada trozo tiene una capa fina de aceite, sin charco en el fondo.' }),
        p('Extiende en la bandeja', 'Riega la verdura en una sola capa, con espacio entre los trozos.', { e: 'Si se tocan o se montan, se cuecen al vapor. Usa dos bandejas si hace falta.' }),
        p('Hornea y voltea', 'Hornea ' + v.t[1] + ' minutos. A la mitad del tiempo saca la bandeja y voltea los trozos con la espátula.', { m: Math.round(v.t[1] / 2), c: 'Vuelve a poner el temporizador para la segunda mitad.' }),
        p('Comprueba y sirve', 'Pincha un trozo grueso con un cuchillo.', { s: 'Bordes color café tostado y el cuchillo entra sin resistencia.' })
      ]
    }));

    // Al vapor (no todas)
    if (v.t[2]) {
      GEN.agregar(Object.assign({}, comun, {
        nombre: v.n + ' al vapor con mantequilla y limón', prep: 10, coccion: v.t[2] + 5,
        descripcion: 'La forma más ligera de cocinar ' + v.n.toLowerCase() + ': color vivo, textura firme y solo un toque de mantequilla.',
        antes: 'Al vapor, la verdura no toca el agua. Si no tienes vaporera, sirve un colador metálico sobre una olla con tapa.',
        ingredientes: [v.ing, i(1, 'cda', 'de mantequilla'), i(0.5, '', 'limón'), sal(0.5)],
        utensilios: ['Olla con tapa', 'Vaporera o colador metálico', 'Tabla y cuchillo', 'Tazón'],
        pasos: [
          p('Corta', v.corte),
          p('Pon a hervir el agua', 'Pon 3 centímetros de agua en la olla, coloca la vaporera o el colador encima (el agua no debe tocarlo) y lleva a hervir a fuego alto.'),
          p('Cocina al vapor', 'Pon la verdura en la vaporera, tapa y cocina ' + v.t[2] + ' minutos a fuego medio-alto.', { m: v.t[2], s: 'Color más intenso que en crudo; el cuchillo entra con muy poca resistencia.', e: 'Pasada de tiempo se pone opaca, blanda y pierde sabor. Empieza a revisar 1 minuto antes.' }),
          p('Aliña en caliente', 'Pasa la verdura a un tazón. Agrega la mantequilla, el jugo de medio limón y la sal, y mueve hasta que la mantequilla se derrita y cubra todo.'),
          p('Sirve', 'Prueba, corrige la sal y sirve enseguida.')
        ]
      }));
    }
  });

  // ---------------------------------------------------------------- PAPAS
  var SABOR_PAPA = [
    { s: '', ing: [], txt: '' },
    { s: ' con ajo', ing: [ajo(3)], txt: ' Agrega 3 dientes de ajo picados muy fino y mezcla 1 minuto con el calor.' },
    { s: ' con queso', ing: [i(1, 'taza', 'de queso rallado')], txt: ' Espolvorea el queso rallado por encima y tapa 2 minutos para que se derrita.' },
    { s: ' con hierbas', ing: [i(1, 'cdta', 'de orégano seco'), i(1, 'cdta', 'de tomillo seco')], txt: ' Espolvorea el orégano y el tomillo y mezcla.' },
    { s: ' con paprika', ing: [i(1, 'cdta', 'de paprika')], txt: ' Espolvorea la paprika y mezcla hasta que todo tome color.' },
    { s: ' con mantequilla y perejil', ing: [i(1, 'cda', 'de mantequilla'), i(2, 'cda', 'de perejil picado')], txt: ' Agrega la mantequilla y el perejil y mezcla hasta que se derrita.' }
  ];
  var METODO_PAPA = [
    { n: 'Puré de papa', coc: 25, extra: [i(3, 'cda', 'de mantequilla'), i(0.5, 'taza', 'de leche caliente')], pasos: function (sb) { return [
        p('Pela y corta', 'Pela las papas y córtalas en trozos parejos de 4 centímetros.', { c: 'Del mismo tamaño para que se cocinen al tiempo.' }),
        p('Cocina desde agua fría', 'Pon las papas en una olla, cúbrelas con agua fría, agrega 1 cucharadita de sal y enciende a fuego alto. Cuando hierva, baja a medio y cocina 18 minutos.', { m: 18, s: 'Un cuchillo entra y sale sin ninguna resistencia y la papa casi se parte sola.', e: 'Si empiezas con agua hirviendo, quedan deshechas por fuera y duras por dentro.' }),
        p('Escurre y seca', 'Escurre muy bien. Devuelve las papas a la olla caliente, sin fuego, y muévelas 1 minuto para que se evapore el agua que les queda.', { c: 'Papas secas = puré cremoso. Papas mojadas = puré aguado.' }),
        p('Aplasta en caliente', 'Aplasta las papas con un pisapuré o un tenedor mientras están calientes. Agrega la mantequilla y luego la leche caliente poco a poco, mezclando con cuchara.' + sb.txt, { s: 'Puré liso, suave y que mantiene la forma en la cuchara.', e: 'No uses licuadora ni batidora: el almidón se vuelve elástico y queda como pegante.' }),
        p('Ajusta y sirve', 'Prueba y corrige la sal. Si quedó muy espeso, agrega un chorrito más de leche caliente. Sirve de inmediato.')
      ]; } },
    { n: 'Papas doradas en sartén', coc: 30, extra: [aceite(3)], pasos: function (sb) { return [
        p('Corta en cubos', 'Lava las papas y córtalas en cubos de 2 centímetros (con o sin cáscara).'),
        p('Dales un hervor', 'Pon los cubos en una olla con agua fría y sal. Cuando hierva, cocina solo 6 minutos y escurre.', { m: 6, s: 'El cuchillo entra pero la papa sigue firme.', c: 'Este hervor corto garantiza que queden cocidas por dentro cuando se doren por fuera.' }),
        p('Sécalas', 'Extiende las papas sobre un limpión y déjalas 3 minutos soltando vapor.', { e: 'Mojadas salpican, se pegan y no doran.' }),
        p('Dora sin mover mucho', 'Calienta el aceite en una sartén grande a fuego medio-alto. Pon las papas en una sola capa y déjalas 4 minutos sin tocar. Voltea y repite por los otros lados, unos 12 minutos en total.', { m: 12, s: 'Costra dorada y crujiente por varias caras.' }),
        p('Sazona y sirve', 'Baja el fuego y agrega 1 cucharadita de sal.' + sb.txt + ' Sirve calientes.')
      ]; } },
    { n: 'Papas aplastadas al horno', coc: 50, extra: [aceite(3)], pasos: function (sb) { return [
        p('Cocina las papas enteras', 'Lava las papas (pequeñas o medianas, con cáscara) y ponlas en una olla con agua fría y sal. Desde que hierva, cocina 20 minutos.', { m: 20, s: 'El cuchillo entra hasta el centro sin resistencia.' }),
        p('Precalienta el horno', 'Mientras tanto, enciende el horno a 220 °C y unta una bandeja con 1 cucharada de aceite.'),
        p('Aplasta', 'Escurre las papas y déjalas secar 3 minutos. Ponlas en la bandeja y aplasta cada una con el fondo de un vaso hasta dejarla de 1,5 centímetros de alto.', { s: 'Quedan como galletas gruesas con los bordes agrietados (ahí es donde se pone crujiente).', e: 'Si aplastas demasiado, se desbaratan.' }),
        p('Hornea', 'Rocía el resto del aceite y 1 cucharadita de sal por encima. Hornea 25 minutos, sin voltear.', { m: 25, s: 'Bordes dorados y crujientes.' }),
        p('Termina y sirve', 'Saca la bandeja.' + (sb.txt || ' Sirve de inmediato.') + (sb.txt ? ' Sirve de inmediato.' : ''))
      ]; } },
    { n: 'Papas saladas', coc: 30, extra: [], pasos: function (sb) { return [
        p('Lava las papas', 'Lava muy bien las papas pequeñas con un cepillo o estropajo: se cocinan y se comen con cáscara.'),
        p('Cubre con agua y sal', 'Ponlas en una olla en una sola capa. Agrega agua solo hasta cubrirlas a medias y 2 cucharadas de sal gruesa.', { c: 'Parece mucha sal, pero se queda en la cáscara formando una costra blanca.' }),
        p('Cocina hasta que se seque el agua', 'Cocina a fuego medio-alto, destapado, unos 25 minutos, hasta que el agua se evapore por completo.', { m: 25, s: 'No queda agua y la cáscara se ve arrugada con una capa blanca de sal.' }),
        p('Sacude la olla', 'Baja el fuego al mínimo y mueve la olla en círculos 1 minuto para que las papas se sequen y la sal se pegue.' + sb.txt),
        p('Sirve', 'Sirve calientes, solas o con ají o guacamole.')
      ]; } }
  ];

  METODO_PAPA.forEach(function (m) {
    SABOR_PAPA.forEach(function (sb) {
      GEN.agregar({
        nombre: m.n + sb.s,
        emoji: '🥔', categoria: 'Acompañamientos', dificultad: 'Fácil',
        prep: 10, coccion: m.coc, porciones: 4,
        descripcion: m.n + sb.s + ': un acompañamiento que nunca falla, explicado para que salga bien a la primera.',
        antes: 'Las papas se empiezan siempre en <strong>agua fría</strong>, para que el calor llegue al centro al mismo ritmo que al borde.',
        ingredientes: [i(800, 'g', 'de papa')].concat(m.extra).concat(sb.ing).concat([i(null, '', 'Sal')]),
        utensilios: ['Olla mediana', 'Colador', 'Tabla y cuchillo', 'Cuchara de palo'].concat(/sartén/.test(m.n) ? ['Sartén grande'] : []).concat(/horno/.test(m.n) ? ['Bandeja para horno', 'Un vaso'] : []),
        pasos: m.pasos(sb),
        guardar: 'Duran 3 días en la nevera. ' + (/Puré/.test(m.n) ? 'Recalienta el puré a fuego bajo con un chorrito de leche.' : 'Recalienta en sartén u horno para recuperar el dorado.')
      });
    });
  });

  // ---------------------------------------------------------------- HUEVOS
  var CON_HUEVO = [
    { s: 'queso', ing: [i(0.5, 'taza', 'de queso rallado')], prep: '' },
    { s: 'jamón y queso', ing: [i(2, '', 'tajada de jamón|tajadas de jamón'), i(0.5, 'taza', 'de queso rallado')], prep: 'Corta el jamón en cuadritos.' },
    { s: 'champiñones', ing: [i(1, 'taza', 'de champiñones en láminas')], prep: 'Saltea los champiñones 5 minutos en la sartén con unas gotas de aceite, hasta que se dore y se evapore el agua. Sácalos a un plato.', m: 5 },
    { s: 'espinaca', ing: [i(2, 'taza', 'de espinaca')], prep: 'Saltea la espinaca 1 minuto en la sartén hasta que se marchite. Escúrrela apretándola con una cuchara y sácala a un plato.', m: 1 },
    { s: 'tomate', ing: [i(1, '', 'tomate|tomates')], prep: 'Pica el tomate en cuadritos sin las semillas (tienen mucha agua).' },
    { s: 'cebolla', ing: [i(0.5, '', 'cebolla cabezona')], prep: 'Pica la cebolla en cuadritos y sofríela 3 minutos en la sartén hasta que esté transparente. Sácala a un plato.', m: 3 },
    { s: 'maíz', ing: [i(0.5, 'taza', 'de maíz tierno')], prep: 'Escurre bien el maíz.' },
    { s: 'tocineta', ing: [i(3, '', 'tira de tocineta|tiras de tocineta')], prep: 'Pica la tocineta y dórala 4 minutos en la sartén, sin aceite, hasta que esté crujiente. Sácala a un plato con papel.', m: 4 },
    { s: 'pimentón', ing: [i(0.5, '', 'pimentón')], prep: 'Pica el pimentón en cuadritos y sofríelo 3 minutos. Sácalo a un plato.', m: 3 },
    { s: 'salchicha', ing: [i(2, '', 'salchicha|salchichas')], prep: 'Corta las salchichas en rodajas y dóralas 3 minutos en la sartén. Sácalas a un plato.', m: 3 },
    { s: 'cebollín', ing: [i(3, 'cda', 'de cebollín picado')], prep: 'Pica el cebollín en rodajitas finas.' },
    { s: 'papa', ing: [i(1, '', 'papa cocida|papas cocidas')], prep: 'Corta la papa cocida en cubitos y dóralos 4 minutos en la sartén con unas gotas de aceite. Sácalos a un plato.', m: 4 },
    { s: 'aguacate', ing: [i(0.5, '', 'aguacate maduro')], prep: 'Corta el aguacate en cubos justo antes de usarlo, para que no se oscurezca.', crudo: true },
    { s: 'chorizo', ing: [i(1, '', 'chorizo|chorizos')], prep: 'Quítale la piel al chorizo, desmenúzalo y dóralo 5 minutos en la sartén, sin aceite. Sácalo a un plato con papel.', m: 5 }
  ];

  CON_HUEVO.forEach(function (x) {
    var base = [i(4, '', 'huevo|huevos')].concat(x.ing).concat([i(1, 'cda', 'de mantequilla'), sal(0.25)]);
    var prepPaso = x.prep ? [p('Prepara el relleno', x.prep, { m: x.m, c: x.m ? 'Lo que suelta agua o necesita cocción se hace antes: dentro del huevo no alcanza a cocinarse.' : '' })] : [];

    GEN.agregar({
      nombre: 'Omelette de ' + x.s, emoji: '🍳', categoria: 'Desayunos', dificultad: 'Media',
      prep: 8, coccion: 6 + (x.m || 0), porciones: 2,
      descripcion: 'Tortilla de huevo doblada, tierna por dentro y sin dorar de más, rellena de ' + x.s + '.',
      antes: 'El omelette se hace en <strong>menos de 3 minutos</strong>, así que el relleno debe estar listo antes. Fuego medio-bajo: el huevo no debe ponerse café.',
      ingredientes: base, utensilios: ['Sartén antiadherente mediana (20 a 24 cm)', 'Tazón', 'Tenedor', 'Espátula de silicona o madera'],
      pasos: prepPaso.concat([
        p('Bate los huevos', 'Rompe los huevos en un tazón, agrega la sal y bate con el tenedor 20 segundos.', { s: 'Color amarillo parejo, sin hilos de clara.' }),
        p('Calienta la sartén', 'Limpia la sartén, ponla a fuego medio-bajo y derrite la mantequilla, moviéndola para cubrir todo el fondo.', { s: 'La mantequilla hace espuma pero no se oscurece.' }),
        p('Vierte y mueve', 'Vierte los huevos. Durante los primeros 30 segundos, empuja suavemente los bordes hacia el centro con la espátula e inclina la sartén para que el huevo líquido llene los huecos.', { s: 'Se forma una capa pareja, cuajada por debajo y todavía húmeda y brillante por encima.' }),
        p('Rellena', 'Cuando casi no quede huevo líquido, reparte ' + (x.crudo ? 'el queso que quieras y, al final, el aguacate' : 'el relleno') + ' sobre una mitad del omelette. Tapa 30 segundos.', { e: 'Si esperas a que la superficie esté totalmente seca, queda gomoso.' }),
        p('Dobla y sirve', 'Con la espátula, dobla la mitad vacía sobre la rellena. Deslízalo al plato y sirve de inmediato.', { s: 'Amarillo claro por fuera, sin manchas cafés, y jugoso por dentro.' })
      ]),
      guardar: 'Se come recién hecho. Recalentado pierde toda la gracia.'
    });

    GEN.agregar({
      nombre: 'Huevos revueltos con ' + x.s, emoji: '🍳', categoria: 'Desayunos', dificultad: 'Fácil',
      prep: 6, coccion: 5 + (x.m || 0), porciones: 2,
      descripcion: 'Huevos revueltos cremosos, de pliegues grandes y suaves, con ' + x.s + '.',
      antes: 'El secreto de los huevos revueltos cremosos es <strong>fuego bajo</strong> y sacarlos cuando todavía se ven un poco húmedos.',
      ingredientes: base, utensilios: ['Sartén antiadherente', 'Tazón', 'Tenedor', 'Espátula'],
      pasos: prepPaso.concat([
        p('Bate los huevos', 'Rompe los huevos en un tazón, agrega la sal y bate con el tenedor 20 segundos.', { s: 'Color amarillo parejo, sin hilos de clara.' }),
        p('Derrite la mantequilla', 'Pon la sartén a fuego bajo y derrite la mantequilla.', { e: 'Si la mantequilla se pone café, la sartén está muy caliente: retírala del fuego unos segundos.' }),
        p('Cuaja despacio', 'Vierte los huevos y espera 15 segundos. Con la espátula, empuja desde los bordes hacia el centro, despacio, formando pliegues grandes. Espera unos segundos y repite.', { s: 'Se van formando trozos grandes y suaves, no migas pequeñas.' }),
        p('Agrega lo demás y retira', 'Cuando estén a medio cuajar, agrega ' + (x.crudo ? 'el aguacate ya fuera del fuego' : 'lo que preparaste (o ' + x.s + ' directamente)') + ' y mezcla suave. Apaga cuando todavía brillen.', { e: 'El calor que guardan los sigue cocinando: si los sacas "ya secos", llegan duros al plato.' }),
        p('Sirve', 'Pásalos enseguida al plato y cómelos calientes, con arepa o pan.')
      ]),
      guardar: 'Mejor recién hechos. Si sobran, 1 día en la nevera y se recalientan a fuego muy bajo.'
    });
  });

  // ---------------------------------------------------------------- SÁNDWICHES, AREPAS Y TORTILLAS
  var RELLENOS = [
    { s: 'jamón y queso', ing: [i(4, '', 'tajada de jamón|tajadas de jamón'), i(4, '', 'tajada de queso|tajadas de queso')], prep: '' },
    { s: 'pollo desmechado', ing: [i(1, '', 'pechuga de pollo|pechugas de pollo'), i(2, 'cda', 'de mayonesa o crema')], prep: 'Cocina la pechuga en agua con sal a fuego bajo durante 18 minutos. Sácala, deja que entibie y desméchala con dos tenedores. Mézclala con la mayonesa y una pizca de sal.', m: 18 },
    { s: 'atún y maíz', ing: [i(1, '', 'lata de atún|latas de atún'), i(0.5, 'taza', 'de maíz tierno'), i(2, 'cda', 'de mayonesa')], prep: 'Escurre muy bien el atún y el maíz. Mézclalos en un tazón con la mayonesa.' },
    { s: 'huevo revuelto', ing: [i(3, '', 'huevo|huevos'), i(1, 'cdta', 'de mantequilla')], prep: 'Bate los huevos con una pizca de sal y cocínalos en la mantequilla a fuego bajo, moviendo despacio, hasta que estén cuajados pero húmedos.', m: 2 },
    { s: 'champiñones al ajillo', ing: [i(250, 'g', 'de champiñones'), ajo(2), i(1, 'cda', 'de mantequilla')], prep: 'Corta los champiñones en láminas y dóralos en la mantequilla a fuego medio-alto 6 minutos. Agrega el ajo picado y sal en el último minuto.', m: 6 },
    { s: 'carne molida', ing: [i(250, 'g', 'de carne molida'), i(0.5, '', 'cebolla'), i(1, '', 'tomate|tomates')], prep: 'Dora la carne molida a fuego alto 6 minutos, desbaratándola. Agrega la cebolla y el tomate picados, sal y comino, y cocina 5 minutos más hasta que quede jugosa pero sin caldo.', m: 11 },
    { s: 'queso y tomate', ing: [i(4, '', 'tajada de queso|tajadas de queso'), i(1, '', 'tomate|tomates')], prep: 'Corta el tomate en rodajas delgadas y sécalas con papel de cocina para que no mojen el pan.' },
    { s: 'pollo y aguacate', ing: [i(1, '', 'pechuga de pollo|pechugas de pollo'), i(1, '', 'aguacate|aguacates')], prep: 'Cocina la pechuga en agua con sal a fuego bajo 18 minutos y desméchala. Aplasta el aguacate con un tenedor, sal y unas gotas de limón.', m: 18 },
    { s: 'fríjoles y queso', ing: [i(1, 'taza', 'de fríjoles cocidos'), i(0.75, 'taza', 'de queso rallado')], prep: 'Calienta los fríjoles en una sartén y aplástalos con un tenedor hasta formar una pasta gruesa. Si quedan secos, agrega un chorrito de agua.', m: 4 },
    { s: 'vegetales salteados', ing: [i(1, '', 'calabacín|calabacines'), i(1, '', 'pimentón|pimentones'), i(0.5, '', 'cebolla')], prep: 'Corta todo en tiras delgadas y saltéalo a fuego alto con unas gotas de aceite y sal durante 5 minutos, hasta que esté tierno y con bordes dorados.', m: 5 },
    { s: 'queso y espinaca', ing: [i(2, 'taza', 'de espinaca'), i(0.75, 'taza', 'de queso rallado')], prep: 'Saltea la espinaca 1 minuto hasta que se marchite y escúrrela apretándola con una cuchara: si va mojada, todo queda aguado.', m: 1 },
    { s: 'chorizo y queso', ing: [i(2, '', 'chorizo|chorizos'), i(0.75, 'taza', 'de queso rallado')], prep: 'Quita la piel a los chorizos, desmenúzalos y dóralos sin aceite 6 minutos. Escúrrelos sobre papel de cocina.', m: 6 },
    { s: 'huevo y tocineta', ing: [i(2, '', 'huevo|huevos'), i(4, '', 'tira de tocineta|tiras de tocineta')], prep: 'Dora la tocineta 5 minutos hasta que esté crujiente y sácala. En la misma sartén, con solo un poco de su grasa, haz los huevos revueltos a fuego bajo.', m: 7 },
    { s: 'queso y maíz', ing: [i(0.75, 'taza', 'de queso rallado'), i(0.5, 'taza', 'de maíz tierno')], prep: 'Escurre muy bien el maíz y mézclalo con el queso rallado.' }
  ];
  var VEHICULOS = [
    { n: 'Sándwich a la plancha de', e: '🥪', ing: [i(4, '', 'tajada de pan de molde|tajadas de pan de molde'), i(1, 'cda', 'de mantequilla blanda')], rinde: '2 sándwiches',
      armar: 'Unta mantequilla por un lado de cada tajada de pan (ese lado va hacia afuera). Sobre el lado sin mantequilla de dos tajadas reparte el relleno y cubre con las otras dos.',
      cocinar: 'Pon los sándwiches en una sartén a fuego medio-bajo. Dora 3 minutos, presionando suave con la espátula; voltea y dora 3 minutos más.',
      senal: 'Pan dorado parejo y crujiente; el relleno está caliente y el queso, si lleva, derretido.',
      error: 'Con fuego alto el pan se quema antes de que el centro se caliente.', min: 6 },
    { n: 'Quesadilla de', e: '🌮', ing: [i(4, '', 'tortilla de harina|tortillas de harina'), i(1, 'taza', 'de queso mozzarella rallado')], rinde: '2 quesadillas',
      armar: 'Pon una tortilla en la sartén fría. Reparte una capa de queso, encima el relleno y otro poco de queso (el queso es el pegante). Cubre con otra tortilla.',
      cocinar: 'Enciende a fuego medio y cocina 3 minutos. Voltea con ayuda de un plato o una espátula ancha y cocina 2 a 3 minutos más. Repite con la otra.',
      senal: 'Tortilla con manchas doradas y crujiente; el queso derretido sale apenas por los bordes.',
      error: 'No la rellenes demasiado: al voltear se abre y se sale todo.', min: 6 },
    { n: 'Arepa rellena de', e: '🫓', ing: [i(4, '', 'arepa de maíz ya hecha|arepas de maíz ya hechas')], rinde: '4 arepas',
      armar: 'Calienta las arepas en una sartén o plancha a fuego medio, 3 minutos por lado, hasta que estén crujientes por fuera. Ábrelas por un costado con un cuchillo, como un bolsillo, sin llegar al otro lado.',
      cocinar: 'Rellena cada arepa con una buena cucharada del relleno y devuélvelas 2 minutos a la sartén, tapadas, para que todo se caliente junto.',
      senal: 'Arepa crujiente que suena hueca al golpearla, con el relleno caliente.',
      error: 'Si abres la arepa fría, se quiebra. Caliente se abre limpia.', min: 8 },
    { n: 'Wrap de', e: '🌯', ing: [i(2, '', 'tortilla de harina grande|tortillas de harina grandes'), i(2, '', 'hoja de lechuga|hojas de lechuga')], rinde: '2 wraps',
      armar: 'Calienta cada tortilla 20 segundos por lado en una sartén seca: tibia se dobla sin romperse. Pon la lechuga en el centro y el relleno encima formando una línea, dejando libres tres dedos en los bordes.',
      cocinar: 'Dobla primero los dos costados hacia adentro y luego enrolla desde abajo, apretando. Pon el wrap con el cierre hacia abajo en la sartén a fuego medio 2 minutos para sellarlo, y 1 minuto por el otro lado.',
      senal: 'El cierre queda pegado y dorado, y el wrap no se abre al levantarlo.',
      error: 'Una tortilla fría se agrieta al enrollar.', min: 4 },
    { n: 'Tostadas con', e: '🍞', ing: [i(4, '', 'tajada de pan grueso|tajadas de pan grueso'), i(1, 'cda', 'de aceite de oliva o mantequilla')], rinde: '4 tostadas',
      armar: 'Unta las tajadas de pan con el aceite o la mantequilla por ambos lados.',
      cocinar: 'Tuéstalas en una sartén a fuego medio, 2 minutos por lado, hasta que estén doradas y firmes. Reparte el relleno caliente encima justo antes de servir.',
      senal: 'Pan crujiente por fuera que resiste el peso del relleno sin doblarse.',
      error: 'Si montas el relleno con anticipación, el pan se ablanda.', min: 4 }
  ];

  VEHICULOS.forEach(function (v) {
    RELLENOS.forEach(function (r) {
      var pasos = [];
      if (r.prep) pasos.push(p('Prepara el relleno', r.prep, { m: r.m, e: /pollo|carne|chorizo/.test(r.s) ? GEN.HIGIENE : '' }));
      else pasos.push(p('Deja todo a la mano', 'Saca el jamón y el queso de la nevera unos minutos antes: a temperatura ambiente el queso se derrite más rápido y parejo.'));
      pasos.push(p('Arma', v.armar, { c: 'Reparte el relleno parejo hasta cerca de los bordes, para que cada bocado tenga de todo.' }));
      pasos.push(p('Dora', v.cocinar, { m: v.min, s: v.senal, e: v.error }));
      pasos.push(p('Corta y sirve', 'Deja reposar 1 minuto para que el relleno se asiente (y no te quemes), corta por la mitad si quieres y sirve.'));

      GEN.agregar({
        nombre: v.n + ' ' + r.s,
        emoji: v.e, categoria: 'Sándwiches y arepas', dificultad: 'Fácil',
        prep: 8, coccion: v.min + (r.m || 0), porciones: 2,
        descripcion: 'Rápido y llenador: ' + v.n.toLowerCase() + ' ' + r.s + ', crujiente por fuera y caliente por dentro. Salen ' + v.rinde + '.',
        antes: 'El relleno debe ir <strong>escurrido y no muy húmedo</strong>: el exceso de líquido ablanda el pan o la tortilla. Y el fuego, medio: da tiempo a que el centro se caliente.',
        ingredientes: v.ing.concat(r.ing).concat([i(null, '', 'Sal')]),
        utensilios: ['Sartén o plancha', 'Espátula', 'Tabla y cuchillo', 'Tazón'],
        pasos: pasos,
        guardar: 'Se disfruta recién hecho. El relleno solo sí se puede guardar 2 días en la nevera para armar otro después.'
      });
    });
  });
})();
