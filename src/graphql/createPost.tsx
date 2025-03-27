import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";

const CREATE_POST = gql`
  mutation CreatePost($title: String!, $body: String!) {
    createPost(input: { title: $title, body: $body }) {
      id
      title
      body
    }
  }
`;

function CreatePost() {
  const [createPost, { data, loading, error }] = useMutation(CREATE_POST);

  const handleSubmit = () => {
    createPost({
      variables: { title: "My New Post", body: "This is the content" },
    });
  };

  return (
    <div>
      <button onClick={handleSubmit}>Create Post</button>
      {loading && <p>Creating post...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <p>
          Post Created: {data.createPost.title} (ID: {data.createPost.id})
        </p>
      )}
    </div>
  );
}

export default CreatePost;
