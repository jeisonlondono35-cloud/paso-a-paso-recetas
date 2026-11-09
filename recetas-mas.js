/* Más recetas. Se agregan a la lista RECETAS de recetas.js
   (mismo formato: mira la explicación al inicio de ese archivo). */

RECETAS.push(

  // ---------------------------------------------------------- AREPAS
  {
    id: 'arepas',
    nombre: 'Arepas de maíz con queso',
    emoji: '🫓',
    categoria: 'Desayunos',
    dificultad: 'Fácil',
    prep: 15,
    coccion: 12,
    porciones: 4,
    descripcion: 'Arepas doradas por fuera y suaves por dentro, hechas con harina de maíz precocida. Salen unas 6 medianas.',
    antes: `Usa <strong>harina de maíz precocida</strong> (la que dice "para arepas" en el paquete); la harina de maíz común o la fécula no sirven. El punto de la masa lo dan tus manos: debe sentirse como plastilina suave.`,
    ingredientes: [
      { c: 2, u: 'taza|tazas', n: 'de harina de maíz precocida' },
      { c: 2.5, u: 'taza|tazas', n: 'de agua tibia' },
      { c: 1, u: 'cucharadita|cucharaditas', n: 'de sal' },
      { c: 1, u: 'cucharada|cucharadas', n: 'de mantequilla blanda' },
      { c: 150, u: 'g', n: 'de queso para rellenar', nota: 'Mozzarella, campesino o el que te guste.' }
    ],
    utensilios: ['Tazón grande', 'Sartén pesada, plancha o budare', 'Espátula', 'Un platico con agua (para mojarte los dedos)'],
    pasos: [
      {
        t: 'Disuelve la sal en el agua',
        d: `Pon el agua tibia en el tazón grande. Agrega la sal y la mantequilla, y revuelve con la mano o una cuchara hasta que la sal se disuelva.`,
        c: `El agua tibia (que la aguantes cómodamente con el dedo) hidrata la harina más rápido y deja la masa más suave que el agua fría.`
      },
      {
        t: 'Agrega la harina poco a poco',
        d: `Echa la harina en forma de lluvia con una mano mientras revuelves con la otra, haciendo círculos. Al principio parece una sopa espesa: es normal, la harina va absorbiendo el agua.`,
        e: `Si echas toda la harina de golpe se forman grumos secos por dentro que después cuesta deshacer.`
      },
      {
        t: 'Amasa',
        d: `Cuando ya no puedas revolver, amasa dentro del tazón durante 2 minutos: aprieta la masa con el puño, dóblala y repite, deshaciendo con los dedos cualquier grumo que sientas.`,
        s: `La masa queda lisa, sin grumos, y se despega de las manos y del tazón.`,
        m: 2
      },
      {
        t: 'Deja reposar y comprueba el punto',
        d: `Deja la masa quieta 5 minutos para que termine de absorber el agua. Luego haz la prueba: forma una bolita y aplástala entre las palmas.`,
        s: `Punto perfecto: la bolita se aplasta sin que los bordes se agrieten y no se te pega a las manos.`,
        c: `¿Los bordes se agrietan? Le falta agua: agrega 1 cucharada y amasa. ¿Se pega mucho a las manos? Le falta harina: agrega 1 cucharada y amasa.`,
        m: 5
      },
      {
        t: 'Forma las arepas',
        d: `Divide la masa en 6 bolas del tamaño de una mandarina. Aplasta cada una entre las palmas, girándola, hasta formar un disco de 1 centímetro de grosor. Mójate un dedo y pásalo por el borde para alisar cualquier grieta.`,
        c: `Si las quieres rellenas desde ya, pon queso en el centro de la bola, ciérrala y luego aplástala con cuidado.`
      },
      {
        t: 'Asa el primer lado',
        d: `Calienta la sartén a fuego medio durante 2 minutos y úntala con muy poquita mantequilla o aceite. Pon las arepas dejando espacio entre ellas y déjalas sin mover 5 a 6 minutos.`,
        s: `Por debajo se forma una costra con manchas doradas y la arepa se desliza sola al mover la sartén.`,
        e: `Con fuego alto se queman por fuera y quedan crudas y pastosas por dentro. Paciencia y fuego medio.`,
        m: 6
      },
      {
        t: 'Voltea y asa el otro lado',
        d: `Voltéalas con la espátula y cocina otros 5 a 6 minutos.`,
        s: `Al darle golpecitos con el dedo, la arepa suena hueca, como un tambor pequeño. Esa es la señal de que está cocida por dentro.`,
        m: 6
      },
      {
        t: 'Rellena y sirve',
        d: `Ábrelas por un lado con un cuchillo, como un bolsillo, mete el queso y devuélvelas 1 minuto a la sartén para que se derrita. O simplemente úntales mantequilla y pon el queso encima. Se comen calientes.`
      }
    ],
    guardar: `Las arepas asadas duran 3 días en la nevera en una bolsa cerrada. Recaliéntalas en sartén o tostadora. La masa cruda dura 1 día en la nevera bien envuelta; si se seca, amásala con un poquito de agua.`
  },

  // ---------------------------------------------------------- SOPA DE POLLO
  {
    id: 'sopa-pollo',
    nombre: 'Sopa de pollo con verduras',
    emoji: '🥣',
    categoria: 'Sopas',
    dificultad: 'Fácil',
    prep: 15,
    coccion: 50,
    porciones: 4,
    descripcion: 'La sopa que arregla cualquier día: caldo hecho desde cero, pollo desmechado, papa y zanahoria.',
    antes: `El sabor del caldo sale del hueso y de cocinar despacio, por eso se usa pollo <strong>con hueso</strong> y se empieza con agua fría. Recuerda lavarte las manos y lavar la tabla después de tocar el pollo crudo.`,
    ingredientes: [
      { c: 500, u: 'g', n: 'de pollo con hueso', nota: 'Muslos, contramuslos o pechuga con hueso, sin piel.' },
      { c: 8, u: 'taza|tazas', n: 'de agua fría' },
      { c: 2, u: '', n: 'papa mediana|papas medianas' },
      { c: 1, u: '', n: 'zanahoria grande|zanahorias grandes' },
      { c: 2, u: '', n: 'tallo de cebolla larga|tallos de cebolla larga' },
      { c: 2, u: '', n: 'diente de ajo|dientes de ajo' },
      { c: 2, u: 'cucharadita|cucharaditas', n: 'de sal' },
      { c: 0.5, u: 'taza|tazas', n: 'de fideos delgados', nota: 'Opcional.' },
      { n: 'Cilantro fresco picado' }
    ],
    utensilios: ['Olla grande con tapa', 'Tabla y cuchillo', 'Pelador', 'Cucharón', 'Dos tenedores (para desmechar)', 'Un plato hondo'],
    pasos: [
      {
        t: 'Pon el pollo en agua fría',
        d: `Pon el pollo en la olla y cúbrelo con las 8 tazas de agua fría. Agrega los tallos de cebolla enteros, los ajos aplastados y pelados, y la sal. Enciende el fuego en alto.`,
        c: `Al empezar en frío, el pollo va soltando su sabor al agua poco a poco. Si lo echas en agua hirviendo, se sella y el caldo queda soso.`
      },
      {
        t: 'Retira la espuma cuando hierva',
        d: `Cuando empiece a hervir verás subir una espuma gris. Quítala con una cuchara y bótala. Repite hasta que casi no salga más, unos 2 o 3 minutos.`,
        c: `Esa espuma son proteínas del pollo. No hace daño, pero si la dejas el caldo queda turbio.`
      },
      {
        t: 'Cocina a fuego bajo',
        d: `Baja el fuego a bajo, tapa dejando una rendija y cocina 25 minutos.`,
        s: `Burbujas pequeñas y lentas. Si hierve con fuerza, el pollo queda duro y el caldo turbio.`,
        m: 25
      },
      {
        t: 'Mientras tanto, corta las verduras',
        d: `Pela las papas y córtalas en cubos de 2 centímetros; déjalas en agua para que no se oscurezcan. Pela la zanahoria y córtala en medias lunas de medio centímetro.`,
        c: `Trata de que los trozos de cada verdura queden de tamaño parecido para que se cocinen al mismo tiempo.`
      },
      {
        t: 'Saca el pollo y agrega las verduras',
        d: `Saca el pollo a un plato hondo y retira la cebolla del caldo. Agrega la papa escurrida y la zanahoria. Sube el fuego hasta que vuelva a hervir y luego bájalo otra vez. Cocina 15 minutos.`,
        m: 15
      },
      {
        t: 'Desmecha el pollo',
        d: `Cuando el pollo se pueda tocar sin quemarte, sujeta la presa con un tenedor y con el otro jala la carne en hilos, siguiendo la dirección de las fibras. Bota los huesos y los cartílagos.`,
        s: `La carne se separa del hueso sin esfuerzo y por dentro se ve blanca, sin partes rosadas.`
      },
      {
        t: 'Agrega los fideos y el pollo',
        d: `Echa los fideos al caldo y cocina 4 minutos, revolviendo al principio para que no se peguen. Devuelve el pollo desmechado a la olla y deja que se caliente 1 minuto.`,
        s: `La papa se parte fácil con la cuchara y los fideos están blandos.`,
        m: 4
      },
      {
        t: 'Prueba, corrige y sirve',
        d: `Prueba el caldo y agrega sal de a pizcas si hace falta. Apaga el fuego y sirve con cilantro picado por encima.`,
        c: `Unas gotas de limón en el plato le levantan mucho el sabor.`
      }
    ],
    guardar: `Dura 3 días en la nevera. Si la vas a guardar, cocina los fideos aparte y agrégalos al servir: dentro del caldo se inflan y se deshacen.`
  },

  // ---------------------------------------------------------- ENSALADA
  {
    id: 'ensalada-fresca',
    nombre: 'Ensalada fresca con vinagreta de limón',
    emoji: '🥗',
    categoria: 'Ensaladas',
    dificultad: 'Fácil',
    prep: 20,
    coccion: 0,
    porciones: 2,
    descripcion: 'Crujiente, fresca y sin cocinar nada. Aprende de paso a hacer una vinagreta que sirve para cualquier ensalada.',
    antes: `Una buena ensalada depende de tres cosas: hojas <strong>bien secas</strong>, vinagreta bien mezclada y aliñarla justo antes de comer. La fórmula de la vinagreta es fácil de recordar: 3 partes de aceite por 1 de ácido (limón o vinagre).`,
    ingredientes: [
      { c: 1, u: '', n: 'lechuga pequeña|lechugas pequeñas', nota: 'Unas 4 tazas de hojas.' },
      { c: 2, u: '', n: 'tomate maduro pero firme|tomates maduros pero firmes' },
      { c: 1, u: '', n: 'pepino|pepinos' },
      { c: 0.25, u: '', n: 'de cebolla morada' },
      { c: 1, u: '', n: 'aguacate maduro|aguacates maduros' },
      { c: 1, u: '', n: 'limón grande|limones grandes', nota: 'Necesitas 1 cucharada de jugo.' },
      { c: 3, u: 'cucharada|cucharadas', n: 'de aceite de oliva' },
      { c: 0.5, u: 'cucharadita|cucharaditas', n: 'de sal' },
      { c: 1, u: 'cucharadita|cucharaditas', n: 'de miel o azúcar', nota: 'Opcional, equilibra la acidez.' }
    ],
    utensilios: ['Ensaladera o tazón grande', 'Tabla y cuchillo', 'Frasco pequeño con tapa', 'Limpión limpio o papel de cocina', 'Tazón pequeño'],
    pasos: [
      {
        t: 'Remoja la cebolla',
        d: `Corta la cebolla morada en tiras lo más delgadas que puedas. Ponlas en un tazón pequeño con agua fría y una pizca de sal, y déjalas ahí mientras preparas lo demás (unos 10 minutos).`,
        c: `El remojo le quita el picor fuerte y el sabor que "repite". Queda crujiente y suave.`
      },
      {
        t: 'Lava y seca la lechuga',
        d: `Separa las hojas y lávalas una por una bajo el chorro de agua fría. Sacúdelas y sécalas muy bien: extiéndelas sobre un limpión limpio, enróllalo sin apretar y da unas palmaditas. Luego rómpelas con las manos en trozos de bocado.`,
        e: `Si las hojas quedan mojadas, la vinagreta resbala, se va al fondo y la ensalada queda aguada y sin sabor.`
      },
      {
        t: 'Corta el tomate y el pepino',
        d: `Corta los tomates en gajos o en cubos grandes. Lava el pepino, córtalo a lo largo por la mitad y luego en medias lunas de medio centímetro. Pon todo en la ensaladera con la lechuga.`,
        c: `Si la cáscara del pepino está gruesa o amarga, pélalo. Si es delgada, déjala: da color y crujiente.`
      },
      {
        t: 'Prepara la vinagreta',
        d: `En el frasco pon 1 cucharada de jugo de limón, la sal y la miel. Agita unos segundos para disolver la sal. Agrega las 3 cucharadas de aceite, tapa bien y agita con fuerza durante 15 segundos.`,
        s: `La mezcla se ve turbia, de un solo color y un poco espesa, sin el aceite flotando separado.`,
        c: `Pruébala mojando una hoja de lechuga, no con cuchara: así sabes cómo va a saber de verdad. Si se separa con el rato, vuelve a agitar.`
      },
      {
        t: 'Corta el aguacate al final',
        d: `Corta el aguacate alrededor del hueso, gira las mitades y sepáralas. Saca el hueso empujándolo con una cuchara. Con la punta del cuchillo marca cuadros en la pulpa sin romper la cáscara y sácalos con la cuchara.`,
        e: `El aguacate se oscurece rápido al contacto con el aire. Por eso se corta de último.`
      },
      {
        t: 'Aliña y mezcla justo antes de servir',
        d: `Escurre la cebolla y agrégala a la ensaladera. Echa la mitad de la vinagreta y mezcla con las manos limpias o dos cucharas, levantando desde el fondo, con suavidad. Prueba una hoja y agrega más vinagreta si quieres. Pon el aguacate encima al final.`,
        s: `Las hojas se ven brillantes, apenas cubiertas, y no queda un charco de vinagreta en el fondo.`,
        e: `No la aliñes con anticipación: la sal y el limón sacan el agua de las hojas y en 15 minutos quedan lacias.`
      }
    ],
    guardar: `Ya aliñada no se conserva bien. Si quieres adelantar, guarda las verduras cortadas (sin aguacate) y la vinagreta por separado en la nevera, hasta 1 día.`
  },

  // ---------------------------------------------------------- GUACAMOLE
  {
    id: 'guacamole',
    nombre: 'Guacamole',
    emoji: '🥑',
    categoria: 'Pasabocas',
    dificultad: 'Fácil',
    prep: 12,
    coccion: 0,
    porciones: 4,
    descripcion: 'Cremoso pero con trocitos, con el punto justo de limón y sal. Listo en 10 minutos.',
    antes: `Todo depende de que el aguacate esté en su punto. <strong>Cómo elegirlo:</strong> al apretarlo suave con toda la mano debe ceder un poquito, como la punta de tu nariz. Si está duro como una piedra, le faltan días; si se hunde, ya se pasó.`,
    ingredientes: [
      { c: 3, u: '', n: 'aguacate maduro|aguacates maduros' },
      { c: 1, u: '', n: 'tomate maduro pero firme|tomates maduros pero firmes' },
      { c: 0.25, u: '', n: 'de cebolla blanca o morada' },
      { c: 2, u: 'cucharada|cucharadas', n: 'de cilantro fresco picado' },
      { c: 1, u: '', n: 'limón|limones' },
      { c: 0.5, u: 'cucharadita|cucharaditas', n: 'de sal' },
      { n: 'Ají o chile picado', nota: 'Opcional.' }
    ],
    utensilios: ['Tazón mediano', 'Tabla y cuchillo', 'Tenedor', 'Cuchara'],
    pasos: [
      {
        t: 'Pica la cebolla y el cilantro',
        d: `Pica la cebolla en cuadritos muy pequeños, lo más finos que puedas: nadie quiere morder un trozo grande de cebolla cruda. Lava el cilantro, sécalo y pica las hojas y los tallos delgados.`
      },
      {
        t: 'Pica el tomate sin las semillas',
        d: `Corta el tomate en cuatro, quítale con una cuchara las semillas y la parte aguada, y pica solo la pulpa firme en cuadritos pequeños.`,
        c: `Las semillas tienen mucha agua y dejarían el guacamole aguado.`
      },
      {
        t: 'Abre los aguacates',
        d: `Apoya el aguacate en la tabla y córtalo a lo largo hasta tocar el hueso, dándole la vuelta completa. Gira las dos mitades en sentido contrario y sepáralas. Saca el hueso empujándolo con la cuchara y luego saca toda la pulpa al tazón.`,
        e: `No claves el cuchillo en el hueso con el aguacate en la mano: es una de las cortadas más comunes en la cocina. La cuchara funciona igual.`
      },
      {
        t: 'Agrega limón y sal, y aplasta',
        d: `Exprime el jugo de medio limón sobre el aguacate y agrega la sal. Aplasta con el tenedor contra el fondo del tazón.`,
        s: `Queda una crema con algunos trocitos enteros del tamaño de un garbanzo. No debe quedar un puré liso.`,
        c: `El limón da sabor y además retrasa que el aguacate se ponga oscuro.`
      },
      {
        t: 'Mezcla el resto',
        d: `Agrega la cebolla, el tomate, el cilantro y el ají si lo usas. Mezcla con la cuchara con movimientos suaves, solo hasta repartir todo.`
      },
      {
        t: 'Prueba y corrige',
        d: `Pruébalo, idealmente con lo mismo con que lo vas a comer (un nacho, un patacón). ¿Sabe plano? Le falta sal. ¿Sabe pesado? Le falta limón. Corrige de a poquitos y vuelve a probar.`,
        c: `Sírvelo pronto. Va con nachos, patacones, arepas, tacos o encima de una carne.`
      }
    ],
    guardar: `Pásalo a un recipiente, aplánalo y pega papel film directamente sobre la superficie para que no le toque el aire. Así aguanta 1 día en la nevera; si la capa de arriba se oscurece, ráspala y debajo sigue verde.`
  },

  // ---------------------------------------------------------- CARNE MOLIDA
  {
    id: 'carne-molida',
    nombre: 'Carne molida guisada',
    emoji: '🥘',
    categoria: 'Platos fuertes',
    dificultad: 'Fácil',
    prep: 10,
    coccion: 25,
    porciones: 4,
    descripcion: 'Jugosa y con mucho sabor. Sirve con arroz, para rellenar arepas, tacos, empanadas o encima de una pasta.',
    antes: `La diferencia entre una carne molida sabrosa y una gris y sin gracia está en <strong>dorarla de verdad</strong>: sartén bien caliente, sin amontonar y sin moverla al principio.`,
    ingredientes: [
      { c: 500, u: 'g', n: 'de carne molida de res' },
      { c: 1, u: '', n: 'cebolla cabezona mediana|cebollas cabezonas medianas' },
      { c: 2, u: '', n: 'tomate maduro|tomates maduros' },
      { c: 2, u: '', n: 'diente de ajo|dientes de ajo' },
      { c: 1, u: 'cucharada|cucharadas', n: 'de aceite' },
      { c: 1, u: 'cucharadita|cucharaditas', n: 'de comino molido' },
      { c: 1, u: 'cucharadita|cucharaditas', n: 'de sal' },
      { c: 0.5, u: 'taza|tazas', n: 'de agua' },
      { n: 'Pimienta al gusto' }
    ],
    utensilios: ['Sartén grande y honda', 'Tabla y cuchillo', 'Cuchara de palo', 'Papel de cocina'],
    pasos: [
      {
        t: 'Prepara las verduras y la carne',
        d: `Pica la cebolla y el tomate en cuadritos pequeños y el ajo bien fino. Saca la carne del empaque y sécala por encima con papel de cocina.`,
        c: `Saca la carne de la nevera 10 minutos antes. Fría y mojada, enfría la sartén y suelta agua en lugar de dorarse.`
      },
      {
        t: 'Calienta bien la sartén',
        d: `Pon la sartén a fuego alto durante 2 minutos, agrega el aceite y espera 20 segundos más.`,
        s: `El aceite corre como agua y hace ondas. Una gota de agua chisporrotea al instante.`,
        m: 2
      },
      {
        t: 'Pon la carne y no la muevas',
        d: `Reparte la carne por toda la sartén en trozos grandes, sin amontonarla. Déjala quieta 2 minutos completos, sin revolver.`,
        s: `Suena fuerte y constante. Al levantar un trozo, por debajo está café dorado, no gris.`,
        e: `Si revuelves desde el principio, la carne suelta su jugo, se cocina hervida y queda gris y seca.`,
        m: 2
      },
      {
        t: 'Desbarata y termina de dorar',
        d: `Ahora sí, rompe la carne con la cuchara de palo en trocitos y voltéala. Sigue cocinando 5 a 6 minutos, revolviendo cada minuto.`,
        s: `Ya no queda nada rosado, el líquido que soltó se evaporó y vuelve a sonar a fritura.`,
        m: 6
      },
      {
        t: 'Sofríe la cebolla y el ajo',
        d: `Baja el fuego a medio. Empuja la carne hacia los bordes para dejar un hueco en el centro. Pon ahí la cebolla y cocínala 3 minutos; luego agrega el ajo 30 segundos y mezcla todo con la carne.`,
        s: `La cebolla está blanda y transparente.`,
        m: 3
      },
      {
        t: 'Agrega el tomate y los condimentos',
        d: `Echa el tomate, el comino, la sal y un poco de pimienta. Revuelve y cocina 3 minutos hasta que el tomate se deshaga.`,
        m: 3
      },
      {
        t: 'Agrega el agua y deja guisar',
        d: `Vierte la media taza de agua y raspa el fondo de la sartén con la cuchara para despegar lo doradito (ahí hay mucho sabor). Baja el fuego a bajo y cocina destapado 8 a 10 minutos.`,
        s: `Queda jugosa, con una salsita espesa que cubre la carne, sin caldo corriendo por la sartén.`,
        m: 10
      },
      {
        t: 'Prueba y sirve',
        d: `Prueba y corrige la sal. Si quedó muy seca, agrégale 2 cucharadas de agua; si quedó aguada, cocínala 2 minutos más a fuego medio.`
      }
    ],
    guardar: `Dura 3 días en la nevera y 3 meses congelada. Es ideal para hacer de más y tener almuerzos listos.`
  },

  // ---------------------------------------------------------- PESCADO
  {
    id: 'pescado-ajillo',
    nombre: 'Filete de pescado al ajillo',
    emoji: '🐟',
    categoria: 'Platos fuertes',
    dificultad: 'Media',
    prep: 10,
    coccion: 8,
    porciones: 2,
    descripcion: 'Filete dorado bañado en mantequilla con ajo y limón. Parece de restaurante y se hace en 8 minutos.',
    antes: `El pescado se cocina muy rápido y es delicado. Las claves: <strong>secarlo bien</strong>, sartén antiadherente caliente, voltearlo una sola vez y no pasarse de tiempo. Ten todo listo antes de prender el fuego.`,
    ingredientes: [
      { c: 2, u: '', n: 'filete de pescado blanco|filetes de pescado blanco', nota: 'Tilapia, merluza, corvina… de unos 150 g cada uno.' },
      { c: 3, u: '', n: 'diente de ajo|dientes de ajo' },
      { c: 1, u: 'cucharada|cucharadas', n: 'de aceite' },
      { c: 1, u: 'cucharada|cucharadas', n: 'de mantequilla' },
      { c: 1, u: '', n: 'limón|limones' },
      { c: 0.5, u: 'cucharadita|cucharaditas', n: 'de sal' },
      { n: 'Pimienta y perejil o cilantro picado' }
    ],
    utensilios: ['Sartén antiadherente grande', 'Espátula ancha y delgada', 'Papel de cocina', 'Tabla y cuchillo', 'Cuchara sopera'],
    pasos: [
      {
        t: 'Prepara el ajo y el limón',
        d: `Pela los ajos y córtalos en láminas delgadas. Corta el limón por la mitad. Déjalos al lado de la estufa, porque más adelante no habrá tiempo.`
      },
      {
        t: 'Seca y sazona el pescado',
        d: `Seca los filetes por los dos lados presionando con papel de cocina hasta que no se vean mojados. Pasa el dedo por el centro para sentir si queda alguna espina y sácala. Ponles sal y pimienta por ambos lados.`,
        e: `Un filete mojado se pega a la sartén, se rompe y no se dora.`
      },
      {
        t: 'Calienta la sartén',
        d: `Pon la sartén a fuego medio-alto 2 minutos. Agrega el aceite y espera a que brille y corra fácil.`,
        m: 2
      },
      {
        t: 'Dora el primer lado sin mover',
        d: `Coloca los filetes con el lado más bonito hacia abajo, alejándolos de ti al soltarlos. Presiónalos 5 segundos con la espátula para que queden planos. Déjalos sin mover 3 minutos.`,
        s: `Por los lados ves que el color pasa de transparente a blanco opaco, subiendo hasta la mitad del grosor. Los bordes se doran.`,
        m: 3
      },
      {
        t: 'Voltea con cuidado',
        d: `Desliza la espátula por debajo de todo el filete y voltéalo de un solo movimiento suave, apoyándote con un dedo o un tenedor por encima. Baja el fuego a medio.`,
        e: `Si se resiste, espera 30 segundos más: cuando está dorado se despega solo. Forzarlo lo rompe.`
      },
      {
        t: 'Agrega la mantequilla y el ajo',
        d: `Pon la mantequilla y el ajo en un lado libre de la sartén. Cuando la mantequilla haga espuma, inclina un poco la sartén y, con la cuchara, baña el pescado con esa mantequilla varias veces durante 2 minutos.`,
        s: `El ajo queda dorado claro y la mantequilla huele a nuez.`,
        e: `Si el ajo se oscurece rápido, retira la sartén del fuego: quemado amarga.`,
        m: 2
      },
      {
        t: 'Comprueba el punto',
        d: `Presiona suave la parte más gruesa del filete con un tenedor.`,
        s: `La carne se ve blanca y opaca hasta el centro (no transparente) y se separa en láminas con facilidad.`,
        c: `Sácalo apenas llegue a ese punto: un minuto de más y queda seco.`
      },
      {
        t: 'Termina con limón y sirve',
        d: `Apaga el fuego, exprime medio limón sobre la sartén y mueve para mezclar con la mantequilla. Pasa los filetes al plato, báñalos con la salsa y el ajo, y espolvorea el perejil. Sirve con el otro medio limón al lado.`
      }
    ],
    guardar: `El pescado sabe mejor recién hecho. Si sobra, guárdalo tapado en la nevera máximo 1 día y recaliéntalo suave, a fuego bajo.`
  },

  // ---------------------------------------------------------- ARROZ CON LECHE
  {
    id: 'arroz-con-leche',
    nombre: 'Arroz con leche',
    emoji: '🍮',
    categoria: 'Postres',
    dificultad: 'Fácil',
    prep: 5,
    coccion: 45,
    porciones: 6,
    descripcion: 'Cremoso, con canela y nada empalagoso. Un postre de abuela que solo pide paciencia y cuchara de palo.',
    antes: `Aquí, al contrario del arroz blanco, <strong>no laves el arroz</strong> y revuélvelo bastante: el almidón que suelta es lo que da la cremosidad. Usa una olla de fondo grueso para que la leche no se pegue.`,
    ingredientes: [
      { c: 1, u: 'taza|tazas', n: 'de arroz blanco' },
      { c: 2, u: 'taza|tazas', n: 'de agua' },
      { c: 4, u: 'taza|tazas', n: 'de leche entera' },
      { c: 0.75, u: 'taza|tazas', n: 'de azúcar' },
      { c: 1, u: '', n: 'astilla de canela|astillas de canela' },
      { n: 'Una pizca de sal' },
      { n: 'Canela en polvo para servir' },
      { n: 'Uvas pasas', nota: 'Opcional.' }
    ],
    utensilios: ['Olla mediana de fondo grueso', 'Cuchara de palo', 'Taza medidora', 'Recipiente o copas para servir'],
    pasos: [
      {
        t: 'Cocina el arroz en agua con canela',
        d: `Pon en la olla el arroz, las 2 tazas de agua, la astilla de canela y la pizca de sal. Lleva a hervir a fuego alto, luego baja a fuego medio-bajo y cocina destapado unos 10 minutos.`,
        s: `El arroz absorbió casi toda el agua y el grano ya está blando por fuera.`,
        c: `Se empieza con agua porque en leche pura el arroz tarda muchísimo en ablandarse.`,
        m: 10
      },
      {
        t: 'Agrega la leche',
        d: `Vierte las 4 tazas de leche y revuelve. Sube el fuego a medio hasta que empiece a burbujear por los bordes y entonces bájalo a bajo.`,
        e: `No te alejes en este momento: la leche sube de golpe al hervir y se riega en segundos.`
      },
      {
        t: 'Cocina a fuego bajo revolviendo',
        d: `Cocina 25 minutos a fuego bajo, destapado. Revuelve cada 2 o 3 minutos pasando la cuchara por todo el fondo y las esquinas de la olla.`,
        s: `La leche se va poniendo espesa y color crema, y el grano se ve inflado y muy blando.`,
        e: `Si dejas de revolver se pega al fondo y se quema, y ese sabor a ahumado se pasa a todo el postre. Si llega a pegarse, no raspes: cambia de olla.`,
        m: 25
      },
      {
        t: 'Agrega el azúcar',
        d: `Echa el azúcar (y las pasas si las usas) y revuelve. Cocina 5 minutos más sin dejar de mover.`,
        c: `El azúcar va al final porque si se pone desde el inicio el arroz queda duro y la mezcla se pega más fácil.`,
        m: 5
      },
      {
        t: 'Reconoce el punto',
        d: `Pasa la cuchara por el fondo de la olla, de lado a lado.`,
        s: `Se abre un camino que deja ver el fondo por un segundo antes de cerrarse. Todavía debe verse algo líquido, como una sopa cremosa.`,
        e: `No lo dejes espesar del todo en la olla: al enfriar espesa casi el doble y quedaría como un bloque.`
      },
      {
        t: 'Enfría y sirve',
        d: `Apaga, saca la astilla de canela y pasa el arroz a un recipiente o a copas. Déjalo entibiar 15 minutos. Se puede comer tibio o frío de nevera, con canela en polvo por encima.`,
        c: `Para que no se forme nata en la superficie, pégale papel film directamente encima mientras se enfría.`,
        m: 15
      }
    ],
    guardar: `Dura 4 días en la nevera, tapado. Si espesa demasiado, revuélvele un chorrito de leche antes de servir.`
  },

  // ---------------------------------------------------------- BROWNIES
  {
    id: 'brownies',
    nombre: 'Brownies de chocolate',
    emoji: '🍫',
    categoria: 'Postres',
    dificultad: 'Media',
    prep: 20,
    coccion: 25,
    porciones: 9,
    descripcion: 'Húmedos por dentro y con la costrita brillante por encima. Tu primera receta de horno sin miedo.',
    antes: `En repostería las cantidades sí importan: mide con cuidado. Usa un molde cuadrado de unos 20 × 20 cm. La regla de oro del brownie es <strong>sacarlo del horno antes de que parezca listo</strong>: se termina de cocinar con su propio calor.`,
    ingredientes: [
      { c: 150, u: 'g', n: 'de chocolate oscuro', nota: 'En barra, para repostería o de comer (50–70 % cacao).' },
      { c: 120, u: 'g', n: 'de mantequilla' },
      { c: 1, u: 'taza|tazas', n: 'de azúcar', nota: 'Unos 200 g.' },
      { c: 2, u: '', n: 'huevo|huevos', nota: 'A temperatura ambiente.' },
      { c: 1, u: 'cucharadita|cucharaditas', n: 'de esencia de vainilla' },
      { c: 0.75, u: 'taza|tazas', n: 'de harina de trigo', nota: 'Unos 95 g.' },
      { c: 0.25, u: 'cucharadita|cucharaditas', n: 'de sal' }
    ],
    utensilios: ['Molde cuadrado de 20 × 20 cm', 'Papel para hornear (o mantequilla y harina para el molde)', 'Tazón grande resistente al calor', 'Olla pequeña', 'Batidor de mano', 'Espátula', 'Un palillo'],
    pasos: [
      {
        t: 'Precalienta el horno y prepara el molde',
        d: `Enciende el horno a 180 °C con la rejilla en el centro. Forra el molde con papel para hornear dejando que sobre por dos lados, como unas asas. Si no tienes papel, úntalo de mantequilla y espolvoréalo con harina.`,
        c: `El horno necesita unos 15 minutos para llegar a la temperatura. Si metes la masa en un horno frío, el brownie queda mal cocido.`
      },
      {
        t: 'Derrite el chocolate con la mantequilla',
        d: `Parte el chocolate en trozos y ponlo con la mantequilla en el tazón. Coloca el tazón sobre una olla con dos dedos de agua hirviendo suave, sin que el fondo toque el agua (baño maría). Revuelve hasta que todo esté derretido y liso, y retíralo del calor.`,
        s: `Mezcla brillante, lisa y sin grumos.`,
        e: `Que no le caiga ni una gota de agua al chocolate y que no se caliente demasiado: se vuelve una pasta granulosa. En microondas: tandas de 20 segundos, revolviendo entre cada una.`
      },
      {
        t: 'Agrega el azúcar',
        d: `Echa el azúcar al chocolate derretido y mezcla con el batidor. Se va a ver arenoso, es normal. Deja reposar 3 minutos para que se entibie.`,
        e: `Si agregas los huevos con la mezcla muy caliente, se cocinan y quedan hilos de huevo.`,
        m: 3
      },
      {
        t: 'Agrega los huevos y bate con ganas',
        d: `Agrega un huevo y bate hasta que desaparezca. Agrega el otro huevo y la vainilla, y bate con fuerza durante 1 minuto completo.`,
        s: `La mezcla se vuelve más clara, brillante y espesa, y cae del batidor como una cinta.`,
        c: `Este batido es el secreto de la costrita brillante y crujiente de encima.`,
        m: 1
      },
      {
        t: 'Incorpora la harina con suavidad',
        d: `Agrega la harina y la sal. Cambia el batidor por la espátula y mezcla con movimientos envolventes (desde el fondo hacia arriba, girando el tazón) solo hasta que no se vea harina blanca.`,
        e: `Aquí ya no se bate. Si mezclas de más, el brownie queda seco y parecido a una torta.`
      },
      {
        t: 'Pasa al molde y hornea',
        d: `Vierte la masa en el molde, empújala hacia las esquinas y alisa la superficie. Hornea entre 22 y 25 minutos. No abras el horno durante los primeros 20 minutos.`,
        m: 22
      },
      {
        t: 'Haz la prueba del palillo',
        d: `A los 22 minutos, pincha con un palillo a medio camino entre el borde y el centro.`,
        s: `El palillo sale con migas húmedas pegadas (no con masa líquida). La superficie está opaca y agrietada, y el centro tiembla apenas un poquito al mover el molde.`,
        e: `Si el palillo sale totalmente limpio, ya se pasó y quedará seco. Si sale con masa líquida, dale 3 minutos más y repite.`
      },
      {
        t: 'Deja enfriar antes de cortar',
        d: `Saca el molde y déjalo enfriar sobre una rejilla o una tabla al menos 30 minutos. Luego levanta el brownie por las asas de papel y córtalo en 9 cuadros con un cuchillo grande.`,
        c: `Sé que provoca, pero caliente se desbarata: al enfriar termina de cuajar. Para cortes limpios, limpia el cuchillo con un paño húmedo entre corte y corte.`,
        m: 30
      }
    ],
    guardar: `En un recipiente hermético a temperatura ambiente duran 4 días; al segundo día están incluso más húmedos. Congelados y envueltos uno por uno duran 2 meses.`
  },

  // ---------------------------------------------------------- BATIDO
  {
    id: 'batido-banano',
    nombre: 'Batido de banano y avena',
    emoji: '🥤',
    categoria: 'Bebidas',
    dificultad: 'Fácil',
    prep: 8,
    coccion: 0,
    porciones: 2,
    descripcion: 'Cremoso, frío y llenador: un desayuno o merienda en un vaso, listo en menos de 10 minutos.',
    antes: `Entre más maduro el banano (con pintas negras en la cáscara), más dulce y cremoso queda el batido, y menos azúcar necesitas.`,
    ingredientes: [
      { c: 2, u: '', n: 'banano maduro|bananos maduros' },
      { c: 2, u: 'taza|tazas', n: 'de leche fría' },
      { c: 3, u: 'cucharada|cucharadas', n: 'de avena en hojuelas' },
      { c: 1, u: 'cucharada|cucharadas', n: 'de miel o azúcar', nota: 'Ajusta al gusto.' },
      { c: 0.5, u: 'cucharadita|cucharaditas', n: 'de canela en polvo' },
      { c: 4, u: '', n: 'cubo de hielo|cubos de hielo' }
    ],
    utensilios: ['Licuadora', 'Taza medidora', 'Dos vasos altos'],
    pasos: [
      {
        t: 'Remoja la avena en la leche',
        d: `Pon la leche y la avena en el vaso de la licuadora y déjalas reposar 5 minutos sin licuar.`,
        c: `La avena remojada se ablanda y se licúa mucho mejor: el batido queda sedoso y no arenoso.`,
        m: 5
      },
      {
        t: 'Agrega el banano y lo demás',
        d: `Pela los bananos, pártelos en trozos con la mano y échalos a la licuadora. Agrega la miel, la canela y el hielo.`,
        c: `Regla general de la licuadora: primero los líquidos, luego lo blando y arriba lo duro (hielo). Así las cuchillas agarran mejor.`
      },
      {
        t: 'Licúa',
        d: `Tapa bien y sujeta la tapa con la mano. Empieza en velocidad baja 10 segundos y luego sube a alta durante 40 a 50 segundos.`,
        s: `Ya no se oye el hielo golpeando, el color es parejo y arriba se forma una espuma cremosa.`,
        m: 1
      },
      {
        t: 'Prueba y ajusta',
        d: `Prueba con una cuchara. Si le falta dulce, agrega un poco más de miel. Si quedó muy espeso, agrega un chorrito de leche. Licúa 5 segundos más.`
      },
      {
        t: 'Sirve de inmediato',
        d: `Sirve en los vasos y espolvorea una pizca de canela por encima. Tómalo pronto.`,
        e: `El banano licuado se oscurece y la avena lo espesa con el paso de los minutos. No es para guardar.`
      }
    ],
    guardar: `Mejor recién hecho. Truco para la próxima: congela bananos maduros pelados y en trozos; con ellos el batido queda como malteada y no necesita hielo.`
  }

);
