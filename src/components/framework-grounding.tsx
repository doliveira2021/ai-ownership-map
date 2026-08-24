import { Link } from "@tanstack/react-router";
import { ArrowRight, Library } from "lucide-react";
import { ASRA_FRAMEWORK_BASIS } from "@/lib/asra-framework-basis";
import { useI18n } from "@/lib/i18n";

function FrameworkChips() {
  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {ASRA_FRAMEWORK_BASIS.map((entry) => (
        <li key={entry.name}>
          <Link
            to="/frameworks"
            hash={entry.id}
            title={entry.longName}
            className="inline-block rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
          >
            {entry.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function LibraryLink() {
  const { t } = useI18n();
  return (
    <Link
      to="/frameworks"
      className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary underline underline-offset-4"
    >
      {t("library.link")}
      <ArrowRight className="size-3.5" />
    </Link>
  );
}


/** Concise credibility block shown near the start of the assessment. */
export function FrameworkGroundingCompact() {
  const { t } = useI18n();
  return (
    <section className="panel mt-8 p-5" aria-labelledby="framework-grounding-compact">
      <div className="flex items-center gap-2">
        <Library className="size-4 text-primary" />
        <p className="label-mono">{t("method.eyebrow")}</p>
      </div>
      <h2 id="framework-grounding-compact" className="mt-1 text-lg font-semibold">
        {t("method.title")}
      </h2>
      <p className="mt-2 max-w-3xl text-sm text-muted-foreground">{t("method.body")}</p>
      <p className="mt-2 max-w-3xl text-sm text-muted-foreground">{t("method.genaiProfile")}</p>
      <FrameworkChips />
      <LibraryLink />
      <p className="mt-3 text-xs text-muted-foreground">{t("method.disclaimer")}</p>
    </section>
  );
}

/** Expanded methodology / framework-alignment block shown on the results page. */
export function FrameworkGroundingFull() {
  const { t } = useI18n();
  const points = [
    t("method.point.notSingle"),
    t("method.point.synthesis"),
    t("method.point.traceability"),
    t("method.point.practicesSeparate"),
    t("method.point.technologySeparate"),
  ];

  return (
    <section className="panel mt-10 p-5" aria-labelledby="framework-grounding-full">
      <div className="flex items-center gap-2">
        <Library className="size-4 text-primary" />
        <p className="label-mono">{t("method.eyebrow")}</p>
      </div>
      <h2 id="framework-grounding-full" className="mt-1 text-xl font-semibold">
        {t("method.title")}
      </h2>
      <p className="mt-2 max-w-3xl text-sm text-muted-foreground">{t("method.body")}</p>
      <p className="mt-2 max-w-3xl text-sm text-muted-foreground">{t("method.genaiProfile")}</p>
      <FrameworkChips />
      <LibraryLink />

      <h3 className="mt-5 text-sm font-semibold">{t("method.how.title")}</h3>
      <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
        {points.map((point) => (
          <li key={point}>· {point}</li>
        ))}
      </ul>

      <p className="mt-4 text-xs text-muted-foreground">{t("method.disclaimer")}</p>
      <p className="mt-2 text-xs text-muted-foreground">{t("method.assessmentDisclaimer")}</p>
      <p className="mt-2 text-xs text-muted-foreground">{t("results.method.body")}</p>
    </section>
  );
}
