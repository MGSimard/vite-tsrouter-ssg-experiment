import { Button } from "@/_components/ui/button";
import { Link } from "@tanstack/react-router";

export function CallToAction() {
  return (
    <section className="border-t relative">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-32 border-x">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Call to Action</h2>
          <p className="mt-4">Libero sapiente aliquam quibusdam aspernatur.</p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/">
                <span>Get Started</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/">
                <span>Book Demo</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
