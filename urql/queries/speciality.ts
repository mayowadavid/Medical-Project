import { gql } from "urql";

export const getSpecialitiesQuery = (archetypeId: string) => {
  return gql`
  query getDoctorSpecialities {
    listEntities(
      where: { archetypeId: { eq: "${archetypeId}" } }
    ) {
      totalCount
      items {
        id
        name
        valueAsJsonString
      }
    }
  }
`;
};
