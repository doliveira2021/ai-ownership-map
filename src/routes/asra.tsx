import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FlaskConical, RotateCcw, X } from "lucide-react";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { QUESTION_CONFIG_BY_ID } from "@/lib/asra-config";
import { maturityDescriptionsFor } from "@/lib/asra-maturity-data";
import { ASRA_PILOT_BY_ID, ASRA_PILOT_SCENARIOS } from "@/lib/asra-pilot-data";
import { ASRA_DOMAINS } from "@/lib/asra-question-data";
import { isQuestionApplicable, type MaturityValue } from "@/lib/asra-scoring";
import { assessmentActions, useAssessment } from "@/lib/assessment-store";
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
    ],
  }),
  component: AsraAssessmentPage,
});

const maturityLabels = ["Not Established", "Reactive", "Emerging", "Defined", "Managed", "Adaptive"];

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
  return (
    <div className="panel p-4">
      <p className="text-sm font-medium">{label}</p>
      <div className="mt-3 flex gap-2">
        {[true, false].map((option) => (
          <button
            key={String(option)}
            type="button"
            onClick={() => onChange(option)}
            className={cn(
              "rounded border px-3 py-1.5 text-xs transition-colors",
              value === option
                ? "border-primary bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:bg-secondary",
            )}
          >
            {option ? "Yes" : "No"}
          </button>
        ))}
      </div>
    </div>
  );
}

function MaturityOption({
  level,
  description,
  selected,
  onSelect,
}: {
  level: MaturityValue;
  description: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
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
        <span className="font-medium">{maturityLabels[level]}</span>
        <span className="mt-0.5 block text-muted-foreground">{description}</span>
      </span>
    </button>
  );
}

