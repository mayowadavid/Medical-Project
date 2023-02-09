import { gql } from "urql";

export const listAppointmentsQuery = (entityId: string) => {
  return gql`
    query listAppointments {
        listAppointments(
            where: {attendees: { entityId: { eq: "${entityId}"} }}
            order: { id: DESC }
        ) {
            items {
            id
            title
            startDateTimeUtc
            endDateTimeUtc
            isDeleted
            attendees {
                id
                key
                confirmed
                attended
                mode
            }
            }
        }
    }
`;
};

export const getAppointmentByIdQuery = gql`
  query getAppointment($id: String!) {
    getAppointmentById(id: $id) {
      id
      startDateTimeUtc
      endDateTimeUtc
      location
      attendees {
        entity {
          id
          name
          valueAsJsonString
          addresses {
            id
            key
            fields {
              key
              value
            }
          }
        }
        id
        key
        confirmed
        attended
        mode
      }
    }
  }
`;
