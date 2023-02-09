import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { MdWavingHand } from "react-icons/md";

const Banner = () => {
  return (
    <div className="flex flex-col px-4 py-5 bg-white/25 mx-4 my-8 font-general text-white relative rounded-2xl shadow-sm backdrop-blur-sm justify-between">
      <div className="flex justify-between">
        <div className="font-title flex flex-col text-white">
          <span className="text-sm">Hello,</span>
          <span className="mb-2 text-xl flex items-center">
            Peter Parker
            <MdWavingHand className="ml-2" size="16px" color="#FFE45E" />
          </span>
        </div>
        <Link to="/profile">
          <span className="flex items-center justify-center p-1 mt-2 h-10 w-10 rounded-full bg-white">
            <BiUser size="24px" color="#374151" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
