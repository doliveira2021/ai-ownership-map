import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Library } from "lucide-react";
import { Shell } from "@/components/shell";
import { ASRA_FRAMEWORK_BASIS } from "@/lib/asra-framework-basis";
import { useI18n } from "@/lib/i18n";
import type { UiKey } from "@/lib/i18n/ui/en";

const TITLE = "Framework Library | ASRA";
const DESCRIPTION =
  "Reference library of the security, risk, governance and AI assurance frameworks that ground the ASRA assessment methodology, with links to official sources.";

export const Route = createFileRoute("/frameworks")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FrameworkLibraryPage,
});

function FrameworkLibraryPage() {
  const { t } = useI18n();

  return (
    <Shell>
      <div className="flex items-center gap-2">
        <Library className="size-4 text-primary" />
        <p className="label-mono">{t("library.eyebrow")}</p>
      </div>
      <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight">
        {t("library.title")}
      </h1>
      <p className="mt-3 max-w-3xl text-sm text-muted-foreground">{t("library.intro")}</p>
      <p className="mt-2 max-w-3xl text-xs text-muted-foreground">{t("library.copyright")}</p>
      <p className="mt-2 max-w-3xl text-xs text-muted-foreground">{t("library.paywallNote")}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {ASRA_FRAMEWORK_BASIS.map((entry) => (
          <section
            key={entry.id}
            id={entry.id}
            className="panel scroll-mt-24 p-5"
            aria-labelledby={`${entry.id}-title`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <h2 id={`${entry.id}-title`} className="font-display text-lg font-semibold">
                {entry.name}
              </h2>
              <span className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted-foreground">
                {entry.mapped ? t("library.typeMapped") : t("library.typeStructural")}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{entry.longName}</p>

            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="label-mono">{t("library.organization")}</dt>
                <dd className="mt-0.5">{entry.organization}</dd>
              </div>
              {entry.version && (
                <div>
                  <dt className="label-mono">{t("library.version")}</dt>
                  <dd className="mt-0.5">{entry.version}</dd>
                </div>
              )}
              <div>
                <dt className="label-mono">{t("library.purpose")}</dt>
                <dd className="mt-0.5 text-muted-foreground">
                  {t(`framework.${entry.id}.purpose` as UiKey)}
                </dd>
              </div>
              <div>
                <dt className="label-mono">{t("library.asraUse")}</dt>
                <dd className="mt-0.5 text-muted-foreground">{t(`framework.${entry.id}.use` as UiKey)}</dd>
              </div>
            </dl>

            <a
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 rounded border border-border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-secondary"
            >
              <ExternalLink className="size-3.5" />
              {t("library.viewSource")}
            </a>
          </section>
        ))}
      </div>

      <p className="mt-8 max-w-4xl text-xs text-muted-foreground">{t("library.disclaimer")}</p>
    </Shell>
  );
}
