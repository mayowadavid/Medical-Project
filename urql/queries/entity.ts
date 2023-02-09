import { gql } from "urql";

export const getEntityByIdQuery = gql`
  query ($id: String!) {
    getEntityById(id: $id) {
      addresses {
        id
        key
        fields {
          key
          value
        }
      }
      contacts {
        id
        key
        value
      }
      identifiers {
        id
        key
        value
      }
      valueAsJsonString
    }
  }
`;
