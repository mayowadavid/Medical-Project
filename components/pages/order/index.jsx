import { TopHeader } from "../../ui/layouts/Headers";
import Container from "../../ui/layouts/Container";
import { Button } from "../../ui/core/Buttons";
import Floater from "../../ui/core/Floater";
import { IonContent, IonPage } from "@ionic/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import OrderDetails from "../../ui/order/OrderDetails";
import PatientDetails from "../../ui/appointments/PatientDetails";
import PaymentDetails from "../../ui/appointments/payment-details";
import { useMutation } from "urql";
import createAppointmentMutation from "../../../../urql/mutations/appointment.ts";

import { ORDERS, ITEMS, PATIENTS, CASES } from "../../../lib/data";

const OrderDetailsPage = () => {
  const [order, setOrder] = useState(null);
  const [pack, setPack] = useState(null);
  const [patient, setPatient] = useState(null);
  const [cases, setCases] = useState(null);
  const [optionals, setOptionals] = useState([]);
  const [totalPrice, setTotalPrice] = useState(null);
  const params = useParams();

  const [addappointment, {data}] = useMutation(createAppointmentMutation);

  useEffect(() => {
    const order = ORDERS.find((order) => order.id.toString() === params.id);
    const pack = ITEMS.find((item) => item.id === order?.basket[0]?.itemId);
    const patient = PATIENTS.find((patient) => patient.id === order?.patientId);
    const cases = CASES.find((case_) =>
      case_.orderIds.includes(order.id.toString())
    );
    const optionals = ITEMS.filter((item) =>
      order?.basket[0]?.selectedOptionalItemIds?.includes(item.id)
    );
    const totalPrice =
      order?.basket[0]?.price.amount +
      optionals.reduce((acc, item) => acc + item.price.amount, 0);
    setOrder(order);
    setPack(pack);
    setPatient(patient);
    setCases(cases);
    setOptionals(optionals);
    setTotalPrice(totalPrice);
  }, [params.id]);

  const packageDetails = {
    imageURL: pack?.imageURL,
    name: pack?.name,
    packagePrice: pack?.price?.amount,
    description: pack?.description,
    optionals: optionals,
    totalPrice: totalPrice,
  };

  const makeNewAppointment = () => {
    addappointment({
      variables: {
        data: {
          ...packageDetails
        }
      }
    });
  };

  return (
    <IonPage>
      <TopHeader pageName={"Order Details"} back={true} />
      <IonContent>
        <Container>
          <OrderDetails
            pack={packageDetails}
            orderNumber={order?.orderNumber}
            status={order?.status}
            type={pack?.type}
            slug={pack?.slug}
          />
          <PatientDetails patient={patient} />
          <PaymentDetails />
          {cases?.appointmentIds.length === 0 && (
            <Floater>
              <Button
                full
                primary
                handleClick={() => {}}
                href={`/order/package-appointment/${params.id}`}
              >
                Book Appointment
              </Button>
            </Floater>
          )}
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default OrderDetailsPage;
