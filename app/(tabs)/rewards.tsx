import useRemoveTask from "@/hooks/useRemoveTask";
import useResolveTask from "@/hooks/useResolveTask";
import useTasks from "@/hooks/useTasks";
import { Box, Button, Card, Table, Text } from "@nimbus-ds/components";
import "@nimbus-ds/styles/dist/index.css";
import CreateTaskButton from "../components/CreateTaskButton/CreateTaskButton";
import RemoveTaskModal from "../components/RemoveTaskModal/RemoveTaskModal";
import ResolveTaskModal from "../components/ResolveTaskModal/ResolveTaskModal";

export default function RewardScreen() {
  const removeTask = useRemoveTask();
  const resolveTask = useResolveTask();
  const { tasks } = useTasks("reward");

  if (!tasks) return null;

  return (
    <>
      <Box padding="10">
        <Card>
          <Card.Header title="Rewards" />
          <Card.Body>
            <Table>
              <Table.Head>
                {["Name", "Description", "Cost", ""].map((header) => (
                  <Table.Cell key={header}>
                    <Text fontWeight="bold">{header}</Text>
                  </Table.Cell>
                ))}
                <Table.Cell key={"create button"}>
                  <CreateTaskButton type="reward" />
                </Table.Cell>
              </Table.Head>
              <Table.Body>
                {tasks.map((task) => (
                  <Table.Row key={task.id}>
                    <Table.Cell>{task.name}</Table.Cell>
                    <Table.Cell>{task.description}</Table.Cell>
                    <Table.Cell>
                      {task.variableValue ? "Variable" : task.value}
                    </Table.Cell>
                    <Table.Cell>
                      <Button
                        appearance="neutral"
                        onClick={() => {
                          resolveTask.selectTask(task.id);
                        }}
                      >
                        Resolve
                      </Button>
                    </Table.Cell>
                    <Table.Cell>
                      <Button
                        appearance="danger"
                        onClick={() => {
                          removeTask.selectTask(task.id);
                        }}
                      >
                        Remove
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Card.Body>
        </Card>
      </Box>
      <ResolveTaskModal
        show={resolveTask.showModal}
        closeModal={resolveTask.closeModal}
        resolveTask={resolveTask.resolveTask}
        selectedTaskId={resolveTask.selectedTaskId}
      />
      <RemoveTaskModal
        show={removeTask.showModal}
        closeModal={removeTask.closeModal}
        removeTask={removeTask.removeTask}
        selectedTaskId={removeTask.selectedTaskId}
      />
    </>
  );
}
