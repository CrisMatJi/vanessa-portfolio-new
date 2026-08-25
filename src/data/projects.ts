import type { ImageMetadata } from 'astro';

import ceaCover from '../assets/images/projects/cea/1-foto-grande-rincon-fotocall.jpeg';
import ceaOficina from '../assets/images/projects/cea/foto-grande-oficina.jpeg';
import ceaDescanso from '../assets/images/projects/cea/foto-area-descanso.jpeg';
import ceaFotocall from '../assets/images/projects/cea/fotocall-con-personas.jpeg';

import ajibePatio from '../assets/images/projects/ajibe/foto-patio.jpeg';
import ajibeSnack from '../assets/images/projects/ajibe/foto-zona-snack.jpeg';
import ajibeAseoPrivado from '../assets/images/projects/ajibe/foto-aseo-privado.jpeg';
import ajibeAseoPublico from '../assets/images/projects/ajibe/foto-aseo-publico.jpeg';

import elraticoFachada from '../assets/images/projects/elratico/75930e15-337f-4744-bd10-91957efe6274.png';
import elraticoPatio from '../assets/images/projects/elratico/5a3fd888-ff1c-4a9b-85ce-3bbd3c283be1.png';
import elraticoPasillo from '../assets/images/projects/elratico/2e947ea4-2118-4cbf-998a-ec98151ee241.png';
import elraticoVentanal from '../assets/images/projects/elratico/81b6888a-d2b6-4f88-b496-23b8502734de.png';
import elraticoCarros from '../assets/images/projects/elratico/1f1b1152-67eb-43f1-b702-e5eb68d68934.png';
import elraticoSofa from '../assets/images/projects/elratico/Captura de pantalla 2026-06-06 a las 22.10.25.png';
import elraticoLavadoras from '../assets/images/projects/elratico/Captura de pantalla 2026-06-06 a las 13.15.05.png';
import elraticoAseos from '../assets/images/projects/elratico/Captura de pantalla 2026-06-15 a las 18.00.30.png';

export interface ProjectImage {
  src: ImageMetadata;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  cover: ImageMetadata;
  coverAlt: string;
  images: ProjectImage[];
}

export const projects: Project[] = [
  {
    slug: 'cea',
    title: 'CEA',
    category: 'Interiorismo corporativo',
    subtitle: 'Confederación de Empresarios de Andalucía',
    description:
      'El proyecto parte de una marca corporativa ya consolidada: la identidad visual, los valores institucionales y las directrices de la organización actúan como guía y límite creativo. El trabajo no consiste en diseñar desde cero, sino en escuchar, interpretar y trasladar con precisión ese lenguaje al espacio físico. El resultado es un interiorismo coherente con la marca, adaptado a sus necesidades operativas y alineado con la política e imagen que la Confederación proyecta hacia el exterior.',
    cover: ceaCover,
    coverAlt: 'Rincón de fotocall corporativo del proyecto CEA',
    images: [
      {
        src: ceaCover,
        alt: 'Rincón de fotocall corporativo, proyecto CEA',
        caption:
          'La identidad corporativa de la CEA actúa como eje vertebrador de cada decisión de diseño. La paleta cromática institucional, la selección de materiales y el tratamiento de los acabados responden con rigor a la imagen de la entidad, generando ambientes que refuerzan el sentido de pertenencia y la solidez representativa de la Confederación.',
      },
      {
        src: ceaOficina,
        alt: 'Zona de oficina abierta, proyecto CEA',
        caption:
          'La claraboya original del edificio se convierte en el recurso arquitectónico central de la intervención. Se potencia su singularidad para maximizar la entrada de luz natural, generando ambientes de trabajo diáfanos y de carácter propio. La preexistencia del inmueble no se enmascara, sino que se integra como un activo del diseño, dotando a los espacios de autenticidad y memoria.',
      },
      { src: ceaDescanso, alt: 'Área de descanso, proyecto CEA' },
      { src: ceaFotocall, alt: 'Fotocall corporativo con personas, proyecto CEA' },
    ],
  },
  {
    slug: 'ajibe',
    title: 'AJIBE',
    category: 'Interiorismo hotelero',
    subtitle: 'Rehabilitación de espacio hotelero en Andalucía',
    description:
      'En este proyecto el patio interior era, en origen, un espacio residual sin uso definido: un vacío sin carácter que interrumpía la coherencia del conjunto. La intervención lo transforma en el corazón del proyecto. Recuperado desde una voluntad creativa y sensible, se convierte en el germen estético y emocional del alojamiento; el lugar desde el que irradia la esencia del resto de los espacios. A partir de él, cada estancia encuentra su identidad.',
    cover: ajibePatio,
    coverAlt: 'Patio interior recuperado, proyecto Ajibe',
    images: [
      {
        src: ajibePatio,
        alt: 'Patio interior recuperado, proyecto Ajibe',
        caption:
          'La recuperación del patio redefine la experiencia del establecimiento desde la llegada. La intervención trabaja con la luz natural, la vegetación mediterránea y los materiales propios de la arquitectura andaluza para componer un ambiente sereno y singular que invita a detenerse. Este espacio es la declaración de intenciones de todo el proyecto.',
      },
      { src: ajibeSnack, alt: 'Zona de snack, proyecto Ajibe' },
      { src: ajibeAseoPrivado, alt: 'Aseo privado, proyecto Ajibe' },
      { src: ajibeAseoPublico, alt: 'Aseo público, proyecto Ajibe' },
    ],
  },
  {
    slug: 'el-ratico',
    title: 'EL RATICO',
    category: 'Interiorismo comercial',
    subtitle: 'Lavandería, café y coworking',
    description:
      'Un espacio pensado para hacer más fácil —y agradable— la vida de quienes pasan por allí. Cálido, funcional y, sobre todo, útil: un lugar donde el tiempo de espera se convierte en un ratico para trabajar, descansar o simplemente estar. El proyecto se integra en el ritmo de la ciudad y le da un giro a través del color, la luz y el mobiliario.',
    cover: elraticoFachada,
    coverAlt: 'Fachada de El Ratico, lavandería, café y coworking',
    images: [
      {
        src: elraticoFachada,
        alt: 'Fachada de El Ratico de noche, con el rótulo luminoso',
        caption:
          'La fachada trabaja como una carta de presentación: luz cálida, el rótulo de El Ratico y la promesa del propio nombre —lava, espera, trabaja, disfruta— visibles desde la calle antes incluso de entrar.',
      },
      {
        src: elraticoPatio,
        alt: 'Patio interior con lucernario, sofá y el letrero de neón El Ratico',
        caption:
          'El patio interior conserva el lucernario original del edificio y se convierte en el corazón del local: un espacio de doble altura donde la luz natural y el verde marcan el ritmo de la espera.',
      },
      { src: elraticoPasillo, alt: 'Pasillo con puertas doradas acristaladas, proyecto El Ratico' },
      { src: elraticoVentanal, alt: 'Rincón con ventanal a la calle y taburetes, proyecto El Ratico' },
      { src: elraticoCarros, alt: 'Zona de carritos con papel pintado de limones, proyecto El Ratico' },
      { src: elraticoSofa, alt: 'Zona de descanso con sofá a rayas, proyecto El Ratico' },
      { src: elraticoLavadoras, alt: 'Pared de lavadoras y secadoras en amarillo, proyecto El Ratico' },
      { src: elraticoAseos, alt: 'Aseos con azulejo verde, proyecto El Ratico' },
    ],
  },
];
