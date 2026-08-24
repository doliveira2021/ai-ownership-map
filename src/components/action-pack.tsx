import { useMemo, useState } from "react";
import { CalendarRange, ChevronDown, Download, Layers, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  buildNinetyDayPlan,
  resolveActionPacks,
  type ActionPhase,
  type QuarterPhase,
  type ResolvedActionPack,
  type StackBucket,
} from "@/lib/asra-action-packs";
import type { AsraRecommendation } from "@/lib/asra-recommendations";
import type { AssessmentContext } from "@/lib/asra-scoring";
import {
  TECHNOLOGY_CATALOG_LAST_REVIEWED,
  TECHNOLOGY_CATALOG_VERSION,
} from "@/lib/asra-technology-catalog";
import { buildTrackerPackage, downloadTrackerPackage } from "@/lib/asra-export";
import { useI18n } from "@/lib/i18n";

function TaskList({
  pack,
  phase,
  label,
}: {
  pack: ResolvedActionPack;
  phase: ActionPhase;
  label: string;
}) {
  const { content } = useI18n();
  const tasks = pack.tasks.filter((task) => task.phase === phase);
  if (!tasks.length) return null;
  return (
    <div>
      <p className="label-mono">{label}</p>
      <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <span className="text-primary">·</span>
            <span>{content.task(pack.recommendationId, task.id)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const BUCKET_ORDER: StackBucket[] = ["use-existing", "extend", "evaluate"];

type LooseTranslate = (key: string, params?: Record<string, string | number>) => string;

export function ActionPackPanel({ pack }: { pack: ResolvedActionPack }) {
  const { t: translate, content } = useI18n();
  const t = translate as LooseTranslate;
  const [open, setOpen] = useState(false);
  const localized = content.recommendation(pack.recommendationId);
  const packContent = content.actionPack(pack.recommendationId);

  const meta: { label: string; value: string }[] = [
    { label: t("pack.priority"), value: content.level("priority", pack.priority) },
    { label: t("pack.targetMaturity"), value: `${pack.targetMaturity} / 5` },
    { label: t("pack.horizon"), value: content.level("horizon", pack.horizon) },
    { label: t("pack.effort"), value: t(`pack.level.${pack.effort}`) },
    { label: t("pack.businessImpact"), value: t(`pack.level.${pack.businessImpact}`) },
    { label: t("pack.urgency"), value: t(`pack.urgency.${pack.urgency}`) },
  ];

  const buckets = BUCKET_ORDER.map((bucket) => ({
    bucket,
    items: pack.capabilities.filter((capability) => capability.bucket === bucket),
  })).filter((group) => group.items.length > 0);

  return (
    <div className="mt-4 border-t border-border/60 pt-4">
      <Button
        variant="ghost"
        size="sm"
        className="gap-2 px-2"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
        {open ? t("pack.hide") : t("pack.view")}
      </Button>

      {open && (
        <div className="mt-4 space-y-5">
          <p className="label-mono">{t("pack.eyebrow")}</p>

          {packContent?.whyItMatters && (
            <div>
              <p className="label-mono">{t("pack.why")}</p>
              <p className="mt-1 text-sm text-muted-foreground">{packContent.whyItMatters}</p>
            </div>
          )}

          <dl className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {meta.map((item) => (
              <div key={item.label} className="rounded-lg bg-muted/50 p-3">
                <dt className="label-mono">{item.label}</dt>
                <dd className="mt-1 text-sm font-medium">{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="grid gap-5 md:grid-cols-2">
            <TaskList pack={pack} phase="7d" label={t("pack.first7")} />
            <TaskList pack={pack} phase="30d" label={t("pack.plan30")} />
            <TaskList pack={pack} phase="60d" label={t("pack.plan60")} />
            <TaskList pack={pack} phase="90d" label={t("pack.plan90")} />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <p className="label-mono">{t("pack.owners")}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {localized.suggestedOwners.join(" · ")}
              </p>
            </div>
            {packContent?.dependencies.length ? (
              <div>
                <p className="label-mono">{t("pack.dependencies")}</p>
                <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                  {packContent.dependencies.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div>
              <p className="label-mono">{t("pack.evidence")}</p>
              <p className="mt-1 text-sm text-muted-foreground">{localized.evidence.join(" · ")}</p>
            </div>
            <div>
              <p className="label-mono">{t("pack.kpis")}</p>
              <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                {pack.kpis.map((kpi) => (
                  <li key={kpi.id}>· {content.kpi(pack.recommendationId, kpi.id)}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-xl bg-muted/40 p-4">
            <div className="flex items-center gap-2">
              <Layers className="size-4 text-primary" />
              <p className="label-mono">{t("pack.tech.title")}</p>
            </div>

            <p className="mt-3 label-mono">{t("pack.tech.capabilities")}</p>
            <ul className="mt-1 space-y-2 text-sm text-muted-foreground">
              {pack.capabilities.map((capability) => {
                const info = content.capability(capability.capabilityId);
                return (
                  <li key={capability.capabilityId}>
                    <span className="text-foreground">
                      {content.technologyCategory(capability.category)}
                    </span>{" "}
                    — {info.description}
                    {info.notes ? (
                      <span className="block text-xs italic">{info.notes}</span>
                    ) : null}
                  </li>
                );
              })}
            </ul>

            <p className="mt-3 label-mono">{t("pack.tech.categories")}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {pack.categories.map((id) => content.technologyCategory(id)).join(" · ")}
            </p>

            <p className="mt-3 label-mono">{t("pack.tech.providers")}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {pack.exampleProviders.join(" · ")}
            </p>

            {buckets.length > 0 && (
              <div className="mt-4">
                <p className="label-mono">{t("pack.stack.title")}</p>
                <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                  {buckets.map((group) => (
                    <li key={group.bucket}>
                      <span className="text-foreground">{t(`pack.stack.${group.bucket}`)}</span>:{" "}
                      {group.items
                        .map((item) => content.technologyCategory(item.category))
                        .join(" · ")}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="mt-4 text-xs text-muted-foreground">{t("pack.tech.disclaimer")}</p>
            <p className="mt-1 font-mono text-[11px] text-muted-foreground">
              {t("pack.tech.catalog", {
                version: TECHNOLOGY_CATALOG_VERSION,
                reviewed: TECHNOLOGY_CATALOG_LAST_REVIEWED,
              })}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

const PHASE_LABELS: Record<QuarterPhase, string> = {
  "0-30": "plan90.p1",
  "31-60": "plan90.p2",
  "61-90": "plan90.p3",
};

export function NinetyDayPlan({ packs }: { packs: ResolvedActionPack[] }) {
  const { t: translate, content } = useI18n();
  const t = translate as LooseTranslate;
  const plan = useMemo(() => buildNinetyDayPlan(packs), [packs]);

  return (
    <section className="mt-10">
      <div className="flex items-center gap-2">
        <CalendarRange className="size-4 text-primary" />
        <p className="label-mono">{t("plan90.eyebrow")}</p>
      </div>
      <h2 className="mt-1 text-xl font-semibold">{t("plan90.title")}</h2>
      <p className="mt-1 max-w-3xl text-sm text-muted-foreground">{t("plan90.lead")}</p>
      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        {(Object.keys(PHASE_LABELS) as QuarterPhase[]).map((phase) => (
          <div key={phase} className="panel p-5">
            <p className="font-display font-semibold">{t(PHASE_LABELS[phase])}</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {plan[phase].length ? (
                plan[phase].map((item) => (
                  <li key={item.taskId}>
                    · {content.task(item.recommendationId, item.taskId)}
                    <span className="ml-1 font-mono text-[11px] text-primary/70">
                      {item.recommendationId}
                    </span>
                  </li>
                ))
              ) : (
                <li>{t("plan90.empty")}</li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ExportTrackerPanel({
  packs,
  recommendations,
  context,
}: {
  packs: ResolvedActionPack[];
  recommendations: AsraRecommendation[];
  context: AssessmentContext;
}) {
  const { t: translate, content, locale } = useI18n();
  const t = translate as LooseTranslate;
  const [busy, setBusy] = useState(false);

  async function handleExport() {
    setBusy(true);
    try {
      const files = buildTrackerPackage({
        packs,
        recommendations,
        context,
        locale,
        tr: {
          t,
          recommendation: content.recommendation,
          actionPack: content.actionPack,
          task: content.task,
          kpi: content.kpi,
          domain: content.domain,
          technologyCategory: content.technologyCategory,
          capability: content.capability,
        },
      });
      await downloadTrackerPackage(files);
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="panel mt-10 p-5">
      <div className="flex items-center gap-2">
        <ShieldAlert className="size-4 text-primary" />
        <p className="label-mono">{t("export.title")}</p>
      </div>
      <p className="mt-2 max-w-3xl text-sm text-muted-foreground">{t("export.lead")}</p>

      <div className="mt-4 rounded-xl bg-muted/40 p-4">
        <p className="label-mono">{t("export.privacyTitle")}</p>
        <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
          <li>· {t("export.privacy1")}</li>
          <li>· {t("export.privacy2")}</li>
          <li>· {t("export.privacy3")}</li>
        </ul>
      </div>

      <Button className="mt-4 gap-2" onClick={handleExport} disabled={busy || packs.length === 0}>
        <Download className="size-4" />
        {t("export.button")}
      </Button>
      {packs.length === 0 && (
        <p className="mt-2 text-sm text-muted-foreground">{t("export.empty")}</p>
      )}
    </section>
  );
}

export function useResolvedActionPacks(
  recommendations: AsraRecommendation[],
  context: AssessmentContext,
  platforms: string[],
) {
  return useMemo(
    () => resolveActionPacks(recommendations, context, platforms),
    [recommendations, context, platforms],
  );
}
