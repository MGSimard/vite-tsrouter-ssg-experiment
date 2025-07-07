import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(front-facing)/features")({
  component: PageFeatures,
});

function PageFeatures() {
  return (
    <section>
      <div className="max-w-8xl w-full mx-auto p-6 pt-[calc(var(--header-height)+1.5rem)]">
        <h1>Features</h1>
      </div>
    </section>
  );
}
