import { useParams } from "react-router-dom";
import { useQuery } from "urql";
import { PersonQuery } from "../generated/graphql";
import query from "../queries/person.query";
import { getPersonDetails } from "../utils/get-person-details";
import { getSpeciesHeight } from "../utils/get-species-height";
import { getProducerList } from "../utils/get-producer-list";
import { getFilmList } from "../utils/get-film-list";

export function usePersonQuery() {
  const { personId } = useParams<{ personId?: string }>();
  const [result] = useQuery<PersonQuery>({
    query,
    variables: { personId },
  });

  return {
    loading: result.fetching,
    error: result.error,
    personDetails: getPersonDetails(result.data?.person),
    averageHeight: getSpeciesHeight(result.data?.person),
    producerList: getProducerList(result.data?.person),
    filmList: getFilmList(result.data?.person),
  };
}
