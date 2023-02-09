export const DOCTORS = [
  {
    id: "1",
    name: "Dr. Thor Odinson",
    gender: "Male",
    specialityIds: ["sp5", "sp2"],
    fees: "S$100",
    imageUrl:
      "https://kenzawellness.com/clinic/images/sample/doctors/doctor-home.png",
    workSchedule: {
      online: [
        {
          id: "1",
          regularHours: [
            {
              day: "Sunday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
            {
              day: "Monday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Tuesday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Wednesday",
              hours: [
                { open: "06:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Thursday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],

              isOpen: true,
              is24: false,
            },
            {
              day: "Friday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Saturday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
          ],
        },
      ],
      offline: [
        {
          id: "1",
          branchid: "1",
          name: "Branch One",
          regularHours: [
            {
              day: "Sunday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
            {
              day: "Monday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Tuesday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Wednesday",
              hours: [
                { open: "06:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Thursday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],

              isOpen: true,
              is24: false,
            },
            {
              day: "Friday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Saturday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
          ],
          specialHours: [
            {
              day: "2022-06-22",
              isOpen: false,
              is24: false,
              hours: [
                {
                  open: "06:00",
                  close: "12:00",
                },
                {
                  open: "13:00",
                  close: "20:00",
                },
              ],
            },
            {
              day: "2022-06-17",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
            {
              day: "2021-12-26",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
          ],
        },
        {
          id: "2",
          name: "Branch Two",
          branchid: "2",
          regularHours: [
            {
              day: "Sunday",
              hours: [
                { open: "09:00", close: "11:00" },
                { open: "14:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
            {
              day: "Monday",
              hours: [
                { open: "05:00", close: "09:00" },
                { open: "13:00", close: "15:00" },
              ],
              isOpen: true,
              is24: true,
            },
            {
              day: "Tuesday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Wednesday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Thursday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],

              isOpen: true,
              is24: false,
            },
            {
              day: "Friday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Saturday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
          ],
          specialHours: [
            {
              day: "2022-06-19",
              isOpen: true,
              is24: false,
              hours: [
                {
                  open: "06:00",
                  close: "12:00",
                },
                {
                  open: "13:00",
                  close: "20:00",
                },
              ],
            },
            {
              day: "2021-12-25",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
            {
              day: "2021-12-26",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
          ],
        },
      ],
    },
    mode: ["Online", "Offline"],
    services: ["Cardioversion", "Non-invasive cardiology"],
    details: [
      {
        id: 1,
        title: "Specializations",
        content: "Cardiologist, Cosmetologist",
      },
      {
        id: 2,
        title: "Education",
        content: "MBBS, MD",
      },
      {
        id: 3,
        title: "Experience",
        content: "10 years in cardiology, 5 years in cosmetology",
      },
    ],
  },
  {
    id: "2",
    name: "Dr Rita Mendes",
    gender: "Female",
    specialityIds: ["sp4", "sp1"],
    fees: "S$100",
    imageUrl:
      "http://wwsthemes.com/themes/medwise/v1.4/images/doctor-single.jpg",
    workSchedule: {
      online: [
        {
          id: "1",
          regularHours: [
            {
              day: "Sunday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
            {
              day: "Monday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Tuesday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Wednesday",
              hours: [
                { open: "06:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Thursday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],

              isOpen: true,
              is24: false,
            },
            {
              day: "Friday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Saturday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
          ],
        },
      ],
    },
    mode: ["Online"],
    services: ["Heart Conditions", "Cardiac Catheterisation"],
    details: [
      {
        id: 1,
        title: "Specializations",
        content: "Cardiologist, Cosmetologist",
      },
      {
        id: 2,
        title: "Education",
        content: "MBBS, MD",
      },
      {
        id: 3,
        title: "Experience",
        content: "10 years in cardiology, 5 years in cosmetology",
      },
    ],
  },
  {
    id: "3",
    name: "Dr. Bruce Lee",
    gender: "Male",
    specialityIds: ["sp3"],
    fees: "S$100",
    imageUrl:
      "https://kenzawellness.com/clinic/images/sample/doctors/doctor-home.png",
    workSchedule: {
      offline: [
        {
          id: "1",
          branchid: "1",
          name: "Branch One",
          regularHours: [
            {
              day: "Sunday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
            {
              day: "Monday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Tuesday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Wednesday",
              hours: [
                { open: "06:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Thursday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],

              isOpen: true,
              is24: false,
            },
            {
              day: "Friday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Saturday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
          ],
          specialHours: [
            {
              day: "2022-06-22",
              isOpen: false,
              is24: false,
              hours: [
                {
                  open: "06:00",
                  close: "12:00",
                },
                {
                  open: "13:00",
                  close: "20:00",
                },
              ],
            },
            {
              day: "2022-06-17",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
            {
              day: "2021-12-26",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
          ],
        },
        {
          id: "2",
          name: "Branch Two",
          branchid: "2",
          regularHours: [
            {
              day: "Sunday",
              hours: [
                { open: "09:00", close: "11:00" },
                { open: "14:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
            {
              day: "Monday",
              hours: [
                { open: "05:00", close: "09:00" },
                { open: "13:00", close: "15:00" },
              ],
              isOpen: true,
              is24: true,
            },
            {
              day: "Tuesday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Wednesday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Thursday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],

              isOpen: true,
              is24: false,
            },
            {
              day: "Friday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Saturday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
          ],
          specialHours: [
            {
              day: "2022-06-19",
              isOpen: true,
              is24: false,
              hours: [
                {
                  open: "06:00",
                  close: "12:00",
                },
                {
                  open: "13:00",
                  close: "20:00",
                },
              ],
            },
            {
              day: "2021-12-25",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
            {
              day: "2021-12-26",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
          ],
        },
      ],
    },
    mode: ["Offline"],
    services: ["Cardioversion", "Heart Conditions"],
    details: [
      {
        id: 1,
        title: "Specializations",
        content: "Cardiologist, Cosmetologist",
      },
      {
        id: 2,
        title: "Education",
        content: "MBBS, MD",
      },
      {
        id: 3,
        title: "Experience",
        content: "10 years in cardiology, 5 years in cosmetology",
      },
    ],
  },
  {
    id: "4",
    name: "Dr. Dexter Cruise",
    gender: "Male",
    specialityIds: ["sp5", "sp8"],
    fees: "S$100",
    imageUrl:
      "https://kenzawellness.com/clinic/images/sample/doctors/doctor-home.png",
    workSchedule: {
      offline: [
        {
          id: "1",
          branchid: "1",
          name: "Branch One",
          regularHours: [
            {
              day: "Sunday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
            {
              day: "Monday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Tuesday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Wednesday",
              hours: [
                { open: "06:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Thursday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],

              isOpen: true,
              is24: false,
            },
            {
              day: "Friday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Saturday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
          ],
          specialHours: [
            {
              day: "2022-06-22",
              isOpen: false,
              is24: false,
              hours: [
                {
                  open: "06:00",
                  close: "12:00",
                },
                {
                  open: "13:00",
                  close: "20:00",
                },
              ],
            },
            {
              day: "2022-06-17",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
            {
              day: "2021-12-26",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
          ],
        },
        {
          id: "2",
          name: "Branch Two",
          branchid: "2",
          regularHours: [
            {
              day: "Sunday",
              hours: [
                { open: "09:00", close: "11:00" },
                { open: "14:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
            {
              day: "Monday",
              hours: [
                { open: "05:00", close: "09:00" },
                { open: "13:00", close: "15:00" },
              ],
              isOpen: true,
              is24: true,
            },
            {
              day: "Tuesday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Wednesday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Thursday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],

              isOpen: true,
              is24: false,
            },
            {
              day: "Friday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Saturday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
          ],
          specialHours: [
            {
              day: "2022-06-19",
              isOpen: true,
              is24: false,
              hours: [
                {
                  open: "06:00",
                  close: "12:00",
                },
                {
                  open: "13:00",
                  close: "20:00",
                },
              ],
            },
            {
              day: "2021-12-25",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
            {
              day: "2021-12-26",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
          ],
        },
      ],
    },
    mode: ["Offline"],
    services: ["Cardioversion", "Cardiac Catheterisation"],
    details: [
      {
        id: 1,
        title: "Specializations",
        content: "Cardiologist, Cosmetologist",
      },
      {
        id: 2,
        title: "Education",
        content: "MBBS, MD",
      },
      {
        id: 3,
        title: "Experience",
        content: "10 years in cardiology, 5 years in cosmetology",
      },
    ],
  },
  {
    id: "5",
    name: "Dr. Jessica Jones",
    gender: "Female",
    specialityIds: ["sp9", "sp10", "sp5"],
    fees: "S$100",
    imageUrl:
      "https://kenzawellness.com/clinic/images/sample/doctors/doctor-home.png",
    workSchedule: {
      online: [
        {
          id: "1",
          regularHours: [
            {
              day: "Sunday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
            {
              day: "Monday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Tuesday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Wednesday",
              hours: [
                { open: "06:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Thursday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],

              isOpen: true,
              is24: false,
            },
            {
              day: "Friday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Saturday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
          ],
        },
      ],
      offline: [
        {
          id: "1",
          branchid: "1",
          name: "Branch One",
          regularHours: [
            {
              day: "Sunday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
            {
              day: "Monday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Tuesday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Wednesday",
              hours: [
                { open: "06:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Thursday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],

              isOpen: true,
              is24: false,
            },
            {
              day: "Friday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Saturday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
          ],
          specialHours: [
            {
              day: "2022-06-22",
              isOpen: false,
              is24: false,
              hours: [
                {
                  open: "06:00",
                  close: "12:00",
                },
                {
                  open: "13:00",
                  close: "20:00",
                },
              ],
            },
            {
              day: "2022-06-17",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
            {
              day: "2021-12-26",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
          ],
        },
        {
          id: "2",
          name: "Branch Two",
          branchid: "2",
          regularHours: [
            {
              day: "Sunday",
              hours: [
                { open: "09:00", close: "11:00" },
                { open: "14:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
            {
              day: "Monday",
              hours: [
                { open: "05:00", close: "09:00" },
                { open: "13:00", close: "15:00" },
              ],
              isOpen: true,
              is24: true,
            },
            {
              day: "Tuesday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Wednesday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Thursday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],

              isOpen: true,
              is24: false,
            },
            {
              day: "Friday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Saturday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
          ],
          specialHours: [
            {
              day: "2022-06-19",
              isOpen: true,
              is24: false,
              hours: [
                {
                  open: "06:00",
                  close: "12:00",
                },
                {
                  open: "13:00",
                  close: "20:00",
                },
              ],
            },
            {
              day: "2021-12-25",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
            {
              day: "2021-12-26",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
          ],
        },
      ],
    },
    mode: ["Online", "Offline"],
    services: ["Cardioversion", "Heart Conditions"],
    details: [
      {
        id: 1,
        title: "Specializations",
        content: "Cardiologist, Cosmetologist",
      },
      {
        id: 2,
        title: "Education",
        content: "MBBS, MD",
      },
      {
        id: 3,
        title: "Experience",
        content: "10 years in cardiology, 5 years in cosmetology",
      },
    ],
  },
  {
    id: 6,
    name: "Dr. Thor Odinson",
    gener: "Male",
    specialityIds: ["sp11"],
    fees: "S$100",
    imageUrl:
      "https://kenzawellness.com/clinic/images/sample/doctors/doctor-home.png",
    workSchedule: {
      online: [
        {
          id: "1",
          regularHours: [
            {
              day: "Sunday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
            {
              day: "Monday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Tuesday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Wednesday",
              hours: [
                { open: "06:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Thursday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],

              isOpen: true,
              is24: false,
            },
            {
              day: "Friday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Saturday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
          ],
        },
      ],
      offline: [
        {
          id: "1",
          branchid: "1",
          name: "Branch One",
          regularHours: [
            {
              day: "Sunday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
            {
              day: "Monday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Tuesday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Wednesday",
              hours: [
                { open: "06:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Thursday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],

              isOpen: true,
              is24: false,
            },
            {
              day: "Friday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Saturday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
          ],
          specialHours: [
            {
              day: "2022-06-22",
              isOpen: false,
              is24: false,
              hours: [
                {
                  open: "06:00",
                  close: "12:00",
                },
                {
                  open: "13:00",
                  close: "20:00",
                },
              ],
            },
            {
              day: "2022-06-17",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
            {
              day: "2021-12-26",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
          ],
        },
        {
          id: "2",
          name: "Branch Two",
          branchid: "2",
          regularHours: [
            {
              day: "Sunday",
              hours: [
                { open: "09:00", close: "11:00" },
                { open: "14:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
            {
              day: "Monday",
              hours: [
                { open: "05:00", close: "09:00" },
                { open: "13:00", close: "15:00" },
              ],
              isOpen: true,
              is24: true,
            },
            {
              day: "Tuesday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Wednesday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Thursday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],

              isOpen: true,
              is24: false,
            },
            {
              day: "Friday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Saturday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
          ],
          specialHours: [
            {
              day: "2022-06-19",
              isOpen: true,
              is24: false,
              hours: [
                {
                  open: "06:00",
                  close: "12:00",
                },
                {
                  open: "13:00",
                  close: "20:00",
                },
              ],
            },
            {
              day: "2021-12-25",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
            {
              day: "2021-12-26",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
          ],
        },
      ],
    },
    mode: ["Online", "Offline"],
    services: ["Cardioversion", "Non-invasive cardiology"],
    details: [
      {
        id: 1,
        title: "Specializations",
        content: "Cardiologist, Cosmetologist",
      },
      {
        id: 2,
        title: "Education",
        content: "MBBS, MD",
      },
      {
        id: 3,
        title: "Experience",
        content: "10 years in cardiology, 5 years in cosmetology",
      },
    ],
  },
  {
    id: 7,
    name: "Dr. Velma Plush",
    gener: "Female",
    specialityIds: ["sp8"],
    fees: "S$700",
    imageUrl:
      "https://kenzawellness.com/clinic/images/sample/doctors/doctor-home.png",
    workSchedule: {
      online: [
        {
          id: "1",
          regularHours: [
            {
              day: "Sunday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
            {
              day: "Monday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Tuesday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Wednesday",
              hours: [
                { open: "06:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Thursday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],

              isOpen: true,
              is24: false,
            },
            {
              day: "Friday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Saturday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
          ],
        },
      ],
      offline: [
        {
          id: "1",
          branchid: "1",
          name: "Branch One",
          regularHours: [
            {
              day: "Sunday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
            {
              day: "Monday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Tuesday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Wednesday",
              hours: [
                { open: "06:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Thursday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],

              isOpen: true,
              is24: false,
            },
            {
              day: "Friday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Saturday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
          ],
          specialHours: [
            {
              day: "2022-06-22",
              isOpen: false,
              is24: false,
              hours: [
                {
                  open: "06:00",
                  close: "12:00",
                },
                {
                  open: "13:00",
                  close: "20:00",
                },
              ],
            },
            {
              day: "2022-06-17",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
            {
              day: "2021-12-26",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
          ],
        },
        {
          id: "2",
          name: "Branch Two",
          branchid: "2",
          regularHours: [
            {
              day: "Sunday",
              hours: [
                { open: "09:00", close: "11:00" },
                { open: "14:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
            {
              day: "Monday",
              hours: [
                { open: "05:00", close: "09:00" },
                { open: "13:00", close: "15:00" },
              ],
              isOpen: true,
              is24: true,
            },
            {
              day: "Tuesday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Wednesday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Thursday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],

              isOpen: true,
              is24: false,
            },
            {
              day: "Friday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Saturday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
          ],
          specialHours: [
            {
              day: "2022-06-19",
              isOpen: true,
              is24: false,
              hours: [
                {
                  open: "06:00",
                  close: "12:00",
                },
                {
                  open: "13:00",
                  close: "20:00",
                },
              ],
            },
            {
              day: "2021-12-25",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
            {
              day: "2021-12-26",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
          ],
        },
      ],
    },
    mode: ["Online", "Offline"],
    services: ["Cardioversion", "Non-invasive cardiology"],
    details: [
      {
        id: 1,
        title: "Specializations",
        content: "Cardiologist, Cosmetologist",
      },
      {
        id: 2,
        title: "Education",
        content: "MBBS, MD",
      },
      {
        id: 3,
        title: "Experience",
        content: "10 years in cardiology, 5 years in cosmetology",
      },
    ],
  },
  {
    id: 8,
    name: "Dr. Tom Raspberry",
    gener: "Male",
    specialityIds: ["sp8"],
    fees: "S$100",
    imageUrl:
      "https://kenzawellness.com/clinic/images/sample/doctors/doctor-home.png",
    workSchedule: {
      online: [
        {
          id: "1",
          regularHours: [
            {
              day: "Sunday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
            {
              day: "Monday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Tuesday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Wednesday",
              hours: [
                { open: "06:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Thursday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],

              isOpen: true,
              is24: false,
            },
            {
              day: "Friday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Saturday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
          ],
        },
      ],
      offline: [
        {
          id: "1",
          branchid: "1",
          name: "Branch One",
          regularHours: [
            {
              day: "Sunday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
            {
              day: "Monday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Tuesday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Wednesday",
              hours: [
                { open: "06:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Thursday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],

              isOpen: true,
              is24: false,
            },
            {
              day: "Friday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Saturday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
          ],
          specialHours: [
            {
              day: "2022-06-22",
              isOpen: false,
              is24: false,
              hours: [
                {
                  open: "06:00",
                  close: "12:00",
                },
                {
                  open: "13:00",
                  close: "20:00",
                },
              ],
            },
            {
              day: "2022-06-17",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
            {
              day: "2021-12-26",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
          ],
        },
        {
          id: "2",
          name: "Branch Two",
          branchid: "2",
          regularHours: [
            {
              day: "Sunday",
              hours: [
                { open: "09:00", close: "11:00" },
                { open: "14:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
            {
              day: "Monday",
              hours: [
                { open: "05:00", close: "09:00" },
                { open: "13:00", close: "15:00" },
              ],
              isOpen: true,
              is24: true,
            },
            {
              day: "Tuesday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Wednesday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Thursday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],

              isOpen: true,
              is24: false,
            },
            {
              day: "Friday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Saturday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
          ],
          specialHours: [
            {
              day: "2022-06-19",
              isOpen: true,
              is24: false,
              hours: [
                {
                  open: "06:00",
                  close: "12:00",
                },
                {
                  open: "13:00",
                  close: "20:00",
                },
              ],
            },
            {
              day: "2021-12-25",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
            {
              day: "2021-12-26",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
          ],
        },
      ],
    },
    mode: ["Online", "Offline"],
    services: ["Cardioversion", "Non-invasive cardiology"],
    details: [
      {
        id: 1,
        title: "Specializations",
        content: "Cardiologist, Cosmetologist",
      },
      {
        id: 2,
        title: "Education",
        content: "MBBS, MD",
      },
      {
        id: 3,
        title: "Experience",
        content: "10 years in cardiology, 5 years in cosmetology",
      },
    ],
  },
  {
    id: 9,
    name: "Dr. Amber Spiel",
    gener: "Female",
    specialityIds: ["sp8"],
    fees: "S$100",
    imageUrl:
      "https://kenzawellness.com/clinic/images/sample/doctors/doctor-home.png",
    workSchedule: {
      offline: [
        {
          id: "1",
          branchid: "1",
          name: "Branch One",
          regularHours: [
            {
              day: "Sunday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
            {
              day: "Monday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Tuesday",
              hours: [
                { open: "06:00", close: "09:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Wednesday",
              hours: [
                { open: "06:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Thursday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],

              isOpen: true,
              is24: false,
            },
            {
              day: "Friday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Saturday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
          ],
          specialHours: [
            {
              day: "2022-06-22",
              isOpen: false,
              is24: false,
              hours: [
                {
                  open: "06:00",
                  close: "12:00",
                },
                {
                  open: "13:00",
                  close: "20:00",
                },
              ],
            },
            {
              day: "2022-06-17",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
            {
              day: "2021-12-26",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
          ],
        },
        {
          id: "2",
          name: "Branch Two",
          branchid: "2",
          regularHours: [
            {
              day: "Sunday",
              hours: [
                { open: "09:00", close: "11:00" },
                { open: "14:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
            {
              day: "Monday",
              hours: [
                { open: "05:00", close: "09:00" },
                { open: "13:00", close: "15:00" },
              ],
              isOpen: true,
              is24: true,
            },
            {
              day: "Tuesday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Wednesday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Thursday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],

              isOpen: true,
              is24: false,
            },
            {
              day: "Friday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: true,
              is24: false,
            },
            {
              day: "Saturday",
              hours: [
                { open: "08:00", close: "12:00" },
                { open: "13:00", close: "17:00" },
              ],
              isOpen: false,
              is24: false,
            },
          ],
          specialHours: [
            {
              day: "2022-06-19",
              isOpen: true,
              is24: false,
              hours: [
                {
                  open: "06:00",
                  close: "12:00",
                },
                {
                  open: "13:00",
                  close: "20:00",
                },
              ],
            },
            {
              day: "2021-12-25",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
            {
              day: "2021-12-26",
              isOpen: false,
              is24: true,
              hours: [
                {
                  open: "",
                  close: "",
                },
              ],
            },
          ],
        },
      ],
    },
    mode: ["Offline"],
    services: ["Cardioversion", "Non-invasive cardiology"],
    details: [
      {
        id: 1,
        title: "Specializations",
        content: "Cardiologist, Cosmetologist",
      },
      {
        id: 2,
        title: "Education",
        content: "MBBS, MD",
      },
      {
        id: 3,
        title: "Experience",
        content: "10 years in cardiology, 5 years in cosmetology",
      },
    ],
  },
  {
    id: 10,
    name: "Dr. Peaky Blinder",
    gener: "Male",
    specialityIds: ["sp8"],
    fees: "S$100",
    imageUrl:
      "https://kenzawellness.com/clinic/images/sample/doctors/doctor-home.png",
    workSchedule: {},
    mode: [],
    services: ["Cardioversion", "Non-invasive cardiology"],
    details: [
      {
        id: 1,
        title: "Specializations",
        content: "Cardiologist, Cosmetologist",
      },
      {
        id: 2,
        title: "Education",
        content: "MBBS, MD",
      },
      {
        id: 3,
        title: "Experience",
        content: "15 years in cardiology, 5 years in cosmetology",
      },
    ],
  },
];

export default DOCTORS;
