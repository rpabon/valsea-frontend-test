import { useQuery } from "urql";
import { HomeQuery } from "../generated/graphql";
import query from "../queries/home.query";
import { filterNull } from "../utils/filter-null";

export function useHomeQuery() {
  const [result] = useQuery<HomeQuery>({ query });
  const persons =
    result.data?.allPeople?.edges
      ?.map((edge) => edge?.node)
      .filter(filterNull) || [];

  return {
    persons,
    loading: result.fetching,
    error: result.error,
  };
}
