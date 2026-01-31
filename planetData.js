/**
 * ═══════════════════════════════════════════════════════════════
 * planetData.js - DATOS CIENTÍFICOS DEL SISTEMA SOLAR
 * Sistema Solar 3D Interactivo
 * 
 * Copyright © 2024 Luis Gustavo Bances Riojas
 * Todos los derechos reservados
 * 
 * Datos verificados de fuentes oficiales:
 * - NASA JPL (Jet Propulsion Laboratory)
 * - ESA (European Space Agency)
 * - Papers científicos peer-reviewed
 * 
 * Contacto: lbancesr@unprg.edu.pe
 * Licencia: Uso educativo y personal únicamente
 * ═══════════════════════════════════════════════════════════════
 */


const PLANET_DATA = {
    sun: {
        name: 'Sol',
        description: 'El Sol es la estrella del sistema solar, conteniendo el 99.86% de su masa total.',
        diameter: '1.392.700 km',
        realSize: 1392700,
        mass: '1.989 × 10³⁰ kg',
        temperature: '5.778 K (superficie)',
        distanceFromSun: '0 km',
        composition: 'Hidrógeno (73%), Helio (25%), otros (2%)',
        discoveryYear: 'Prehistoria',
        discoveredBy: 'Conocido desde siempre',
        missions: [
            { name: 'Parker Solar Probe', year: '2018', agency: 'NASA', status: 'Activa' },
            { name: 'Solar Orbiter', year: '2020', agency: 'ESA/NASA', status: 'Activa' }
        ],
        scientificFacts: [
            'Convierte 4 millones de toneladas en energía cada segundo',
            'Su campo magnético se invierte cada 11 años',
            'La corona solar es más caliente que la superficie',
            'Las erupciones solares afectan las comunicaciones terrestres',
            'Tiene aproximadamente 4.600 millones de años'
        ],
        facts: [
            'El Sol es una enana amarilla de tipo G2V',
            'Su núcleo alcanza 15 millones de grados Celsius',
            'La luz tarda 8 minutos en llegar a la Tierra',
            'Produce energía mediante fusión nuclear',
            'Representa el 99.86% de la masa del sistema solar'
        ],
        color: 0xFDB813,
        size: 20,
        distance: 0,
        orbitalPeriod: 0,
        rotationSpeed: 0.001
    },
    
    mercury: {
        name: 'Mercurio',
        description: 'El planeta más pequeño y cercano al Sol.',
        diameter: '4.879 km',
        realSize: 4879,
        mass: '3.285 × 10²³ kg',
        temperature: '-173°C a 427°C',
        distanceFromSun: '57,9 millones de km',
        orbitalPeriod: '88 días',
        dayLength: '58,6 días',
        moons: 'Ninguna',
        discoveryYear: 'Prehistoria',
        discoveredBy: 'Conocido por antiguos',
        missions: [
            { name: 'Mariner 10', year: '1974', agency: 'NASA', status: 'Completada' },
            { name: 'MESSENGER', year: '2011', agency: 'NASA', status: 'Completada' }
        ],
        scientificFacts: [
            'Su núcleo de hierro ocupa el 75% del radio',
            'Posee hielo de agua en cráteres polares',
            'La cuenca Caloris tiene 1.550 km de diámetro',
            'Ayudó a confirmar la Relatividad General',
            'Tiene una exosfera extremadamente tenue'
        ],
        facts: [
            'Un año dura solo 88 días terrestres',
            'Tiene la órbita más excéntrica',
            'Temperatura varía 600°C entre día y noche',
            'Es el segundo planeta más denso',
            'Visitado por solo dos misiones'
        ],
        color: 0x8C7853,
        size: 1.2,
        distance: 40,
        orbitalPeriod: 0.24,
        rotationSpeed: 0.01
    },
    
    venus: {
        name: 'Venus',
        description: 'El planeta más caliente debido al efecto invernadero.',
        diameter: '12.104 km',
        realSize: 12104,
        mass: '4.867 × 10²⁴ kg',
        temperature: '462°C (promedio)',
        distanceFromSun: '108,2 millones de km',
        orbitalPeriod: '225 días',
        dayLength: '243 días',
        moons: 'Ninguna',
        discoveryYear: 'Prehistoria',
        discoveredBy: 'Conocido por babilonios',
        missions: [
            { name: 'Venera 7', year: '1970', agency: 'URSS', status: 'Primera en aterrizar' },
            { name: 'Magellan', year: '1990', agency: 'NASA', status: 'Mapeo completo' }
        ],
        scientificFacts: [
            'Tiene más de 1.600 volcanes grandes',
            'Su atmósfera gira 60 veces más rápido que el planeta',
            'Lluvia de ácido sulfúrico que se evapora',
            'Presión equivale a 900m bajo el mar',
            'Posible actividad volcánica reciente'
        ],
        facts: [
            'Rota en dirección opuesta',
            'Su día es más largo que su año',
            'Es el objeto más brillante después del Sol y Luna',
            'Atmósfera de 96% CO₂',
            'Presión 92 veces mayor que la Tierra'
        ],
        color: 0xFFC649,
        size: 2.8,
        distance: 60,
        orbitalPeriod: 0.62,
        rotationSpeed: -0.005
    },
    
    earth: {
        name: 'Tierra',
        description: 'Nuestro hogar, el único planeta conocido con vida.',
        diameter: '12.742 km',
        realSize: 12742,
        mass: '5.972 × 10²⁴ kg',
        temperature: '15°C (promedio)',
        distanceFromSun: '149,6 millones de km',
        orbitalPeriod: '365,25 días',
        dayLength: '24 horas',
        moons: '1 (Luna)',
        discoveryYear: 'N/A',
        discoveredBy: 'Nuestro planeta',
        missions: [
            { name: 'ISS', year: '1998', agency: 'Internacional', status: 'Activa' },
            { name: 'Hubble', year: '1990', agency: 'NASA/ESA', status: 'Activo' }
        ],
        scientificFacts: [
            'La vida existe desde hace 3.500 millones de años',
            'El campo magnético se ha invertido 170+ veces',
            'Los océanos contienen 1.335 millones km³ de agua',
            'La atmósfera se extiende hasta 10.000 km',
            'Experimenta ~500.000 terremotos detectables al año'
        ],
        facts: [
            'El 71% está cubierto de agua',
            'Es el planeta más denso',
            'Atmósfera: 78% nitrógeno, 21% oxígeno',
            'Su campo magnético nos protege',
            'Único no nombrado por dioses greco-romanos'
        ],
        color: 0x2233FF,
        size: 3,
        distance: 85,
        orbitalPeriod: 1.0,
        rotationSpeed: 0.02
    },
    
    mars: {
        name: 'Marte',
        description: 'El Planeta Rojo, el más explorado después de la Tierra.',
        diameter: '6.779 km',
        realSize: 6779,
        mass: '6.39 × 10²³ kg',
        temperature: '-63°C (promedio)',
        distanceFromSun: '227,9 millones de km',
        orbitalPeriod: '687 días',
        dayLength: '24,6 horas',
        moons: '2 (Fobos y Deimos)',
        discoveryYear: 'Prehistoria',
        discoveredBy: 'Conocido por egipcios',
        missions: [
            { name: 'Viking 1', year: '1976', agency: 'NASA', status: 'Primera en superficie' },
            { name: 'Curiosity', year: '2012', agency: 'NASA', status: 'Activa' },
            { name: 'Perseverance', year: '2021', agency: 'NASA', status: 'Activa' }
        ],
        scientificFacts: [
            'Evidencia de agua líquida antigua',
            'Metano detectado en atmósfera',
            'Tormentas de polvo globales',
            'Monte Olimpo: 22 km de altura',
            'Valles Marineris: 4.000 km de largo'
        ],
        facts: [
            'Posee el volcán más grande del sistema solar',
            'Casquetes polares de agua y CO₂',
            'Un día marciano dura 24,6 horas',
            'Tiene la mitad del diámetro terrestre',
            'Más de 50 misiones enviadas'
        ],
        color: 0xCD5C5C,
        size: 1.6,
        distance: 110,
        orbitalPeriod: 1.88,
        rotationSpeed: 0.018
    },
    
    jupiter: {
        name: 'Júpiter',
        description: 'El gigante gaseoso más grande del sistema solar.',
        diameter: '139.820 km',
        realSize: 139820,
        mass: '1.898 × 10²⁷ kg',
        temperature: '-108°C',
        distanceFromSun: '778,5 millones de km',
        orbitalPeriod: '11,9 años',
        dayLength: '9,9 horas',
        moons: '95+ (Ío, Europa, Ganímedes, Calisto)',
        discoveryYear: 'Prehistoria',
        discoveredBy: 'Conocido por babilonios',
        missions: [
            { name: 'Pioneer 10', year: '1973', agency: 'NASA', status: 'Primera visita' },
            { name: 'Galileo', year: '1995', agency: 'NASA', status: 'Orbitador' },
            { name: 'Juno', year: '2016', agency: 'NASA', status: 'Activa' }
        ],
        scientificFacts: [
            'Campo magnético 20.000x más fuerte que el terrestre',
            'Europa tiene océano de 100 km bajo el hielo',
            'Ganímedes es la luna más grande',
            'Ío es el más volcánicamente activo',
            'Emite más energía de la que recibe'
        ],
        facts: [
            'La Gran Mancha Roja dura más de 300 años',
            'Tiene el día más corto: 9.9 horas',
            'No tiene superficie sólida',
            'Sus auroras son 100x más brillantes',
            'Podría haber sido una estrella fallida'
        ],
        color: 0xDAA520,
        size: 11,
        distance: 160,
        orbitalPeriod: 11.86,
        rotationSpeed: 0.04
    },
    
    saturn: {
        name: 'Saturno',
        description: 'El señor de los anillos.',
        diameter: '116.460 km',
        realSize: 116460,
        mass: '5.683 × 10²⁶ kg',
        temperature: '-139°C',
        distanceFromSun: '1.434 millones de km',
        orbitalPeriod: '29,5 años',
        dayLength: '10,7 horas',
        moons: '146+ (Titán, Encélado)',
        discoveryYear: 'Prehistoria',
        discoveredBy: 'Conocido por babilonios',
        missions: [
            { name: 'Pioneer 11', year: '1979', agency: 'NASA', status: 'Primera visita' },
            { name: 'Cassini', year: '2004', agency: 'NASA/ESA', status: 'Misión épica 2004-2017' }
        ],
        scientificFacts: [
            'Anillos de 99.9% hielo de agua',
            'Titán tiene lagos de metano líquido',
            'Encélado expulsa géiseres de agua',
            'Hexágono polar de 30.000 km',
            'Anillos de solo 10-100m de espesor'
        ],
        facts: [
            'Es el menos denso: flotaría en agua',
            'Anillos de hasta 282.000 km de ancho',
            'Titán tiene atmósfera densa',
            'Vientos de hasta 1.800 km/h',
            'Tiene 7 grupos de anillos'
        ],
        color: 0xFAD5A5,
        size: 9,
        distance: 220,
        orbitalPeriod: 29.46,
        rotationSpeed: 0.038,
        hasRings: true
    },
    
    uranus: {
        name: 'Urano',
        description: 'El gigante de hielo inclinado que rota de lado.',
        diameter: '50.724 km',
        realSize: 50724,
        mass: '8.681 × 10²⁵ kg',
        temperature: '-197°C',
        distanceFromSun: '2.871 millones de km',
        orbitalPeriod: '84 años',
        dayLength: '17,2 horas',
        moons: '27+ (Miranda, Ariel)',
        discoveryYear: '1781',
        discoveredBy: 'William Herschel',
        missions: [
            { name: 'Voyager 2', year: '1986', agency: 'NASA', status: 'Única visita' }
        ],
        scientificFacts: [
            'Impactado por objeto del tamaño de la Tierra',
            'Tiene 13 anillos oscuros',
            'Metano absorbe luz roja (color azul-verdoso)',
            'Estaciones de 21 años cada una',
            'Temperatura mínima: -224°C'
        ],
        facts: [
            'Rota 98° inclinado',
            'Primer planeta con telescopio (1781)',
            'Atmósfera con metano azul-verdoso',
            'Tiene 13 anillos débiles',
            'Un polo mira al Sol 42 años'
        ],
        color: 0x4FD0E7,
        size: 4,
        distance: 280,
        orbitalPeriod: 84.01,
        rotationSpeed: 0.03
    },
    
    neptune: {
        name: 'Neptuno',
        description: 'El planeta más distante con vientos supersónicos.',
        diameter: '49.244 km',
        realSize: 49244,
        mass: '1.024 × 10²⁶ kg',
        temperature: '-201°C',
        distanceFromSun: '4.495 millones de km',
        orbitalPeriod: '165 años',
        dayLength: '16,1 horas',
        moons: '14+ (Tritón)',
        discoveryYear: '1846',
        discoveredBy: 'Johann Galle',
        missions: [
            { name: 'Voyager 2', year: '1989', agency: 'NASA', status: 'Única visita' }
        ],
        scientificFacts: [
            'Vientos de hasta 2.100 km/h',
            'Tritón orbita retrógrado',
            'Gran Mancha Oscura del tamaño terrestre',
            'Irradia 2.6x más energía de la que recibe',
            'Posible lluvia de diamantes interior'
        ],
        facts: [
            'Descubierto matemáticamente',
            'Vientos más rápidos del sistema solar',
            'Tritón tiene géiseres de nitrógeno',
            'Es 17x más masivo que la Tierra',
            'Completa órbita cada 165 años'
        ],
        color: 0x4169E1,
        size: 3.9,
        distance: 340,
        orbitalPeriod: 164.79,
        rotationSpeed: 0.032
    }
};

