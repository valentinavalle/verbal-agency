/**
 * Todos tus datos personales y textos del sitio viven acá.
 * Editá este archivo y el sitio se actualiza solo (no hace falta tocar componentes).
 */

export const perfil = {
  nombre: 'Valentina Valle',
  nombrePila: 'Valentina',
  apellido: 'Valle',
  ubicacion: 'Buenos Aires, Argentina',
  bajada: 'Marketing, marca y proyectos de principio a fin',

  // Se usan en <title>, meta description y al compartir el link (Open Graph).
  seo: {
    titulo: 'Valentina Valle · Marketing, marca y proyectos de principio a fin',
    descripcion:
      'Soy Valentina Valle, Licenciada en Comunicación Social con cinco años en marketing y brand experience. Llevo lanzamientos, campañas con creadores y proyectos de marketing de la idea al cierre. Buenos Aires.',
  },

  contacto: {
    mail: 'valentinavpicco@gmail.com',
    whatsappTexto: '+54 9 11 3840-6375',
    whatsappLink: 'https://wa.me/5491138406375',
    linkedin: 'https://www.linkedin.com/in/valentina-valle1',
    // El PDF va en public/cv/ con exactamente este nombre.
    cv: '/cv/CV_Valentina_Valle_2026.pdf',
  },

  navegacion: [
    { etiqueta: 'Sobre mí', href: '#sobre-mi' },
    { etiqueta: 'Qué hago', href: '#que-hago' },
    { etiqueta: 'Proyectos', href: '#proyectos' },
    { etiqueta: 'Trayectoria', href: '#trayectoria' },
    { etiqueta: 'VERBAL', href: '#verbal' },
  ],

  hero: {
    sello: '5 años en marketing y brand experience',
  },

  sobreMi: {
    titulo: 'Sobre mí',
    texto:
      'Licenciada en Comunicación Social, con cinco años en marketing y brand experience. Lo mío es tomar una idea y hacerla realidad: llevo campañas, lanzamientos y activaciones desde la estrategia hasta la ejecución, con presupuestos, cronogramas y coordinación de áreas, diseño, agencias y proveedores. Me muevo igual de cómoda en lo creativo que en lo operativo.',
    cifras: [
      { valor: '3', etiqueta: 'marcas en simultáneo en Rabieta' },
      { valor: '6', etiqueta: 'marcas de motos a mi cargo en eventos' },
      { valor: '9', etiqueta: 'eventos en paralelo en su pico' },
    ],
  },

  servicios: {
    titulo: 'Qué hago',
    items: [
      {
        icono: 'gestion',
        titulo: 'Gestión de proyectos',
        texto: 'De la idea al cierre: planificación, presupuesto, proveedores, seguimiento y reporting.',
      },
      {
        icono: 'lanzamiento',
        titulo: 'Lanzamientos de producto',
        texto: 'Concepto, colaboraciones con otras marcas y comunicación.',
      },
      {
        icono: 'creadores',
        titulo: 'Influencers y UGC',
        texto: 'Selección de perfiles, negociación de fees y coordinación de campañas.',
      },
      {
        icono: 'eventos',
        titulo: 'Eventos y activaciones',
        texto: 'Producción integral, logística, montaje y cierre.',
      },
      {
        icono: 'email',
        titulo: 'Email marketing y datos',
        texto: 'Bases de datos, captación de contactos y envíos.',
      },
      {
        icono: 'prensa',
        titulo: 'Relaciones públicas',
        texto: 'Vínculo con prensa, medios, creadores y proveedores.',
      },
    ],
  },

  proyectos: {
    titulo: 'Proyectos',
    bajada: 'Lanzamientos, activaciones y campañas con creadores. Elegí uno y te cuento cómo lo hice.',
  },

  trayectoria: {
    titulo: 'Trayectoria',
    items: [
      {
        fecha: 'Sep 2025 – Oct 2026',
        empresa: 'Grupo La Emilia',
        rol: 'Responsable de Eventos y Brand Experience',
        puntos: [
          'Campañas, activaciones y eventos para todo el portfolio de marcas de motos.',
          'Presupuesto anual y control de desvíos.',
          'Coordinación de concesionarios, proveedores y equipos internos.',
          'Reportes de costos, asistencia y performance.',
        ],
      },
      {
        fecha: 'May 2026 – hoy',
        empresa: 'VERBAL Agencia',
        rol: 'Co-fundadora',
        actual: true,
        puntos: ['Estrategia, posicionamiento y campañas.', 'Supervisión de producción creativa y redes.'],
      },
      {
        fecha: 'Jul 2023 – Sep 2025',
        empresa: 'Cervecería Rabieta',
        rol: 'Marketing & Brand Experience Senior',
        puntos: [
          'Marketing y brand experience de Rabieta, Pampa y Guinness.',
          'Adaptación de campañas globales de Guinness bajo lineamientos de Diageo.',
          'Campañas digitales con redes, influencers y prensa.',
          'Presupuesto del área y supervisión de proveedores.',
        ],
      },
      {
        fecha: 'Dic 2020 – Jul 2023',
        empresa: 'Grupo Sancor Seguros',
        rol: 'De pasante a Analista de Relaciones Institucionales',
        puntos: [
          'Eventos corporativos y sponsoreo a nivel nacional.',
          'Experiencias en suites de Movistar Arena y Teatro El Nacional.',
          'Evaluación de propuestas de sponsoreo.',
          'Presupuesto del área.',
        ],
      },
    ],
  },

  herramientas: {
    titulo: 'Herramientas y formación',
    herramientas: {
      titulo: 'Herramientas',
      items: ['SAP', 'Pilot', 'Emblue', 'Canva (avanzado)', 'Illustrator (básico)', 'Microsoft Office'],
    },
    metodologias: {
      titulo: 'Metodologías',
      items: ['Metodologías ágiles'],
    },
    formacion: {
      titulo: 'Formación',
      items: [
        { titulo: 'Licenciatura en Comunicación Social, orientación Publicidad', detalle: 'UCES, 2026' },
        { titulo: 'Liderazgo y Gestión de Equipos', detalle: 'Coderhouse, 2024' },
      ],
    },
    idiomas: {
      titulo: 'Idiomas',
      items: [
        { idioma: 'Español', nivel: 'nativo' },
        { idioma: 'Inglés', nivel: 'C1' },
        { idioma: 'Portugués', nivel: 'básico' },
      ],
    },
  },

  comoTrabajo: {
    titulo: 'Cómo trabajo',
    bajada: 'Modalidad remota o híbrida desde Buenos Aires.',
    items: [
      {
        titulo: 'Por proyecto',
        texto: 'Un lanzamiento, una campaña, un evento: lo armamos con alcance y cronograma claros, y lo llevo hasta el cierre.',
      },
      {
        titulo: 'Con fee mensual',
        texto: 'Si necesitás a alguien a cargo todos los meses, me sumo a tu equipo y acompaño el día a día del marketing.',
      },
    ],
  },

  verbal: {
    titulo: 'VERBAL',
    texto:
      'Co-fundé VERBAL, una agencia boutique de estrategia, marketing y automatización con IA para marcas y PyMEs. Ahí me ocupo de la estrategia y los contenidos. Si tu proyecto necesita más que una persona, lo resolvemos con el equipo de VERBAL.',
    // Si querés mostrar un botón a la web de la agencia, pegá acá su link (ej. 'https://...').
    sitio: '',
  },

  contactoSeccion: {
    titulo: 'Hablemos',
    bajada: 'Contame qué estás armando. Si es un lanzamiento, una campaña o un proyecto que necesita alguien al frente, charlemos.',
  },
};

export type Perfil = typeof perfil;
