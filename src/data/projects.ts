import type { ImageMetadata } from 'astro';

import ceaCover from '../assets/images/projects/cea/1-foto-grande-rincon-fotocall.jpeg';
import ceaOficina from '../assets/images/projects/cea/foto-grande-oficina.jpeg';
import ceaDescanso from '../assets/images/projects/cea/foto-area-descanso.jpeg';
import ceaFotocall from '../assets/images/projects/cea/fotocall-con-personas.jpeg';

import ajibePatio from '../assets/images/projects/ajibe/foto-patio.jpeg';
import ajibeRecepcion from '../assets/images/projects/ajibe/foto-recepcion.jpeg';
import ajibeHabitacion from '../assets/images/projects/ajibe/foto-habitacion.jpeg';
import ajibeSnack from '../assets/images/projects/ajibe/foto-zona-snack.jpeg';
import ajibeAseoPrivado from '../assets/images/projects/ajibe/foto-aseo-privado.jpeg';
import ajibeAseoPublico from '../assets/images/projects/ajibe/foto-aseo-publico.jpeg';

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
      {
        src: ajibeRecepcion,
        alt: 'Recepción del alojamiento, proyecto Ajibe',
        caption:
          'La recepción extiende el lenguaje del patio hacia el interior, estableciendo una transición fluida entre el acceso y las estancias privadas. La calidez de los materiales y el tratamiento cuidado de la iluminación crean una atmósfera acogedora que anticipa la calidad del resto del alojamiento.',
      },
      { src: ajibeHabitacion, alt: 'Habitación, proyecto Ajibe' },
      { src: ajibeSnack, alt: 'Zona de snack, proyecto Ajibe' },
      { src: ajibeAseoPrivado, alt: 'Aseo privado, proyecto Ajibe' },
      { src: ajibeAseoPublico, alt: 'Aseo público, proyecto Ajibe' },
    ],
  },
];
