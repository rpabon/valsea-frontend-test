import { getFilmList } from "../utils/get-film-list";

export function FilmCarousel(props: { films: ReturnType<typeof getFilmList> }) {
  const { films } = props;

  return (
    <div>
      <h1>Films</h1>
      <ul>
        {films.map(({ title, releaseDate, numberOfDryPlanets }) => (
          <li key={title}>
            {title} <small>({releaseDate})</small>
            <p>Number of planets without water: {numberOfDryPlanets}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
