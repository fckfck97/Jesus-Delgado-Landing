export const profile = {
  name: "Ing. Jesus Delgado",
  githubUser: "fckfck97",
  xHandle: "@_GodZell",
  linkedin: "https://www.linkedin.com/in/gotzellll",
  xUrl: "https://x.com/_GodZell",
  heroImage: "/img/jesus.webp",
  whatsapp: "+573173030718",
  whatsappUrl: "https://wa.me/573173030718",
  email: "hola@devjesusdelgado.com",
} as const

export const technologies = [
  "Python",
  "Django",
  "Django REST",
  "JWT",
  "React",
  "React Native",
  "Redux",
  "Next.js",
  "Expo",
  "LangChain",
  "OpenAI",
  "LM Studio",
  "AWS",
  "Hostinger",
  "Docker",
  "PostgreSQL",
  "SQLite",
  "Linux",
  "Postman",
  "JavaScript",
  "HTML5",
  "CSS3",
] as const

const colombiaFeaturedProjects = [
  {
    slug: "mikiguiki",
    name: "Mikiguiki",
    description: {
      es: "Plataforma de streaming con experiencia web y movil, enfocada en contenidos digitales y nuevas formas de entretenimiento.",
      en: "Streaming platform with web and mobile experience, focused on digital content and new entertainment formats.",
    },
    features: {
      es: [
        "Gestion de usuarios y perfiles",
        "Suscripciones y monetizacion",
        "Catalogo y reproduccion de contenido",
        "Panel administrativo",
        "Notificaciones",
      ],
      en: [
        "User and profile management",
        "Subscriptions and monetization",
        "Content catalog and playback",
        "Admin panel",
        "Notifications",
      ],
    },
    url: "https://mikiguiki.com/",
    appStoreUrl: "https://apps.apple.com/us/app/mikiguiki/id6748412273",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ovalcampus.mikiguikiapp",
  },
  {
    slug: "yuancity",
    name: "Yuancity",
    description: {
      es: "Marketplace y tienda de dropshipping en Colombia: puedes importar, traer, vender y tambien publicar productos dentro de la app por comision.",
      en: "Marketplace and dropshipping store in Colombia where users can import, sell, and publish products inside the app on a commission model.",
    },
    features: {
      es: [
        "Catalogo y buscador con filtros",
        "Publicacion de productos por vendedores (modelo comision)",
        "Flujo de compra y checkout",
        "Gestion de pedidos y estados",
        "Panel admin y metricas de ventas",
      ],
      en: [
        "Catalog and filtered search",
        "Seller product publishing with commission model",
        "Purchase and checkout flow",
        "Order and status management",
        "Admin panel and sales metrics",
      ],
    },
    url: "https://yuancity.com/",
    appStoreUrl: "https://apps.apple.com/us/app/yuan-city/id6755722239",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ovalcampus.yuancity",
  },
  {
    slug: "allentown-university",
    name: "Allentown University",
    description: {
      es: "Portal universitario con gestion academica completa y videoconferencias web. Arquitectura preparada para expansion movil.",
      en: "University portal with full academic management and web videoconferencing. Architecture prepared for mobile expansion.",
    },
    features: {
      es: [
        "Portal estudiantil y docente",
        "Sistema de calificaciones",
        "Biblioteca digital",
        "Campus virtual",
        "Videoconferencias en web",
      ],
      en: [
        "Student and faculty portal",
        "Grading system",
        "Digital library",
        "Virtual campus",
        "Web videoconferencing",
      ],
    },
    url: "https://allentownuniversity.com/",
    appStoreUrl: "",
    playStoreUrl: "",
  },
  {
    slug: "greencloset",
    name: "Greencloset",
    description: {
      es: "Ecommerce sostenible de ropa de segunda mano: publicaciones, compra y venta, organizacion por categorias y experiencia enfocada en consumo responsable.",
      en: "Sustainable second-hand fashion ecommerce for listings, buying and selling, category-based browsing, and responsible consumption.",
    },
    features: {
      es: [
        "Publicacion de prendas por vendedores",
        "Catalogo por categorias y tallas",
        "Gestion de inventario de publicaciones",
        "Mensajeria y seguimiento de pedidos",
        "Panel admin para moderacion y control",
      ],
      en: [
        "Seller garment publishing",
        "Catalog by categories and sizes",
        "Listing inventory management",
        "Messaging and order tracking",
        "Admin moderation and control panel",
      ],
    },
    url: "https://greencloset.shop/",
    appStoreUrl: "https://apps.apple.com/co/app/green-closet/id6751541189",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ovalcampus.greencloset",
  },
  {
    slug: "tablechat",
    name: "Tablechat",
    description: {
      es: "Aplicación móvil para pedir en restaurantes sin contacto: el cliente consulta el menú digital, arma su pedido con asistencia de IA y lo envía directamente desde la mesa.",
      en: "Contactless restaurant-ordering app where guests browse a digital menu, build an AI-assisted order, and submit it directly from the table.",
    },
    features: {
      es: [
        "Menú digital para restaurantes",
        "Pedidos desde la mesa sin esperar al mesero",
        "Asistencia de IA durante la selección",
        "Reducción de errores y tiempos de atención",
        "Aplicación publicada para iOS y Android",
      ],
      en: [
        "Digital restaurant menu",
        "Table-side ordering without waiting for a server",
        "AI assistance during selection",
        "Reduced ordering errors and service times",
        "Published iOS and Android application",
      ],
    },
    url: "https://tablechat.yesglobals.com/",
    appStoreUrl: "https://apps.apple.com/co/app/tablechat/id6752120813",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ovalcampus.tabletchat",
  },
  {
    slug: "notaria-primera-barranquilla",
    name: "Notaría Primera de Barranquilla",
    description: {
      es: "Ecosistema digital para atención notarial: sitio institucional completo y asistente virtual por WhatsApp que automatiza la orientación de trámites mediante n8n y Evolution API.",
      en: "Digital service ecosystem for a public notary office: a complete institutional website plus a WhatsApp virtual assistant that automates procedural guidance through n8n and Evolution API.",
    },
    features: {
      es: [
        "Información de escrituración, registro civil, autenticaciones y trámites no escriturarios",
        "Asistente virtual de atención conectado a WhatsApp",
        "Automatización de conversaciones y procesos con n8n y Evolution API",
        "Transparencia, PQRSD, normatividad y contenidos institucionales",
        "58.000 visitas verificadas en los últimos tres meses mediante Google Business Profile",
      ],
      en: [
        "Guidance for deeds, civil registry, authentications, and non-deed procedures",
        "Customer-service virtual assistant connected to WhatsApp",
        "Conversation and workflow automation with n8n and Evolution API",
        "Transparency, citizen requests, regulations, and institutional content",
        "58,000 verified visits over the last three months through Google Business Profile",
      ],
    },
    url: "https://notariaprimerabarranquilla.com/",
    appStoreUrl: "",
    playStoreUrl: "",
  },
  {
    slug: "empaquetadora-del-norte",
    name: "Empaquetadora del Norte",
    description: {
      es: "Empresa agroindustrial lider en Norte de Santander especializada en empaquetado, envasado y comercializacion de aceite de palma, arroz, azucar y granos, con cobertura mayorista nacional e internacional.",
      en: "Agroindustrial company leading in Norte de Santander, specialized in packaging, bottling, and distribution of palm oil, rice, sugar, and grains, with national and international wholesale coverage.",
    },
    features: {
      es: [
        "Empaquetado de arroz, azucar y granos",
        "Envasado de aceite de palma y soya",
        "Soplado de envases plasticos",
        "Maquila para marcas aliadas",
        "Logistica con flota propia",
      ],
      en: [
        "Packaging of rice, sugar, and grains",
        "Bottling of palm and soybean oil",
        "Plastic container blowing",
        "Contract manufacturing for partner brands",
        "Logistics with own fleet",
      ],
    },
    url: "https://empaquetadoradelnorte.com/",
    appStoreUrl: "",
    playStoreUrl: "",
  },
  {
    slug: "watti-energy",
    name: "Watti Energy",
    description: {
      es: "Fintech solar colombiana para hogares, empresas e industrias. Desarrollé su experiencia web completa para presentar SolarFlex, el modelo de energía solar sin inversión inicial, y convertir el interés comercial en solicitudes estructuradas.",
      en: "Colombian solar fintech for homes, businesses, and industrial clients. I built its complete web experience to present SolarFlex, its no-upfront-investment solar model, and turn commercial interest into structured applications.",
    },
    features: {
      es: [
        "Arquitectura web y narrativa comercial de Watti Energy",
        "Presentación de soluciones solares residenciales, comerciales e industriales",
        "Flujo de solicitud de SolarFlex en tres pasos",
        "Secciones de beneficios, aliados y casos de éxito",
        "SEO, rendimiento y experiencia adaptable a móviles",
      ],
      en: [
        "Web architecture and commercial narrative for Watti Energy",
        "Residential, commercial, and industrial solar solution presentation",
        "Three-step SolarFlex application journey",
        "Benefits, strategic partners, and success-story sections",
        "SEO, performance, and responsive mobile experience",
      ],
    },
    url: "https://watti.com.co/",
    appStoreUrl: "",
    playStoreUrl: "",
  },
  {
    slug: "refinorte",
    name: "Refinorte",
    description: {
      es: "Complejo industrial integrado de refinacion de aceites comestibles, margarinas, shortenings, productos nutraceuticos intermedios y jaboneria, proyectado como la primera refinadora de aceite de palma con tecnologia avanzada en Latinoamerica.",
      en: "Integrated industrial complex for refining edible oils, margarines, shortenings, intermediate nutraceutical products, and soap, projected as the first advanced-technology palm oil refinery in Latin America.",
    },
    features: {
      es: [
        "Refinacion de aceites comestibles y margarinas",
        "Produccion de shortenings y nutraceuticos",
        "Tecnologia de extraccion avanzada end-to-end",
        "Impacto regional: empleos directos e indirectos",
        "Sostenibilidad ambiental y excelencia operacional",
      ],
      en: [
        "Edible oil and margarine refining",
        "Shortening and nutraceutical production",
        "Advanced end-to-end extraction technology",
        "Regional impact: direct and indirect jobs",
        "Environmental sustainability and operational excellence",
      ],
    },
    url: "https://www.refinorte.com.co/",
    appStoreUrl: "",
    playStoreUrl: "",
  },
  {
    slug: "cafe-arduvi",
    name: "Cafe Arduvi",
    description: {
      es: "Restaurante y cafe en Cucuta que une gastronomia con inclusion social activa, donde personas con capacidades diferentes son protagonistas del servicio bajo el modelo Arduvi de inclusion con amor.",
      en: "Restaurant and cafe in Cucuta blending gastronomy with active social inclusion, where people with different abilities are central to the service under the Arduvi inclusion-with-love model.",
    },
    features: {
      es: [
        "Desayunos, almuerzos y menu diario",
        "Cafe de especialidad, postres y tortas",
        "Catering y servicio para eventos",
        "Inclusion laboral de personas con capacidades diferentes",
        "Acompanamiento psicosocial y sociolaboral",
      ],
      en: [
        "Breakfasts, lunches, and daily menu",
        "Specialty coffee, desserts, and cakes",
        "Catering and event service",
        "Employment inclusion for people with different abilities",
        "Psychosocial and socio-labor support",
      ],
    },
    url: "https://cafearduvi.com/",
    appStoreUrl: "",
    playStoreUrl: "",
  },
  {
    slug: "fundacion-arduvi",
    name: "Fundacion Arduvi",
    description: {
      es: "Fundacion sin animo de lucro fundada en Cucuta en 2021 cuyo proposito es impulsar la inclusion laboral y social de poblacion migrante vulnerable, personas con discapacidad y grupos en riesgo social bajo el sello Inclusion con Amor.",
      en: "Non-profit foundation established in Cucuta in 2021 focused on promoting labor and social inclusion of vulnerable migrant populations, people with disabilities, and at-risk groups under the Inclusion with Love model.",
    },
    features: {
      es: [
        "Inclusion laboral y social de poblacion vulnerable",
        "Intervencion y atencion psicosocial",
        "Insercion sociolaboral y comunitaria",
        "Gestion del conocimiento e innovacion social",
        "Sello Inclusion con Amor para organizaciones aliadas",
      ],
      en: [
        "Labor and social inclusion of vulnerable populations",
        "Psychosocial intervention and care",
        "Community and socio-labor integration",
        "Knowledge management and social innovation",
        "Inclusion with Love seal for partner organizations",
      ],
    },
    url: "https://fundacionarduvi.org/",
    appStoreUrl: "",
    playStoreUrl: "",
  },
  {
    slug: "cooagrovida",
    name: "Cooagrovida",
    description: {
      es: "Cooperativa de familias campesinas del Catatumbo, Norte de Santander, dedicada a fortalecer el ciclo productivo agroindustrial y la comercializacion sostenible agricola, con vision de liderazgo nacional al 2030.",
      en: "Cooperative of farming families from el Catatumbo, Norte de Santander, dedicated to strengthening the agroindustrial productive cycle and sustainable agricultural trade, with a national leadership vision by 2030.",
    },
    features: {
      es: [
        "Fortalecimiento del ciclo productivo agroindustrial",
        "Comercializacion sostenible de productos agricolas",
        "Gestion de proyectos publico-privado-populares",
        "Desarrollo de capacidades organizativas y cooperativas",
        "Acceso a mercados e infraestructura productiva",
      ],
      en: [
        "Strengthening the agroindustrial productive cycle",
        "Sustainable agricultural product trade",
        "Public-private-community project management",
        "Organizational and cooperative capacity development",
        "Market access and productive infrastructure",
      ],
    },
    url: "https://cooagrovida.com/",
    appStoreUrl: "",
    playStoreUrl: "",
  },
] as const

