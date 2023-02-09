import { Card } from "../core/Card";
import { RegularText, FadedSmallText } from "../core/Text";
import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import AddRecord from "./AddRecord";
import AddRecordModal from "../core/modals/AddRecordModal";

import useModal from "../../../lib/hooks/useModal";
import { useState, useEffect } from "react";

interface RecordCardProps {
  name: string;
  link: string;
  noOfRecords: string;
}

const RecordCard = ({ name, link, noOfRecords }: RecordCardProps) => {
  const { setModal } = useModal();
  const [type, setType] = useState("");

  useEffect(() => {
    if (name === "Lab Results") {
      setType("lab result");
    } else if (name === "Radiology") {
      setType("radiology");
    } else if (name === "Personal Records") {
      setType("personal");
    } else if (name === "Immunization") {
      setType("immunization");
    }
  }, [name]);

  const openModal = () => {
    setModal(`add-${type}-record`);
  };

  return (
    <Card classes="flex flex-row w-full justify-between items-center h-20">
      <Link to={link} className="flex w-full">
        <div className="flex flex-col w-4/5 justify-start items-start ml-2">
          <RegularText classes="font-bold">{name}</RegularText>
          <FadedSmallText classes="mt-2">
            {parseInt(noOfRecords) > 0
              ? `${noOfRecords} record${parseInt(noOfRecords) > 1 ? "s" : ""}`
              : "Not available"}
          </FadedSmallText>
        </div>
      </Link>
      <div className="flex flex-col w-1/5 h-full justify-center items-center">
        <BsPlusCircle
          className="text-primary-100 text-3xl"
          onClick={() => {
            openModal();
          }}
        />
      </div>
      <AddRecordModal type={type}>
        <AddRecord type={type} />
      </AddRecordModal>
    </Card>
  );
};

export default RecordCard;
