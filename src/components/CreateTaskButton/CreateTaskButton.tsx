import { Button, Modal } from "@nimbus-ds/components";
import { getFormComponent } from "./forms/getForm";
import type { TaskType } from "../../api/dtos/task.dto";
import useCreateTask from "../../hooks/useCreateTask";

interface CreateTaskButtonProps {
  type: TaskType;
}

export default function CreateTaskButton({
  type,
}: Readonly<CreateTaskButtonProps>) {
  const {
    showModal,
    openModal,
    closeModal,
    createTask,
    setCreateData,
    createData,
  } = useCreateTask(type);
  const formComponent = getFormComponent(type);
  if (!formComponent) return null;

  return (
    <>
      <Button appearance="primary" onClick={openModal}>
        Create
      </Button>
      <Modal open={showModal} onDismiss={closeModal}>
        <Modal.Header title="Create New Element" />

        <Modal.Body>
          {formComponent({
            createData,
            setCreateData,
          })}
        </Modal.Body>

        <Modal.Footer>
          <Button appearance="primary" onClick={createTask}>
            Create
          </Button>
          <Button onClick={closeModal}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
