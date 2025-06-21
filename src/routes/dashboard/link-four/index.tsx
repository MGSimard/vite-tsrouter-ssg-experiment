import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/link-four/")({
  component: RouteComponent,
  loader: () => ({ crumb: "Link Four" }),
});

function RouteComponent() {
  return <div>Hello "/dashboard/link-four/"!</div>;
}
