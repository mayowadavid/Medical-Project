import { Button } from "../../ui/core/Buttons";
import Container from "../../ui/layouts/Container";
import { TopHeader } from "../../ui/layouts/Headers";
import { useState } from "react";
import { MediumText } from "../../ui/core/Text";
import InputField from "../../ui/registration/input-field";
import { IonContent, IonPage } from "@ionic/react";
import { Link, useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { changePasswordMutation } from "../../../urql/mutations/password";
import { Urql } from "../../../urql/urql";
import { Storage } from "@capacitor/storage";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [reInputNewPassWord, setReInputNewPassWord] = useState("");
  const [password, setPassword] = useState({
    newPassword: "",
    oldPassword: "",
    reInputNewPassWord: "",
  });
  const history = useHistory();

  const changePasswordHandler = async (e) => {
    e.preventDefault();

    if (newPassword === reInputNewPassWord) {
      try {
        const { value: userData } = await Storage.get({
          key: "loggedUser",
        });
        const user = JSON.parse(userData)[0];
        const obj = {
          userId: user.id,
          newPassword: newPassword,
          oldPassword: oldPassword,
        };
        const res = await Urql.mutation(changePasswordMutation, obj);
        if (res.data.changePassword.isSuccess) {
          toast.success("Password changed Successfully", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setNewPassword("");
          setOldPassword("");
          setReInputNewPassWord("");
        }
      } catch (error) {
        toast.error(error.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      toast.error("Passwords do not match", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <IonPage>
      <div className="flex flex-col w-full h-screen bg-gradient-to-b from-secondary-5 to-white">
        <TopHeader pageName={"Change your password"} back />
        <IonContent>
          <Container>
            <form className="flex flex-col mt-28 justify-center items-center">
              <InputField
                id="password"
                placeholder="Old password"
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <InputField
                id="newPassword"
                placeholder="New password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <InputField
                id="confirmPassword"
                placeholder="Confirm new password"
                type="password"
                value={reInputNewPassWord}
                onChange={(e) => setReInputNewPassWord(e.target.value)}
              />
              <div className="flex flex-row w-full justify-center items-center">
                <Button
                  classes="w-[18rem] text-md mt-12 font-title bg-blue-500 shadow-md"
                  handleClick={(e) => changePasswordHandler(e)}
                >
                  Change Password
                </Button>
              </div>
            </form>
            <Link to="/forgot-password">
              <MediumText classes="mt-4 text-center text-blue-500 font-title">
                Forgot your password?
              </MediumText>
            </Link>
          </Container>
        </IonContent>
      </div>
      <ToastContainer />
    </IonPage>
  );
};

export default ChangePassword;
