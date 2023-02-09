import { gql } from "urql";
export const getEntityByIdQueryForAddress = gql`
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
    }
  }
`;
export const addAddressMutation = gql`
  mutation addAddressToEntity(
    $entityId: String!
    $key: String
    $fields: [AddressFieldInput]
  ) {
    addAddressToEntity(
      input: { entityId: $entityId, key: $key, fields: $fields }
    ) {
      id
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
export const updateAddressMutation = gql`
  mutation updateAddressOfEntity(
    $entityId: String!
    $id: String
    $key: String
    $fields: [AddressFieldInput]
  ) {
    updateAddressOfEntity(
      input: { entityId: $entityId, id: $id, key: $key, fields: $fields }
    ) {
      id
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
