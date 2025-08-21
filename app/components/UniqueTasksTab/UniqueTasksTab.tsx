import useInifiniteTasks from "@/hooks/useTasks";
import { Button, Table, Text } from "@nimbus-ds/components";
import CreateTaskButton from "../CreateTaskButton/CreateTaskButton";

interface UniqueTasksTabProps {
  selectTask: (taskId: number) => void;
  selectTaskForRemoval: (taskId: number) => void;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);

  return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${date.getFullYear().toString().slice(-2)}`;
}

export default function UniqueTasksTab({
  selectTask,
  selectTaskForRemoval,
}: Readonly<UniqueTasksTabProps>) {
  const { tasks } = useInifiniteTasks("unique");

  if (!tasks) return null;

  return (
    <Table>
      <Table.Head>
        {["Name", "Description", "Value", "Deadline", "Assigned", ""].map(
          (header) => (
            <Table.Cell key={header}>
              <Text fontWeight="bold">{header}</Text>
            </Table.Cell>
          )
        )}
        <Table.Cell key={"create button"}>
          <CreateTaskButton type="unique" />
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
              {task.deadline ? formatDate(task.deadline) : ""}
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
