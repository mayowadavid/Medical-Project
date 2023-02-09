import { IonGrid, IonRow } from "@ionic/react";
import { SubHeadingText } from "../core/Text";
import { Button } from "../core/Buttons";
import AllSpecialitiesCirlceItems from "./all-specialities/AllSpecialitiesCirlceItems";
import useModal from "../../../lib/hooks/useModal";
import SeeAllSpecialitiesModal from "../core/modals/SeeAllSpeialities";
import Speciality from "./Speciality";
import { useEffect, useState } from "react";
import { Urql } from "../../../urql/urql";
import { getSpecialitiesQuery } from "../../../urql/queries/speciality";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageLoader from "../loader/Loader";

const SpecialitiesPreviewMenu: React.FC = () => {
  const { closeModal, setModal } = useModal();
  const [specialities, setSpecialities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSpecialities = async () => {
      try {
        const archetypeId = process.env.NEXT_PUBLIC_SPECIALITY_ARCHETYPE_ID;
        const specialitiesRes = await Urql.query(
          getSpecialitiesQuery(archetypeId)
        );
        setSpecialities(specialitiesRes.data.listEntities.items);
        setLoading(false);
      } catch (error) {
        console.log(error);
        toast.error(error.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(false);
      }
    };
    getSpecialities();
  }, []);

  return (
    <div>
      {loading ? (
        <PageLoader />
      ) : (
        <>
          <SubHeadingText classes={"py-4"}>Top Specialities</SubHeadingText>
          <div className="grid grid-cols-2 gap-4 ">
            {specialities.slice(0, 8).map((speciality, idx) => (
              <Speciality
                name={speciality.name}
                icon={"/icons/heart.png"}
                href={`/doctors?specialityId=${speciality.id}`}
                key={idx}
              />
            ))}
          </div>
          <Button
            handleClick={() => {
              setModal("see-all-specialities");
            }}
            full
            classes={"mt-6"}
          >
            See All Specialities
          </Button>
          <SeeAllSpecialitiesModal>
            <IonGrid fixed>
              <IonRow>
                {specialities.map((speciality) => (
                  <AllSpecialitiesCirlceItems
                    key={speciality.id}
                    icon={"/icons/heart.png"}
                    name={speciality.name}
                    href={`/doctors?specialityId=${speciality.id}`}
                    closeModal={closeModal}
                  />
                ))}
              </IonRow>
            </IonGrid>
          </SeeAllSpecialitiesModal>
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default SpecialitiesPreviewMenu;
