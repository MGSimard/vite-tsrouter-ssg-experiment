import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(front-facing)/about")({
  component: PageAbout,
});

function PageAbout() {
  return (
    <section className="p-6 pt-[calc(var(--header-height)+1.5rem)]">
      <div className="max-w-8xl w-full mx-auto">
        <h1>About</h1>
      </div>
    </section>
  );
}
