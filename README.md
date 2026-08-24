# Suárez Studio — suarezstudio.es

Portfolio de **Vanessa Suárez**, interiorismo arquitectónico en Cádiz. Sitio estático construido con **Astro**
(renderizado 100% en build, sin JavaScript de framework en cliente) para maximizar SEO y rendimiento.

## Stack

- **Astro 7** — HTML estático por página, imágenes optimizadas automáticamente a WebP con `astro:assets`.
- **@astrojs/sitemap** — genera `sitemap-index.xml` en cada build.
- **@emailjs/browser** — envía el formulario de contacto sin backend propio (mismas credenciales que ya
  funcionaban en el sitio anterior).
- Sin React/Vue/frameworks de UI: las interacciones (revelado al hacer scroll, header que cambia de color,
  acordeón de FAQ, botón flotante de WhatsApp) son JS vanilla mínimo o HTML nativo (`<details>`).

## Por qué Astro (SEO)

El sitio anterior (`vanessa-suarez-portfolio`) era una SPA de React sin SSR: todo el contenido se inyectaba por
JavaScript, lo que penaliza la indexación y el tiempo hasta contenido visible. Astro genera HTML completo por
página en build, así que cada URL es indexable desde la primera respuesta del servidor, sin depender de que el
crawler ejecute JS.

## Estructura

```
src/
  layouts/BaseLayout.astro   # <head> con meta, Open Graph, JSON-LD, canonical
  components/                # Header, Footer, WhatsAppButton, ProjectCard
  data/projects.ts           # Datos de los proyectos reales (CEA, Ajibe)
  pages/
    index.astro               # Página principal (hero, servicios, proyectos, proceso, estudio, FAQ, contacto)
    proyectos/[slug].astro     # Página de detalle por proyecto (SEO de cola larga)
    aviso-legal.astro          # Borrador — ver "Pendiente" abajo
    privacidad.astro           # Borrador
    cookies.astro              # Borrador
  assets/images/              # Fotos reales (optimizadas por Astro en build)
public/
  CNAME                      # www.suarezstudio.es
  fonts/                     # Plus Jakarta Sans autoalojada (subconjuntos del mockup)
  robots.txt, og-image.jpg
```

## Desarrollo local

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/ localmente
```

## Despliegue

GitHub Actions (`.github/workflows/deploy.yml`) construye y publica en **GitHub Pages** en cada push a `main`.
El dominio personalizado `www.suarezstudio.es` ya está verificado en GitHub (heredado del repo anterior,
`CrisMatJi/vanessa-suarez-portfolio`) y el DNS ya apunta a GitHub Pages — no hace falta tocar nada en el
proveedor del dominio. Solo falta, en **Settings → Pages** de este repo, confirmar que el dominio personalizado
sigue asignado aquí, y desactivar Pages en el repo antiguo para evitar conflicto.

## Contenido reutilizado del repo anterior

- Retrato de Vanessa (`src/assets/images/vanessa.jpeg`) y las fotos de los proyectos **CEA** y **AJIBE**
  (interiorismo corporativo y hotelero reales, con sus descripciones).
- Foto del patio de Ajibe como fondo del hero, en lugar de la imagen de stock genérica del mockup original.
- Teléfono real (+34 611 44 41 63), email real (vanessa.cal.sua@gmail.com) e Instagram/LinkedIn reales.
- Credenciales de EmailJS (`service_fu6s5ou` / `template_eezjrti`) que ya estaban en producción.

## Pendiente antes de publicar

- **Aviso legal / Privacidad / Cookies**: son borradores marcados con `noindex`. Hay que completarlos con los
  datos fiscales reales del estudio (NIF, domicilio) antes de indexarlos.
- **Sección "Antes y después"** del mockup original: no tenía fotos reales, así que se sustituyó por una
  galería de **Proyectos** con los trabajos reales de CEA y Ajibe. Si en el futuro hay pares antes/después
  reales, se puede añadir esa sección.
- **Versión en inglés**: el mockup referenciaba `/en/` pero no existía contenido; se ha quitado el `hreflang`
  hasta que se construya esa página.
- **Plantilla de EmailJS**: el formulario nuevo añade más campos (teléfono, localidad, servicio, tipo de
  cliente) que se concatenan en el campo `message` antes de enviarse. Si la plantilla de EmailJS solo muestra
  `{{message}}`, `{{from_name}}` y `{{reply_to}}`, no hay que tocar nada; si tiene placeholders específicos,
  conviene revisarla en el panel de EmailJS.
