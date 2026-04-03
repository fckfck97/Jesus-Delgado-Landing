export const profile = {
  name: "Ing. Jesus Delgado",
  githubUser: "fckfck97",
  xHandle: "@_GodZell",
  linkedin: "https://www.linkedin.com/in/gotzellll",
  xUrl: "https://x.com/_GodZell",
  heroImage: "/img/jesus.jpeg",
  whatsapp: "+573173030718",
  whatsappUrl: "https://wa.me/573173030718",
  email: "themurder261@gmail.com",
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
      es: "Plataforma de ecommerce y comunicacion que combina catalogo, interaccion directa y flujos de venta conversacional dentro del producto.",
      en: "Ecommerce and communication platform combining catalog, direct interaction, and conversational selling flows inside the product.",
    },
    features: {
      es: [
        "Catalogo y paginas de producto",
        "Mensajeria y atencion integrada",
        "Gestion de pedidos",
        "Panel admin y control de vendedores",
        "Estructura lista para automatizacion",
      ],
      en: [
        "Catalog and product pages",
        "Integrated messaging and support",
        "Order management",
        "Admin panel and seller controls",
        "Automation-ready structure",
      ],
    },
    url: "https://tablechat.yesglobals.com/",
    appStoreUrl: "https://apps.apple.com/co/app/tablechat/id6752120813",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ovalcampus.tabletchat",
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
    slug: "refinorte",
    name: "REFINORTE",
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
    name: "COOAGROVIDA",
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

