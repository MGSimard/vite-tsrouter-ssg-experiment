import { LogoCloud } from "@/_components/front-facing/LogoCloud";
import { Button } from "@/_components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/(front-facing)/")({
  component: App,
});

function App() {
  return (
    <>
      <section className="text-balance flex flex-col gap-8 justify-center min-h-dvh p-6 pt-[calc(var(--header-height)+1.5rem)]">
        <div className="max-w-8xl w-full mx-auto flex flex-col justify-center gap-8 grow">
          <h1 className="text-4xl md:text-6xl font-bold max-w-2xl">Lorem ipsum dolor sit amet consectetur.</h1>
          <p className="text-pretty text-lg max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="font-bold" asChild>
              <Link to="#">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="#">Request a Demo</Link>
            </Button>
          </div>
        </div>
        <LogoCloud />
      </section>
      <section className="flex flex-col p-6 h-[300dvh]">
        <div className="max-w-8xl w-full mx-auto flex flex-col">
          <h2>Section 2</h2>
          <p>Section content</p>
        </div>
      </section>
    </>
  );
}
