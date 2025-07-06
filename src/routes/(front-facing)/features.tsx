import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(front-facing)/features")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="p-6 pt-[calc(var(--header-height)+1.5rem)]">
      <div className="max-w-8xl w-full mx-auto">
        <h1>Features</h1>
      </div>
    </section>
  );
}
