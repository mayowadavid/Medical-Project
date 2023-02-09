import { Button } from "../../core/Buttons";
import FormDropdown from "../../core/FormDropdown";
import { allCountries } from "country-region-data";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import FormInput from "../../core/FormInput";
import { Storage } from "@capacitor/storage";
import Floater from "../../core/Floater";
import useValidation from "../../../../lib/hooks/useValidation";
import useLocalDetails from "../../../../lib/hooks/useLocalDetails";
import { gql, useMutation, useQuery } from "urql";
import { useHistory } from "react-router-dom";
import { Urql } from "../../../../urql/urql";
import {
  addAddressMutation,
  updateAddressMutation,
} from "../../../../urql/mutations/address";
import { toast } from "react-toastify";
import { getIdentifierKey } from "../../../../lib/helper/identitifiers";
import {
  updateEntityIdentifierMutation,
  addEntityIdentifierMutation,
  getEntityByIdQueryForNationality,
} from "../../../../urql/mutations/identifier";
interface NationalityScreenProps {
  country: string;
  setCountry: Dispatch<SetStateAction<string>>;
  idValue: string;
  setIdValue: Dispatch<SetStateAction<string>>;
  selectedIdType: string;
  setSelectedIdType: Dispatch<SetStateAction<string>>;
  nextFunc?: () => void;
  prevFunc?: () => void;
  customPrevBtnText?: string;
  customNextBtnText?: string;
  prevHref?: string;
  nextHref?: string;
}

