import { useCallback, useState } from "react";
import useModal from "./useModal";
import { useResolveTaskMutation } from "../api/api";

export default function useResolveTask() {
  const [resolveTaskMutation, { isLoading }] = useResolveTaskMutation();
  const [selectedTaskId, setSelectedTaskId] = useState<number | undefined>();

  const { showModal, openModal, closeModal } = useModal();

  const selectTask = useCallback(
    (taskId: number) => {
      setSelectedTaskId(taskId);
      openModal();
    },
    [setSelectedTaskId, openModal]
  );

  const resolveTask = useCallback(
    async (taskId: number, points?: number) => {
      if (isLoading) return;
      await resolveTaskMutation({ taskId, points });
      closeModal();
    },
    [resolveTaskMutation, isLoading, closeModal]
  );

  return {
    showModal,
    openModal,
    closeModal,
    selectedTaskId,
    selectTask,
    resolveTask,
  };
}
