import { Box } from "@nimbus-ds/components";
import CommonFormRow, { SelectAssigned } from "./CommonFormRow";
import { TaskFormProps } from "./getForm";

export default function UniqueTaskForm(props: Readonly<TaskFormProps>) {
  return (
    <Box display="flex" flexDirection="column" gap="2">
      <CommonFormRow
        {...props}
        label="Name"
        field="name"
        placeholder="Task name"
      />
      <CommonFormRow
        {...props}
        label="Description"
        field="description"
        placeholder="Task description"
      />
      <CommonFormRow
        {...props}
        label="Reward"
        field="value"
        placeholder="Leave empty for variable reward"
        type="number"
      />
      <SelectAssigned setCreateData={props.setCreateData} />
    </Box>
  );
}