const NationalityScreen = ({
  country,
  setCountry,
  idValue,
  setIdValue,
  nextFunc,
  prevFunc,
  customPrevBtnText,
  customNextBtnText,
  prevHref,
  nextHref,
  selectedIdType,
  setSelectedIdType,
}: NationalityScreenProps) => {
  const history = useHistory();
  const { validateFIN, validateNRIC, validatePassport } = useValidation();
  const { setIdentityDetails, setAddressDetails, getIdentitiesFromType } =
    useLocalDetails();
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showSelectIdDropdown, setShowSelectIdDropdown] = useState(false);
  const [invalidFieldError, setInvalidFieldError] = useState("");
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
    setInvalidFieldError("");
    if (selectedIdType == "NRIC") {
      if (validateNRIC(idValue)) {
        setShowValidateError(false);
        setInvalidFieldError("");
      } else {
        setShowValidateError(true);
        setInvalidFieldError("Enter a valid NRIC number");
      }
      return validateNRIC(idValue);
    } else if (selectedIdType == "FIN") {
      if (validateFIN(idValue)) {
        setShowValidateError(false);
        setInvalidFieldError("");
      } else {
        setShowValidateError(true);
        setInvalidFieldError("Enter a valid FIN number!");
      }
      return validateFIN(idValue);
    } else if (selectedIdType == "Passport No.") {
      if (validatePassport(idValue)) {
        setShowValidateError(false);
        setInvalidFieldError("");
      } else {
        setShowValidateError(true);
        setInvalidFieldError("Enter a valid passport number!");
      }
      return validatePassport(idValue);
    }
  };
  const getCountryList = () => {
    const countryList = allCountries.map((country) => country[0]);
    return countryList;
  };
  useEffect(() => {
    setInvalidFieldError("");
    setShowValidateError(false);
  }, [selectedIdType]);

  const getIdValue = useCallback(() => {
    getIdentitiesFromType(selectedIdType).then((identity) =>
      setIdValue(identity.value)
    );
  }, [selectedIdType, getIdentitiesFromType, setIdValue]);
  useEffect(() => {
    getIdValue();
  }, [selectedIdType, getIdValue]);
  return (
    <div className="w-full min-h-screen flex flex-col justify-between font-general">
      <div className="flex flex-col">
        <div className="mt-12 w-full">
          <img
            src="/onboarding/nationality_screen.svg"
            alt="Nationality Image"
            className="w-full"
          />
        </div>
        <div className="text-2xl font-medium my-4">Choose Your Nationality</div>
        <div>
          <FormDropdown
            dropdownMenuOpen={showCountryDropdown}
            setDropdownMenuOpen={setShowCountryDropdown}
            dropdownValue={country}
            setDropdownValue={setCountry}
            options={getCountryList()}
            containerClasses="w-full"
          />
        </div>
        <div className="p-1 font-medium mt-4">NRIC/FIN/Passport Number</div>
        <div>
          <FormDropdown
            dropdownMenuOpen={showSelectIdDropdown}
            setDropdownMenuOpen={setShowSelectIdDropdown}
            dropdownValue={selectedIdType}
            setDropdownValue={setSelectedIdType}
            options={["NRIC", "Passport No.", "FIN"]}
            containerClasses="w-full"
          />
        </div>
        <div className="p-1 w-full">
          <FormInput
            inputState={idValue}
            setInputState={setIdValue}
            placeholder="Enter NRIC/FIN/Passport Number"
            enterFunction={() => console.log("Enter Key Pressed!")}
            showError={showValidateError}
            errorText={invalidFieldError}
            validateFunction={
              selectedIdType == "NRIC"
                ? validateNRIC
                : selectedIdType == "FIN"
                ? validateFIN
                : validatePassport
            }
          />
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
                // get entity data
                if (entityId) {
                  Urql.query(getEntityByIdQueryForNationality, {
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
                      const eData = res?.data;
                      // update entity in backend
                      let identifierList = eData.getEntityById.identifiers;
                      if (
                        identifierList.find(
                          (x) => x.key == getIdentifierKey[selectedIdType]
                        )
                      ) {
                        // update existing identifier
                        const updateIdentifierInfo = {
                          entityId: entityId,
                          id: identifierList.find(
                            (x) => x.key == getIdentifierKey[selectedIdType]
                          ).id,
                          key: identifierList.find(
                            (x) => x.key == getIdentifierKey[selectedIdType]
                          ).key,
                          value: idValue,
                        };
                        Urql.mutation(
                          updateEntityIdentifierMutation,
                          updateIdentifierInfo
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
                            if (
                              res?.data?.updateIdentifierOfEntity?.identifiers
                            ) {
                              await setIdentityDetails(
                                res?.data?.updateIdentifierOfEntity?.identifiers
                              );
                            }
                          }
                        });
                      } else {
                        // add identifier if doesn't already exist
                        const addIdentifierInfo = {
                          entityId: entityId,
                          key: getIdentifierKey[selectedIdType],
                          value: idValue,
                        };
                        Urql.mutation(
                          addEntityIdentifierMutation,
                          addIdentifierInfo
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
                            if (res?.data?.addIdentifierToEntity?.identifiers) {
                              await setIdentityDetails(
                                res?.data?.addIdentifierToEntity?.identifiers
                              );
                            }
                          }
                        });
                      }
                      // update country
                      let addressList = eData.getEntityById.addresses;
                      if (addressList.find((x) => x.key == "Address")) {
                        // update existing country in key:"Address"
                        const updateCountryInfo = {
                          entityId: entityId,
                          id: addressList.find((x) => x.key == "Address").id,
                          key: addressList.find((x) => x.key == "Address").key,
                          fields: [
                            ...addressList
                              .find((x) => x.key == "Address")
                              .fields.filter((x) => x.key != "country"),
                            {
                              key: "country",
                              value: country,
                            },
                          ],
                        };
                        Urql.mutation(
                          updateAddressMutation,
                          updateCountryInfo
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
                            const storedCountryValue =
                              res.data.updateAddressOfEntity.addresses
                                .find((x: any) => x.key == "Address")
                                .fields.find(
                                  (x: any) => x.key == "country"
                                ).value;
                            if (storedCountryValue) {
                              await setAddressDetails(
                                res.data.updateAddressOfEntity.addresses
                              );
                              nextFunc();
                            }
                          }
                        });
                      } else {
                        // add address with country under key : Address if it doesn't already exist
                        const addCountryInfo = {
                          entityId: entityId,
                          key: "Address",
                          fields: [{ key: "country", value: country }],
                        };
                        Urql.mutation(addAddressMutation, addCountryInfo).then(
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
                              const storedCountryValue =
                                res.data.addAddressToEntity.addresses
                                  .find((x: any) => x.key == "Address")
                                  .fields.find(
                                    (x: any) => x.key == "country"
                                  ).value;
                              if (storedCountryValue) {
                                await setAddressDetails(
                                  res.data.addAddressToEntity.addresses
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
            disabled={country == "Select country" || idValue == ""}
          >
            {customNextBtnText ? customNextBtnText : "Next"}
            <HiArrowNarrowRight size="20px" className="text-white ml-2" />
          </Button>
        )}
      </Floater>
    </div>
  );
};

export default NationalityScreen;
