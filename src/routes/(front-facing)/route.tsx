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
      <main className="w-full mx-auto flex grow flex-col">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
