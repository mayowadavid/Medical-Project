import { gql } from "urql";

export const createEntityMutation = gql`
  mutation entity($archetypeId: String, $tenantId: String) {
    createEntity(input: { archetypeId: $archetypeId, tenantId: $tenantId }) {
      id
    }
  }
`;
