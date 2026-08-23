import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, FileText, Info, Map, ShieldCheck } from "lucide-react";
import { Shell, ScoreRing } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { validateAssessmentConfiguration } from "@/lib/asra-config";
import { frameworkTraceFor } from "@/lib/asra-framework-data";
import { generateAsraRecommendations, generateAsraRoadmap } from "@/lib/asra-recommendations";
import {
  autonomyLevel,
  calculateAssessmentScores,
  exposureLevel,
  maturityLevel,
  riskQuadrant,
} from "@/lib/asra-scoring";
import { useAssessment } from "@/lib/assessment-store";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/asra-results")({
  head: () => ({
    meta: [
      { title: "ASRA Results | AI Security & Resilience" },
      {
        name: "description",
        content:
          "AI Security Maturity, AI Exposure, AI Autonomy, Business Resilience and prioritized remediation roadmap.",
      },
      { property: "og:title", content: "ASRA Results | AI Security & Resilience" },
      {
        property: "og:description",
        content:
          "Review AI security maturity, exposure, autonomy, resilience and a prioritized NOW / NEXT / SCALE roadmap.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AsraResultsPage,
});

function AsraResultsPage() {
  const state = useAssessment();
  const { t, content } = useI18n();
  const scores = calculateAssessmentScores(state.asraAnswers, state.context);
  const recommendations = generateAsraRecommendations(state.asraAnswers, state.context);
  const roadmap = generateAsraRoadmap(state.asraAnswers, state.context);
  const quadrant = riskQuadrant(scores.maturity, scores.exposure);
  const configValidation = validateAssessmentConfiguration();
  const topQuestionRisks = scores.questionScores.filter((score) => score.controlGap > 0).slice(0, 12);

  if (scores.answered === 0) {
    return (
      <Shell>
        <div className="panel mx-auto max-w-lg p-8 text-center">
          <ShieldCheck className="mx-auto size-8 text-primary" />
          <h1 className="mt-4 text-2xl font-semibold">{t("results.empty.title")}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{t("results.empty.lead")}</p>
          <Button asChild className="mt-6">
            <Link to="/asra">{t("results.empty.cta")}</Link>
          </Button>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="label-mono">{t("results.eyebrow")}</p>
          <h1 className="mt-2 text-3xl font-semibold">{t("results.title")}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {t("results.answered", { answered: scores.answered, total: scores.applicable })}
          </p>
        </div>
        <Button asChild variant="secondary">
          <Link to="/asra"><ArrowLeft className="size-4" /> {t("results.continue")}</Link>
        </Button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="panel p-5">
          <ScoreRing value={scores.maturity} label={t("results.metric.maturity")} />
          <p className="mt-4 text-sm text-muted-foreground">
            {content.level("maturity", maturityLevel(scores.maturity))}
          </p>
        </div>
        <div className="panel p-5">
          <ScoreRing value={scores.exposure} label={t("results.metric.exposure")} tone="accent" />
          <p className="mt-4 text-sm text-muted-foreground">
            {content.level("exposure", exposureLevel(scores.exposure))}
          </p>
        </div>
        <div className="panel p-5">
          <p className="label-mono">{t("results.metric.autonomy")}</p>
          <p className="mt-4 font-display text-4xl font-semibold">{scores.autonomy.toFixed(1)} / 5</p>
          <p className="mt-3 text-sm text-muted-foreground">
            {content.level("autonomy", autonomyLevel(scores.autonomy))}
          </p>
        </div>
        <div className="panel p-5">
          <ScoreRing value={scores.resilience} label={t("results.metric.resilience")} />
          <p className="mt-4 text-sm text-muted-foreground">{t("results.metric.resilienceNote")}</p>
        </div>
      </div>

      <div className="panel mt-4 p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="label-mono">{t("results.quadrant.eyebrow")}</p>
            <h2 className="mt-1 text-xl font-semibold">{content.level("quadrant", quadrant)}</h2>
          </div>
          <p className="max-w-xl text-sm text-muted-foreground">{t("results.quadrant.note")}</p>
        </div>
      </div>

      <details className="panel mt-4 p-5">
        <summary className="flex cursor-pointer list-none items-center gap-2 font-display font-semibold">
          <Info className="size-4 text-primary" /> {t("results.calc.summary")}
        </summary>
        <div className="mt-4 grid gap-4 text-sm text-muted-foreground lg:grid-cols-2">
          <div>
            <p className="font-medium text-foreground">{t("results.metric.maturity")}</p>
            <p className="mt-1">{t("results.calc.maturity")}</p>
          </div>
          <div>
            <p className="font-medium text-foreground">{t("results.metric.exposure")}</p>
            <p className="mt-1">{t("results.calc.exposure")}</p>
          </div>
          <div>
            <p className="font-medium text-foreground">{t("results.metric.autonomy")}</p>
            <p className="mt-1">{t("results.calc.autonomy")}</p>
          </div>
          <div>
            <p className="font-medium text-foreground">{t("results.metric.resilience")}</p>
            <p className="mt-1">{t("results.calc.resilience")}</p>
          </div>
          <div className="lg:col-span-2">
            <p className="font-medium text-foreground">{t("results.calc.priorityTitle")}</p>
            <p className="mt-1 font-mono text-xs">{t("results.calc.priorityFormula")}</p>
            <p className="mt-2">{t("results.calc.priorityNote")}</p>
          </div>
          <div className="lg:col-span-2 border-t border-border pt-3 font-mono text-xs">
            {t("results.calc.integrity", {
              questions: configValidation.questionCount,
              unique: configValidation.uniqueQuestionCount,
              weights: (configValidation.domainWeightTotal * 100).toFixed(0),
              status:
                configValidation.validQuestionCount && configValidation.validDomainWeights
                  ? t("results.calc.valid")
                  : t("results.calc.invalid"),
            })}
          </div>
        </div>
      </details>

      <section className="mt-10">
        <p className="label-mono">{t("results.domains.eyebrow")}</p>
        <h2 className="mt-1 text-xl font-semibold">{t("results.domains.title")}</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {scores.domainScores.map((domain) => {
            const domainRisks = scores.questionScores
              .filter((score) => score.domain === domain.domain && score.controlGap > 0)
              .slice(0, 3);
            return (
              <details key={domain.domain} className="panel p-4">
                <summary className="cursor-pointer list-none">
                  <div className="flex justify-between gap-3 text-sm">
                    <span>{content.domain(domain.domain).name}</span>
                    {domain.answered === 0 ? (
                      <span className="text-muted-foreground">{t("results.domains.notAssessed")}</span>
                    ) : (
                      <span className="font-mono text-muted-foreground">{domain.score} / 100</span>
                    )}
                  </div>
                  {domain.answered > 0 && <Progress value={domain.score} className="mt-2 h-1.5" />}
                  <p className="mt-2 text-xs text-muted-foreground">
                    {t("results.domains.answered", {
                      answered: domain.answered,
                      total: domain.applicable,
                    })}
                  </p>
                </summary>
                <div className="mt-4 space-y-3 border-t border-border pt-4">
                  {domainRisks.length ? domainRisks.map((risk) => {
                    const question = content.question(risk.questionId);
                    return (
                      <div key={risk.questionId} className="rounded border border-border p-3">
                        <div className="flex flex-wrap justify-between gap-2">
                          <div>
                            <p className="font-mono text-[11px] text-primary">{risk.questionId}</p>
                            <p className="mt-1 text-sm font-medium">{question.title}</p>
                          </div>
                          <p className="font-mono text-xs text-muted-foreground">
                            {t("results.priorityShort", { score: risk.priorityScore })}
                          </p>
                        </div>
                        <p className="mt-2 text-xs text-muted-foreground">
                          {t("results.currentMaturity", {
                            level: risk.maturity,
                            label: content.maturityLabel(risk.maturity),
                          })}
                        </p>
                      </div>
                    );
                  }) : (
                    <p className="text-sm text-muted-foreground">{t("results.domains.noGaps")}</p>
                  )}
                </div>
              </details>
            );
          })}
        </div>
      </section>

      <section className="mt-10">
        <p className="label-mono">{t("results.drill.eyebrow")}</p>
        <h2 className="mt-1 text-xl font-semibold">{t("results.drill.title")}</h2>
        <p className="mt-1 max-w-3xl text-sm text-muted-foreground">{t("results.drill.lead")}</p>
        <div className="mt-5 space-y-3">
          {topQuestionRisks.map((risk, index) => {
            const question = content.question(risk.questionId);
            const maturityText = content.maturityDescriptions(risk.questionId)[risk.maturity];
            const traces = frameworkTraceFor(risk.questionId);
            const recommendation = recommendations.find((item) => item.triggeredBy.includes(risk.questionId));
            const recommendationContent = recommendation
              ? content.recommendation(recommendation.id)
              : undefined;
            return (
              <details key={risk.questionId} className="panel p-5">
                <summary className="cursor-pointer list-none">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-[11px] text-primary">#{index + 1} · {risk.questionId} · {content.domain(risk.domain).name}</p>
                      <h3 className="mt-1 font-display font-semibold">{question.title}</h3>
                      <p className="mt-1 max-w-3xl text-sm text-muted-foreground">{question.prompt}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-sm text-primary">{risk.priorityScore}</p>
                      <p className="text-xs text-muted-foreground">{t("results.drill.priorityScore")}</p>
                    </div>
                  </div>
                </summary>
                <div className="mt-4 grid gap-4 border-t border-border pt-4 lg:grid-cols-2">
                  <div>
                    <p className="label-mono">{t("results.drill.current")}</p>
                    <p className="mt-2 text-sm font-medium">
                      {risk.maturity} — {content.maturityLabel(risk.maturity)}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{maturityText}</p>
                    <p className="mt-3 font-mono text-xs text-muted-foreground">
                      {t("results.drill.gapLine", {
                        gap: (risk.controlGap * 100).toFixed(0),
                        weighted: risk.weightedGap.toFixed(2),
                        horizon: risk.horizon,
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="label-mono">{t("results.drill.recommended")}</p>
                    {recommendationContent ? (
                      <>
                        <p className="mt-2 text-sm font-medium">{recommendationContent.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{recommendationContent.action}</p>
                        <p className="mt-3 text-xs text-muted-foreground">
                          {t("results.drill.owners", {
                            owners: recommendationContent.suggestedOwners.join(" · "),
                          })}
                        </p>
                      </>
                    ) : (
                      <p className="mt-2 text-sm text-muted-foreground">{t("results.drill.noRecommendation")}</p>
                    )}
                  </div>
                  <div className="lg:col-span-2">
                    <p className="label-mono">{t("results.drill.framework")}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{t("results.drill.frameworkNote")}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {traces.length ? traces.map((trace) => (
                        <span key={`${trace.framework}-${trace.refs.join("-")}`} className="rounded border border-border px-2 py-1 text-xs text-muted-foreground">
                          <span className="text-foreground">{trace.framework}</span> · {trace.refs.join(", ")} · {trace.confidence}
                        </span>
                      )) : (
                        <span className="text-sm text-muted-foreground">{t("results.drill.noFramework")}</span>
                      )}
                    </div>
                  </div>
                </div>
              </details>
            );
          })}
        </div>
      </section>

      <section className="mt-10">
        <div className="flex items-center gap-2">
          <FileText className="size-4 text-primary" />
          <p className="label-mono">{t("results.recs.eyebrow")}</p>
        </div>
        <h2 className="mt-1 text-xl font-semibold">{t("results.recs.title")}</h2>
        <div className="mt-5 space-y-4">
          {recommendations.slice(0, 5).map((recommendation) => {
            const localized = content.recommendation(recommendation.id);
            return (
              <article key={recommendation.id} className="panel p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-[11px] text-primary">
                      {content.domain(recommendation.domain).short}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-semibold">{localized.title}</h3>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-xs text-primary">
                      {content.level("priority", recommendation.priority)}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {t("results.recs.priorityScore", { score: recommendation.priorityScore })}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  <span className="text-foreground">{t("results.recs.risk")}</span>{localized.risk}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  <span className="text-foreground">{t("results.recs.action")}</span>{localized.action}
                </p>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div>
                    <p className="label-mono">{t("results.recs.owners")}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {localized.suggestedOwners.join(" · ")}
                    </p>
                  </div>
                  <div>
                    <p className="label-mono">{t("results.recs.triggeredBy")}</p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {recommendation.triggeredBy.slice(0, 5).join(" · ")}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
          {recommendations.length === 0 && (
            <div className="panel p-5 text-sm text-muted-foreground">{t("results.recs.empty")}</div>
          )}
        </div>
      </section>

      <section className="mt-10">
        <div className="flex items-center gap-2">
          <Map className="size-4 text-primary" />
          <p className="label-mono">{t("results.roadmap.eyebrow")}</p>
        </div>
        <h2 className="mt-1 text-xl font-semibold">{t("results.roadmap.title")}</h2>
        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {(["NOW", "NEXT", "SCALE"] as const).map((horizon) => (
            <div key={horizon} className="panel p-5">
              <p className="font-display font-semibold">{horizon}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {horizon === "NOW"
                  ? t("results.roadmap.now")
                  : horizon === "NEXT"
                    ? t("results.roadmap.next")
                    : t("results.roadmap.scale")}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {roadmap[horizon].length ? (
                  roadmap[horizon].map((item) => (
                    <li key={item.id}>· {content.recommendation(item.id).title}</li>
                  ))
                ) : (
                  <li>{t("results.roadmap.empty")}</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="panel mt-10 p-5">
        <p className="label-mono">{t("results.method.eyebrow")}</p>
        <p className="mt-2 text-sm text-muted-foreground">{t("results.method.body")}</p>
      </div>
    </Shell>
  );
}
