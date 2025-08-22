import { Box, Input, Select, Text } from "@nimbus-ds/components";
import type { TaskFormProps, TaskFormValues } from "./getForm";

interface CommonFormRowProps extends TaskFormProps {
  label: string;
  field: keyof TaskFormValues;
  placeholder?: string;
  type?: "number" | "checkbox";
  disabled?: boolean;
}

type SelectAssignedProps = Pick<TaskFormProps, "setCreateData">;

export function SelectAssigned({
  setCreateData,
}: Readonly<SelectAssignedProps>) {
  return (
    <Select
      id="assigned"
      name="Assigned"
      onChange={(e) =>
        setCreateData((data) => ({
          ...data,
          assigned: e.target.value,
        }))
      }
    >
      <Select.Option label="Nobody" value="Nobody" />
      <Select.Option label="Maru" value="Maru" />
      <Select.Option label="Corti" value="Corti" />
    </Select>
  );
}

export default function CommonFormRow({
  type,
  label,
  placeholder,
  field,
  disabled,
  createData,
  setCreateData,
}: Readonly<CommonFormRowProps>) {
  return (
    <Box display="flex" flexDirection="row" gap="1" key={label}>
      <Text>{`${label}: `}</Text>
      <Input
        placeholder={placeholder}
        type={type}
        value={createData[field]}
        onChange={(ev) => {
          setCreateData((data) => ({
            ...data,
            [field]: ev.target.value,
          }));
        }}
        disabled={disabled}
      />
    </Box>
  );
}
