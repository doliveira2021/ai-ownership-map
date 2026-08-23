import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Gavel, Radar, ShieldAlert, UserCheck } from "lucide-react";
import heroImage from "@/assets/hero-accountability.jpg";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { domains } from "@/lib/assessment-data";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Accountability & Responsibility Assessment" },
      {
        name: "description",
        content:
          "Assess AI ownership, decision rights, agent sponsorship, residual risk acceptance and incident authority with a 0–5 maturity model and accountability coverage score.",
      },
      { property: "og:title", content: "AI Accountability & Responsibility Assessment" },
      {
        property: "og:description",
        content:
          "Evaluate whether AI responsibilities are explicitly assigned, documented, auditable and maintained as AI systems evolve.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const principleIcons = [UserCheck, Gavel, Bot, ShieldAlert, Radar, UserCheck] as const;
const principleKeys = [
  "landing.q1",
  "landing.q2",
  "landing.q3",
  "landing.q4",
  "landing.q5",
  "landing.q6",
] as const;

function Index() {
  const { t, content } = useI18n();
  const landing = content.landing;

  return (
    <Shell>
      <section className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <p className="label-mono">{t("landing.eyebrow")}</p>
          <h1 className="mt-3 text-4xl font-semibold leading-[1.08] sm:text-5xl">
            {t("landing.title")}
          </h1>
          <p className="mt-5 max-w-xl text-muted-foreground">{t("landing.lead")}</p>
          <div className="mt-6 panel p-4">
            <p className="text-sm">
              <span className="text-primary">{t("landing.principleLabel")} </span>
              {t("landing.principleBody")}
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/assessment">
                {t("landing.ctaStart")} <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link to="/results">{t("landing.ctaResults")}</Link>
            </Button>
          </div>
        </div>
        <img
          src={heroImage}
          width={1600}
          height={900}
          alt={t("landing.heroAlt")}
          className="rounded-lg border border-border shadow-[var(--shadow-panel)]"
        />
      </section>

      <section className="mt-16">
        <h2 className="text-xl font-semibold">{t("landing.questionsTitle")}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{t("landing.questionsLead")}</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {principleKeys.map((key, index) => {
            const Icon = principleIcons[index]!;
            return (
              <div key={key} className="panel flex items-start gap-3 p-4">
                <Icon className="mt-0.5 size-4 shrink-0 text-primary" />
                <p className="text-sm">{t(key)}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold">{t("landing.areasTitle")}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {landing.areas.map((area) => (
              <span
                key={area}
                className="rounded border border-border bg-secondary/50 px-2.5 py-1 font-mono text-xs text-muted-foreground"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold">{t("landing.rolesTitle")}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{t("landing.rolesLead")}</p>
          <div className="mt-4 space-y-3">
            {landing.roles.map((r) => (
              <div key={r.role} className="panel p-4">
                <p className="font-display text-sm font-semibold text-primary">{r.role}</p>
                <p className="mt-1 text-sm text-muted-foreground">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-xl font-semibold">{t("landing.domainsTitle")}</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {domains.map((d) => {
            const localized = landing.legacyDomains[d.id] ?? {
              short: d.short,
              name: d.name,
              intent: d.intent,
            };
            return (
              <div key={d.id} className="panel p-4">
                <p className="label-mono">{localized.short}</p>
                <p className="mt-1 font-display font-semibold">{localized.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">{localized.intent}</p>
                <p className="mt-3 font-mono text-xs text-primary">
                  {t("landing.questionCount", { count: d.questions.length })}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </Shell>
  );
}
