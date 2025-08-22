import { useCallback, useState } from "react";

export default function useModal() {
  const [showModal, setShowModal] = useState(false);
  const openModal = useCallback(() => {
    setShowModal(true);
  }, [setShowModal]);
  const closeModal = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);

  return {
    showModal,
    openModal,
    closeModal,
  };
}
