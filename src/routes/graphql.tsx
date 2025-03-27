import { createFileRoute } from '@tanstack/react-router'
import PostList from '../graphql/listPost'
import CreatePost from '../graphql/createPost'

export const Route = createFileRoute('/graphql')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <CreatePost />
    <PostList />
  </>
}
