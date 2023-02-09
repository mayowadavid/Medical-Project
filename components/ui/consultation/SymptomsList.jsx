import { SubHeadingText } from "../core/Text";
import { OutlinedButton } from "../core/Buttons";
import ConsultCircle from "./ConsultCircle";
import Speciality from "./Speciality";

const SymptomsList = () => {
  const symptoms = [
    {
      name: "Headache",
      route: "/doctors",
      icon: "/icons/package.png",
    },
    {
      name: "Fever",
      route: "/doctors",
      icon: "/icons/package.png",
    },
    {
      name: "Headache",
      route: "/doctors",
      icon: "/icons/package.png",
    },
    {
      name: "Fever",
      route: "/doctors",
      icon: "/icons/package.png",
    },
    {
      name: "Headache",
      route: "/doctors",
      icon: "/icons/package.png",
    },
    {
      name: "Fever",
      route: "/doctors",
      icon: "/icons/package.png",
    },
    {
      name: "Headache",
      route: "/doctors",
      icon: "/icons/package.png",
    },
    {
      name: "Headache",
      route: "/doctors",
      icon: "/icons/package.png",
    },
  ];

  return (
    <div className="py-2">
      <SubHeadingText classes={"py-4"}>Most Common Symptoms</SubHeadingText>
      <div className="grid grid-cols-4 gap-4">
        {symptoms.map((symptom, idx) => (
          <ConsultCircle
            name={symptom.name}
            icon={symptom.icon}
            href={symptom.route}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default SymptomsList;
