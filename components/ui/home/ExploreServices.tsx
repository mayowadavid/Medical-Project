import { Link } from "react-router-dom";

const ExploreServices = () => {
  return (
    <div className="mb-4 px-4 flex flex-col font-general">
      <div className="font-title text-sectionHead mb-2">
        Complete Healthcare Solution
      </div>
      <div className="w-full flex flex-row justify-between mt-2 mb-4 flex-wrap">
        <Link
          to="/consult-gp"
          className="w-[45%] md:w-64 flex flex-col items-center cursor-pointer flex-none font-general bg-white drop-shadow rounded-xl overflow-hidden border-2 border-gray-100"
        >
          <div className="w-full flex flex-col items-center justify-center relative bg-white p-2">
            <span className="flex items-center justify-center w-full rounded-xl bg-gray-100 shadow-sm mb-3 py-3">
              <img src="/icons/consultation.png" alt="icon" className="h-16" />
            </span>
            <div className="font-title text-lg text-center mb-2">
              Consult with a GP
            </div>
          </div>
        </Link>
        <Link
          to="/consult"
          className="w-[45%] md:w-64 flex flex-col items-center cursor-pointer flex-none font-general bg-white drop-shadow rounded-xl overflow-hidden border-2 border-gray-100"
        >
          <div className="w-full flex flex-col items-center justify-center relative bg-white p-2">
            <span className="flex items-center justify-center w-full rounded-xl bg-gray-100 shadow-sm mb-3 py-3">
              <img src="/icons/doctor.png" alt="icon" className="h-16" />
            </span>
            <div className="font-title text-lg text-center mb-2">
              Consult with a specialist
            </div>
          </div>
        </Link>
      </div>
      <Link to="/packages">
        <div className="w-full md:w-64 flex flex-col items-center cursor-pointer font-general bg-white drop-shadow rounded-xl overflow-hidden border-2 border-gray-100">
          <div className="w-full flex flex-col items-center justify-center relative bg-white p-2">
            <span className="flex items-center justify-center w-full rounded-xl bg-gray-100 shadow-sm mb-3 py-3">
              <img src="/icons/record.png" alt="icon" className="h-16" />
            </span>
            <div className="font-title text-lg text-center my-2">
              Health Screening
            </div>
          </div>
        </div>
      </Link>
      {/* <div className="w-full h-40 rounded-lg bg-cover bg-center bg-[url('/assets/images/explore_more/packages.webp')] p-4 flex items-center justify-center drop-shadow text-xl relative text-white">
        <div className="absolute h-40 w-full bg-black/30 top-0 left-0 rounded-lg"></div>
        <span className="absolute">Health Screening</span>
      </div> */}
    </div>
  );
};

export default ExploreServices;
