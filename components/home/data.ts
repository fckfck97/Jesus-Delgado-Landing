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
