import { Link } from "@tanstack/react-router";
import { frameworkEntry } from "@/lib/asra-framework-basis";
import { cn } from "@/lib/utils";

/**
 * Renders a canonical framework name as an internal link to its entry on the
 * Framework Library page. Falls back to plain text for unknown names.
 */
export function FrameworkLink({
  name,
  className,
  title,
  children,
}: {
  name: string;
  className?: string;
  title?: string;
  children?: React.ReactNode;
}) {
  const entry = frameworkEntry(name);
  const label = children ?? name;

  if (!entry) return <span className={className}>{label}</span>;

  return (
    <Link
      to="/frameworks"
      hash={entry.id}
      title={title ?? entry.longName}
      className={cn("underline decoration-dotted underline-offset-4", className)}
    >
      {label}
    </Link>
  );
}
