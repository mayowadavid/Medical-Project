const PageLoader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#F8F8F8AD] z-[999]">
      <img
        src="/assets/images/loader/myhcloader.svg"
        alt="Loading..."
        className="w-15 h-15"
      />
    </div>
  );
};

export default PageLoader;
