import { gql } from "urql";

export default gql`
  query Person($personId: ID!) {
    person(id: $personId) {
      name
      birthYear

      species {
        name
        averageHeight
      }

      filmConnection {
        edges {
          node {
            title
            releaseDate
            producers

            planetConnection {
              edges {
                node {
                  name
                  surfaceWater
                }
              }
            }
          }
        }
      }
    }
  }
`;
