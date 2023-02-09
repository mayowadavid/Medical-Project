import React, { useState, useEffect } from "react";
import { ITEMS } from "../../../lib/data";
import Spotlight from "./homeComponents/Spotlight";

const SpotlightSection = () => {
  const [packages, setPackages] = useState(
    ITEMS.filter((item) => item.type == "package")
  );
  const [discountedPackages, setDiscountedPackages] = useState([]);

  useEffect(() => {
    if (packages != undefined && packages.length > 0) {
      const discPacks = packages.filter((pack, idx) => {
        return idx < 2;
      });
      setDiscountedPackages(discPacks);
    }
  }, [packages]);

  return discountedPackages?.length > 0 ? (
    <div className="mb-4 py-4 font-general bg-tertiary-100">
      <div className="mb-2 py-2 px-4">
        <div className="text-white mb-1 font-title text-sectionHead">
          In the spotlight
        </div>
        <div className="text-white text-xs">
          Explore deals, offers, health updates and more.
        </div>
      </div>
      <div className="flex w-full overflow-x-auto snap-x md:justify-between pb-4 pl-4">
        {discountedPackages != undefined &&
          discountedPackages.length > 0 &&
          discountedPackages.map((pack) => {
            return <Spotlight key={pack.id} pack={pack} />;
          })}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default SpotlightSection;
