import { createFileRoute } from '@tanstack/react-router'
import Home from '../tanstackQueryUser'

export const Route = createFileRoute('/tquery')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Home/>
}
