import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FlaskConical, RotateCcw, X } from "lucide-react";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { QUESTION_CONFIG_BY_ID } from "@/lib/asra-config";
import { ASRA_PILOT_SCENARIOS } from "@/lib/asra-pilot-data";
import { ASRA_DOMAINS } from "@/lib/asra-question-data";
import { isQuestionApplicable, type MaturityValue } from "@/lib/asra-scoring";
import { assessmentActions, useAssessment } from "@/lib/assessment-store";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/asra")({
  head: () => ({
    meta: [
      { title: "AI Security & Resilience Assessment" },
      {
        name: "description",
        content:
          "Vendor-agnostic AI security maturity assessment covering discovery, risk, governance, threat modeling, secure development, protection, validation, monitoring, incident response and continuous improvement.",
      },
      { property: "og:title", content: "AI Security & Resilience Assessment (ASRA)" },
      {
        property: "og:description",
        content:
          "Score AI security maturity across ten domains with exposure, autonomy and business-resilience context.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AsraAssessmentPage,
});

function ContextRange({
  label,
  value,
  max,
  suffix,
  onChange,
}: {
  label: string;
  value: number;
  max: number;
  suffix: string;
  onChange: (value: number) => void;
}) {
  return (
    <label className="panel block p-4">
      <div className="flex items-center justify-between gap-3 text-sm">
        <span className="font-medium">{label}</span>
        <span className="font-mono text-primary">{value}{suffix}</span>
      </div>
      <input
        type="range"
        min={0}
        max={max}
        step={max === 5 ? 0.1 : 1}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-3 w-full"
        aria-label={label}
      />
    </label>
  );
}

function ApplicabilityToggle({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean | undefined;
  onChange: (value: boolean) => void;
}) {
  const { t } = useI18n();
  return (
    <div className="panel p-4">
      <p className="text-sm font-medium">{label}</p>
      <div className="mt-3 flex gap-2">
        {[true, false].map((option) => (
          <button
            key={String(option)}
            type="button"
            aria-pressed={value === option}
            onClick={() => onChange(option)}
            className={cn(
              "rounded border px-3 py-1.5 text-xs transition-colors",
              value === option
                ? "border-primary bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:bg-secondary",
            )}
          >
            {option ? t("asra.yes") : t("asra.no")}
          </button>
        ))}
      </div>
    </div>
  );
}

function MaturityOption({
  level,
  label,
  description,
  selected,
  onSelect,
}: {
  level: MaturityValue;
  label: string;
  description: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "flex gap-3 rounded border p-3 text-left transition-colors",
        selected
          ? "border-primary bg-primary/10"
          : "border-border hover:border-primary/40 hover:bg-secondary/60",
      )}
    >
      <span
        className={cn(
          "grid size-7 shrink-0 place-items-center rounded font-mono text-xs",
          selected ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground",
        )}
      >
        {level}
      </span>
      <span className="text-sm">
        <span className="font-medium">{label}</span>
        <span className="mt-0.5 block text-muted-foreground">{description}</span>
      </span>
    </button>
  );
}

