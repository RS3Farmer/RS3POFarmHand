import { HashRouter, Outlet, Route, Routes } from "react-router-dom";
import { FarmingIndex } from "./pages/farmingMain";

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
