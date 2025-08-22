import { Box, Button, Card, Text } from "@nimbus-ds/components";
import EditPointsModal from "../components/EditPointsModal/EditPointsModal";
import useEditPoints from "../hooks/useEditPoints";
import useGetGroup from "../hooks/useGetGroup";

export default function StatsScreen() {
  const { group } = useGetGroup();
  const { closeModal, showModal, editPoints, openModal } = useEditPoints();
  if (!group) return null;
  return (
    <>
      <Box padding="20" flexDirection="column" display="flex" gap="4">
        <Card>
          <Card.Header title="Points" />
          <Card.Body>
            <Box
              flexDirection="row"
              display="flex"
              justifyContent="space-between"
            >
              <Box flexDirection="row" display="inline-flex" gap="2">
                <Text fontWeight="bold" fontSize="highlight">
                  Your points:{" "}
                </Text>
                <Text>{group.points}</Text>
              </Box>
              <Button appearance="primary" onClick={openModal}>
                Edit
              </Button>
            </Box>
          </Card.Body>
        </Card>
      </Box>
      <EditPointsModal
        closeModal={closeModal}
        show={showModal}
        editPoints={editPoints}
      />
    </>
  );
}
