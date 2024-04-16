import { type getPersonDetails } from "../utils/get-person-details";

export function PersonCard(props: ReturnType<typeof getPersonDetails>) {
  const { name, birthYear } = props;

  return (
    <div className="text-center p-4">
      <h1 className="text-4xl font-bold mb-2">{name}</h1>
      <p className="text-gray-700">Born in {birthYear}</p>
    </div>
  );
}