export const regionalProjects = [
  {
    slug: "colombia-digital-platforms",
    country: "Colombia",
    code: "COL_01",
    image: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?w=1200&q=80",
    tag: {
      es: "#COLOMBIA #WEB #AUTOMATION",
      en: "#COLOMBIA #WEB #AUTOMATION",
    },
    title: {
      es: "Proyectos en Colombia",
      en: "Projects in Colombia",
    },
    summary: {
      es: "En Colombia trabajé en plataformas digitales para empresas que necesitaban ordenar procesos comerciales, mejorar su presencia online y reducir la fricción entre operación y ventas. El foco no fue solo construir interfaces atractivas, sino conectar formularios, catálogos, paneles internos y automatizaciones para que el equipo pudiera responder más rápido a clientes, medir resultados y lanzar cambios con menos dependencia operativa. Cada entrega estuvo pensada para soportar crecimiento, campañas comerciales y uso diario en producción.",
      en: "In Colombia I worked on digital platforms for companies that needed to organize commercial operations, improve their online presence, and reduce friction between sales and execution. The goal was not only to ship polished interfaces, but to connect forms, catalogs, internal dashboards, and automations so teams could respond faster, measure results, and release updates with less operational overhead. Each delivery was designed to support growth, campaigns, and daily production usage.",
    },
    overview: {
      es: "Estos proyectos en Colombia se desarrollaron para negocios que necesitaban una base tecnológica más seria para vender, atender clientes y operar con mayor claridad. En varios casos el problema inicial era una mezcla de procesos manuales, herramientas desconectadas y sitios que no comunicaban bien la propuesta de valor. La solución pasó por rediseñar la capa web, ordenar la arquitectura de información y crear flujos que permitieran capturar datos, activar seguimientos y sostener una experiencia más confiable para usuarios y equipos internos.",
      en: "These Colombia-focused projects were built for businesses that needed a more reliable technical foundation for sales, customer handling, and day-to-day operations. In several cases the initial problem was a combination of manual workflows, disconnected tools, and websites that did not communicate the offer clearly. The solution involved rebuilding the web layer, improving information architecture, and creating flows that could capture data, trigger follow-ups, and support a more dependable experience for both users and internal teams.",
    },
    approach: {
      es: "La implementación combinó Next.js en frontend, Django y Python en backend, integraciones con servicios externos y despliegues cloud orientados a estabilidad. Se trabajó en landing pages, módulos administrativos, formularios conectados a automatizaciones y estructuras reutilizables para publicar nuevos contenidos o servicios sin rehacer el sistema. También se optimizaron tiempos de carga, estructura SEO básica, manejo de contenido y trazabilidad del funnel para que la tecnología tuviera impacto comercial y no solo visual.",
      en: "The implementation combined Next.js on the frontend, Django and Python on the backend, external-service integrations, and cloud deployments focused on stability. Work covered landing pages, admin modules, forms connected to automations, and reusable structures to publish new services or content without rebuilding the system. Load times, baseline SEO structure, content handling, and funnel tracking were also improved so the technology delivered commercial impact instead of just a visual refresh.",
    },
    outcomes: {
      es: "El resultado fue una operación digital más ordenada, con sitios más rápidos, flujos de contacto mejor definidos y una base técnica lista para iterar. Los equipos pudieron publicar con más velocidad, capturar leads con menos pérdida de información y sostener campañas con menos trabajo manual. A nivel SEO y producto, estas plataformas quedaron mejor preparadas para indexación, expansión de contenido y crecimiento progresivo del canal digital.",
      en: "The outcome was a more organized digital operation, with faster sites, clearer contact flows, and a technical base ready for iteration. Teams were able to publish faster, capture leads with less information loss, and sustain campaigns with less manual work. From an SEO and product standpoint, these platforms became more prepared for indexation, content expansion, and gradual digital-channel growth.",
    },
    highlights: {
      es: [
        "Arquitecturas web con Next.js y Django preparadas para crecimiento comercial.",
        "Automatizaciones con Python para seguimiento de leads y tareas operativas repetitivas.",
        "Integraciones con herramientas externas para centralizar formularios, datos y atención.",
        "Despliegues cloud con foco en estabilidad, mantenimiento simple y tiempos de respuesta consistentes.",
        "Estructuras reutilizables para lanzar nuevas páginas, servicios y campañas con mayor velocidad.",
      ],
      en: [
        "Web architectures with Next.js and Django prepared for commercial growth.",
        "Python automations for lead follow-up and repetitive operational tasks.",
        "External-tool integrations to centralize forms, data, and customer handling.",
        "Cloud deployments focused on stability, simpler maintenance, and consistent response times.",
        "Reusable structures to launch new pages, services, and campaigns faster.",
      ],
    },
    stackDetail: {
      es: "La base técnica de estos proyectos se construyó con una separación clara entre un frontend rápido e indexable y un backend estructurado capaz de manejar formularios, datos de usuarios y lógica de negocio de forma independiente. En el lado del frontend, Next.js con App Router fue elegido por su capacidad para entregar páginas renderizadas en servidor sin sacrificar interactividad. Esto fue relevante para clientes con objetivos SEO junto a sus necesidades operativas: el contenido necesitaba ser alcanzable por buscadores desde el primer día. Los componentes se organizaron por dominio en lugar de por tipo, manteniendo la lógica de negocio cerca de los elementos UI que la consumen. Se usó generación estática donde los datos eran predecibles y regeneración incremental para mantener páginas actualizadas sin rebuilds completos.\n\nEl backend Django se estructuró como API REST desde el inicio, incluso en proyectos de menor alcance. Esta decisión fue importante cuando los clientes necesitaron añadir una segunda capa de frontend, conectar una app mobile o exponer datos a una integración de terceros en medio del proyecto. Tener el contrato de API definido desde el principio significó que esas extensiones fueron adiciones independientes en lugar de reescrituras arquitectónicas. Django REST Framework gestionó serialización, permisos y validación de entradas con suficiente convención para evitar código repetitivo sin ocultar la lógica. PostgreSQL fue la base de datos principal: la estructura relacional fue crítica en proyectos que rastreaban leads, pedidos o usuarios en múltiples estados. Las migraciones de Django mantuvieron la evolución del esquema trazable y las restricciones a nivel de modelo previnieron problemas de calidad de datos antes de que llegaran a la API.\n\nPara despliegues, el enfoque combinó Vercel para el frontend Next.js y Hostinger o VPS para el backend Django. Esta separación permitió escalar de forma independiente, configurar dominios y simplificar la depuración. Scripts Python manejaron la capa de automatización: envíos de formularios activando secuencias de correo, exportaciones periódicas de datos y actualizaciones de estado fluyendo a través de colas de tareas basadas en Celery donde fue necesario. Esta capa redujo el trabajo manual para equipos de ventas y operaciones sin introducir dependencias SaaS adicionales. Los metadatos SEO se gestionaron a través de la API de Metadata de Next.js con datos estructurados en páginas clave, sitemap generado automáticamente y optimización de imágenes con next/image para controlar formato, tamaño y carga diferida sin infraestructura personalizada.",
      en: "The technical foundation for these Colombia projects was built around a clear division between a fast, indexable frontend and a structured backend capable of managing form submissions, user data, and business logic independently. On the frontend side, Next.js with the App Router was chosen for its ability to deliver server-rendered pages without sacrificing interactivity. This was relevant for clients who had SEO goals alongside their operational needs — content needed to be reachable by search engines from day one, not dependent on client-side rendering. Components were organized by domain rather than by type, keeping business logic close to the UI elements that consumed it. Static generation was used where data was predictable, and incremental regeneration kept pages fresh without full rebuilds.\n\nThe Django backend was structured as a REST API from the start, even in smaller-scope projects. This decision mattered when clients needed to add a second frontend layer, connect a mobile app, or expose data to a third-party integration mid-project. Having the API contract defined early meant those extensions were plug-in additions rather than architectural rewrites. Django REST Framework handled serialization, permissions, and input validation with enough convention to avoid boilerplate without hiding the logic. PostgreSQL was the primary database. Relational structure proved important for projects that tracked leads, orders, or users across multiple states. Django migrations kept schema evolution traceable, and model-level constraints prevented data quality issues before they reached the API layer.\n\nFor deployments, the approach combined Vercel for the Next.js frontend and Hostinger or a VPS for the Django backend. This split allowed independent scaling, domain configuration, and simplified debugging. Python scripts handled the automation layer: form submissions triggering email sequences, periodic data exports, and status updates flowing through lightweight Celery-based task queues where needed. This layer reduced manual effort for sales and operations teams without introducing a new SaaS dependency. On the SEO side, metadata was managed through Next.js Metadata API with structured data on key pages, auto-generated sitemaps, and image optimization via next/image to control format, sizing, and lazy loading without custom infrastructure. The cumulative result was a platform maintainable by a non-technical team for content updates while remaining fully extensible by a developer.",
    },
    featuredProjects: colombiaFeaturedProjects,
  },
  {
    slug: "venezuela-ai-backend-systems",
    country: "Venezuela",
    code: "VEN_01",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    tag: {
      es: "#VENEZUELA #AI #BACKEND",
      en: "#VENEZUELA #AI #BACKEND",
    },
    title: {
      es: "Proyectos en Venezuela",
      en: "Projects in Venezuela",
    },
    summary: {
      es: "En Venezuela los proyectos estuvieron más orientados a backend, automatización de procesos e inteligencia aplicada a operaciones internas. El contexto exigía soluciones confiables, con infraestructura ligera, buen control del dato y capacidad de integrarse con sistemas existentes sin introducir complejidad innecesaria. El trabajo se centró en construir servicios que resolvieran cuellos de botella reales: procesamiento de información, orquestación de tareas, exposición de APIs y herramientas internas que ayudaran a tomar decisiones con más velocidad.",
      en: "In Venezuela the work was more focused on backend systems, process automation, and applied intelligence for internal operations. The context required reliable solutions, lightweight infrastructure, solid data handling, and the ability to integrate with existing systems without adding unnecessary complexity. The work centered on building services that solved real bottlenecks: information processing, task orchestration, API exposure, and internal tools that helped teams make decisions faster.",
    },
    overview: {
      es: "Los casos desarrollados para este mercado partían de una necesidad clara: tener sistemas internos más robustos para soportar operación continua y mejorar la confiabilidad del producto digital. Había procesos manuales que consumían tiempo del equipo, validaciones repetitivas y flujos de datos que dependían demasiado de intervención humana. La prioridad fue convertir esas tareas en servicios backend bien definidos, con reglas explícitas, trazabilidad y componentes que pudieran mantenerse con bajo costo operativo.",
      en: "The projects built for this market started from a clear need: stronger internal systems to support continuous operations and improve product reliability. There were manual processes consuming team time, repetitive validations, and data flows that depended too heavily on human intervention. The priority was to convert those tasks into well-defined backend services with explicit rules, traceability, and components that could be maintained with a low operational cost.",
    },
    approach: {
      es: "La solución técnica se apoyó en Python, Django y APIs diseñadas para interoperar con otras capas del negocio. En paralelo se implementaron automatizaciones para clasificación de datos, procesamiento de entradas, generación de respuestas operativas y herramientas internas con componentes de AI donde aportaban valor real. El enfoque no fue agregar inteligencia artificial por moda, sino aplicarla en puntos concretos: reducción de tiempos, soporte a revisión humana y mejora de consistencia en tareas repetitivas.",
      en: "The technical solution relied on Python, Django, and APIs designed to interoperate with other business layers. In parallel, automations were implemented for data classification, input processing, operational response generation, and internal tools with AI components where they created real value. The goal was not to add AI as a trend, but to apply it to concrete points: reducing cycle time, supporting human review, and improving consistency in repetitive tasks.",
    },
    outcomes: {
      es: "Como resultado, los equipos ganaron sistemas más previsibles y una operación menos dependiente de trabajo manual. Las APIs y herramientas internas facilitaron integración, escalabilidad y control sobre el flujo de información. Además, la arquitectura quedó mejor posicionada para futuras extensiones, como nuevos módulos, más automatización y productos apoyados en AI que pudieran crecer sobre una base backend estable.",
      en: "As a result, teams gained more predictable systems and an operation less dependent on manual work. The APIs and internal tools improved integration, scalability, and control over the information flow. The architecture also became better positioned for future extensions, such as new modules, deeper automation, and AI-supported products that could grow on top of a stable backend foundation.",
    },
    highlights: {
      es: [
        "Servicios backend diseñados para soportar operación interna y productos digitales en producción.",
        "APIs con reglas claras para integraciones, validaciones y exposición consistente de datos.",
        "Automatización de procesamiento de información para reducir carga operativa del equipo.",
        "Herramientas internas con componentes de AI aplicados a clasificación y apoyo de decisión.",
        "Arquitectura preparada para crecer sin rehacer la base del sistema.",
      ],
      en: [
        "Backend services designed to support internal operations and production digital products.",
        "APIs with clear rules for integrations, validations, and consistent data exposure.",
        "Information-processing automation to reduce operational load on the team.",
        "Internal tools with AI components applied to classification and decision support.",
        "Architecture prepared to grow without rebuilding the system foundation.",
      ],
    },
    stackDetail: {
      es: "Los proyectos backend para clientes venezolanos requirieron un conjunto distinto de prioridades: sistemas ligeros de desplegar y operar, confiables bajo condiciones variables y estructurados de modo que un equipo pequeño pudiera mantenerlos sin experiencia profunda en el framework. Python fue la base en todos los proyectos, una elección deliberada que permitió moverse rápidamente desde exploración de datos hasta servicio en producción sin cambiar de herramientas. Pandas y NumPy manejaron el preprocesamiento en desarrollo, y esa misma lógica se empaquetó en vistas Django o scripts independientes según lo que demandara el caso de uso. Cuando una tarea de clasificación era directa, un enfoque basado en reglas con Python estructurado fue más rápido y depurable que un modelo ML completo. Cuando los patrones en los datos no eran obvios, se entrenaron modelos con scikit-learn, se evaluaron y se serializaron con joblib para integración en la capa de API.\n\nEl ORM de Django se usó como capa de acceso a datos principal, con SQL directo reservado para consultas de reportes donde la complejidad de los joins hacía al ORM verboso. El esquema se mantuvo normalizado para datos transaccionales y desnormalizado para vistas de reportes con alta carga de lectura, gestionado a través de vistas a nivel de base de datos en lugar de duplicar modelos. El diseño de API siguió convenciones REST de forma consistente: rutas basadas en recursos, verbos HTTP alineados con la intención y formas de respuesta de error consistentes. Esto permitió que desarrolladores frontend y sistemas de terceros integraran sin negociación por endpoint. La autenticación JWT se añadió a los endpoints que manejaban datos específicos del usuario, con lógica de renovación de token gestionada a nivel de middleware.\n\nPara componentes AI, la estrategia fue aplicada y acotada. Las tareas se identificaron donde la revisión humana era el cuello de botella: clasificación de documentos, extracción de entidades, etiquetado de contenido. LangChain se usó en casos donde las llamadas a modelos de lenguaje necesitaban encadenarse con pasos de recuperación; en casos más simples, llamadas directas a la API de un LLM con un prompt bien estructurado fueron suficientes y más transparentes. Mantener los componentes AI como servicios aislados con contratos claros de entrada/salida los hizo testeables y reemplazables sin afectar el resto del sistema. Docker se usó para todos los despliegues, garantizando paridad de entorno entre desarrollo y producción y simplificando la entrega cuando el equipo de infraestructura del cliente necesitaba gestionar el sistema.",
      en: "The backend projects built for Venezuelan clients required a different set of priorities: systems that were lightweight to deploy and operate, reliable under variable conditions, and structured so a small team could maintain them without deep framework expertise. Python was the foundation across every project — a deliberate choice that allowed moving quickly from data exploration to production service without switching tools. Pandas and NumPy handled preprocessing during development, and that same logic was packaged into Django views or standalone scripts depending on what the use case demanded. When a classification task was straightforward, a rule-based approach with structured Python was faster and more debuggable than a full ML model. When patterns in the data were non-obvious, scikit-learn models were trained, evaluated, and serialized with joblib for integration into the API layer.\n\nDjango's ORM was used as the primary data access layer, with raw SQL reserved for reporting queries where join complexity made the ORM verbose. The schema was kept normalized for transactional data and denormalized for read-heavy reporting views, handled through database-level views rather than duplicating models. API design followed REST conventions consistently: resource-based routes, HTTP verbs aligned with intent, and consistent error response shapes. This allowed frontend developers and third-party systems to integrate without per-endpoint negotiation. JWT authentication was added to endpoints handling user-specific data, with token refresh logic managed at the middleware level.\n\nFor AI components, the strategy was applied and bounded — not exploratory. Tasks were identified where human review was the bottleneck: document classification, entity extraction, content tagging. LangChain was used in cases where language model calls needed chaining with retrieval steps; in simpler cases, direct API calls to an LLM with a well-structured prompt were sufficient and more transparent. Keeping AI components as isolated services with clear input/output contracts made them testable and replaceable without affecting the rest of the system. Docker was used for all deployments to ensure environment parity between development and production and to simplify handoff when the client's infrastructure team needed to manage the system. Structured log lines to standard output made it possible to query patterns without parsing unstructured text, keeping observability lightweight and dependency-free.",
    },
  },
  {
    slug: "usa-cloud-ai-products",
    country: "USA",
    code: "USA_01",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
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
      "Construyo productos de software y automatizaciones con foco en aprendizaje automático, aprendizaje profundo, visión artificial, apps AI-first y desarrollo web moderno.",
    heroSecondary:
      "Trabajo con Python, Django, React, Next.js, React Native, Expo, LangChain, AWS y despliegues listos para producción.",
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
        tag: "#PYTHON #ML #DL",
        title: "Machine Learning y Deep Learning",
        description:
          "Desarrollo soluciones con modelos predictivos, entrenamiento de redes neuronales y automatización de flujos con datos reales.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
      },
      {
        code: "VISION_AI",
        tag: "#COMPUTER_VISION #FACE_ID",
        title: "Vision Artificial y Reconocimiento Facial",
        description:
          "Construyo sistemas de analisis visual, reconocimiento facial y procesamiento de imagen para automatizar tareas y extraer informacion util.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
      },
      {
        code: "WEB_MOBILE",
        tag: "#DJANGO #NEXTJS #EXPO",
        title: "Backend, Frontend y Apps Mobile",
        description:
          "Implemento APIs, webs, paneles y apps con Django, React, Next.js, React Native y Expo, listas para despliegue en cloud.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
      },
    ],
    marquee: [
      "DISPONIBLE PARA NUEVOS PROYECTOS",
      "AUTOMATIZACION CON PYTHON",
      "APPS CON REACT NATIVE Y EXPO",
      "IA CON LANGCHAIN",
      "DEPLOYS EN AWS Y HOSTINGER",
    ],
    stackTitle: "STACK_ACTIVO.EXE",
    terminalRows: [
      "Especialidades: Machine Learning, Deep Learning, Vision Artificial, Redes Neuronales",
      "Backend: Python, Django, Django REST, JWT, PostgreSQL, SQLite",
      "Frontend: React, Next.js, JavaScript, HTML5, CSS3, Redux",
      "Mobile y AI Apps: React Native, Expo, LangChain",
      "Infraestructura: Docker, Linux, AWS, Hostinger, Postman",
      "Dato curioso: me encanta automatizar tareas con programacion",
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
        result: "Resultado: mejor seguimiento de leads, menos retrabajo interno y una operación web más estable.",
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
      "I build software products and automations focused on machine learning, deep learning, computer vision, AI-first apps, and modern web development.",
    heroSecondary:
      "My stack includes Python, Django, React, Next.js, React Native, Expo, LangChain, AWS, and production-ready deployments.",
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
        tag: "#PYTHON #ML #DL",
        title: "Machine Learning and Deep Learning",
        description:
          "I build predictive systems, neural-network pipelines, and automated data workflows aimed at real product and business use cases.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
      },
      {
        code: "VISION_AI",
        tag: "#COMPUTER_VISION #FACE_ID",
        title: "Computer Vision and Facial Recognition",
        description:
          "I create image-processing systems, facial-recognition workflows, and visual intelligence tools for automation and decision support.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
      },
      {
        code: "WEB_MOBILE",
        tag: "#DJANGO #NEXTJS #EXPO",
        title: "Backend, Frontend, and Mobile Apps",
        description:
          "I ship APIs, websites, dashboards, and mobile apps with Django, React, Next.js, React Native, and Expo.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
      },
    ],
    marquee: [
      "AVAILABLE FOR NEW PROJECTS",
      "PYTHON AUTOMATION",
      "REACT NATIVE AND EXPO APPS",
      "AI APPS WITH LANGCHAIN",
      "DEPLOYMENTS ON AWS AND HOSTINGER",
    ],
    stackTitle: "ACTIVE_STACK.EXE",
    terminalRows: [
      "Specialties: Machine Learning, Deep Learning, Computer Vision, Neural Networks",
      "Backend: Python, Django, Django REST, JWT, PostgreSQL, SQLite",
      "Frontend: React, Next.js, JavaScript, HTML5, CSS3, Redux",
      "Mobile and AI Apps: React Native, Expo, LangChain",
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
        result: "Result: better lead tracking, less internal rework, and a more stable web operation.",
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
