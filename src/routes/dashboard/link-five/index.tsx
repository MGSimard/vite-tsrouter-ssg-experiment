import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/link-five/")({
  component: RouteComponent,
  loader: () => ({ crumb: "Link Five" }),
});

function RouteComponent() {
  return <div>Hello "/dashboard/link-five/"!</div>;
}
