import { gql } from "urql";

export const createUserMutation = gql`
  mutation createUser(
    $userName: String!
    $email: String!
    $password: String!
    $entityId: String
    $attachedRoleIds: [String]
  ) {
    createUser(
      input: {
        userName: $userName
        email: $email
        password: $password
        entityId: $entityId
        attachedRoleIds: $attachedRoleIds
      }
    ) {
      id
      userName
      email
      entity {
        id
      }
      phoneNumber
    }
  }
`;
