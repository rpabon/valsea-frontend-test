import { Link } from "react-router-dom";
import { useQuery } from "urql";
import { HomeQuery } from "../generated/graphql";
import query from "../queries/home.query";

const HomePage = () => {
  const [result] = useQuery<HomeQuery>({ query });
  const edges = result.data?.allPeople?.edges || [];

  return (
    <ul>
      {edges.map((edge) => {
        const person = edge?.node;
        if (!person) return null;

        return (
          <li key={person.id}>
            <Link to={`/person/${person.id}`}>{person.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default HomePage;
