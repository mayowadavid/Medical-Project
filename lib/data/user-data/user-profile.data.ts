export const USER_PROFILE = {
  salutation: "Mr.",
  firstName: "Willy",
  lastName: "Bernadus",
  dateOfBirth: new Date("2001-10-15"),
  addresses: [
    {
      id: 1,
      location:
        "Farrer Park Medical Centre Connexion , 1 Farrer Park Station Road Singapore",
      postalCode: "217562",
      unitNo: "12-11",
    },
  ],
  identities: [
    {
      id: 1,
      type: "NRIC",
      value: "123456789",
    },
  ],
  contacts: [
    {
      id: 1,
      type: "phone",
      value: "435646384",
    },
    {
      id: 2,
      type: "email",
      value: "willy@gmail.com",
    },
  ],
  Gender: "Male",
  Nationality: "Singapore",
  allergies: {
    drugAllergies: [],
    foodAllergies: ["Apple"],
  },
  medicalHistory: [],
  currentMedication: [],
  nokDetails: {
    name: "Billy",
    phone: [
      {
        id: 1,
        value: "43545345",
      },
    ],
    relationship: "Brother",
  },
};