function PilotSelector() {
  const state = useAssessment();
  const { t, content } = useI18n();
  const activeScenario = state.activePilotScenario
    ? content.scenario(state.activePilotScenario)
    : undefined;

  return (
    <section className="panel mt-8 border-dashed p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <FlaskConical className="size-4 text-primary" />
            <p className="label-mono">{t("asra.pilot.eyebrow")}</p>
          </div>
          <h2 className="mt-1 text-lg font-semibold">{t("asra.pilot.title")}</h2>
          <p className="mt-1 max-w-3xl text-sm text-muted-foreground">{t("asra.pilot.lead")}</p>
        </div>
        {state.asraMode === "demo" && (
          <Button variant="ghost" size="sm" onClick={() => assessmentActions.exitDemoMode()}>
            <X className="size-4" /> {t("asra.pilot.exit")}
          </Button>
        )}
      </div>

      {activeScenario && (
        <div className="mt-4 rounded border border-primary/40 bg-primary/10 p-4">
          <p className="font-mono text-xs text-primary">{t("asra.pilot.active")}</p>
          <p className="mt-1 font-medium">{activeScenario.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{activeScenario.description}</p>
          <p className="mt-2 text-xs text-muted-foreground">{t("asra.pilot.editNote")}</p>
        </div>
      )}

      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {ASRA_PILOT_SCENARIOS.map((scenario) => {
          const selected = state.asraMode === "demo" && state.activePilotScenario === scenario.id;
          const localized = content.scenario(scenario.id);
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => assessmentActions.loadPilotScenario(scenario.id)}
              className={cn(
                "rounded border p-4 text-left transition-colors",
                selected
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card hover:border-primary/40 hover:bg-secondary/60",
              )}
            >
              <p className="font-display font-semibold">{localized.shortName}</p>
              <p className="mt-2 line-clamp-3 text-xs text-muted-foreground">
                {localized.description}
              </p>
              <div className="mt-3 grid grid-cols-2 gap-1 font-mono text-[10px] text-muted-foreground">
                <span>{t("asra.pilot.exposure")} {scenario.context.exposure}</span>
                <span>{t("asra.pilot.autonomy")} {scenario.context.autonomy}</span>
                <span>{t("asra.pilot.impact")} {scenario.context.businessImpact}</span>
                <span>{t("asra.pilot.dependency")} {scenario.context.resilienceDependency}</span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function AsraAssessmentPage() {
  const state = useAssessment();
  const { t, content } = useI18n();
  const applicableQuestions = ASRA_DOMAINS.flatMap((domain) => domain.questions).filter((question) =>
    isQuestionApplicable(question.id, state.context),
  );
  const answered = applicableQuestions.filter(
    (question) => state.asraAnswers[question.id] !== undefined,
  ).length;
  const percent = applicableQuestions.length
    ? Math.round((answered / applicableQuestions.length) * 100)
    : 0;

  return (
    <Shell>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="label-mono">{t("asra.eyebrow")}</p>
          <h1 className="mt-2 text-3xl font-semibold">{t("asra.title")}</h1>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">{t("asra.lead")}</p>
        </div>
        <Button variant="ghost" size="sm" onClick={() => assessmentActions.resetAsra()}>
          <RotateCcw className="size-4" /> {t("asra.reset")}
        </Button>
      </div>

      <PilotSelector />

      <section className="mt-8">
        <p className="label-mono">{t("asra.context.eyebrow")}</p>
        <h2 className="mt-1 text-xl font-semibold">{t("asra.context.title")}</h2>
        <p className="mt-1 max-w-3xl text-sm text-muted-foreground">{t("asra.context.lead")}</p>
        <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          <ContextRange
            label={t("asra.context.exposure")}
            value={state.context.exposure}
            max={100}
            suffix=" / 100"
            onChange={(value) => assessmentActions.setContext({ exposure: value })}
          />
          <ContextRange
            label={t("asra.context.autonomy")}
            value={state.context.autonomy}
            max={5}
            suffix=" / 5"
            onChange={(value) => assessmentActions.setContext({ autonomy: value })}
          />
          <ContextRange
            label={t("asra.context.impact")}
            value={state.context.businessImpact}
            max={100}
            suffix=" / 100"
            onChange={(value) => assessmentActions.setContext({ businessImpact: value })}
          />
          <ContextRange
            label={t("asra.context.dependency")}
            value={state.context.resilienceDependency}
            max={100}
            suffix=" / 100"
            onChange={(value) => assessmentActions.setContext({ resilienceDependency: value })}
          />
        </div>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <ApplicabilityToggle
            label={t("asra.context.usesAgents")}
            value={state.context.usesAgents}
            onChange={(usesAgents) => assessmentActions.setContext({ usesAgents })}
          />
          <ApplicabilityToggle
            label={t("asra.context.usesGenAI")}
            value={state.context.usesGenAI}
            onChange={(usesGenAI) => assessmentActions.setContext({ usesGenAI })}
          />
        </div>
      </section>

      <div className="panel sticky top-16 z-20 mt-8 flex flex-wrap items-center gap-4 p-4">
        <div className="min-w-52 flex-1">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>
              {t("asra.progress", { answered, total: applicableQuestions.length })}
            </span>
            <span>{percent}%</span>
          </div>
          <Progress value={percent} className="mt-2 h-1.5" />
        </div>
        {state.asraMode === "demo" && (
          <span className="rounded border border-primary/40 bg-primary/10 px-2 py-1 font-mono text-[10px] text-primary">
            {t("demo.badgeShort")}
          </span>
        )}
        <Button asChild>
          <Link to="/asra-results">
            {t("asra.resultsCta")} <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>

      {ASRA_DOMAINS.map((domain) => {
        const questions = domain.questions.filter((question) =>
          isQuestionApplicable(question.id, state.context),
        );
        if (!questions.length) return null;
        const domainContent = content.domain(domain.id);

        return (
          <section key={domain.id} className="mt-12">
            <p className="label-mono">{domainContent.short}</p>
            <h2 className="mt-1 text-xl font-semibold">{domainContent.name}</h2>
            <p className="mt-1 max-w-3xl text-sm text-muted-foreground">{domainContent.intent}</p>

            <div className="mt-5 space-y-4">
              {questions.map((question) => {
                const answer = state.asraAnswers[question.id];
                const config = QUESTION_CONFIG_BY_ID[question.id];
                const descriptions = content.maturityDescriptions(question.id);
                const localized = content.question(question.id);
                const agentOnly = config?.agentOnly;
                const genAiOnly = config?.genAiOnly;
                return (
                  <article key={question.id} className="panel p-5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="max-w-3xl">
                        <p className="font-mono text-[11px] text-primary">{question.id}</p>
                        <h3 className="mt-1 font-display font-semibold">{localized.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{localized.prompt}</p>
                        {(agentOnly || genAiOnly) && (
                          <p className="mt-2 text-xs text-primary/90">
                            {agentOnly ? t("asra.agentSpecific") : ""}
                            {agentOnly && genAiOnly ? " · " : ""}
                            {genAiOnly ? t("asra.genAiSpecific") : ""}
                          </p>
                        )}
                      </div>
                      {answer !== undefined && (
                        <span className="rounded border border-primary/40 bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                          {answer === null
                            ? t("asra.na")
                            : `${answer} — ${content.maturityLabel(answer)}`}
                        </span>
                      )}
                    </div>

                    <div className="mt-4 grid gap-2 lg:grid-cols-2">
                      {([0, 1, 2, 3, 4, 5] as MaturityValue[]).map((level) => (
                        <MaturityOption
                          key={level}
                          level={level}
                          label={content.maturityLabel(level)}
                          description={descriptions[level]}
                          selected={answer === level}
                          onSelect={() => assessmentActions.setAsraAnswer(question.id, level)}
                        />
                      ))}
                    </div>

                    <div className="mt-3 border-t border-border pt-3">
                      <button
                        type="button"
                        aria-pressed={answer === null}
                        onClick={() => assessmentActions.setAsraAnswer(question.id, null)}
                        className={cn(
                          "rounded border px-3 py-2 text-xs transition-colors",
                          answer === null
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border text-muted-foreground hover:bg-secondary",
                        )}
                      >
                        {t("asra.naButton")}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
    </Shell>
  );
}
