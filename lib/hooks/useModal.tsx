import { useEffect, useCallback } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../recoil/atoms";

const useModal = () => {
  const [openModal, setOpenModal] = useRecoilState(modalState);

  const closeModal = () => {
    setOpenModal(null);
  };

  const setModal = useCallback(
    (modal: string) => {
      setOpenModal(modal);
    },
    [setOpenModal]
  );

  useEffect(() => {
    return () => setModal(null);
  }, [setOpenModal, setModal]);

  return { openModal, setModal, closeModal };
};

export default useModal;
