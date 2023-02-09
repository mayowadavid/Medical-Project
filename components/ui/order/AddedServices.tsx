import { MediumText } from "../core/Text";

interface AddedServicesProps {
  pack: any;
  items: any;
}

const AddedServices = ({ pack, items }: AddedServicesProps) => {
  return (
    <div className="flex flex-col w-full my-2">
      <div className="flex flex-row w-full justify-start items-center">
        <MediumText classes="ml-1 font-title mt-1">
          Optional Services
        </MediumText>
      </div>
      <div className="flex flex-row items-center justify-start my-1 pb-1 w-full pl-6">
        {items?.length > 0 ? (
          <div className="flex flex-col w-full">
            {items?.map((item, index) => (
              <div key={index} className="flex flex-row items-start pr-3">
                <div className="flex flex-col w-3/4 justify-start items-start">
                  <MediumText classes="font-general text-slate-700">
                    - {item.name}
                  </MediumText>
                </div>
                <div className="flex flex-row w-1/4 justify-end items-center">
                  <MediumText classes="font-general text-slate-700">
                    S${item?.price?.amount}
                  </MediumText>
                </div>
              </div>
            ))}
            <div className="flex flex-row items-center justify-end mt-1 pt-1 pb-1 w-full pr-3 border-t">
              <MediumText classes="font-general text-slate-700">
                Total:
              </MediumText>
              <div className="flex flex-row w-1/3 justify-end items-center">
                <MediumText classes="font-general text-slate-700 font-semibold">
                  S${pack.totalPrice}
                </MediumText>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-full">
            <MediumText classes="font-general text-red-500">
              *No optional services added
            </MediumText>
            <div className="flex flex-row items-center justify-end mt-1 pt-1 pb-1 w-full pr-3 border-t">
              <MediumText classes="font-general text-slate-700">
                Total:
              </MediumText>
              <div className="flex w-1/3 justify-end items-center">
                <MediumText classes="font-general text-slate-700 font-semibold">
                  S${pack.packagePrice}
                </MediumText>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddedServices;
