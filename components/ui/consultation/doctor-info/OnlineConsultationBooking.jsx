import { FadedMediumText, MediumText } from "../../core/Text";

const SlotBox = ({ children }) => {
  return (
    <div className="bg-secondary-100 text-white px-2 py-1 my-1 mx-1 rounded-md">
      {children}
    </div>
  );
};

const OnlineConsultationBooking = () => {
  return (
    <div className="my-4">
      <div className="text-white font-semibold rounded-t p-2 bg-secondary-100">
        <div className="flex justify-between">
          <MediumText>Consult Online</MediumText>
          <MediumText>S$100</MediumText>
        </div>
      </div>
      <div className="border border-gray-300 border-t-0 w-full">
        <div className="flex pt-2 justify-between border-b border-gray-300">
          <div>
            <div className="px-4">1 Jun</div>
            <div className="w-full h-1 bg-secondary-100"></div>
          </div>
          <div>
            <div className="px-4">2 Jun</div>
            {/* <div className="w-full h-1 bg-secondary-100"></div> */}
          </div>
          <div>
            <div className="px-4">3 Jun</div>
            {/* <div className="w-full h-1 bg-secondary-100"></div> */}
          </div>
          <div>
            <div className="px-4">4 Jun</div>
            {/* <div className="w-full h-1 bg-secondary-100"></div> */}
          </div>
        </div>
        <div className="flex flex-wrap py-2 px-1">
          <SlotBox>09:00 AM</SlotBox>
          <SlotBox>09:30 AM</SlotBox>
          <SlotBox>10:00 AM</SlotBox>
          <SlotBox>01:00 PM</SlotBox>
          <SlotBox>01:30 PM</SlotBox>
          <SlotBox>02:00 PM</SlotBox>
        </div>
        <div className="flex justify-center mb-2">
          <MediumText classes={"text-gray-500 underline"}>
            Show all slots
          </MediumText>
        </div>
      </div>
    </div>
  );
};

export default OnlineConsultationBooking;
