import { PersonQuery } from "../generated/graphql";

export function getFilmList(person: PersonQuery["person"]): Film[] {
  return (
    person?.filmConnection?.edges
      ?.map((edge) => edge?.node)
      ?.map((film) => ({
        title: film?.title || "",
        releaseDate: formatDate(film?.releaseDate),
        numberOfDryPlanets:
          film?.planetConnection?.edges?.reduce(
            (count, edge) =>
              edge?.node?.surfaceWater === 0 ? count + 1 : count,
            0
          ) || 0,
      })) || []
  );
}

function formatDate(dateString?: string | null): string {
  if (!dateString) return "";

  return new Date(dateString).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

interface Film {
  title: string;
  releaseDate: string;
  numberOfDryPlanets: number;
}
