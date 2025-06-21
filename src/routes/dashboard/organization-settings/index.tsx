import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/organization-settings/")({
  component: RouteComponent,
  loader: () => ({ crumb: "Organization Settings" }),
});

function RouteComponent() {
  return <div>Hello "/dashboard/organization-settings/"!</div>;
}
