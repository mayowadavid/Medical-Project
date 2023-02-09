import { SmallText } from "../../ui/core/Text";

const AgreementCheckbox = () => {
  return (
    <div className="flex flex-row justify-center place-items-center w-64">
      <SmallText classes="text-slate-500 text-center">
        *By signing up on MyHealthcareCollective, you agree to the <br />
        <span className="text-blue-500 font-semibold ml-1">
          Terms of Service
        </span>{" "}
        and <span className="text-blue-500 font-semibold">Privacy Policy</span>.
      </SmallText>
    </div>
  );
};

export default AgreementCheckbox;
