import type { RecurrencyType } from "./task.dto";

export interface CreateTaskDto {
  name: string;
  description?: string;
  value?: number;
  penalization?: number;
  deadline?: string;
  recurrencyType?: RecurrencyType;
  recurrencyInterval?: number;
  assigned?: string;
}