// Cinturón de Asteroides
const ASTEROID_BELT = {
    name: 'Cinturón de Asteroides',
    description: 'Región entre Marte y Júpiter con millones de asteroides.',
    innerRadius: 130,
    outerRadius: 150,
    numberOfAsteroids: 2000,
    discoveryYear: '1801',
    discoveredBy: 'Giuseppe Piazzi',
    majorBodies: [
        { name: 'Ceres', diameter: '940 km', type: 'Planeta enano', discovered: '1801', info: 'Visitado por Dawn' },
        { name: 'Vesta', diameter: '525 km', type: 'Asteroide', discovered: '1807', info: 'Visitado por Dawn' },
        { name: 'Pallas', diameter: '512 km', type: 'Asteroide', discovered: '1802', info: 'Segunda más grande' },
        { name: 'Hygiea', diameter: '434 km', type: 'Asteroide', discovered: '1849', info: 'Cuarta más grande' }
    ],
    scientificFacts: [
        'Contiene más de 1 millón de asteroides mayores de 1 km',
        'Masa total: solo el 4% de la masa lunar',
        'Ceres contiene 1/3 de la masa total del cinturón',
        'Distancia promedio entre asteroides: 1 millón de km',
        'Posible resto de planeta que nunca se formó',
        'Misión Dawn visitó Vesta (2011) y Ceres (2015)',
        'Algunos contienen agua y compuestos orgánicos'
    ],
    facts: [
        'No es peligroso para naves espaciales',
        'Temperatura promedio: -73°C',
        'Muchas sondas lo han atravesado',
        'Fuente potencial de recursos minerales'
    ]
};

