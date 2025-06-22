import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/The Thing/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="grow p-6">Hello "/dashboard/The Thing/"!</div>;
}
