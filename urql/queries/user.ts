import { gql } from "urql";

export const checkUserExistsQuery = gql`
  query userExists($userName: String!) {
    userExists(userName: $userName)
  }
`;

export const getCurrentUserQuery = gql`
  query {
    me {
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
