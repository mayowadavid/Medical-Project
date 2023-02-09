import { gql } from "urql";

export const updateEntityJsonMutation = gql`
  mutation updateEntity($entityId: String, $valueAsJsonString: String) {
    updateEntity(
      input: { id: $entityId, valueAsJsonString: $valueAsJsonString }
    ) {
      valueAsJsonString
    }
  }
`;
export const getEntityByIdQueryOnlyJson = gql`
  query ($id: String!) {
    getEntityById(id: $id) {
      valueAsJsonString
    }
  }
`;
