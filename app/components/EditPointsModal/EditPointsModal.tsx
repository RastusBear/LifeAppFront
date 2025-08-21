import { PointEditType } from "@/hooks/useEditPoints";
import { Box, Button, Input, Modal, Text } from "@nimbus-ds/components";
import { useState } from "react";

interface EditPointsModalProps {
  show: boolean;
  closeModal: () => void;
  editPoints: (value: number, type: PointEditType) => void;
}

export default function EditPointsModal({
  closeModal,
  show,
  editPoints,
}: Readonly<EditPointsModalProps>) {
  const [points, setPoints] = useState<string | undefined>();

  return (
    <Modal open={show} onDismiss={closeModal}>
      <Modal.Header title="Edit Points?" />
      <Modal.Body>
        <Box display="inline-flex" flexDirection="row" gap="2">
          <Text>Insert value:</Text>
          <Input
            placeholder="0"
            size={2}
            value={points}
            type="number"
            onChange={(ev) => {
              setPoints(ev.target.value);
            }}
          />
        </Box>
      </Modal.Body>
      <Modal.Footer>
        <Button
          appearance="primary"
          onClick={() => {
            editPoints(Number(points), "add");
          }}
          disabled={!points}
        >
          Add
        </Button>
        <Button
          appearance="neutral"
          onClick={() => {
            editPoints(Number(points), "overwrite");
          }}
          disabled={!points}
        >
          Overwrite
        </Button>
        <Button
          appearance="danger"
          onClick={() => {
            editPoints(Number(points), "remove");
          }}
          disabled={!points}
        >
          Remove
        </Button>
        <Button onClick={closeModal}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
}
