import { useState, useEffect } from "react";
import { Button } from "../../core/Buttons";
import FormInput from "../../core/FormInput";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { Dispatch, SetStateAction } from "react";
import { Storage } from "@capacitor/storage";
import Floater from "../../core/Floater";
import useValidation from "../../../../lib/hooks/useValidation";
import useLocalDetails from "../../../../lib/hooks/useLocalDetails";
import { gql, useMutation, useQuery } from "urql";
import { useHistory } from "react-router-dom";
import {
  addAddressMutation,
  getEntityByIdQueryForAddress,
  updateAddressMutation,
} from "../../../../urql/mutations/address";
import { Urql } from "../../../../urql/urql";
import { toast } from "react-toastify";
interface AddressScreenProps {
  addressLine: string;
  setAddressLine: Dispatch<SetStateAction<string>>;
  addressLine2: string;
  setAddressLine2: Dispatch<SetStateAction<string>>;
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
  addressState: string;
  setAddressState: Dispatch<SetStateAction<string>>;
  unitNo: string;
  setUnitNo: Dispatch<SetStateAction<string>>;
  postalCode: string;
  setPostalCode: Dispatch<SetStateAction<string>>;
  nextFunc?: () => void;
  prevFunc?: () => void;
  customPrevBtnText?: string;
  customNextBtnText?: string;
  prevHref?: string;
  nextHref?: string;
}

