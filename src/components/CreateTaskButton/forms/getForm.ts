import type { Dispatch, SetStateAction } from "react";
import type { TaskType } from "../../../api/dtos/task.dto";
import InfiniteTaskForm from "./InfiniteTaskForm";
import RegularTaskForm from "./RegularTaskForm";
import RewardTaskForm from "./RewardTaskForm";
import UniqueTaskForm from "./UniqueTaskForm";

export interface TaskFormProps {
  createData: Partial<TaskFormValues>;
  setCreateData: Dispatch<SetStateAction<Partial<TaskFormValues>>>;
}

export interface TaskFormValues {
  name: string;
  description?: string;
  value?: string;
  recurrencyInterval?: string;
  recurrencyType?: string;
  penalization?: string;
  assigned?: string;
}

export function getFormComponent(type: TaskType) {
  switch (type) {
    case "infinite":
    case "bad":
      return InfiniteTaskForm;
    case "reward":
      return RewardTaskForm;
    case "regular":
      return RegularTaskForm;
    case "unique":
      return UniqueTaskForm;
  }
}
