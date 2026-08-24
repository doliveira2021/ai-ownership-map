import { useMemo, useState } from "react";
import { BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ASRA_INDUSTRY_PRACTICES_VERSION,
  sortPracticesForRecommendations,
  type IndustryPractice,
} from "@/lib/asra-industry-practices";
import { useI18n } from "@/lib/i18n";

const INITIAL_VISIBLE = 4;

function PracticeCard({ practice }: { practice: IndustryPractice }) {
  const { t, content } = useI18n();
  const localized = content.practice(practice.practiceId);
  const domains = practice.relatedDomains.map((id) => content.domain(id).short).join(" · ");

  return (
    <article className="panel p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="label-mono">
            {t("practices.organization")}: {practice.organizations.join(", ")}
          </p>
          <h3 className="mt-1 font-display text-base font-semibold">{localized.title}</h3>
        </div>
        <span className="rounded border border-border px-2 py-1 text-xs text-muted-foreground">
          {content.practiceCategory(practice.practiceCategory)}
        </span>
      </div>

      <p className="mt-3 text-sm text-muted-foreground">
        <span className="text-foreground">{t("practices.publicPractice")}: </span>
        {localized.summary}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        <span className="text-foreground">{t("practices.implication")}: </span>
        {localized.implication}
      </p>

      <div className="mt-4 grid gap-3 text-xs text-muted-foreground md:grid-cols-2">
        <div>
          <p className="label-mono">{t("practices.related")}</p>
          <p className="mt-1">{domains}</p>
          <p className="mt-1 font-mono">{practice.relatedRecommendationIds.join(" · ")}</p>
        </div>
        <div>
          <p className="label-mono">{t("practices.sourceDate")}</p>
          <p className="mt-1 font-mono">{practice.sourceDate}</p>
          <p className="mt-1 font-mono">
            {t("practices.lastReviewed")}: {practice.lastReviewed}
          </p>
        </div>
      </div>

      <a
        href={practice.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary underline underline-offset-4"
      >
        <ExternalLink className="size-3.5" />
        {t("practices.viewSource")} — {practice.sourceTitle}
      </a>
    </article>
  );
}

export function IndustryPracticesSection({
  recommendationIds,
}: {
  recommendationIds: string[];
}) {
  const { t } = useI18n();
  const [expanded, setExpanded] = useState(false);

  const ordered = useMemo(
    () => sortPracticesForRecommendations(recommendationIds),
    [recommendationIds],
  );
  const visible = expanded ? ordered : ordered.slice(0, INITIAL_VISIBLE);

  return (
    <section className="mt-10" aria-labelledby="industry-practices-title">
      <div className="flex items-center gap-2">
        <BookOpen className="size-4 text-primary" />
        <p className="label-mono">{t("practices.eyebrow")}</p>
      </div>
      <h2 id="industry-practices-title" className="mt-1 text-xl font-semibold">
        {t("practices.title")}
      </h2>
      <p className="mt-1 max-w-3xl text-sm text-muted-foreground">{t("practices.lead")}</p>
      <p className="mt-3 max-w-3xl rounded border border-border bg-secondary/40 p-3 text-xs text-muted-foreground">
        {t("practices.disclaimer")}
      </p>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {visible.map((practice) => (
          <PracticeCard key={practice.practiceId} practice={practice} />
        ))}
      </div>

      {ordered.length > INITIAL_VISIBLE && (
        <Button
          type="button"
          variant="secondary"
          className="mt-4"
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? t("practices.viewLess") : t("practices.viewMore")}
        </Button>
      )}

      <p className="mt-3 font-mono text-[11px] text-muted-foreground">
        {t("practices.version", { version: ASRA_INDUSTRY_PRACTICES_VERSION })}
      </p>
    </section>
  );
}
