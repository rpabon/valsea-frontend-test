import { PersonQuery } from "../generated/graphql";

export function getSpeciesHeight(person: PersonQuery["person"]): string {
  if (!person?.species || !person.species.averageHeight) {
    return "Species average height not available";
  }

  const { name, averageHeight } = person.species;
  const height = (averageHeight / 100).toFixed(2);
  return `The average height of the ${name} species is ${height}m`;
}
