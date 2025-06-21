import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(front-facing)/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/about"!</div>;
}
