import { Button } from "../core/Buttons";
import { MediumText } from "../core/Text";

const CheckoutBottomNavbar = ({ totalPrice, optionals, handleClick }) => {
  return (
    <div className="font-general fixed bottom-0 left-0 w-full h-20">
      <div className="border-t-2 bg-white h-full w-full flex justify-between px-4 items-center">
        <div className=" flex flex-col">
          {optionals && optionals.length > 0 ? (
            <MediumText classes="mb-1 font-medium text-primary-100">
              1 Package + {`${optionals.length} optionals`}
            </MediumText>
          ) : (
            <MediumText classes="mb-1 font-medium text-primary-100">
              1 Package
            </MediumText>
          )}

          <MediumText classes="font-medium">
            {totalPrice === null ? 0 : totalPrice}
          </MediumText>
        </div>
        <div>
          <Button handleClick={handleClick} classes="shadow py-3" hover>
            Buy Package
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutBottomNavbar;