const venezuelaFeaturedProjects = [
  {
    slug: "ciatran",
    name: "CIATRAN Venezuela",
    description: {
      es: "Plataforma de movilidad multimodal sostenible para Venezuela y el Caribe que integra bicicletas eléctricas compartidas, logística de última milla, movilidad corporativa y datos urbanos.",
      en: "Sustainable multimodal mobility platform for Venezuela and the Caribbean, integrating shared electric bicycles, last-mile logistics, corporate mobility, and urban data.",
    },
    features: {
      es: ["Bicicletas compartidas eléctricas y solares", "Última milla con e-bikes de carga", "Movilidad corporativa bajo modelo MaaS", "Telemetría IoT y geofencing", "Analítica urbana e IA aplicada a movilidad"],
      en: ["Electric and solar bike sharing", "Last-mile logistics with cargo e-bikes", "Corporate mobility under a MaaS model", "IoT telemetry and geofencing", "Urban analytics and AI applied to mobility"],
    },
    url: "https://ciatranve.com/",
    appStoreUrl: "",
    playStoreUrl: "",
  },
  {
    slug: "comuna-gran-cacique-mare",
    name: "Monitor Central · Comuna Gran Cacique Mare",
    description: {
      es: "Sistema institucional para coordinar la recuperación de Mare Abajo, La Guaira, después de los sismos, con apoyo de la Fundación Misión Hábitat y el Ministerio del Poder Popular para Hábitat y Vivienda.",
      en: "Institutional system coordinating post-earthquake recovery in Mare Abajo, La Guaira, with support from Fundación Misión Hábitat and the Ministry of People's Power for Habitat and Housing.",
    },
    features: {
      es: ["Censo georreferenciado de viviendas", "Semáforos de riesgo", "Seguimiento técnico de viviendas afectadas", "Trazabilidad de inspecciones y acciones", "Acceso protegido para personal autorizado"],
      en: ["Georeferenced housing census", "Risk traffic lights", "Technical tracking of affected homes", "Traceability of inspections and actions", "Protected access for authorized personnel"],
    },
    url: "https://comunagcm.obsin.tech/",
    appStoreUrl: "",
    playStoreUrl: "",
  },
  {
    slug: "sinri-industria",
    name: "SINRI-INDUSTRIA · OBSIN",
    description: {
      es: "Sistema centralizado de reportes industriales para registrar mercancía, inventarios, hornos, productos y empresas vinculadas al Viceministerio de Industria para Hábitat y Vivienda.",
      en: "Centralized industrial reporting system for merchandise, inventory, kilns, products, and companies under the Vice Ministry of Industry for Habitat and Housing.",
    },
    features: {
      es: ["Registro de mercancía y movimientos", "Control de inventarios", "Registro y seguimiento de hornos", "Catálogo de productos industriales", "Gestión de empresas y reportes operativos"],
      en: ["Merchandise and movement records", "Inventory control", "Kiln registration and monitoring", "Industrial product catalog", "Company management and operational reporting"],
    },
    url: "https://obsin.tech/login",
    appStoreUrl: "",
    playStoreUrl: "",
  },
] as const

