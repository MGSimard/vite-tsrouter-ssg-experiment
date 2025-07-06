import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(front-facing)/pricing")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="p-6">
      <div className="max-w-8xl w-full mx-auto">
        <h1>Pricing</h1>
      </div>
    </section>
  );
}
