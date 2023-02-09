import { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Button } from "../core/Buttons";
import FormInput from "../core/FormInput";
import { FadedRegularText } from "../core/Text";

interface CapsuleProps {
  selected?: boolean;
  text: string;
  outline?: boolean;
  handleClick?: (a: string) => void;
}

interface CapsulesContainerProps {
  children: React.ReactNode;
}

interface SymptomsProps {
  nextFunc: () => void;
}

const Capsule = ({ selected, text, outline, handleClick }: CapsuleProps) => {
  return (
    <div
      className={`${
        selected
          ? "bg-secondary-100 text-white"
          : "bg-secondary-10 text-gray-600"
      } py-1 px-4 rounded-2xl flex ${
        outline && "border-2 border-secondary-100"
      }`}
      onClick={() => handleClick(text)}
    >
      <div className="mr-2">{text}</div>
      {selected && <div>x</div>}
    </div>
  );
};

const CapsulesContainer = ({ children }: CapsulesContainerProps) => {
  return <div className="flex flex-wrap gap-2 my-2">{children}</div>;
};

const Symptoms = ({ nextFunc }: SymptomsProps) => {
  const suggestedServices = [
    "Medication Refill",
    "Second Opinion",
    "Followup",
    "Discuss Lab Results",
  ];
  const suggestedSymptoms = [
    "Abdominal Pain",
    "Arrhythmia",
    "Chest Pain",
    "Fever",
    "Fainting",
    "Dizziness",
    "Nausea",
  ];

  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [typedSymptom, setTypedSymptom] = useState("");

  const removeFromServices = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((item) => item !== service));
    }
  };

  const removeFromSymptoms = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter((item) => item !== symptom));
    }
  };

  const addToServices = (service: string) => {
    if (!selectedServices.includes(service)) {
      setSelectedServices((prev) => [...prev, service]);
    }
  };

  const addToSymptoms = (symptom: string) => {
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms((prev) => [...prev, symptom]);
    }
  };

  return (
    <div className="h-screen-90 flex flex-col justify-between">
      <div>
        <FadedRegularText classes="">
          What would you like to consult about?
        </FadedRegularText>
        <FormInput
          inputState={typedSymptom}
          setInputState={(text: string) => setTypedSymptom(text)}
          inputType=""
          inputClasses=""
          rows={0}
          disabled={false}
          noShadow={false}
          placeholder="Add symptoms"
          enterFunction={() => {
            addToSymptoms(typedSymptom);
            setTypedSymptom("");
          }}
        />
        <div className="my-4">
          {selectedServices.length > 0 && (
            <FadedRegularText>Your Services</FadedRegularText>
          )}
          <CapsulesContainer>
            {selectedServices.map((service, idx) => (
              <Capsule
                text={service}
                selected
                key={idx}
                handleClick={(service) => removeFromServices(service)}
              />
            ))}
          </CapsulesContainer>
        </div>
        <div className="my-4">
          {selectedSymptoms.length > 0 && (
            <FadedRegularText>Your Symptoms</FadedRegularText>
          )}
          <CapsulesContainer>
            {selectedSymptoms.map((symptom, idx) => (
              <Capsule
                text={symptom}
                selected
                key={idx}
                handleClick={(symptom) => removeFromSymptoms(symptom)}
              />
            ))}
          </CapsulesContainer>
        </div>
        <div className="my-4 flex flex-wrap">
          <FadedRegularText>Suggested Services</FadedRegularText>
          <CapsulesContainer>
            {suggestedServices.map((service, idx) => (
              <Capsule
                text={service}
                key={idx}
                outline={selectedServices.includes(service)}
                handleClick={(service) => addToServices(service)}
              />
            ))}
          </CapsulesContainer>
        </div>
        <div className="my-4">
          <FadedRegularText>Suggested Symptoms</FadedRegularText>
          <CapsulesContainer>
            {suggestedSymptoms.map((symptom, idx) => (
              <Capsule
                text={symptom}
                key={idx}
                outline={selectedSymptoms.includes(symptom)}
                handleClick={(symptom: string) => addToSymptoms(symptom)}
              />
            ))}
          </CapsulesContainer>
        </div>
      </div>
      <div className="mt-12">
        {nextFunc && (
          <Button
            handleClick={() => {
              nextFunc();
            }}
            classes="py-3 rounded-lg flex items-center justify-center"
            full
            primary
          >
            Next
            <HiArrowNarrowRight size="20px" className="text-white ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Symptoms;
