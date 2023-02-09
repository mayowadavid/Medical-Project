const SERVICES = [
  {
    id: "1",
    name: "Doctor's Consultation",
    description:
      "Consultation, examination for blood pressure and Body Mass Index",
    profile: false,
    benefitIds: ["1", "2"],
  },
  {
    id: "2",
    groupName: "Blood investigation",
    name: "Haematology Profile",
    description: "To screen for infection and anaemia (low blood count)",
    profile: true,
    benefitIds: ["3", "4"],
  },
  {
    id: "3",
    name: "Diabetes Profile",
    description: "To screen for diabetes",
    profile: true,
    benefitIds: ["5"],
  },
  {
    id: "4",
    name: "Lipid Profile",
    description:
      "To monitor cholesterol levels which is a risk for heart attack and strokes",
    profile: true,
    benefitIds: ["6"],
  },
  {
    id: "5",
    name: "Kidney Profile",
    description: "To establish kidney health",
    profile: true,
    benefitIds: ["7"],
  },
  {
    id: "6",
    name: "Liver Profile",
    description: "To establish liver health and liver enzyme levels",
    profile: true,
    benefitIds: ["8"],
  },
  {
    id: "7",
    name: "Bone and Joint Function Profile",
    description: "To establish bone health and joint mobility",
    profile: true,
    benefitIds: ["9", "10", "11"],
  },
  {
    id: "8",
    name: "Hepatitis Profile",
    description: "To screen for liver hepatitis infections",
    profile: true,
    benefitIds: ["12", "13"],
  },
  {
    id: "9",
    name: "Thyroid Profile",
    description: "To monitor thyroid hormone level which regulates metabolism",
    profile: true,
    benefitIds: ["14"],
  },
  {
    id: "10",
    name: "Cancer Markers",
    description: "To check for possibility of cancers",
    profile: true,
    benefitIds: ["15", "16", "17", "18", "37"],
  },
  {
    id: "11",
    name: "Urine Examination",
    description: "To screen for urine infections and kidney health",
    profile: false,
    benefitIds: ["19"],
  },
  {
    id: "12",
    name: "Basic cardiac examination",
    description: "To screen for heart electrical abnormalities",
    profile: false,
    benefitIds: ["20"],
  },
  {
    id: "13",
    name: "Stool test",
    description:
      "To screen for blood in stools, a possible sign of colon cancer",
    profile: false,
    benefitIds: ["21"],
  },
  {
    id: "14",
    name: "Women's Health & Cancer Screen",
    description: "Screening for early signs of cancer common in women",
    profile: false,
    benefitIds: ["22", "23"],
  },
  {
    id: "15",
    name: "Osteoporosis risk screen",
    description: "To screen for bone strength and risk of fractures",
    profile: false,
    benefitIds: ["24"],
  },
  {
    id: "16",
    name: "Heart Disease Screen",
    description:
      "To screen high risk individuals for silent early heart disease",
    profile: false,
    benefitIds: ["25", "26", "27", "28", "36"],
  },
  {
    id: "17",
    name: "Stroke Screen",
    description: "To screen high risk individuals for stroke ",
    profile: false,
    benefitIds: ["29", "30", "42", "43"],
  },
  {
    id: "18",
    name: "Smoker's Screening",
    description: "To screen for lung diseases and lung cancer",
    profile: false,
    benefitIds: ["31", "32"],
  },
  {
    id: "19",
    name: "Sexually Transmitted Infection Risk",
    description: "To screen for STDs in high-risk individuals",
    profile: false,
    benefitIds: ["33"],
  },
  {
    id: "20",
    name: "Fertility Screening",
    description: "To rule out fertility hormonal imbalances",
    profile: false,
    benefitIds: ["34", "35"],
  },
  {
    id: "21",
    name: "Cardiologist's consultation",
    description:
      "Consultation, examination of blood pressure and Body Mass Index",
    profile: false,
    benefitIds: ["1", "2"], // before 38,39
  },
  {
    id: "22",
    name: "Specialist Consultation",
    description:
      "Consultation, examination of blood pressure and Body Mass Index",
    profile: false,
    benefitIds: ["1", "2"], // before 40 41
  },
  {
    id: "23",
    name: "Diagnostic Colonscopy by Specialist",
    description: "To screen for overall wellness of Colon",
    profile: false,
    benefitIds: ["44", "45"],
  },
  {
    id: "24",
    name: "Diagnostic Gastroscopy by Specialist",
    description:
      "To screen for overall wellness of Stomach, Esophagus & Part of Small Intestine",
    profile: false,
    benefitIds: ["45", "46"], // before 46 47
  },
];

export default SERVICES;
