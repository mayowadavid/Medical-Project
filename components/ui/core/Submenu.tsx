import { Link } from "react-router-dom";

interface SubmenuProps {
  children: React.ReactNode;
  dropShadow?: true | false;
  classes?: string;
  noCursor?: true | false;
  hoverEffect?: true | false;
  href?: string;
}

export const Submenu = ({
  children,
  dropShadow,
  classes,
  noCursor,
  hoverEffect,
  href,
}: SubmenuProps) => {
  return (
    <Link to={href}>
      <div
        className={`flex flex-row items-center rounded-lg py-1 px-2 my-1 
        ${noCursor ? "" : "cursor-pointer"} ${classes} ${
          hoverEffect
            ? "hover:scale-[1.02] hover:bg-gray-100 transition ease-in"
            : ""
        }`}
      >
        {children}
      </div>
    </Link>
  );
};
