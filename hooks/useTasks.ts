import { useGetTasksQuery } from "@/api/api";
import { TaskType } from "@/api/dtos/task.dto";
import { useCallback } from "react";

export default function useTasks(type?: TaskType) {
  const { data } = useGetTasksQuery();

  const tasks = type ? data?.filter((task) => task.type === type) : data;

  const getTask = useCallback(
    (taskId: number) => tasks?.find(({ id }) => id === taskId),
    [tasks]
  );

  return { tasks, getTask };
}
