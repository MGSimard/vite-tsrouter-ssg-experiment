import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/link-two/")({
  component: RouteComponent,
  loader: () => ({ crumb: "Link Two" }),
});

function RouteComponent() {
  return <div>Hello "/dashboard/link-two/"!</div>;
}
