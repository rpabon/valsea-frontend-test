import { FilmCarousel } from "@/components/FilmCarousel";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { PersonCard } from "@/components/PersonCard";
import { PersonProducerList } from "@/components/PersonProducerList";
import { SpeciesAverageHeight } from "@/components/SpeciesAverageHeight";
import { usePersonQuery } from "@/hooks/usePersonQuery";
import { Divider } from "@/components/Divider";

const PersonPage = () => {
  const query = usePersonQuery();

  if (query.loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex flex-col items-center p-10">
      <PersonCard {...query.personDetails} />
      <SpeciesAverageHeight height={query.averageHeight} />
      <Divider />
      <PersonProducerList list={query.producerList} />
      <Divider />
      <FilmCarousel films={query.filmList} />
    </div>
  );
};

export default PersonPage;
