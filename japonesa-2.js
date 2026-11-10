/* ============================================================
   COMIDA JAPONESA (parte 2): postres, bebidas y algunos platos más
   ============================================================ */
(function () {
  var i = GEN.i, p = GEN.p, sal = GEN.sal, aceite = GEN.aceite, R = GEN.R;
  var JP = 'Comida japonesa';
  function u(c, s, pl) { return i(c, '', s + '|' + pl); }

  // ---------------------------------------------------------------- Dorayaki
  R(JP, 'Dorayaki (pancakes japoneses rellenos)', '🥞', 'dorayaki', [15, 15], 6, 'Media',
    'Dos panqueques esponjosos de miel unidos con un relleno dulce. Es el postre favorito de Doraemon.',
    'Se cocinan a <strong>fuego muy bajo</strong> para que queden dorados parejos y esponjosos. Se rellenan con arequipe, chocolate de untar o fríjol rojo dulce.',
    [u(3, 'huevo', 'huevos'), i(0.33, 'taza', 'de azúcar'), i(2, 'cda', 'de miel'), i(1, 'taza', 'de harina de trigo'), i(1, 'cdta', 'de polvo de hornear'), i(0.25, 'taza', 'de agua o leche'), i(1, 'cdta', 'de aceite', 'Para la sartén.'), i(0.75, 'taza', 'de arequipe, chocolate de untar o fríjol rojo dulce', 'Para el relleno.')],
    ['Tazón', 'Batidor', 'Sartén antiadherente', 'Cuchara', 'Papel de cocina'],
    [
      p('Bate los huevos', 'Bate los huevos con el azúcar y la miel 3 minutos, hasta que la mezcla esté clara y espesa.', { m: 3, s: 'Al levantar el batidor cae un hilo que se queda un momento sobre la mezcla.' }),
      p('Agrega la harina', 'Mezcla la harina con el polvo de hornear, tamízala sobre los huevos y mezcla con movimientos suaves. Agrega el agua. Deja reposar 10 minutos.', { m: 10, e: 'Si mezclas fuerte pierdes el aire y quedan duros.' }),
      p('Cocina', 'Calienta la sartén a fuego bajo con una capa mínima de aceite (frota con papel). Vierte 2 cucharadas de masa para un disco de 8 centímetros. Cocina 2 minutos hasta que salgan burbujas; voltea y cocina 1 minuto más.', { m: 3, s: 'Dorado suave por ambos lados.', c: 'Si se doran muy rápido, baja el fuego.' }),
      p('Enfría y rellena', 'Deja enfriar los discos 3 minutos. Pon una cucharada de relleno entre dos discos y presiona suave.')
    ],
    'Duran 2 días en un recipiente cerrado.');

  // ---------------------------------------------------------------- Purin
  R(JP, 'Purin (flan japonés con caramelo)', '🍮', 'purin', [20, 45], 4, 'Media',
    'Flan japonés suave y firme con caramelo oscuro. Se hace al baño maría y se enfría muy bien.',
    'El truco está en <strong>colar la mezcla</strong> y cocinarla a baño maría suave: así queda liso, sin burbujas.',
    [i(0.5, 'taza', 'de azúcar', 'Para el caramelo.'), i(2, 'cda', 'de agua', 'Para el caramelo.'), u(3, 'huevo', 'huevos'), i(2, 'taza', 'de leche'), i(0.33, 'taza', 'de azúcar', 'Para el flan.'), i(1, 'cdta', 'de vainilla')],
    ['Olla pequeña', 'Moldes o tazas (4)', 'Colador', 'Bandeja honda', 'Papel aluminio'],
    [
      p('Haz el caramelo', 'En una olla pequeña mezcla el azúcar y el agua. Cocina a fuego medio sin revolver hasta que tome color café oscuro, 6 a 8 minutos. Reparte rápido en los moldes.', { m: 7, s: 'Color de caramelo oscuro, como miel de panela.', e: 'Cuidado: está muy caliente y se quema fácil.' }),
      p('Mezcla el flan', 'Calienta la leche hasta que salga vapor, sin hervir. Bate los huevos con el azúcar sin hacer espuma. Vierte la leche tibia poco a poco sobre los huevos, revolviendo. Agrega la vainilla.'),
      p('Cuela', 'Pasa la mezcla por un colador y vierte sobre el caramelo. Tapa cada molde con aluminio.', { c: 'Si ves burbujas, retíralas con una cuchara o un papel.' }),
      p('Cocina al baño maría', 'Pon los moldes en una bandeja con agua caliente hasta la mitad. Hornea a 150 °C por 40 minutos.', { m: 40, s: 'El centro tiembla un poco, como gelatina.' }),
      p('Enfría y desmolda', 'Deja enfriar y refrigera mínimo 3 horas. Desmolda pasando un cuchillo por el borde.', { m: 180 })
    ],
    'Duran 3 días en la nevera.');

  // ---------------------------------------------------------------- Panqueques soufflé
  R(JP, 'Panqueques japoneses esponjosos', '🥞', 'panqueques-japoneses', [20, 15], 2, 'Difícil',
    'Panqueques altos y temblorosos como nubes, hechos con claras batidas. Un reto bonito para un desayuno especial.',
    'Se cocinan <strong>tapados y a fuego bajo</strong>. Las claras bien batidas son todo el secreto.',
    [u(2, 'huevo (yemas y claras separadas)', 'huevos (yemas y claras separadas)'), i(2, 'cda', 'de leche'), i(0.33, 'taza', 'de harina de trigo'), i(0.5, 'cdta', 'de polvo de hornear'), i(3, 'cda', 'de azúcar'), i(1, 'cdta', 'de vinagre o limón'), i(1, 'cda', 'de mantequilla', 'Para la sartén.'), i(null, '', 'Miel o frutas', 'Para servir.')],
    ['Tazones', 'Batidora', 'Sartén antiadherente con tapa', 'Espátula'],
    [
      p('Haz la masa', 'Mezcla las yemas con la leche. Agrega la harina y el polvo de hornear tamizados y mezcla hasta que quede lisa.'),
      p('Bate el merengue', 'Bate las claras con el vinagre hasta espuma. Agrega el azúcar en 3 partes y sigue batiendo 4 minutos, hasta picos firmes y brillantes.', { m: 4, s: 'Al voltear el tazón, el merengue no se cae.' }),
      p('Une', 'Agrega un tercio del merengue a la masa de yemas y mezcla. Luego incorpora el resto con movimientos envolventes, sin aplastar.', { e: 'Si bates fuerte, se baja el aire y quedan planos.' }),
      p('Cocina', 'En sartén a fuego muy bajo con mantequilla, pon 3 montones altos de masa. Agrega una cucharada de agua alrededor, tapa y cocina 5 minutos. Voltea con cuidado y cocina 4 minutos más tapado.', { m: 9, s: 'Altos, dorados y firmes al tocar.' }),
      p('Sirve', 'Sirve de inmediato con miel o frutas: se bajan al enfriar.')
    ],
    'Se comen al momento.');

  // ---------------------------------------------------------------- Castella
  R(JP, 'Castella (bizcocho japonés de miel)', '🍰', 'castella', [30, 50], 8, 'Difícil',
    'Bizcocho húmedo y suave de miel, de origen portugués y muy amado en Japón. Se corta en rebanadas gruesas.',
    'Pide <strong>claras bien batidas y horno bajo</strong>. Al sacarlo, se deja caer un golpe suave sobre la mesa para que no se baje.',
    [u(4, 'huevo', 'huevos'), i(0.66, 'taza', 'de azúcar'), i(2, 'cda', 'de miel'), i(1, 'taza', 'de harina de trigo'), i(2, 'cda', 'de leche'), i(1, 'cda', 'de mantequilla derretida')],
    ['Batidora', 'Molde rectangular forrado con papel', 'Tazones', 'Espátula'],
    [
      p('Prepara', 'Precalienta el horno a 160 °C y forra el molde con papel para hornear.'),
      p('Bate los huevos', 'Bate los huevos con el azúcar y la miel con batidora 8 minutos, hasta que triplique su volumen y haga cinta.', { m: 8, s: 'Al levantar el batidor, cae una cinta que se queda sobre la mezcla.' }),
      p('Agrega la harina', 'Tamiza la harina sobre la mezcla en 3 partes, incorporando con movimientos envolventes. Agrega la leche y la mantequilla tibia.', { e: 'No mezcles mucho: se baja el volumen.' }),
      p('Hornea', 'Vierte en el molde, golpea suave sobre la mesa para quitar burbujas y hornea 45 a 50 minutos, tapando con aluminio si se dora muy rápido.', { m: 48, s: 'Un palillo sale limpio.' }),
      p('Reposa', 'Al salir, deja caer el molde desde 10 centímetros. Cubre con papel y deja reposar 1 hora: queda más húmedo.', { m: 60 })
    ],
    'Dura 4 días bien envuelto. Es mejor al día siguiente.');

  // ---------------------------------------------------------------- Kakigori
  R(JP, 'Kakigori (hielo raspado con jarabe de fresa)', '🍧', 'kakigori', [15, 5], 2, 'Fácil',
    'Hielo raspado muy fino bañado en jarabe de fresa y leche condensada. Perfecto para el calor.',
    'Necesitas <strong>hielo muy fino</strong>: usa una licuadora potente o un molde de hielo raspado, y sírvelo enseguida.',
    [i(3, 'taza', 'de hielo picado'), i(1, 'taza', 'de fresas picadas'), i(0.25, 'taza', 'de azúcar'), i(2, 'cda', 'de agua'), i(2, 'cda', 'de leche condensada')],
    ['Olla pequeña', 'Licuadora', 'Tazones'],
    [
      p('Haz el jarabe', 'Cocina las fresas con el azúcar y el agua 5 minutos hasta que suelten el jugo. Machácalas y deja enfriar. Cuela si quieres un jarabe liso.', { m: 5 }),
      p('Ralla el hielo', 'Licúa el hielo en tandas cortas hasta que quede como nieve fina.', { s: 'Se ve esponjoso, no en trozos.' }),
      p('Arma', 'Pon el hielo en un tazón, baña con jarabe y termina con leche condensada. Sirve de inmediato.', { e: 'Se derrite rápido: sírvelo al momento.' })
    ],
    'Se come al momento. El jarabe dura 5 días en la nevera.');

  // ---------------------------------------------------------------- Matcha latte
  R(JP, 'Matcha latte', '🍵', 'matcha-latte', [5, 3], 1, 'Fácil',
    'Té verde en polvo batido con leche caliente o fría. Cremoso, ligeramente amargo y energizante.',
    'El matcha se <strong>bate con un poco de agua caliente primero</strong> para que no queden grumos. Si no tienes batidor de bambú, usa un tenedor o un espumador.',
    [i(1, 'cdta', 'de matcha en polvo'), i(2, 'cda', 'de agua caliente (no hirviendo)'), i(1, 'taza', 'de leche'), i(1, 'cdta', 'de miel o azúcar (opcional)')],
    ['Tazón pequeño', 'Batidor o tenedor', 'Taza'],
    [
      p('Disuelve el matcha', 'Tamiza el matcha en un tazón. Agrega el agua caliente y bate en forma de zigzag hasta que quede liso y con espuma.', { m: 1, s: 'Verde brillante y sin grumos.', e: 'Con agua hirviendo se pone amargo: 80 °C es suficiente.' }),
      p('Calienta la leche', 'Calienta la leche sin hervir y, si quieres espuma, bátela unos segundos.'),
      p('Une', 'Vierte la leche sobre el matcha. Endulza si quieres. Para versión fría, sirve sobre hielo.')
    ],
    'Se toma al momento.');

  // ---------------------------------------------------------------- Helado de matcha
  R(JP, 'Helado de té verde (matcha)', '🍨', 'helado-matcha', [20, 10], 6, 'Media',
    'Helado cremoso de té verde, hecho en casa sin máquina. Dulce, suave y con un toque amargo.',
    'Se bate en tres fases dentro del congelador para quitarle los cristales de hielo.',
    [i(1, 'taza', 'de crema de leche fría'), i(0.5, 'taza', 'de leche condensada'), i(2, 'cda', 'de matcha en polvo'), i(0.25, 'taza', 'de leche')],
    ['Batidora', 'Tazón', 'Recipiente para congelar'],
    [
      p('Mezcla el matcha', 'Disuelve el matcha en la leche tibia hasta que no queden grumos. Mezcla con la leche condensada.'),
      p('Bate la crema', 'Bate la crema de leche muy fría hasta picos suaves. Incorpora la mezcla de matcha con movimientos envolventes.', { s: 'Una crema verde, suave y aireada.' }),
      p('Congela', 'Pasa a un recipiente y congela 6 horas.', { m: 360 }),
      p('Sirve', 'Saca 5 minutos antes de servir para que se ablande.')
    ],
    'Dura 2 semanas en el congelador.');

  // ---------------------------------------------------------------- Mochi
  R(JP, 'Mochi de microondas', '🍡', 'mochi', [10, 3], 8, 'Media',
    'Bolitas suaves y elásticas hechas con harina de arroz glutinoso, rellenas de arequipe o chocolate.',
    'Necesitas <strong>harina de arroz glutinoso (mochiko o shiratamako)</strong>, que se consigue en tiendas asiáticas. No sirve la harina de arroz normal.',
    [i(1, 'taza', 'de harina de arroz glutinoso'), i(0.25, 'taza', 'de azúcar'), i(1, 'taza', 'de agua'), i(0.25, 'taza', 'de maicena', 'Para espolvorear.'), i(0.5, 'taza', 'de arequipe, fresa o chocolate', 'Para rellenar.')],
    ['Tazón apto para microondas', 'Espátula', 'Plato con maicena'],
    [
      p('Mezcla', 'En el tazón mezcla la harina, el azúcar y el agua hasta que no queden grumos.'),
      p('Cocina', 'Tapa con un plato y cocina en microondas 1 minuto. Revuelve y cocina 1 minuto más, hasta que la masa esté translúcida y pegajosa.', { m: 2, s: 'Masa elástica y brillante.', e: 'Cuidado: está muy caliente.' }),
      p('Forma', 'Con las manos espolvoreadas con maicena, aplana porciones, pon una cucharadita de relleno y cierra formando una bola.', { c: 'La maicena evita que se pegue; sacude el exceso.' })
    ],
    'Mejor el mismo día; dura 2 días a temperatura ambiente.');

  // ---------------------------------------------------------------- Karaage
  R(JP, 'Karaage (pollo frito japonés)', '🍗', 'karaage', [30, 12], 3, 'Media',
    'Trozos de pollo marinados en soya y jengibre, rebozados en almidón y fritos hasta quedar muy crocantes.',
    'El secreto es <strong>marinar 30 minutos</strong> y usar maicena (o fécula) para la costra crocante.',
    [u(0.75, 'libra de muslo de pollo sin hueso', 'libras de muslo de pollo sin hueso'), i(2, 'cda', 'de salsa de soya'), i(1, 'cdta', 'de jengibre rallado'), GEN.ajo(1), i(1, 'cdta', 'de azúcar'), i(0.5, 'taza', 'de maicena'), i(null, '', 'Aceite para freír'), u(1, 'limón', 'limones')],
    ['Tazón', 'Sartén honda', 'Espumadera', 'Papel de cocina'],
    [
      p('Corta y marina', 'Corta el pollo en trozos de 4 centímetros. Mézclalos con la soya, el jengibre, el ajo machacado y el azúcar. Deja marinar 30 minutos.', { m: 30 }),
      p('Reboza', 'Pasa cada trozo por la maicena y sacude el exceso.', { e: 'Si queda mucha harina, la costra se vuelve pastosa.' }),
      p('Fríe', 'Calienta el aceite a fuego medio. Fríe los trozos 5 a 6 minutos por tanda hasta dorar, volteando.', { m: 6, s: 'Dorado y crocante; el pollo no está rosado.' }),
      p('Sirve', 'Escurre sobre papel y sirve con gajos de limón.')
    ],
    'Se come recién frito.');

  // ---------------------------------------------------------------- Shogayaki
  R(JP, 'Shogayaki (cerdo salteado al jengibre)', '🥩', 'shogayaki', [15, 8], 2, 'Fácil',
    'Lonjas finas de cerdo salteadas en una salsa dulce de soya y jengibre. Se sirve sobre arroz.',
    'Se cocina en un par de minutos: <strong>ten la salsa lista antes de encender el fuego</strong>.',
    [u(0.5, 'libra de lomo de cerdo en láminas finas', 'libras de lomo de cerdo en láminas finas'), i(2, 'cda', 'de salsa de soya'), i(1, 'cda', 'de miel o azúcar'), i(1, 'cda', 'de jengibre rallado'), u(1, 'cebolla', 'cebollas'), aceite(1), i(2, 'taza', 'de arroz blanco cocido', 'Para servir.')],
    ['Sartén', 'Tazón pequeño', 'Tabla y cuchillo'],
    [
      p('Mezcla la salsa', 'Mezcla la soya, la miel y el jengibre en un tazón.'),
      p('Sofríe la cebolla', 'Corta la cebolla en aros y sofríela en aceite 3 minutos.', { m: 3 }),
      p('Sella el cerdo', 'Agrega el cerdo y cocina 3 minutos revolviendo hasta que cambie de color. Vierte la salsa y cocina 1 minuto más hasta que brille.', { m: 4, s: 'La salsa se vuelve espesa y brillante.' }),
      p('Sirve', 'Sirve sobre el arroz con la salsa de la sartén.')
    ],
    'Dura 2 días en la nevera.');

  // ---------------------------------------------------------------- Nikujaga
  R(JP, 'Nikujaga (guiso japonés de carne y papa)', '🥘', 'nikujaga', [15, 30], 4, 'Fácil',
    'El guiso casero más típico de Japón: carne de res, papa, cebolla y zanahoria cocinadas en caldo dulce de soya.',
    'Se cocina <strong>a fuego bajo y tapado</strong>. La salsa se absorbe poco a poco y las papas quedan brillantes.',
    [u(0.5, 'libra de carne de res en láminas finas', 'libras de carne de res en láminas finas'), u(3, 'papa', 'papas'), u(2, 'cebolla', 'cebollas'), u(1, 'zanahoria', 'zanahorias'), i(2, 'taza', 'de agua'), i(3, 'cda', 'de salsa de soya'), i(2, 'cda', 'de azúcar'), aceite(1)],
    ['Olla con tapa', 'Tabla y cuchillo'],
    [
      p('Corta', 'Pela y corta las papas y la zanahoria en trozos medianos. Corta las cebollas en gajos.'),
      p('Sofríe', 'En la olla con aceite sofríe la carne 2 minutos. Agrega la cebolla y saltea 2 minutos.', { m: 4 }),
      p('Agrega el resto', 'Echa las papas y la zanahoria, el agua, la soya y el azúcar. Tapa y cocina a fuego bajo 25 minutos.', { m: 25, s: 'Las papas están tiernas y el caldo ha reducido a la mitad.' }),
      p('Reposa', 'Apaga y deja reposar tapado 10 minutos: absorbe todo el sabor.', { m: 10 })
    ],
    'Dura 3 días en la nevera y mejora al día siguiente.');
})();
