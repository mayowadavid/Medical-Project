import { Button } from "../../core/Buttons";
import { Card } from "../../core/Card";
import { HiStatusOnline, HiOutlineClock } from "react-icons/hi";
import { Link } from "react-router-dom";
import Bookmark from "../../core/Bookmark";
import {
  FadedSmallText,
  MediumText,
  RegularText,
  SmallText,
} from "../../core/Text";
import useModal from "../../../../lib/hooks/useModal";
import { useRef } from "react";
import CheckDoctorAvailability from "../../core/modals/CheckDoctorAvailability";
import AppointmentDisclaimerModal from "../../core/modals/AppointmentDisclaimer";
import Disclaimer from "../../../pages/doctors/disclaimer/Disclaimer";
import { useHistory } from "react-router-dom";

const DoctorCard = ({ doctor, bookmarked, appointmentType }) => {
  const mailBtnRef = useRef(null);
  const { setModal } = useModal();
  const history = useHistory();

  return (
    <Card dropShadow classes={"w-full relative my-4 py-2 px-4 z-0"}>
      <div className="flex flex-row justify-between">
        <Link to={`/doctor/${doctor.id}`}>
          <div className="flex items-center mb-2">
            <img
              src={doctor.imageUrl}
              alt="myhc"
              width={60}
              height={60}
              className="rounded-half"
            />
            <div className="mx-2">
              <RegularText classes={"font-semibold mr-4"}>
                {doctor.name}
              </RegularText>
              <SmallText classes={"text-secondary-100 font-semibold"}>
                {doctor.speciality}
              </SmallText>
              <FadedSmallText>15 years experience</FadedSmallText>
            </div>
            {doctor.mode.includes("Online") ? (
              <div className="absolute right-4 top-2">
                <HiStatusOnline className="w-4 h-4 text-emerald-500" />
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="">
            <div className="flex items-center">
              <MediumText classes={"text-primary-100 font-semibold"}>
                {doctor.fees}
              </MediumText>
              <SmallText>&nbsp;per consultation</SmallText>
            </div>
          </div>
        </Link>
        <div className="self-end mb-4">
          <Bookmark marked={bookmarked} />
        </div>
      </div>
      <div className="flex justify-between w-full">
        {(doctor.mode.includes("Online") ||
          doctor.mode.includes("Offline")) && (
          <Button
            href={
              appointmentType == "package"
                ? `/doctors/book-appointment/${doctor.id}/package`
                : `/doctors/book-appointment/${doctor.id}`
            }
            primary
            hover
            full={
              appointmentType == "package" || !doctor.mode.includes("Online")
            }
          >
            <SmallText classes={"font-semibold"}>Book Appointment</SmallText>
          </Button>
        )}
        {doctor.mode.includes("Online") && appointmentType != "package" ? (
          <Button
            handleClick={() => {
              setModal("appointment-disclaimer");
            }}
            hover
          >
            <SmallText classes={"font-semibold"}>Consult Now</SmallText>
          </Button>
        ) : (
          <></>
        )}
        {!doctor.mode.includes("Online") && !doctor.mode.includes("Offline") && (
          <Button
            full
            handleClick={() => setModal("doctor-availability")}
            hover
          >
            <SmallText
              classes={"flex items-center justify-center font-semibold"}
            >
              <HiOutlineClock size="24px" className="mr-2" />
              Check Availability
            </SmallText>
          </Button>
        )}
        <a
          href={`mailto:abc@example.com?subject=Enquiry on the available time slots for ${doctor.name}&body=%0D%0AHi My Healthcare Collective,%0D%0A%0D%0AI would like to enquire on the available time slots for ${doctor.name}%0D%0A%0D%0AMy preferred date and time slots are:%0D%0A%0D%0A1)%0D%0A%0D%0A2)%0D%0A%0D%0AMy details are as follows%0D%0AName:%0D%0APhone number:%0D%0AEmail:%0D%0A%0D%0AThanks!`}
          className="hidden"
          ref={mailBtnRef}
        ></a>
      </div>
      <CheckDoctorAvailability destructive mailBtnRef={mailBtnRef} />
      <AppointmentDisclaimerModal>
        <Disclaimer
          afterBookingAppointment={() => history.push("/pre-appointment")}
        />
      </AppointmentDisclaimerModal>
    </Card>
  );
};

export default DoctorCard;
