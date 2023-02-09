import { RegularText } from "../../../ui/core/Text";
import FloaterButton from "./FloaterButton";

interface DisclaimerProps {
  afterBookingAppointment: () => void;
}

const Disclaimer = ({ afterBookingAppointment }: DisclaimerProps) => {
  return (
    <div className="flex flex-col justify-start items-center m-6 mx-center">
      <img
        src="/assets/images/appointment/medical-advice.svg"
        alt="success"
        className="w-36 h-36 my-2"
      />
      <RegularText classes="text-slate-700 text-justify mb-4">
        Please read the following medical advice carefully.
      </RegularText>
      <RegularText classes="text-slate-500 text-justify mb-2">
        If you have any questions, please contact our support team. Thank you
        for your patience.
      </RegularText>
      <RegularText classes="text-slate-500 text-justify mb-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse nihil
        fugit delectus vitae reiciendis voluptas illum. Delectus ea fugiat, nam
        error ut veniam? Aliquid harum quam velit molestiae provident commodi.
      </RegularText>
      <RegularText classes="text-slate-500 text-justify mb-2">
        <ul
          className="text-slate-500 text-justify mb-2 ml-8"
          style={{ listStyleType: "disc" }}
        >
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
          <li>Esse nihil fugit delectus vitae reiciendis voluptas illum.</li>
          <li>Delectus ea fugiat, nam error ut veniam?</li>
          <li>Aliquid harum quam velit molestiae provident commodi.</li>
        </ul>
      </RegularText>
      <RegularText classes="text-slate-500 text-justify mb-12">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse nihil
        fugit delectus vitae reiciendis voluptas illum. Delectus ea fugiat, nam
        error ut veniam? Aliquid harum quam velit molestiae provident commodi.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse nihil
        fugit delectus vitae reiciendis voluptas illum. Delectus ea fugiat, nam
        error ut veniam? Aliquid harum quam velit molestiae provident commodi.
      </RegularText>
      <FloaterButton afterBookingAppointment={afterBookingAppointment} />
    </div>
  );
};

export default Disclaimer;
