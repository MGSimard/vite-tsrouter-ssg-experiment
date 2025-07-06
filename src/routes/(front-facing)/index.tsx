import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(front-facing)/")({
  component: App,
});

function App() {
  return (
    <>
      <section className="text-balance flex flex-col justify-center min-h-dvh">
        <div className="max-w-8xl w-full p-6 mx-auto flex flex-col gap-8">
          <h1>Hero</h1>
        </div>
      </section>
      <section className="flex flex-col">
        <div className="max-w-8xl w-full p-6 mx-auto flex flex-col">
          <h2>Section 2</h2>
          <p>Section content</p>
        </div>
      </section>
    </>
  );
}
