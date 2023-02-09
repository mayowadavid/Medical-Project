import { useState } from "react";
import { RegularText } from "../../core/Text";

import Accordion from "../../core/Accordion";

const DoctorDetails = ({ doctorData }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  return (
    <div className="my-4">
      <RegularText>More about {doctorData?.name}</RegularText>
      <div>
        {doctorData?.details.map((detail) => (
          <Accordion
            key={detail.id}
            open={openAccordion === detail.id}
            title={detail.title}
            content={detail.content}
            handleClick={() => {
              if (openAccordion === detail.id) {
                setOpenAccordion(null);
              } else {
                setOpenAccordion(detail.id);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DoctorDetails;
