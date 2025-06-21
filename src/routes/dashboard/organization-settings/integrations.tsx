import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/organization-settings/integrations")({
  component: RouteComponent,
  loader: () => ({ crumb: "Integrations" }),
});

function RouteComponent() {
  return <div>Hello "/dashboard/organization-settings/integrations"!</div>;
}
