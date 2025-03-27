import { useQuery } from "@tanstack/react-query"
import axios from "axios";

const Home = () => {
  const postQuery = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const data = await response.data;
      return data;
    }
  });

  if (postQuery.isLoading) return <h1>Loading....</h1>;
  if (postQuery.isError) return <h1>Error loading data!!!</h1>;

  return (
    <div>
      <h1>Home</h1>
      {postQuery.data.map((item: any) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  )
}

export default Home