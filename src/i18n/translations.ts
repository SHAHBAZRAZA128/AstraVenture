export type Language = 'en' | 'es';

type StatItem = { stat: string; label: string };
type Wedge = { num: string; title: string; desc: string };
type Operation = { title: string; desc: string };
type Member = { title: string; bio: string[] };

export type Translations = {
  nav: { thesis: string; stack: string; team: string; contact: string; toggleAria: string; homeAria: string; langAria: string };
  hero: { headlineMain: string; headlineAccent: string; bodyLead: string; bodyAccent: string; cta: string };
  thesis: { eyebrow: string; headingMain: string; headingAccent: string; body: string; stats: StatItem[]; wedges: Wedge[] };
  stack: {
    eyebrow: string;
    headingLine1: string;
    headingLine2: string;
    body: string;
    cta: string;
    operations: Operation[];
    closingLine1: string;
    closingLine2: string;
    closingLine3: string;
  };
  team: { eyebrow: string; heading: string; body: string; linkedin: string; members: Member[] };
  contact: {
    eyebrow: string;
    heading: string;
    body: string;
    directIntro: string;
    labels: { name: string; email: string; company: string; url: string; stage: string; building: string };
    stageOptions: { placeholder: string; preseed: string; seed: string; other: string };
    placeholderBuilding: string;
    submit: string;
    sending: string;
    success: string;
    errorPrefix: string;
    errorSuffix: string;
    errorTail: string;
    fallbackError: string;
  };
  footer: { thesis: string; team: string; contact: string; copyright: string };
};

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      thesis: 'Thesis',
      stack: 'How We Operate',
      team: 'Team',
      contact: 'Contact',
      toggleAria: 'Toggle menu',
      homeAria: 'Astra Ventures — Home',
      langAria: 'Switch language',
    },
    hero: {
      headlineMain: "The next trillion-dollar AI wave won't live in chatbots.",
      headlineAccent: 'It will live in factories, fleets, machines, and critical infrastructure.',
      bodyLead: 'Astra Ventures funds the foundational technologies powering Physical AI.',
      bodyAccent: 'AI-native in how we operate: deal flow, diligence, monitoring, reporting.',
      cta: 'For founders',
    },
    thesis: {
      eyebrow: 'Thesis',
      headingMain: 'The next generation of category-defining AI lives in the',
      headingAccent: 'physical world.',
      body: "Physical AI is no longer a research bet. It's a deployment bet. The companies building the middleware, the data infrastructure, the vertical workflows, and the autonomy stacks for real industrial environments are under-funded relative to the opportunity by an order of magnitude. That's the wedge Astra was built for.",
      stats: [
        { stat: '$700B+', label: 'Total Physical AI TAM by 2030 across industrial sectors' },
        { stat: '$30K', label: 'humanoid BOM today — down from $250K in 2022' },
        { stat: '2,070', label: 'FP4 TFLOPS at the edge (Jetson Thor)' },
      ],
      wedges: [
        {
          num: '01.',
          title: 'Industrial & Manufacturing Intelligence',
          desc: 'Factory-floor AI: vision, quality, scheduling, predictive maintenance.',
        },
        {
          num: '02.',
          title: 'Logistics & Warehouse Autonomy',
          desc: 'AMRs, yard automation, warehouse orchestration, last-mile.',
        },
        {
          num: '03.',
          title: 'Robotics Middleware & Orchestration',
          desc: 'Fleet management, safety, simulation, synthetic data, tele-ops, tooling.',
        },
        {
          num: '04.',
          title: 'Energy & Industrial Mobility',
          desc: 'Inspection robotics, grid-edge AI, autonomous maintenance for utilities and heavy equipment.',
        },
        {
          num: '05.',
          title: 'Agricultural & Construction Robotics',
          desc: 'The most under-funded categories relative to TAM. Measurable unit economics.',
        },
        {
          num: '06.',
          title: 'Applied Vertical AI for Heavy Industries',
          desc: 'Domain-specific models and workflow software for mid-market manufacturing, construction, mining.',
        },
      ],
    },
    stack: {
      eyebrow: 'How We Operate',
      headingLine1: 'We invest in AI.',
      headingLine2: 'We run on AI.',
      body: "Astra is an AI-native fund. We use AI across the stack — deal flow, diligence, monitoring, reporting — on a platform built by our own GP, Ishtiaque Mohammad. It's called SowFin, and it's the reason a two-GP firm sees more companies, decides faster, and reports to LPs more transparently than most funds twice our size.",
      cta: 'See SowFin',
      operations: [
        {
          title: '01. Deal flow.',
          desc: 'Our sourcing engine combines a curated founder network across Bay Area and major US tech hubs with VentureScope, our proprietary AI platform that scores every opportunity against a 20-criteria evaluation model — giving us diligence depth no generalist fund can match at speed.',
        },
        {
          title: '02. Diligence.',
          desc: 'Every company in the pipeline is run through automated technical and market scoring — team, data moat, BOM defensibility, customer gravity, regulatory surface — before a partner spends a minute. Yes-or-no in days, not weeks.',
        },
        {
          title: '03. Monitoring.',
          desc: 'Our VentureScope AI platform monitors every portfolio company across metrics, milestones, burn, and runway — in one place. We flag issues early, before they become board conversations. Founders spend less time on reporting and more time on building.',
        },
        {
          title: '04. Reporting.',
          desc: 'LP reports are automatically generated from the same AI system that monitors the portfolio.',
        },
      ],
      closingLine1: 'We invest in physical-world AI.',
      closingLine2: 'We also use AI to run a venture firm.',
      closingLine3: 'Both are what the next decade will look like.',
    },
    team: {
      eyebrow: 'Team',
      heading: 'Operators First. Leading the New Economy.',
      body: 'Two general partners. Decades of physical-economy and deep-tech operating experience between them — Amazon, AWS, Intel, Airbus, Broadcom, Mercedes-Benz, CEMEX.',
      linkedin: 'LinkedIn',
      members: [
        {
          title: 'General Partner — Global Capital & Industrial Operations',
          bio: [
            'Ramiro López García is a General Partner at Astra Ventures and Managing Partner of an M&A advisory firm for mid-market companies across the Americas. He has 20+ years of experience in industrial operations, corporate finance, and cloud infrastructure. He was most recently General Manager of a multi-site industrial manufacturing business, and previously Director of Finance and Strategy at Amazon Prime and AWS — leading a $10 billion compute platform and closing over $1 billion in infrastructure partnerships. He held M&A, strategic planning, and Chief of Staff roles at CEMEX across the U.S., Europe, and Latin America, and began his career as an engineer at Airbus and Mercedes-Benz in Germany.',
            'Ramiro holds a degree in Mechatronics Engineering, an MBA from Cornell Johnson, and the CFA charter. He is based in Latin America.',
          ],
        },
        {
          title: 'General Partner — Technology, Platform & AI Operations',
          bio: [
            'Ishtiaque Mohammad is a General Partner at Astra Ventures and the Founder and CEO of SowFin, a vertical AI platform for venture capital due diligence. He has 25+ years of experience in semiconductors, corporate finance, and AI platforms. He also owns VentureReady, a Bay Area community of 1,300 founders, and built VentureScope, Astra’s internal AI diligence and portfolio management system. He was previously Director of Strategic Finance at Intel, where he led $2 billion in annual R&D capital allocation and shaped Xeon datacenter CPU strategy. Before Intel, he managed corporate finance and capital budgeting at Broadcom.',
            'Ishtiaque holds a degree in Electrical Engineering and an MBA in Finance from Cornell. He is based in the San Francisco Bay Area, with networks in the Middle East, Japan, and India.',
          ],
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      heading: 'Write to us.',
      body: "A paragraph or a deck — what you've built, what you're shipping, who's paying. We respond within two business days.",
      directIntro: 'Or write directly to',
      labels: {
        name: 'Name',
        email: 'Email',
        company: 'Company',
        url: 'Company URL',
        stage: 'Stage',
        building: "What you're building",
      },
      stageOptions: {
        placeholder: 'Select a stage',
        preseed: 'Pre-seed',
        seed: 'Seed',
        other: 'Other',
      },
      placeholderBuilding: 'One paragraph description...',
      submit: 'Send',
      sending: 'Sending…',
      success: "Thanks — we've received your note. We'll respond as soon as possible.",
      errorPrefix: "Couldn't send:",
      errorSuffix: 'You can also email',
      errorTail: 'directly.',
      fallbackError: 'Something went wrong. Please try again or email us directly.',
    },
    footer: {
      thesis: 'Thesis',
      team: 'Team',
      contact: 'Contact',
      copyright: '© 2026 Astra Ventures. All rights reserved.',
    },
  },
  es: {
    nav: {
      thesis: 'Tesis',
      stack: 'Cómo Operamos',
      team: 'Equipo',
      contact: 'Contacto',
      toggleAria: 'Abrir menú',
      homeAria: 'Astra Ventures — Inicio',
      langAria: 'Cambiar idioma',
    },
    hero: {
      headlineMain: 'La próxima ola de IA de un billón de dólares no vivirá en chatbots.',
      headlineAccent: 'Vivirá en fábricas, flotas, máquinas e infraestructura crítica.',
      bodyLead: 'Astra Ventures financia las tecnologías fundamentales que impulsan la IA Física.',
      bodyAccent: 'Operamos de forma nativa con IA: deal flow, due diligence, monitoreo y reportes.',
      cta: 'Para fundadores',
    },
    thesis: {
      eyebrow: 'Tesis',
      headingMain: 'La próxima generación de IA que definirá categorías vive en el',
      headingAccent: 'mundo físico.',
      body: 'La IA Física ya no es una apuesta de investigación. Es una apuesta de despliegue. Las empresas que construyen el middleware, la infraestructura de datos, los flujos verticales y los stacks de autonomía para entornos industriales reales están infrafinanciadas respecto a la oportunidad por un orden de magnitud. Esa es la cuña para la que se construyó Astra.',
      stats: [
        { stat: '$700B+', label: 'TAM total de IA Física para 2030 en sectores industriales' },
        { stat: '$30K', label: 'BOM de un humanoide hoy — vs. $250K en 2022' },
        { stat: '2,070', label: 'TFLOPS FP4 en el edge (Jetson Thor)' },
      ],
      wedges: [
        {
          num: '01.',
          title: 'Inteligencia Industrial y de Manufactura',
          desc: 'IA en planta: visión, calidad, programación y mantenimiento predictivo.',
        },
        {
          num: '02.',
          title: 'Logística y Autonomía de Almacenes',
          desc: 'AMRs, automatización de patios, orquestación de almacenes y última milla.',
        },
        {
          num: '03.',
          title: 'Middleware y Orquestación de Robótica',
          desc: 'Gestión de flotas, seguridad, simulación, datos sintéticos, tele-operación y herramientas.',
        },
        {
          num: '04.',
          title: 'Energía y Movilidad Industrial',
          desc: 'Robótica de inspección, IA en el edge de la red y mantenimiento autónomo para utilities y maquinaria pesada.',
        },
        {
          num: '05.',
          title: 'Robótica Agrícola y de Construcción',
          desc: 'Las categorías más infrafinanciadas respecto al TAM. Con unit economics medibles.',
        },
        {
          num: '06.',
          title: 'IA Vertical Aplicada a Industrias Pesadas',
          desc: 'Modelos específicos del dominio y software de flujo para manufactura, construcción y minería del mid-market.',
        },
      ],
    },
    stack: {
      eyebrow: 'Cómo Operamos',
      headingLine1: 'Invertimos en IA.',
      headingLine2: 'Operamos con IA.',
      body: 'Astra es un fondo nativo de IA. Usamos IA en todo el stack — deal flow, due diligence, monitoreo y reportes — sobre una plataforma construida por nuestro propio GP, Ishtiaque Mohammad. Se llama SowFin, y es la razón por la que una firma de dos GPs ve más empresas, decide más rápido y reporta a los LPs con más transparencia que la mayoría de fondos del doble de nuestro tamaño.',
      cta: 'Ver SowFin',
      operations: [
        {
          title: '01. Deal flow.',
          desc: 'Nuestro motor de sourcing combina una red curada de fundadores en el Bay Area y los principales hubs tecnológicos de EE. UU. con VentureScope, nuestra plataforma de IA propia que evalúa cada oportunidad contra un modelo de 20 criterios — dándonos una profundidad de diligencia que ningún fondo generalista puede igualar a esta velocidad.',
        },
        {
          title: '02. Due diligence.',
          desc: 'Cada empresa del pipeline pasa por un scoring técnico y de mercado automatizado — equipo, foso de datos, defensibilidad del BOM, gravedad de clientes y superficie regulatoria — antes de que un socio invierta un minuto. Sí o no en días, no en semanas.',
        },
        {
          title: '03. Monitoreo.',
          desc: 'Nuestra plataforma VentureScope monitorea cada empresa del portafolio en métricas, hitos, burn y runway — en un solo lugar. Detectamos problemas temprano, antes de que lleguen al consejo. Los fundadores dedican menos tiempo a reportar y más a construir.',
        },
        {
          title: '04. Reportes.',
          desc: 'Los reportes a LPs se generan automáticamente desde el mismo sistema de IA que monitorea el portafolio.',
        },
      ],
      closingLine1: 'Invertimos en IA del mundo físico.',
      closingLine2: 'También usamos IA para operar una firma de venture.',
      closingLine3: 'Ambas son lo que será la próxima década.',
    },
    team: {
      eyebrow: 'Equipo',
      heading: 'Operadores Primero. Liderando la Nueva Economía.',
      body: 'Dos socios generales. Décadas combinadas de experiencia operativa en la economía física y deep tech — Amazon, AWS, Intel, Airbus, Broadcom, Mercedes-Benz, CEMEX.',
      linkedin: 'LinkedIn',
      members: [
        {
          title: 'Socio General — Capital Global y Operaciones Industriales',
          bio: [
            'Ramiro López García es Socio General en Astra Ventures y Managing Partner de una firma asesora de M&A para empresas del mid-market en las Américas. Tiene más de 20 años de experiencia en operaciones industriales, finanzas corporativas e infraestructura cloud. Más recientemente fue Gerente General de un negocio industrial multi-sitio, y previamente Director de Finanzas y Estrategia en Amazon Prime y AWS — liderando una plataforma de cómputo de $10 mil millones y cerrando más de $1 mil millones en alianzas de infraestructura. Tuvo roles de M&A, planeación estratégica y Chief of Staff en CEMEX en EE. UU., Europa y Latinoamérica, y comenzó su carrera como ingeniero en Airbus y Mercedes-Benz en Alemania.',
            'Ramiro tiene un grado en Ingeniería Mecatrónica, un MBA por Cornell Johnson y la certificación CFA. Reside en Latinoamérica.',
          ],
        },
        {
          title: 'Socio General — Tecnología, Plataforma y Operaciones de IA',
          bio: [
            'Ishtiaque Mohammad es Socio General en Astra Ventures y Fundador y CEO de SowFin, una plataforma de IA vertical para due diligence de venture capital. Tiene más de 25 años de experiencia en semiconductores, finanzas corporativas y plataformas de IA. También es dueño de VentureReady, una comunidad en el Bay Area de 1,300 fundadores, y construyó VentureScope, el sistema interno de diligencia y gestión de portafolio de Astra. Previamente fue Director de Finanzas Estratégicas en Intel, donde lideró $2 mil millones anuales en asignación de capital de I+D y dio forma a la estrategia de CPUs Xeon para datacenter. Antes de Intel, gestionó finanzas corporativas y presupuesto de capital en Broadcom.',
            'Ishtiaque tiene un grado en Ingeniería Eléctrica y un MBA en Finanzas por Cornell. Reside en el área de la Bahía de San Francisco, con redes en Medio Oriente, Japón e India.',
          ],
        },
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      heading: 'Escríbenos.',
      body: 'Un párrafo o un deck — qué has construido, qué estás lanzando, quién paga. Respondemos en dos días hábiles.',
      directIntro: 'O escribe directamente a',
      labels: {
        name: 'Nombre',
        email: 'Correo',
        company: 'Empresa',
        url: 'URL de la empresa',
        stage: 'Etapa',
        building: 'Qué estás construyendo',
      },
      stageOptions: {
        placeholder: 'Selecciona una etapa',
        preseed: 'Pre-seed',
        seed: 'Seed',
        other: 'Otra',
      },
      placeholderBuilding: 'Descripción en un párrafo...',
      submit: 'Enviar',
      sending: 'Enviando…',
      success: 'Gracias — hemos recibido tu mensaje. Responderemos lo antes posible.',
      errorPrefix: 'No se pudo enviar:',
      errorSuffix: 'También puedes escribir a',
      errorTail: 'directamente.',
      fallbackError: 'Algo salió mal. Inténtalo de nuevo o escríbenos por correo.',
    },
    footer: {
      thesis: 'Tesis',
      team: 'Equipo',
      contact: 'Contacto',
      copyright: '© 2026 Astra Ventures. Todos los derechos reservados.',
    },
  },
};
