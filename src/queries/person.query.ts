import { gql } from "urql";

export default gql`
  query Person($personId: ID!) {
    person(id: $personId) {
      name
      birthYear
    }
    species(id: $personId) {
      averageHeight
    }
    allFilms {
      totalCount
      edges {
        node {
          title
          releaseDate
          producers
          planetConnection {
            edges {
              node {
                surfaceWater
              }
            }
          }
        }
      }
    }
  }
`;
