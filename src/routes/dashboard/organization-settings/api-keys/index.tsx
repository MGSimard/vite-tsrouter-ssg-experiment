import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/dashboard/organization-settings/api-keys/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/organization-settings/api-keys/"!</div>
}
