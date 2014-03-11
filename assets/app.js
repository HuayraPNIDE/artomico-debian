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
       letra: "En primer lugar situado está\n\ncon uno de estos y otros más\n\nagua se formará…… Hidrógeno.\n\nEn el Universo es abundante\n\ny en nuestro territorio limitado.\n\nSe encuentra mucho en el espacio\n\neste combustible de los astros.",
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
       letra: 'Y dale, dale, dale, dale, dale, dale, dale Litio.\n\n Este elemento a mí me gusta\n\n sí que es el mejor\n\n El es liviano,  es muy frágil, el es de color blanco .\n\n Número 3 el Litio es el mejor.\n\n Y dale, dale, dale, dale, dale, Litio.\n\n Y dale, dale, dale, dale, dale, dale Li.\n\n Litio vos sos mi pasión…',
       clase: 'Alcalinos'
     },

     {
       id: 4,
       name: 'Berilio',
       sigla: 'Be',	
       letra: 'El Berilio es un elemento químico de símbolo Be número atómico 4.\n\n Es un elemento alcalinotérreo, bivalente, tóxico, de color gris\n\n duro, ligero y quebradizo.\n\n Se emplea principalmente con endurecedor en aleaciones\n\n especialmente de cobre.',
       clase: 'Alcalinotérreos'			
     },

     {
       id: 5,
       name: 'Boro',
       sigla: 'B',
       letra: 'Casi tan duro como un diamante puede ser\n\n amorfo cristalizado también.\n\n Boro, Boro, Boro, Borooo\n\n Cuerpo simple tiene, de color pardo oscuro es él.\n\n Boro, Boro, Boro, Borooo.',
       clase: 'Metaloides'			
     },

     {
       id: 6,
       name: 'Carbono',
       sigla: 'C',
       letra: 'El carbono es un elemento químico de número atómico 6\n\n y símbolo C.\n\n De cristalino, tal como el carbono en forma de diamante o de grafito.\n\n Mezclado con oxígeno forma el dióxido de carbono\n\n volviéndose vital para el crecimiento natural de las plantas\n\n que nos dan la oportunidad de respirar.\n\n Este elemento forma parte de todos los seres vivos conocidos.\n\n También es esencial para la industria del transporte\n\n en forma de combustible fósil.',
       clase: 'No metales'				
     },

     {
       id: 7,
       name: 'Nitrógeno',
       sigla: 'N',
       letra: 'Es un elemento verde, que tienen forma de gas.\n\n Su número zeta es 7, se escribe con la letra N.\n\n Su nombre es Nitrógeno.',
       clase: 'No metales'				
     },

     {
       id: 8,
       name: 'Oxígeno',
       sigla: 'O',
       letra: 'Sobre el oxígeno les vengo a cantar\n\n y enseguida yo voy a empezar.\n\n Mi número atómico es el número 8\n\n y corro por la sangre y puedo explotar.\n\n Si vas en submarino o en un vuelo espacial\n\n no me puedes olvidar.',
       clase: 'No metales'				
     },

     {
       id: 9,
       name: 'Flúor',
       sigla: 'F',
       letra: 'Elegido es el número 9.\n\n Cuando te lavas los dientes.\n\n Él, electronegativo reactivo.\n\n Así es el Flúor\n\n alejado del Hidrógeno\n\n Para que no explote.',
       clase: 'Halógenos'				
     },

     {
       id: 10,
       name: 'Neón',
       letra: 'El neón es un gas noble incoloro\n\n presente en trazas en el aire  pero muy abundante en el universo.\n\n Su símbolo es Ne y su número atómico es el 10.\n\n Se lo utiliza para lámparas fluorescentes  y tubos de televisión.\n\n Junto con el helio se emplea para obtener un tipo de láser.',
       sigla: 'Ne',
       clase: 'Gases nobles y Transactínidos'				
     },

     {
       id: 11,
       name: 'Sodio',
       sigla: 'Na',
       letra: 'El sodio es un metal blando y plateado.\n\n Abundante en la naturaleza yace,\n\n arde en llama amarilla,\n\n se oxida en presencia del oxígeno y\n\n acciona violentamente mezclado con el H2o.\n\n Se utiliza en la industria textil, componente de algunas gasolinas\n\n y puede emplearse como refrigerante en reactores nucleares.\n\n Es raro que sirva para congelar bombas,\n\n y al mismo tiempo pueda hacer que todo estalle.\n\n Na es su símbolo, y 11 es el número atómico.\n\n Está ubicado en el grupo 1 de la tabla periódica y fue descubierto en el año 1807.',
       clase: 'Alcalinos'				
     },

     {
       id: 12,
       name: 'Magnesio',
       sigla: 'Mg',
       letra: 'El símbolo del magnesio es el Mg\n\n y con un número atómico de 12\n\n es un metal liviano medianamente fuerte\n\n de color blanco plateado y altamente inflamable.',
       clase: 'Alcalinotérreos'			
     },

     {
       id: 13,
       name: 'Aluminio',
       sigla: 'Al',
       letra: 'Envuelvo alfajores y también bombones.\n\n Soy muy común, te lo puedo asegurar.\n\n Conduzco el calor, y te ayuda a cocinar.\n\n Decimotercero es mi lugar.',
       clase: 'Metales del bloque p'			
     },

     {
       id: 14,
       name: 'Silicio',
       sigla: 'Si',
       letra: 'Soy un metal el número 14 nunca solo estoy.\n\n Me presento en los minerales,\n\n me usan en aleaciones como silicona,\n\n en la creación de obleas para implantar,\n\n en transistores.',
       clase: 'Metaloides'				
     },

     {
       id: 15,
       name: 'Fósforo',
       sigla: 'P',
       letra: 'Es el elemento al cual le corresponde el número atómico 15\n\n y su símbolo es P. Es un metal multivalente\n\n perteneciente al grupo del nitrógeno\n\n que se encuentra en la naturaleza.\n\n Combinado a fosfatos inorgánicos y en organismos vivos\n\n pero nunca en estado nativo.\n\n De este elemento pueden encontrarse\n\n pequeñas cantidades en el semen\n\n lo que hace que este fluido resalte notablemente ante la luz ultravioleta\n\n para permitir resolver algunos casos criminales.',
       clase: 'No metales'				
     },

     {
       id: 16,
       name: 'Azufre',
       sigla: 'S',
       letra: 'Es el elemento al que le corresponde el número atómico 16\n\n y su símbolo es S. Se encuentra en forma nativa en regiones volcánicas\n\n y es reconocido por su fuerte y particular olor.\n\n Es un elemento químico esencial\n\n constituyente de los aminoácidos cisteína y metionina\n\n y por consiguiente necesario para la síntesis de proteínas de todos los organismos vivos.\n\n Se usa principalmente como fertilizante pero también\n\n en la fabricación de pólvora, laxante, cerillas e insecticidas.',
       clase: 'No metales'				
     },

     {
       id: 17,
       name: 'Cloro',
       sigla: 'Cl',
       letra: 'El cloro es un elemento químico de número atómico 17.\n\n Es un halógeno y su símbolo es Cl.\n\n En la naturaleza no se encuentra en estado puro\n\n ya que reacciona con mucha rapidez con muchos elementos y compuestos químicos.\n\n El gas cloro amarillo verdoso\n\n se ha usado en la guerra de Iraq, en donde el 17 de marzo de 2007, por ejemplo,\n\n las bombas de cloro enfermaron a más de 350 personas.',
       clase: 'Halógenos'				
     },

     {
       id: 18,
       name: 'Argón',
       sigla: 'Ar',
       letra: 'Elemento químico de número atómico 18 y símbolo Ar.\n\n Es el tercero de los gases nobles, incoloro e inerte como ellos.\n\n Constituye el 0.934% del aire seco.\n\n Su nombre proviene del griego y significa Inactivo debido a que no reacciona.',
       clase: 'Gases nobles y Transactínidos'			
     },

     {
       id: 19,
       name: 'Potasio',
       sigla: 'K',
       letra: 'Se encuentra en los granos, carnes, frutas y legumbres también\n\n en las bananas que los monos consumen.\n\n Su nitrato se utiliza, para pólvora crear.\n\n Sulfato como fertilizante para la tierra cosechar.',
       clase: 'Alcalinos'				
     },

     {
       id: 20,
       name: 'Calcio',
       sigla: 'Ca',
       letra: 'Me encuentro en el organismo en forma de huesos.\n\n Estoy en la leche y también en los quesos.\n\n Consume mucho calcio o tus huesos quebraras.',
       clase: 'Alcalinotérreos'			
     },

     {
       id: 21,
       name: 'Escandio',
       sigla: 'Sc',
       letra: 'Escandio, escandio, Escandinavia, escandio Escandinavia.\n\n 1878 fue descubierto allí.\n\n 21 Sc, 21 Sc, 21\n\n En tonos plateados, amarillentos y rosados.\n\n Es usado para luces de alta intensidad.\n\n Escandio, escandio, Escandinavia, escandio Escandinavia.',
       clase: 'Metales de transición'			
     },

     {
       id: 22,
       name: 'Titanio',
       sigla: 'Ti',
       letra: 'Con su óxido se hace la pintura color marfil.\n\n Se utiliza para muchas cosas\n\n y para hacer piercing.\n\n Proviene del griego antiguo,  “Tierra blanca” simboliza.\n\n Se emplea como blindaje, en relojes y joyería.\n\n Titanio es el 22, es 22.',
       clase: 'Metales de transición'			
     },

     {
       id: 23,
       name: 'Vandio',
       sigla: 'V',
       letra: 'Se abrevia como V, y es el número 23.\n\n Es un metal dúctil, blando, y poco abundante.\n\n Se usa en aleaciones y se encuentra en minerales.\n\n Es de color gris plateado y se produce en China y en Rusia.',
       clase: 'Metales de transición'				
     },

     {
       id: 24,
       name: 'Cromo',
       sigla: 'Cr',
       letra: 'Su nombre derivado del griego Croma, color\n\n se debe a los distintos colores que presentan sus compuestos.\n\n Su símbolo es Cr y su número atómico 24.\n\n Los compuestos del cromo son tóxicos y altamente reactivos.',
       clase: 'Metales de transición'				
     },

     {
       id: 25,
       name: 'Manganeso',
       sigla: 'Mn',
       letra: 'El manganeso es el elemento químico de número atómico 25\n\n situado en el grupo 7B de la tabla periódica de los elementos\n\n y se simboliza Mn.',
       clase: 'Metales de transición'				
     },

     {
       id: 26,
       name: 'Hierro',
       sigla: 'Fe',
       letra: 'El hierro es metal de transición.\n\n Es uno de los elementos más abundantes de la corteza terrestre\n\n y aún más en el núcleo de la tierra.\n\n Al ser tan abundante, dúctil y resistente\n\n se usa en diversas actividades.\n\n Su número atómico es el 26.\n\n El uso más extenso de hierro  es para la obtención de aceros estructurales.\n\n También se producen grandes cantidades de hierro fundido\n\n y de hierro forjado.\n\n Entre otros usos de hierro y sus compuestos\n\n se tienen la fabricación de imanes, tintes y adhesivos.',
       clase: 'Metales de transición'			
     },

     {
       id: 27,
       name: 'Cobalto',
       sigla: 'Co',
       letra: 'El cobalto es un metal duro, es ferromagnético.\n\n Color blanco azulado.\n\n El Co 60 es un radioisótopo del cobalto y es importante\n\n trazador y agente en el tratamiento del cáncer.\n\n El símbolo es Co con el número atómico 27.\n\n Pertenece a la serie química de metales de transición.',
       clase: 'Metales de transición'				
     },

     {
       id: 28,
       name: 'Níquel',
       sigla: 'Ni',
       letra: 'Su número atómico es 28, y su símbolo Ni.\n\n Es un metal de transición, así como también cancerígeno y tóxico.\n\n Es dúctil y maleable de color blanco plateado\n\n esencial para la industria y pobre conductor de la electricidad.',
       clase: 'Metales de transición'				
     },

     {
       id: 29,
       name: 'Cobre',
       sigla: 'Cu',
       letra: 'El Cobre se oxida si llueve\n\n en la tabla periódica su número atómico es el 29.\n\n Se encuentra en los cables transportando electrones.\n\n Si no lo sabías ¡no te amontones!\n\n El Cobre tiene un poder sin igual, es el tercer metal, es fundamental,\n\n el más utilizado a nivel mundial.',
       clase: 'Metales de transición'			
     },

     {
       id: 30,
       name: 'Zinc',
       sigla: 'Zn',
       letra: 'En la tabla periódica es el número 30\n\n y su símbolo es Zn.\n\n El Cinc es un metal de transición que se parece al magnesio.\n\n El Cinc es de color blanco azulado.',
       clase: 'Metales de transición'				
     },

     {
       id: 31,
       name: 'Galio',
       sigla: 'Ga',
       letra: 'Yo soy el Galio, mi número atómico es 31\n\n y soy un metal blando y brillante.\n\n Mi presión de vapor es baja, incluso a altas temperaturas.\n\n Mi símbolo es Ga.',
       clase: 'Metales del bloque p'				
     },

     {
       id: 32,
       name: 'Germanio',
       sigla: 'Ge',
       letra: 'Su símbolo es Ge, su número atómico 32.\n\n Duro y cristalino de color blanco grisáceo,\n\n se lo utiliza para fibra óptica en radares\n\n y para amplificadores de guitarras eléctricas.',
       clase: 'Metaloides'				
     },

     {
       id: 33,
       name: 'Arsénico',
       sigla: 'As',
       letra: 'Se encuentra en el quinto grupo principal.\n\n Se presenta principalmente en forma de sulfuro.\n\n Pertenece a los metaloides.\n\n Arsenicooooo, Arsenicooooo.',
       clase: 'Metaloides'			
     },

     {
       id: 34,
       name: 'Selenio',
       sigla: 'Se',
       letra: 'El número 34 soy, Selenio me llamo yo.\n\n ¿Vos tenés acné? Usame te hago bien.\n\n Oh, oh, oh, oh, soy el mejor si soy el mejor.\n\n Oh, Oh, Oh, Oh, Oh, en la comida siempre estoy yo.\n\n Me usan como insecticida, soy insoluble en agua y alcohol.',
       clase: 'No metales'				
     },

     {
       id: 35,
       name: 'Bromo',
       sigla: 'Br',
       letra: 'Altamente tóxico es este elemento.\n\n Es un líquido rojo que te irrita los ojos.\n\n A temperatura ambiente es bastante volátil.\n\n Produce quemaduras ten cuidado en ti.',
       clase: 'Halógenos'				
     },

     {
       id: 36,
       name: 'Kriptón',
       sigla: 'Kr',
       letra: 'El Kriptón en la tabla es el número 36.\n\n Abreviado como Kr, es un gas noble inodoro e insípido\n\n con poco reactividad, con un espectro de luz verde y roja  con anaranjado\n\n muy brillante.',
       clase: 'Gases nobles y Transactínidos'				
     },

     {
       id: 37,
       name: 'Rubidio',
       sigla: 'Rb',
       letra: 'El rubidio es un elemento químico, su número atómico es el 37.\n\n Es un metal alcalino blando y es plateado brillante.\n\n Se utiliza en la fabricación  de cristales especiales para el tratamiento de la epilepsia\n\n y también para la separación por ultra centrifugado.',
       clase: 'Alcalinos'				
     },

     {
       id: 38,
       name: 'Estroncio',
       sigla: 'Sr',
       letra: 'El estroncio es blanco, coloreado y tiene una baja densidad.\n\n Los elementos como es estroncio tienen una baja energía de ionización.\n\n El estado de este elemento, en su aspecto químico es\n\n metálico, plateado, blanquecino.',
       clase: 'Alcalinotérreos'			
     },

     {
       id: 39,
       name: 'Itrio',
       sigla: 'Y',
       letra: 'Mineral te encuentro en estas tierras extrañas.\n\n Poco común mineral se llama Itrio.\n\n Metal brillante te quiero para el color de mi televisión.\n\n Mineral te encuentro en esas tierras extrañas.\n\n Se llama Itrio.',
       clase: 'Metales de transición'				
     },

     {
       id: 40,
       name: 'Zirconio',
       sigla: 'Zr',
       letra: 'El zirconio es un metal duro resistente a la corrosión.\n\n Blanco, grisáceo es su color.\n\n Se utiliza sobre todo en el reactor, me tienen harta con lo de la explosión.\n\n Pertenece al grupo IV B en la tabla periódica.\n\n Con Zr se identifica y en 40 se clasifica.',
       clase: 'Metales de transición'			
     },

     {
       id: 41,
       name: 'Niobio',
       sigla: 'Nb',
       letra: 'Es blanco y poco abundante, se encuentra en el mineral Niobita.\n\n Se utiliza en aleaciones.\n\n Cuando permanece en contacto con el aire presenta un color azul.\n\n Tiene usos industriales y  científicos.',
       clase: 'Metales de transición'			
     },

     {
       id: 42,
       name: 'Molibdeno',
       sigla: 'Mo',
       letra: 'Cuidado que me quiebro fácil,\n\n no me fundo yo soy ágil, soy un metal, soy un metal.\n\n Y pesado como el cobre mami...\n\n Uh, uh, uh, uh.',
       clase: 'Metales de transición'				
     },

     {
       id: 43,
       name: 'Tecnecio',
       sigla: 'Tc',
       letra: 'El Tecnecio es Tc, y su número atómico 43.\n\n Es radioactivo y con forma de polvo.\n\n Es un metal de transición, cristalino y de color plateado.',
       clase: 'Metales de transición'				
     },

     {
       id: 44,
       name: 'Rutenio',
       sigla: 'Ru',
       letra: 'Su número Z es 44, su símbolo es Ru.\n\n Es un metal de transición.\n\n Su nombre es Rutenio.',
       clase: 'Metales de transición'				
     },

     {
       id: 45,
       name: 'Rodio',
       sigla: 'Rh',
       letra: 'Es un elemento químico de número atómico 45.\n\n Su símbolo es Rh y es blanco platinado.\n\n Se usa como catalizador en algunas aleaciones.',
       clase: 'Metales de transición'			
     },

     {
       id: 46,
       name: 'Paladio',
       sigla: 'Pd',
       letra: 'El Paladio es un elemento químico de número atómico 46\n\n y su símbolo es Pd.\n\n Este es un metal de transición,\n\n se emplea principalmente como catalizador\n\n y en joyería.\n\n Es un metal raro y brillante,\n\n de color blanco plateado,\n\n que fue descubierto en 1803 por William Hyde Wollaston.',
       clase: 'Metales de transición'				
     },

     {
       id: 47,
       name: 'Plata',
       sigla: 'Ag',
       letra: 'La plata es un elemento químico de número atómico 47\n\n situado en el grupo 11 B de la tabla periódica de los elementos.\n\n Su símbolo es Ag, es un metal de transición blanco.',
       clase: 'Metales de transición'			
     },

     {
       id: 48,
       name: 'Cadmio',
       sigla: 'Cd',
       letra: 'Cadmio, Cadmio.\n\n Se emplea especialmente en pilas.\n\n Es un metal pesado, produce efectos tóxicos en organismos vivos.\n\n En organismos vivos.',
       clase: 'Metales de transición'				
     },

     {
       id: 49,
       name: 'Indio',
       sigla: 'In',
       letra: 'El indio es el número 49 en la tabla\n\n del grupo 13B, su símbolo es el In.\n\n Es un metal poco abundante,\n\n maleable, fácilmente fundible.\n\n Es parecido al Cinc.\n\n El Indio es de color blanco plateado.\n\n Muy blanco.',
       clase: 'Metales del bloque p'			
     },

     {
       id: 50,
       name: 'Estaño',
       sigla: 'Sn',
       letra: 'El estaño es un elemento químico de símbolo Sn.\n\n Su número atómico es 50.\n\n Se funde a bajas temperaturas, tiene gran fluidez cuando se funde.\n\n Posee un punto de ebullición alto.\n\n Es suave, flexible y resiste a la corrosión de muchos medios.\n\n Una aplicación importante es el recubrimiento\n\n de envases de acero para conservar alimentos y bebidas.\n\n Se emplea también en aleaciones para soldar,\n\n bronces y aleaciones  industriales diversas.\n\n Los productos químicos de estaño tanto inorgánicos como orgánicos,\n\n se utilizan mucho en la industria de galvanoplastia,\n\n cerámicos, plásticos y agricultura.',
       clase: 'Metales del bloque p'				
     },

     {
       id: 51,
       name: 'Antimonio',
       sigla: 'Sb',
       letra: 'El antimonio es un elemento químico de número atómico 51\n\n ubicado en el grupo 15 de la tabla periódica de los elementos.',
       clase: 'Metaloides'				
     },

     {
       id: 52,
       name: 'Telurio',
       sigla: 'Te',
       letra: 'Soy un metaloide muy conocido\n\n que se descubrió en Ucrania.\n\n Su número Z es 52,\n\n su símbolo es Te, su nombre es\n\n Telurio',
       clase: 'Metaloides'			
     },

     {
       id: 53,
       name: 'Yodo',
       sigla: 'I',
       letra: 'Las olas y el viento, sucun dum sucun dum,\n\n y el Iodo del mar la, la, la, la, la, la.\n\n La fotografía, sucun dum sucun dum y la medicina.\n\n Las olas y el viento, sucun dum sucun dum,\n\n y el iodo del mar la, la, la, la, la, la.\n\n Su número atómico es 53.',
       clase: 'Halógenos'				
     },

     {
       id: 54,
       name: 'Xenón',
       sigla: 'Xe',
       letra: 'Gas noble inodoro, demasiado incoloro.\n\n Cuando me excitan, con una descarga eléctrica,\n\n emito un brillo de luz azul, luz azul.',
       clase: 'Gases nobles y Transactínidos'			
     },

     {
       id: 55,
       name: 'Cesio',
       sigla: 'Cs',
       letra: 'Yo soy un metal blando y ligero yo soy.\n\n En la corteza terrestre, yo casi no estoy.\n\n A mí me usan mucho,\n\n me usan en medicina\n\n para ataques de shock, no soy una aspirina.\n\n Soy el 55, a mi me llaman Cesio.\n\n Por favor no te lo olvides,\n\n a mí me llaman Cesio.',
       clase: 'Alcalinos'				
     },

     {
       id: 56,
       name: 'Bario',
       sigla: 'Ba',
       letra: 'El Bario es un elemento químico de la tabla periódica,\n\n reacciona con el cobre y también con el agua.\n\n Es un metal  similar al calcio que se oxida con facilidad.\n\n Aclara muy rápido, sólido, frágil y blando.',
       clase: 'Alcalinotérreos'				
     },

     {
       id: 57,
       name: 'Lantano',
       sigla: 'La',
       letra: 'Numero atómico 57,\n\n fue descubierto por el químico sueco Carl Gustav Mosander.\n\n Se utiliza para lentes de cámaras, vidrios ópticos\n\n y se hacen esponjas de hidrógeno con aleaciones que contienen lantano.',
       clase: 'Lantánidos'			
     },

     {
       id: 58,
       name: 'Cerio',
       sigla: 'Ce',
       letra: 'En los fuegos artificiales participo\n\n ya que exploto, muy fácilmente.\n\n Me alean con otros metales\n\n para hacerme un imán que dure para siempre.',
       clase: 'Lantánidos'				
     },

     {
       id: 59,
       name: 'Praseodimio',
       sigla: 'Pr',
       letra: 'El praseodimio, número atómico 59\n\n es un elemento metálico del grupo de las tierras raras.\n\n El uso principal de él\n\n es como agente de aleaciones con magnesio\n\n para crear metales de elevada dureza\n\n que son usados en motores de aviones.\n\n El praseodimio forma el núcleo de las lámparas de arco volcánico de carbono\n\n que son utilizadas en la industria del cine, para las luces de los estudios\n\n y los proyectores.\n\n Las sales de praseodimio son usadas para dar de color amarillo\n\n a los cristales y esmaltes.',
       clase: 'Lantánidos'			
     },

     {
       id: 60,
       name: 'Neodimio',
       sigla: 'Nd',
       letra: 'Es de color brillante, su número Z es 60.\n\n Se encuentra en estado sólido\n\n a temperatura ambiente.\n\n Se escribe con la N y la d.\n\n Su nombre es Neodimio.\n\n Se oscurece al contacto con el aire\n\n formando un óxido.',
       clase: 'Lantánidos'				
     },

     {
       id: 61,
       name: 'Prometio',
       sigla: 'Pm',
       letra: 'El prometio es radioactivo, radioactivo, radioactivo.\n\n El prometió, Prometeo, 61.\n\n Prometeo se había robado mucho fuego a los dioses.\n\n Prometeo se llama así como fuego.',
       clase: 'Lantánidos'				
     },

     {
       id: 62,
       name: 'Samario',
       sigla: 'Sm',
       letra: 'Su símbolo es Sn.\n\n Fue descubierto en 1853 por un suizo y se encontró en el monte Urales.\n\n Se usa para la luz infrarroja\n\n y actualmente es obtenido a través de un proceso de intercambio iónico\n\n de la arena monacita.',
       clase: 'Lantánidos'				
     },

     {
       id: 63,
       name: 'Europio',
       sigla: 'Eu',
       letra: 'Número atómico 63, fue descubierto en 1890.\n\n El más reactivo de todos los elementos de tierras raras.\n\n Forma compuestos fluorescentes, usados en dispositivos como\n\n Televisores color y lámparas fluorescentes.',
       clase: 'Lantánidos'				
     },

     {
       id: 64,
       name: 'Gadolinio',
       sigla: 'Gd',
       letra: 'Soy el 64, soy magnético.\n\n También calórico.\n\n Soy de los lantánidos, y tengo un óxido levemente básico.',
       clase: 'Lantánidos'				
     },

     {
       id: 65,
       name: 'Terbio',
       sigla: 'Tb',
       letra: 'Para lámparas fluorescentes,\n\n este elemento se utiliza.\n\n Como óxido se encuentra,\n\n dentro de la euxenita.\n\n En otros minerales como la gadolinita.\n\n Estos minerales son los que el minero pica.',
       clase: 'Lantánidos'			
     },

     {
       id: 66,
       name: 'Disprosio',
       sigla: 'Dy',
       letra: 'El Disprosio tiene símbolo Dy.\n\n El Disprosio tiene símbolo Dy.\n\n Es un metal de transición que se usa para láser y además\n\n cortarlo es muy fácil.\n\n El óxido de disprosio es muy magnético.\n\n El óxido de disprosio es muy magnético.\n\n La disprocita es muy magnética, la disprocita es muy magnética.\n\n Más magnética que el óxido de hierro.',
       clase: 'Lantánidos'				
     },

     {
       id: 67,
       name: 'Holmio',
       sigla: 'Ho',
       letra: 'Se utiliza para fabricar, dispositivos electrónicos.\n\n Su número Z es 67, su símbolo es Ho.\n\n Su nombre es Holmio.',
       clase: 'Lantánidos'				
     },

     {
       id: 68,
       name: 'Erbio',
       sigla: 'Er',
       letra: 'El Erbio forma parte del grupo de los lantánidos.\n\n En su forma natural es sólido.\n\n El Erbio es un elemento químico de aspecto blanco plateado.\n\n Su número atómico es 68.',
       clase: ''				
     },

     {
       id: 69,
       name: 'Tulio',
       sigla: 'Tm',
       letra: 'Su símbolo es Tm, con número atómico de 69.\n\n Es un metal blando y de color gris plateado.',
       clase: 'Lantánidos'			
     },

     {
       id: 70,
       name: 'Iterbio',
       sigla: 'Yb',
       letra: 'El Iterbio es un elemento químico de la tabla periódica que tiene símbolo Yb.\n\n Su número atómico es 70.\n\n El iterbio es un elemento blando, maleable y bastante dúctil\n\n que exhibe un lustre plateado brillante.',
       clase: 'Lantánidos'			
     },

     {
       id: 71,
       name: 'Lutecio',
       sigla: 'Lu',
       letra: 'El Lutecio es un elemento químico\n\n de número 71, cuyo símbolo es Lu.\n\n A pesar de ser uno de los elementos del bloque D\n\n tiene la frecuencia de aparecer\n\n incluido entre los lantánidos,\n\n ya que con estos comparte muchas cosas.\n\n Propiedades.',
       clase: 'Lantánidos'				
     },

     {
       id: 72,
       name: 'Hafnio',
       sigla: 'Hf',
       letra: 'El hafnio es un elemento químico de número 72\n\n y se simboliza como Hf.\n\n Es un metal de transición químicamente muy parecido al Zirconio.\n\n Se usa en aleaciones con el Wolframio, en filamentos y en electrodos.\n\n También se utiliza para fabricar barras de control\n\n empleadas en reactores nucleares\n\n y se utiliza en lámparas de gas o kerosene.',
       clase: 'Metales de transición'				
     },

     {
       id: 73,
       name: 'Tantalio',
       sigla: 'Ta',
       letra: 'Yo soy Tantalio, mi número atómico 73\n\n mi símbolo Ta.\n\n Soy un elemento metálico, blanco, dúctil y maleable.\n\n Soy unos de los metales de transición del sistema periódico.',
       clase: 'Metales de transición'			
     },

     {
       id: 74,
       name: 'Wolframio',
       sigla: 'W',
       letra: 'El Wolframio es un metal escaso en la corteza terrestre.\n\n Se encuentra en forma de óxidos y sales en ciertos minerales.\n\n Es de color gris y es duro.\n\n Su número atómico es 74 y su símbolo es la W.',
       clase: 'Metales de transición'			
     },

     {
       id: 75,
       name: 'Renio',
       sigla: 'Re',
       letra: 'El Renio tiene número atómico 75.\n\n Es un elemento metálico refractario resistente a la corrosión.\n\n Por eso se usa en la joyería.\n\n Una de sus descubridoras fue la alemana Ida Take.',
       clase: 'Metales de transición'				
     },

     {
       id: 76,
       name: 'Osmio',
       sigla: 'Os',
       letra: 'Elemento que es el más denso y muy tóxico también.\n\n Puede provocar daños hasta la muerte.\n\n Presenta también un olor muy feo\n\n y fue descubierto en 1803.',
       clase: 'Metales de transición'				
     },

     {
       id: 77,
       name: 'Iridio',
       sigla: 'Ir',
       letra: 'Yo soy Iridio.\n\n Mi número atómico es 77\n\n y mi símbolo es Ir.\n\n Soy el segundo elemento más duro, frágil, pesado, y resistente\n\n hasta  incluso a temperaturas tan altas como 2000 °C de calor.',
       clase: 'Metales de transición'			
     },

     {
       id: 78,
       name: 'Platino',
       sigla: 'Pt',
       letra: 'Se emplea en joyería, contactos electrónicos\n\n y equipamientos de laboratorio.\n\n También lo podemos encontrar en drogas anti cancerígenas\n\n y en algunos aparatos de neurocirugía.\n\n Puede alterarnos el ADN,\n\n y hasta dañarnos internamente.\n\n Su símbolo es Pt y su número atómico el 78.\n\n En 1735, Antonio de Ulloa, lo descubrió en Ecuador\n\n donde lo confundió con la plata\n\n Por su precioso color.',
       clase: 'Metales de transición'				
     },

     {
       id: 79,
       name: 'Oro',
       sigla: 'Au',
       letra: 'El oro es un elemento químico de número atómico 79.\n\n Es un metal precioso blando y de color amarillo\n\n y su símbolo es Au.\n\n El oro no es un elemento esencial para ningún ser vivo,\n\n sin embargo, en la antigüedad\n\n algunos creían que ingerir sus alimentos diarios en platos de oro,\n\n podría prolongar su tiempo de vida y prolongar el envejecimiento.\n\n También durante la gran peste negra en Europa,\n\n algunos alquimistas pensaron que podrían curar a los enfermos\n\n haciéndoles consumir oro finamente pulverizado.',
       clase: 'Metales de transición'				
     },

     {
       id: 80,
       name: 'Mercurio',
       sigla: 'Hg',
       letra: 'En los termómetros esta\n\n y la temperatura de tu cuerpo este elemento medirá.\n\n Es muy peligroso si te llega a alcanzar,\n\n grandes problemas te dará, hasta mongolismo te causará.',
       clase: 'Metales de transición'				
     },

     {
       id: 81,
       name: 'Talio',
       sigla: 'Ti',
       letra: 'Su número atómico es 81, su símbolo Tl.\n\n Es pesado, es un metal muy blando y maleable.\n\n Se puede cortar con cuchillo.\n\n Su color es gris azulado parecido al plomo.\n\n Es tóxico para los humanos.\n\n Una de sus aplicaciones es por ejemplo el Sulfato de Talio\n\n que extermina ratas y hormigas.',
       clase: 'Metales del bloque p'			
     },

     {
       id: 82,
       name: 'Plomo',
       sigla: 'Pb',
       letra: 'Estas pesado Pb 82,\n\n estas pesado,  pobre metal.\n\n Estas pesado deberías adelgazar.\n\n Estas pesado, anzuelo de pescar.\n\n Plomo pesado, pesado, pesado, pesado saturnismo.\n\n Plumbosis plumbosis,\n\n si te lo comes te puede causar,\n\n tipos de cáncer y muchas cosas más.',
       clase: 'Metales del bloque p'				
     },

     {
       id: 83,
       name: 'Bismuto',
       sigla: 'Bi',
       letra: 'El símbolo del bismuto es el Bi.\n\n Es gris, es un metal noble\n\n y una sustancia diamagnética.\n\n Su número atómico es 83.',
       clase: 'Metales del bloque p'				
     },

     {
       id: 84,
       name: 'Polonio',
       sigla: 'Po',
       letra: 'Una diosa, una revolución\n\n me descubrieron con mucha pasión.\n\n Mary es su nombre ella me encontró.\n\n Por este descubrimiento su vida ella dio.\n\n En el tabaco me puedes encontrar.\n\n Polonio 210 te puede matar.',
       clase: 'Metaloides'				
     },

     {
       id: 85,
       name: 'Astato',
       sigla: 'At',
       letra: 'Es el más pesado de los halógenos,\n\n su comportamiento químico es altamente radioactivo.\n\n Es más metálico que el Iodo y su número atómico es 85.\n\n Es el elemento más raro de la naturaleza,\n\n fue sintetizado por primera vez en 1940,\n\n por Corson, Mackenzie y Segré.\n\n Este elemento se abrevia At.',
       clase: 'Halógenos'				
     },

     {
       id: 86,
       name: 'Radón',
       sigla: 'Rn',
       letra: 'El radón es un elemento químico, gas noble.\n\n En su forma gaseosa es incoloro.\n\n Es conocido con el número 86 y símbolo Rn.\n\n Es también radioactivo.\n\n Se dice que aquella masa de gas, concentradas en diferentes zonas\n\n predicen los terremotos.',
       clase: 'Gases nobles y Transactínidos'			
     },

     {
       id: 87,
       name: 'Francio',
       sigla: 'Fr',
       letra: 'Es un metal alcalino altamente radioactivo,\n\n que se desintegra generando Astato, radio y radón.\n\n Su número es 87 y se abrevia Fr.\n\n En 1993 fue descubierto por Marguerite Perey.\n\n Fue el último elemento químico descubierto en la naturaleza\n\n antes de ser sintetizado.\n\n Sus propiedades se asemejan al Cesio.',
       clase: 'Alcalinos'				
     },

     {
       id: 88,
       name: 'Radio',
       sigla: 'Ra',
       letra: 'Número atómico 88, es color blanco inmaculado\n\n pero se ennegrece con la exposición al aire.\n\n Es un alcalinotérreo, es extremadamente radioactivo.\n\n Antiguamente se usaba en pinturas luminiscentes.\n\n Más de cientos de pintores que usaban sus labios para morder el pincel,\n\n murieron por la radiación.',
       clase: 'Alcalinotérreos'				
     },

     {
       id: 89,
       name: 'Actinio',
       sigla: 'Ac',
       letra: 'El Actinio es un elemento químico, de símbolo Ac.\n\n Su número atómico es el 89.\n\n El uso del Actinio es casi exclusivo para investigaciones científicas.\n\n Es extremadamente radioactivo y peligroso y\n\n no se usa en ningún material comercial.',
       clase: 'Actínidos'				
     },

     {
       id: 90,
       name: 'Torio',
       sigla: 'Th',
       letra: 'Torio, Th  es 90.\n\n Se encuentra con otros minerales, puro es blanco plata ah, ah, ah.\n\n En honor al dios nórdico Thor.\n\n El relámpago y la tormenta ah, ah, ah.\n\n Torio es Th.',
       clase: 'Actínidos'			
     },

     {
       id: 91,
       name: 'Protactinio',
       sigla: 'Pa',
       letra: 'Hecho con la desintegración\n\n radioactiva del uranio y el torio.\n\n Protactinio, protactinio.\n\n No lo toques con tu mano desnuda.\n\n Tiene un brillo intenso.\n\n Número 91.',
       clase: 'Actínidos'			
     },

     {
       id: 92,
       name: 'Uranio',
       sigla: 'U',
       letra: 'El uranio es un elemento químico cuyo número es 92.\n\n Su símbolo es la U.\n\n Denso igual que el plomo es, uranio es,\n\n con las supernovas su origen natural es, uranio es,\n\n efectos en los órganos puede provocar.',
       clase: 'Actínidos'				
     },

     {
       id: 93,
       name: 'Neptunio',
       sigla: 'Np',
       letra: 'Metal blanco y muy plateado,\n\n es Neptunio.\n\n Viene de un planeta lejano, es  Neptunio.\n\n Tené cuidado él es reactivo.\n\n Es Neptunio.\n\n Es Neptunio.\n\n Metal blanco, muy plateado, es el Neptunio.',
       clase: 'Actínidos'				
     },

     {
       id: 94,
       name: 'Plutonio',
       sigla: 'Pu',
       letra: 'Plutonio su símbolo Pu y el número atómico 94.\n\n Es un metal con apariencia plateada\n\n que se oscurece cuando es expuesto al aire.\n\n Tiene 80 millones de años.',
       clase: 'Actínidos'			
     },

     {
       id: 95,
       name: 'Americio',
       sigla: 'Am',
       letra: 'El Americio forma parte del grupo de los Actínidos.\n\n Todos los isótopos  del grupo de los actínidos,\n\n entre los que se encuentra el Americio,\n\n son reactivos.\n\n El estado del Americio en su forma natural es sólido.\n\n Es un elemento químico de aspecto blanco plateado.\n\n El número atómico del Americio es 95.',
       clase: 'Actínidos'			
     },

     {
       id: 96,
       name: 'Curio',
       sigla: 'Cm',
       letra: 'Es el elemento al cual le corresponde el número 96 y su símbolo es Cu.\n\n Se produce bombardeando plutonio con partículas alfa,\n\n es decir iones de Helio.\n\n Es un actínido y no existe en el ambiente terrestre,\n\n pero puede producirse en forma artificial.\n\n El curio fue sintetizado por primera vez\n\n en la universidad Berkeley de California.\n\n También por Gelnn T. Seaborg, Ralph A. James y Albert Ghiorso en 1944.\n\n Se eligió el nombre curio en honor a Marie Curie y su marido Pierre,\n\n famosos por descubrir el radio\n\n y por otros importantes trabajos sobre radioactividad.',
       clase: 'Actínidos'				
     },

     {
       id: 97,
       name: 'Berkelio',
       sigla: 'Bk',
       letra: 'Es radioactivo, color plateado.\n\n Es el número 97,\n\n color plateado le toco\n\n y su nombre se asemejó a una ciudad llamada Berkeley.',
       clase: 'Actínidos'				
     },

     {
       id: 98,
       name: 'Californio',
       sigla: 'Cf',
       letra: 'El californio, es radioactivo y su símbolo es Cf.\n\n Su número atómico es 98.\n\n Se utiliza en la cura del cáncer.',
       clase: 'Actínidos'				
     },

     {
       id: 99,
       name: 'Einstenio',
       sigla: 'Es',
       letra: 'En honor a un genio, este elemento se nombro.\n\n Le toque el 99, son los protones de su núcleo.\n\n Le toque el 99, son los protones de su núcleo.\n\n Adam Ghiorso lo descubrió, en 1952,\n\n en la primera explosión termonuclear que el pacífico ocurrió.',
       clase: 'Actínidos'				
     },

     {
       id: 100,
       name: 'Fermio',
       sigla: 'Fm',
       letra: 'Elemento químico radioactivo, creado artificialmente.\n\n Su número atómico es 100,\n\n también se encuentra en la naturaleza.',
       clase: 'Actínidos'				
     },

     {
       id: 101,
       name: 'Mendelevio',
       sigla: 'Md',
       letra: 'El Mendelevio forma parte del grupo de los actínidos.\n\n Todos los isótopos del grupo de los actínidos,\n\n entre los que se encuentra él, son radioactivos.\n\n El estado del Mendelevio en su forma natural es desconocido,\n\n presuntamente sólido.\n\n Probablemente, metálico, plateado, blanco o gris.\n\n El número atómico del Mendelevio es el 101.\n\n Su símbolo químico es el Md.\n\n El Mendelevio no se encuentra en la naturaleza,\n\n fue descubierto que se prepara por la transmutación nuclear artificial\n\n de un elemento más ligero.\n\n Su nombre está dado en honor al científico,\n\n Dmitri Ivánovich Mendeléiev, quien diseño la tabla periódica.',
       clase: 'Actínidos'			
     },

     {
       id: 102,
       name: 'Nobelio',
       sigla: 'No',
       letra: 'El Nobelio es un elemento sintético de la tabla periódica\n\ny su símbolo es No. Es mucho más pesado que el uranio,\n\nllamado así, en honor a Alfred, a Alfred Nobel, a Alfred Nobel.\n\nSu número atómico es el 102, el 102.',
       clase: 'Actínidos'				
     },

     {
       id: 103,
       name: 'Laurencio',
       sigla: 'Lr',
       letra: 'El laurencio es un elemento sintético radioactivo,\n\ncuyo símbolo es Lr.\n\nEs el último elemento de la serie de los actínidos. Su número atómico es 103.\n\nLos primeros átomos de laurencio fueron producidos al bombardear un blanco de 3 miligramos\n\ncompuestos de isótopos de californio.\n\nEl nombre de este elemento fue en honor al físico estadounidense, Ernest Lawrence.\n\nEste fue el elemento más pesado en ser sintetizado.',
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
       letra: 'Seaborgio.\n\nCuyo símbolo es Sg y su número atómico 106.\n\nEs inestable y un metal de transición.',
       clase: 'Metales de transición'			
     },

     {
       id: 107,
       name: 'Bohrio',
       sigla: 'Bh',
       letra: 'Es inestable y de corta vida.\n\nSu número Z es 107.\n\nSe escribe con la B y la H.\n\nSu nombre es Bohrio.',
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
       letra: 'Es un elemento químico cuyo símbolo es Rg.\n\nFue descubierto en 1994 por científicos alemanes.\n\nEn noviembre del 2004 recibió el nombre de roentgenio\n\nen honor a Wilhelm Conrad Roentgen,\n\npremio Nobel de Física, y descubridor de los rayos x\n\ny su número atómico es 111.',
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
       letra: 'Hace dos años que mi nombre es Flerovio.\n\nNo pienses que mi color es plateado o metálico,\n\nlos científicos malos son y me llaman número 114.',
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
       letra: 'Su número atómico es el 116, y su símbolo es Lv.\n\nEs inestable y las aplicaciones industriales son nulas.\n\nEs un átomo súper pesado.',
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
       letra: 'El ununoctio es radioactivo,\n\naltamente inestable,\n\nse sitúa cerca de la isla de estabilidad,\n\npor lo que su núcleo es ligeramente más estable de lo predicho.\n\nA fines de 1998, el físico polaco Robert Smolanczuk,\n\npublicó sus cálculos sobre la fusión nuclear, \n\nde varios núcleos para sintetizar elementos transuránicos.\n\nEsto incluía al número 118.',
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