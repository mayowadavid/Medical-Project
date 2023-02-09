const ORDERS = [
  {
    id: 1,
    orderNumber: 2757,
    basket: [
      {
        itemId: 11,
        count: 1,
        price: {
          ccyCode: "SGD",
          amount: 50,
        },
      },
    ],
    totalPrice: null,
    placedWhenUTC: "2022-06-07T08:00:00Z",
    status: "Confirmed",
    patientId: "pt1",
  },
  {
    id: 2,
    orderNumber: 2707,
    basket: [
      {
        itemId: 1,
        count: 1,
        price: {
          ccyCode: "SGD",
          amount: 300,
        },
        selectedOptionalItemIds: [56, 65],
      },
    ],
    totalPrice: null,
    placedWhenUTC: "2022-06-07T08:00:00Z",
    status: "Confirmed",
    patientId: "pt1",
  },
  {
    id: 3,
    orderNumber: 2657,
    basket: [
      {
        itemId: 11,
        count: 1,
        price: {
          ccyCode: "SGD",
          amount: 50,
        },
      },
    ],
    totalPrice: null,
    placedWhenUTC: "2022-06-07T08:00:00Z",
    status: "Confirmed",
    patientId: "pt1",
  },
  {
    id: 4,
    orderNumber: 2607,
    basket: [
      {
        itemId: 1,
        count: 1,
        price: {
          ccyCode: "S$",
          amount: 300,
        },
        selectedOptionalItemIds: [65],
      },
    ],
    totalPrice: null,
    placedWhenUTC: "2022-06-07T08:00:00Z",
    status: "Pending",
    patientId: "pt1",
  },
  {
    id: 5,
    orderNumber: 2557,
    basket: [
      {
        itemId: 1,
        count: 1,
        price: {
          ccyCode: "SGD",
          amount: 300,
        },
        selectedOptionalItemIds: [],
      },
    ],
    totalPrice: null,
    placedWhenUTC: "2022-06-07T08:00:00Z",
    status: "Pending",
    patientId: "pt1",
  },
  {
    id: 6,
    orderNumber: 2557,
    basket: [
      {
        itemId: 1,
        count: 1,
        price: {
          ccyCode: "SGD",
          amount: 300,
        },
        selectedOptionalItemIds: [65],
      },
    ],
    totalPrice: null,
    placedWhenUTC: "2022-06-07T08:00:00Z",
    status: "Pending",
    patientId: "pt1",
  },
];

export default ORDERS;
