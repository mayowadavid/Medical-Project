import { useState } from "react";
import Accordion from "../../../core/Accordion";

const TestCategoryName = ({ category }) => {
  const [openAccordionCategory, setOpenAccordionCategory] = useState(false);

  return (
    category && (
      <tr key={category.id}>
        <td className="px-1 py-2.5 whitespace-normal font-semibold" colSpan={3}>
          <Accordion
            classes={"border-none"}
            open={openAccordionCategory === category.id}
            title={category.categoryName}
            content={category.summary}
            handleClick={() => {
              if (openAccordionCategory === category.id) {
                setOpenAccordionCategory(false);
              } else {
                setOpenAccordionCategory(category.id);
              }
            }}
          />
        </td>
      </tr>
    )
  );
};

export default TestCategoryName;
