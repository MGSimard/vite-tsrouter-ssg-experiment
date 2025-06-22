import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/organization-settings/api-keys")({
  component: RouteComponent,
  loader: () => ({ crumb: "API Keys" }),
});

function RouteComponent() {
  return (
    <div className="max-w-8xl w-full mx-auto flex flex-1 flex-col gap-4 p-6">
      Hello "/dashboard/organization-settings/api-keys"!
    </div>
  );
}
