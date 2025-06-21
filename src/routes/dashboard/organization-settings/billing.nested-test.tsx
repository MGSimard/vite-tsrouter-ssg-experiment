import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/organization-settings/billing/nested-test")({
  component: RouteComponent,
  loader: () => ({ crumb: "Nested Test" }),
});

function RouteComponent() {
  return <div>Hello "/dashboard/organization-settings/billing/nested-test"!</div>;
}
