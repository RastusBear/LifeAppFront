import { Box, Tabs } from "@nimbus-ds/components";
import "@nimbus-ds/styles/dist/index.css";
import BadTasksTab from "../components/BadTasksTab/BadTasksTab";
import InfiniteTasksTab from "../components/InfiniteTasksTab/InfiniteTasksTab";
import RegularTaskTab from "../components/RegularTasksTab/RegularTasksTab";
import RemoveTaskModal from "../components/RemoveTaskModal/RemoveTaskModal";
import ResolveTaskModal from "../components/ResolveTaskModal/ResolveTaskModal";
import UniqueTasksTab from "../components/UniqueTasksTab/UniqueTasksTab";
import useResolveTask from "../hooks/useResolveTask";
import useRemoveTask from "../hooks/useRemoveTask";

export default function HomeScreen() {
  const resolveTask = useResolveTask();
  const removeTask = useRemoveTask();

  return (
    <>
      <Box padding="10">
        <Tabs>
          <Tabs.Item label="Infinite">
            <InfiniteTasksTab
              selectTask={resolveTask.selectTask}
              selectTaskForRemoval={removeTask.selectTask}
            />
          </Tabs.Item>
          <Tabs.Item label="Regular">
            <RegularTaskTab
              selectTask={resolveTask.selectTask}
              selectTaskForRemoval={removeTask.selectTask}
            />
          </Tabs.Item>
          <Tabs.Item label="Unique">
            <UniqueTasksTab
              selectTask={resolveTask.selectTask}
              selectTaskForRemoval={removeTask.selectTask}
            />
          </Tabs.Item>
          <Tabs.Item label="Bad habits">
            <BadTasksTab
              selectTask={resolveTask.selectTask}
              selectTaskForRemoval={removeTask.selectTask}
            />
          </Tabs.Item>
        </Tabs>
      </Box>
      <ResolveTaskModal
        show={resolveTask.showModal}
        closeModal={resolveTask.closeModal}
        resolveTask={resolveTask.resolveTask}
        selectedTaskId={resolveTask.selectedTaskId}
      />
      <RemoveTaskModal
        show={removeTask.showModal}
        closeModal={removeTask.closeModal}
        removeTask={removeTask.removeTask}
        selectedTaskId={removeTask.selectedTaskId}
      />
    </>
  );
}
