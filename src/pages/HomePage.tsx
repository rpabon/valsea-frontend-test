import { gql, useQuery } from "urql";
import { HomeQuery } from "../generated/graphql";
import { PersonListItem } from "../components/Person";

const query = gql`
  query Home {
    allPeople {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

const HomePage = () => {
  const [result] = useQuery<HomeQuery>({ query });
  const persons = result.data?.allPeople?.edges || [];

  return (
    <ul>
      {persons.map((edge) => {
        if (!edge || !edge.node) return null;
        return <PersonListItem key={edge.node.id} person={edge.node} />;
      })}
    </ul>
  );
};

export default HomePage;