export const regionalProjects = [
  {
    slug: "colombia-digital-platforms",
    country: "Colombia",
    code: "COL_01",
    image: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?w=700&q=75",
    tag: {
      es: "#COLOMBIA #WEB #MOBILE #AUTOMATION",
      en: "#COLOMBIA #WEB #MOBILE #AUTOMATION",
    },
    title: {
      es: "Proyectos en Colombia",
      en: "Projects in Colombia",
    },
    summary: {
      es: "En Colombia desarrollé productos digitales de naturaleza distinta: una plataforma de streaming, dos marketplaces, una aplicación de pedidos para restaurantes, un campus universitario, portales corporativos e institucionales y la digitalización de una notaría. Cada solución responde a una operación concreta y se presenta según sus funciones reales.",
      en: "In Colombia I built distinct digital products: a streaming platform, two marketplaces, a restaurant-ordering app, a university campus, corporate and institutional portals, and the digital transformation of a notary office. Each solution supports a specific operation and is presented through its real functionality.",
    },
    overview: {
      es: "El portafolio combina productos transaccionales y experiencias de contenido. YuanCity permite explorar productos importados, comprar, pagar y gestionar entregas; GreenCloset funciona como marketplace social de moda circular con publicaciones, chat, geolocalización y pagos. Mikiguiki organiza películas, series, estrenos y fichas editoriales dentro de una experiencia de streaming para web, iOS y Android. TableChat lleva el menú y el pedido a la mesa con asistencia de IA. Allentown University concentra campus virtual, perfiles académicos, calificaciones, biblioteca y videoconferencias. Watti Energy presenta y estructura la contratación de soluciones solares para hogares, empresas e industrias mediante SolarFlex. Los demás proyectos representan operaciones reales de sectores notarial, agroindustrial, gastronómico, social y cooperativo mediante sitios especializados, no tiendas en línea.",
      en: "The portfolio combines transactional products with content-led experiences. YuanCity supports imported-product discovery, purchasing, payment, and delivery; GreenCloset is a circular-fashion social marketplace with listings, chat, geolocation, and payments. Mikiguiki organizes movies, series, releases, and editorial detail pages in a streaming experience for web, iOS, and Android. TableChat brings AI-assisted menu browsing and ordering to the restaurant table. Allentown University centralizes its virtual campus, academic profiles, grades, library, and videoconferencing. Watti Energy presents and structures solar adoption for homes, businesses, and industrial clients through SolarFlex. The remaining work represents real notarial, agroindustrial, hospitality, social-impact, and cooperative operations through specialized websites rather than online stores.",
    },
    approach: {
      es: "La arquitectura se decidió según el producto. Las plataformas móviles y transaccionales combinaron React Native, Next.js, Django REST y PostgreSQL para separar catálogo, usuarios, contenido, pedidos y administración. Los portales corporativos priorizaron velocidad, claridad editorial, SEO y gestión de contenidos. En la Notaría Primera de Barranquilla, además de estructurar servicios, requisitos, transparencia y canales oficiales en la web, se automatizó la atención por WhatsApp con un asistente virtual orquestado en n8n y conectado mediante Evolution API.",
      en: "Architecture was selected per product. Mobile and transactional platforms combined React Native, Next.js, Django REST, and PostgreSQL to separate catalog, users, content, orders, and administration. Corporate portals prioritized speed, editorial clarity, SEO, and content management. For Notaría Primera de Barranquilla, the website structures services, requirements, transparency, and official channels, while WhatsApp service was automated with a virtual assistant orchestrated in n8n and connected through Evolution API.",
    },
    outcomes: {
      es: "El resultado es un conjunto de productos publicados y utilizables en web, App Store y Google Play, con funciones específicas para consumir contenido, comprar y vender, pedir en restaurantes, estudiar, consultar servicios institucionales y automatizar atención ciudadana. En la Notaría Primera de Barranquilla, la combinación de web, SEO local, Google Business Profile y automatización de WhatsApp alcanzó 58.000 visitas verificadas durante los últimos tres meses.",
      en: "The result is a set of live products available across the web, App Store, and Google Play, with specific functionality for streaming content, buying and selling, restaurant ordering, studying, accessing institutional services, and automating citizen support. At Notaría Primera de Barranquilla, the combination of website, local SEO, Google Business Profile, and WhatsApp automation reached 58,000 verified visits over the last three months.",
    },
    highlights: {
      es: [
        "Dos marketplaces: comercio de productos importados en YuanCity y moda circular entre usuarios en GreenCloset.",
        "Streaming de cine original con catálogo editorial, rankings, estrenos y aplicaciones móviles en Mikiguiki.",
        "Pedidos de restaurante desde la mesa con menú digital y asistencia de IA en TableChat.",
        "Campus universitario con gestión académica, biblioteca y videoconferencias en Allentown University.",
        "Experiencia web fintech y flujo comercial de energía solar sin inversión inicial para Watti Energy.",
        "Atención notarial automatizada con n8n, Evolution API y 58.000 visitas verificadas en tres meses.",
      ],
      en: [
        "Two marketplaces: imported-product commerce in YuanCity and user-to-user circular fashion in GreenCloset.",
        "Original-film streaming with editorial catalog, rankings, releases, and mobile apps in Mikiguiki.",
        "Table-side restaurant ordering with a digital menu and AI assistance in TableChat.",
        "University campus with academic management, library, and videoconferencing in Allentown University.",
        "Solar-fintech web experience and no-upfront-investment commercial journey for Watti Energy.",
        "Notarial service automation with n8n, Evolution API, and 58,000 verified visits in three months.",
      ],
    },
    stackDetail: {
      es: "No todos los proyectos usan la misma arquitectura. Mikiguiki, YuanCity, GreenCloset y TableChat requieren capas diferenciadas para web, aplicaciones móviles, autenticación, catálogos o contenido, estados de operación y publicación en tiendas. Next.js cubre las superficies web indexables; React Native entrega las experiencias móviles; Django REST y PostgreSQL sostienen la lógica de usuarios, contenido, pedidos y administración cuando el producto lo requiere. En Mikiguiki, la estructura editorial organiza películas, series, rankings y próximos estrenos. YuanCity y GreenCloset implementan modelos de marketplace distintos: comercio de productos importados y compraventa de moda circular entre usuarios. TableChat se concentra en menús digitales y pedidos sin contacto.\n\nLos sitios de Empaquetadora del Norte, Watti Energy, Refinorte, Café Arduvi, Fundación Arduvi y Cooagrovida tienen objetivos especializados. En Watti desarrollé la arquitectura web, la comunicación de SolarFlex, el flujo de solicitud y la presentación de soluciones residenciales, comerciales e industriales. En todos estos portales la prioridad técnica es una estructura de información clara, rendimiento, accesibilidad, SEO y contenido administrable. Allentown University añade una capa funcional académica con perfiles de estudiantes y docentes, calificaciones, biblioteca, campus virtual y videoconferencias.\n\nLa Notaría Primera de Barranquilla combina una web institucional orientada a servicio público con automatización operativa. El sitio ordena escrituración, registro civil, autenticaciones, trámites no escriturarios, transparencia, normatividad y PQRSD. La atención por WhatsApp se conecta mediante Evolution API y n8n, que orquesta el asistente virtual y los flujos de orientación. El trabajo también incluye SEO local y Google Business Profile; sus métricas registran 58.000 visitas verificadas durante los últimos tres meses.",
      en: "These projects do not all share one architecture. Mikiguiki, YuanCity, GreenCloset, and TableChat require separate layers for indexable web experiences, mobile apps, authentication, catalogs or content, operational states, and app-store distribution. Next.js powers the web surfaces; React Native delivers mobile experiences; Django REST and PostgreSQL support users, content, orders, and administration where the product requires them. Mikiguiki structures films, series, rankings, and upcoming releases. YuanCity and GreenCloset implement different marketplace models: imported-product commerce and user-to-user circular fashion. TableChat focuses on digital menus and contactless ordering.\n\nEmpaquetadora del Norte, Watti Energy, Refinorte, Café Arduvi, Fundación Arduvi, and Cooagrovida have specialized goals. For Watti, I built the web architecture, SolarFlex communication, application journey, and presentation of residential, commercial, and industrial solutions. Across these portals, the technical priorities are clear information architecture, performance, accessibility, SEO, and manageable content. Allentown University adds an academic layer with student and faculty profiles, grades, a library, a virtual campus, and videoconferencing.\n\nNotaría Primera de Barranquilla combines a public-service institutional website with operational automation. The site organizes deeds, civil registry, authentications, non-deed procedures, transparency, regulations, and citizen requests. WhatsApp service is connected through Evolution API and n8n, which orchestrates the virtual assistant and guidance workflows. The work also covers local SEO and Google Business Profile, whose metrics record 58,000 verified visits over the last three months.",
    },
    featuredProjects: colombiaFeaturedProjects,
  },
  {
    slug: "venezuela-ai-backend-systems",
    country: "Venezuela",
    code: "VEN_01",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&q=75",
    tag: { es: "#VENEZUELA #MOVILIDAD #RECONSTRUCCIÓN", en: "#VENEZUELA #MOBILITY #RECOVERY" },
    title: { es: "Proyectos en Venezuela", en: "Projects in Venezuela" },
    summary: {
      es: "En Venezuela desarrollé tres plataformas vinculadas a necesidades concretas: CIATRAN para movilidad sostenible, el Monitor Central de la Comuna Gran Cacique Mare para la recuperación de viviendas afectadas en La Guaira y SINRI-INDUSTRIA para centralizar los reportes del Viceministerio de Industria para Hábitat y Vivienda.",
      en: "In Venezuela I developed three platforms tied to concrete needs: CIATRAN for sustainable mobility, the Gran Cacique Mare Commune Central Monitor for housing recovery in La Guaira, and SINRI-INDUSTRIA for centralized reporting by the Vice Ministry of Industry for Habitat and Housing.",
    },
    overview: {
      es: "CIATRAN reúne movilidad eléctrica, última milla, servicios corporativos y analítica urbana. El Monitor Comunal registra viviendas de manera georreferenciada, clasifica niveles de riesgo y coordina la recuperación de Mare Abajo. SINRI-INDUSTRIA concentra mercancía, inventarios, hornos, productos, empresas y operaciones diarias dentro de un portal institucional protegido.",
      en: "CIATRAN brings together electric mobility, last-mile logistics, corporate services, and urban analytics. The Commune Monitor georeferences homes, classifies risk levels, and coordinates recovery in Mare Abajo. SINRI-INDUSTRIA centralizes merchandise, inventory, kilns, products, companies, and daily operations in a protected institutional portal.",
    },
    approach: {
      es: "Cada plataforma organiza información operativa distinta. CIATRAN comunica servicios, telemetría e impacto ambiental; el Monitor Comunal usa censo georreferenciado y semáforos de riesgo; SINRI-INDUSTRIA estructura reportes industriales, inventarios y registros empresariales mediante acceso institucional con códigos de seguridad.",
      en: "Each platform organizes a different type of operational information. CIATRAN covers services, telemetry, and environmental impact; the Commune Monitor uses a georeferenced census and risk traffic lights; SINRI-INDUSTRIA structures industrial reports, inventory, and company records through secure institutional access codes.",
    },
    outcomes: {
      es: "El resultado son tres herramientas con propósito público y operativo: movilidad de cero emisiones, coordinación para la reconstrucción de La Guaira y control centralizado de información industrial. SINRI-INDUSTRIA permite consolidar datos que antes podían estar dispersos entre empresas, productos, inventarios y operaciones.",
      en: "The result is three tools with public and operational purpose: zero-emission mobility, coordination for the recovery of La Guaira, and centralized industrial information control. SINRI-INDUSTRIA consolidates data across companies, products, inventory, and operations.",
    },
    highlights: {
      es: ["Movilidad eléctrica, última milla y analítica urbana.", "Censo georreferenciado y semáforos de riesgo.", "Trazabilidad para la recuperación de La Guaira.", "Control de mercancía, inventarios, hornos y productos.", "Gestión centralizada de empresas y reportes industriales."],
      en: ["Electric mobility, last-mile logistics, and urban analytics.", "Georeferenced census and risk traffic lights.", "Traceability for the recovery of La Guaira.", "Merchandise, inventory, kiln, and product control.", "Centralized company and industrial report management."],
    },
    stackDetail: {
      es: "CIATRAN organiza una plataforma de movilidad como servicio con transporte compartido, logística de carga, servicios corporativos y datos. La propuesta tecnológica contempla estaciones solares, seguimiento GPS, geofencing, telemetría IoT, paneles de control y modelos de IA para convertir el movimiento de la flota en información útil.\n\nEl Monitor Central de la Comuna Gran Cacique Mare está diseñado para la recuperación posterior a los sismos en Mare Abajo, parroquia Carlos Soublette. El acceso se limita a personal autorizado y la información se estructura mediante censo georreferenciado, evaluación técnica, semáforos de riesgo y seguimiento de acciones sobre cada vivienda.\n\nLa plataforma acompaña la reconstrucción de La Guaira con apoyo de la Fundación Misión Hábitat y del Ministerio del Poder Popular para Hábitat y Vivienda, priorizando protección de datos, acceso institucional y uso por equipos de campo.",
      en: "CIATRAN structures mobility as a service across shared transportation, cargo logistics, corporate services, and data. Its technology proposal includes solar stations, GPS tracking, geofencing, IoT telemetry, control dashboards, and AI models that turn fleet movement into useful information.\n\nThe Gran Cacique Mare Commune Central Monitor is designed for post-earthquake recovery in Mare Abajo, Carlos Soublette parish. Access is restricted to authorized staff, and information is organized through a georeferenced census, technical evaluations, risk traffic lights, and action tracking for each home.\n\nThe platform supports reconstruction in La Guaira with Fundación Misión Hábitat and the Ministry of People's Power for Habitat and Housing, prioritizing data protection, institutional access, and field-team use.",
    },
    featuredProjects: venezuelaFeaturedProjects,
  },
  {
    slug: "usa-cloud-ai-products",
    country: "USA",
    code: "USA_01",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=75",
    tag: {
      es: "#USA #CLOUD #PRODUCT",
      en: "#USA #CLOUD #PRODUCT",
    },
    title: {
      es: "Proyectos en USA",
      en: "Projects in USA",
    },
    summary: {
      es: "Los proyectos vinculados a Estados Unidos estuvieron centrados en productos modernos con exigencias más altas de escalabilidad, velocidad de entrega y calidad de despliegue. En este contexto, la prioridad fue construir soluciones listas para producción desde etapas tempranas, con frontend cuidado, backend sólido e integraciones de inteligencia artificial cuando realmente mejoraban la experiencia o el flujo de trabajo. El objetivo no era solo lanzar rápido, sino dejar sistemas preparados para iterar, medir y crecer sin fricción innecesaria.",
      en: "The projects related to the United States were centered on modern products with higher expectations around scalability, delivery speed, and deployment quality. In this context, the priority was to build production-ready solutions from early stages, with a polished frontend, solid backend, and AI integrations when they genuinely improved the experience or workflow. The goal was not only to launch fast, but to leave systems ready to iterate, measure, and scale without unnecessary friction.",
    },
    overview: {
      es: "Estos desarrollos respondieron a necesidades de producto más orientadas a mercado competitivo, donde performance, confiabilidad y experiencia de usuario tienen impacto directo en adquisición y retención. Se trabajó en aplicaciones full stack, módulos internos y experiencias AI-first que requerían una arquitectura limpia, observabilidad básica y despliegues robustos. El reto era equilibrar velocidad de ejecución con decisiones técnicas que no comprometieran el mantenimiento futuro ni la estabilidad del producto.",
      en: "These builds responded to product needs aimed at more competitive markets, where performance, reliability, and user experience directly affect acquisition and retention. Work covered full-stack applications, internal modules, and AI-first experiences that required a clean architecture, baseline observability, and robust deployments. The challenge was to balance execution speed with technical decisions that would not compromise future maintenance or product stability.",
    },
    approach: {
      es: "La capa técnica combinó Next.js, React, servicios backend, integración con APIs de terceros, automatizaciones y componentes vinculados a LangChain o flujos AI cuando la funcionalidad lo justificaba. También se trabajó en optimización de interfaz, estados de carga, despliegue en cloud y separación clara entre lógica de negocio y presentación. Ese enfoque permitió construir productos con mejor mantenibilidad, mejor tiempo de respuesta y una base más sólida para nuevas funcionalidades.",
      en: "The technical layer combined Next.js, React, backend services, third-party API integration, automations, and LangChain-related or AI workflows when the feature set justified them. Work also covered interface optimization, loading states, cloud deployment, and a clear separation between business logic and presentation. That approach made it possible to build products with better maintainability, faster response times, and a more solid base for future capabilities.",
    },
    outcomes: {
      es: "El resultado fueron productos más listos para escalar, con una experiencia más consistente y una infraestructura mejor preparada para cambios continuos. Los equipos pudieron lanzar iteraciones con menos fricción, integrar nuevas capacidades de AI sobre una base ordenada y sostener entornos de producción con mayor confianza. Desde la perspectiva comercial, esto se traduce en software que responde mejor a crecimiento, validación de features y necesidades de mercado reales.",
      en: "The outcome was a set of products better prepared to scale, with a more consistent experience and infrastructure ready for continuous change. Teams were able to launch iterations with less friction, integrate new AI capabilities on top of an organized base, and support production environments with more confidence. From a commercial perspective, this translates into software that responds better to growth, feature validation, and real market needs.",
    },
    highlights: {
      es: [
        "Aplicaciones full stack orientadas a producción y preparadas para escalar.",
        "Integraciones con servicios AI y flujos LangChain donde aportaban valor real.",
        "Deploys cloud con foco en estabilidad, velocidad de entrega y mantenimiento continuo.",
        "Mejoras de performance y experiencia de usuario para contextos de mercado competitivo.",
        "Arquitectura lista para iterar producto sin rehacer la base técnica.",
      ],
      en: [
        "Production-oriented full-stack applications prepared to scale.",
        "AI service integrations and LangChain workflows where they added real value.",
        "Cloud deployments focused on stability, delivery speed, and ongoing maintenance.",
        "Performance and user-experience improvements for competitive-market contexts.",
        "Architecture ready for product iteration without rebuilding the technical base.",
      ],
    },
    stackDetail: {
      es: "Los proyectos orientados al mercado de Estados Unidos operaron bajo expectativas de producto más estrictas: tiempos de carga más rápidos, interacciones más fluidas, interfaces más limpias y despliegues capaces de enviar actualizaciones en minutos. Next.js sirvió como framework de frontend para todo el trabajo full stack en este segmento. El App Router y los React Server Components de Next.js permitieron que la obtención de datos ocurriera en el servidor sin cascadas del lado del cliente, lo que mejoró directamente el tiempo de carga percibido en el primer render. Las rutas dinámicas se usaron para secciones con mucho contenido, y el caché edge a través del CDN de Vercel redujo la latencia para usuarios distribuidos en distintas regiones. TypeScript se usó en todo para detectar errores de integración en tiempo de build en lugar de en producción.\n\nLa capa de gestión de estado en el frontend usó Zustand o React Context según el alcance. Redux se evitó en aplicaciones más pequeñas donde el estado global se limitaba a autenticación y preferencias de idioma. La arquitectura de componentes siguió una separación estricta entre componentes UI (sin estado, solo estilo) y componentes contenedor (con datos, propietarios de efectos secundarios). Las integraciones con LangChain se construyeron como módulos de servicio independientes con tipos de entrada y salida explícitos. El objetivo fue hacer los features de AI intercambiables: si cambiaba un proveedor de LLM, cambiar el modelo detrás de una cadena LangChain requería modificar una importación y un valor de configuración. Las plantillas de prompt se almacenaron como strings versionados fuera de la lógica de componentes para permitir iteración sin tocar la capa de renderizado.\n\nAWS se usó para almacenamiento (S3), cómputo (EC2 o Lambda según la carga de trabajo) y base de datos gestionada (RDS con PostgreSQL). Los despliegues siguieron un pipeline de CI que ejecutó comprobaciones de tipos y linting antes de hacer merge, reduciendo el tiempo de retroalimentación para detectar problemas de integración. React Native y Expo manejaron los requerimientos mobile donde el producto web tenía una app de acompañamiento. El flujo gestionado de Expo redujo la carga de builds nativos mientras mantenía acceso a las APIs del dispositivo para notificaciones, cámara y almacenamiento local. El resultado neto fue un modelo de entrega donde cada capa podía actualizarse de forma independiente: frontend, backend, componentes AI y mobile, sin freezes coordinados ni despliegues cruzados de alto riesgo.",
      en: "Projects targeting the US market operated under tighter product expectations: faster load times, smoother interactions, cleaner interfaces, and deployments that could ship updates in minutes. Next.js served as the frontend framework for all full-stack work in this segment. The App Router's React Server Components allowed data fetching to happen on the server without client-side waterfalls, which directly improved perceived load time on first render. Dynamic routes were used for content-heavy sections, and edge caching via Vercel's CDN reduced latency for users distributed across different regions. TypeScript was used throughout to catch integration errors at build time rather than in production.\n\nState management on the frontend used Zustand or React Context depending on scope. Redux was avoided for smaller apps where global state was limited to auth and language preferences. Component architecture followed a strict separation between UI components (stateless, style-only) and container components (data-aware, side-effect-owning). LangChain integrations were built as standalone service modules with explicit input and output types. The goal was to make AI features swappable — if an LLM provider changed pricing or availability, swapping the model behind a LangChain chain required changing one import and one configuration value. Prompt templates were stored as versioned strings outside of component logic to allow iteration without touching the rendering layer.\n\nAWS was used for storage (S3), compute (EC2 or Lambda depending on workload), and managed database (RDS with PostgreSQL). Deployments followed a CI pipeline that ran type checks and linting before merging, reducing the feedback loop for catching integration issues. React Native and Expo handled mobile requirements where the web product had a companion app. Expo's managed workflow reduced the overhead of native builds while keeping access to device APIs for notifications, camera, and local storage. The net result was a delivery model where each layer could be updated independently — frontend, backend, AI components, and mobile — without coordinated freezes or risky cross-layer deploys. Teams could validate a new AI feature in isolation, ship a frontend redesign without touching the API, or update mobile without a web release.",
    },
  },
] as const

