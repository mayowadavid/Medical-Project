import { useState } from "react";

interface PromoInputProps {
  handlePromoApply: (code: string) => void;
}

const PromoInput = ({ handlePromoApply }: PromoInputProps) => {
  const [promoCode, setPromoCode] = useState("");

  return (
    <form className="flex w-full mt-4">
      <input
        type="text"
        placeholder="Enter promocode"
        className="border border-gray-300 p-2 focus:outline-none w-4/5 rounded-l-lg"
        onChange={(e) => setPromoCode(e.currentTarget.value)}
      />
      <button
        className="bg-primary-100 text-white p-2 w-1/5 rounded-r-lg"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handlePromoApply(promoCode);
        }}
      >
        Apply
      </button>
    </form>
  );
};

export default PromoInput;
