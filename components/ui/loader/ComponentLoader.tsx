import PuffLoader from "react-spinners/PuffLoader";

const ComponentLoader = () => {
  return (
    <div className="flex w-full h-36 items-center justify-center z-[999]">
      <PuffLoader color="#F58232" size={50} />
    </div>
  );
};

export default ComponentLoader;
