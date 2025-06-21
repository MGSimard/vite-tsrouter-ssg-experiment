import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/link-four/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/link-four/"!</div>
}
