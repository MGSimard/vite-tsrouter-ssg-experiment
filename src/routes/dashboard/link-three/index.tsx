import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/link-three/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/link-three/"!</div>
}
