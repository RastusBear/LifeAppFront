import { RecurrencyType } from "@/api/dtos/task.dto";
import useInifiniteTasks from "@/hooks/useTasks";
import { Button, Table, Text } from "@nimbus-ds/components";
import CreateTaskButton from "../CreateTaskButton/CreateTaskButton";

interface RegularTaskTabProps {
  selectTask: (taskId: number) => void;
  selectTaskForRemoval: (taskId: number) => void;
}

const getRecurrencyDescriptor = (type: RecurrencyType, interval: number) => {
  const isPlural = interval > 1;
  const singleDescriptors: Record<RecurrencyType, string> = {
    D: "Daily",
    M: "Monthly",
    A: "Yearly",
  };
  const pluralDescriptors: Record<RecurrencyType, string> = {
    D: "days",
    M: "months",
    A: "years",
  };
  if (isPlural) return `Every ${interval} ${pluralDescriptors[type]}`;
  return singleDescriptors[type];
};

export default function RegularTaskTab({
  selectTask,
  selectTaskForRemoval,
}: Readonly<RegularTaskTabProps>) {
  const { tasks } = useInifiniteTasks("regular");

  if (!tasks) return null;

  return (
    <Table>
      <Table.Head>
        {[
          "Name",
          "Description",
          "Value",
          "Penalization",
          "Frequency",
          "Assigned",
          "",
        ].map((header) => (
          <Table.Cell key={header}>
            <Text fontWeight="bold">{header}</Text>
          </Table.Cell>
        ))}
        <Table.Cell key={"create button"}>
          <CreateTaskButton type="regular" />
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
            <Table.Cell>{task.penalization ?? ""}</Table.Cell>
            <Table.Cell>
              {task.recurrencyInterval &&
                task.recurrencyType &&
                getRecurrencyDescriptor(
                  task.recurrencyType,
                  task.recurrencyInterval
                )}
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
