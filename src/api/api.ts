import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CreateTaskDto } from "./dtos/create-task.dto";
import type { EditGroupDto } from "./dtos/edit-group.dto";
import type { GroupDto } from "./dtos/group.dto";
import type { TaskDto, TaskType } from "./dtos/task.dto";

const GROUP_ID = "123";

const tags = {
  tasks: "tasks",
  group: "group",
};

export const api = createApi({
  reducerPath: "api",
  tagTypes: Object.values(tags),
  baseQuery: fetchBaseQuery({
    //baseUrl: "http://localhost:3000",
    baseUrl: "https://my-nest-api.onrender.com", // 👈 your NestJS server IP on local network
    prepareHeaders: (headers) => {
      headers.set("Authorization", "Bearer cortimarucortimaru"); // 👈 your static token
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getGroup: builder.query<GroupDto, void>({
      query: () => `/groups/${GROUP_ID}`,
      providesTags: [tags.group],
    }),
    getTasks: builder.query<TaskDto[], void>({
      query: () => `/groups/${GROUP_ID}/tasks`,
      providesTags: [tags.tasks],
    }),
    resolveTask: builder.mutation<void, { taskId: number; points?: number }>({
      query: ({ taskId, points }) => ({
        url: `/groups/${GROUP_ID}/tasks/${taskId}/resolve${
          points ? `?points=${points}` : ""
        }`,
        method: "POST",
      }),
      invalidatesTags: [tags.tasks, tags.group],
    }),
    createTask: builder.mutation<void, { type: TaskType; data: CreateTaskDto }>(
      {
        query: ({ type, data }) => ({
          url: `/groups/${GROUP_ID}/tasks/${type}`,
          method: "POST",
          body: data,
        }),
        invalidatesTags: [tags.tasks],
      }
    ),
    editGroup: builder.mutation<void, EditGroupDto>({
      query: (body) => ({
        url: `/groups/${GROUP_ID}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: [tags.group],
    }),
    removeTask: builder.mutation<void, number>({
      query: (taskId) => ({
        url: `/groups/${GROUP_ID}/tasks/${taskId}`,
        method: "DELETE",
      }),
      invalidatesTags: [tags.tasks],
    }),
  }),
});

// Auto-generated hooks
export const {
  useGetTasksQuery,
  useGetGroupQuery,
  useResolveTaskMutation,
  useEditGroupMutation,
  useCreateTaskMutation,
  useRemoveTaskMutation,
} = api;
