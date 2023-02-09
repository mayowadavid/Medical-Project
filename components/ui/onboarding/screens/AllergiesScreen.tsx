import { Button } from "../../core/Buttons";
import { GiMedicines } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import TagsInput from "../../core/TagsInput";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { Storage } from "@capacitor/storage";
import Floater from "../../core/Floater";
import useLocalDetails from "../../../../lib/hooks/useLocalDetails";
import { nanoid } from "nanoid";
import { useHistory } from "react-router-dom";
import { Urql } from "../../../../urql/urql";
import {
  getEntityByIdQueryOnlyJson,
  updateEntityJsonMutation,
} from "../../../../urql/mutations/profile";
import { toast } from "react-toastify";
interface AllergiesScreenProps {
  drugAllergy: string[];
  setDrugAllergy: Dispatch<SetStateAction<string[]>>;
  foodAllergy: string[];
  setFoodAllergy: Dispatch<SetStateAction<string[]>>;
  nextFunc?: () => void;
  prevFunc?: void | (() => void);
  customPrevBtnText?: string;
  customNextBtnText?: string;
  prevHref?: string;
  nextHref?: string;
}

const AllergiesScreen = ({
  drugAllergy,
  setDrugAllergy,
  foodAllergy,
  setFoodAllergy,
  nextFunc,
  prevFunc,
  customPrevBtnText,
  customNextBtnText,
  prevHref,
  nextHref,
}: AllergiesScreenProps) => {
  const { setAllergyDetails } = useLocalDetails();
  const [drugAllergyTag, setDrugAllergyTag] = useState("");
  const [foodAllergyTag, setFoodAllergyTag] = useState("");
  const history = useHistory();
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

  return (
    <div className="w-full min-h-screen flex flex-col justify-between font-general pb-20">
      <div className="flex flex-col">
        <div className="mt-12 mb-4 w-5/6 self-center">
          <img
            src="/onboarding/allergy_screen.svg"
            alt="Allergy Image"
            className="w-full"
          />
        </div>
        <div className="flex items-center p-1 font-medium">
          <GiMedicines size="24px" className="mr-2 text-blue-600" />
          Drug Allergies (If Any)
        </div>
        <div className="p-1 w-full mb-2">
          <TagsInput
            tagText={drugAllergyTag}
            setTagText={setDrugAllergyTag}
            placeholder="Enter Drug Allergy"
            tagsList={drugAllergy}
            setTagsList={setDrugAllergy}
          />
        </div>
        <div className="flex items-center p-1 font-medium">
          <IoFastFoodOutline size="24px" className="mr-2 text-red-600" />
          Food Allergies (If Any)
        </div>
        <div className="p-1 w-full">
          <TagsInput
            tagText={foodAllergyTag}
            setTagText={setFoodAllergyTag}
            placeholder="Enter Food Allergy"
            tagsList={foodAllergy}
            setTagsList={setFoodAllergy}
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
              // get entity data
              Urql.query(getEntityByIdQueryOnlyJson, {
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
                  if (entityId && eData) {
                    const jsonData = JSON.parse(
                      eData.getEntityById.valueAsJsonString
                    );
                    const updateEntityInfo = {
                      entityId: entityId,
                      valueAsJsonString: JSON.stringify({
                        ...jsonData,
                        allergies: {
                          drug_allergies: drugAllergy.map((d) => {
                            return {
                              id: nanoid(6),
                              name: d,
                            };
                          }),
                          food_allergies: foodAllergy.map((f) => {
                            return {
                              id: nanoid(6),
                              name: f,
                            };
                          }),
                        },
                      }),
                    };
                    Urql.mutation(
                      updateEntityJsonMutation,
                      updateEntityInfo
                    ).then((res) => {
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
                        if (res?.data?.updateEntity?.valueAsJsonString) {
                          // getEntityDetails back from mutation
                          // update local storage
                          const jsonObj = JSON.parse(
                            res?.data.updateEntity.valueAsJsonString
                          );
                          setAllergyDetails(jsonObj.allergies);
                          nextFunc();
                        }
                      }
                    });
                  } else {
                    // no user logged in
                    history.replace("/");
                  }
                }
              });
            }}
            classes="py-3 rounded-lg flex items-center justify-center"
            full
            primary
          >
            {customNextBtnText ? customNextBtnText : "Next"}
            <HiArrowNarrowRight size="20px" className="text-white ml-2" />
          </Button>
        )}
      </Floater>
    </div>
  );
};

export default AllergiesScreen;
