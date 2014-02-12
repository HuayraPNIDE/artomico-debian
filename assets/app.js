define("appkit/adapters/application",
  [],
  function() {
    "use strict";
    var FixtureAdapter = DS.FixtureAdapter.extend();

    return FixtureAdapter;
  });
define("appkit/app",
  ["resolver","appkit/utils/register_components","appkit/helpers/format-markdown"],
  function(Resolver, registerComponents, formatMarkdown) {
    "use strict";
    Ember.Handlebars.registerBoundHelper('format-markdown', formatMarkdown);

    var App = Ember.Application.extend({
      LOG_ACTIVE_GENERATION: true,
      LOG_MODULE_RESOLVER: true,
      LOG_TRANSITIONS: true,
      LOG_TRANSITIONS_INTERNAL: true,
      LOG_VIEW_LOOKUPS: true,
      modulePrefix: 'appkit', // TODO: loaded via config
      Resolver: Resolver
    });

    App.initializer({
      name: 'Register Components',
      initialize: function(container, application) {
        registerComponents(container);
      }
    });


    return App;
  });
define("appkit/components/pretty-color",
  [],
  function() {
    "use strict";

  });
define("appkit/helpers/format-markdown",
  [],
  function() {
    "use strict";
    var showdown = new Showdown.converter();


    var formatMarkdown = function(input) {
        return new Handlebars.SafeString(showdown.makeHtml(input));
    };


    return formatMarkdown;
  });
