import { HiOutlineChevronRight } from "react-icons/hi";
import { Submenu } from "../core/Submenu";

const ProfileMenus = ({ subMenuItems }) => {
  return (
    <div className="flex flex-col">
      {subMenuItems.map((item, id) => (
        <Submenu
          classes="bg-white"
          hoverEffect={true}
          dropShadow={true}
          href={`/${item.link}`}
          key={id}
        >
          <div className="w-4/5 flex flex-row items-center justify-start px-1">
            <img
              src={`/icons/${item.image}`}
              alt="icon"
              width={64}
              height={64}
              quality={100}
              className="w-10 h-10 object-cover mr-2"
            />
            <p className="text-lg font-general ml-2">{item.name}</p>
          </div>
          <div className="w-1/5 flex justify-end mr-4">
            <HiOutlineChevronRight className="w-6 h-6 text-primary-100" />
          </div>
        </Submenu>
      ))}
    </div>
  );
};

export default ProfileMenus;
