import type { Lang } from './ui';
import type { Project, ProjectImage } from '../data/projects';

interface LocalizedImageText {
  alt: string;
  caption?: string;
}

interface LocalizedProjectText {
  title: string;
  category: string;
  subtitle: string;
  description: string;
  coverAlt: string;
  images: LocalizedImageText[];
}

export const projectTranslations: Record<Lang, Record<string, LocalizedProjectText>> = {
  es: {
    cea: {
      title: 'CEA',
      category: 'Interiorismo corporativo',
      subtitle: 'Confederación de Empresarios de Andalucía',
      description:
        'El proyecto parte de una marca corporativa ya consolidada: la identidad visual, los valores institucionales y las directrices de la organización actúan como guía y límite creativo. El trabajo no consiste en diseñar desde cero, sino en escuchar, interpretar y trasladar con precisión ese lenguaje al espacio físico. El resultado es un interiorismo coherente con la marca, adaptado a sus necesidades operativas y alineado con la política e imagen que la Confederación proyecta hacia el exterior.',
      coverAlt: 'Rincón de fotocall corporativo del proyecto CEA',
      images: [
        {
          alt: 'Rincón de fotocall corporativo, proyecto CEA',
          caption:
            'La identidad corporativa de la CEA actúa como eje vertebrador de cada decisión de diseño. La paleta cromática institucional, la selección de materiales y el tratamiento de los acabados responden con rigor a la imagen de la entidad, generando ambientes que refuerzan el sentido de pertenencia y la solidez representativa de la Confederación.',
        },
        {
          alt: 'Zona de oficina abierta, proyecto CEA',
          caption:
            'La claraboya original del edificio se convierte en el recurso arquitectónico central de la intervención. Se potencia su singularidad para maximizar la entrada de luz natural, generando ambientes de trabajo diáfanos y de carácter propio. La preexistencia del inmueble no se enmascara, sino que se integra como un activo del diseño, dotando a los espacios de autenticidad y memoria.',
        },
        { alt: 'Área de descanso, proyecto CEA' },
        { alt: 'Fotocall corporativo con personas, proyecto CEA' },
      ],
    },
    ajibe: {
      title: 'AJIBE',
      category: 'Interiorismo hotelero',
      subtitle: 'Rehabilitación de espacio hotelero en Andalucía',
      description:
        'En este proyecto el patio interior era, en origen, un espacio residual sin uso definido: un vacío sin carácter que interrumpía la coherencia del conjunto. La intervención lo transforma en el corazón del proyecto. Recuperado desde una voluntad creativa y sensible, se convierte en el germen estético y emocional del alojamiento; el lugar desde el que irradia la esencia del resto de los espacios. A partir de él, cada estancia encuentra su identidad.',
      coverAlt: 'Patio interior recuperado, proyecto Ajibe',
      images: [
        {
          alt: 'Patio interior recuperado, proyecto Ajibe',
          caption:
            'La recuperación del patio redefine la experiencia del establecimiento desde la llegada. La intervención trabaja con la luz natural, la vegetación mediterránea y los materiales propios de la arquitectura andaluza para componer un ambiente sereno y singular que invita a detenerse. Este espacio es la declaración de intenciones de todo el proyecto.',
        },
        { alt: 'Zona de snack, proyecto Ajibe' },
        { alt: 'Aseo privado, proyecto Ajibe' },
        { alt: 'Aseo público, proyecto Ajibe' },
      ],
    },
    'el-ratico': {
      title: 'EL RATICO',
      category: 'Interiorismo comercial',
      subtitle: 'Lavandería, café y coworking',
      description:
        'Un espacio pensado para hacer más fácil —y agradable— la vida de quienes pasan por allí. Cálido, funcional y, sobre todo, útil: un lugar donde el tiempo de espera se convierte en un ratico para trabajar, descansar o simplemente estar. El proyecto se integra en el ritmo de la ciudad y le da un giro a través del color, la luz y el mobiliario.',
      coverAlt: 'Fachada de El Ratico, lavandería, café y coworking',
      images: [
        {
          alt: 'Fachada de El Ratico de noche, con el rótulo luminoso',
          caption:
            'La fachada trabaja como una carta de presentación: luz cálida, el rótulo de El Ratico y la promesa del propio nombre —lava, espera, trabaja, disfruta— visibles desde la calle antes incluso de entrar.',
        },
        {
          alt: 'Patio interior con lucernario, sofá y el letrero de neón El Ratico',
          caption:
            'El patio interior conserva el lucernario original del edificio y se convierte en el corazón del local: un espacio de doble altura donde la luz natural y el verde marcan el ritmo de la espera.',
        },
        { alt: 'Pasillo con puertas doradas acristaladas, proyecto El Ratico' },
        { alt: 'Rincón con ventanal a la calle y taburetes, proyecto El Ratico' },
        { alt: 'Zona de carritos con papel pintado de limones, proyecto El Ratico' },
        { alt: 'Zona de descanso con sofá a rayas, proyecto El Ratico' },
        { alt: 'Pared de lavadoras y secadoras en amarillo, proyecto El Ratico' },
        { alt: 'Aseos con azulejo verde, proyecto El Ratico' },
      ],
    },
  },
  en: {
    cea: {
      title: 'CEA',
      category: 'Corporate interior design',
      subtitle: 'Confederación de Empresarios de Andalucía',
      description:
        "The project starts from an already-established corporate brand: the visual identity, institutional values and organisational guidelines act as both guide and creative boundary. The work isn't about designing from scratch, but about listening, interpreting and precisely translating that language into physical space. The result is an interior design coherent with the brand, adapted to its operational needs and aligned with the image the Confederation projects to the outside world.",
      coverAlt: 'Corporate photocall corner, CEA project',
      images: [
        {
          alt: 'Corporate photocall corner, CEA project',
          caption:
            "CEA's corporate identity acts as the backbone of every design decision. The institutional colour palette, material selection and finish treatments respond rigorously to the organisation's image, creating environments that reinforce a sense of belonging and the Confederation's representative solidity.",
        },
        {
          alt: 'Open office area, CEA project',
          caption:
            "The building's original skylight becomes the central architectural resource of the intervention. Its singularity is enhanced to maximise natural light, creating open, characterful work environments. The building's pre-existing features aren't masked but integrated as a design asset, giving the spaces authenticity and memory.",
        },
        { alt: 'Break area, CEA project' },
        { alt: 'Corporate photocall with people, CEA project' },
      ],
    },
    ajibe: {
      title: 'AJIBE',
      category: 'Hospitality interior design',
      subtitle: 'Renovation of a hospitality space in Andalusia',
      description:
        "In this project, the interior courtyard was originally a residual space with no defined use — a characterless void that broke the coherence of the whole. The intervention transforms it into the heart of the project. Recovered through a creative, sensitive approach, it becomes the aesthetic and emotional seed of the property — the place from which the essence of every other space radiates. From it, each room finds its identity.",
      coverAlt: 'Recovered interior courtyard, Ajibe project',
      images: [
        {
          alt: 'Recovered interior courtyard, Ajibe project',
          caption:
            "Recovering the courtyard redefines the guest experience from the moment of arrival. The intervention works with natural light, Mediterranean planting and materials typical of Andalusian architecture to create a serene, distinctive atmosphere that invites you to pause. This space is the whole project's statement of intent.",
        },
        { alt: 'Snack area, Ajibe project' },
        { alt: 'Private bathroom, Ajibe project' },
        { alt: 'Public bathroom, Ajibe project' },
      ],
    },
    'el-ratico': {
      title: 'EL RATICO',
      category: 'Commercial interior design',
      subtitle: 'Laundromat, café and coworking space',
      description:
        'A space designed to make life easier — and more pleasant — for the people who pass through it. Warm, functional and, above all, useful: a place where waiting time becomes a little moment to work, rest or simply be. The project fits into the rhythm of the city and gives it a twist through colour, light and furniture.',
      coverAlt: 'El Ratico facade, laundromat, café and coworking space',
      images: [
        {
          alt: 'El Ratico facade at night, with the illuminated sign',
          caption:
            'The facade works as a calling card: warm light, the El Ratico sign and the promise of the name itself — wash, wait, work, enjoy — visible from the street before you even step in.',
        },
        {
          alt: 'Interior courtyard with skylight, sofa and El Ratico neon sign',
          caption:
            "The interior courtyard keeps the building's original skylight and becomes the heart of the space: a double-height area where natural light and greenery set the pace of the wait.",
        },
        { alt: 'Corridor with glazed gold doors, El Ratico project' },
        { alt: 'Corner with street-facing window and stools, El Ratico project' },
        { alt: 'Trolley area with lemon-print wallpaper, El Ratico project' },
        { alt: 'Rest area with striped sofa, El Ratico project' },
        { alt: 'Wall of yellow washers and dryers, El Ratico project' },
        { alt: 'Restrooms with green tile, El Ratico project' },
      ],
    },
  },
};

export function getLocalizedProjects(projects: Project[], lang: Lang): Project[] {
  return projects.map((project) => {
    const t = projectTranslations[lang][project.slug];
    return {
      ...project,
      title: t.title,
      category: t.category,
      subtitle: t.subtitle,
      description: t.description,
      coverAlt: t.coverAlt,
      images: project.images.map((img, i) => localizeImage(img, t.images[i])),
    };
  });
}

export function getLocalizedProject(project: Project, lang: Lang): Project {
  const t = projectTranslations[lang][project.slug];
  return {
    ...project,
    title: t.title,
    category: t.category,
    subtitle: t.subtitle,
    description: t.description,
    coverAlt: t.coverAlt,
    images: project.images.map((img, i) => localizeImage(img, t.images[i])),
  };
}

function localizeImage(img: ProjectImage, text: LocalizedImageText): ProjectImage {
  return { ...img, alt: text.alt, caption: text.caption };
}
