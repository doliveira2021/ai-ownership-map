import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { readLocaleFromCookieString } from "@/lib/i18n/locale-cookie";
import type { Locale } from "@/lib/i18n/types";

/**
 * Reads the locale cookie during SSR so the very first painted HTML is already
 * in the visitor's selected language.
 */
export const getRequestLocale = createServerFn({ method: "GET" }).handler(async (): Promise<Locale> => {
  return readLocaleFromCookieString(getRequestHeader("cookie")) ?? "en";
});
