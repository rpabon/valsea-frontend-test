import { type getPersonDetails } from "../utils/get-person-details";

export function PersonCard(
  props: ReturnType<typeof getPersonDetails>
): JSX.Element {
  const { name, birthYear } = props;

  return (
    <div>
      <h1>{name}</h1>
      <p>{birthYear}</p>
    </div>
  );
}

interface PersonCardProps {}
