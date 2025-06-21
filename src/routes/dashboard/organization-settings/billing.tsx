import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/organization-settings/billing")({
  component: RouteComponent,
  loader: () => ({ crumb: "Billing" }),
});

function RouteComponent() {
  return <div>Hello "/dashboard/organization-settings/billing"!</div>;
}
