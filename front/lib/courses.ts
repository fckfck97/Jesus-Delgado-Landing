export type Course = {
  slug: string
  title: string
  provider: string
  pdf?: string
  accomplishment?: {
    completedBy: string
    completionDate: string
    topics: readonly string[]
    sourceUrl: string
  }
}

export const courses: readonly Course[] = [
  { slug: "otros-jesus-delgado-certificado-stacks-bootcamp", title: "Jesus Delgado   Certificado Stacks Bootcamp", provider: "Otros", pdf: "/cursos/otros/Jesus Delgado - certificado stacks bootcamp.pdf" },
  { slug: "platzi-diploma-admin-basica-servidores-linux", title: "Admin Basica Servidores Linux", provider: "Platzi", pdf: "/cursos/platzi/diploma-admin-basica-servidores-linux.pdf" },
  { slug: "platzi-diploma-beginner-core", title: "Beginner Core", provider: "Platzi", pdf: "/cursos/platzi/diploma-beginner-core.pdf" },
  { slug: "platzi-diploma-desarrollo-backend-con-python", title: "Desarrollo Backend Con Python", provider: "Platzi", pdf: "/cursos/platzi/diploma-desarrollo-backend-con-python.pdf" },
  { slug: "platzi-diploma-desarrollo-frontend-react-js", title: "Desarrollo Frontend React Js", provider: "Platzi", pdf: "/cursos/platzi/diploma-desarrollo-frontend-react-js.pdf" },
  { slug: "platzi-diploma-desarrollo-multiplataforma-con-react-native", title: "Desarrollo Multiplataforma Con React Native", provider: "Platzi", pdf: "/cursos/platzi/diploma-desarrollo-multiplataforma-con-react-native.pdf" },
  { slug: "platzi-diploma-django-rest-framework", title: "Django Rest Framework", provider: "Platzi", pdf: "/cursos/platzi/diploma-django-rest-framework.pdf" },
  { slug: "platzi-diploma-django", title: "Django", provider: "Platzi", pdf: "/cursos/platzi/diploma-django.pdf" },
  { slug: "platzi-diploma-interledger-openpayments", title: "Interledger Openpayments", provider: "Platzi", pdf: "/cursos/platzi/diploma-interledger-openpayments.pdf" },
  { slug: "platzi-diploma-langchain-chatbots", title: "Langchain Chatbots", provider: "Platzi", pdf: "/cursos/platzi/diploma-langchain-chatbots.pdf" },
  { slug: "platzi-diploma-langchain-documents", title: "Langchain Documents", provider: "Platzi", pdf: "/cursos/platzi/diploma-langchain-documents.pdf" },
  { slug: "platzi-diploma-linux", title: "Linux", provider: "Platzi", pdf: "/cursos/platzi/diploma-linux.pdf" },
  { slug: "platzi-diploma-python", title: "Python", provider: "Platzi", pdf: "/cursos/platzi/diploma-python.pdf" },
  { slug: "platzi-diploma-react-avanzado", title: "React Avanzado", provider: "Platzi", pdf: "/cursos/platzi/diploma-react-avanzado.pdf" },
  { slug: "platzi-diploma-react-redux-profesional", title: "React Redux Profesional", provider: "Platzi", pdf: "/cursos/platzi/diploma-react-redux-profesional.pdf" },
  { slug: "platzi-diploma-servidores-linux", title: "Servidores Linux", provider: "Platzi", pdf: "/cursos/platzi/diploma-servidores-linux.pdf" },
  { slug: "platzi-diploma-vibecoder", title: "Vibecoder", provider: "Platzi", pdf: "/cursos/platzi/diploma-vibecoder.pdf" },
  { slug: "platzi-diploma-web-python", title: "Web Python", provider: "Platzi", pdf: "/cursos/platzi/diploma-web-python.pdf" },
  { slug: "platzi-diploma-whatsapp-api", title: "Whatsapp Api", provider: "Platzi", pdf: "/cursos/platzi/diploma-whatsapp-api.pdf" },
  {
    slug: "deeplearning-ai-langchain-for-llm-application-development",
    title: "LangChain for LLM Application Development",
    provider: "DeepLearning.AI",
    accomplishment: {
      completedBy: "Jesus Delgado",
      completionDate: "29 de diciembre de 2023",
      topics: ["AI Frameworks", "Agents", "Chatbots", "Generative Models", "Prompt Engineering", "RAG"],
      sourceUrl: "https://www.deeplearning.ai/accomplishments/6a7ded38-68b4-4e77-ba0d-dc32d3709b41",
    },
  },
  {
    slug: "deeplearning-ai-langchain-chat-with-your-data",
    title: "LangChain Chat with Your Data",
    provider: "DeepLearning.AI",
    accomplishment: {
      completedBy: "Jesus Delgado",
      completionDate: "30 de enero de 2024",
      topics: ["Computer Vision", "Document Processing", "Embeddings", "RAG", "Vector Databases"],
      sourceUrl: "https://www.deeplearning.ai/accomplishments/1a6a5bf5-43e0-4c49-9e34-b986f3054d4d",
    },
  },
  {
    slug: "deeplearning-ai-functions-tools-and-agents-with-langchain",
    title: "Functions, Tools and Agents with LangChain",
    provider: "DeepLearning.AI",
    accomplishment: {
      completedBy: "Jesus Delgado",
      completionDate: "15 de mayo de 2024",
      topics: ["AI Frameworks", "Agents", "Chatbots", "Generative Models", "Prompt Engineering", "RAG"],
      sourceUrl: "https://www.deeplearning.ai/accomplishments/7638d97a-eb1b-4e70-8125-26acfa5a0dce",
    },
  },
  { slug: "udemy-building-web-applications-with-django-and-postgresql", title: "Building Web Applications With Django And PostgreSQL", provider: "Udemy", pdf: "/cursos/udemy/Building Web Applications with Django and PostgreSQL.pdf" },
  { slug: "udemy-ethical-hacking-offensive-security", title: "Ethical Hacking Offensive Security", provider: "Udemy", pdf: "/cursos/udemy/Ethical Hacking Offensive Security.pdf" },
  { slug: "udemy-ethical-hacking-password-cracking", title: "Ethical Hacking Password Cracking", provider: "Udemy", pdf: "/cursos/udemy/Ethical Hacking Password Cracking.pdf" },
  { slug: "udemy-learn-python-programming-by-building-a-facebook-chatbot-app", title: "Learn Python Programming By Building A Facebook ChatBot App", provider: "Udemy", pdf: "/cursos/udemy/Learn Python Programming by Building a Facebook ChatBot App.pdf" },
  { slug: "udemy-montaje-de-servidores-en-linux-desde-cero", title: "Montaje De Servidores En Linux Desde Cero", provider: "Udemy", pdf: "/cursos/udemy/Montaje de servidores en linux desde cero.pdf" },
  { slug: "udemy-nginx-web-server-from-scratch", title: "NGINX Web Server From Scratch", provider: "Udemy", pdf: "/cursos/udemy/NGINX Web Server from Scratch.pdf" },
  { slug: "udemy-python-and-django-framework-and-html-5-stack-complete-course", title: "Python And Django Framework And HTML 5 Stack Complete Course", provider: "Udemy", pdf: "/cursos/udemy/Python And Django Framework And HTML 5 Stack Complete Course.pdf" },
  { slug: "udemy-python-para-no-matematicos-de-0-hasta-reconocimiento-facial", title: "Python Para No Matematicos De 0 Hasta Reconocimiento Facial", provider: "Udemy", pdf: "/cursos/udemy/Python para no matematicos De 0 hasta reconocimiento facial.pdf" },
  { slug: "udemy-python-programming-learn-python-by-build-a-xtwitter-chatbot", title: "Python Programming Learn Python By Build A XTwitter Chatbot", provider: "Udemy", pdf: "/cursos/udemy/Python Programming Learn Python by Build a XTwitter Chatbot.pdf" },
  { slug: "udemy-python-y-web-scraping-con-selenium-desde-cero", title: "Python Y Web Scraping Con Selenium Desde Cero", provider: "Udemy", pdf: "/cursos/udemy/Python y Web Scraping con Selenium desde Cero.pdf" },
  { slug: "udemy-the-complete-restful-apis-with-python-course", title: "The Complete RESTful APIs With Python Course", provider: "Udemy", pdf: "/cursos/udemy/The Complete RESTful APIs with Python Course.pdf" },
  { slug: "udemy-virtual-assistant-with-python-and-chatgpt", title: "Virtual Assistant With Python And ChatGPT", provider: "Udemy", pdf: "/cursos/udemy/Virtual Assistant with Python and ChatGPT.pdf" },
] as const