export const homeContent = {
  es: {
    nav: {
      work: "ESPECIALIDADES",
      stack: "STACK",
      projects: "PROYECTOS",
      contact: "CONTACTO",
    },
    heroTag: "[ PERFIL CARGADO... ]",
    heroTitleTop: "Developer",
    heroTitleAccent: "Python",
    heroDescription:
      "Construyo productos de software y automatizaciones con foco en machine learning, IA generativa, visión artificial, apps AI-first y desarrollo web moderno.",
    heroSecondary:
      "Trabajo con Python, Django, React, Next.js, React Native, Expo, OpenAI, LM Studio, LangChain, AWS y despliegues listos para producción.",
    primaryCta: "VER ESPECIALIDADES",
    secondaryCta: "CONTACTAR",
    stats: [
      { value: "5+ AÑOS", label: "Python y desarrollo de software" },
      { value: "3 PAÍSES", label: "Colombia, Venezuela y USA" },
      { value: "20+ TECH", label: "Stack activo en producción" },
      { value: "DISPONIBLE", label: "Nuevos proyectos y consultoría" },
    ],
    workTitle: "Lo Que Hago",
    workCards: [
      {
        code: "ML_CORE",
        tag: "#PYTHON #ML #OPENAI",
        title: "Machine Learning e IA Generativa",
        description:
          "Desarrollo soluciones con modelos predictivos, OpenAI, modelos locales en LM Studio y automatización de flujos con datos reales.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=700&q=75",
      },
      {
        code: "VISION_AI",
        tag: "#COMPUTER_VISION #FACE_ID",
        title: "Vision Artificial y Reconocimiento Facial",
        description:
          "Construyo sistemas de analisis visual, reconocimiento facial y procesamiento de imagen para automatizar tareas y extraer informacion util.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&q=75",
      },
      {
        code: "WEB_MOBILE",
        tag: "#DJANGO #NEXTJS #EXPO",
        title: "Backend, Frontend y Apps Mobile",
        description:
          "Implemento APIs, webs, paneles y apps con Django, React, Next.js, React Native y Expo, listas para despliegue en cloud.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=75",
      },
    ],
    marquee: [
      "DISPONIBLE PARA NUEVOS PROYECTOS",
      "AUTOMATIZACION CON PYTHON",
      "APPS CON REACT NATIVE Y EXPO",
      "IA CON OPENAI, LM STUDIO Y LANGCHAIN",
      "DEPLOYS EN AWS Y HOSTINGER",
    ],
    stackTitle: "STACK_ACTIVO.EXE",
    terminalRows: [
      "IA: Machine Learning, IA Generativa, Visión Artificial, OpenAI, LM Studio, LangChain",
      "Backend: Python, Django, Django REST, JWT, PostgreSQL, SQLite",
      "Frontend: React, Next.js, JavaScript, HTML5, CSS3, Redux",
      "Mobile: React Native, Expo",
      "Infraestructura: Docker, Linux, AWS, Hostinger, Postman",
      "Dato curioso: me encanta automatizar tareas con programación",
    ],
    projectsTitle: "Proyectos Por Pais",
    projectsIntro:
      "Trabajo con clientes y productos digitales para distintos mercados, adaptando stack, despliegue y experiencia a cada contexto.",
    projectDetailsCta: "Ver detalle",
    testimonialsTitle: "Prueba Social",
    testimonialsIntro:
      "Comentarios de clientes y colaboradores sobre ejecución técnica, velocidad de entrega y claridad en producto.",
    testimonials: [
      {
        tag: "#TESTIMONIO #COLOMBIA",
        quote:
          "Jesus convirtió un proceso comercial muy manual en una plataforma más ordenada y medible. Pasamos de perseguir información a operar con una base más clara.",
        name: "Director de Operaciones",
        role: "Servicios digitales",
        country: "Colombia",
        result: "Resultado: procesos digitales más claros, menos retrabajo interno y una operación web más estable.",
      },
      {
        tag: "#TESTIMONIO #VENEZUELA",
        quote:
          "Nos ayudó a estructurar backend e integraciones sin complicar el producto. La solución fue práctica y mejoró la velocidad del equipo desde la primera entrega.",
        name: "Líder de Producto",
        role: "Herramientas internas",
        country: "Venezuela",
        result: "Resultado: APIs más confiables, automatización de tareas repetitivas y menor dependencia de procesos manuales.",
      },
      {
        tag: "#TESTIMONIO #USA",
        quote:
          "La combinación entre producto, frontend y AI se sintió pensada para producción, no como una demo. Hubo criterio técnico y rapidez para iterar.",
        name: "Founder",
        role: "AI-first product",
        country: "USA",
        result: "Resultado: iteraciones más rápidas, mejor experiencia de usuario y una base lista para escalar.",
      },
    ],
    contactTitle: "Contacto Directo",
    contactLead:
      "Si necesitas una web, una app, una integración AI o automatizaciones con Python, puedes contactarme directamente por WhatsApp, correo, X, LinkedIn o GitHub.",
    footerLead: "SISTEMA LISTO PARA CONSTRUIR PRODUCTOS REALES.",
    langLabel: "IDIOMA",
  },
  en: {
    nav: {
      work: "SPECIALTIES",
      stack: "STACK",
      projects: "PROJECTS",
      contact: "CONTACT",
    },
    heroTag: "[ PROFILE LOADED... ]",
    heroTitleTop: "Python",
    heroTitleAccent: "Developer",
    heroDescription:
      "I build software products and automations focused on machine learning, generative AI, computer vision, AI-first apps, and modern web development.",
    heroSecondary:
      "My stack includes Python, Django, React, Next.js, React Native, Expo, OpenAI, LM Studio, LangChain, AWS, and production-ready deployments.",
    primaryCta: "VIEW SPECIALTIES",
    secondaryCta: "CONTACT",
    stats: [
      { value: "5+ YEARS", label: "Python and software delivery" },
      { value: "3 MARKETS", label: "Colombia, Venezuela, and USA" },
      { value: "20+ TOOLS", label: "Active production stack" },
      { value: "AVAILABLE", label: "New projects and consulting" },
    ],
    workTitle: "What I Do",
    workCards: [
      {
        code: "ML_CORE",
        tag: "#PYTHON #ML #OPENAI",
        title: "Machine Learning and Generative AI",
        description:
          "I build predictive systems, OpenAI integrations, local-model workflows with LM Studio, and data automations for real product and business use cases.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=700&q=75",
      },
      {
        code: "VISION_AI",
        tag: "#COMPUTER_VISION #FACE_ID",
        title: "Computer Vision and Facial Recognition",
        description:
          "I create image-processing systems, facial-recognition workflows, and visual intelligence tools for automation and decision support.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&q=75",
      },
      {
        code: "WEB_MOBILE",
        tag: "#DJANGO #NEXTJS #EXPO",
        title: "Backend, Frontend, and Mobile Apps",
        description:
          "I ship APIs, websites, dashboards, and mobile apps with Django, React, Next.js, React Native, and Expo.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=75",
      },
    ],
    marquee: [
      "AVAILABLE FOR NEW PROJECTS",
      "PYTHON AUTOMATION",
      "REACT NATIVE AND EXPO APPS",
      "AI WITH OPENAI, LM STUDIO, AND LANGCHAIN",
      "DEPLOYMENTS ON AWS AND HOSTINGER",
    ],
    stackTitle: "ACTIVE_STACK.EXE",
    terminalRows: [
      "AI: Machine Learning, Generative AI, Computer Vision, OpenAI, LM Studio, LangChain",
      "Backend: Python, Django, Django REST, JWT, PostgreSQL, SQLite",
      "Frontend: React, Next.js, JavaScript, HTML5, CSS3, Redux",
      "Mobile: React Native, Expo",
      "Infrastructure: Docker, Linux, AWS, Hostinger, Postman",
      "Fun fact: I love automating tasks with code",
    ],
    projectsTitle: "Projects By Region",
    projectsIntro:
      "I work with clients and digital products across different markets, adapting the stack, delivery model, and product experience to each context.",
    projectDetailsCta: "Open details",
    testimonialsTitle: "Social Proof",
    testimonialsIntro:
      "Selected client and collaborator feedback on technical execution, delivery speed, and product clarity.",
    testimonials: [
      {
        tag: "#TESTIMONIAL #COLOMBIA",
        quote:
          "Jesus turned a very manual commercial workflow into a clearer and more measurable platform. We moved from chasing information to operating with better structure.",
        name: "Operations Director",
        role: "Digital services",
        country: "Colombia",
        result: "Result: clearer digital processes, less internal rework, and a more stable web operation.",
      },
      {
        tag: "#TESTIMONIAL #VENEZUELA",
        quote:
          "He helped us structure backend systems and integrations without overcomplicating the product. The solution was practical and improved team speed from the first release.",
        name: "Product Lead",
        role: "Internal tools",
        country: "Venezuela",
        result: "Result: more reliable APIs, automation for repetitive tasks, and less dependence on manual processes.",
      },
      {
        tag: "#TESTIMONIAL #USA",
        quote:
          "The mix of product thinking, frontend delivery, and AI felt production-minded rather than demo-oriented. There was technical judgment and fast iteration.",
        name: "Founder",
        role: "AI-first product",
        country: "USA",
        result: "Result: faster iterations, improved user experience, and a stronger base for scale.",
      },
    ],
    contactTitle: "Direct Contact",
    contactLead:
      "If you need a website, an app, an AI integration, or Python automations, contact me directly on WhatsApp, email, X, LinkedIn, or GitHub.",
    footerLead: "SYSTEM READY TO BUILD REAL PRODUCTS.",
    langLabel: "LANG",
  },
} as const

export type SiteLanguage = keyof typeof homeContent
