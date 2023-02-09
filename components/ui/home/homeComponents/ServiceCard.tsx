import { Link } from "react-router-dom";

interface ServiceProps {
  service: {
    icon: string;
    name: string;
    currency: string;
    price: number;
  };
}

const ServiceCard = ({ service }: ServiceProps) => {
  return (
    <Link to="/">
      <div className="flex flex-col mr-3 items-center cursor-pointer w-40 flex-none rounded-2xl font-general bg-white drop-shadow-md h-full">
        <div className="h-24 w-full rounded-t-2xl flex items-center justify-center relative bg-tertiary-50">
          <span className="absolute rounded-full bg-white shadow p-1.5">
            <img src={service.icon} alt="icon" className="h-14" />
          </span>
        </div>
        <div className="text-xs flex flex-col justify-between px-4 py-6 text-cardTypo grow w-full rounded-b-2xl bg-tertiary-100">
          <div className=" text-white font-title text-center mb-2">
            {service.name}
          </div>
          <div className="text-center text-white bg-white/30 shadow-sm rounded-lg p-1 w-full">
            {service.currency}
            {service.price} / consult
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
