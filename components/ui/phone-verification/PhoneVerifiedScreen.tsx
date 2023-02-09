import React from "react";
import { FadedRegularText, HeadingText } from "../core/Text";
import { Button } from "../core/Buttons";
import { HiArrowNarrowRight } from "react-icons/hi";
const PhoneVerifiedScreen = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-between font-general">
      <div className="flex flex-col">
        <div className="mt-12 w-full">
          <img
            src="/assets/images/email/verified.svg"
            alt="Nationality Image"
            className="w-full"
          />
        </div>
        <div className="px-8 flex flex-col mt-8 items-center">
          <HeadingText classes="mb-4 font-title">Verified!</HeadingText>
          <FadedRegularText classes="text-center font-medium">
            You have successfully verified the phone number.
          </FadedRegularText>
        </div>
      </div>
      <div className="flex px-4">
        <Button
          href="/onboarding/0"
          handleClick={() => {
            console.log("Sign up successfull");
          }}
          classes="py-3 rounded-lg flex items-center justify-center text-lg !bg-success"
          full
          primary
        >
          Proceed
          <HiArrowNarrowRight size="20px" className="text-white ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default PhoneVerifiedScreen;
