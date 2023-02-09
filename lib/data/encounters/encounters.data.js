const ENCOUNTERS = [
  {
    id: "e1",
    appointmentId: "a1",
    caseId: "c1",
    startDateTimeUTCTimeUTC: "2022-06-07T08:00:00Z",
    endDateTimeUTCTimeUTC: "2022-06-07T08:00:00Z",
    isVirtual: true,
    meetingId: "https://www.google.com",
    title: "Appointment with Dr. New",
    location: "",
    attendees: [
      {
        id: "1",
        entityId: "d1",
        key: "doctor",
      },
      {
        id: "2",
        entityId: "asd",
        key: "patient",
      },
      {
        id: "3",
        entityId: "r1",
        key: "room",
      },
    ],
    medicalRecords: {
      prescriptionId: "p1",
      labResultIds: ["lr1", "lr2"],
    },
  },
  {
    id: "e2",
    appointmentId: "a2",
    caseId: "c1",
    startDateTimeUTC: "2022-06-07T08:00:00Z",
    endDateTimeUTC: "2022-06-07T08:00:00Z",
    isVirtual: false,
    meetingId: "",
    title: "Consultation with Dr. New",
    location: "747 52nd St. Oakland, CA 94609",
    attendees: [
      {
        id: "1",
        entityId: "d1",
        key: "doctor",
      },
      {
        id: "2",
        entityId: "asd",
        key: "patient",
      },
      {
        id: "3",
        entityId: "r1",
        key: "room",
      },
    ],
    medicalRecords: {
      prescriptionId: "p2",
      labResultIds: ["lr3"],
    },
  },
  {
    id: "e3",
    appointmentId: "a3",
    caseId: "c3",
    startDateTimeUTC: "2022-06-07T08:00:00Z",
    endDateTimeUTC: "2022-06-07T08:00:00Z",
    isVirtual: true,
    meetingId: "https://www.google.com",
    title: "Consultation with Dr. Good",
    location: "747 52nd St. Oakland, CA 94609",
    attendees: [
      {
        id: "1",
        entityId: "d1",
        key: "doctor",
      },
      {
        id: "2",
        entityId: "asd",
        key: "patient",
      },
      {
        id: "3",
        entityId: "r1",
        key: "room",
      },
    ],
    medicalRecords: {
      prescriptionId: "p3",
      labResultIds: ["lr4", "lr5"],
    },
  },
  {
    id: "e4",
    appointmentId: "a4",
    caseId: "c1",
    startDateTimeUTC: "2022-06-07T08:00:00Z",
    endDateTimeUTC: "2022-06-07T08:00:00Z",
    isVirtual: true,
    meetingId: "https://www.google.com",
    title: "Appointment with Dr. Mendes",
    location: "747 52nd St. Oakland, CA 94609",
    attendees: [
      {
        id: "1",
        entityId: "d1",
        key: "doctor",
      },
      {
        id: "2",
        entityId: "asd",
        key: "patient",
      },
      {
        id: "3",
        entityId: "r1",
        key: "room",
      },
    ],
    medicalRecords: {
      prescriptionId: "p1",
      labResultIds: ["lr1", "lr2"],
    },
  },
  {
    id: "e5",
    appointmentId: "a5",
    caseId: "c2",
    startDateTimeUTC: "2022-06-07T08:00:00Z",
    endDateTimeUTC: "2022-06-07T08:00:00Z",
    isVirtual: true,
    meetingId: "https://www.google.com",
    title: "Visit with Dr. Paul",
    location: "747 52nd St. Oakland, CA 94609",
    attendees: [
      {
        id: "1",
        entityId: "d1",
        key: "doctor",
      },
      {
        id: "2",
        entityId: "asd",
        key: "patient",
      },
      {
        id: "3",
        entityId: "r1",
        key: "room",
      },
    ],
    medicalRecords: {
      prescriptionId: "p5",
      labResultIds: ["lr6"],
    },
  },
];

export default ENCOUNTERS;
