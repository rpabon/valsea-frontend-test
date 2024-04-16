import { FilmCarousel } from "../components/FilmCarousel";
import { PersonCard } from "../components/PersonCard";
import { PersonProducerList } from "../components/PersonProducerList";
import { SpeciesAverageHeight } from "../components/SpeciesAverageHeight";
import { usePersonQuery } from "../hooks/usePersonQuery";

const PersonPage = () => {
  const query = usePersonQuery();

  return (
    <>
      <PersonCard {...query.personDetails} />
      <PersonProducerList list={query.producerList} />
      <SpeciesAverageHeight height={query.averageHeight} />
      <FilmCarousel films={query.filmList} />
    </>
  );
};

export default PersonPage;
