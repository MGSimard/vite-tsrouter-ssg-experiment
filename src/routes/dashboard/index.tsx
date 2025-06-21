import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
  loader: () => ({ crumb: "Dashboard" }),
});

function RouteComponent() {
  return <div>Hello "/dashboard/"!</div>;
}
