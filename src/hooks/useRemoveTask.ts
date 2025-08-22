import { useCallback, useState } from "react";
import useModal from "./useModal";
import { useRemoveTaskMutation } from "../api/api";

export default function useRemoveTask() {
  const [removeTaskMutation, { isLoading }] = useRemoveTaskMutation();
  const [selectedTaskId, setSelectedTaskId] = useState<number | undefined>();

  const { showModal, openModal, closeModal } = useModal();

  const selectTask = useCallback(
    (taskId: number) => {
      setSelectedTaskId(taskId);
      openModal();
    },
    [setSelectedTaskId, openModal]
  );

  const removeTask = useCallback(
    async (taskId: number) => {
      if (isLoading) return;
      await removeTaskMutation(taskId);
      closeModal();
    },
    [removeTaskMutation, isLoading, closeModal]
  );

  return {
    showModal,
    openModal,
    closeModal,
    selectedTaskId,
    selectTask,
    removeTask,
  };
}
