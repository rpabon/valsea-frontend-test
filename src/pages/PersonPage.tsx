import { useParams } from "react-router-dom";
import { useQuery } from "urql";
import query from "../queries/person.query";
import { PersonQuery } from "../generated/graphql";
import { PersonProducerList } from "../components/PersonProducerList";
import { SpeciesAverageHeight } from "../components/SpeciesAverageHeight";
import { FilmCarousel } from "../components/FilmCarousel";

const PersonPage = () => {
  const { personId } = useParams<{ personId?: string }>();
  const [result] = useQuery<PersonQuery>({
    query,
    variables: { personId },
  });
  if (!result.data) return null;

  if (!personId) {
    return <div>Person ID not found</div>;
  }
  const films = result.data.allFilms;
  const height = result.data.species?.averageHeight || 0;

  return (
    <>
      <h1>{result.data.person?.name}</h1>
      <h3>{result.data.person?.birthYear}</h3>
      <SpeciesAverageHeight height={height} />
      <PersonProducerList films={films} />
      <FilmCarousel films={films} />
    </>
  );
};

export default PersonPage;
