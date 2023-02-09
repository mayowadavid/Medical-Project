import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageLoader from "../ui/loader/Loader";

const LoadingProvider = ({ children }) => {
  const [Loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [pathname]);

  return (
    <>
      {Loading && <PageLoader />}
      {children}
    </>
  );
};

export default LoadingProvider;
