import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang in ui) return maybeLang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return ui[lang] ?? ui[defaultLang];
}

/** Prefixes a root-relative path (e.g. "/", "/#contacto", "/proyectos/cea/") with /en for the English locale. */
export function localizePath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  if (path === '/') return '/en/';
  return `/en${path}`;
}

/** Given the current pathname, returns the equivalent path in the other locale. */
export function getAlternatePath(pathname: string, currentLang: Lang): string {
  if (currentLang === 'en') {
    const stripped = pathname.replace(/^\/en\/?/, '/');
    return stripped === '' ? '/' : stripped;
  }
  return localizePath(pathname, 'en');
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}
