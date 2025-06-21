import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/organization-settings/team/")({
  component: RouteComponent,
  loader: () => ({ crumb: "Team" }),
});

function RouteComponent() {
  return <div>Hello "/dashboard/organization-settings/team/"!</div>;
}
