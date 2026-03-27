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
      es: "Desarrollo de plataformas web, automatizaciones y soluciones de negocio orientadas a crecimiento, operación y presencia digital.",
      en: "Web platforms, automations, and digital business solutions focused on operations, growth, and execution speed.",
    },
    overview: {
      es: "Implementación de productos web, integraciones y automatizaciones para compañías que necesitan mejorar operación, ventas y experiencia digital en mercado local.",
      en: "Delivery of web products, integrations, and automations for companies improving operations, sales, and digital experience in the local market.",
    },
    highlights: {
      es: ["Plataformas web con Next.js y Django", "Automatización operativa con Python", "Integraciones y despliegues cloud"],
      en: ["Web platforms with Next.js and Django", "Operational automation with Python", "Integrations and cloud deployments"],
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
      es: "Implementación de backend, integraciones y herramientas apoyadas en inteligencia artificial para procesos internos y productos digitales.",
      en: "Backend systems, integrations, and AI-supported internal tools for operational workflows and digital products.",
    },
    overview: {
      es: "Construcción de servicios backend, automatizaciones e inteligencia aplicada para optimizar tiempos de respuesta, procesos internos y confiabilidad de producto.",
      en: "Backend services, automations, and applied intelligence built to improve response times, internal workflows, and product reliability.",
    },
    highlights: {
      es: ["APIs y arquitectura backend", "Herramientas internas con AI", "Procesamiento automatizado de información"],
      en: ["APIs and backend architecture", "AI-powered internal tools", "Automated information processing"],
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
      es: "Construcción de productos escalables con despliegues en cloud, aplicaciones AI-first y soluciones full stack orientadas a producción.",
      en: "Scalable cloud-based products, AI-first applications, and production-grade full-stack systems.",
    },
    overview: {
      es: "Desarrollo de productos modernos con foco en performance, experiencia de usuario, integraciones AI y despliegue robusto para entornos de producción.",
      en: "Modern product development focused on performance, user experience, AI integrations, and robust deployment for production environments.",
    },
    highlights: {
      es: ["Aplicaciones full stack listas para escalar", "Integraciones con LangChain y servicios AI", "Deploys y observabilidad en cloud"],
      en: ["Full-stack applications ready to scale", "LangChain and AI service integrations", "Cloud deployments and observability"],
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
      { value: "AI", label: "Machine Learning" },
      { value: "DL", label: "Deep Learning" },
      { value: "CV", label: "Vision Artificial" },
      { value: "24/7", label: "Automatizacion" },
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
      { value: "AI", label: "Machine Learning" },
      { value: "DL", label: "Deep Learning" },
      { value: "CV", label: "Computer Vision" },
      { value: "24/7", label: "Automation" },
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
    contactTitle: "Direct Contact",
    contactLead:
      "If you need a website, an app, an AI integration, or Python automations, contact me directly on WhatsApp, email, X, LinkedIn, or GitHub.",
    footerLead: "SYSTEM READY TO BUILD REAL PRODUCTS.",
    langLabel: "LANG",
  },
} as const

export type SiteLanguage = keyof typeof homeContent
