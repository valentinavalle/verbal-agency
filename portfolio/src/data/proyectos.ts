/**
 * Los casos del portfolio. Cada objeto de la lista genera su propia página en /proyectos/<slug>.
 *
 * - El orden de la lista define el número (01, 02, 03…).
 * - Las fotos se toman solas de src/assets/proyectos/<slug>/ (la primera es la portada).
 * - Los campos con "?" son opcionales: si no los completás, esa sección no se muestra.
 *
 * Para sumar un caso: copiá un bloque, cambiá el slug, creá la carpeta con ese nombre
 * en src/assets/proyectos/ y listo (más detalles en el README).
 */

export interface Dato {
  valor: string;
  etiqueta: string;
}

export interface Proyecto {
  /** Va en la URL: /proyectos/<slug>. Sin espacios ni acentos. Es también el nombre de la carpeta de fotos. */
  slug: string;
  /** Marca o cliente (se muestra arriba del título). */
  marca: string;
  titulo: string;
  /** Una o dos frases: se usa como meta description al compartir el caso. */
  descripcion: string;
  etiquetas: string[];
  /** Sello rosa sobre la tarjeta (ej. "SOLD OUT"). */
  sello?: string;
  desafio?: string;
  /** Un texto o una lista de puntos. */
  hice: string | string[];
  resultado?: string;
  /** Resultado grande en Unbounded, lima sobre violeta. */
  destacado?: string;
  /** Cifras grandes (ej. 6 marcas). */
  cifras?: Dato[];
  /** Chips con eventos puntuales. */
  eventos?: string[];
  /** Textos alternativos de las fotos, en el mismo orden que los nombres de archivo (opcional). */
  alts?: string[];
}

