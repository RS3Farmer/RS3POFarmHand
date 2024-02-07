import { HashRouter, Outlet, Route, Routes } from "react-router-dom";
import { FarmingIndex } from "./pages/farmingMain";
import "@mantine/core/styles/global.css";
import "@mantine/core/styles/Accordion.css";
import "@mantine/core/styles/ScrollArea.css";
import "@mantine/core/styles/UnstyledButton.css";
import "@mantine/core/styles/VisuallyHidden.css";
import "@mantine/core/styles/Paper.css";
import "@mantine/core/styles/Popover.css";
import "@mantine/core/styles/CloseButton.css";
import "@mantine/core/styles/Group.css";
import "@mantine/core/styles/Loader.css";
import "@mantine/core/styles/Overlay.css";
import "@mantine/core/styles/ModalBase.css";
import "@mantine/core/styles/Input.css";
import "@mantine/core/styles/Flex.css";
import "@mantine/core/styles/Tabs.css";
require("./assets/index.css");
require("./assets/globals.css");

function App() {
  return (
    <>
      <HashRouter basename="/">
        <Routes>
          <Route path="/">
            {/* Your default route */}
            <Route index element={<FarmingIndex />} />
          </Route>

          {/* Navigate to the default route if no URL matched */}
        </Routes>
      </HashRouter>
      <Outlet />
    </>
  );
}

export default App;
