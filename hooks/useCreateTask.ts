import { useCreateTaskMutation } from "@/api/api";
import { TaskType } from "@/api/dtos/task.dto";
import { TaskFormValues } from "@/app/components/CreateTaskButton/forms/getForm";
import { useCallback, useState } from "react";
import useModal from "./useModal";

export default function useCreateTask(type: TaskType) {
  const { showModal, openModal, closeModal } = useModal();
  const [createTaskMutation, { isLoading }] = useCreateTaskMutation();
  const [createData, setCreateData] = useState<Partial<TaskFormValues>>({});

  const createTask = useCallback(async () => {
    if (isLoading) return;
    await createTaskMutation({
      type,
      data: {
        ...(createData as TaskFormValues),
        value: createData.value ? Number(createData.value) : undefined,
        penalization: createData.penalization
          ? Number(createData.penalization)
          : undefined,
        recurrencyInterval: createData.recurrencyInterval
          ? Number(createData.recurrencyInterval)
          : undefined,
        recurrencyType:
          createData.recurrencyType === "M" || createData.recurrencyType === "A"
            ? createData.recurrencyType
            : "D",
        assigned:
          createData.assigned && createData.assigned !== "Nobody"
            ? createData.assigned
            : undefined,
      },
    });
    closeModal();
  }, [createTaskMutation, closeModal, isLoading, createData]);

  return {
    showModal,
    openModal,
    closeModal,
    createTask,
    createData,
    setCreateData,
  };
}
