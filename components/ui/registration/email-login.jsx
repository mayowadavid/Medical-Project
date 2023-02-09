import InputField from "./input-field";
import { Button } from "../core/Buttons";
import { Link } from "react-router-dom";
import { SmallText, SubHeadingText } from "../core/Text";

const EmailLogin = ({ startingScreen }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-10">
      <form>
        <SubHeadingText classes="text-left text-slate-500 font-title mx-3 mb-2">
          Sign In
        </SubHeadingText>
        <InputField id={"email"} placeholder={"Email"} type={"email"} />
        <InputField
          id={"password"}
          placeholder={"Password"}
          type={"password"}
        />
        <div className="flex flex-col justify-end items-end text-right">
          <Link to="/forgot-password">
            <SmallText classes="text-center text-error font-title italic mb-4">
              Forgot your password?
            </SmallText>
          </Link>
        </div>
        <div className="flex flex-row w-full justify-center items-center">
          <Button
            classes="w-[18rem] font-title shadow-md !bg-blue-500"
            type={"submit"}
            href={
              startingScreen == -1 ? "/home" : `/onboarding/${startingScreen}`
            }
          >
            Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EmailLogin;
