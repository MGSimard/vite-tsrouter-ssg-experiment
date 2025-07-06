import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(front-facing)/features")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section>
      <div className="max-w-8xl w-full p-6 mx-auto">
        <h1>Features</h1>
      </div>
    </section>
  );
}
