import { Tabs } from "@mantine/core";
import "@mantine/core/styles/Tabs.css";
require("./../assets/index.css");
export const NavList: React.FC = () => {
  return (
    <>
      <Tabs
        variant="pill"
        defaultValue=""
        className="NavigationMenu"
        styles={{
          tab: {
            height: "25px",
            justifyContent: "center",
            backgroundColor: "#665d47",
          },
          tabLabel: { height: "15px" },
        }}
      >
        <Tabs.List grow>
          <Tabs.Tab className="Tab" value="Player-Owned Farms">
            Player-Owned Farms
          </Tabs.Tab>
          <Tabs.Tab className="Tab" value="Active Growths">
            Active Growths
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </>
  );
};