function PilotSelector() {
  const state = useAssessment();
  const activeScenario = state.activePilotScenario
    ? ASRA_PILOT_BY_ID[state.activePilotScenario]
    : undefined;

  return (
    <section className="panel mt-8 border-dashed p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <FlaskConical className="size-4 text-primary" />
            <p className="label-mono">Demo / Pilot mode</p>
          </div>
          <h2 className="mt-1 text-lg font-semibold">Load a synthetic organization profile</h2>
          <p className="mt-1 max-w-3xl text-sm text-muted-foreground">
            Use these scenarios to review scoring, priorities and the results experience. Synthetic
            profiles are test fixtures, not benchmarks or recommended target scores.
          </p>
        </div>
        {state.asraMode === "demo" && (
          <Button variant="ghost" size="sm" onClick={() => assessmentActions.exitDemoMode()}>
            <X className="size-4" /> Exit demo
          </Button>
        )}
      </div>

      {activeScenario && (
        <div className="mt-4 rounded border border-primary/40 bg-primary/10 p-4">
          <p className="font-mono text-xs text-primary">DEMO DATA ACTIVE</p>
          <p className="mt-1 font-medium">{activeScenario.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{activeScenario.description}</p>
          <p className="mt-2 text-xs text-muted-foreground">
            Editing any answer or risk-context value automatically converts this into a normal assessment.
          </p>
        </div>
      )}

      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {ASRA_PILOT_SCENARIOS.map((scenario) => {
          const selected = state.asraMode === "demo" && state.activePilotScenario === scenario.id;
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
              <p className="font-display font-semibold">{scenario.shortName}</p>
              <p className="mt-2 line-clamp-3 text-xs text-muted-foreground">{scenario.description}</p>
              <div className="mt-3 grid grid-cols-2 gap-1 font-mono text-[10px] text-muted-foreground">
                <span>Exposure {scenario.context.exposure}</span>
                <span>Autonomy {scenario.context.autonomy}</span>
                <span>Impact {scenario.context.businessImpact}</span>
                <span>Dependency {scenario.context.resilienceDependency}</span>
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
          <p className="label-mono">ASRA v2</p>
          <h1 className="mt-2 text-3xl font-semibold">AI Security & Resilience Assessment</h1>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            Assess the current operating state of AI security across ten domains. Select the maturity
            description that most closely reflects the assessed scope. Do not enter confidential or
            sensitive company information.
          </p>
        </div>
        <Button variant="ghost" size="sm" onClick={() => assessmentActions.resetAsra()}>
          <RotateCcw className="size-4" /> Reset ASRA
        </Button>
      </div>

      <PilotSelector />

      <section className="mt-8">
        <p className="label-mono">Risk context</p>
        <h2 className="mt-1 text-xl font-semibold">How exposed and dependent is the business?</h2>
        <p className="mt-1 max-w-3xl text-sm text-muted-foreground">
          These context values do not change maturity. They influence exposure, autonomy,
          resilience and the order of recommended priorities.
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          <ContextRange
            label="AI Exposure"
            value={state.context.exposure}
            max={100}
            suffix=" / 100"
            onChange={(value) => assessmentActions.setContext({ exposure: value })}
          />
          <ContextRange
            label="AI Autonomy"
            value={state.context.autonomy}
            max={5}
            suffix=" / 5"
            onChange={(value) => assessmentActions.setContext({ autonomy: value })}
          />
          <ContextRange
            label="Business Impact"
            value={state.context.businessImpact}
            max={100}
            suffix=" / 100"
            onChange={(value) => assessmentActions.setContext({ businessImpact: value })}
          />
          <ContextRange
            label="AI Dependency"
            value={state.context.resilienceDependency}
            max={100}
            suffix=" / 100"
            onChange={(value) => assessmentActions.setContext({ resilienceDependency: value })}
          />
        </div>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <ApplicabilityToggle
            label="Does the assessed scope use AI agents?"
            value={state.context.usesAgents}
            onChange={(usesAgents) => assessmentActions.setContext({ usesAgents })}
          />
          <ApplicabilityToggle
            label="Does the assessed scope use Generative AI?"
            value={state.context.usesGenAI}
            onChange={(usesGenAI) => assessmentActions.setContext({ usesGenAI })}
          />
        </div>
      </section>

      <div className="panel sticky top-16 z-20 mt-8 flex flex-wrap items-center gap-4 p-4">
        <div className="min-w-52 flex-1">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{answered} of {applicableQuestions.length} applicable questions answered</span>
            <span>{percent}%</span>
          </div>
          <Progress value={percent} className="mt-2 h-1.5" />
        </div>
        {state.asraMode === "demo" && (
          <span className="rounded border border-primary/40 bg-primary/10 px-2 py-1 font-mono text-[10px] text-primary">
            DEMO
          </span>
        )}
        <Button asChild>
          <Link to="/asra-results">
            Results <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>

      {ASRA_DOMAINS.map((domain) => {
        const questions = domain.questions.filter((question) =>
          isQuestionApplicable(question.id, state.context),
        );
        if (!questions.length) return null;

        return (
          <section key={domain.id} className="mt-12">
            <p className="label-mono">{domain.short}</p>
            <h2 className="mt-1 text-xl font-semibold">{domain.name}</h2>
            <p className="mt-1 max-w-3xl text-sm text-muted-foreground">{domain.intent}</p>

            <div className="mt-5 space-y-4">
              {questions.map((question) => {
                const answer = state.asraAnswers[question.id];
                const config = QUESTION_CONFIG_BY_ID[question.id];
                const descriptions = maturityDescriptionsFor(question.id);
                const agentOnly = config?.agentOnly;
                const genAiOnly = config?.genAiOnly;
                return (
                  <article key={question.id} className="panel p-5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="max-w-3xl">
                        <p className="font-mono text-[11px] text-primary">{question.id}</p>
                        <h3 className="mt-1 font-display font-semibold">{question.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{question.prompt}</p>
                        {(agentOnly || genAiOnly) && (
                          <p className="mt-2 text-xs text-primary/90">
                            {agentOnly ? "Agent-specific" : ""}
                            {agentOnly && genAiOnly ? " · " : ""}
                            {genAiOnly ? "GenAI-specific" : ""}
                          </p>
                        )}
                      </div>
                      {answer !== undefined && (
                        <span className="rounded border border-primary/40 bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                          {answer === null ? "N/A" : `${answer} — ${maturityLabels[answer]}`}
                        </span>
                      )}
                    </div>

                    <div className="mt-4 grid gap-2 lg:grid-cols-2">
                      {([0, 1, 2, 3, 4, 5] as MaturityValue[]).map((level) => (
                        <MaturityOption
                          key={level}
                          level={level}
                          description={descriptions[level]}
                          selected={answer === level}
                          onSelect={() => assessmentActions.setAsraAnswer(question.id, level)}
                        />
                      ))}
                    </div>

                    <div className="mt-3 border-t border-border pt-3">
                      <button
                        type="button"
                        onClick={() => assessmentActions.setAsraAnswer(question.id, null)}
                        className={cn(
                          "rounded border px-3 py-2 text-xs transition-colors",
                          answer === null
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border text-muted-foreground hover:bg-secondary",
                        )}
                      >
                        Not applicable to this assessed scope
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
