import { gql, useQuery } from "@apollo/client";

const GET_POST = gql`
    query {
    posts {
      data {
        id
        title
        body
      }
    }
  }
`

function PostList() {
    const { loading, error, data } = useQuery(GET_POST);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <ul>
          {data.posts.data.map((post: any) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      );
}

export default PostList;
