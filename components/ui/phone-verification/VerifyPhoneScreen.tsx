import { FadedMediumText, MediumText, SubHeadingText } from "../core/Text";
import { Button } from "../core/Buttons";
import { FaUserCheck } from "react-icons/fa";
import FormInput from "../core/FormInput";
import { useState } from "react";

interface VerifyPhoneScreenProps {
  phoneNo: string;
}

const VerifyPhoneScreen = ({ phoneNo }: VerifyPhoneScreenProps) => {
  const [otp, setOtp] = useState("");
  return (
    <div className="w-full h-screen flex flex-col justify-between font-general">
      <div className="flex flex-col">
        <div className="mt-12 w-full">
          <img
            src="/assets/images/email/verify-email.svg"
            alt="Nationality Image"
            className="w-full"
          />
        </div>
        <div className="px-8 flex flex-col mt-4">
          <SubHeadingText classes="mb-4 text-center font-title">
            We sent you a code to verify your phone number
          </SubHeadingText>
          <MediumText classes="text-center text-gray-400 text-sm">
            Sent to {phoneNo}
          </MediumText>
          <div className="py-4 w-full">
            <FormInput
              inputState={otp}
              setInputState={setOtp}
              placeholder="Verification code"
              inputType="text"
              noShadow
            />
          </div>
          <div className="flex flex-col items-center">
            <FadedMediumText>Didn&apos;t receive the code ?</FadedMediumText>
            <div onClick={() => console.log("Resend code!")}>
              <MediumText classes="text-blue-500 font-medium">
                Resend code
              </MediumText>
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-4">
        <Button
          href="/sign-up/phone-verified"
          handleClick={() => {
            console.log("Continue");
          }}
          classes={`py-3 rounded-lg flex items-center justify-center text-lg bg-warning ${
            otp == "" && "bg-warning/50"
          }`}
          full
          primary
          disabled={otp == ""}
        >
          Verify and continue
          <FaUserCheck size="24px" className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default VerifyPhoneScreen;
