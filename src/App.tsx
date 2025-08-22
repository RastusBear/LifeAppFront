import { useState } from "react";
import HomeScreen from "./pages";
import RewardScreen from "./pages/rewards";
import StatsScreen from "./pages/stats";
import { Box, Title } from "@nimbus-ds/components";

type TabName = "index" | "rewards" | "stats";

function Bar({ setSelectedTab }) {
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-evenly">
      {[
        ["index", "Tasks"],
        ["rewards", "Rewards"],
        ["stats", "Stats"],
      ].map(([tabName, tabTitle]) => {
        return (
          <Box
            key={tabName}
            onClick={() => {
              setSelectedTab(tabName);
            }}
          >
            <Title as="h3">{tabTitle}</Title>
          </Box>
        );
      })}
    </Box>
  );
}

function App() {
  const [selectedTab, setSelectedTab] = useState<TabName>("index");

  return (
    <Box borderTopWidth="2" padding="10">
      <Bar setSelectedTab={setSelectedTab} />
      {selectedTab === "index" && <HomeScreen />}
      {selectedTab === "rewards" && <RewardScreen />}
      {selectedTab === "stats" && <StatsScreen />}
    </Box>
  );
}

export default App;
