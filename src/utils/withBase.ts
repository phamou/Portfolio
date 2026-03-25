/**
 * Internal links must use the configured `base` (e.g. /Portfolio/ on GitHub Pages).
 * Root-relative URLs like `/work` resolve to https://user.github.io/work, not .../Portfolio/work.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  if (path === '' || path === '/') {
    return normalizedBase;
  }
  const trimmed = path.startsWith('/') ? path.slice(1) : path;
  return `${normalizedBase}${trimmed}`;
}
