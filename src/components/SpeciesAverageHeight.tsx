import { getSpeciesHeight } from "../utils/get-species-height";

export function SpeciesAverageHeight(props: {
  height: ReturnType<typeof getSpeciesHeight>;
}) {
  const { height } = props;

  return (
    <div>
      <h1>{height}</h1>
    </div>
  );
}
