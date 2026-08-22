import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, FileText, Info, Map, ShieldCheck } from "lucide-react";
import { Shell, ScoreRing } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { validateAssessmentConfiguration } from "@/lib/asra-config";
import { frameworkTraceFor } from "@/lib/asra-framework-data";
import { maturityDescriptionsFor } from "@/lib/asra-maturity-data";
import { ASRA_DOMAINS, ASRA_QUESTION_BY_ID } from "@/lib/asra-question-data";
import { generateAsraRecommendations, generateAsraRoadmap } from "@/lib/asra-recommendations";
import {
  autonomyLevel,
  calculateAssessmentScores,
  exposureLevel,
  maturityLevel,
  riskQuadrant,
} from "@/lib/asra-scoring";
import { useAssessment } from "@/lib/assessment-store";

export const Route = createFileRoute("/asra-results")({
  head: () => ({
    meta: [
      { title: "ASRA Results | AI Security & Resilience" },
      {
        name: "description",
        content:
          "AI Security Maturity, AI Exposure, AI Autonomy, Business Resilience and prioritized remediation roadmap.",
      },
    ],
  }),
  component: AsraResultsPage,
});

const domainName = Object.fromEntries(ASRA_DOMAINS.map((domain) => [domain.id, domain.name]));
const maturityLabels = ["Not Established", "Reactive", "Emerging", "Defined", "Managed", "Adaptive"];

