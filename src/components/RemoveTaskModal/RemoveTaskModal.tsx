import { Button, Modal } from "@nimbus-ds/components";
import useTasks from "../../hooks/useTasks";

interface RemoveTaskModal {
  selectedTaskId: number | undefined;
  show: boolean;
  closeModal: () => void;
  removeTask: (taskId: number, points?: number) => void;
}

export default function RemoveTaskModal({
  selectedTaskId,
  closeModal,
  show,
  removeTask,
}: Readonly<RemoveTaskModal>) {
  const { getTask } = useTasks();
  if (!selectedTaskId) return null;

  const task = getTask(selectedTaskId);

  if (!task) return null;

  return (
    <Modal open={show} onDismiss={closeModal}>
      <Modal.Header title="Remove Task?" />
      <Modal.Footer>
        <Button
          appearance="danger"
          onClick={() => {
            removeTask(task.id);
          }}
        >
          Remove
        </Button>
        <Button onClick={closeModal}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
}
