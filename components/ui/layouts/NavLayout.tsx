import NavigationMenu from "./NavigationMenu";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children?: React.ReactNode;
}

const NavLayout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState("/");
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const paths = ["/home", "/consult", "/packages", "/profile"];
    setSelectedItem(location.pathname);
    if (paths.includes(location.pathname)) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, [location.pathname]);

  const menuItems = [
    {
      name: "Home",
      link: "/home",
      img_name: "home",
    },
    {
      name: "Consult",
      link: "/consult",
      img_name: "consult",
    },
    {
      name: "Packages",
      link: "/packages",
      img_name: "package",
    },
    {
      name: "Profile",
      link: "/profile",
      img_name: "profile",
    },
  ];

  if (showNav) {
    return (
      <div className="fixed bottom-0 z-50 w-full">
        <NavigationMenu menuItems={menuItems} selectedItem={selectedItem} />
        <div>{children}</div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default NavLayout;
