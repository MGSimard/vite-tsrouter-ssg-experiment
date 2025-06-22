import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/organization-settings/billing/nested-test/deep")({
  component: RouteComponent,
  loader: () => ({ crumb: "Deep Test" }),
});

function RouteComponent() {
  return (
    <div className="max-w-8xl w-full mx-auto flex flex-1 flex-col gap-4 p-6">
      Hello "/dashboard/organization-settings/billing/nested-test/deep"!
    </div>
  );
}
