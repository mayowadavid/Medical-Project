import { gql } from "urql";

export const createAppointmentMutation = gql`
mutation CREATEAPPOINTMEN($data: CreateAppointmentInput!){
    createAppointment(input: $data) {
      title
      id
      description
      startDateTimeUtc
      endDateTimeUtc
      location
      lastModifiedAt
      tenant {
        id
      }
    }
  }
`;
