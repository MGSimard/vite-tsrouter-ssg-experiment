import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/_components/ui/button";
import { Zap } from "lucide-react";

export const Route = createFileRoute("/(front-facing)/")({
  component: App,
});

function App() {
  return (
    <>
      <section className="text-balance flex flex-col justify-center min-h-dvh">
        <div className="max-w-8xl w-full p-6 mx-auto flex flex-col gap-8">
          <span className="flex items-center gap-2 px-2 py-1 border-primary border text-primary self-start">
            <Zap className="w-4 h-4" /> Leading Subtitle
          </span>
          <h1 className="text-8xl font-bold max-w-lg">
            Some Hero Title <span className="heading-effect">Here</span>
          </h1>
          <p className="text-2xl max-w-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          <div className="flex gap-4 items-center">
            <Button className="p-6 text-lg">Start Free Trial</Button>
            <Button className="p-6 text-lg" variant="secondary">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
