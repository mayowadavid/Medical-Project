import { gql } from "urql";

export const getLinkTypes = gql`
  query {
    listLinkTypes {
      items {
        id
        name
        sourceToTargetKey
        targetToSourceKey
      }
    }
  }
`;
