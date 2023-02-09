import { useEffect } from "react";

const NativePageLoader = () => {
  const loaderStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "999",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
  };

  return (
    <div style={loaderStyle}>
      <img
        src="/assets/images/loader/myhcloader.svg"
        alt=""
        className="w-15 h-15"
        // style={{ width: "25px", height: "25px" }}
      />
    </div>
  );
};

export default NativePageLoader;
