import { RegularText } from "../core/Text";
import Selector from "../core/Selector";
import { FaRegHospital } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const SelectLocation = ({ doctor, locationKey, setLocationKey }) => {
  return (
    <>
      <RegularText classes="font-medium flex flex-row items-center">
        <GoLocation size="16px" className="mr-2" />
        Select location
      </RegularText>
      <div className="flex flex-col mb-4">
        {doctor?.workSchedule?.offline.map((item) => (
          <Selector
            key={item.id}
            handleSelection={() => setLocationKey(item.branchid)}
            selected={locationKey == item.branchid}
            selectable
            classes="my-0 mt-1.5"
          >
            <div
              className={`flex flex-row ${
                locationKey == item.branchid && "text-secondary-100"
              }`}
            >
              <FaRegHospital size="20px" className="mr-2" />
              {item.name}
            </div>
          </Selector>
        ))}
      </div>
    </>
  );
};

export default SelectLocation;
