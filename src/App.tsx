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
require("./assets/PatchData/PatchTeleports.json");
require("./assets/POFAnimalData/AnimalBreedingRates.json");
require("./assets/POFAnimalData/AnimalFeedingInfo.json");
require("./assets/POFAnimalData/AnimalGoalOutput.json");
require("./assets/POFAnimalData/AnimalGrowthTime.json");
require("./assets/POFAnimalData/AnimalPenType.json");
require("./assets/POFAnimalData/AnimalSeasonSpecific.json");
require("./assets/POFAnimalData/AnimalSellingTraits.json");
require("./assets/POFAnimalData/AnimalTraits.json");
require("./assets/POFAnimalData/AnimalTroughInfo.json");
require("./assets/POFAnimalData/Animals.json");
require("./assets/POFAnimalData/BreedingTraitSpecific.json");
require("./assets/POFAnimalData/BuyersInfo.json");
require("./assets/POFAnimalData/SellingBuyersPercentages.json");
require("./assets/POFAnimalData/SellingOutfitPercentage.json");
require("./assets/POFAnimalData/SellingPricesOfAnimals.json");
require("./assets/POFAnimalData/SellingRankPercentages.json");
require("./assets/SeedData/AllotmentSeeds.json");
require("./assets/SeedData/BushSeeds.json");
require("./assets/SeedData/CactusSeeds.json");
require("./assets/SeedData/CombatSeeds.json");
require("./assets/SeedData/FlowerSeeds.json");
require("./assets/SeedData/FruitTreeSeeds.json");
require("./assets/SeedData/HerbSeeds.json");
require("./assets/SeedData/HopSeeds.json");
require("./assets/SeedData/JujuBushSeeds.json");
require("./assets/SeedData/JujuFlowerSeeds.json");
require("./assets/SeedData/MushroomSeeds.json");
require("./assets/SeedData/SpecialSeeds.json");
require("./assets/SeedData/TreeSeeds.json");

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
