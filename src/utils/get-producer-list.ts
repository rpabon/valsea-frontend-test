import { PersonQuery } from "../generated/graphql";

export function getProducerList(person: PersonQuery["person"]): Producer[] {
  return (
    person?.filmConnection?.edges
      ?.map((edge) => edge?.node)
      .map((film) => film?.producers)
      .flat()
      .reduce((acc, producer) => {
        if (!producer) return acc;

        const existingProducer = acc.find((p) => p.name === producer);
        if (existingProducer) {
          existingProducer.times++;
        } else {
          acc.push({ name: producer, times: 1 });
        }
        return acc;
      }, [] as Producer[])
      .sort((a, b) => b.times - a.times) || []
  );
}

interface Producer {
  name: string;
  times: number;
}
