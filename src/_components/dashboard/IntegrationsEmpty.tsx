import { Gemini, Replit, MagicUI, VSCodium, MediaWiki, GooglePaLM } from "./logos";
import { LogoIcon } from "@/_components/logo";
import { cn } from "@/_lib/utils";
import { Button } from "@/_components/ui/button";
import { Link } from "@tanstack/react-router";

export function IntegrationsEmpty() {
  return (
    <section>
      <div className="relative mx-auto w-fit mask-[radial-gradient(circle_farthest-corner,black,transparent_75%)]">
        <div className="mx-auto mb-2 flex w-fit justify-center gap-2">
          <IntegrationCard>
            <Gemini />
          </IntegrationCard>
          <IntegrationCard>
            <Replit />
          </IntegrationCard>
        </div>
        <div className="mx-auto my-2 flex w-fit justify-center gap-2">
          <IntegrationCard>
            <MagicUI />
          </IntegrationCard>
          <IntegrationCard borderClassName="shadow-xl border">
            <LogoIcon />
          </IntegrationCard>
          <IntegrationCard>
            <VSCodium />
          </IntegrationCard>
        </div>
        <div className="mx-auto flex w-fit justify-center gap-2">
          <IntegrationCard>
            <MediaWiki />
          </IntegrationCard>
          <IntegrationCard>
            <GooglePaLM />
          </IntegrationCard>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-lg space-y-6 text-center">
        <h2 className="text-balance text-3xl font-semibold md:text-4xl">Integrations not configured</h2>
        <p className="text-muted-foreground">
          Connect your [REDACTED] tools and [REDACTED] to enhance your [REDACTED] operations.
        </p>
        <Button variant="outline" size="sm" asChild>
          <Link to="/dashboard/organization-settings/integrations">Get Started</Link>
        </Button>
      </div>
    </section>
  );
}

const IntegrationCard = ({
  children,
  className,
  borderClassName,
}: {
  children: React.ReactNode;
  className?: string;
  borderClassName?: string;
}) => {
  return (
    <div className={cn("relative flex size-20 rounded-xl", className)}>
      <div role="presentation" className={cn("absolute inset-0 rounded-xl border", borderClassName)} />
      <div className="relative z-20 m-auto size-fit *:size-8">{children}</div>
    </div>
  );
};
