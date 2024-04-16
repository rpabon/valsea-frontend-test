import { PersonQuery } from "../generated/graphql";

export function getPersonDetails(person: PersonQuery["person"]): {
  name: string;
  birthYear: string;
} {
  return {
    name: person?.name || "",
    birthYear: person?.birthYear || "",
  };
}
