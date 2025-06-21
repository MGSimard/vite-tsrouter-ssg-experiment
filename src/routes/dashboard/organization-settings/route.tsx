import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/organization-settings")({
  component: RouteComponent,
  loader: () => ({ crumb: "Organization Settings" }),
});

function RouteComponent() {
  return <Outlet />;
}
