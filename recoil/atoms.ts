import { atom } from "recoil";

export const accessToken = atom({
  key: "accessToken",
  default: null,
});
export const modalState = atom({
  key: "modalState",
  default: null,
});

export const navMenu = atom({
  key: "navShown",
  default: true,
});

export const profileInfo = atom({
  key: "profileInfo",
  default: {
    firstName: "Jane",
    lastName: "Doe",
    gender: "female",
    maritalStatus: "Single",
    nationality: "",
    dob: "31/10/1990",
    phone: "9876543201",
    email: "janedoe@hotmail.com",
    location: "",
    postal: "",
    passport: "",
  },
});

export const medInfo = atom({
  key: "medInfo",
  default: {
    height: "170",
    weight: "60",
    bloodGroup: "O+",
    allergies: "pollen",
    medicalHistory: "none",
    currentMed: "none",
  },
});

export const NOKInfo = atom({
  key: "NOKInfo",
  default: {
    emergencyContact: "",
    nameOfNOK: "",
    relationship: "",
    phone: "",
    allergies: "",
  },
});

export const SelectedPackage = atom({
  key: "selectedPackage",
  default: {
    name: "",
    imageURL: "",
    packagePrice: 0,
    totalPrice: 0,
    description: "",
    optionals: [],
  },
});
