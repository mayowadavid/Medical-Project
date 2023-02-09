import { useState } from "react";
import { EditHeader } from "../../ui/layouts/Headers";
import { DOCTORS } from "../../../lib/data";
import DoctorCard from "../../ui/consultation/doctors/DoctorCard";
import { BsSquare, BsCheckSquareFill } from "react-icons/bs";
import RemoveBottomBar from "../../ui/layouts/RemoveBottomBar";
import { Link } from "react-router-dom";
import { Button } from "../../ui/core/Buttons";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { IonContent, IonPage } from "@ionic/react";

const MyPractitioners = () => {
  const [myDoctors, setMyDoctors] = useState(DOCTORS);
  const [removeDoctors, setRemoveDoctors] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [showRemoveToast, setShowRemoveToast] = useState(false);
  const [showEmptyRemoveToast, setShowEmptyRemoveToast] = useState(false);

  const editFunction = () => {
    setEditMode(true);
    console.log("Edit");
  };
  const cancelFunction = () => {
    setEditMode(false);
    setRemoveDoctors([]);
    console.log("Cancel");
  };
  const removeFunction = () => {
    if (removeDoctors.length < 1) {
      setShowEmptyRemoveToast(true);
      setTimeout(() => {
        setShowEmptyRemoveToast(false);
      }, 3000);
    } else {
      const myDocsList = myDoctors.filter((doc) => {
        return !removeDoctors.includes(doc.id);
      });
      setMyDoctors(myDocsList);
      setRemoveDoctors([]);
      setShowRemoveToast(true);
      setShowEmptyRemoveToast(false);
      setTimeout(() => {
        setShowRemoveToast(false);
      }, 3000);
      setEditMode(false);
    }
    console.log("Remove");
  };
  return (
    <IonPage>
      <EditHeader
        pageName="My Practitioners"
        editFunction={editFunction}
        cancelFunction={cancelFunction}
        editMode={editMode}
        showEdit={myDoctors.length > 0}
        back
      />
      <IonContent>
        <div className="mb-20">
          {myDoctors.length > 0 ? (
            <div className="">
              {myDoctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className={`flex justify-between items-center px-4 ${
                    editMode &&
                    removeDoctors.includes(doctor.id) &&
                    "bg-secondary-5"
                  }`}
                >
                  <DoctorCard doctor={doctor} bookmarked={true} />
                  {editMode &&
                    (removeDoctors.includes(doctor.id) ? (
                      <div
                        onClick={() => {
                          const newRemoveList = removeDoctors.filter(
                            (id) => id != doctor.id
                          );
                          setRemoveDoctors(newRemoveList);
                        }}
                      >
                        <BsCheckSquareFill
                          className="ml-4"
                          size="20px"
                          color="#91C9E3"
                        />
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          setRemoveDoctors((prev) => [...prev, doctor.id]);
                        }}
                      >
                        <BsSquare className="ml-4" size="20px" />
                      </div>
                    ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="my-20 px-4 font-general text-center flex flex-col items-center justify-center">
              No practitioners bookmarked.
              <Link to="/doctors">
                <span>
                  <Button
                    handleClick={() => console.log("book now pressed")}
                    classes="text-xs flex items-center justify-center !bg-tertiary-100 border-none rounded-lg font-general font-medium py-2.5 px-4 drop-shadow"
                  >
                    <BsCalendar2CheckFill
                      size="20px"
                      color="#fff"
                      className="mr-2"
                    />
                    Explore Now
                  </Button>
                </span>
              </Link>
            </div>
          )}
          <div
            className={`font-general w-64 bg-black/80 text-center text-white text-sm rounded-lg px-3 py-2 fixed bottom-20 left-centerToast transition-opacity ${
              showRemoveToast ? "opacity-100" : "opacity-0"
            }`}
          >
            Practitioners list updated!
          </div>
          <div
            className={`font-general w-64 bg-black/80 text-center text-white text-sm rounded-lg px-3 py-2 fixed bottom-20 left-centerToast transition-opacity ${
              showEmptyRemoveToast ? "opacity-100" : "opacity-0"
            }`}
          >
            Please select doctors to remove
          </div>
          {editMode && <RemoveBottomBar removeFunction={removeFunction} />}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MyPractitioners;
