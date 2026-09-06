export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    meta: {
      home: {
        title: 'Diseño de interiores y reformas en Cádiz y Jerez | Suárez Studio',
        description:
          'Interiorista en Cádiz. Reformas, decoración y diseño de interiores en Jerez y toda Andalucía. Proyecto integral y renders 3D. Escríbeme por WhatsApp.',
      },
      avisoLegal: { title: 'Aviso legal | Suárez Studio', description: 'Aviso legal de Suárez Studio.' },
      privacidad: {
        title: 'Política de privacidad | Suárez Studio',
        description: 'Política de privacidad de Suárez Studio.',
      },
      cookies: { title: 'Política de cookies | Suárez Studio', description: 'Política de cookies de Suárez Studio.' },
    },
    jsonld: {
      name: 'Suárez Studio — Vanessa Suárez, Interiorismo Arquitectónico',
      description:
        'Estudio de interiorismo en Cádiz: reformas, decoración y diseño de interiores en Cádiz, Jerez de la Frontera y Andalucía. Proyecto integral, llave en mano, renders 3D, planimetría y asesorías. Proyectos online en toda España.',
      areaServed: ['Cádiz', 'Jerez de la Frontera', 'Andalucía', 'España'],
      addressRegion: 'Andalucía',
      founderJobTitle: 'Interiorista',
      ogLocale: 'es_ES',
    },
    nav: {
      services: 'Servicios',
      projects: 'Proyectos',
      process: 'Proceso',
      studio: 'Estudio',
      contact: 'Contacto',
    },
    hero: {
      lede: 'Diseño y reformas de interiores con identidad, sensibilidad y detalle. Del plano y los renders hasta la última lámpara, en Cádiz capital, Jerez y el resto de Andalucía; también online en toda España.',
      ctaPrimary: 'Empezar un proyecto ↗',
      ctaSecondary: 'Ver servicios',
      eyebrow: 'Interiorismo arquitectónico · Cádiz',
    },
    band: {
      marquee: 'Casas que se parecen a quien vive en ellas',
      items: [
        { title: 'Vivienda particular', copy: 'Reformas integrales y casas que cambian de vida.' },
        { title: 'Obra nueva', copy: 'Unifamiliares desde el plano, junto a tu arquitecto.' },
        { title: 'Promoción e inversión', copy: 'Producto bien resuelto y renders que ayudan a vender.' },
        { title: 'Proyectos online', copy: 'Toda España, con el mismo nivel de detalle.' },
      ],
    },
    services: {
      eyebrow: '01 — Servicios',
      titleLine1: 'En qué puedo',
      titleLine2: 'ayudarte',
      cta: 'Consultar ↗',
      list: [
        'Decoración',
        'Mobiliario',
        'Materiales',
        'Acabados',
        'Nueva distribución',
        'Planimetría técnica',
        'Modelado / render 3D',
        'Acompañamiento en ejecución',
      ],
    },
    catalog: {
      integral: 'Proyecto integral de interiorismo',
      llaveEnMano: 'Proyecto llave en mano',
      seguimiento: 'Seguimiento de obra',
      renders: 'Renders 3D',
      planimetria: 'Planimetría',
      asesorias: 'Asesorías de interiorismo',
    },
    projectsSection: {
      eyebrow: '02 — Proyectos',
      titleLine1: 'Proyectos',
      titleLine2: 'realizados',
    },
    projectCard: {
      cta: 'Ver proyecto ↗',
    },
    process: {
      titleLine1: 'Cinco fases,',
      titleLine2: 'cero sorpresas',
      lede: 'Casi todos los sustos de una reforma vienen de decisiones que se toman tarde. Este orden existe justamente para que eso no pase.',
      phases: [
        {
          tag: 'FASE 01',
          title: 'Nos conocemos',
          copy: 'Primera conversación, dossier informativo, visita, medición y estudio de necesidades.',
        },
        { tag: 'FASE 02', title: 'Definimos el proyecto', copy: 'Alcance, propuesta de trabajo y presupuesto.' },
        { tag: 'FASE 03', title: 'Diseñamos', copy: 'Concepto, distribución, materiales y propuestas de diseño.' },
        { tag: 'FASE 04', title: 'Perfeccionamos', copy: 'Presentación del proyecto y rondas de ajustes.' },
        {
          tag: 'FASE 05',
          title: 'Lo hacemos realidad',
          copy: 'Proyecto final, documentación y, si lo deseas, acompañamiento en obra.',
        },
      ],
    },
    about: {
      eyebrow: '03 — Sobre mí',
      titleLine1: 'Trabajo',
      titleLine2: 'de una en una',
      paragraphs: [
        'Hola, soy Vanessa Suárez, interiorista y decoradora de interiores, fundadora de Suárez Studio.',
        'Para mí, diseñar un espacio va mucho más allá de hacerlo bonito. Se trata de escuchar, comprender tus necesidades reales y crear un lugar en el que puedas reconocerte y sentirte bien.',
        'Me apasionan el color, la naturalidad de los materiales y la calidez que aportan las diferentes luces. Busco el equilibrio entre belleza y funcionalidad para diseñar interiores coherentes, acogedores y llenos de personalidad.',
        'Creo espacios con alma, que no solo se vean, sino que también se sientan. Espacios que hablen de las personas que los habitan, de su historia y de su forma de vivir.',
        'Si quieres crear un lugar que se parezca de verdad a ti, estaré encantada de acompañarte.',
      ],
      stats: [
        { value: 'Cádiz', label: 'base del estudio' },
        { value: 'Online', label: 'resto de España' },
        { value: 'Una', label: 'interlocutora, de principio a fin' },
      ],
    },
    faq: {
      eyebrow: '04 — Dudas frecuentes',
      title: 'Lo que todo el mundo me pregunta',
      items: [
        {
          q: '¿Cuánto cuesta una reforma?',
          a: 'Depende de los metros, del estado de la vivienda y de lo que realmente necesites. No es lo mismo un proyecto centrado en decoración que uno que requiere nueva distribución, planimetría o modificaciones de obra. En la primera consulta podremos orientarte según tu caso.',
        },
        {
          q: '¿Es necesario hacer obra para mejorar mi casa?',
          a: 'No siempre. Antes de plantear una obra estudiamos el espacio y vemos hasta dónde podemos llegar con distribución, iluminación, mobiliario, materiales y decoración. Si podemos conseguir un buen resultado sin hacer una intervención mayor, te lo diremos.',
        },
        {
          q: '¿Qué incluye la primera consulta?',
          a: 'Es el punto de partida para conocer tu vivienda, tus necesidades y lo que quieres conseguir. Además, recibirás un dossier con información sobre nuestros servicios, forma de trabajo y todo lo necesario para entender cómo podemos abordar tu proyecto.',
        },
        {
          q: '¿Puedo contratar solo el proyecto, sin la obra?',
          a: 'Claro. Mucha gente contrata proyecto, planimetría y renders y ejecuta con su propio constructor. La documentación se entrega lista para presupuestar sin depender de mí.',
        },
      ],
    },
    contact: {
      titleLine1: 'Cuéntame qué',
      titleLine2: 'necesitas',
      lede: 'Te responderé yo, Vanessa. Normalmente en el mismo día.',
      info: 'Cádiz · Andalucía · Proyectos online en toda España',
      sentTitle: 'Recibido. Gracias.',
      sentBody: 'Te escribo en menos de 24 h laborables. Si tienes prisa, mándame un WhatsApp y lo vemos antes.',
      formEyebrow: 'O escríbeme aquí',
      labelName: 'Nombre',
      placeholderName: 'Nombre y apellidos',
      labelEmail: 'Email',
      labelPhone: 'Teléfono',
      placeholderPhone: 'Opcional',
      labelLocation: 'Localidad',
      placeholderLocation: 'Cádiz, Jerez, Sevilla…',
      labelService: 'Servicio',
      labelProfile: 'Tipo de cliente',
      profileOptions: [
        'Reformo mi vivienda',
        'Obra nueva / unifamiliar',
        'Promotor o inversor',
        'Proyecto online, fuera de Andalucía',
      ],
      labelMessage: 'Cuéntame',
      placeholderMessage: 'Metros, estado de la vivienda, plazos, qué te gustaría conseguir…',
      privacyPrefix: 'He leído y acepto la',
      privacyLink: 'política de privacidad',
      privacySuffix: '. Tus datos se usan solo para responderte.',
      submit: 'Enviar consulta ↗',
      error: 'Algo salió mal. Escríbeme directamente por WhatsApp o email.',
    },
    areas: {
      title: 'Dónde trabajo',
      lede: 'Diseño de interiores en Cádiz y Jerez de la Frontera de forma presencial, y proyectos de interiorismo online en el resto de Andalucía y toda España.',
      cadiz: {
        title: 'Provincia de Cádiz',
        copy: 'Cádiz · Jerez de la Frontera · El Puerto de Santa María · San Fernando · Chiclana · Puerto Real · Sanlúcar de Barrameda · Rota · Conil · Vejer · Tarifa',
      },
      andalucia: { title: 'Resto de Andalucía', copy: 'Sevilla · Málaga · Marbella · Estepona · Huelva · Córdoba · Granada' },
      espana: {
        title: 'Toda España, online',
        copy: 'Proyecto completo, planimetría y renders a distancia, con videollamadas de seguimiento en obra. Sin desplazamientos que encarezcan el presupuesto.',
      },
    },
    footer: {
      brand: 'Interiorismo arquitectónico en Cádiz. Proyecto, renders, planimetría y seguimiento de obra.',
      navTitle: 'Navegación',
      navHow: 'Cómo trabajo',
      navAbout: 'Sobre mí',
      servicesTitle: 'Servicios',
      contactTitle: 'Contacto',
      legalAviso: 'Aviso legal',
      legalPrivacidad: 'Privacidad',
      legalCookies: 'Cookies',
    },
    whatsapp: {
      ariaLabel: 'Escríbeme por WhatsApp',
      inlineText: 'Escríbeme por WhatsApp',
      message: 'Hola Vanessa, quiero consultarte un proyecto',
    },
    avisoLegal: {
      h1: 'Aviso legal',
      draftNote:
        'Página en borrador. Sustituir por el aviso legal definitivo con los datos fiscales y registrales reales del estudio (titular, NIF, domicilio) antes de publicar.',
      owner: 'Titular del sitio web: Vanessa Suárez — Suárez Studio, Cádiz, España.',
      contactLabel: 'Contacto:',
    },
    privacidad: {
      h1: 'Política de privacidad',
      draftNote:
        'Página en borrador. Sustituir por una política de privacidad completa (responsable del tratamiento, base legal, plazos de conservación, derechos ARCO-POL) adaptada al RGPD antes de publicar.',
      body: 'Los datos que envías a través del formulario de contacto se usan únicamente para responder a tu consulta y no se ceden a terceros.',
      responsable: 'Responsable: Vanessa Suárez — Suárez Studio. Contacto:',
    },
    cookies: {
      h1: 'Política de cookies',
      draftNote:
        'Página en borrador. Este sitio, en su versión actual, no utiliza cookies de analítica ni de publicidad. Actualizar este texto si en el futuro se añade Google Analytics u otra herramienta de medición.',
      body: 'El sitio no instala cookies propias ni de terceros salvo las estrictamente necesarias para su funcionamiento.',
    },
    projectDetail: {
      back: 'Volver a proyectos',
      ctaText: '¿Tienes un espacio que te gustaría transformar así?',
      ctaButton: 'Cuéntame tu proyecto ↗',
      nextLabel: 'Siguiente proyecto',
    },
    langSwitcherLabel: 'Cambiar idioma',
  },
  en: {
    meta: {
      home: {
        title: 'Interior Design & Renovations in Cádiz & Jerez | Suárez Studio',
        description:
          'Interior designer in Cádiz. Renovations, decoration and interior design in Jerez and across Andalusia. Full project and 3D renders. Message me on WhatsApp.',
      },
      avisoLegal: { title: 'Legal notice | Suárez Studio', description: 'Legal notice for Suárez Studio.' },
      privacidad: { title: 'Privacy policy | Suárez Studio', description: 'Privacy policy for Suárez Studio.' },
      cookies: { title: 'Cookie policy | Suárez Studio', description: 'Cookie policy for Suárez Studio.' },
    },
    jsonld: {
      name: 'Suárez Studio — Vanessa Suárez, Architectural Interior Design',
      description:
        'Interior design studio in Cádiz: renovations, decoration and interior design in Cádiz, Jerez de la Frontera and Andalusia. Full project, turnkey, 3D renders, floor plans and consultations. Online projects across Spain.',
      areaServed: ['Cádiz', 'Jerez de la Frontera', 'Andalusia', 'Spain'],
      addressRegion: 'Andalusia',
      founderJobTitle: 'Interior Designer',
      ogLocale: 'en_US',
    },
    nav: {
      services: 'Services',
      projects: 'Projects',
      process: 'Process',
      studio: 'Studio',
      contact: 'Contact',
    },
    hero: {
      lede: "Interior design and renovations with identity, sensitivity and detail. From the floor plan and 3D renders down to the last lamp — in Cádiz, Jerez and the rest of Andalusia, and online across all of Spain.",
      ctaPrimary: 'Start a project ↗',
      ctaSecondary: 'View services',
      eyebrow: 'Architectural interior design · Cádiz',
    },
    band: {
      marquee: 'Homes that look like the people who live in them',
      items: [
        { title: 'Private homes', copy: 'Full renovations and homes that change lives.' },
        { title: 'New builds', copy: 'Single-family homes from the floor plan up, alongside your architect.' },
        { title: 'Developments & investment', copy: 'A well-resolved product and renders that help sell.' },
        { title: 'Online projects', copy: 'All of Spain, with the same level of detail.' },
      ],
    },
    services: {
      eyebrow: '01 — Services',
      titleLine1: 'How I can',
      titleLine2: 'help you',
      cta: 'Enquire ↗',
      list: [
        'Decoration',
        'Furniture',
        'Materials',
        'Finishes',
        'New layout',
        'Technical floor plans',
        '3D modelling / rendering',
        'On-site follow-up',
      ],
    },
    catalog: {
      integral: 'Full interior design project',
      llaveEnMano: 'Turnkey project',
      seguimiento: 'On-site construction supervision',
      renders: '3D renders',
      planimetria: 'Floor plans',
      asesorias: 'Interior design consultations',
    },
    projectsSection: {
      eyebrow: '02 — Projects',
      titleLine1: 'Completed',
      titleLine2: 'projects',
    },
    projectCard: {
      cta: 'View project ↗',
    },
    process: {
      titleLine1: 'Five phases,',
      titleLine2: 'zero surprises',
      lede: "Almost every renovation scare comes from decisions made too late. This order exists precisely so that doesn't happen.",
      phases: [
        {
          tag: 'PHASE 01',
          title: 'We get to know each other',
          copy: 'First conversation, information dossier, site visit, measurements and needs assessment.',
        },
        { tag: 'PHASE 02', title: 'We define the project', copy: 'Scope, work proposal and budget.' },
        { tag: 'PHASE 03', title: 'We design', copy: 'Concept, layout, materials and design proposals.' },
        { tag: 'PHASE 04', title: 'We refine', copy: 'Project presentation and rounds of adjustments.' },
        {
          tag: 'PHASE 05',
          title: 'We make it real',
          copy: "Final project, documentation and, if you'd like, on-site follow-up during construction.",
        },
      ],
    },
    about: {
      eyebrow: '03 — About me',
      titleLine1: 'One project',
      titleLine2: 'at a time',
      paragraphs: [
        "Hi, I'm Vanessa Suárez, interior designer and decorator, founder of Suárez Studio.",
        "To me, designing a space goes far beyond making it pretty. It's about listening, understanding your real needs, and creating a place where you can recognize yourself and feel good.",
        "I'm passionate about colour, the natural character of materials, and the warmth different lights bring to a space. I look for the balance between beauty and functionality to design interiors that are coherent, welcoming and full of personality.",
        "I create spaces with soul — spaces that aren't just seen, but felt. Spaces that speak of the people who live in them, their story and their way of life.",
        "If you want to create a place that truly looks like you, I'd love to be part of the journey.",
      ],
      stats: [
        { value: 'Cádiz', label: "studio's home base" },
        { value: 'Online', label: 'rest of Spain' },
        { value: 'One', label: 'point of contact, start to finish' },
      ],
    },
    faq: {
      eyebrow: '04 — FAQ',
      title: 'What everyone asks me',
      items: [
        {
          q: 'How much does a renovation cost?',
          a: "It depends on the square metres, the condition of the property and what you actually need. A project focused on decoration is very different from one that requires a new layout, floor plans or structural changes. In our first conversation we can give you guidance based on your specific case.",
        },
        {
          q: 'Do I need construction work to improve my home?',
          a: 'Not always. Before proposing any construction work, we study the space and see how far we can get with layout, lighting, furniture, materials and decoration. If we can achieve a great result without a major intervention, we’ll tell you.',
        },
        {
          q: 'What does the first consultation include?',
          a: "It's the starting point for getting to know your home, your needs and what you want to achieve. You'll also receive a dossier with information about our services, our way of working, and everything you need to understand how we can approach your project.",
        },
        {
          q: 'Can I hire just the design project, without the construction work?',
          a: 'Of course. Many people hire the project, floor plans and renders, then build with their own contractor. The documentation is delivered ready for quoting, with no need to depend on me.',
        },
      ],
    },
    contact: {
      titleLine1: 'Tell me what',
      titleLine2: 'you need',
      lede: "I'll reply personally — usually the same day.",
      info: 'Cádiz · Andalusia · Online projects across Spain',
      sentTitle: 'Received. Thank you.',
      sentBody: "I'll get back to you within 24 business hours. If it's urgent, send me a WhatsApp and we'll sort it sooner.",
      formEyebrow: 'Or write to me here',
      labelName: 'Name',
      placeholderName: 'Full name',
      labelEmail: 'Email',
      labelPhone: 'Phone',
      placeholderPhone: 'Optional',
      labelLocation: 'Location',
      placeholderLocation: 'Cádiz, Jerez, Seville…',
      labelService: 'Service',
      labelProfile: 'Client type',
      profileOptions: [
        'Renovating my home',
        'New build / single-family home',
        'Developer or investor',
        'Online project, outside Andalusia',
      ],
      labelMessage: 'Tell me more',
      placeholderMessage: "Square metres, condition of the property, timeline, what you'd like to achieve…",
      privacyPrefix: 'I have read and accept the',
      privacyLink: 'privacy policy',
      privacySuffix: '. Your data is only used to respond to you.',
      submit: 'Send enquiry ↗',
      error: 'Something went wrong. Message me directly on WhatsApp or by email.',
    },
    areas: {
      title: 'Where I work',
      lede: 'Interior design in Cádiz and Jerez de la Frontera in person, and online interior design projects across the rest of Andalusia and all of Spain.',
      cadiz: {
        title: 'Province of Cádiz',
        copy: 'Cádiz · Jerez de la Frontera · El Puerto de Santa María · San Fernando · Chiclana · Puerto Real · Sanlúcar de Barrameda · Rota · Conil · Vejer · Tarifa',
      },
      andalucia: { title: 'Rest of Andalusia', copy: 'Seville · Málaga · Marbella · Estepona · Huelva · Córdoba · Granada' },
      espana: {
        title: 'All of Spain, online',
        copy: "A complete project, floor plans and renders remotely, with video calls to follow along during construction. No travel costs to inflate your budget.",
      },
    },
    footer: {
      brand: 'Architectural interior design in Cádiz. Project, renders, floor plans and construction supervision.',
      navTitle: 'Navigation',
      navHow: 'How I work',
      navAbout: 'About me',
      servicesTitle: 'Services',
      contactTitle: 'Contact',
      legalAviso: 'Legal notice',
      legalPrivacidad: 'Privacy',
      legalCookies: 'Cookies',
    },
    whatsapp: {
      ariaLabel: 'Message me on WhatsApp',
      inlineText: 'Message me on WhatsApp',
      message: "Hi Vanessa, I'd like to ask you about a project",
    },
    avisoLegal: {
      h1: 'Legal notice',
      draftNote:
        "Draft page. Replace with the final legal notice including the studio's actual tax and registration details (owner, tax ID, address) before publishing.",
      owner: 'Website owner: Vanessa Suárez — Suárez Studio, Cádiz, Spain.',
      contactLabel: 'Contact:',
    },
    privacidad: {
      h1: 'Privacy policy',
      draftNote:
        'Draft page. Replace with a complete privacy policy (data controller, legal basis, retention periods, ARCO-POL rights) compliant with the GDPR before publishing.',
      body: 'The data you submit through the contact form is used only to respond to your enquiry and is not shared with third parties.',
      responsable: 'Data controller: Vanessa Suárez — Suárez Studio. Contact:',
    },
    cookies: {
      h1: 'Cookie policy',
      draftNote:
        'Draft page. This site, in its current version, does not use analytics or advertising cookies. Update this text if Google Analytics or another measurement tool is added in the future.',
      body: 'The site does not install first-party or third-party cookies other than those strictly necessary for it to function.',
    },
    projectDetail: {
      back: 'Back to projects',
      ctaText: "Have a space you'd like to transform like this?",
      ctaButton: 'Tell me about your project ↗',
      nextLabel: 'Next project',
    },
    langSwitcherLabel: 'Switch language',
  },
} as const;
