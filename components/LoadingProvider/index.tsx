import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NativePageLoader from "../ui/loader/Loader";

export default function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const {pathname} = useLocation();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [pathname]);

  return (
    <>
      {loading && <NativePageLoader />}
      {children}
    </>
  );
}
