import { useCallback } from "react";
import type { TaskType } from "../api/dtos/task.dto";
import { useGetTasksQuery } from "../api/api";

export default function useTasks(type?: TaskType) {
  const { data } = useGetTasksQuery();

  const tasks = type ? data?.filter((task) => task.type === type) : data;

  const getTask = useCallback(
    (taskId: number) => tasks?.find(({ id }) => id === taskId),
    [tasks]
  );

  return { tasks, getTask };
}
