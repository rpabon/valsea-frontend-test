import { PersonQuery } from "../generated/graphql";

export function FilmCarousel(props: FilmCarouselProps) {
  if (!props.films) return null;
  const formattedFilms = formatFilms(props.films);

  return (
    <div>
      {formattedFilms.map((film) => (
        <div key={film?.title}>
          <h3>{film?.title}</h3>
          <p>Release date: {film?.releaseDate}</p>
          <p>Number of dry planets: {film?.numberOfDryPlanets}</p>
        </div>
      ))}
    </div>
  );
}

function formatFilms(films: PersonQuery["allFilms"]) {
  return (
    films?.edges
      ?.map((edge) => edge?.node)
      .map((node) => ({
        title: node?.title || "",
        releaseDate: node?.releaseDate || "",
        numberOfDryPlanets:
          node?.planetConnection?.edges?.reduce(
            (count, edge) =>
              edge?.node?.surfaceWater === 0 ? count + 1 : count,
            0
          ) || 0,
      })) || []
  );
}

interface FilmCarouselProps {
  films: PersonQuery["allFilms"];
}