function AsraResultsPage() {
  const state = useAssessment();
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
          <h1 className="mt-4 text-2xl font-semibold">No ASRA assessment data yet</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Answer at least one applicable ASRA question to generate the new scoring dashboard.
          </p>
          <Button asChild className="mt-6">
            <Link to="/asra">Start ASRA assessment</Link>
          </Button>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="label-mono">ASRA Results</p>
          <h1 className="mt-2 text-3xl font-semibold">AI Security & Resilience Posture</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {scores.answered} of {scores.applicable} applicable questions answered.
          </p>
        </div>
        <Button asChild variant="secondary">
          <Link to="/asra"><ArrowLeft className="size-4" /> Continue assessment</Link>
        </Button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="panel p-5">
          <ScoreRing value={scores.maturity} label="AI Security Maturity" />
          <p className="mt-4 text-sm text-muted-foreground">{maturityLevel(scores.maturity)}</p>
        </div>
        <div className="panel p-5">
          <ScoreRing value={scores.exposure} label="AI Exposure" tone="accent" />
          <p className="mt-4 text-sm text-muted-foreground">{exposureLevel(scores.exposure)}</p>
        </div>
        <div className="panel p-5">
          <p className="label-mono">AI Autonomy</p>
          <p className="mt-4 font-display text-4xl font-semibold">{scores.autonomy.toFixed(1)} / 5</p>
          <p className="mt-3 text-sm text-muted-foreground">{autonomyLevel(scores.autonomy)}</p>
        </div>
        <div className="panel p-5">
          <ScoreRing value={scores.resilience} label="Business Resilience" />
          <p className="mt-4 text-sm text-muted-foreground">
            Readiness adjusted for current AI dependency.
          </p>
        </div>
      </div>

      <div className="panel mt-4 p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="label-mono">Exposure × Maturity</p>
            <h2 className="mt-1 text-xl font-semibold">{quadrant}</h2>
          </div>
          <p className="max-w-xl text-sm text-muted-foreground">
            Priority is based on business exposure and control gaps, not on the weakest control alone.
          </p>
        </div>
      </div>

      <details className="panel mt-4 p-5">
        <summary className="flex cursor-pointer list-none items-center gap-2 font-display font-semibold">
          <Info className="size-4 text-primary" /> How was this calculated?
        </summary>
        <div className="mt-4 grid gap-4 text-sm text-muted-foreground lg:grid-cols-2">
          <div>
            <p className="font-medium text-foreground">AI Security Maturity</p>
            <p className="mt-1">
              Each applicable 0–5 response is normalized to 0–100, weighted inside its domain, then
              combined using the ten domain weights. Unanswered and Not Applicable questions are
              excluded from the denominator rather than scored as zero.
            </p>
          </div>
          <div>
            <p className="font-medium text-foreground">AI Exposure</p>
            <p className="mt-1">
              The headline exposure score is the current enterprise exposure context (0–100). It is
              kept separate from maturity so a mature organization can still operate a highly exposed
              AI estate.
            </p>
          </div>
          <div>
            <p className="font-medium text-foreground">AI Autonomy</p>
            <p className="mt-1">
              Autonomy is an independent 0–5 context index ranging from no AI through generative and
              advisory use to autonomous operations. It increases priority for controls whose failure
              becomes more consequential as AI gains authority.
            </p>
          </div>
          <div>
            <p className="font-medium text-foreground">Business Resilience</p>
            <p className="mt-1">
              Resilience uses maturity in the Incident Response & Business Resilience domain and then
              raises the required standard when business dependency on AI is high.
            </p>
          </div>
          <div className="lg:col-span-2">
            <p className="font-medium text-foreground">Recommendation priority</p>
            <p className="mt-1 font-mono text-xs">
              control gap × question weight × exposure factor × autonomy factor × business-impact
              factor × resilience factor
            </p>
            <p className="mt-2">
              This means the lowest maturity answer is not automatically the top recommendation. A
              moderate gap can rank higher when it sits in a highly exposed, privileged, autonomous or
              business-critical context.
            </p>
          </div>
          <div className="lg:col-span-2 border-t border-border pt-3 font-mono text-xs">
            Configuration integrity: {configValidation.questionCount} questions · {configValidation.uniqueQuestionCount} unique IDs · domain weights {(configValidation.domainWeightTotal * 100).toFixed(0)}% · {configValidation.validQuestionCount && configValidation.validDomainWeights ? "valid" : "check configuration"}.
          </div>
        </div>
      </details>

      <section className="mt-10">
        <p className="label-mono">Domain maturity</p>
        <h2 className="mt-1 text-xl font-semibold">Where maturity is strong — and where it is not</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {scores.domainScores.map((domain) => {
            const domainRisks = scores.questionScores
              .filter((score) => score.domain === domain.domain && score.controlGap > 0)
              .slice(0, 3);
            return (
              <details key={domain.domain} className="panel p-4">
                <summary className="cursor-pointer list-none">
                  <div className="flex justify-between gap-3 text-sm">
                    <span>{domainName[domain.domain]}</span>
                    {domain.answered === 0 ? (
                      <span className="text-muted-foreground">Not assessed</span>
                    ) : (
                      <span className="font-mono text-muted-foreground">{domain.score} / 100</span>
                    )}
                  </div>
                  {domain.answered > 0 && <Progress value={domain.score} className="mt-2 h-1.5" />}
                  <p className="mt-2 text-xs text-muted-foreground">
                    {domain.answered} of {domain.applicable} applicable questions answered · click to inspect drivers
                  </p>
                </summary>
                <div className="mt-4 space-y-3 border-t border-border pt-4">
                  {domainRisks.length ? domainRisks.map((risk) => {
                    const question = ASRA_QUESTION_BY_ID[risk.questionId];
                    return (
                      <div key={risk.questionId} className="rounded border border-border p-3">
                        <div className="flex flex-wrap justify-between gap-2">
                          <div>
                            <p className="font-mono text-[11px] text-primary">{risk.questionId}</p>
                            <p className="mt-1 text-sm font-medium">{question?.title ?? risk.questionId}</p>
                          </div>
                          <p className="font-mono text-xs text-muted-foreground">Priority {risk.priorityScore}</p>
                        </div>
                        <p className="mt-2 text-xs text-muted-foreground">
                          Current maturity: {risk.maturity} — {maturityLabels[risk.maturity]}
                        </p>
                      </div>
                    );
                  }) : (
                    <p className="text-sm text-muted-foreground">No assessed control gaps in this domain.</p>
                  )}
                </div>
              </details>
            );
          })}
        </div>
      </section>

      <section className="mt-10">
        <p className="label-mono">Risk drill-down</p>
        <h2 className="mt-1 text-xl font-semibold">What is driving the priority order?</h2>
        <p className="mt-1 max-w-3xl text-sm text-muted-foreground">
          These are the highest-ranked answered control gaps after applying exposure, autonomy,
          business-impact and resilience modifiers. Expand an item to see the selected maturity
          description and supporting framework traceability.
        </p>
        <div className="mt-5 space-y-3">
          {topQuestionRisks.map((risk, index) => {
            const question = ASRA_QUESTION_BY_ID[risk.questionId];
            const maturityText = maturityDescriptionsFor(risk.questionId)[risk.maturity];
            const traces = frameworkTraceFor(risk.questionId);
            const recommendation = recommendations.find((item) => item.triggeredBy.includes(risk.questionId));
            return (
              <details key={risk.questionId} className="panel p-5">
                <summary className="cursor-pointer list-none">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-[11px] text-primary">#{index + 1} · {risk.questionId} · {domainName[risk.domain]}</p>
                      <h3 className="mt-1 font-display font-semibold">{question?.title ?? risk.questionId}</h3>
                      <p className="mt-1 max-w-3xl text-sm text-muted-foreground">{question?.prompt}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-sm text-primary">{risk.priorityScore}</p>
                      <p className="text-xs text-muted-foreground">priority score</p>
                    </div>
                  </div>
                </summary>
                <div className="mt-4 grid gap-4 border-t border-border pt-4 lg:grid-cols-2">
                  <div>
                    <p className="label-mono">Current assessment</p>
                    <p className="mt-2 text-sm font-medium">{risk.maturity} — {maturityLabels[risk.maturity]}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{maturityText}</p>
                    <p className="mt-3 font-mono text-xs text-muted-foreground">
                      Control gap {(risk.controlGap * 100).toFixed(0)}% · weighted gap {risk.weightedGap.toFixed(2)} · default horizon {risk.horizon}
                    </p>
                  </div>
                  <div>
                    <p className="label-mono">Recommended action</p>
                    {recommendation ? (
                      <>
                        <p className="mt-2 text-sm font-medium">{recommendation.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{recommendation.action}</p>
                        <p className="mt-3 text-xs text-muted-foreground">
                          Suggested owners: {recommendation.suggestedOwners.join(" · ")}
                        </p>
                      </>
                    ) : (
                      <p className="mt-2 text-sm text-muted-foreground">No grouped recommendation is currently triggered by this question.</p>
                    )}
                  </div>
                  <div className="lg:col-span-2">
                    <p className="label-mono">Framework traceability</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Supporting alignment only; references do not represent certification, compliance or an audit conclusion.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {traces.length ? traces.map((trace) => (
                        <span key={`${trace.framework}-${trace.refs.join("-")}`} className="rounded border border-border px-2 py-1 text-xs text-muted-foreground">
                          <span className="text-foreground">{trace.framework}</span> · {trace.refs.join(", ")} · {trace.confidence}
                        </span>
                      )) : (
                        <span className="text-sm text-muted-foreground">No structured framework mapping recorded.</span>
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
          <p className="label-mono">Prioritized recommendations</p>
        </div>
        <h2 className="mt-1 text-xl font-semibold">Top actions based on risk context</h2>
        <div className="mt-5 space-y-4">
          {recommendations.slice(0, 5).map((recommendation) => (
            <article key={recommendation.id} className="panel p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[11px] text-primary">{recommendation.domain}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold">{recommendation.title}</h3>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xs text-primary">{recommendation.priority}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Priority score {recommendation.priorityScore}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground"><span className="text-foreground">Risk: </span>{recommendation.risk}</p>
              <p className="mt-2 text-sm text-muted-foreground"><span className="text-foreground">Action: </span>{recommendation.action}</p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div>
                  <p className="label-mono">Suggested owners</p>
                  <p className="mt-1 text-sm text-muted-foreground">{recommendation.suggestedOwners.join(" · ")}</p>
                </div>
                <div>
                  <p className="label-mono">Triggered by</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{recommendation.triggeredBy.slice(0, 5).join(" · ")}</p>
                </div>
              </div>
            </article>
          ))}
          {recommendations.length === 0 && (
            <div className="panel p-5 text-sm text-muted-foreground">
              No material recommendation triggers were generated from the answered questions.
            </div>
          )}
        </div>
      </section>

      <section className="mt-10">
        <div className="flex items-center gap-2">
          <Map className="size-4 text-primary" />
          <p className="label-mono">Roadmap</p>
        </div>
        <h2 className="mt-1 text-xl font-semibold">NOW / NEXT / SCALE</h2>
        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {(["NOW", "NEXT", "SCALE"] as const).map((horizon) => (
            <div key={horizon} className="panel p-5">
              <p className="font-display font-semibold">{horizon}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {horizon === "NOW" ? "0–90 days" : horizon === "NEXT" ? "3–6 months" : "6–12 months"}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {roadmap[horizon].length ? (
                  roadmap[horizon].map((item) => <li key={item.id}>· {item.title}</li>)
                ) : (
                  <li>No triggered actions in this horizon.</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="panel mt-10 p-5">
        <p className="label-mono">Methodology note</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Scores are deterministic and reproducible. Framework alignment is supporting traceability,
          not certification, legal advice, regulatory validation or an audit.
        </p>
      </div>
    </Shell>
  );
}
