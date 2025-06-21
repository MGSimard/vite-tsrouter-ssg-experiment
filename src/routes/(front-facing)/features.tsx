import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(front-facing)/features")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/features"!</div>;
}
