import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "@/_components/front-facing/Navbar";
import { Footer } from "@/_components/front-facing/Footer";

export const Route = createFileRoute("/(front-facing)")({
  component: LayoutFrontFacing,
});

function LayoutFrontFacing() {
  return (
    <>
      <Navbar />
      <main className="w-full flex-grow flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
