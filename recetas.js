/* ============================================================
   RECETAS
   ------------------------------------------------------------
   Para agregar una receta, copia un bloque { ... } completo,
   pégalo al final (antes del "];") y cambia los datos.

   Ingredientes:
     c    = cantidad (número). Sin "c" = "al gusto".
     u    = unidad. "taza|tazas" = singular|plural.
     n    = nombre del ingrediente.
     nota = aclaración opcional.

   Pasos:
     t = título corto        d = explicación detallada
     s = cómo saber que va bien (opcional)
     c = consejo (opcional)  e = error común (opcional)
     m = minutos para el temporizador (opcional)
   ============================================================ */

var RECETAS = [

  // ---------------------------------------------------------- ARROZ BLANCO
  {
    id: 'arroz-blanco',
    nombre: 'Arroz blanco suelto',
    emoji: '🍚',
    categoria: 'Básicos',
    dificultad: 'Fácil',
    prep: 5,
    coccion: 30,
    porciones: 4,
    descripcion: 'El arroz de todos los días, suelto y sin pegarse, explicado para que salga bien desde la primera vez.',
    antes: `La regla de esta receta es <strong>1 taza de arroz por 2 tazas de agua</strong>, medidas con la misma taza. Usa una olla con tapa que cierre bien: el arroz se termina de cocinar con el vapor, y si la tapa deja escapar el vapor queda duro.`,
    ingredientes: [
      { c: 2, u: 'taza|tazas', n: 'de arroz blanco de grano largo' },
      { c: 4, u: 'taza|tazas', n: 'de agua', nota: 'Siempre el doble que de arroz, con la misma taza.' },
      { c: 1, u: 'cucharada|cucharadas', n: 'de aceite' },
      { c: 1, u: 'cucharadita|cucharaditas', n: 'de sal' },
      { c: 1, u: '', n: 'diente de ajo|dientes de ajo', nota: 'Opcional, da muy buen sabor.' }
    ],
    utensilios: ['Olla mediana con tapa', 'Taza para medir', 'Colador (o un tazón)', 'Cuchara de palo', 'Tenedor'],
    pasos: [
      {
        t: 'Mide el arroz y el agua',
        d: `Mide 2 tazas de arroz llenando la taza al ras, sin apretar ni dejar copete. Con esa misma taza mide 4 tazas de agua y déjalas aparte en un recipiente. Tener el agua ya medida evita que el arroz se queme mientras la buscas.`,
        c: `No importa de qué tamaño sea la taza, lo importante es que sea la misma para el arroz y para el agua.`
      },
      {
        t: 'Lava el arroz',
        d: `Pon el arroz en un colador y déjale correr agua fría mientras lo mueves con los dedos, unos 30 segundos. Si no tienes colador, ponlo en un tazón, cúbrelo de agua, revuélvelo con la mano, bota el agua con cuidado y repite 2 o 3 veces. Al final deja que escurra bien.`,
        s: `Al principio el agua sale blanca como leche. Está listo cuando sale casi transparente.`,
        c: `Ese polvo blanco es almidón suelto. Si no lo quitas, el arroz queda pegajoso y apelmazado.`
      },
      {
        t: 'Calienta el aceite y dora el ajo',
        d: `Pon la olla a fuego medio y agrega la cucharada de aceite. Espera unos 30 segundos a que se caliente. Aplasta el diente de ajo con la parte plana del cuchillo, quítale la cáscara y échalo entero a la olla. Muévelo unos 30 segundos.`,
        s: `El ajo empieza a oler rico y apenas toma un color dorado claro.`,
        e: `Si el ajo se pone café oscuro, se quemó y va a amargar todo el arroz. Sácalo y pon otro.`
      },
      {
        t: 'Sofríe el arroz',
        d: `Agrega el arroz escurrido a la olla y revuélvelo con la cuchara de palo durante 1 a 2 minutos, para que todos los granos se cubran de aceite.`,
        s: `Los granos pasan de verse transparentes a verse más blancos y opacos, y suenan "sequitos" al moverlos.`,
        c: `Este paso sella el grano y es el secreto para que quede suelto.`,
        m: 2
      },
      {
        t: 'Agrega el agua y la sal',
        d: `Echa las 4 tazas de agua de una sola vez (cuidado, puede salpicar y soltar vapor). Agrega la cucharadita de sal y revuelve una sola vez para repartirla. Sube el fuego a alto.`,
        c: `Prueba el agua con una cuchara: debe saber ligeramente salada, como una sopa suave. Es el único momento para corregir la sal.`,
        e: `Después de esta revuelta no vuelvas a mover el arroz. Si lo revuelves mientras se cocina, suelta almidón y queda como masa.`
      },
      {
        t: 'Deja hervir destapado hasta que el agua baje',
        d: `Con el fuego alto y la olla destapada, espera a que hierva con burbujas grandes. Déjalo hervir así, sin tocarlo, hasta que el agua baje al mismo nivel del arroz. Tarda entre 6 y 10 minutos según la olla y la estufa, así que quédate cerca mirando.`,
        s: `Ya no ves agua por encima: ves la superficie del arroz con huequitos (como cráteres) por donde sale vapor.`,
        e: `Si esperas a que se seque por completo, el arroz de abajo se pega y se quema. El momento es cuando aparecen los huequitos y todavía se ve humedad.`,
        m: 8
      },
      {
        t: 'Tapa y baja el fuego al mínimo',
        d: `Apenas veas los huequitos, baja el fuego al mínimo que dé tu estufa y tapa la olla. Déjalo así 15 minutos exactos. No destapes para mirar: cada vez que levantas la tapa se escapa el vapor que está cocinando el arroz.`,
        c: `Si tu tapa no cierra bien, pon un pedazo de papel aluminio o un limpión limpio entre la olla y la tapa (con las puntas dobladas hacia arriba, lejos del fuego).`,
        m: 15
      },
      {
        t: 'Apaga y deja reposar',
        d: `Apaga el fuego y deja la olla tapada, sin tocarla, 5 minutos más. En este reposo el grano termina de absorber la humedad y se pone firme.`,
        m: 5
      },
      {
        t: 'Esponja con un tenedor y sirve',
        d: `Destapa, saca el diente de ajo y pasa un tenedor suavemente por el arroz, levantándolo desde el fondo hacia arriba para separar los granos. Prueba un grano: debe estar blando por dentro, sin centro duro.`,
        s: `Los granos se ven enteros, separados y brillantes.`,
        c: `¿Quedó duro? Rocíale 3 cucharadas de agua caliente, tapa y déjalo 5 minutos más a fuego mínimo. ¿Quedó mojado? Déjalo destapado a fuego mínimo 3 minutos.`
      }
    ],
    guardar: `Deja enfriar el arroz y guárdalo en un recipiente tapado en la nevera antes de que pasen 2 horas. Dura hasta 3 días. Para recalentarlo, agrégale una cucharada de agua y caliéntalo tapado hasta que esté bien caliente.`
  },

  // ---------------------------------------------------------- HUEVOS PERICOS
  {
    id: 'huevos-pericos',
    nombre: 'Huevos revueltos con tomate y cebolla',
    emoji: '🍳',
    categoria: 'Desayunos',
    dificultad: 'Fácil',
    prep: 8,
    coccion: 8,
    porciones: 2,
    descripcion: 'Huevos pericos cremosos y jugosos. El truco está en cocinar primero las verduras y luego los huevos a fuego bajo.',
    antes: `Los huevos se cocinan en menos de 2 minutos, así que ten todo picado y listo antes de prender la estufa. Los errores más comunes son el fuego muy alto y dejarlos demasiado tiempo: quedan secos y gomosos.`,
    ingredientes: [
      { c: 4, u: '', n: 'huevo|huevos' },
      { c: 2, u: '', n: 'tomate maduro mediano|tomates maduros medianos' },
      { c: 2, u: '', n: 'tallo de cebolla larga|tallos de cebolla larga', nota: 'O media cebolla blanca.' },
      { c: 1, u: 'cucharada|cucharadas', n: 'de mantequilla o aceite' },
      { c: 0.5, u: 'cucharadita|cucharaditas', n: 'de sal', nota: 'Repartida: una pizca para las verduras y el resto para los huevos.' }
    ],
    utensilios: ['Sartén antiadherente mediana', 'Tabla y cuchillo', 'Tazón pequeño', 'Tenedor', 'Espátula o cuchara de palo'],
    pasos: [
      {
        t: 'Pica la cebolla',
        d: `Lava la cebolla larga, córtale la raíz y las puntas marchitas. Córtala en rodajas finitas, de unos 2 o 3 milímetros, usando la parte blanca y la verde clara. Si usas cebolla blanca, pícala en cuadritos pequeños.`,
        c: `Dobla los dedos de la mano que sostiene la cebolla hacia adentro, como una garra, para que el cuchillo roce los nudillos y no las yemas.`
      },
      {
        t: 'Pica el tomate',
        d: `Lava los tomates, córtalos por la mitad y quítales el centro duro donde estaba el tallo. Corta cada mitad en tiras y luego en cuadritos de más o menos 1 centímetro. No hace falta pelarlos ni quitarles las semillas.`,
        c: `Entre más maduro y rojo el tomate, más sabor y más jugo.`
      },
      {
        t: 'Bate los huevos',
        d: `Rompe los 4 huevos en un tazón (golpea cada uno contra una superficie plana, no contra el borde, así caen menos cáscaras). Agrega una pizca de sal y bátelos con el tenedor unos 20 segundos.`,
        s: `La yema y la clara están mezcladas en un solo color amarillo, sin hilos transparentes de clara.`,
        c: `Si cae un pedacito de cáscara, sácalo usando media cáscara como cuchara: funciona mucho mejor que el dedo.`
      },
      {
        t: 'Sofríe la cebolla',
        d: `Pon la sartén a fuego medio y agrega la mantequilla o el aceite. Cuando la mantequilla se derrita y haga espumita, echa la cebolla. Muévela de vez en cuando durante 2 minutos.`,
        s: `La cebolla se ve blandita, brillante y casi transparente, sin dorarse.`,
        e: `Si la cebolla se pone café muy rápido, el fuego está muy alto. Bájalo.`,
        m: 2
      },
      {
        t: 'Agrega el tomate y deja que suelte el jugo',
        d: `Echa el tomate picado y una pizca de sal. Revuelve y cocina 3 a 4 minutos, moviendo de vez en cuando. El tomate primero suelta mucho líquido y después ese líquido se va secando.`,
        s: `El tomate está deshecho y la mezcla parece una salsita espesa, sin charco de agua en el fondo.`,
        e: `Si echas los huevos cuando todavía hay mucho líquido, quedan aguados y pálidos.`,
        m: 4
      },
      {
        t: 'Baja el fuego y agrega los huevos',
        d: `Baja el fuego a bajo. Vierte los huevos batidos sobre las verduras y no los toques durante 15 a 20 segundos, hasta que veas que los bordes empiezan a cuajar (a ponerse sólidos y más claros).`
      },
      {
        t: 'Revuelve suave y retira antes de que se sequen',
        d: `Con la espátula, empuja el huevo desde los bordes hacia el centro, despacio, formando pliegues grandes. Espera unos segundos y repite. En total esto toma entre 1 y 2 minutos. Apaga el fuego cuando todavía se vean un poquito húmedos y brillantes.`,
        s: `Se ven cremosos, en trozos suaves, con brillo. Ya no hay huevo líquido corriendo por la sartén.`,
        e: `No esperes a que se vean totalmente secos en la sartén: el calor que guardan los sigue cocinando y en el plato quedarían duros.`
      },
      {
        t: 'Sirve de inmediato',
        d: `Pásalos enseguida al plato para que la sartén caliente no los siga cocinando. Prueba y, si hace falta, agrega una pizca más de sal. Van muy bien con arepa, pan o arroz.`
      }
    ],
    guardar: `Los huevos revueltos saben mejor recién hechos. Si sobran, guárdalos tapados en la nevera máximo 1 día y recaliéntalos a fuego bajo con unas gotas de agua.`
  },

  // ---------------------------------------------------------- PASTA
  {
    id: 'pasta-tomate',
    nombre: 'Pasta con salsa de tomate casera',
    emoji: '🍝',
    categoria: 'Platos fuertes',
    dificultad: 'Fácil',
    prep: 10,
    coccion: 30,
    porciones: 4,
    descripcion: 'Espaguetis al dente con una salsa de tomate y ajo hecha desde cero. Pocos ingredientes, mucho sabor.',
    antes: `Vas a trabajar con dos fuegos a la vez: la salsa en una sartén y el agua de la pasta en una olla. Primero se arranca la salsa, y mientras se cocina sola pones a hervir el agua. Usa la olla más grande que tengas: la pasta necesita mucha agua para no pegarse.`,
    ingredientes: [
      { c: 400, u: 'g', n: 'de espaguetis' },
      { c: 800, u: 'g', n: 'de tomate triturado en lata', nota: 'O 1 kilo de tomates muy maduros, rallados.' },
      { c: 3, u: '', n: 'diente de ajo|dientes de ajo' },
      { c: 3, u: 'cucharada|cucharadas', n: 'de aceite de oliva' },
      { c: 1, u: 'cucharadita|cucharaditas', n: 'de sal para la salsa' },
      { c: 2, u: 'cucharada|cucharadas', n: 'de sal para el agua de la pasta' },
      { c: 0.5, u: 'cucharadita|cucharaditas', n: 'de azúcar', nota: 'Opcional, solo si la salsa queda ácida.' },
      { n: 'Hojas de albahaca fresca u orégano seco' },
      { n: 'Queso parmesano rallado para servir' }
    ],
    utensilios: ['Olla grande (de 4 litros o más)', 'Sartén grande y honda', 'Tabla y cuchillo', 'Cuchara de palo', 'Colador grande', 'Una taza (para guardar agua de la cocción)', 'Pinzas o tenedor grande'],
    pasos: [
      {
        t: 'Pica el ajo',
        d: `Aplasta cada diente de ajo con la parte plana del cuchillo para que la cáscara se suelte sola. Quítala y corta el ajo en láminas delgadas o en trocitos pequeños.`,
        c: `En láminas el sabor queda más suave; picado muy fino queda más fuerte. Las dos formas funcionan.`
      },
      {
        t: 'Calienta el ajo en el aceite, empezando en frío',
        d: `Pon el aceite y el ajo en la sartén todavía fría y entonces enciende el fuego a medio-bajo. Así el ajo se calienta poco a poco y le pasa el sabor al aceite sin quemarse. Muévelo de vez en cuando durante unos 2 minutos.`,
        s: `Salen burbujitas pequeñas alrededor del ajo, huele delicioso y apenas empieza a dorarse por los bordes.`,
        e: `El ajo quemado (café oscuro) amarga toda la salsa y no tiene arreglo: toca botarlo y empezar de nuevo. En cuanto tome color, pasa al siguiente paso.`,
        m: 2
      },
      {
        t: 'Agrega el tomate',
        d: `Vierte el tomate triturado con cuidado, porque salpica al tocar el aceite caliente. Agrega la cucharadita de sal y revuelve. Sube el fuego a medio hasta que empiece a burbujear.`,
        c: `Enjuaga la lata con un chorrito de agua y échalo también a la sartén para aprovechar todo el tomate.`
      },
      {
        t: 'Cocina la salsa a fuego bajo',
        d: `Cuando burbujee, baja el fuego a bajo y déjala cocinar destapada 20 minutos. Revuelve cada 4 o 5 minutos raspando el fondo para que no se pegue. Mientras tanto, sigue con el paso siguiente.`,
        s: `La salsa pasa de roja brillante y aguada a un rojo más oscuro y espeso. Al pasar la cuchara por el fondo queda un camino que tarda un segundo en cerrarse.`,
        c: `Pruébala al final. Si está ácida, agrégale la media cucharadita de azúcar y revuelve.`,
        m: 20
      },
      {
        t: 'Pon a hervir el agua de la pasta',
        d: `Mientras la salsa se cocina, llena la olla grande con unos 4 litros de agua, tápala y ponla a fuego alto. Tapada hierve más rápido. Tarda entre 8 y 12 minutos.`,
        s: `Hierve "a borbotones": burbujas grandes y constantes que no paran aunque revuelvas.`
      },
      {
        t: 'Sala el agua y echa la pasta',
        d: `Cuando el agua hierva fuerte, agrega las 2 cucharadas de sal y luego los espaguetis. No los partas: en unos 30 segundos la parte sumergida se ablanda, y entonces los empujas suavemente con la cuchara hasta que queden todos bajo el agua. Revuelve bien durante el primer minuto.`,
        c: `Parece mucha sal, pero casi toda se queda en el agua. Es la única oportunidad de que la pasta tenga sabor por dentro.`,
        e: `No le eches aceite al agua: no evita que se pegue y hace que la salsa resbale. Lo que evita que se pegue es revolver al principio.`
      },
      {
        t: 'Cocina la pasta al dente',
        d: `Mira en el paquete el tiempo de cocción y réstale 1 minuto (si dice 10, cocínala 9). Déjala hervir destapada a fuego alto, revolviendo cada 2 o 3 minutos. Un minuto antes de que termine, saca un espagueti, déjalo enfriar un poco y muérdelo.`,
        s: `"Al dente" significa blanda por fuera pero con un poquito de resistencia en el centro al morderla. Sin centro blanco y duro, pero tampoco deshecha.`,
        m: 9
      },
      {
        t: 'Guarda una taza del agua y escurre',
        d: `Antes de escurrir, saca con cuidado una taza del agua donde se cocinó la pasta y déjala aparte. Luego vacía la olla en el colador puesto dentro del lavaplatos, echando la cara hacia atrás para que el vapor no te queme.`,
        c: `Esa agua tiene almidón de la pasta y sirve para que la salsa quede sedosa y se pegue al espagueti.`,
        e: `No enjuagues la pasta con agua fría: le quitas el almidón y la salsa ya no se le agarra.`
      },
      {
        t: 'Termina la pasta dentro de la salsa',
        d: `Pasa la pasta escurrida a la sartén de la salsa, con el fuego en medio. Agrega unas 4 cucharadas del agua que guardaste y mezcla levantando la pasta con las pinzas o el tenedor durante 1 a 2 minutos. Si se ve seca, agrega un poco más de agua.`,
        s: `La salsa cubre cada espagueti de manera pareja y no queda un charco aguado en el fondo.`,
        m: 2
      },
      {
        t: 'Sirve con albahaca y queso',
        d: `Apaga el fuego. Rompe unas hojas de albahaca con las manos y mézclalas con la pasta (o espolvorea orégano). Sirve de inmediato en platos y pon el queso rallado por encima.`,
        c: `Para servir bonito, enrolla una porción de pasta en el tenedor grande apoyándolo en un cucharón y deslízala al plato.`
      }
    ],
    guardar: `La pasta ya mezclada dura 2 días en la nevera en un recipiente tapado; recaliéntala en sartén con un chorrito de agua. La salsa sola dura 5 días en la nevera o 3 meses congelada.`
  },

  // ---------------------------------------------------------- POLLO
  {
    id: 'pollo-plancha',
    nombre: 'Pechuga de pollo a la plancha jugosa',
    emoji: '🍗',
    categoria: 'Platos fuertes',
    dificultad: 'Media',
    prep: 25,
    coccion: 12,
    porciones: 2,
    descripcion: 'Pechuga dorada por fuera y jugosa por dentro. Tres secretos: grosor parejo, sartén bien caliente y dejarla reposar.',
    antes: `<strong>Higiene con el pollo crudo:</strong> no laves el pollo bajo la llave (salpica bacterias por toda la cocina; el calor de la cocción es lo que las elimina). Lávate las manos con jabón después de tocarlo, y lava con agua caliente y jabón la tabla y el cuchillo antes de usarlos para otra cosa.`,
    ingredientes: [
      { c: 2, u: '', n: 'pechuga de pollo sin piel ni hueso|pechugas de pollo sin piel ni hueso', nota: 'De unos 200 g cada una.' },
      { c: 1, u: 'cucharadita|cucharaditas', n: 'de sal' },
      { c: 0.5, u: 'cucharadita|cucharaditas', n: 'de pimienta' },
      { c: 1, u: 'cucharadita|cucharaditas', n: 'de paprika o pimentón dulce', nota: 'Opcional, da color y sabor.' },
      { c: 0.5, u: 'cucharadita|cucharaditas', n: 'de ajo en polvo', nota: 'Opcional.' },
      { c: 1, u: 'cucharada|cucharadas', n: 'de aceite' }
    ],
    utensilios: ['Sartén pesada o plancha', 'Tabla y cuchillo afilado', 'Papel de cocina', 'Pinzas o espátula', 'Un plato limpio para el reposo', 'Bolsa plástica o papel film (para aplanar)'],
    pasos: [
      {
        t: 'Saca el pollo de la nevera',
        d: `Saca las pechugas de la nevera 15 minutos antes de cocinarlas y déjalas en un plato. Si entran heladas a la sartén, se doran por fuera mientras el centro sigue crudo.`,
        e: `No lo dejes afuera más de 30 minutos: el pollo crudo no debe estar mucho tiempo a temperatura ambiente.`,
        m: 15
      },
      {
        t: 'Deja las pechugas de un grosor parejo',
        d: `Una pechuga es gruesa de un lado y delgada del otro, y por eso un extremo se seca mientras el otro sigue crudo. Métela en una bolsa plástica o entre dos hojas de papel film y golpea la parte gruesa con el fondo de una olla pequeña o un rodillo, hasta que toda quede de más o menos 1,5 centímetros (el ancho de un dedo). Si es muy grande, mejor córtala a lo largo en dos filetes delgados.`,
        s: `Al mirarla de lado, se ve del mismo alto de punta a punta.`,
        c: `Este es el paso que más cambia el resultado. No hace falta fuerza: golpes firmes y parejos, del centro hacia afuera.`
      },
      {
        t: 'Sécalas muy bien',
        d: `Seca las pechugas por los dos lados presionando con papel de cocina, hasta que la superficie ya no se vea mojada. Bota el papel y lávate las manos.`,
        c: `Si el pollo entra mojado a la sartén, primero se evapora el agua y el pollo se cocina al vapor: queda gris y pálido en vez de dorado.`
      },
      {
        t: 'Sazona por los dos lados',
        d: `Mezcla en un platico la sal, la pimienta, la paprika y el ajo en polvo. Espolvorea la mitad sobre un lado de las pechugas desde unos 20 centímetros de altura para que caiga parejo, voltéalas y espolvorea el resto. Presiona suavemente con la mano para que se pegue.`
      },
      {
        t: 'Calienta bien la sartén',
        d: `Pon la sartén vacía a fuego medio-alto durante 2 minutos. Luego agrega el aceite y muévela para que cubra todo el fondo. Espera 30 segundos más.`,
        s: `El aceite se ve brillante, corre como agua y hace ondas suaves. Si echas una gotica de agua, chisporrotea al instante.`,
        e: `Si el aceite echa humo, se pasó de caliente: retira la sartén del fuego unos segundos y baja un poco la llama.`,
        m: 2
      },
      {
        t: 'Pon el pollo y no lo muevas',
        d: `Coloca las pechugas en la sartén, apoyándolas primero del lado más cercano a ti y dejándolas caer hacia el fondo para que el aceite no te salpique. Debe sonar fuerte. Ahora no las toques, no las muevas y no las aplastes durante 5 minutos.`,
        s: `Se escucha un chisporroteo constante. Por los lados ves que el color blanco va subiendo desde abajo hasta casi la mitad del grosor.`,
        e: `Si intentas voltearla y está pegada, todavía no está lista: cuando se forma la costra dorada, se suelta sola.`,
        m: 5
      },
      {
        t: 'Voltea y cocina el otro lado',
        d: `Voltea las pechugas con las pinzas (no las pinches con tenedor, se les sale el jugo). El lado cocido debe verse bien dorado. Baja el fuego a medio y cocina 4 a 5 minutos más.`,
        m: 5
      },
      {
        t: 'Comprueba que esté bien cocido',
        d: `Haz un corte pequeño en la parte más gruesa de una pechuga y mira por dentro. Si tienes termómetro de cocina, debe marcar 74 °C en el centro.`,
        s: `La carne se ve completamente blanca hasta el centro y los jugos que salen son transparentes.`,
        e: `Si ves carne rosada o jugo rosado, falta: devuélvela a la sartén 1 o 2 minutos por lado y revisa otra vez. El pollo siempre debe quedar bien cocido.`
      },
      {
        t: 'Déjalo reposar',
        d: `Pasa las pechugas a un plato limpio (nunca al mismo donde estuvo el pollo crudo) y déjalas quietas 5 minutos antes de cortarlas.`,
        c: `Con el calor, los jugos se van al centro de la carne. En el reposo se reparten otra vez. Si la cortas de inmediato, todo el jugo queda en el plato y la carne queda seca.`,
        m: 5
      },
      {
        t: 'Corta y sirve',
        d: `Corta la pechuga en tajadas de 1 centímetro, en diagonal y atravesando las fibras de la carne (las líneas que se ven a lo largo). Así cada bocado queda más tierno. Sirve con arroz, ensalada o papas.`
      }
    ],
    guardar: `Guarda el pollo cocido en un recipiente tapado en la nevera hasta 3 días. Frío y en tiras queda muy bien para ensaladas y sándwiches.`
  },

  // ---------------------------------------------------------- LENTEJAS
  {
    id: 'lentejas',
    nombre: 'Lentejas guisadas',
    emoji: '🍲',
    categoria: 'Platos fuertes',
    dificultad: 'Fácil',
    prep: 15,
    coccion: 50,
    porciones: 4,
    descripcion: 'Un guiso espeso y reconfortante con papa y zanahoria. Se hace casi solo y al día siguiente sabe todavía mejor.',
    antes: `Las lentejas no necesitan remojo obligatorio, pero si las dejas en agua 1 o 2 horas se cocinan un poco más rápido. La base del sabor es el sofrito (cebolla, tomate y ajo cocinados despacio), así que no te lo saltes ni lo apures.`,
    ingredientes: [
      { c: 2, u: 'taza|tazas', n: 'de lentejas secas', nota: 'Unos 400 g.' },
      { c: 6, u: 'taza|tazas', n: 'de agua' },
      { c: 1, u: '', n: 'cebolla cabezona mediana|cebollas cabezonas medianas' },
      { c: 2, u: '', n: 'tomate maduro|tomates maduros' },
      { c: 2, u: '', n: 'diente de ajo|dientes de ajo' },
      { c: 1, u: '', n: 'zanahoria mediana|zanahorias medianas' },
      { c: 1, u: '', n: 'papa grande|papas grandes' },
      { c: 2, u: 'cucharada|cucharadas', n: 'de aceite' },
      { c: 1, u: 'cucharadita|cucharaditas', n: 'de comino molido' },
      { c: 1.5, u: 'cucharadita|cucharaditas', n: 'de sal' },
      { n: 'Cilantro fresco picado para servir' }
    ],
    utensilios: ['Olla grande con tapa', 'Colador', 'Tabla y cuchillo', 'Pelador de verduras', 'Cuchara de palo', 'Un plato llano (para revisar las lentejas)'],
    pasos: [
      {
        t: 'Revisa y lava las lentejas',
        d: `Riega las lentejas sobre un plato llano y revísalas: a veces traen piedritas o granos dañados, y morder una piedra es muy desagradable. Saca lo que no sea lenteja. Luego pásalas a un colador y lávalas bajo el chorro de agua fría unos 20 segundos.`
      },
      {
        t: 'Pica las verduras',
        d: `Pica la cebolla en cuadritos pequeños. Pica los tomates en cuadritos (o rállalos por el lado grueso del rallador y bota la piel). Pica el ajo bien fino. Pela la zanahoria y córtala en cuadritos de 1 centímetro. Pela la papa y córtala en cubos de 2 centímetros; déjala en un tazón cubierta de agua para que no se ponga negra.`,
        c: `La zanahoria va más pequeña que la papa porque es más dura y tarda más en ablandarse.`
      },
      {
        t: 'Haz el sofrito: primero la cebolla',
        d: `Pon la olla a fuego medio con el aceite. Cuando esté caliente, agrega la cebolla y una pizca de sal. Cocínala 4 minutos revolviendo de vez en cuando.`,
        s: `La cebolla está blanda y transparente, sin dorarse.`,
        m: 4
      },
      {
        t: 'Agrega el ajo, el tomate y el comino',
        d: `Echa el ajo y revuelve 30 segundos, solo hasta que huela. Agrega el tomate y el comino, revuelve y cocina 5 minutos, moviendo cada tanto y raspando el fondo.`,
        s: `El tomate se deshace y la mezcla se vuelve una pasta rojiza y espesa. El aceite empieza a separarse y brillar en los bordes.`,
        e: `El ajo se quema mucho más rápido que la cebolla; por eso entra después y solo unos segundos antes del tomate.`,
        m: 5
      },
      {
        t: 'Agrega las lentejas y el agua',
        d: `Echa las lentejas lavadas y revuélvelas un momento con el sofrito. Agrega las 6 tazas de agua, sube el fuego a alto y espera a que hierva. Todavía no agregues la sal.`,
        c: `Si al hervir se forma una espuma grisácea encima, quítala con una cuchara. No hace daño, pero el guiso queda más limpio.`
      },
      {
        t: 'Cocina a fuego bajo',
        d: `Cuando hierva, baja el fuego a bajo. Pon la tapa dejándola un poco corrida para que salga el vapor. Cocina 25 minutos, revolviendo un par de veces.`,
        s: `Debe verse un burbujeo suave y tranquilo, no un hervor fuerte que rompa las lentejas.`,
        m: 25
      },
      {
        t: 'Agrega la zanahoria, la papa y la sal',
        d: `Escurre la papa y agrégala junto con la zanahoria y la cucharadita y media de sal. Revuelve. Si las lentejas ya no están cubiertas de líquido, agrega media taza de agua caliente. Cocina 20 minutos más, con la tapa igual de corrida.`,
        m: 20
      },
      {
        t: 'Comprueba el punto',
        d: `Saca una lenteja y un cubo de papa. Aplasta la lenteja entre los dedos (o muérdela) y pincha la papa con un tenedor.`,
        s: `La lenteja se deshace fácil y es cremosa por dentro, sin centro duro. El tenedor entra en la papa sin resistencia.`,
        c: `Si falta, cocina 5 a 10 minutos más. El tiempo cambia según qué tan viejas estén las lentejas.`
      },
      {
        t: 'Ajusta el espesor y la sal',
        d: `Si quieres el guiso más espeso, aplasta 3 o 4 cubos de papa contra la pared de la olla, revuelve y cocina destapado 5 minutos. Si quedó muy espeso, agrega un chorrito de agua caliente. Prueba el caldo y corrige la sal de a pizcas.`
      },
      {
        t: 'Deja reposar y sirve',
        d: `Apaga el fuego, tapa la olla y deja reposar 5 minutos: el guiso termina de espesar. Sirve con cilantro picado por encima, acompañado de arroz blanco.`,
        m: 5
      }
    ],
    guardar: `Duran 4 días en la nevera en un recipiente tapado y hasta 3 meses congeladas. Al recalentar espesan bastante: agrégales un chorrito de agua.`
  },

  // ---------------------------------------------------------- PANQUEQUES
  {
    id: 'panqueques',
    nombre: 'Panqueques esponjosos',
    emoji: '🥞',
    categoria: 'Desayunos',
    dificultad: 'Fácil',
    prep: 15,
    coccion: 15,
    porciones: 4,
    descripcion: 'Panqueques altos y suaves hechos desde cero. Salen unos 8 medianos.',
    antes: `Dos cosas hacen que queden esponjosos y no como suela de zapato: <strong>mezclar poco</strong> (la masa debe quedar con grumos) y <strong>fuego medio-bajo</strong>. Además, el primer panqueque casi siempre sale feo porque la sartén aún no está pareja: es normal, es el de prueba.`,
    ingredientes: [
      { c: 1.5, u: 'taza|tazas', n: 'de harina de trigo', nota: 'Unos 190 g. De la normal, no leudante.' },
      { c: 1, u: 'cucharada|cucharadas', n: 'de polvo de hornear' },
      { c: 2, u: 'cucharada|cucharadas', n: 'de azúcar' },
      { c: 0.5, u: 'cucharadita|cucharaditas', n: 'de sal' },
      { c: 1.25, u: 'taza|tazas', n: 'de leche' },
      { c: 1, u: '', n: 'huevo|huevos' },
      { c: 3, u: 'cucharada|cucharadas', n: 'de mantequilla derretida', nota: 'Y un poquito más para engrasar la sartén.' },
      { c: 1, u: 'cucharadita|cucharaditas', n: 'de esencia de vainilla', nota: 'Opcional.' },
      { n: 'Miel, sirope o fruta para servir' }
    ],
    utensilios: ['Sartén antiadherente', 'Dos tazones (uno grande y uno mediano)', 'Batidor de mano o tenedor', 'Cucharón o taza medidora de ¼', 'Espátula delgada', 'Papel de cocina'],
    pasos: [
      {
        t: 'Derrite la mantequilla',
        d: `Derrite las 3 cucharadas de mantequilla en una ollita a fuego bajo o en el microondas en tandas de 15 segundos. Déjala aparte para que se entibie mientras preparas lo demás.`,
        e: `Si la echas hirviendo sobre el huevo, lo cocina y quedan pedacitos. Debe estar líquida pero tibia.`
      },
      {
        t: 'Mezcla los ingredientes secos',
        d: `En el tazón grande pon la harina, el polvo de hornear, el azúcar y la sal. Revuelve con el batidor unos 15 segundos para que todo quede bien repartido.`,
        c: `Para medir la harina, llena la taza con una cuchara y empareja con un cuchillo. Si metes la taza directo en la bolsa, la harina se aprieta, entra de más y los panqueques quedan pesados.`
      },
      {
        t: 'Mezcla los ingredientes líquidos',
        d: `En el tazón mediano bate el huevo con la leche y la vainilla hasta que quede un color parejo. Agrega la mantequilla tibia y bate otra vez.`,
        c: `Si la leche está muy fría, la mantequilla se vuelve grumitos sólidos. No es grave, pero es mejor usar la leche a temperatura ambiente.`
      },
      {
        t: 'Une las dos mezclas sin batir de más',
        d: `Haz un hueco en el centro de los ingredientes secos y vierte ahí los líquidos de una vez. Mezcla con movimientos suaves solo hasta que ya no veas harina seca: unas 10 a 15 vueltas, nada más.`,
        s: `La masa queda espesa y con grumos pequeños, y cae de la cuchara en un chorro grueso y lento.`,
        e: `No batas hasta que quede lisa. Al batir de más la harina desarrolla gluten y los panqueques quedan chiclosos y planos. Los grumos desaparecen al cocinarse.`
      },
      {
        t: 'Deja reposar la masa',
        d: `Deja la masa quieta 5 minutos, sin revolverla. En ese tiempo la harina se hidrata y el polvo de hornear empieza a formar burbujas, que son las que los hacen esponjosos.`,
        s: `Aparecen burbujitas en la superficie y la masa se ve un poco más inflada.`,
        m: 5
      },
      {
        t: 'Calienta y engrasa la sartén',
        d: `Pon la sartén a fuego medio-bajo durante 2 minutos. Agrega un pedacito de mantequilla, deja que se derrita y repártelo con un papel de cocina doblado, dejando solo una capa muy fina.`,
        s: `Al dejar caer unas gotas de agua, bailan y chisporrotean un par de segundos antes de evaporarse.`,
        e: `Si queda un charco de mantequilla, los panqueques salen manchados y con bordes fritos en lugar de un dorado parejo.`,
        m: 2
      },
      {
        t: 'Vierte la masa',
        d: `Con el cucharón o la taza de ¼, vierte la masa en el centro de la sartén desde poca altura, en un solo punto, y deja que se extienda sola en un círculo de unos 10 centímetros. No la esparzas con la cuchara. Si la sartén es grande, puedes hacer 2 o 3 a la vez dejando espacio entre ellos.`
      },
      {
        t: 'Espera las burbujas antes de voltear',
        d: `Deja cocinar sin tocar entre 2 y 3 minutos. No te guíes solo por el reloj: mira la superficie.`,
        s: `Salen burbujas por toda la superficie, algunas se revientan y dejan huequitos que ya no se cierran. Los bordes se ven opacos y secos, no brillantes.`,
        e: `Si por debajo se pone muy oscuro antes de que salgan las burbujas, el fuego está muy alto. Bájalo para el siguiente.`,
        m: 2
      },
      {
        t: 'Voltea de un solo movimiento',
        d: `Mete la espátula por debajo hasta el centro del panqueque y voltéalo con un giro rápido de muñeca. Cocina el otro lado entre 1 y 2 minutos.`,
        s: `El lado de arriba quedó dorado parejo. Al tocar el centro con el dedo, se siente firme y vuelve a su sitio.`,
        e: `No lo aplastes con la espátula después de voltearlo: le sacas todo el aire y queda plano.`,
        m: 1
      },
      {
        t: 'Repite y sirve calientes',
        d: `Pasa el panqueque a un plato y cúbrelo con un limpión limpio para que no se enfríe. Antes de cada tanda, vuelve a pasar el papel con un poquito de mantequilla por la sartén. Repite hasta terminar la masa y sirve con miel, sirope o fruta.`,
        c: `La sartén se va calentando más con cada tanda. Si los últimos se doran demasiado rápido, baja un poco el fuego.`
      }
    ],
    guardar: `Deja enfriar los que sobren, guárdalos en una bolsa cerrada en la nevera hasta 3 días o congélalos separados con papel entre cada uno. Recaliéntalos en la tostadora o en sartén a fuego bajo.`
  }

];
