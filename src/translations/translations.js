export const translations = {
  es: {
    // Navbar
    navHome: "Inicio",
    navAbout: "Sobre Nosotros",
    navTech: "Tecnología",
    navTeam: "Equipo",

    // Hero
    heroTitle: "RehabilitIA: Terapia de Lenguaje Asistida por IA",
    heroSubtitle: "Plataforma web y móvil para la rehabilitación personalizada de la afasia en pacientes hispanohablantes, combinando modelos de lenguaje avanzados y flujos agentivos para generar ejercicios adaptativos, culturalmente apropiados y basados en evidencia.",
    heroCtaPrimary: "Conocer el proyecto",
    heroCtaSecondary: "Probar la app",
    navResults: "Resultados",

    // Aphasia Section
    aphasiaTitle: "¿Qué es la afasia?",
    aphasiaText: "La afasia es un trastorno adquirido del lenguaje causado por daño cerebral, generalmente después de un accidente cerebrovascular. Afecta la capacidad para hablar, comprender, leer y escribir, sin que necesariamente se alteren la memoria u otras funciones cognitivas.",
    aphasiaStats: [
      { value: "25–40%", label: "de los sobrevivientes de un ACV desarrollan afasia" },
      { value: "16.946", label: "muertes por ACV en Colombia en 2023" },
      { value: "1°", label: "sistema en español que combina agentes de IA y terapias basadas en evidencia" },
    ],

    // Therapies
    therapiesTitle: "Terapias Basadas en Evidencia",
    therapiesSubtitle: "Implementamos terapias validadas científicamente y adaptadas para hispanohablantes",
    vnestTitle: "VNeST",
    vnestSubtitle: "Verb Network Strengthening Treatment",
    vnestDescription: "Terapia de rehabilitación del lenguaje diseñada para personas con afasia que coloca los verbos en el centro de la terapia, fortaleciendo las conexiones entre verbos y sus roles temáticos (agentes, objetos y adjuntos).",
    vnestLearnMore: "Conocer más",
    srTitle: "Spaced Retrieval (SR)",
    srSubtitle: "Entrenamiento de Recuperación Espaciada",
    srDescription: "Intervención basada en memoria diseñada para mejorar la retención a largo plazo de información específica, pidiendo repetidamente a los pacientes que recuerden información objetivo en intervalos progresivamente más largos.",
    srLearnMore: "Conocer más",

    // Technology
    techTitle: "Tecnología Innovadora y Centrada en el Humano",
    techSubtitle: "Combinamos inteligencia artificial de vanguardia con un enfoque amable y de apoyo para crear tecnología que realmente comprende y se adapta a tus necesidades.",
    techSectionTitle: "Tecnologías de IA",
    llmTitle: "Modelos de Lenguaje Grande",
    llmDescription: "Generan contenido terapéutico adaptado al perfil del paciente",
    agentsTitle: "Agentes Inteligentes",
    agentsDescription: "Estructuran ejercicios y validan coherencia clínica",
    autoGenTitle: "Generación Automática",
    autoGenDescription: "Material dinámico que evoluciona según el progreso",
    techLearnMore: "Conocer más sobre las tecnologías",

    // Modals
    closeModal: "Cerrar",

    // VNeST Modal
    vnestModalTitle: "VNeST - Verb Network Strengthening Treatment",
    vnestModalContent: "<h3>¿Qué es VNeST?</h3><p>Verb Network Strengthening Treatment (VNeST) es un enfoque de rehabilitación del lenguaje diseñado para personas con afasia, particularmente aquellas con variantes anómicas o no fluentes. A diferencia de las intervenciones tradicionales centradas en sustantivos, VNeST coloca los verbos en el centro de la terapia, bajo el supuesto de que los verbos activan redes semánticas más amplias y son esenciales para la construcción de oraciones.</p><h3>¿Cómo funciona?</h3><p>La terapia se desarrolla típicamente a través de fases estructuradas:</p><ul><li><strong>Fase 1:</strong> Los pacientes seleccionan un verbo central y generan combinaciones agente-objeto (ej: \"el piloto conduce el avión\" o \"el granjero conduce el tractor\")</li><li><strong>Fase 2:</strong> Se expanden estas oraciones agregando detalles contextuales como dónde, por qué o cuándo (ej: \"el piloto conduce el avión en el aeropuerto todos los días\")</li><li><strong>Fase 3:</strong> Los pacientes son desafiados con juicios de plausibilidad semántica, decidiendo si las oraciones generadas son significativas o no</li><li><strong>Fase 4:</strong> Se refuerza la recuperación de verbos pidiendo explícitamente al paciente que identifique el verbo objetivo practicado durante la sesión</li></ul><h3>Beneficios</h3><ul><li>Mejora tanto la producción como la comprensión del lenguaje</li><li>Las mejoras se extienden más allá de los elementos entrenados al habla espontánea</li><li>Fortalece las conexiones entre verbos y roles temáticos</li><li>Promueve comunicación más funcional y generalizable</li><li>Puede implementarse mediante herramientas tecnológicas (web/móvil) para práctica en casa</li></ul>",

    // SR Modal
    srModalTitle: "Spaced Retrieval Training - Entrenamiento de Recuperación Espaciada",
    srModalContent: "<h3>¿Qué es Spaced Retrieval Training?</h3><p>Spaced Retrieval Training (SRT) es una intervención basada en memoria diseñada para mejorar la retención a largo plazo de información específica en personas con deterioro cognitivo o afasia. A diferencia de las terapias centradas en la comprensión o producción del lenguaje, SRT aprovecha el aprendizaje implícito al pedir repetidamente a los pacientes que recuerden información objetivo en intervalos progresivamente más largos.</p><h3>¿Cómo funciona?</h3><p>La técnica funciona de la siguiente manera:</p><ul><li>Se presenta información al paciente</li><li>Se le pide que la recuerde después de intervalos específicos (ej: 30 segundos, 1 minuto, 2 minutos)</li><li>Si la respuesta es correcta, el intervalo aumenta</li><li>Si es incorrecta, la información se reintroduce y el intervalo se acorta</li></ul><h3>Aplicaciones</h3><p>Esta técnica es particularmente efectiva para ayudar a los pacientes a recordar:</p><ul><li>Nombres de personas importantes</li><li>Instrucciones y rutinas diarias</li><li>Ubicaciones y lugares</li><li>Estrategias de comunicación</li></ul><h3>Beneficios</h3><ul><li>Mejora la memoria funcional a largo plazo</li><li>Ha demostrado éxito en entornos clínicos</li><li>Puede implementarse en herramientas digitales</li><li>Aprovecha el aprendizaje implícito</li></ul>",

    // Tech Modal
    techModalTitle: "Tecnologías de IA para Rehabilitación",
    techModalContent: "<h3>Modelos de Lenguaje Grande (LLM)</h3><p>Utilizamos modelos de lenguaje avanzados para generar contenido terapéutico personalizado que se adapta al nivel y necesidades de cada paciente. Estos modelos son capaces de crear ejercicios contextualmente apropiados y culturalmente relevantes para hispanohablantes.</p><h3>Agentes Inteligentes</h3><p>Nuestros agentes de IA trabajan en conjunto para:</p><ul><li>Estructurar ejercicios terapéuticos coherentes y clínicamente válidos</li><li>Validar la coherencia clínica del contenido generado</li><li>Adaptar la dificultad según el desempeño del paciente</li><li>Personalizar el contenido culturalmente para el contexto hispanohablante</li><li>Mantener la continuidad terapéutica entre sesiones</li></ul><h3>Generación Automática de Contenido</h3><p>El sistema genera automáticamente:</p><ul><li>Ejercicios adaptados al progreso individual del paciente</li><li>Material culturalmente apropiado y contextualizado</li><li>Contenido variado para mantener la motivación y el compromiso</li><li>Retroalimentación personalizada basada en el desempeño</li><li>Secuencias de ejercicios que siguen principios terapéuticos establecidos</li></ul><h3>Integración de Tecnologías</h3><p>Estas tres tecnologías trabajan en conjunto para crear una experiencia terapéutica completa, adaptativa y basada en evidencia científica, facilitando tanto la práctica autónoma como el seguimiento por parte de terapeutas profesionales.</p>",

    // Mobile App
    mobileTitle: "Aplicación Móvil para Pacientes",
    mobileText: "La aplicación móvil de RehabilitIA está diseñada específicamente para personas con afasia: navegación simple, pocas opciones por pantalla, botones amplios, instrucciones claras y soporte visual–auditivo. Cada ejercicio se adapta automáticamente al desempeño del paciente, siguiendo VNeST y Spaced Retrieval.",
    mobileButton: "Probar App Móvil Aquí",

    // Web Platform
    webTitle: "Plataforma Web para Terapeutas",
    webText: "La plataforma web ofrece a los terapeutas un panel claro y completo para revisar el progreso de cada paciente, analizar su desempeño, ajustar ejercicios generados por IA y gestionar solicitudes de registro profesional. Permite integrar criterio clínico con herramientas inteligentes para una rehabilitación más precisa y personalizada.",
    webButton: "Probar Plataforma Web Aquí",

    // Results
    resultsTitle: "Resultados de la Validación",
    resultsSubtitle: "Evaluación estructurada con profesionales de la salud certificados (fonoaudiología, neuropsicología y neurología).",
    resultsNote: "Evaluación preliminar con 6 profesionales certificados · resultados publicados en el paper del proyecto.",
    resultsHint: "Clic para más detalle",
    resultsMetrics: [
      {
        value: "5.71/7",
        label: "Usabilidad de la app móvil",
        detail: "Promedio en una encuesta de usabilidad respondida por 6 profesionales de la salud, sobre una escala de 1 a 7. Todos los ítems quedaron por encima del punto medio, indicando una percepción consistentemente positiva en facilidad de uso, utilidad percibida y satisfacción general con la aplicación móvil del paciente."
      },
      {
        value: "5.00/5",
        label: "Potencial de integración clínica",
        detail: "Acuerdo unánime (máximo posible, 5 de 5): todos los evaluadores coincidieron en que, bajo supervisión profesional, el sistema podría integrarse en la práctica clínica real y aumentar la intensidad terapéutica entre sesiones."
      },
      {
        value: "4.50/5",
        label: "Coherencia clínica de VNeST",
        detail: "Las combinaciones sujeto–verbo–objeto generadas por la IA fueron calificadas como lingüísticamente coherentes y la progresión de ejercicios como clínicamente consistente. Respalda la eficacia del enfoque de generación estructurada por agentes para la terapia VNeST."
      },
      {
        value: "4.75/5",
        label: "Confianza como complemento supervisado",
        detail: "Nivel de confianza de los profesionales en el sistema como complemento —no reemplazo— del criterio clínico, siempre bajo supervisión humana. Refuerza el diseño con terapeuta en el circuito (human-in-the-loop)."
      },
    ],

    // Timeline
    timelineTitle: "Línea de Tiempo del Proyecto",
    timelineSubtitle: "RehabilitIA inicia en 2025 como el primer sistema en español que combina agentes de IA y terapias basadas en evidencia para la rehabilitación del lenguaje.",
    timelineStatusDone: "Completado",
    timelineStatusProgress: "En curso",
    timelineStatusNext: "Próximo",
    timelinePhases: [
      {
        year: "2025",
        title: "Diseño y desarrollo",
        status: "done",
        items: [
          "Formulación del problema y revisión de literatura.",
          "Diseño de la arquitectura del sistema.",
          "Integración de agentes de IA y modelos de lenguaje (GPT-4.1 + LangGraph).",
          "Desarrollo de la app móvil (Flutter) y la plataforma web (React)."
        ]
      },
      {
        year: "2025 · S2",
        title: "Validación con expertos",
        status: "done",
        items: [
          "Evaluación con 6 profesionales certificados (fonoaudiología, neuropsicología, neurología).",
          "Usabilidad de la app móvil: 5.71/7.",
          "Potencial de integración clínica: 5.00/5 (unánime).",
          "Coherencia clínica de VNeST: 4.50/5."
        ]
      },
      {
        year: "2026",
        title: "Piloto y publicación",
        status: "progress",
        items: [
          "Pruebas con pacientes reales con afasia.",
          "Publicación académica de resultados.",
          "Extensión del sistema a nuevas terapias."
        ]
      },
      {
        year: "Futuro",
        title: "Despliegue a escala",
        status: "next",
        items: [
          "Interacción multimodal (texto a voz y reconocimiento de voz).",
          "Mejora de la calibración de dificultad.",
          "Validación ética, de privacidad y seguridad para despliegue.",
          "Despliegue a mayor escala."
        ]
      }
    ],

    // Team
    teamTitle: "Nuestro Equipo – Investigadores",
    // teamSubtitle: "RehabilitIA es desarrollado por un equipo interdisciplinario de la Universidad de los Andes, integrando ingeniería, diseño centrado en el usuario e investigación en tecnologías para la salud.",
    teamRubenName: "Prof. Rubén Manrique",
    teamRubenRole: "Lead Researcher",
    teamAndreaHName: "Prof. Andrea Herrera",
    teamAndreaHRole: "Lead Researcher",
    teamAndreaHAffiliation: "Universidad de los Andes",
    teamAndreaGName: "Andrea Galindo",
    teamAndreaGRole: "Researcher",
    teamSantiagoName: "Santiago Navarrete",
    teamSantiagoRole: "Researcher",

    // Footer
    footerTagline: "Terapia de lenguaje para la afasia, personalizada con IA y basada en evidencia.",
    footerNavTitle: "Navegación",
    footerResourcesTitle: "Recursos",
    footerLegalTitle: "Universidad",
    footerAppLink: "App móvil",
    footerWebLink: "Plataforma web",
    footerRights: "Todos los derechos reservados.",
    footerUniversity: "Universidad de los Andes | Vigilada Mineducación",
    footerRecognition: "Reconocimiento como Universidad: Decreto 1297 del 30 de mayo de 1964.",
    footerLegalEntity: "Reconocimiento personería jurídica: Resolución 28 del 23 de febrero de 1949 — Minjusticia.",
    footerAddress: "Edificio Mario Laserna — Cra 1 Este No. 19A-40 Bogotá (Colombia) | Tel: (571) 3394949 Ext: 2860, 2861, 2862 | Fax: (571) 3324325",
    footerDepartment: "© 2025 — Departamento de Ingeniería de Sistemas y Computación",
  },
  en: {
    // Navbar
    navHome: "Home",
    navAbout: "About Us",
    navTech: "Technology",
    navTeam: "Team",

    // Hero
    heroTitle: "RehabilitIA: AI-Assisted Language Therapy",
    heroSubtitle: "Web and mobile platform for personalized aphasia rehabilitation in Spanish-speaking patients, combining advanced language models and agentic flows to generate adaptive, culturally appropriate, and evidence-based exercises.",
    heroCtaPrimary: "Explore the project",
    heroCtaSecondary: "Try the app",
    navResults: "Results",

    // Aphasia Section
    aphasiaTitle: "What is Aphasia?",
    aphasiaText: "Aphasia is an acquired language disorder caused by brain damage, usually after a stroke. It affects the ability to speak, understand, read, and write, without necessarily altering memory or other cognitive functions.",
    aphasiaStats: [
      { value: "25–40%", label: "of stroke survivors develop aphasia" },
      { value: "16,946", label: "stroke deaths in Colombia in 2023" },
      { value: "1st", label: "Spanish-language system combining AI agents and evidence-based therapies" },
    ],

    // Therapies
    therapiesTitle: "Evidence-Based Therapies",
    therapiesSubtitle: "We implement scientifically validated therapies adapted for Spanish speakers",
    vnestTitle: "VNeST",
    vnestSubtitle: "Verb Network Strengthening Treatment",
    vnestDescription: "Language rehabilitation approach designed for individuals with aphasia that places verbs at the center of therapy, strengthening connections between verbs and their thematic roles (agents, objects, and adjuncts).",
    vnestLearnMore: "Learn more",
    srTitle: "Spaced Retrieval (SR)",
    srSubtitle: "Spaced Retrieval Training",
    srDescription: "Memory-based intervention designed to enhance long-term retention of specific information by repeatedly asking patients to recall targeted information over progressively longer intervals.",
    srLearnMore: "Learn more",

    // Technology
    techTitle: "Innovative, Human-Centered Technology",
    techSubtitle: "We blend cutting-edge artificial intelligence with a gentle, supportive approach to create technology that truly understands and adapts to your needs.",
    techSectionTitle: "AI Technologies",
    llmTitle: "Large Language Models",
    llmDescription: "Generate therapeutic content adapted to patient profile",
    agentsTitle: "Intelligent Agents",
    agentsDescription: "Structure exercises and validate clinical coherence",
    autoGenTitle: "Automatic Generation",
    autoGenDescription: "Dynamic material that evolves with progress",
    techLearnMore: "Learn more about technologies",

    // Modals
    closeModal: "Close",

    // VNeST Modal
    vnestModalTitle: "VNeST - Verb Network Strengthening Treatment",
    vnestModalContent: "<h3>What is VNeST?</h3><p>Verb Network Strengthening Treatment (VNeST) is a language rehabilitation approach designed for individuals with aphasia, particularly those with anomic or non-fluent variants. Unlike traditional noun-focused interventions, VNeST places verbs at the center of therapy, under the assumption that verbs activate wider semantic networks and are essential for sentence construction.</p><h3>How does it work?</h3><p>The therapy typically unfolds through structured phases:</p><ul><li><strong>Phase 1:</strong> Patients select a central verb and generate agent-object combinations (e.g., \"the pilot drives the plane\" or \"the farmer drives the tractor\")</li><li><strong>Phase 2:</strong> These sentences are expanded by adding contextual details such as where, why, or when (e.g., \"the pilot drives the plane at the airport every day\")</li><li><strong>Phase 3:</strong> Patients are challenged with judgments of semantic plausibility, deciding whether newly generated sentences are meaningful or not</li><li><strong>Phase 4:</strong> Verb retrieval is reinforced by explicitly asking the patient to identify the target verb practiced during the session</li></ul><h3>Benefits</h3><ul><li>Demonstrates positive effects on both production and comprehension of language</li><li>Improvements extend beyond trained items into spontaneous speech</li><li>Strengthens connections between verbs and thematic roles</li><li>Promotes more functional and generalizable communication</li><li>Can be implemented through technological tools (web/mobile) for home practice</li></ul>",

    // SR Modal
    srModalTitle: "Spaced Retrieval Training",
    srModalContent: "<h3>What is Spaced Retrieval Training?</h3><p>Spaced Retrieval Training (SRT) is a memory-based intervention designed to enhance long-term retention of specific information in individuals with cognitive impairment or aphasia. Unlike therapies focused on language comprehension or production, SRT leverages implicit learning by repeatedly asking patients to recall targeted information over progressively longer intervals.</p><h3>How does it work?</h3><p>The technique works as follows:</p><ul><li>Information is presented to the patient</li><li>They are asked to recall it after specific intervals (e.g., 30 seconds, 1 minute, 2 minutes)</li><li>If the response is correct, the interval increases</li><li>If incorrect, the information is reintroduced and the interval is shortened</li></ul><h3>Applications</h3><p>This technique is particularly effective in helping patients remember:</p><ul><li>Names of important people</li><li>Instructions and daily routines</li><li>Locations and places</li><li>Communication strategies</li></ul><h3>Benefits</h3><ul><li>Improves long-term functional memory</li><li>Has shown success in clinical settings</li><li>Can be implemented in digital tools</li><li>Leverages implicit learning</li></ul>",

    // Tech Modal
    techModalTitle: "AI Technologies for Rehabilitation",
    techModalContent: "<h3>Large Language Models (LLM)</h3><p>We use advanced language models to generate personalized therapeutic content that adapts to each patient's level and needs. These models are capable of creating contextually appropriate and culturally relevant exercises for Spanish speakers.</p><h3>Intelligent Agents</h3><p>Our AI agents work together to:</p><ul><li>Structure coherent and clinically valid therapeutic exercises</li><li>Validate the clinical coherence of generated content</li><li>Adapt difficulty based on patient performance</li><li>Culturally personalize content for the Spanish-speaking context</li><li>Maintain therapeutic continuity between sessions</li></ul><h3>Automatic Content Generation</h3><p>The system automatically generates:</p><ul><li>Exercises adapted to individual patient progress</li><li>Culturally appropriate and contextualized material</li><li>Varied content to maintain motivation and engagement</li><li>Personalized feedback based on performance</li><li>Exercise sequences that follow established therapeutic principles</li></ul><h3>Technology Integration</h3><p>These three technologies work together to create a complete, adaptive, and scientifically evidence-based therapeutic experience, facilitating both autonomous practice and monitoring by professional therapists.</p>",

    // Mobile App
    mobileTitle: "Mobile App for Patients",
    mobileText: "RehabilitIA's mobile app is specifically designed for people with aphasia: simple navigation, few options per screen, large buttons, clear instructions, and visual-auditory support. Each exercise automatically adapts to patient performance, following VNeST and Spaced Retrieval protocols.",
    mobileButton: "Try Mobile App Here",

    // Web Platform
    webTitle: "Web Platform for Therapists",
    webText: "The web platform provides therapists with a clear and comprehensive dashboard to review each patient's progress, analyze their performance, adjust AI-generated exercises, and manage professional registration requests. It allows integrating clinical judgment with intelligent tools for more precise and personalized rehabilitation.",
    webButton: "Try Web Platform Here",

    // Results
    resultsTitle: "Validation Results",
    resultsSubtitle: "Structured evaluation with certified healthcare professionals (speech-language pathology, neuropsychology, and neurology).",
    resultsNote: "Preliminary evaluation with 6 certified professionals · results published in the project paper.",
    resultsHint: "Click for more detail",
    resultsMetrics: [
      {
        value: "5.71/7",
        label: "Mobile app usability",
        detail: "Average score on a usability survey completed by 6 healthcare professionals, on a 1–7 scale. All items scored above the midpoint, indicating consistently positive perceptions of ease of use, perceived usefulness, and overall satisfaction with the patient mobile app."
      },
      {
        value: "5.00/5",
        label: "Clinical integration potential",
        detail: "Unanimous agreement (maximum possible, 5 of 5): all evaluators agreed that, under professional supervision, the system could be integrated into real clinical practice and increase therapeutic intensity between sessions."
      },
      {
        value: "4.50/5",
        label: "VNeST clinical coherence",
        detail: "AI-generated subject–verb–object combinations were rated as linguistically coherent and the exercise progression as clinically consistent. Supports the effectiveness of the structured, agent-based generation approach for VNeST therapy."
      },
      {
        value: "4.75/5",
        label: "Trust as a supervised complement",
        detail: "Professionals' level of trust in the system as a complement —not a replacement— for clinical judgment, always under human supervision. Reinforces the human-in-the-loop design."
      },
    ],

    // Timeline
    timelineTitle: "Project Timeline",
    timelineSubtitle: "RehabilitIA begins in 2025 as the first Spanish-language system combining AI agents and evidence-based therapies for language rehabilitation.",
    timelineStatusDone: "Completed",
    timelineStatusProgress: "In progress",
    timelineStatusNext: "Upcoming",
    timelinePhases: [
      {
        year: "2025",
        title: "Design & development",
        status: "done",
        items: [
          "Problem formulation and literature review.",
          "System architecture design.",
          "Integration of AI agents and language models (GPT-4.1 + LangGraph).",
          "Development of the mobile app (Flutter) and web platform (React)."
        ]
      },
      {
        year: "2025 · H2",
        title: "Expert validation",
        status: "done",
        items: [
          "Evaluation with 6 certified professionals (speech-language pathology, neuropsychology, neurology).",
          "Mobile app usability: 5.71/7.",
          "Clinical integration potential: 5.00/5 (unanimous).",
          "VNeST clinical coherence: 4.50/5."
        ]
      },
      {
        year: "2026",
        title: "Pilot & publication",
        status: "progress",
        items: [
          "Testing with real aphasia patients.",
          "Academic publication of results.",
          "Extension of the system to new therapies."
        ]
      },
      {
        year: "Future",
        title: "Scaling deployment",
        status: "next",
        items: [
          "Multimodal interaction (text-to-speech and speech recognition).",
          "Improved difficulty calibration.",
          "Ethical, privacy and security validation for deployment.",
          "Larger-scale deployment."
        ]
      }
    ],

    // Team
    teamTitle: "Our Team – Researchers",
    // teamSubtitle: "RehabilitIA is developed by an interdisciplinary team from Universidad de los Andes, integrating engineering, user-centered design, and research in health technologies.",
    teamRubenName: "Prof. Rubén Manrique",
    teamRubenRole: "Lead Researcher",
    teamAndreaHName: "Prof. Andrea Herrera",
    teamAndreaHRole: "Lead Researcher",
    teamAndreaHAffiliation: "Universidad de los Andes",
    teamAndreaGName: "Andrea Galindo",
    teamAndreaGRole: "Researcher",
    teamSantiagoName: "Santiago Navarrete",
    teamSantiagoRole: "Researcher",

    // Footer
    footerTagline: "AI-powered, evidence-based language therapy for aphasia, personalized for each patient.",
    footerNavTitle: "Navigation",
    footerResourcesTitle: "Resources",
    footerLegalTitle: "University",
    footerAppLink: "Mobile app",
    footerWebLink: "Web platform",
    footerRights: "All rights reserved.",
    footerUniversity: "Universidad de los Andes | Monitored by Ministry of Education",
    footerRecognition: "Recognition as University: Decree 1297 of May 30, 1964.",
    footerLegalEntity: "Legal entity recognition: Resolution 28 of February 23, 1949 — Ministry of Justice.",
    footerAddress: "Mario Laserna Building — Cra 1 Este No. 19A-40 Bogotá (Colombia) | Tel: (571) 3394949 Ext: 2860, 2861, 2862 | Fax: (571) 3324325",
    footerDepartment: "© 2025 — Department of Systems and Computing Engineering",
  }
};
