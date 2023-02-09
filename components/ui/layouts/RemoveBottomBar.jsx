import { MdCancel } from "react-icons/md";
const RemoveBottomBar = ({ removeFunction }) => {
  return (
    <div
      onClick={() => removeFunction()}
      className="fixed bottom-0 w-full px-4 py-5 drop-shadow z-40 bg-[#F87272] flex items-center flex-row justify-center text-lg font-title text-white"
    >
      <MdCancel size="24px" color="#fff" className="mr-2" />
      <div>Remove</div>
    </div>
  );
};

export default RemoveBottomBar;
