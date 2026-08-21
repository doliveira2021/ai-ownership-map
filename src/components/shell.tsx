import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { FlaskConical, ShieldCheck } from "lucide-react";
import { ASRA_PILOT_BY_ID } from "@/lib/asra-pilot-data";
import { useAssessment } from "@/lib/assessment-store";

const nav = [
  { to: "/", label: "Overview" },
  { to: "/asra", label: "ASRA Assessment" },
  { to: "/asra-results", label: "ASRA Results" },
  { to: "/assessment", label: "Accountability" },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  const state = useAssessment();
  const activeScenario = state.activePilotScenario
    ? ASRA_PILOT_BY_ID[state.activePilotScenario]
    : undefined;

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded border border-primary/40 bg-primary/10 text-primary">
              <ShieldCheck className="size-4" />
            </span>
            <span className="font-display text-sm font-semibold tracking-tight">
              AI Security & Resilience
              <span className="ml-2 label-mono">ASRA</span>
            </span>
          </Link>
          <nav className="flex flex-wrap items-center justify-end gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "bg-secondary text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        {state.asraMode === "demo" && activeScenario && (
          <div className="border-t border-primary/30 bg-primary/10">
            <div className="mx-auto flex max-w-6xl items-center gap-2 px-5 py-2 text-xs">
              <FlaskConical className="size-3.5 text-primary" />
              <span className="font-mono text-primary">DEMO DATA</span>
              <span className="text-muted-foreground">·</span>
              <span className="font-medium">{activeScenario.shortName}</span>
              <span className="hidden text-muted-foreground md:inline">
                · Synthetic pilot profile — not a real organization assessment or benchmark.
              </span>
            </div>
          </div>
        )}
      </header>
      <main className="mx-auto max-w-6xl px-5 py-10">{children}</main>
      <footer className="mx-auto max-w-6xl px-5 pb-10 label-mono">
        Assessment data stays in this browser. Do not enter confidential or sensitive company information.
      </footer>
    </div>
  );
}

export function ScoreRing({
  value,
  label,
  suffix = "/ 100",
  tone = "primary",
}: {
  value: number;
  label: string;
  suffix?: string;
  tone?: "primary" | "accent";
}) {
  const color = tone === "accent" ? "var(--accent)" : "var(--primary)";
  return (
    <div className="flex items-center gap-4">
      <div
        className="grid size-24 place-items-center rounded-full"
        style={{
          background: `conic-gradient(${color} ${value * 3.6}deg, var(--muted) 0deg)`,
        }}
      >
        <div className="grid size-[74px] place-items-center rounded-full bg-card">
          <span className="font-display text-2xl font-semibold">{value}</span>
        </div>
      </div>
      <div>
        <p className="label-mono">{label}</p>
        <p className="font-display text-lg">
          {value} <span className="text-muted-foreground">{suffix}</span>
        </p>
      </div>
    </div>
  );
}
