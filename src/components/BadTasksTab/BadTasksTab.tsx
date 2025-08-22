import { Button, Table, Text } from "@nimbus-ds/components";
import CreateTaskButton from "../CreateTaskButton/CreateTaskButton";
import useTasks from "../../hooks/useTasks";

interface BadTasksTabProps {
  selectTask: (taskId: number) => void;
  selectTaskForRemoval: (taskId: number) => void;
}

export default function BadTasksTab({
  selectTask,
  selectTaskForRemoval,
}: Readonly<BadTasksTabProps>) {
  const { tasks } = useTasks("bad");

  if (!tasks) return null;

  return (
    <Table>
      <Table.Head>
        {["Name", "Description", "Value", "Assigned", ""].map((header) => (
          <Table.Cell key={header}>
            <Text fontWeight="bold">{header}</Text>
          </Table.Cell>
        ))}
        <Table.Cell key={"create button"}>
          <CreateTaskButton type="bad" />
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
            <Table.Cell>{task.assigned ?? ""}</Table.Cell>
            <Table.Cell>
              <Button
                appearance="neutral"
                onClick={() => {
                  selectTask(task.id);
                }}
              >
                Resolve
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button
                appearance="danger"
                onClick={() => {
                  selectTaskForRemoval(task.id);
                }}
              >
                Remove
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
