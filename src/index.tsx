import ReactDOM from "react-dom/client";
import { AltGuard } from "./alt1";
import { MantineProvider } from "@mantine/core";
require("@mantine/core/styles/global.css");
import "@mantine/core/styles/UnstyledButton.css";
import "@mantine/core/styles/Button.css";
import "@mantine/core/styles/Stack.css";
import "@mantine/core/styles/Tabs.css";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MantineProvider>
    <AltGuard />
  </MantineProvider>
);
