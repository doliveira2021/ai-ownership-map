import { FrameworkLink } from "@/components/framework-link";
import {
  ALIGNMENT_DOMAIN_IDS,
  alignmentBand,
  calculateFrameworkAlignment,
} from "@/lib/asra-framework-alignment";
import type { AsraAnswers, AssessmentContext } from "@/lib/asra-scoring";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const BAND_CLASS: Record<string, string> = {
  low: "bg-destructive/25 text-foreground",
  partial: "bg-accent/70 text-foreground",
  moderate: "bg-primary/25 text-foreground",
  strong: "bg-primary/50 text-foreground",
};

const BANDS = ["low", "partial", "moderate", "strong"] as const;

export function FrameworkAlignmentHeatmap({
  answers,
  context,
}: {
  answers: AsraAnswers;
  context: AssessmentContext;
}) {
  const { t, content } = useI18n();
  const rows = calculateFrameworkAlignment(answers, context);

  return (
    <div className="space-y-4">
      <p className="max-w-3xl text-sm text-muted-foreground">{t("results.alignment.lead")}</p>

      <div className="panel overflow-x-auto p-4">
        <table className="w-full min-w-[720px] border-separate border-spacing-1 text-xs">
          <thead>
            <tr>
              <th className="w-52 px-2 py-1 text-left font-medium text-muted-foreground">
                {t("results.alignment.frameworkColumn")}
              </th>
              <th className="px-2 py-1 text-left font-medium text-muted-foreground">
                {t("results.alignment.overallColumn")}
              </th>
              {ALIGNMENT_DOMAIN_IDS.map((domain) => (
                <th
                  key={domain}
                  className="px-2 py-1 text-left font-medium text-muted-foreground"
                  title={content.domain(domain).name}
                >
                  {content.domain(domain).short}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.framework.id}>
                <th scope="row" className="px-2 py-1 text-left font-normal">
                  <FrameworkLink name={row.framework.name} className="text-sm text-foreground" />
                  {!row.scorable && (
                    <span className="mt-0.5 block text-[11px] text-muted-foreground">
                      {t("results.alignment.structuralOnly")}
                    </span>
                  )}
                </th>
                <td className="px-2 py-1">
                  {row.scorable && row.overall !== null ? (
                    <span
                      className={cn(
                        "inline-block rounded px-2 py-1 font-mono",
                        BAND_CLASS[alignmentBand(row.overall)],
                      )}
                    >
                      {row.overall}%
                    </span>
                  ) : (
                    <span className="text-muted-foreground">
                      {row.scorable ? t("results.alignment.noData") : t("results.alignment.notScored")}
                    </span>
                  )}
                </td>
                {row.cells.map((cell) => (
                  <td key={cell.domain} className="px-1 py-1">
                    {row.scorable && cell.alignment !== null ? (
                      <span
                        className={cn(
                          "block rounded px-2 py-1 text-center font-mono",
                          BAND_CLASS[alignmentBand(cell.alignment)],
                        )}
                        title={t("results.alignment.cellTitle", {
                          framework: row.framework.name,
                          domain: content.domain(cell.domain).name,
                          value: cell.alignment,
                          questions: cell.questions,
                        })}
                      >
                        {cell.alignment}
                      </span>
                    ) : (
                      <span className="block rounded bg-muted/40 px-2 py-1 text-center text-muted-foreground">
                        –
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
        <span>{t("results.alignment.legend")}</span>
        {BANDS.map((band) => (
          <span key={band} className="flex items-center gap-1.5">
            <span className={cn("inline-block size-3 rounded", BAND_CLASS[band])} />
            {t(`results.alignment.band.${band}`)}
          </span>
        ))}
      </div>

      <details className="panel p-4 text-sm text-muted-foreground">
        <summary className="cursor-pointer list-none font-display font-semibold text-foreground">
          {t("results.alignment.methodology.summary")}
        </summary>
        <p className="mt-3">{t("results.alignment.methodology.body")}</p>
        <p className="mt-2">{t("results.alignment.methodology.confidence")}</p>
        <p className="mt-2">{t("results.alignment.methodology.structural")}</p>
        <p className="mt-3 border-t border-border pt-3 text-foreground">
          {t("results.alignment.disclaimer")}
        </p>
      </details>
    </div>
  );
}