// Timeline Histórica con DETALLES COMPLETOS
const DISCOVERY_TIMELINE = [
    { 
        year: '3000 a.C.', 
        event: 'Primeros registros astronómicos', 
        detail: 'Los sumerios en Mesopotamia comienzan a registrar sistemáticamente los movimientos de los planetas visibles (Mercurio, Venus, Marte, Júpiter y Saturno), creando las primeras tablas astronómicas. Estos registros serían la base de la astronomía babilónica posterior y marcaron el inicio de la astronomía observacional.', 
        culture: 'Sumeria (Mesopotamia)' 
    },
    { 
        year: '1600 a.C.', 
        event: 'Venus identificado como estrella matutina y vespertina', 
        detail: 'Los astrónomos babilónicos descubren que la "estrella matutina" y la "estrella vespertina" son en realidad el mismo objeto: el planeta Venus. Este descubrimiento demuestra la precisión de sus observaciones y su comprensión de los movimientos celestes.', 
        culture: 'Babilonia' 
    },
    { 
        year: '350 a.C.', 
        event: 'Modelo geocéntrico de Aristóteles', 
        detail: 'Aristóteles propone un modelo del universo con la Tierra en el centro, rodeada de esferas cristalinas concéntricas que transportan los planetas, el Sol, la Luna y las estrellas. Este modelo dominará el pensamiento occidental por casi 2000 años.', 
        culture: 'Grecia Antigua' 
    },
    { 
        year: '150 d.C.', 
        event: 'Sistema de Ptolomeo perfeccionado', 
        detail: 'Claudio Ptolomeo publica el "Almagesto", perfeccionando el modelo geocéntrico con epiciclos y deferentes para explicar el movimiento retrógrado de los planetas. Su sistema permitía predecir posiciones planetarias con notable precisión y fue el estándar astronómico hasta el Renacimiento.', 
        culture: 'Roma (Alejandría, Egipto)' 
    },
    { 
        year: '1543', 
        event: 'Revolución Copernicana', 
        detail: 'Nicolás Copérnico publica "De revolutionibus orbium coelestium", proponiendo un modelo heliocéntrico donde el Sol está en el centro y los planetas (incluida la Tierra) orbitan a su alrededor. Este trabajo marca el inicio de la Revolución Científica y desafía 1400 años de pensamiento ptolemaico.', 
        culture: 'Polonia (Renacimiento)' 
    },
    { 
        year: '1609', 
        event: 'Galileo descubre las lunas de Júpiter', 
        detail: 'Galileo Galilei, usando un telescopio mejorado de su propia construcción, descubre cuatro lunas orbitando Júpiter (Ío, Europa, Ganímedes y Calisto). Este descubrimiento proporciona evidencia directa de que no todo orbita la Tierra, apoyando fuertemente el modelo heliocéntrico de Copérnico.', 
        culture: 'Italia (Venecia)' 
    },
    { 
        year: '1610', 
        event: 'Fases de Venus observadas', 
        detail: 'Galileo observa que Venus tiene fases completas (como la Luna), similar a creciente, llena y menguante. Esto solo es posible si Venus orbita el Sol, no la Tierra, proporcionando evidencia observacional definitiva contra el sistema geocéntrico ptolemaico.', 
        culture: 'Italia' 
    },
    { 
        year: '1655', 
        event: 'Descubrimiento de Titán', 
        detail: 'Christiaan Huygens descubre Titán, la luna más grande de Saturno y el primer satélite descubierto orbitando un planeta que no sea la Tierra. Este descubrimiento expande nuestra comprensión del sistema solar y demuestra que los planetas pueden tener sus propios sistemas de satélites.', 
        culture: 'Holanda' 
    },
    { 
        year: '1781', 
        event: 'Descubrimiento de Urano', 
        detail: 'William Herschel descubre Urano usando un telescopio reflector de su propia construcción, convirtiéndose en el primer planeta descubierto con telescopio y el primero desconocido en la antigüedad. Este descubrimiento duplica el tamaño conocido del sistema solar y demuestra que aún hay mucho por descubrir.', 
        culture: 'Inglaterra (Bath)' 
    },
    { 
        year: '1801', 
        event: 'Primer asteroide descubierto', 
        detail: 'Giuseppe Piazzi descubre Ceres, el primer asteroide (inicialmente clasificado como planeta). Este descubrimiento revela la existencia del Cinturón de Asteroides entre Marte y Júpiter, abriendo una nueva categoría de objetos en el sistema solar y cambiando nuestra comprensión de su formación.', 
        culture: 'Italia (Palermo, Sicilia)' 
    },
    { 
        year: '1846', 
        event: 'Neptuno predicho matemáticamente', 
        detail: 'Johann Galle descubre Neptuno en el Observatorio de Berlín, basándose en predicciones matemáticas de Urbain Le Verrier y John Couch Adams que calcularon su posición por las perturbaciones que causaba en la órbita de Urano. Este es el primer planeta descubierto por predicción matemática antes que por observación directa.', 
        culture: 'Alemania (Berlín)' 
    },
    { 
        year: '1930', 
        event: 'Descubrimiento de Plutón', 
        detail: 'Clyde Tombaugh descubre Plutón en el Observatorio Lowell, después de meses de comparar fotografías del cielo nocturno. Considerado el noveno planeta hasta 2006, cuando fue reclasificado como planeta enano, expandiendo nuestra comprensión de los objetos transneptunianos y el Cinturón de Kuiper.', 
        culture: 'Estados Unidos (Arizona)' 
    },
    { 
        year: '1957', 
        event: 'Inicio de la Era Espacial', 
        detail: 'La Unión Soviética lanza el Sputnik 1, el primer satélite artificial de la humanidad, marcando el inicio de la Era Espacial. Este evento de 83.6 kg orbita la Tierra cada 96 minutos, transmitiendo señales de radio que pueden ser captadas en todo el mundo, demostrando la viabilidad de los viajes espaciales.', 
        culture: 'URSS (Unión Soviética)' 
    },
    { 
        year: '1961', 
        event: 'Primer humano en el espacio', 
        detail: 'Yuri Gagarin se convierte en el primer ser humano en viajar al espacio y orbitar la Tierra a bordo de la nave Vostok 1. Su vuelo de 108 minutos alcanza una altura máxima de 327 km, demostrando que los humanos pueden sobrevivir y operar en el espacio, abriendo la puerta a la exploración espacial tripulada.', 
        culture: 'URSS' 
    },
    { 
        year: '1969', 
        event: 'Alunizaje del Apollo 11', 
        detail: 'Neil Armstrong y Buzz Aldrin se convierten en los primeros humanos en caminar sobre la Luna durante la misión Apollo 11, mientras Michael Collins orbita en el módulo de comando. Armstrong pronuncia las famosas palabras: "Un pequeño paso para el hombre, un gran salto para la humanidad", culminando la carrera espacial.', 
        culture: 'Estados Unidos (NASA)' 
    },
    { 
        year: '1976', 
        event: 'Viking 1 busca vida en Marte', 
        detail: 'La sonda Viking 1 de NASA aterriza exitosamente en Marte y comienza a buscar signos de vida mediante experimentos biológicos. Aunque los resultados son ambiguos, la misión envía las primeras imágenes en color desde la superficie marciana y realiza análisis químicos detallados del suelo, estableciendo las bases para futuras misiones.', 
        culture: 'Estados Unidos' 
    },
    { 
        year: '1990', 
        event: 'Telescopio Espacial Hubble en órbita', 
        detail: 'NASA y ESA ponen en órbita el Telescopio Espacial Hubble, que revoluciona la astronomía al proporcionar imágenes sin la distorsión de la atmósfera terrestre. A pesar de un defecto inicial en su espejo (corregido en 1993), el Hubble ha realizado más de 1.5 millones de observaciones, transformando nuestra comprensión del universo.', 
        culture: 'Internacional (NASA/ESA)' 
    },
    { 
        year: '1995', 
        event: 'Primer planeta extrasolar confirmado', 
        detail: 'Michel Mayor y Didier Queloz descubren 51 Pegasi b, el primer planeta confirmado orbitando una estrella similar al Sol. Este "Júpiter caliente" orbita su estrella en solo 4.2 días, revolucionando nuestra comprensión de la formación planetaria y demostrando que nuestro sistema solar no es único. Por este descubrimiento ganaron el Nobel de Física 2019.', 
        culture: 'Suiza (Universidad de Ginebra)' 
    },
    { 
        year: '2004', 
        event: 'Rovers Spirit y Opportunity en Marte', 
        detail: 'NASA aterriza exitosamente dos rovers gemelos en Marte: Spirit y Opportunity. Diseñados para misiones de 90 días, Opportunity funciona hasta 2018 (15 años), recorriendo 45 km y enviando 217,000 imágenes. Ambos rovers encuentran evidencia geológica concluyente de que Marte tuvo agua líquida en su pasado, potencialmente habitable.', 
        culture: 'Estados Unidos' 
    },
    { 
        year: '2012', 
        event: 'Curiosity aterriza en Marte', 
        detail: 'El rover Curiosity de NASA, del tamaño de un automóvil, aterriza en el cráter Gale de Marte usando un innovador sistema de "grúa celestial". Equipado con 10 instrumentos científicos incluyendo un laboratorio químico, Curiosity descubre que Marte tuvo las condiciones necesarias para sustentar vida microbiana, incluyendo agua, elementos químicos esenciales y fuentes de energía.', 
        culture: 'Estados Unidos' 
    },
    { 
        year: '2015', 
        event: 'New Horizons sobrevuela Plutón', 
        detail: 'Después de un viaje de 9.5 años y 5 mil millones de kilómetros, la sonda New Horizons realiza el primer sobrevuelo cercano de Plutón, revelando un mundo geológicamente activo con montañas de hielo de 3.5 km de altura, glaciares de nitrógeno y una atmósfera de múltiples capas. Las imágenes transforman nuestra comprensión de los mundos helados del sistema solar exterior.', 
        culture: 'Estados Unidos' 
    },
    { 
        year: '2019', 
        event: 'Primera imagen de un agujero negro', 
        detail: 'El Event Horizon Telescope (red global de radiotelescopios) captura la primera imagen directa de un agujero negro supermasivo en el centro de la galaxia M87, a 55 millones de años luz. La imagen muestra el "anillo de fuego" predicho por la Teoría de la Relatividad General de Einstein, confirmando predicciones centenarias sobre estos objetos extremos.', 
        culture: 'Colaboración Internacional (8 telescopios en 4 continentes)' 
    },
    { 
        year: '2021', 
        event: 'James Webb Space Telescope lanzado', 
        detail: 'NASA, ESA y CSA lanzan el Telescopio Espacial James Webb, el observatorio espacial más grande y poderoso jamás construido. Con un espejo de 6.5 metros y capacidad infrarroja, JWST puede observar las primeras galaxias formadas después del Big Bang, estudiar la atmósfera de exoplanetas y buscar signos de vida. En 2022 comienza a enviar imágenes revolucionarias del universo primitivo.', 
        culture: 'Internacional (NASA/ESA/CSA)' 
    },
    { 
        year: '2021', 
        event: 'Ingenuity: primer vuelo en otro planeta', 
        detail: 'El helicóptero Ingenuity de NASA logra el primer vuelo controlado y motorizado en otro planeta, elevándose 3 metros sobre la superficie de Marte durante 39.1 segundos. Este hito tecnológico, similar al primer vuelo de los hermanos Wright en 1903, demuestra la viabilidad de exploración aérea en otros mundos y abre nuevas posibilidades para misiones futuras.', 
        culture: 'Estados Unidos (NASA)' 
    }
];

