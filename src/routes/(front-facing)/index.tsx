import { Button } from "@/_components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(front-facing)/")({
  component: App,
});

function App() {
  return (
    <>
      <section className="text-balance flex flex-col justify-center min-h-dvh">
        <div className="max-w-8xl w-full p-6 mx-auto flex flex-col gap-8">
          <h1 className="text-6xl font-bold max-w-2xl">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className="text-pretty text-lg max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="font-bold">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Request a Demo
            </Button>
          </div>
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
