import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "@/_components/front-facing/Navbar";
import { Footer } from "@/_components/front-facing/Footer";

export const Route = createFileRoute("/(front-facing)")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Navbar />
      <main className="max-w-8xl w-full mx-auto flex flex-1 flex-col gap-4 p-6">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
