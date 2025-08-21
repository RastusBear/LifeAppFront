import useTasks from "@/hooks/useTasks";
import { Box, Button, Input, Modal, Text } from "@nimbus-ds/components";
import { useState } from "react";

interface ResolveTaskModalProps {
  selectedTaskId: number | undefined;
  show: boolean;
  closeModal: () => void;
  resolveTask: (taskId: number, points?: number) => void;
}

export default function ResolveTaskModal({
  selectedTaskId,
  closeModal,
  show,
  resolveTask,
}: Readonly<ResolveTaskModalProps>) {
  const { getTask } = useTasks();
  const [variablePoints, setVariablePoints] = useState<string | undefined>();
  if (!selectedTaskId) return null;

  const task = getTask(selectedTaskId);

  if (!task) return null;

  return (
    <Modal open={show} onDismiss={closeModal}>
      <Modal.Header title="Resolve Task?" />
      {task.variableValue && (
        <Modal.Body>
          <Box display="inline-flex" flexDirection="row" gap="2">
            <Text>Insert value:</Text>
            <Input
              placeholder="0"
              size={2}
              value={variablePoints}
              type="number"
              onChange={(ev) => {
                setVariablePoints(ev.target.value);
              }}
            />
          </Box>
        </Modal.Body>
      )}
      <Modal.Footer>
        <Button
          appearance="primary"
          onClick={() => {
            resolveTask(task.id, Number(variablePoints));
          }}
          disabled={task.variableValue && !variablePoints}
        >
          Resolve
        </Button>
        <Button onClick={closeModal}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
}
