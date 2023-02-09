import { useState } from "react";
import Accordion from "../../core/Accordion";
import { Card } from "../../core/Card";

const GlobalTestSummary = ({ summary }) => {
  const [openAccordion, setOpenAccordion] = useState(false);

  return (
    <Card>
      <Accordion
        classes={"border-none font-semibold"}
        open={openAccordion === "1"}
        title={"Test Summary"}
        content={summary}
        handleClick={() => {
          if (openAccordion === "1") {
            setOpenAccordion(false);
          } else {
            setOpenAccordion("1");
          }
        }}
      />
    </Card>
  );
};

export default GlobalTestSummary;
