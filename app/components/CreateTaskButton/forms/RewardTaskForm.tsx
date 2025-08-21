import { Box } from "@nimbus-ds/components";
import CommonFormRow from "./CommonFormRow";
import { TaskFormProps } from "./getForm";

export default function RewardTaskForm(props: Readonly<TaskFormProps>) {
  return (
    <Box display="flex" flexDirection="column" gap="2">
      <CommonFormRow
        {...props}
        label="Name"
        field="name"
        placeholder="Reward name"
      />
      <CommonFormRow
        {...props}
        label="Description"
        field="description"
        placeholder="Task description"
      />
      <CommonFormRow
        {...props}
        label="Cost"
        field="value"
        placeholder="Leave empty for variable cost"
        type="number"
      />
    </Box>
  );
}
