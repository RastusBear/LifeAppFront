import { Box, Select } from "@nimbus-ds/components";
import CommonFormRow, { SelectAssigned } from "./CommonFormRow";
import type { TaskFormProps } from "./getForm";

export default function RegularTaskForm(props: Readonly<TaskFormProps>) {
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
      <CommonFormRow
        {...props}
        label="Penalization"
        field="penalization"
        placeholder="Penalization"
        type="number"
      />
      <SelectAssigned setCreateData={props.setCreateData} />
      <Box display="flex" flexDirection="row" gap="2">
        <CommonFormRow
          {...props}
          label="Frequency"
          field="recurrencyInterval"
          placeholder="Interval"
          type="number"
        />
        <Select
          id="recurrencyType"
          name="Frequency"
          onChange={(e) =>
            props.setCreateData((data) => ({
              ...data,
              recurrencyType: e.target.value,
            }))
          }
        >
          <Select.Option label="Days" value="D" />
          <Select.Option label="Months" value="M" />
          <Select.Option label="Years" value="A" />
        </Select>
      </Box>
    </Box>
  );
}
