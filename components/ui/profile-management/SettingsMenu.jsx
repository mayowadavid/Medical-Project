import { HiOutlineChevronRight } from "react-icons/hi";
import { Submenu } from "../core/Submenu";

const SettingsMenus = ({ subMenuItems }) => {
  return (
    <div className="flex flex-col my-4">
      {subMenuItems.map((item, id) => (
        <Submenu
          classes="bg-white"
          hoverEffect={true}
          dropShadow={true}
          href={`/${item.link}`}
          key={id}
        >
          <div className="w-4/5 flex flex-row items-center justify-start px-1 py-2">
            {/* {subMenuItems.icon} */}
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

export default SettingsMenus;
