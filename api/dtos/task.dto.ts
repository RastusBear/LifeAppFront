export type TaskType = "infinite" | "regular" | "unique" | "bad" | "reward";
export type RecurrencyType = "M" | "A" | "D";

export interface TaskDto {
  id: number;
  name: string;
  description: string;
  value?: number;
  penalization?: number;
  type: TaskType;
  variableValue: boolean;
  finished: boolean;
  lastTimeResolved?: string;
  recurrencyInterval?: number;
  recurrencyType?: RecurrencyType;
  deadline?: string;
  assigned?: string;
}
