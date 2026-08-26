import { LOCALES, type Locale } from "./types";

/**
 * Locale is stored in a cookie (not only localStorage) so the server render
 * already emits the selected language. Without it, SSR always produced English
 * and the UI only switched after hydration.
 */
export const LOCALE_COOKIE = "asra-locale";
export const LOCALE_STORAGE_KEY = "asra-locale";

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

/** Parse a `document.cookie` / `Cookie:` header string and return the stored locale. */
export function readLocaleFromCookieString(cookieString: string | null | undefined): Locale | null {
  if (!cookieString) return null;
  for (const part of cookieString.split(";")) {
    const [rawName, ...rest] = part.split("=");
    if (rawName?.trim() !== LOCALE_COOKIE) continue;
    const value = decodeURIComponent(rest.join("=").trim());
    if (isLocale(value)) return value;
  }
  return null;
}

export function serializeLocaleCookie(locale: Locale): string {
  const oneYear = 60 * 60 * 24 * 365;
  return `${LOCALE_COOKIE}=${encodeURIComponent(locale)}; Path=/; Max-Age=${oneYear}; SameSite=Lax`;
}
