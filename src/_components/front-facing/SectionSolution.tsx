import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from "lucide-react";

export function SectionSolutions() {
  return (
    <section>
      <div className="mx-auto max-w-5xl space-y-8 md:space-y-16 px-6 py-12 md:py-20">
        <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">Solution Section</h2>
          <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="mx-auto grid  divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4" />
              <h3 className="text-sm font-medium">Solution No1</h3>
            </div>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4" />
              <h3 className="text-sm font-medium">Solution No2</h3>
            </div>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Fingerprint className="size-4" />
              <h3 className="text-sm font-medium">Solution No3</h3>
            </div>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Pencil className="size-4" />
              <h3 className="text-sm font-medium">Solution No4</h3>
            </div>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Settings2 className="size-4" />
              <h3 className="text-sm font-medium">Solution No5</h3>
            </div>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />
              <h3 className="text-sm font-medium">Solution No6</h3>
            </div>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