define("appkit/models/elemento",
  [],
  function() {
    "use strict";
    var Elemento = DS.Model.extend({
      name: DS.attr('string'),
      sigla: DS.attr('string'),
      letra: DS.attr('string'),
      clase: DS.attr('string'),
      wiki: function(){return 'http://es.wikipedia.org/wiki/' + this.get('name')}.property('name'),
      image: function(){return "assets/images/" + this.get('id') + ".jpg"}.property('id'),
      mp3: function(){return "assets/audios/" + this.get('id') + ".mp3"}.property('id'),
      ogg: function(){return "assets/audios/" + this.get('id') + ".ogg"}.property('id')
    });

    Elemento.FIXTURES = [
     {
       id: 1,
       name: 'Hidrógeno',
       sigla: 'H',
       letra: "En primer lugar situado esta\n\nCon uno de estos y otros más\n\nAgua se formará…… Hidrogeno.\n\nEn el Universo es abundante\n\nY en nuestro territorio limitado\n\nSe encuentra mucho en el espacio\nEste combustible de los astros",
       clase: 'No metales'
     },

     {
       id: 2,
       name: 'Helio',
       sigla: 'He',
       letra: 'El astrónomo francés Pierre Janssen observo\n\nEn un eclipse solar\n\nUna línea espectral y junto a \n\nNorman Lockyer un astrónomo ingles\n\nDescubrieron un elemento cuyo nombre Helio fue',
       clase: 'Gases nobles y Transactínidos'
     },

     {
       id: 3,
       name: 'Litio',
       sigla: 'Li',
       letra: 'Y dale, dale, dale, dale, dale, dale, dale Litio\n\nEste elemento a mí me gusta \n\nSí que es el mejor\n\nEl es liviano, es muy frágil, el es de color blanco \n\nNúmero 3 el Litio es el mejor.\n\nY dale, dale, dale, dale, dale, Litio \n\nY dale, dale, dale, dale, dale, dale Li \n\nLitio vos sos mi pasión…',
       clase: 'Alcalinos'
     },

     {
       id: 4,
       name: 'Berilio',
       sigla: 'Be',	
       letra: 'El Berilio es un elemento químico de símbolo Be número atómico 4\n\nEs un elemento alcalinotérreo, bivalente, tóxico, de color gris\n\nduro, ligero y quebradizo.\n\nSe emplea principalmente con endurecedor en aleaciones\n\nespecialmente de cobre.',
       clase: 'Alcalinotérreos'			
     },

     {
       id: 5,
       name: 'Boro',
       sigla: 'B',
       letra: 'Casi tan duro como un diamante puede ser\n\nAmorfo cristalizado también\n\nBoro, Boro, Boro, Borooo\n\nCuerpo simple tiene, de color pardo oscuro es él\n\nBoro, Boro, Boro, Borooo',
       clase: 'Metaloides'			
     },

     {
       id: 6,
       name: 'Carbono',
       sigla: 'C',
       letra: 'El carbono es un elemento químico de número atómico 6\n\nY símbolo C\n\nDe cristalino, tal como el carbono en forma de diamante o de grafito\n\nMezclado con oxígeno forma el dióxido de carbono \n\nVolviéndose vital para el crecimiento natural de las plantas\n\nQue nos dan la oportunidad de respirar\n\nEste elemento forma parte de todos los seres vivos conocidos.\n\nTambién es esencial para la industria del transporte.\n\nen forma de combustible fósil.',
       clase: 'No metales'				
     },

     {
       id: 7,
       name: 'Nitrógeno',
       sigla: 'N',
       letra: 'Es un elemento verde, que tienen forma de gas\n\nSu número zeta es 7, se escribe con la letra N\n\nSu nombre es Nitrógeno',
       clase: 'No metales'				
     },

     {
       id: 8,
       name: 'Oxígeno',
       sigla: 'O',
       letra: 'Sobre el oxígeno les vengo a cantar\n\nY enseguida yo voy a empezar \n\nMi número atómico es el número 8 \n\ny corro por la sangre y puedo explotar \n\nSi vas en submarino o en un vuelo espacial\n\nNo me puedes olvidar',
       clase: 'No metales'				
     },

     {
       id: 9,
       name: 'Flúor',
       sigla: 'F',
       letra: 'Elegido es el número 9\n\nCuando te lavas los dientes\n\nÉl, electronegativo reactivo\n\nAsí es el Flúor\n\nAlejado del Hidrógeno \n\nPara que no explote.',
       clase: 'Halógenos'				
     },

     {
       id: 10,
       name: 'Neón',
       sigla: 'Ne',
       letra: 'El neón es un gas noble incoloro\n\nPresente en trazas en el aire pero muy abundante en el universo\n\nSu símbolo es Ne y su número atómico es el 10\n\nSe lo utiliza para lámparas fluorescentes y tubos de televisión\n\nJunto con el helio se emplea para obtener un tipo de láser',
       clase: 'Gases nobles y Transactínidos'				
     },

     {
       id: 11,
       name: 'Sodio',
       sigla: 'Na',
       letra: 'El sodio es un metal blando y plateado.\n\nAbundante en la naturaleza yace,\n\narde en llama amarilla,\n\nse oxida en presencia del oxígeno y\n\nacciona violentamente mezclado con el H2o\n\nSe utiliza en la industria textil, componente de algunas gasolinas.\n\nY puede emplearse como refrigerante en reactores nucleares.\n\nEs raro que sirva para congelar bombas, \n\ny al mismo tiempo pueda hacer que todo estalle. \n\nNa es su símbolo, y 11 es el número atómico.\n\nEstá ubicado en el grupo 1 de la tabla periódica y fue descubierto en el año 1807.',
       clase: 'Alcalinos'				
     },

     {
       id: 12,
       name: 'Magnesio',
       sigla: 'Mg',
       letra: 'El símbolo del magnesio es el Mg\n\nY con un número atómico de 12 \n\nEs un metal liviano medianamente fuerte \n\nDe color blanco plateado y altamente inflamable.',
       clase: 'Alcalinotérreos'			
     },

     {
       id: 13,
       name: 'Aluminio',
       sigla: 'Al',
       letra: 'Envuelvo alfajores y también bombones\n\nSoy muy común, te lo puedo asegurar\n\nConduzco el calor, y te ayuda a cocinar\n\nDecimotercero es mi lugar',
       clase: 'Metales del bloque p'			
     },

     {
       id: 14,
       name: 'Silicio',
       sigla: 'Si',
       letra: 'Soy un metal el número 14 nunca solo estoy\n\nMe presento en los minerales\n\nMe usan en aleaciones como silicona \n\nEn la creación de obleas para implantar\n\nEn transistores',
       clase: 'Metaloides'				
     },

     {
       id: 15,
       name: 'Fósforo',
       sigla: 'P',
       letra: 'Es el elemento al cual le corresponde el número atómico 15\n\nY su símbolo es P, es un metal multivalente\n\nPerteneciente al grupo del nitrógeno\n\nQue se encuentra en la naturaleza\n\nCombinado a fosfatos inorgánicos y en organismos vivos \n\nPero nunca en estado nativo\n\nDe este elemento pueden encontrarse\n\nPequeñas cantidades en el semen\n\nlo que hace que este fluido resalte notablemente ante la luz ultravioleta\n\npara permitir resolver algunos casos criminales',
       clase: 'No metales'				
     },

     {
       id: 16,
       name: 'Azufre',
       sigla: 'S',
       letra: 'Es el elemento al que le corresponde el número atómico 16\n\nY su símbolo es S, se encuentra en forma nativa en regiones volcánicas\n\nY es reconocido por su fuerte y particular olor.\n\ny por consiguiente necesario para la síntesis de proteínas de todos los organismos vivos\n\nEs el elemento al que le corresponde el número atómico 16\n\nSe usa principalmente como fertilizante pero también\n\nen la fabricación de pólvora, laxante, cerillas e insecticidas',
       clase: 'No metales'				
     },

     {
       id: 17,
       name: 'Cloro',
       sigla: 'Cl',
       letra: 'El cloro es un elemento químico de número atómico 17\n\nEn la naturaleza no se encuentra en estado puro \n\nEs un halógeno y su símbolo es Cl\n\nYa que reacciona con mucha rapidez con muchos elementos y compuestos químicos \n\nSe ha usado en la guerra de Irak, en donde el 17 de marzo de 2007 por ejemplo\n\nEl gas cloro amarillo verdoso\n\nLas bombas de cloro enfermaron a más de 350 personas.',
       clase: 'Halógenos'				
     },

     {
       id: 18,
       name: 'Argón',
       sigla: 'Ar',
       letra: 'Elemento químico de número atómico 18 y símbolo Ar.\n\nEs el tercero de los gases nobles, incoloro e inerte como ellos\n\nSu nombre proviene del griego y significa Inactivo debido a que no reacciona.\n\nElemento químico de número atómico 18 y símbolo Ar.\n\nConstituye el 0.934% del aire seco',
       clase: 'Gases nobles y Transactínidos'			
     },

     {
       id: 19,
       name: 'Potasio',
       sigla: 'K',
       letra: 'Se encuentra en los granos, carnes, frutas y legumbres también\n\nEn las bananas que los monos consumen\n\nSu nitrato se utiliza, para pólvora crear\n\nSulfato como fertilizante para la tierra cosechar.',
       clase: 'Alcalinos'				
     },

     {
       id: 20,
       name: 'Calcio',
       sigla: 'Ca',
       letra: 'Me encuentro en el organismo en forma de huesos\n\nEstoy en la leche y también en los quesos\n\nConsume mucho calcio o tus huesos quebraras.',
       clase: 'Alcalinotérreos'			
     },

     {
       id: 21,
       name: 'Escandio',
       sigla: 'Sc',
       letra: 'Escandio, escandio, Escandinavia, escandio Escandinavia\n\n1878 fue descubierto allí\n\n21 Sc, 21 Sc, 21\n\nEn tonos plateados, amarillentos y rosados\n\nEs usado para luces de alta intensidad\n\nEscandio, escandio, Escandinavia, escandio Escandinavia',
       clase: 'Metales de transición'			
     },

     {
       id: 22,
       name: 'Titanio',
       sigla: 'Ti',
       letra: 'Con su óxido se hace la pintura color marfil\n\nSe utiliza para muchas cosas\n\nY para hacer piercing\n\nProviene del griego antiguo “Tierra blanca” simboliza\n\nSe emplea como blindaje, en relojes y joyería\n\nTitanio es el 22, es 22',
       clase: 'Metales de transición'			
     },

     {
       id: 23,
       name: 'Vandio',
       sigla: 'V',
       letra: 'Se abrevia como V, y es el número 23\n\nEs un metal dúctil, blando, y poco abundante\n\nSe usa en aleaciones y se encuentra en minerales\n\nEs de color gris plateado y se produce en China y en Rusia',
       clase: 'Metales de transición'				
     },

     {
       id: 24,
       name: 'Cromo',
       sigla: 'Cr',
       letra: 'Su nombre derivado del griego Croma, color\n\nSe debe a los distintos colores que presentan sus compuestos\n\nSu símbolo es Cr y su número atómico 24\n\nLos compuestos del cromo son tóxicos y altamente reactivos',
       clase: 'Metales de transición'				
     },

     {
       id: 25,
       name: 'Manganeso',
       sigla: 'Mn',
       letra: 'El manganeso es el elemento químico de número atómico 25\n\nSituado en el grupo 7B de la tabla periódica de los elementos\n\nY se simboliza Mn',
       clase: 'Metales de transición'				
     },

     {
       id: 26,
       name: 'Hierro',
       sigla: 'Fe',
       letra: 'Es uno de los elementos más abundantes de la corteza terrestre\n\nEl hierro es metal de transición\n\nY aún más en el núcleo de la tierra\n\nAl ser tan abundante, dúctil y resistente\n\nSe usa en diversas actividades\n\nSu número atómico es el 26.\n\nEl uso más extenso de hierro es para la obtención de aceros estructurales\n\nTambién se producen grandes cantidades de hierro fundido\n\nY de hierro forjado\n\nEntre otros usos de hierro y sus compuestos\n\nSe tienen la fabricación de imanes, tintes y adhesivos',
       clase: 'Metales de transición'			
     },

     {
       id: 27,
       name: 'Cobalto',
       sigla: 'Co',
       letra: 'El cobalto es un metal duro, es ferromagnético\n\nEl Co 60 es un radioisótopo del cobalto y es importante\n\ntrazador y agente en el tratamiento del cáncer.\n\nEl símbolo es Co con el número atómico 27,\n\nPertenece a la serie química de metales de transición\n\nColor blanco azulado',
       clase: 'Metales de transición'				
     },

     {
       id: 28,
       name: 'Níquel',
       sigla: 'Ni',
       letra: 'Su número atómico es 28, y su símbolo Ni\n\nEs un metal de transición, así como también cancerígeno y tóxico\n\nEs dúctil y maleable de color blanco plateado\n\nEsencial para la industria y pobre conductor de la electricidad',
       clase: 'Metales de transición'				
     },

     {
       id: 29,
       name: 'Cobre',
       sigla: 'Cu',
       letra: 'El Cobre se oxida si llueve\n\nen la tabla periódica su número atómico es el 29.\n\nSe encuentra en los cables transportando electrones\n\nEl Cobre tiene un poder sin igual, es el tercer metal, es fundamental\n\nSi no lo sabías ¡no te amontones!\n\nEl más utilizado a nivel mundial.',
       clase: 'Metales de transición'			
     },

     {
       id: 30,
       name: 'Zinc',
       sigla: 'Zn',
       letra: 'El Cinc es un metal de transición que se parece al magnesio.\n\nEn la tabla periódica es el número 30\n\nY su símbolo es Zn.\n\nEl Cinc es de color blanco azulado.',
       clase: 'Metales de transición'				
     },

     {
       id: 31,
       name: 'Galio',
       sigla: 'Ga',
       letra: 'Yo soy el Galio, mi número atómico es 31\n\nMi presión de vapor es baja, incluso a altas temperaturas\n\nY soy un metal blando y brillante\n\nMi símbolo es Ga.',
       clase: 'Metales del bloque p'				
     },

     {
       id: 32,
       name: 'Germanio',
       sigla: 'Ge',
       letra: 'Su símbolo es Ge, su número atómico 32\n\nDuro y cristalino de color blanco grisáceo,\n\nse lo utiliza para fibra óptica en radares\n\ny para amplificadores de guitarras eléctricas.',
       clase: 'Metaloides'				
     },

     {
       id: 33,
       name: 'Arsénico',
       sigla: 'As',
       letra: 'Se encuentra en el quinto grupo principal\n\nSe presenta principalmente en forma de sulfuro\n\nPertenece a los metaloides\n\nArsenicooooo, Arsenicooooo',
       clase: 'Metaloides'			
     },

     {
       id: 34,
       name: 'Selenio',
       sigla: 'Se',
       letra: 'El número 34 soy, Selenio me llamo yo\n\n¿Vos tenés acné? Usame te hago bien\n\nOh, oh, oh, oh, soy el mejor si soy el mejor\n\nOh, Oh, Oh, Oh, Oh, en la comida siempre estoy yo\n\nMe usan como insecticida, soy insoluble en agua y alcohol.',
       clase: 'No metales'				
     },

     {
       id: 35,
       name: 'Bromo',
       sigla: 'Br',
       letra: 'Altamente tóxico es este elemento\n\nEs un líquido rojo que te irrita los ojos\n\nA temperatura ambiente es bastante volátil\n\nProduce quemaduras ten cuidado en ti.',
       clase: 'Halógenos'				
     },

     {
       id: 36,
       name: 'Kriptón',
       sigla: 'Kr',
       letra: 'El Kriptón en la tabla es el número 36\n\nAbreviado como Kr, es un gas noble inodoro e insípido\n\ncon poco reactividad, con un espectro de luz verde y roja con anaranjado\n\nmuy brillante',
       clase: 'Gases nobles y Transactínidos'				
     },

     {
       id: 37,
       name: 'Rubidio',
       sigla: 'Rb',
       letra: 'El rubidio es un elemento químico, su número atómico es el 37\n\nSe utiliza en la fabricación de cristales especiales para el tratamiento de la epilepsia\n\nes un metal alcalino blando y es plateado brillante.\n\ny también para la separación por ultracentrifugado.',
       clase: 'Alcalinos'				
     },

     {
       id: 38,
       name: 'Estroncio',
       sigla: 'Sr',
       letra: 'El estroncio es blanco, coloreado y tiene una baja densidad,\n\nlos elementos como es estroncio tienen una baja energía de ionización. \n\nEl estado de este elemento, en su aspecto químico es\n\nmetálico, plateado, blanquecino.',
       clase: 'Alcalinotérreos'			
     },

     {
       id: 39,
       name: 'Itrio',
       sigla: 'Y',
       letra: 'Mineral te encuentro en estas tierras extrañas\n\nPoco común mineral se llama Itrio\n\nMetal brillante te quiero para el color de mi televisión \n\nMineral te encuentro en esas tierras extrañas\n\nSe llama Itrio.',
       clase: 'Metales de transición'				
     },

     {
       id: 40,
       name: 'Zirconio',
       sigla: 'Zr',
       letra: 'El zirconio es un metal duro resistente a la corrosión\n\nSe utiliza sobre todo en el reactor, me tienen harta con lo de la explosión \n\nBlanco, grisáceo es su color\n\nPertenece al grupo IV B en la tabla periódica\n\nCon Zr se identifica y en 40 se clasifica.',
       clase: 'Metales de transición'			
     },

     {
       id: 41,
       name: 'Niobio',
       sigla: 'Nb',
       letra: 'Es blanco y poco abundante, se encuentra en el mineral Niobita\n\ncuando permanece en contacto con el aire presenta un color azul\n\nse utiliza en aleaciones\n\ntiene usos industriales y científicos.',
       clase: 'Metales de transición'			
     },

     {
       id: 42,
       name: 'Molibdeno',
       sigla: 'Mo',
       letra: 'Cuidado que me quiebro fácil,\n\nno me fundo yo soy ágil, soy un metal, soy un metal\n\ny pesado como el cobre mami\n\nuh, uh, uh, uh',
       clase: 'Metales de transición'				
     },

     {
       id: 43,
       name: 'Tecnecio',
       sigla: 'Tc',
       letra: 'El Tecnecio es Tc, y su número atómico 43,\n\nEs radioactivo y con forma de polvo\n\nEs un metal de transición, cristalino y de color plateado.',
       clase: 'Metales de transición'				
     },

     {
       id: 44,
       name: 'Rutenio',
       sigla: 'Ru',
       letra: 'Su número Z es 44, su símbolo es Ru\n\nEs un metal de transición\n\nSu nombre es Rutenio.',
       clase: 'Metales de transición'				
     },

     {
       id: 45,
       name: 'Rodio',
       sigla: 'Rh',
       letra: 'Es un elemento químico de número atómico 45\n\nSu símbolo es Rh, es blanco platinado,\n\nSe usa como catalizador en algunas aleaciones.',
       clase: 'Metales de transición'			
     },

     {
       id: 46,
       name: 'Paladio',
       sigla: 'Pd',
       letra: 'El Paladio es un elemento químico de número atómico 46\n\nse emplea principalmente como catalizador\n\nY su símbolo es Pd\n\nEste es un metal de transición,\n\ny en joyería.\n\nEs un metal raro y brillante,\n\nDe color blanco plateado\n\nQue fue descubierto en 1803 por William Hyde Wollaston.',
       clase: 'Metales de transición'				
     },

     {
       id: 47,
       name: 'Plata',
       sigla: 'Ag',
       letra: 'La plata es un elemento químico de número atómico 47\n\nSituado en el grupo 11 B de la tabla periódica de los elementos\n\nSu símbolo es Ag, es un metal de transición blanco.',
       clase: 'Metales de transición'			
     },

     {
       id: 48,
       name: 'Cadmio',
       sigla: 'Cd',
       letra: 'Es un metal pesado, produce efectos tóxicos en organismos vivos\n\nCadmio, Cadmio\n\nSe emplea especialmente en pilas \n\nEn organismos vivos.',
       clase: 'Metales de transición'				
     },

     {
       id: 49,
       name: 'Indio',
       sigla: 'In',
       letra: 'El indio es el número 49 en la tabla\n\nDel grupo 13B, su símbolo es el In\n\nEs un metal poco abundante\n\nMaleable, fácilmente fundible.\n\nEs parecido al Cinc.\n\nEl Indio es de color blanco plateado.\n\nMuy blanco.',
       clase: 'Metales del bloque p'			
     },

     {
       id: 50,
       name: 'Estaño',
       sigla: 'Sn',
       letra: 'El estaño es un elemento químico de símbolo Sn\n\nSe funde a bajas temperaturas, tiene gran fluidez cuando se funde\n\nEs suave, flexible y resiste a la corrosión de muchos medios\n\nDe envases de acero para conservar alimentos y bebidas.\n\nSu número atómico es 50.\n\nPosee un punto de ebullición alto.\n\nUna aplicación importante es el recubrimiento\n\nSe emplea también en aleaciones para soldar,\n\nbronces y aleaciones industriales diversas.\n\nLos productos químicos de estaño tanto inorgánicos como orgánicos,\n\nSe utilizan mucho en la industria de galvanoplastia\n\nCerámicos, plásticos y agricultura.',
       clase: 'Metales del bloque p'				
     },

     {
       id: 51,
       name: 'Antimonio',
       sigla: 'Sb',
       letra: 'El antimonio es un elemento químico de número atómico 51\n\nUbicado en el grupo 15 de la tabla periódica de los elementos.',
       clase: 'Metaloides'				
     },

     {
       id: 52,
       name: 'Telurio',
       sigla: 'Te',
       letra: 'Soy un metaloide muy conocido\n\nQue se descubrió en Ucrania\n\nSu número Z es 52\n\nSu símbolo es Te, su nombre es \n\nTelurio',
       clase: 'Metaloides'			
     },

     {
       id: 53,
       name: 'Yodo',
       sigla: 'I',
       letra: 'Las olas y el viento, sucun dum sucun dum\n\nY el Iodo del mar la, la, la, la, la, la\n\nLa fotografía, sucun dum sucun dum y la medicina\n\nLas olas y el viento, sucun dum sucun dum\n\nY el iodo del mar la, la, la, la, la, la\n\nSu número atómico es 53.',
       clase: 'Halógenos'				
     },

     {
       id: 54,
       name: 'Xenón',
       sigla: 'Xe',
       letra: 'Gas noble inodoro, demasiado incoloro\n\nCuando me excitan, con una descarga eléctrica\n\nEmito un brillo de luz azul, luz azul',
       clase: 'Gases nobles y Transactínidos'			
     },

     {
       id: 55,
       name: 'Cesio',
       sigla: 'Cs',
       letra: 'Yo soy un metal blando y ligero yo soy\n\nEn la corteza terrestre, yo casi no estoy\n\nA mí me usan mucho,\n\nme usan en medicina\n\npara ataques de shock, no soy una aspirina\n\nSoy el 55, a mi me llaman Cesio\n\nPor favor no te lo olvides, \n\nA mí me llaman Cesio',
       clase: 'Alcalinos'				
     },

     {
       id: 56,
       name: 'Bario',
       sigla: 'Ba',
       letra: 'El Bario es un elemento químico de la tabla periódica,\n\nreacciona con el cobre y también con el agua.\n\nEs un metal similar al calcio que se oxida con facilidad.\n\nAclara muy rápido, sólido, frágil y blando.',
       clase: 'Alcalinotérreos'				
     },

     {
       id: 57,
       name: 'Lantano',
       sigla: 'La',
       letra: 'Numero atómico 57,\n\nfue descubierto por el químico sueco Carl Gustav Mosander.\n\nY se hacen esponjas de hidrógeno con aleaciones que contienen lantano.\n\nSe utiliza para lentes de cámaras, vidrios ópticos',
       clase: 'Lantánidos'			
     },

     {
       id: 58,
       name: 'Cerio',
       sigla: 'Ce',
       letra: 'En los fuegos artificiales participo\n\nYa que exploto, muy fácilmente\n\nMe alean con otros metales\n\nPara hacerme un imán que dure para siempre',
       clase: 'Lantánidos'				
     },

     {
       id: 59,
       name: 'Praseodimio',
       sigla: 'Pr',
       letra: 'El praseodimio, número atómico 59\n\nes un elemento metálico del grupo de las tierras raras\n\nes como agente de aleaciones con magnesio\n\npara crear metales de elevada dureza\n\nque son usados en motores de aviones\n\nes uso principal de él\n\nEl praseodimio forma el núcleo de las lámparas de arco volcánico de carbono\n\nque son utilizadas en la industria del cine, para las luces de los estudios\n\nLas sales de praseodimio son usadas para dar de color amarillo\n\ny los proyectores.\n\na los cristales y esmaltes.',
       clase: 'Lantánidos'			
     },

     {
       id: 60,
       name: 'Neodimio',
       sigla: 'Nd',
       letra: 'Es de color brillante, su número Z es 60\n\nSe encuentra en estado sólido\n\nA temperatura ambiente,\n\nSe escribe con la N y la d \n\nSu nombre es Neodimio\n\nSe oscurece al contacto con el aire\n\nFormando un óxido',
       clase: 'Lantánidos'				
     },

     {
       id: 61,
       name: 'Prometio',
       sigla: 'Pm',
       letra: 'El prometio es radioactivo, radioactivo, radioactivo\n\nPrometeo se había robado mucho fuego a los dioses\n\nPrometeo se llama así como fuego\n\nEl prometió, Prometeo, 61',
       clase: 'Lantánidos'				
     },

     {
       id: 62,
       name: 'Samario',
       sigla: 'Sm',
       letra: 'Fue descubierto en 1853 por un suizo y se encontró en el monte Urales\n\ny actualmente es obtenido a través de un proceso de intercambio iónico\n\nSu símbolo es Sn.\n\nSe usa para la luz infrarroja\n\nde la arena monacita.',
       clase: 'Lantánidos'				
     },

     {
       id: 63,
       name: 'Europio',
       sigla: 'Eu',
       letra: 'Número atómico 63, fue descubierto en 1890\n\nEl más reactivo de todos los elementos de tierras raras\n\nForma compuestos fluorescente, usados en dispositivos como\n\nTelevisores color y lámparas fluorescentes.',
       clase: 'Lantánidos'				
     },

     {
       id: 64,
       name: 'Gadolinio',
       sigla: 'Gd',
       letra: 'Soy el 64, soy magnético\n\nTambién calórico\n\nSoy de los lantánidos, y tengo un óxido levemente básico',
       clase: 'Lantánidos'				
     },

     {
       id: 65,
       name: 'Terbio',
       sigla: 'Tb',
       letra: 'Para lámparas fluorescentes\n\nEste elemento se utiliza, como óxido se encuentra\n\nEn otros minerales como la gadolinita\n\nEstos minerales son los que el minero pica.\n\nDentro de la euxenita',
       clase: 'Lantánidos'			
     },

     {
       id: 66,
       name: 'Disprosio',
       sigla: 'Dy',
       letra: 'Es un metal de transición que se usa para laser y además\n\nLa disprocita es muy magnética, la disprocita es muy magnética \n\nEl Disprosio tiene símbolo Dy,\n\nEl Disprosio tiene símbolo Dy\n\nCortarlo es muy fácil.\n\nEl óxido de disprosio es muy magnético\n\nEl óxido de disprosio es muy magnético\n\nMás magnética que el óxido de hierro.',
       clase: 'Lantánidos'				
     },

     {
       id: 67,
       name: 'Holmio',
       sigla: 'Ho',
       letra: 'Se utiliza para fabricar, dispositivos electrónicos\n\nSu número Z es 67, su símbolo es Ho\n\nSu nombre es Holmio.',
       clase: 'Lantánidos'				
     },

     {
       id: 68,
       name: 'Erbio',
       sigla: 'Er',
       letra: 'El Erbio forma parte del grupo de los lantánidos\n\nEl Erbio es un elemento químico de aspecto blanco plateado\n\nEn su forma natural es sólido\n\nSu número atómico es 68.',
       clase: ''				
     },

     {
       id: 69,
       name: 'Tulio',
       sigla: 'Tm',
       letra: 'Su símbolo es Tm, con número atómico de 69.\n\nEs un metal blando y de color gris plateado.',
       clase: 'Lantánidos'			
     },

     {
       id: 70,
       name: 'Iterbio',
       sigla: 'Yb',
       letra: 'El Iterbio es un elemento químico de la tabla periódica que tiene símbolo Yb\n\nEl iterbio es un elemento blando, maleable y bastante dúctil\n\nSu número atómico es 70\n\nQue exhibe un lustre plateado brillante.',
       clase: 'Lantánidos'			
     },

     {
       id: 71,
       name: 'Lutecio',
       sigla: 'Lu',
       letra: 'El Lutecio es un elemento químico\n\nDe número 71, cuyo símbolo es Lu\n\nA pesar de ser uno de los elementos del bloque D\n\nTiene la frecuencia de aparecer\n\nIncluido entre los lantánidos.\n\nYa que con estos comparte muchas cosas.\n\nPropiedades.',
       clase: 'Lantánidos'				
     },

     {
       id: 72,
       name: 'Hafnio',
       sigla: 'Hf',
       letra: 'El hafnio es un elemento químico de número 72\n\nEs un metal de transición químicamente muy parecido al Zirconio.\n\nSe usa en aleaciones con el Wolframio, en filamentos y en electrodos.\n\nTambién se utiliza para fabricar barras de control\n\nY se simboliza como Hf\n\nempleadas en reactores nucleares\n\ny se utiliza en lámparas de gas o kerosene.',
       clase: 'Metales de transición'				
     },

     {
       id: 73,
       name: 'Tantalio',
       sigla: 'Ta',
       letra: 'Yo soy Tantalio, mi número atómico 73\n\nSoy un elemento metálico, blanco, dúctil y maleable.\n\nSoy unos de los metales de transición del sistema periódico.\n\nMi símbolo Ta',
       clase: 'Metales de transición'			
     },

     {
       id: 74,
       name: 'Wolframio',
       sigla: 'W',
       letra: 'El Wolframio es un metal escaso en la corteza terrestre\n\nSe encuentra en forma de óxidos y sales en ciertos minerales,\n\nSu número atómico es 74 y su símbolo es la W.\n\nEs de color gris y es duro.',
       clase: 'Metales de transición'			
     },

     {
       id: 75,
       name: 'Renio',
       sigla: 'Re',
       letra: 'Es un elemento metálico refractario resistente a la corrosión.\n\nUna de sus descubridoras fue la alemana Ida Take.\n\nEl Renio tiene número atómico 75\n\nPor eso se usa en la joyería.',
       clase: 'Metales de transición'				
     },

     {
       id: 76,
       name: 'Osmio',
       sigla: 'Os',
       letra: 'Elemento que es el más denso y muy tóxico también.\n\nPuede provocar daños hasta la muerte,\n\nPresenta también un olor muy feo\n\nY fue descubierto en 1803',
       clase: 'Metales de transición'				
     },

     {
       id: 77,
       name: 'Iridio',
       sigla: 'Ir',
       letra: 'Yo soy Iridio\n\nMi número atómico es 77\n\nY mi símbolo es Ir.\n\nSoy el segundo elemento más duro, frágil, pesado, y resistente \n\nHasta incluso a temperaturas tan altas como 2000 °C de calor.',
       clase: 'Metales de transición'			
     },

     {
       id: 78,
       name: 'Platino',
       sigla: 'Pt',
       letra: 'Se emplea en joyería, contactos electrónicos\n\nTambién lo podemos encontrar en drogas anti cancerígenas\n\nY en algunos aparatos de neurocirugía.\n\nY equipamientos de laboratorio.\n\nPuede alterarnos el ADN, \n\nY hasta dañarnos internamente.\n\nSu símbolo es Pt y su número atómico el 78.\n\nEn 1735, Antonio de Ulloa, lo descubrió en Ecuador\n\nDonde lo confundió con la plata\n\nPor su precioso color.',
       clase: 'Metales de transición'				
     },

     {
       id: 79,
       name: 'Oro',
       sigla: 'Au',
       letra: 'El oro es un elemento químico de número atómico 79\n\nEs un metal precioso blando y de color amarillo\n\nEl oro no es un elemento esencial para ningún ser vivo,\n\nAlgunos creían que ingerir sus alimentos diarios en platos de oro\n\nPodría prolongar su tiempo de vida y prolongar el envejecimiento.\n\nTambién durante la gran peste negra en Europa,\n\nAlgunos alquimistas pensaron que podrían curar a los enfermos\n\nHaciéndoles consumir oro finamente pulverizado.\n\nY su símbolo es Au\n\nSin embargo, en la antigüedad',
       clase: 'Metales de transición'				
     },

     {
       id: 80,
       name: 'Mercurio',
       sigla: 'Hg',
       letra: 'En los termómetros esta\n\ny la temperatura de tu cuerpo este elemento medirá.\n\nEs muy peligroso si te llega a alcanzar,\n\ngrandes problemas te dará, hasta mongolismo te causará.',
       clase: 'Metales de transición'				
     },

     {
       id: 81,
       name: 'Talio',
       sigla: 'Ti',
       letra: 'Su número atómico es 81, su símbolo Tl\n\nEs pesado, es un metal muy blando y maleable.\n\nSu color es gris azulado parecido al plomo.\n\nUna de sus aplicaciones es por ejemplo el Sulfato de Talio\n\nSe puede cortar con cuchillo.\n\nEs tóxico para los humanos.\n\nque extermina ratas y hormigas.',
       clase: 'Metales del bloque p'			
     },

     {
       id: 82,
       name: 'Plomo',
       sigla: 'Pb',
       letra: 'Estas pesado Pb 82,\n\nestas pesado, pobre metal.\n\nEstas pesado deberías adelgazar,\n\nestas pesado, anzuelo de pescar.\n\nplomo pesado, PESADO,PESADO pesado saturnismo\n\nplumbosis plumbosis,\n\nsi te lo comes te puede causar,\n\ntipos de cáncer y muchas cosas más.',
       clase: 'Metales del bloque p'				
     },

     {
       id: 83,
       name: 'Bismuto',
       sigla: 'Bi',
       letra: 'El símbolo del bismuto es el Bi,\n\nEs gris, es un metal noble \n\nY una sustancia diamagnética.\n\nY su número atómico es 83.',
       clase: 'Metales del bloque p'				
     },

     {
       id: 84,
       name: 'Polonio',
       sigla: 'Po',
       letra: 'Una diosa, una revolución\n\nMes descubrieron con mucha pasión,\n\nMary es su nombre ella me encontró,\n\npor este descubrimiento su vida ella dio.\n\nEn el tabaco me puedes encontrar, Polonio 210 te puede matar.',
       clase: 'Metaloides'				
     },

     {
       id: 85,
       name: 'Astato',
       sigla: 'At',
       letra: 'Es el más pesado de los halógenos,\n\nsu comportamiento químico es altamente radioactivo\n\nEs más metálico que el Iodo y su número atómico es 85.\n\nEs el elemento más raro de la naturaleza,\n\nFue sintetizado por primera vez en 1940,\n\npor Corson, Mackenzie y Segré.\n\nEste elemento se abrevia At.',
       clase: 'Halógenos'				
     },

     {
       id: 86,
       name: 'Radón',
       sigla: 'Rn',
       letra: 'Se dice que aquella masa de gas, concentradas en diferentes zonas\n\nEl radón es un elemento químico, gas noble.\n\nEn su forma gaseosa es incoloro.\n\nEs conocido con el número 86 y símbolo Rn\n\nEs también radioactivo.\n\npredicen los terremotos.',
       clase: 'Gases nobles y Transactínidos'			
     },

     {
       id: 87,
       name: 'Francio',
       sigla: 'Fr',
       letra: 'Es un metal alcalino altamente radioactivo,\n\nQue se desintegra generando Astato, radio y radón.\n\nEn 1993 fue descubierto por Marguerite Perey\n\nFue el último elemento químico descubierto en la naturaleza\n\nSu número es 87 y se abrevia Fr\n\nAntes de ser sintetizado. \n\nSus propiedades se asemejan al Cesio.',
       clase: 'Alcalinos'				
     },

     {
       id: 88,
       name: 'Radio',
       sigla: 'Ra',
       letra: 'Número atómico 88, es color blanco inmaculado\n\npero se ennegrece con la exposición al aire.\n\nEs un alcalinotérreo, es extremadamente radioactivo.\n\nAntiguamente se usaba en pinturas luminiscentes.\n\nMás de cientos de pintores que usaban sus labios para morder el pincel,\n\nmurieron por la radiación.',
       clase: 'Alcalinotérreos'				
     },

     {
       id: 89,
       name: 'Actinio',
       sigla: 'Ac',
       letra: 'El Actinio es un elemento químico, de símbolo Ac.\n\nEl uso del Actinio es casi exclusivo para investigaciones científicas.\n\nEs extremadamente radioactivo y peligroso y\n\nSu número atómico es el 89.\n\nno se usa en ningún material comercial.',
       clase: 'Actínidos'				
     },

     {
       id: 90,
       name: 'Torio',
       sigla: 'Th',
       letra: 'Torio, Th es 90\n\nSe encuentra con otros minerales, puro es blanco plata ah, ah, ah,\n\nEn honor al dios nórdico Thor.\n\nEl relámpago y la tormenta ah, ah, ah.\n\nTorio es Th.',
       clase: 'Actínidos'			
     },

     {
       id: 91,
       name: 'Protactinio',
       sigla: 'Pa',
       letra: 'Hecho con la desintegración\n\nradioactiva del uranio y el torio.\n\nProtactinio, protactinio.\n\nNo lo toques con tu mano desnuda,\n\ntiene un brillo intenso,\n\nNúmero 91.',
       clase: 'Actínidos'			
     },

     {
       id: 92,
       name: 'Uranio',
       sigla: 'U',
       letra: 'El uranio es un elemento químico cuyo número es 92.\n\nDenso igual que el plomo es, uranio es,\n\ncon las supernovas su origen natural es, uranio es,\n\nefectos en los órganos puede provocar\n\nSu símbolo es la U.',
       clase: 'Actínidos'				
     },

     {
       id: 93,
       name: 'Neptunio',
       sigla: 'Np',
       letra: 'Metal blanco y muy plateado,\n\nViene de un planeta lejano, es Neptunio\n\nTene cuidado él es reactivo\n\nEs Neptunio\n\nEs Neptunio\n\nEs Neptunio\n\nMetal blanco, muy plateado, es el Neptunio.',
       clase: 'Actínidos'				
     },

     {
       id: 94,
       name: 'Plutonio',
       sigla: 'Pu',
       letra: 'Plutonio su símbolo Pu y el número atómico 94.\n\nEs un metal con apariencia plateada.\n\nQue se oscurece cuando es expuesto al aire.\n\nTiene 80 millones de años.',
       clase: 'Actínidos'			
     },

     {
       id: 95,
       name: 'Americio',
       sigla: 'Am',
       letra: 'El Americio forma parte del grupo de los Actínidos.\n\nTodos los isótopos del grupo de los actínidos,\n\nentre los que se encuentra el Americio,\n\nson reactivos.\n\nEl estado del Americio en su forma natural es sólido.\n\nEs un elemento químico de aspecto blanco plateado.\n\nEl número atómico del Americio es 95.',
       clase: 'Actínidos'			
     },

     {
       id: 96,
       name: 'Curio',
       sigla: 'Cm',
       letra: 'Es el elemento al cual le corresponde el número 96 y su símbolo es Cu.\n\nSe produce bombardeando plutonio con partículas alfa,\n\nes decir iones de Helio.\n\nEs un actínido y no existe en el ambiente terrestre,\n\npero puede producirse en forma artificial. \n\nEl curio fue sintetizado por primera vez\n\nen la universidad Berkeley de California.\n\nTambién por Gelnn T. Seaborg, Ralph A. James y Albert Ghiorso en 1944.\n\nSe eligió el nombre curio en honor a Marie Curie y su marido Pierre,\n\ny por otros importantes trabajos sobre radioactividad.\n\nfamosos por descubrir el radio',
       clase: 'Actínidos'				
     },

     {
       id: 97,
       name: 'Berkelio',
       sigla: 'Bk',
       letra: 'Es radioactivo, color plateado\n\nEs el número 97,\n\ncolor plateado le toco \n\ny su nombre se asemejo a una ciudad llamada Berkeley.',
       clase: 'Actínidos'				
     },

     {
       id: 98,
       name: 'Californio',
       sigla: 'Cf',
       letra: 'El californio, es radioactivo y su símbolo es Cf.\n\nSu número atómico es 98,\n\nse utiliza en la cura del cáncer.',
       clase: 'Actínidos'				
     },

     {
       id: 99,
       name: 'Einstenio',
       sigla: 'Es',
       letra: 'En honor a un genio, este elemento se nombro.\n\nLe toque el 99, son los protones de su núcleo\n\nLe toque el 99, son los protones de su núcleo\n\nen la primera explosión termonuclear que el pacífico ocurrió.\n\nAdam Ghiorso lo descubrió, en 1952,',
       clase: 'Actínidos'				
     },

     {
       id: 100,
       name: 'Fermio',
       sigla: 'Fm',
       letra: 'Elemento químico radioactivo, creado artificialmente.\n\nSu número atómico es 100,\n\ntambién se encuentra en la naturaleza.',
       clase: 'Actínidos'				
     },

     {
       id: 101,
       name: 'Mendelevio',
       sigla: 'Md',
       letra: 'El Mendelevio forma parte del grupo de los actínidos.\n\nTodos los isótopos del grupo de los actínidos,\n\nentre los que se encuentra él, son radioactivos.\n\nEl estado del Mendelevio en su forma natural es desconocido,\n\npresuntamente sólido.\n\nProbablemente, metálico, plateado, blanco o gris.\n\nEl número atómico del Mendelevio es el 101.\n\nSu símbolo químico es el Md.\n\nEl Mendelevio no se encuentra en la naturaleza,\n\nfue descubierto que se prepara por la transmutación nuclear artificial\n\nde un elemento más ligero.\n\nSu nombre está dado en honor al científico,\n\nDmitri Ivánovich Mendeléiev, quien diseño la tabla periódica.',
       clase: 'Actínidos'			
     },

     {
       id: 102,
       name: 'Nobelio',
       sigla: 'No',
       letra: 'El Nobelio es un elemento sintético de la tabla periódica\n\ny su símbolo es No, es mucho más pesado que el uranio,\n\nllamado así, en honor a Alfred, a Alfred Nobel, a Alfred Nobel\n\nSu número atómico es el 102, el 102.',
       clase: 'Actínidos'				
     },

     {
       id: 103,
       name: 'Laurencio',
       sigla: 'Lr',
       letra: 'El lawrencio es un elemento sintético radioactivo,\n\ncuyo símbolo es Lr.\n\nEs el último elemento de la serie de los actínidos, su número atómico es 103.\n\nLos primeros átomos de lawrencio fueron producidos al bombardear un blanco de 3 miligramos\n\ncompuestos de isótopos de californio.\n\nEl nombre de este elemento fue en honor al físico estadounidense, Ernest Lawrence.\n\nEste fue el elemento más pesado en ser sintetizado.',
       clase: 'Actínidos'				
     },

     {
       id: 104,
       name: 'Rutherfordio',
       sigla: 'Rf',
       letra: 'No, no, no, no, no, no, no, no\n\n104 me dicen o Rutherfordio también.\n\nErnest fue quien me descubrió,\n\ny no vivo más de 13 horas, 13 horas, 13 horas.',
       clase: 'Metales de transición'			
     },

     {
       id: 105,
       name: 'Dubnio',
       sigla: 'Db',
       letra: 'Es el elemento químico de número de la tabla periódica de los elementos,\n\ncuyo símbolo es Db,\n\ny su número atómico es 105.\n\nEs un elemento sintético y radioactivo.',
       clase: 'Metales de transición'				
     },

     {
       id: 106,
       name: 'Seaborgio',
       sigla: 'Sg',
       letra: 'Cuyo símbolo es Sg y su número atómico 106.\n\nEs inestable y un metal de transición.',
       clase: 'Metales de transición'			
     },

     {
       id: 107,
       name: 'Bohrio',
       sigla: 'Bh',
       letra: 'Es inestable y de corta vida,\n\nsu número Z es 107,\n\nse escribe con la B y la H.\n\nSu nombre es Bohrio.',
       clase: 'Metales de transición'				
     },

     {
       id: 108,
       name: 'Hassio',
       sigla: 'Hs',
       letra: 'Llamados elementos de transición, es el grupo al que pertenece el Hassio.\n\nEl estado en su forma natural, es desconocido,\n\npresuntamente sólido.\n\nSu aspecto químico también es desconocido,\n\nprobablemente metálico, plateado o gris.\n\nEl número atómico del Hassio es 108.',
       clase: 'Metales de transición'				
     },

     {
       id: 109,
       name: 'Meitnerio',
       sigla: 'Mt',
       letra: 'Su símbolo es Mt y su número atómico es 109.\n\nEs un elemento sintético cuya vida es de 10 años.\n\nEl meitnerio fue encontrado por accidente,\n\npor Peter Armbruster y Gottfried Munzenberg.\n\nEl nombre es en honor a la matemática y la física.',
       clase: 'Metales de transición'				
     },

     {
       id: 110,
       name: 'Darmstadtio',
       sigla: 'Ds',
       letra: 'Es un elemento químico de la tabla periódica,\n\ncuyo símbolo es Ds y su número atómico es 110.\n\nAlgunos científicos sugirieron el nombre policium\n\npara el nuevo elemento puesto que 110\n\nes el número telefónico de emergencias de la policía alemana.\n\nEs uno de los átomos súper pesados.',
       clase: 'Metales de transición'				
     },

     {
       id: 111,
       name: 'Roentgenio',
       sigla: 'Rg',
       letra: 'Es un elemento químico cuyo símbolo es Rg,\n\nFue descubierto en 1994 por científicos alemanes.\n\nEn noviembre del 2004 recibió el nombre de roentgenio\n\nen honor a Wilhelm Conrad Roentgen,\n\npremio Nobel de Física, y descubridor de los rayos x\n\ny su número atómico es 111.',
       clase: 'Metales de transición'			
     },

     {
       id: 112,
       name: 'Copernicio',
       sigla: 'Cn',
       letra: 'Anteriormente llamado ununbio.\n\nNo se conoce su apariencia física y vive poco tiempo.\n\nEl nombre es en honor al científico Nicolás Copérnico.\n\nSu número atómico es 112.',
       clase: 'Metales de transición'				
     },

     {
       id: 113,
       name: 'Ununtrio',
       sigla: 'Uut',
       letra: 'El número atómico del ununtrio es el 113\n\ny su símbolo temporal es el Uut.\n\nSu forma natural es desconocida',
       clase: 'Metales de transición'				
     },

     {
       id: 114,
       name: 'Flerovio',
       sigla: 'Fl',
       letra: 'Hace dos años que mi nombre es Flerovio,\n\nNo pienses que mi color es plateado o metálico,\n\nlos científicos malos son y me llaman número 114.',
       clase: 'Metales de transición'				
     },

     {
       id: 115,
       name: 'Ununpentio',
       sigla: 'Uup',
       letra: 'El ununpentio cuyo símbolo es Uup,\n\nfue descubierto por científicos rusos en Dubna,\n\nhace aproximadamente 10 años.\n\nSin embargo en septiembre 2013 se confirmo que el elemento no puede ser replicado,\n\nes muy inestable con una vida media de milésimas de segundos.',
       clase: 'Metales de transición'				
     },

     {
       id: 116,
       name: 'Livermorio',
       sigla: 'Lv',
       letra: 'Su número atómico es el 116, y su símbolo es Lv\n\nEs inestable y las aplicaciones industriales son nulas.\n\nEs un átomo súper pesado.',
       clase: 'Metales de transición'				
     },

     {
       id: 117,
       name: 'Ununseptio',
       sigla: 'Uus',
       letra: 'En el año 2013 científicos rusos y estadounidenses\n\nhan creado un elemento súper pesado,\n\nhecho de átomos que contienen 117 protones.\n\nEs aproximadamente un 40% más pesado que el plomo.\n\nEste elemento con número atómico 117,\n\nse dio a llamar ununseptio.',
       clase: 'Halógenos'			
     },
     {
       id: 118,
       name: 'Ununoctio',
       sigla: 'Uuo',
       letra: 'El ununoctio es radioactivo,\n\naltamente inestable,\n\nse sitúa cerca de la isla de estabilidad,\n\npor lo que su núcleo es ligeramente más estable de lo predicho.\n\nA fines de 1998, el físico polaco Robert Smolanczuk,\n\npublicó sus cálculos sobre la fusión nuclear, \n\nde varios núcleos para sintetizar elementos transuránicos,\n\nesto incluía al número 118.',
       clase: 'Gases nobles y Transactínidos'				
     }

    ];


    return Elemento;
  });