const AddressScreen = ({
  addressLine,
  setAddressLine,
  addressLine2,
  setAddressLine2,
  city,
  setCity,
  addressState,
  setAddressState,
  unitNo,
  setUnitNo,
  postalCode,
  setPostalCode,
  nextFunc,
  prevFunc,
  customPrevBtnText,
  customNextBtnText,
  prevHref,
  nextHref,
}: AddressScreenProps) => {
  const history = useHistory();
  const { validatePostal } = useValidation();
  const { setAddressDetails } = useLocalDetails();
  const [showValidateError, setShowValidateError] = useState(false);
  const [entityId, setEntityId] = useState();
  useEffect(() => {
    const fetchEntityId = async () => {
      const { value: userData } = await Storage.get({
        key: "loggedUser",
      });
      if (userData && JSON.parse(userData).length > 0) {
        const user = JSON.parse(userData)[0];
        setEntityId(user.entity.id);
      }
    };
    fetchEntityId();
  }, []);
  const validateFields = () => {
    console.log("Validating...");
    if (validatePostal(postalCode)) setShowValidateError(false);
    else setShowValidateError(true);
    return validatePostal(postalCode);
  };
  return (
    <div className="w-full min-h-screen flex flex-col justify-between font-general">
      <div className="flex flex-col">
        <div className="mt-2 w-full">
          <img
            src="/onboarding/address_screen.svg"
            alt="Nationality Image"
            className="w-full"
          />
        </div>
        <div className="p-1 font-medium">Address Line 1</div>
        <div className="p-1 w-full">
          <FormInput
            inputState={addressLine}
            setInputState={setAddressLine}
            placeholder="Address..."
          />
        </div>
        <div className="p-1 font-medium">Address Line 2</div>
        <div className="p-1 w-full">
          <FormInput
            inputState={addressLine2}
            setInputState={setAddressLine2}
            placeholder="Address..."
          />
        </div>
        <div className="flex items-start justify-between">
          <div className="w-1/2">
            <div className="p-1 font-medium">City</div>
            <div className="p-1 w-full">
              <FormInput
                inputState={city}
                setInputState={setCity}
                placeholder="City"
              />
            </div>
          </div>
          <div className="w-1/2">
            <div className="p-1 font-medium">State</div>
            <div className="p-1 w-full">
              <FormInput
                inputState={addressState}
                setInputState={setAddressState}
                placeholder="State"
              />
            </div>
          </div>
        </div>
        <div className="flex items-start justify-between">
          <div className="w-1/2">
            <div className="p-1 font-medium">Unit Number</div>
            <div className="p-1 w-full">
              <FormInput
                inputState={unitNo}
                setInputState={setUnitNo}
                placeholder="Unit no."
              />
            </div>
          </div>
          <div className="w-1/2">
            <div className="p-1 font-medium">Postal Code</div>
            <div className="p-1 w-full">
              <FormInput
                inputType="number"
                inputState={postalCode}
                setInputState={setPostalCode}
                placeholder="Postal code"
                showError={showValidateError}
                errorText="Enter a valid postal code!"
                validateFunction={validatePostal}
              />
            </div>
          </div>
        </div>
      </div>
      <Floater classes="!bg-transparent !border-none">
        {prevFunc && (
          <Button
            href={prevHref}
            handleClick={() => prevFunc()}
            classes="py-3 rounded-lg mr-3 !bg-blue-400 flex items-center justify-center"
            full
          >
            <HiArrowNarrowLeft size="20px" className="text-white mr-2" />
            {customPrevBtnText ? customPrevBtnText : "Prev"}
          </Button>
        )}
        {nextFunc && (
          <Button
            href={nextHref}
            handleClick={async () => {
              if (validateFields()) {
                if (entityId) {
                  // get entity data
                  Urql.query(getEntityByIdQueryForAddress, {
                    id: entityId,
                  }).then((res) => {
                    if (res.error) {
                      toast.error(res.error.message, {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      });
                    } else {
                      // update address details
                      let addressList = res?.data?.getEntityById.addresses;
                      if (addressList.find((x) => x.key == "Address")) {
                        // update existing address details in key:"Address"
                        const updateAddressInfo = {
                          entityId: entityId,
                          id: addressList[0].id,
                          key: addressList[0].key,
                          fields: [
                            ...addressList
                              .find((x) => x.key == "Address")
                              .fields.filter(
                                (x) =>
                                  x.key != "addressLine" &&
                                  x.key != "addressLine2" &&
                                  x.key != "city" &&
                                  x.key != "state" &&
                                  x.key != "unit" &&
                                  x.key != "postalCode"
                              ),
                            { key: "addressLine", value: addressLine },
                            { key: "addressLine2", value: addressLine2 },
                            { key: "city", value: city },
                            { key: "state", value: addressState },
                            { key: "unit", value: unitNo },
                            { key: "postalCode", value: postalCode },
                          ],
                        };
                        Urql.mutation(
                          updateAddressMutation,
                          updateAddressInfo
                        ).then(async (res) => {
                          if (res.error) {
                            toast.error(res.error.message, {
                              position: "bottom-center",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                            });
                          } else {
                            if (res?.data?.updateAddressOfEntity?.addresses) {
                              await setAddressDetails(
                                res.data.updateAddressOfEntity.addresses
                              );
                              nextFunc();
                            }
                          }
                        });
                      } else {
                        // add address under key : Address if it doesn't already exist
                        const addAddressInfo = {
                          entityId: entityId,
                          key: "Address",
                          fields: [
                            { key: "addressLine", value: addressLine },
                            { key: "addressLine2", value: addressLine2 },
                            { key: "city", value: city },
                            { key: "state", value: addressState },
                            { key: "unit", value: unitNo },
                            { key: "postalCode", value: postalCode },
                          ],
                        };
                        Urql.mutation(addAddressMutation, addAddressInfo).then(
                          async (res) => {
                            if (res.error) {
                              toast.error(res.error.message, {
                                position: "bottom-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                              });
                            } else {
                              if (res?.data?.updateAddressOfEntity?.addresses) {
                                await setAddressDetails(
                                  res.data.updateAddressOfEntity.addresses
                                );
                                nextFunc();
                              }
                            }
                          }
                        );
                      }
                    }
                  });
                } else {
                  // no user logged in
                  history.replace("/");
                }
              } else {
                console.log("Invalid");
              }
            }}
            classes="py-3 rounded-lg flex items-center justify-center"
            full
            primary
            disabled={
              (addressLine == "" && addressLine2 == "") ||
              unitNo == "" ||
              postalCode == ""
            }
          >
            {customNextBtnText ? customNextBtnText : "Next"}
            <HiArrowNarrowRight size="20px" className="text-white ml-2" />
          </Button>
        )}
      </Floater>
    </div>
  );
};

export default AddressScreen;
