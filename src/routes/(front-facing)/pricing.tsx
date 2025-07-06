import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(front-facing)/pricing")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(front-facing)/pricing"!</div>;
}
