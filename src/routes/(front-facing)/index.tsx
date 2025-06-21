import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/_components/ui/button";

export const Route = createFileRoute("/(front-facing)/")({
  component: App,
});

function App() {
  return (
    <div className="text-center">
      <h1>Hello World</h1>
      <Button>Click me</Button>
    </div>
  );
}
