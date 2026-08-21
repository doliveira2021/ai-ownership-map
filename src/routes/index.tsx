import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Gavel, Radar, ShieldAlert, UserCheck } from "lucide-react";
import heroImage from "@/assets/hero-accountability.jpg";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { accountabilityAreas, agentRoleModel, domains } from "@/lib/assessment-data";

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

const principles = [
  { icon: UserCheck, q: "Who owns this AI system?" },
  { icon: Gavel, q: "Who can approve what it can access?" },
  { icon: Bot, q: "Who can increase its autonomy?" },
  { icon: ShieldAlert, q: "Who accepted its residual risk?" },
  { icon: Radar, q: "Who has authority to stop it?" },
  { icon: UserCheck, q: "Who is accountable if it acts incorrectly?" },
];

function Index() {
  return (
    <Shell>
      <section className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <p className="label-mono">AI Accountability & Responsibility Model</p>
          <h1 className="mt-3 text-4xl font-semibold leading-[1.08] sm:text-5xl">
            Operational accountability for AI decisions, risks and agents.
          </h1>
          <p className="mt-5 max-w-xl text-muted-foreground">
            This assessment does not enforce one universal RACI model. It determines whether AI
            responsibilities are explicitly assigned, understood, documented, consistently applied,
            auditable, and maintained as AI systems evolve.
          </p>
          <div className="mt-6 panel p-4">
            <p className="text-sm">
              <span className="text-primary">Principle —</span> No critical AI system should exist
              without an accountable business owner. No AI agent capable of executing business actions
              should operate without an accountable human sponsor or owner.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/assessment">
                Start assessment <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link to="/results">View results dashboard</Link>
            </Button>
          </div>
        </div>
        <img
          src={heroImage}
          width={1600}
          height={900}
          alt="Network of AI systems converging on a single accountable owner node"
          className="rounded-lg border border-border shadow-[var(--shadow-panel)]"
        />
      </section>

      <section className="mt-16">
        <h2 className="text-xl font-semibold">The stronger questions</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Governance is not a committee exercise. These questions drive scoring, recommendations and
          the roadmap.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map(({ icon: Icon, q }) => (
            <div key={q} className="panel flex items-start gap-3 p-4">
              <Icon className="mt-0.5 size-4 shrink-0 text-primary" />
              <p className="text-sm">{q}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold">Accountability areas assessed</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {accountabilityAreas.map((area) => (
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
          <h2 className="text-xl font-semibold">Agent accountability roles</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            These roles may overlap depending on organizational structure — they are not required to
            be separate individuals.
          </p>
          <div className="mt-4 space-y-3">
            {agentRoleModel.map((r) => (
              <div key={r.role} className="panel p-4">
                <p className="font-display text-sm font-semibold text-primary">{r.role}</p>
                <p className="mt-1 text-sm text-muted-foreground">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-xl font-semibold">Assessment domains</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {domains.map((d) => (
            <div key={d.id} className="panel p-4">
              <p className="label-mono">{d.short}</p>
              <p className="mt-1 font-display font-semibold">{d.name}</p>
              <p className="mt-2 text-sm text-muted-foreground">{d.intent}</p>
              <p className="mt-3 font-mono text-xs text-primary">{d.questions.length} questions</p>
            </div>
          ))}
        </div>
      </section>
    </Shell>
  );
}