// Exportar
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PLANET_DATA, ASTEROID_BELT, DISCOVERY_TIMELINE };
}

// LUNAS Y ASTEROIDES MÁS FAMOSOS - DATOS VERIFICADOS
const FAMOUS_MOONS_AND_ASTEROIDS = [
    // CINTURÓN DE ASTEROIDES
    {
        name: 'Ceres',
        type: 'Planeta enano',
        parent: 'Cinturón de Asteroides',
        diameter: '940 km',
        discovered: '1801 por Giuseppe Piazzi',
        description: 'El objeto más grande del cinturón de asteroides entre Marte y Júpiter, y el único planeta enano en el sistema solar interior. Ceres representa aproximadamente un tercio de la masa total del cinturón. La misión Dawn de NASA (2015-2018) reveló manchas brillantes en el cráter Occator, identificadas como depósitos de carbonato de sodio, evidencia de que Ceres tuvo un océano salado subterráneo. Los datos indican que podría tener agua líquida residual bajo su superficie, lo que lo convierte en un objeto de gran interés astrobiológico.',
        icon: '🪐'
    },
    {
        name: 'Vesta',
        type: 'Asteroide',
        parent: 'Cinturón de Asteroides',
        diameter: '525 km',
        discovered: '1807 por Heinrich Wilhelm Olbers',
        description: 'El segundo objeto más grande del cinturón de asteroides y uno de los pocos asteroides diferenciados, con núcleo metálico, manto rocoso y corteza basáltica, similar a los planetas terrestres. La misión Dawn visitó Vesta en 2011-2012, descubriendo el cráter Rheasilvia de 505 km de diámetro con una montaña central de 20-25 km de altura, una de las estructuras más altas del sistema solar. Muchos meteoritos HED (howarditas, eucritas y diogenitas) encontrados en la Tierra provienen de Vesta, lo que lo convierte en el único asteroide del que tenemos muestras directas.',
        icon: '☄️'
    },
    
    // LUNAS DE MARTE
    {
        name: 'Fobos',
        type: 'Luna',
        parent: 'Marte',
        diameter: '22.2 km (promedio)',
        discovered: '1877 por Asaph Hall',
        description: 'La mayor de las dos lunas de Marte, con forma irregular y superficie densamente craterizada. Orbita a solo 6.000 km de la superficie marciana, completando una órbita cada 7 horas y 39 minutos, más rápido que la rotación de Marte. Fobos se acerca a Marte aproximadamente 1.8 cm por año debido a fuerzas de marea, y los científicos estiman que en 30-50 millones de años colisionará con Marte o se fragmentará formando un anillo. Su característica más notable es el cráter Stickney de 9 km de diámetro. El origen de Fobos es debatido: podría ser un asteroide capturado tipo C o D, o material eyectado de Marte.',
        icon: '🌑'
    },
    {
        name: 'Deimos',
        type: 'Luna',
        parent: 'Marte',
        diameter: '12.6 km (promedio)',
        discovered: '1877 por Asaph Hall (6 días después de Fobos)',
        description: 'La luna más pequeña y externa de Marte, orbitando a 23.460 km de distancia y completando una órbita cada 30.3 horas. A diferencia de Fobos, Deimos se aleja lentamente de Marte. Su superficie está cubierta de regolito suelto (polvo lunar) que suaviza su apariencia y rellena muchos cráteres. Desde la superficie marciana, Deimos aparece como una estrella muy brillante, del tamaño de Venus vista desde la Tierra. Su composición y órbita sugieren un origen como asteroide capturado, posiblemente del cinturón exterior o de la población troyana de Marte.',
        icon: '🌑'
    },
    
    // LUNAS DE JÚPITER (Galileanas)
    {
        name: 'Ío',
        type: 'Luna galileana',
        parent: 'Júpiter',
        diameter: '3.643 km',
        discovered: '8 enero 1610 por Galileo Galilei',
        description: 'El cuerpo con mayor actividad volcánica del sistema solar, con más de 400 volcanes activos identificados. Su intensa actividad volcánica es causada por el calentamiento por marea resultado de la atracción gravitacional de Júpiter y las resonancias orbitales con Europa y Ganímedes (resonancia de Laplace 1:2:4). Los volcanes expulsan plumas de dióxido de azufre hasta 500 km de altura. La superficie de Ío se renueva constantemente, eliminando cráteres de impacto, y está compuesta principalmente de lava de silicato y azufre. La temperatura en algunos puntos volcánicos alcanza 1.600°C. Ío pierde aproximadamente 1 tonelada de material por segundo hacia el espacio.',
        icon: '🌋'
    },
    {
        name: 'Europa',
        type: 'Luna galileana',
        parent: 'Júpiter',
        diameter: '3.122 km',
        discovered: '8 enero 1610 por Galileo Galilei',
        description: 'Una de las ubicaciones más prometedoras para la búsqueda de vida extraterrestre en el sistema solar. Bajo su corteza de hielo de agua de 15-25 km de espesor, Europa alberga un océano global de agua salada de 60-150 km de profundidad, conteniendo aproximadamente el doble del volumen de agua de todos los océanos terrestres. La misión Galileo detectó en 2013 posibles plumas de vapor de agua expulsándose al espacio desde su superficie. Europa tiene la superficie más lisa del sistema solar, con muy pocos cráteres, indicando una edad superficial de 40-90 millones de años. La misión Europa Clipper de NASA, lanzamiento previsto para 2024, realizará múltiples sobrevuelos para estudiar su habitabilidad.',
        icon: '❄️'
    },
    {
        name: 'Ganímedes',
        type: 'Luna galileana',
        parent: 'Júpiter',
        diameter: '5.268 km',
        discovered: '7 enero 1610 por Galileo Galilei',
        description: 'La luna más grande del sistema solar, superando incluso a Mercurio (4.880 km) en tamaño, aunque con menor masa. Es el único satélite conocido con campo magnético propio (magnetosfera), generado por un núcleo de hierro-níquel líquido. Ganímedes posee un océano subterráneo de agua salada a unos 150 km de profundidad, posiblemente estratificado en varias capas de agua y hielo de diferentes fases por las altas presiones. Su superficie muestra dos tipos de terreno: regiones oscuras antiguas (>4 mil millones de años) intensamente craterizadas, y regiones brillantes más jóvenes (<2 mil millones de años) con complejos patrones de surcos y crestas. La misión JUICE de ESA, lanzada en 2023, entrará en órbita de Ganímedes en 2034.',
        icon: '🌕'
    },
    {
        name: 'Calisto',
        type: 'Luna galileana',
        parent: 'Júpiter',
        diameter: '4.821 km',
        discovered: '7 enero 1610 por Galileo Galilei',
        description: 'La tercera luna más grande del sistema solar y el objeto con la superficie más antigua y densamente craterizada conocida, con edad estimada de 4 mil millones de años. Su superficie es un registro fósil del bombardeo intenso del sistema solar primitivo. Calisto presenta múltiples estructuras de impacto concéntricas gigantes: Valhalla (cuenca de 3.800 km de diámetro) y Asgard (1.600 km). A diferencia de otras lunas galileanas, Calisto está menos diferenciado internamente, siendo una mezcla relativamente homogénea de hielo y roca. Datos de Galileo sugieren un océano subterráneo salado a 100-200 km de profundidad. Calisto experimenta poco calentamiento por marea debido a su órbita más externa.',
        icon: '🌔'
    },
    
    // LUNAS DE SATURNO
    {
        name: 'Titán',
        type: 'Luna',
        parent: 'Saturno',
        diameter: '5.150 km',
        discovered: '25 marzo 1655 por Christiaan Huygens',
        description: 'La segunda luna más grande del sistema solar (después de Ganímedes) y la única luna con atmósfera densa (1.45 atmósferas, 45% más presión que la Tierra). Su atmósfera de nitrógeno (95%) y metano (5%) produce un efecto invernadero que mantiene temperatura superficial de -179°C. Titán es el único cuerpo además de la Tierra con líquidos estables en su superficie: lagos, ríos y mares de metano y etano líquidos, principalmente en las regiones polares (el Kraken Mare es el mar más grande con 400.000 km²). La sonda Huygens aterrizó exitosamente el 14 enero 2005, revelando un paisaje con dunas, montañas, valles fluviales y evidencia de "criovolcanismo". La misión Dragonfly de NASA (lanzamiento 2027) enviará un dron para explorar Titán.',
        icon: '🟠'
    },
    {
        name: 'Encélado',
        type: 'Luna',
        parent: 'Saturno',
        diameter: '504 km',
        discovered: '28 agosto 1789 por William Herschel',
        description: 'Una pequeña luna helada con uno de los descubrimientos más significativos: géiseres activos que expulsan vapor de agua, partículas de hielo y compuestos orgánicos desde "rayas de tigre" (fisuras) en su polo sur. Estos géiseres alcanzan cientos de kilómetros de altura y forman el anillo E de Saturno. La misión Cassini detectó en los géiseres: agua, sales (incluyendo cloruro de sodio), moléculas orgánicas complejas, y moléculas de hidrógeno (H₂), evidencia contundente de actividad hidrotermal submarina. Bajo su corteza de hielo de ~20 km existe un océano global de agua salada de ~30 km de profundidad. La combinación de agua líquida, compuestos orgánicos y fuentes de energía hace de Encélado uno de los mejores candidatos para vida extraterrestre.',
        icon: '💎'
    },
    {
        name: 'Mimas',
        type: 'Luna',
        parent: 'Saturno',
        diameter: '396 km',
        discovered: '17 septiembre 1789 por William Herschel',
        description: 'Conocida como la "Luna Estrella de la Muerte" por su parecido con la estación espacial de Star Wars, debido al enorme cráter Herschel de 130 km de diámetro (un tercio del diámetro de Mimas). El impacto que creó Herschel casi destruyó completamente la luna; ondas de choque del impacto fracturaron el lado opuesto. Estudios recientes (2014-2022) de las libraciones (oscilaciones) de Mimas sugieren que podría tener un océano interno de formación reciente (menos de 25 millones de años) a 24-31 km bajo la superficie, o un núcleo alargado. Mimas es responsable de la División de Cassini en los anillos de Saturno (4.800 km de ancho) mediante resonancia orbital 2:1.',
        icon: '⭐'
    },
    
    // LUNAS DE URANO
    {
        name: 'Miranda',
        type: 'Luna',
        parent: 'Urano',
        diameter: '471 km',
        discovered: '16 febrero 1948 por Gerard Kuiper',
        description: 'La luna más pequeña de las cinco principales de Urano y uno de los objetos más extraños del sistema solar. Su superficie es un mosaico caótico de terrenos radicalmente diferentes: cañones de hasta 20 km de profundidad (12 veces el Gran Cañón), acantilados vertiginosos como Verona Rupes de 5-10 km de altura (el acantilado más alto conocido), y tres "coronae" (regiones ovales con surcos concéntricos) llamadas Arden, Elsinore e Inverness. La geología caótica sugiere que Miranda fue destrozada por impactos múltiples y se reensambló varias veces, o experimentó calentamiento interno extremo. Solo tenemos imágenes detalladas del 40% de su superficie, tomadas por Voyager 2 el 24 enero 1986.',
        icon: '🧩'
    },
    {
        name: 'Ariel',
        type: 'Luna',
        parent: 'Urano',
        diameter: '1.158 km',
        discovered: '24 octubre 1851 por William Lassell',
        description: 'La cuarta luna más grande de Urano y la más brillante (albedo más alto), con una superficie relativamente joven que muestra evidencia de actividad geológica pasada. Ariel presenta sistemas extensos de valles, fallas y cañones de hasta 10 km de profundidad que sugieren que la luna se expandió en su historia. Algunas regiones muestran material más brillante y menos craterizadas, posiblemente resurface por criovolcanismo (erupciones de agua-amoníaco). Los cráteres más grandes incluyen Yangoor (78 km) y Korrigan (118 km, parcialmente fuera de las imágenes de Voyager 2). Ariel tiene una composición de aproximadamente 50% hielo de agua y 50% material rocoso, con posibles trazas de amoníaco y dióxido de carbono.',
        icon: '✨'
    },
    
    // LUNAS DE NEPTUNO
    {
        name: 'Tritón',
        type: 'Luna',
        parent: 'Neptuno',
        diameter: '2.707 km',
        discovered: '10 octubre 1846 por William Lassell (17 días después del descubrimiento de Neptuno)',
        description: 'La séptima luna más grande del sistema solar y la única luna grande con órbita retrógrada (orbita en dirección opuesta a la rotación de Neptuno), prueba definitiva de que fue capturado del Cinturón de Kuiper hace 3.6 mil millones de años. Tritón es uno de los objetos más fríos medidos (-235°C o 38 K), pero geológicamente activo con géiseres de nitrógeno que expulsan material oscuro hasta 8 km de altura. Su superficie muestra "terreno de melón cantaloupe" único (depresiones y crestas), pocos cráteres (superficie joven de ~100 millones de años), y casquetes polares de nitrógeno congelado. La captura de Tritón probablemente destruyó el sistema de lunas original de Neptuno. Tritón se acerca gradualmente a Neptuno y será destruido por fuerzas de marea en 3.6 mil millones de años, formando un sistema de anillos espectacular.',
        icon: '🔷'
    },
    {
        name: 'Proteo',
        type: 'Luna',
        parent: 'Neptuno',
        diameter: '420 km (promedio)',
        discovered: '16 junio 1989 por Voyager 2',
        description: 'La segunda luna más grande de Neptuno (después de Tritón) y una de las lunas más oscuras del sistema solar con albedo de solo 6% (refleja muy poca luz solar). Proteo tiene forma muy irregular, casi en el límite del tamaño donde la gravedad forzaría una forma esférica (500 km). Su característica dominante es el enorme cráter Pharos de 255 km de diámetro, que cubre gran parte de su superficie visible. Proteo no fue descubierto desde la Tierra a pesar de ser la segunda luna más grande porque orbita muy cerca de Neptuno (solo 117.000 km) y su superficie extremadamente oscura lo hace casi invisible. Orbita dentro del límite de Roche rígido de Neptuno pero su estructura sólida le permite mantener cohesión.',
        icon: '🌑'
    }
];