define("appkit/router",
  [],
  function() {
    "use strict";
    var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

    Router.map(function () {
      this.route('tabla', { path: '/tabla' });
      this.route('proyecto', { path: '/proyecto' });
      this.route('quienes', { path: '/quienes' });
      this.resource('elemento', { path: '/:elemento_id' });
    });


    return Router;
  });
define("appkit/routes/application",
  [],
  function() {
    "use strict";
    var ApplicationRoute = Ember.Route.extend({
        model: function () {
              return this.store.find('elemento');
                }
    });


    return ApplicationRoute;
  });
define("appkit/routes/component_test",
  [],
  function() {
    "use strict";
    var ComponentTestRoute = Ember.Route.extend({
      model: function() {
        return ['purple', 'green', 'orange'];
      }
    });



    return ComponentTestRoute;
  });
define("appkit/routes/index",
  [],
  function() {
    "use strict";
    var IndexRoute = Ember.Route.extend({
      model: function() {
        return ['red', 'yellow', 'blue'];
      }
    });


    return IndexRoute;
  });
define("appkit/utils/register_components",
  [],
  function() {
    "use strict";
    /* global requirejs */
    /* global require */

    function registerComponents(container) {
      var seen = requirejs._eak_seen;
      var templates = seen, match;
      if (!templates) { return; }

      for (var prop in templates) {
        if (match = prop.match(/templates\/components\/(.*)$/)) {
          require(prop, null, null, true);
          registerComponent(container, match[1]);
        }
      }
    }


    function registerComponent(container, name) {
      Ember.assert("You provided a template named 'components/" + name + "', but custom components must include a '-'", name.match(/-/));

      var fullName         = 'component:' + name,
          templateFullName = 'template:components/' + name;

      container.injection(fullName, 'layout', templateFullName);

      var Component = container.lookupFactory(fullName);

      if (!Component) {
        container.register(fullName, Ember.Component);
        Component = container.lookupFactory(fullName);
      }

      Ember.Handlebars.helper(name, Component);
    }


    return registerComponents;
  });
//@ sourceMappingURL=app.js.map