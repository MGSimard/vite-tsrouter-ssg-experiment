import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/organization-settings/billing/nested-test/deep")({
  component: RouteComponent,
  loader: () => ({ crumb: "Deep Test" }),
});

function RouteComponent() {
  return <div>Hello "/dashboard/organization-settings/billing/nested-test/deep"!</div>;
}
