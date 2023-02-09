const HomeFooter = () => {
  return (
    <div className="mb-4 mt-8 bg-tertiary-50 pb-20 pt-6 flex flex-col font-general">
      <div className="p-4 flex flex-col">
        <img
          src="/assets/images/logo/logo_primary.svg"
          alt=""
          className="w-40"
        />
        <div className="mt-4 text-md">
          We are My Healthcare Collective (MyHC). We got together with the main
          aim of helping you navigate the Singapore private healthcare terrain
          with ease.
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
