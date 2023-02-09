import { gql } from "urql";

export const changePasswordMutation = gql`
  mutation changePassword(
    $userId: String
    $newPassword: String
    $oldPassword: String
  ) {
    changePassword(
      input: {
        userId: $userId
        newPassword: $newPassword
        oldPassword: $oldPassword
      }
    ) {
      isSuccess
      status
    }
  }
`;
