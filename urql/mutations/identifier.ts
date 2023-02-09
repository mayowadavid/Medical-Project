import { gql } from "urql";
export const getEntityByIdQueryForNationality = gql`
  query ($id: String!) {
    getEntityById(id: $id) {
      identifiers {
        id
        key
        value
      }
      addresses {
        id
        key
        fields {
          key
          value
        }
      }
    }
  }
`;
export const updateEntityIdentifierMutation = gql`
  mutation updateIdentifierOfEntity(
    $entityId: String
    $id: String
    $key: String
    $value: String
  ) {
    updateIdentifierOfEntity(
      input: { entityId: $entityId, id: $id, key: $key, value: $value }
    ) {
      id
      identifiers {
        id
        key
        value
      }
      valueAsJsonString
    }
  }
`;
export const addEntityIdentifierMutation = gql`
  mutation addIdentifierToEntity(
    $entityId: String
    $key: String
    $value: String
  ) {
    addIdentifierToEntity(
      input: { entityId: $entityId, key: $key, value: $value }
    ) {
      id
      identifiers {
        id
        key
        value
      }
      valueAsJsonString
    }
  }
`;
