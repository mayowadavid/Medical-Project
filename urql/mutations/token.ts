import { gql } from "urql";

export const generateTokenMutation = gql`
  mutation generateAccessToken(
    $username: String!
    $password: String!
    $client_id: String!
    $client_secret: String!
    $tenantId: String!
  ) {
    generateAccessToken(
      input: {
        username: $username
        password: $password
        client_id: $client_id
        client_secret: $client_secret
        tenantId: $tenantId
      }
    ) {
      access_token
      expires_in
    }
  }
`;
