import { Card, CardContent, CardHeader } from "@/_components/ui/card";
import { ChartNoAxesColumn, DollarSign, TriangleAlert } from "lucide-react";

export function SectionProblems() {
  return (
    <section className="border-t">
      <div className="@container mx-auto max-w-5xl px-6 py-12 md:py-20 border-x">
        <h2 className="text-balance text-4xl font-semibold lg:text-5xl text-center">Industry Problems Section</h2>
        <p className="mt-4 text-center text-muted-foreground">
          Libero sapiente aliquam quibusdam aspernatur, praesentium iusto repellendus.
        </p>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 [--color-background:var(--color-muted)] [--color-card:var(--color-muted)] *:text-center md:mt-16 dark:[--color-muted:var(--color-zinc-900)]">
          <Card className="group border-0 shadow-none bg-transparent">
            <CardHeader className="pb-3">
              <CardDecorator>
                <TriangleAlert className="size-6 text-border group-hover:text-primary" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-medium">Problem No1</h3>
            </CardHeader>
            <CardContent>
              <p className="mt-3 text-sm text-balance">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nobis vel deleniti perferendis,
                delectus reiciendis pariatur expedita.
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 shadow-none bg-transparent">
            <CardHeader className="pb-3">
              <CardDecorator>
                <DollarSign className="size-6 text-border group-hover:text-primary" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-medium">Problem No2</h3>
            </CardHeader>
            <CardContent>
              <p className="mt-3 text-sm text-balance">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odio sed facere eligendi dolor velit
                laboriosam voluptatem.
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 shadow-none bg-transparent">
            <CardHeader className="pb-3">
              <CardDecorator>
                <ChartNoAxesColumn className="size-6 text-border group-hover:text-primary" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-medium">Problem No3</h3>
            </CardHeader>
            <CardContent>
              <p className="mt-3 text-sm text-balance">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odio sed facere eligendi dolor velit
                laboriosam voluptatem.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: React.ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div aria-hidden className="bg-radial to-background absolute inset-0 from-transparent to-75%" />
    <div className="dark:bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t bg-white">
      {children}
    </div>
  </div>
);
