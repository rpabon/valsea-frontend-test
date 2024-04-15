import { PersonQuery } from "../generated/graphql";

export function PersonProducerList(props: PersonProducerListProps) {
  const producers = getProducersArray(props.films);

  return (
    <ul>
      {producers.map((producer) => (
        <li key={producer.name}>
          {producer.name} ({producer.times})
        </li>
      ))}
    </ul>
  );
}

function getProducersArray(films: PersonQuery["allFilms"]) {
  return (
    films?.edges
      ?.map((edge) => edge?.node?.producers)
      .flat()
      .reduce((acc, producer) => {
        if (producer) {
          const existingProducer = acc.find((p) => p.name === producer);

          if (existingProducer) {
            existingProducer.times += 1;
          } else {
            acc.push({ name: producer, times: 1 });
          }
        }

        return acc;
      }, [] as Producer[])
      .sort((a, b) => b.times - a.times) || []
  );
}

interface PersonProducerListProps {
  films: PersonQuery["allFilms"];
}

interface Producer {
  name: string;
  times: number;
}
