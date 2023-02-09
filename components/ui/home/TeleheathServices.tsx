import ServiceCard from "./homeComponents/ServiceCard";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const TeleheathServices = () => {
  const teleServices = [
    {
      icon: "/icons/outline-test-tube.png",
      name: "Supervised Antigen Rapid Test (ART)",
      price: 20,
      currency: "S$",
    },
    {
      icon: "/icons/outline-calendar.png",
      name: "Mental Health",
      price: 110,
      currency: "S$",
    },
    {
      icon: "/icons/outline-capsule.png",
      name: "Nutrition and Fitness",
      price: 110,
      currency: "S$",
    },
    {
      icon: "/icons/outline-medical-heart.png",
      name: "Cardiology",
      price: 70,
      currency: "S$",
    },
    {
      icon: "/icons/outline-doctor.png",
      name: "General Practitioner",
      price: 20,
      currency: "S$",
    },
  ];
  return (
    <div className="mb-4 font-general">
      <div className="font-title text-sectionHead mb-2 py-2 px-4">
        Consult doctors online
      </div>
      <div className="flex w-full overflow-x-auto snap-x md:justify-between pb-4 pl-4">
        {teleServices.map((service, idx) => (
          <ServiceCard key={idx} service={service} />
        ))}
        <Link to="/consult">
          <div className="h-full flex flex-col items-center justify-center self-center ml-4 mr-8 w-40 text-typo">
            <span className="px-4 mb-2">
              <BsFillArrowRightCircleFill size="40px" color="#FF6B35" />
            </span>
            View All
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TeleheathServices;
