import { useQuery, gql } from "@apollo/client";

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      emoji
    }
  }
`;

function CountriesList() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.countries.map((country: any) => (
        <li key={country.code}>
          {country.emoji} {country.name}
        </li>
      ))}
    </ul>
  );
}

export default CountriesList;
