import { Person } from "../generated/graphql";

export function PersonListItem(props: PersonProps): JSX.Element {
  const { person } = props;

  return (
    <li key={person.id}>
      <a href={`/person/${person.id}`}>{person.name}</a>
    </li>
  );
}

interface PersonProps {
  person: Person;
}
