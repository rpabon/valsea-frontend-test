import { getSpeciesHeight } from "../utils/get-species-height";

export function SpeciesAverageHeight(props: {
  height: ReturnType<typeof getSpeciesHeight>;
}) {
  return <h3 className="text-md font-bold mb-4">{props.height}</h3>;
}
