import { FadedSmallText, RegularText } from "../../core/Text";

const DoctorServices = ({ doctorData }) => {
  return (
    <div>
      <RegularText>Services by {doctorData?.name}</RegularText>
      <FadedSmallText>
        <ul>
          {doctorData?.services.map((x, index) => (
            <li key={index}>{x}</li>
          ))}
        </ul>
      </FadedSmallText>
    </div>
  );
};

export default DoctorServices;
