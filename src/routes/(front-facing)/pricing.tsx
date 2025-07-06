import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(front-facing)/pricing")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section>
      <div className="max-w-8xl w-full p-6 mx-auto">
        <h1>Pricing</h1>
      </div>
    </section>
  );
}
