const BENEFITS = [
  {
    id: "1",
    serviceId: ["1", "21", "22"],
    name: "Physical examination",
    description: "Conducted in person",
    tooltip: "Conducted in person",
  },
  {
    id: "2",
    serviceId: ["1", "21", "22"],
    name: "Screening review",
    description: "Conducted via telemedicine",
    tooltip: "Conducted via telemedicine",
  },
  {
    id: "3",
    serviceId: ["2"],
    name: "Full blood count",
    description: "Includes haemoglobin level, White cell count Platelet count",
    tooltip: "Includes haemoglobin level, <br/>White cell count Platelet count",
  },
  {
    id: "4",
    serviceId: ["2"],
    name: "Blood ABO group",
    description: "",
    tooltip: "",
  },
  {
    id: "5",
    serviceId: ["3"],
    name: "Fasting glucose",
    description: "",
    tooltip: "",
  },
  {
    id: "6",
    serviceId: ["4"],
    name: "Cholesterol panel",
    description:
      "Includes total cholesterol, HDL, LDL, triglycerides, cholesterol/HDL ratio",
    tooltip:
      "Includes total cholesterol, HDL, <br/>LDL, triglycerides, cholesterol/HDL ratio",
  },
  {
    id: "7",
    serviceId: ["5"],
    name: "Kidney function test",
    description:
      "Includes sodium, potassium, chloride, urea, creatinine levels",
    tooltip:
      "Includes sodium, potassium, chloride,<br/> urea, creatinine levels",
  },
  {
    id: "8",
    serviceId: ["6"],
    name: "Liver panel",
    description:
      "Includes bilirubin, total protein, albumin, AST, ALT, ALP, GGT",
    tooltip:
      "Includes bilirubin, total protein,<br/> albumin, AST, ALT, ALP, GGT",
  },
  {
    id: "9",
    serviceId: ["7"],
    name: "Calcium / Phosphate / Uric acid levels",
    description: "",
    tooltip: "",
  },
  {
    id: "10",
    serviceId: ["7"],
    name: "Erythrocyte sedimentation rate (ESR)",
    description: "",
    tooltip: "",
  },
  {
    id: "11",
    serviceId: ["7"],
    name: "Rheumatoid factor (RF)",
    description: "",
    tooltip: "",
  },
  {
    id: "12",
    serviceId: ["8"],
    name: "Hepatitis B screen",
    description:
      "Includes hepatitis Bs antigen(HBsAg), hepatitis Bs antibody(HBsAb)",
    tooltip:
      "Includes hepatitis Bs antigen(HBsAg),<br/> hepatitis Bs antibody(HBsAb)",
  },
  {
    id: "13",
    serviceId: ["8"],
    name: "Hepatitis A screen",
    description: "Includes hepatitis A total antibody",
    tooltip: "Includes hepatitis A total antibody",
  },
  {
    id: "14",
    serviceId: ["9"],
    name: "Thyroid Panel",
    description: "Includes free T4 (FT4), thyroid stimulating hormone (TSH)",
    tooltip: "Includes free T4 (FT4),<br/>thyroid stimulating hormone (TSH)",
  },
  {
    id: "15",
    serviceId: ["10"],
    name: "Alpha-fetoprotein (AFP)",
    description: "To screen for liver cancer",
    tooltip: "To screen for liver cancer",
  },
  {
    id: "16",
    serviceId: ["10"],
    name: "Carcinoembryonic antigen (CEA)",
    description: "To screen for colon cancer",
    tooltip: "To screen for colon cancer",
  },
  {
    id: "17",
    serviceId: ["10"],
    name: "Prostate-specific antigen (PSA)",
    description: "To screen for prostate cancer in males",
    tooltip: "To screen for prostate cancer<br/>in males",
  },
  {
    id: "18",
    serviceId: ["10"],
    name: "CA 19.9",
    description: "To screen for pancreatic cancer",
    tooltip: "To screen for pancreatic cancer",
  },
  {
    id: "19",
    serviceId: ["11"],
    name: "Urine Microscopy Examination (UFEME), Urine microalbumin / Creatinine Ratio",
    description: "",
    tooltip: "",
  },
  {
    id: "20",
    serviceId: ["12"],
    name: "Electrocardiogram (ECG)",
    description: "",
    tooltip: "",
  },
  {
    id: "21",
    serviceId: ["13"],
    name: "Immunological stool occult blood",
    description: "",
    tooltip: "",
  },
  {
    id: "22",
    serviceId: ["14"],
    name: "PAP smear for females",
    description: "",
    tooltip: "",
    price: {
      ccyCode: "S$",
      amount: 45,
    },
  },
  {
    id: "23",
    serviceId: ["14"],
    name: "Mammogram with US breast",
    description: "",
    tooltip: "",
    price: {
      ccyCode: "S$",
      amount: 283,
    },
  },
  {
    id: "24",
    serviceId: ["15"],
    name: "DEXA bone mineral density",
    description: "",
    tooltip: "",
  },
  {
    id: "25",
    serviceId: ["16"],
    name: "2D Echo",
    description:
      "To check how your heart chamber and valves are pumping blood through the heart",
    tooltip:
      "To check how your heart chamber and<br/>valves are pumping blood through the heart",
  },
  {
    id: "26",
    serviceId: ["16"],
    name: "CT coronaries with calcium score",
    description:
      "To detect and quantify the amount of calcium deposit in the heart arteries",
    tooltip:
      "To detect and quantify the amount of<br/>calcium deposit in the heart arteries",
  },
  {
    id: "27",
    serviceId: ["16"],
    name: "Ultrasound AAA",
    description: "",
    tooltip: "",
  },
  {
    id: "28",
    serviceId: ["16"],
    name: "Ultrasound peripheral artery disease(Per Leg)",
    description: "",
    tooltip: "",
  },
  {
    id: "29",
    serviceId: ["17"],
    name: "MRI Carotids",
    description: "",
    tooltip: "",
  },
  {
    id: "30",
    serviceId: ["17"],
    name: "MRI stroke screen / MRA non contrast",
    description: "To screen high risk individuals for silent early stroke",
    tooltip: "To screen high risk individuals<br/>for silent early stroke",
  },
  {
    id: "31",
    serviceId: ["18"],
    name: "Chest X-Ray",
    description: "Suitable for social smokers",
    tooltip: "Suitable for social smokers",
    price: {
      ccyCode: "S$",
      amount: 37,
    },
  },
  {
    id: "32",
    serviceId: ["18"],
    name: "Low dose CT lung screen",
    description: "Suitable for chronic heavy smokers",
    tooltip: "Suitable for chronic heavy smokers",
    price: {
      ccyCode: "S$",
      amount: 320,
    },
  },
  {
    id: "33",
    serviceId: ["19"],
    name: "STD screening profile",
    description:
      "Includes chlamydia/gonorrhea PCR, herpes simplex virus type I & II IgG, syphilis TP Ab, HIV screen",
    tooltip:
      "Includes chlamydia/gonorrhea PCR,<br/>herpes simplex virus type I & II IgG,<br/>syphilis TP Ab, HIV screen",
    price: {
      ccyCode: "S$",
      amount: 180,
    },
  },
  {
    id: "34",
    serviceId: ["20"],
    name: "Male fertility profile",
    description: "Includes testosterone, LH, FSH, proclatin levels",
    tooltip: "Includes testosterone, LH,<br/>FSH, proclatin levels",
    price: {
      ccyCode: "S$",
      amount: 100,
    },
  },
  {
    id: "35",
    serviceId: ["20"],
    name: "Female fertility profile",
    description: "Includes E2, FSH, LH, prolcatin, progesterone levels",
    tooltip: "Includes E2, FSH, LH,<>br/>prolcatin, progesterone levels",
    price: {
      ccyCode: "S$",
      amount: 196,
    },
  },
  {
    id: "36",
    serviceId: ["16"],
    name: "Cardiologist consultation",
    description: "",
    tooltip: "",
  },
  {
    id: "37",
    serviceId: "10",
    name: "CA 125",
    description: "To screen for ovarian cancer in females",
    tooltip: "To screen for ovarian cancer in females",
  },
  // {
  //   id: "38",
  //   serviceId: "21",
  //   name: "Physical examination",
  //   description: "Conducted in person",
  //   tooltip: "Conducted in person",
  // },
  // {
  //   id: "39",
  //   serviceId: "21",
  //   name: "Screening review",
  //   description: "Conducted via telemedicine",
  //   tooltip:"Conducted via telemedicine",
  // },
  // {
  //   id: "40",
  //   serviceId: "22",
  //   name: "Physical examination",
  //   description: "Conducted in person",
  //   tooltip: "Conducted in person",
  // },
  // {
  //   id: "41",
  //   serviceId: "22",
  //   name: "Screening review",
  //   description: "Conducted via telemedicine",
  //   tooltip: "Conducted via telemedicine",
  // },
  {
    id: "42",
    serviceId: ["17"],
    name: "MRI Brain / Stroke Screen",
    description: "To check for blockages that may lead to a stroke",
    tooltip: "To check for blockages that may<br/> lead to a stroke",
  },
  {
    id: "43",
    serviceId: ["17"],
    name: "Specialist consultation",
    description: "",
    tooltip: "",
  },
  {
    id: "44",
    serviceId: ["23"],
    name: "Colonoscopy checks",
    description:
      "To check for (a) Colon Cancer (b) Colon Polyps (c) Inflammatory Bowel Diseases (d) Rectal Bleeding (e) Blood in stool (f) Abdominal Pain",
    tooltip:
      "To check for <br/>(a) Colon Cancer (b) Colon Polyps<br/>(c) Inflammatory Bowel Diseases (d) Rectal Bleeding<br/>(e) Blood in stool (f) Abdominal Pain",
  },
  {
    id: "45",
    serviceId: ["23", "24"],
    name: "Polyps Removal & Biopsy (KIV)",
    description: "",
    tooltip: "",
  },
  {
    id: "46",
    serviceId: ["24"],
    name: "Gastroscopy checks ",
    description:
      "To check for (a) Stomach ulcers (b) Gastritis (c) Heartburn (d) Acid Reflux (e) Stomach Cancer",
    tooltip:
      "To check for <br/>(a) Stomach ulcers (b) Gastritis <br/>(c) Heartburn (d) Acid Reflux (e) Stomach Cancer",
  },
  // {
  //   id: "47",
  //   serviceId: ["24"],
  //   name: "Polyps Removal & Biopsy (KIV)",
  //   description: "",
  //   tooltip: "",
  // },
];

export default BENEFITS;
