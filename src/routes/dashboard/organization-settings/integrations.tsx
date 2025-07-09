import { createFileRoute } from "@tanstack/react-router";
import { IntegrationsEmpty } from "@/_components/dashboard/IntegrationsEmpty";
import { cn } from "@/_lib/utils";

export const Route = createFileRoute("/dashboard/organization-settings/integrations")({
  component: RouteComponent,
  loader: () => ({ crumb: "Integrations" }),
});

const INTEGRATIONS = [];

function RouteComponent() {
  return (
    <div
      className={cn(
        "max-w-8xl w-full mx-auto flex flex-1 flex-col gap-4 p-6",
        INTEGRATIONS.length > 0 ? "" : "justify-center"
      )}>
      {INTEGRATIONS.length > 0 ? <h1>Integrations</h1> : <IntegrationsEmpty />}
    </div>
  );
}