export const proyectos: Proyecto[] = [
  {
    slug: 'malaguti-lanzamiento',
    marca: 'MALAGUTI · Grupo La Emilia',
    titulo: 'Lanzamiento de una marca nueva en Argentina',
    descripcion:
      'Lideré de punta a punta el lanzamiento de MALAGUTI en Argentina: venue, timing, kit de invitación para prensa e influencers y show en vivo.',
    etiquetas: ['Lanzamiento', 'Eventos'],
    desafio: 'Presentar en sociedad una marca de motos recién llegada al mercado local.',
    hice: 'Lideré el evento de punta a punta: comparativa de venues, propuesta de timing, kit de invitación para prensa e influencers y contratación del show en vivo.',
    resultado: 'Lanzamiento en Rosa Negra con prensa e influencers presentes.',
  },
  {
    slug: 'motomel-shark-150',
    marca: 'Motomel · Festival Un Poco de Ruido, Vélez',
    titulo: 'Pre-lanzamiento de la Shark 150',
    descripcion:
      'Una activación con jam en vivo en el festival Un Poco de Ruido para mostrar la Shark 150 antes de su salida y captar contactos propios para la marca.',
    etiquetas: ['Activación', 'Pre-lanzamiento'],
    desafio: 'Mostrar una moto nueva en un festival de música y generar contacto real con el público.',
    hice: 'Diseñé una activación con jam en vivo donde el público tocaba instrumentos en tandas, más registro por QR con sorteo de una Skua 150. Armé el brief y coordiné a las promotoras.',
    resultado: 'Contactos propios captados para la marca y producto presentado antes de su salida.',
  },
  {
    slug: 'portfolio-eventos-motos',
    marca: 'Suzuki, TVS, Motomel, Kove, MALAGUTI, Morbidelli',
    titulo: 'Única responsable de eventos para todo un portfolio',
    descripcion:
      'Responsable única de los eventos de seis marcas de motos en Grupo La Emilia: calendario, presupuesto, proveedores, logística y reporting, con hasta nueve eventos en paralelo.',
    etiquetas: ['Eventos', 'Gestión de proyectos'],
    hice: [
      'Planificación del calendario anual, presupuesto y control de desvíos.',
      'Selección de proveedores, logística, merch, montaje, cierre y reporting de cada evento.',
      'Coordinación con marketing, comercial, concesionarios y agencias.',
    ],
    cifras: [
      { valor: '6', etiqueta: 'marcas' },
      { valor: '9', etiqueta: 'eventos en paralelo' },
      { valor: '1', etiqueta: 'responsable' },
    ],
    eventos: ['Agrobikes', 'Expomoto Gualeguaychú', 'Supercross Suzuki', 'Rider Fest', 'Motobeat', 'Moto Travel Fest'],
  },
  {
    slug: 'primavera-pampa-rabieta',
    marca: 'Pampa y Rabieta · Cervecería Rabieta',
    titulo: 'Primavera: flores en el vaso',
    descripcion:
      'Una campaña de primavera para Pampa y Rabieta: picnic, creadores de contenido, difusión en medios y una cerveza de perfil floral.',
    etiquetas: ['Campaña', 'Creadores', 'Lanzamiento'],
    desafio: 'Celebrar la llegada de la primavera con acciones de marca para vivir y compartir.',
    hice: 'Para Pampa organicé un picnic de primavera con producción de materiales, una campaña con creadores de contenido y difusión en medios. Desde Rabieta lanzamos una cerveza de perfil floral que unió las flores con el sabor.',
    resultado: 'Campaña con presencia en redes y en medios, y una experiencia de marca propia de la temporada.',
  },
  {
    slug: 'disoluta',
    marca: 'Cervecería Rabieta',
    titulo: 'DISOLUTA, una edición limitada con relato',
    descripcion:
      'DISOLUTA, una coffee stout añejada en barricas de bourbon creada con la maestra cervecera y un poeta. Lideré el concepto, el cobranding y la comunicación.',
    etiquetas: ['Lanzamiento', 'Cobranding'],
    desafio: 'Lanzar un estilo único que se diferenciara del resto de la línea.',
    hice: 'Una coffee stout añejada en barricas de bourbon, creada junto a la maestra cervecera y un poeta. Lideré el concepto, el cobranding con tostadores de café de especialidad y la comunicación.',
    resultado: 'Una cerveza con historia propia, más allá del estilo.',
  },
  {
    slug: 'rabieta-x-kakawa',
    marca: 'Cervecería Rabieta × Kakawa',
    titulo: 'Una cerveza de chocolate en colaboración',
    descripcion:
      'Una cerveza de chocolate en colaboración con Kakawa: propuse la alianza, acordé las condiciones y coordiné el lanzamiento. Resultado: SOLD OUT.',
    etiquetas: ['Lanzamiento', 'Colaboración'],
    sello: 'SOLD OUT',
    desafio: 'Generar un lanzamiento distinto y atraer público nuevo con otra marca.',
    hice: 'Propuse la colaboración con la chocolatería, acordé las condiciones y coordiné el lanzamiento de punta a punta.',
    destacado: 'SOLD OUT',
  },
  {
    slug: 'influencers-ugc',
    marca: 'Rabieta, Pampa y Guinness',
    titulo: 'Influencers y UGC para tres marcas a la vez',
    descripcion:
      'Campañas con creadores para Rabieta, Pampa y Guinness en simultáneo: selección de perfiles, fees, UGC y adaptación de campañas globales de Diageo.',
    etiquetas: ['Influencers', 'UGC'],
    desafio: 'Sostener comunicación con creadores para tres marcas con personalidades distintas.',
    hice: 'Selección de perfiles, negociación de fees y condiciones, coordinación de campañas UGC y adaptación de campañas globales de Diageo al mercado local. Además capacité a nuevos ingresos del equipo.',
    resultado: 'Campañas en simultáneo y un equipo que pasó a trabajar de forma autónoma.',
  },
];

export const numeroDe = (indice: number) => String(indice + 1).padStart(2, '0');
