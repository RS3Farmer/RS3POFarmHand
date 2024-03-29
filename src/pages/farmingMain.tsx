require("./../assets/index.css");
require("./../assets/globals.css");

import { AllotmentHerbFlowerPatches } from "./AFHPatches";
import { NavList } from "./navigation";
import { useState } from "react";
import { MushroomPatches } from "./MushroomPatches";
import { BushList } from "./BushPatches";
import { TreePatches } from "./TreePatches";
import { CactusPatches } from "./CactusPatches";
import { SpiritTreePatches } from "./SpiritTreePatches";
import { FruitTreePatches } from "./FruitTreePatches";
import { HopsPatches } from "./HopPatches";
import { SpecialPatches } from "./SpecialPatches";
import { Select, Modal, Button, ScrollAreaAutosize } from "@mantine/core";
import TeleportFetch from "./Fetchers/Fetchers";
import TeleportModalContent from "./Modal Content/TeleportModal";
import { useDisclosure } from "@mantine/hooks";
import { RequiredImages } from "./ImportImages";
export const FarmingIndex: React.FC = () => {
  const [showAllotment, setShowAllotment] = useState(false);
  const [showMushroom, setShowMushroom] = useState(false);
  const [showBush, setShowBush] = useState(false);
  const [showTree, setShowTree] = useState(false);
  const [showCactus, setShowCactus] = useState(false);
  const [showSpiritTree, setShowSpiritTree] = useState(false);
  const [showFruitTree, setShowFruitTree] = useState(false);
  const [showHops, setShowHops] = useState(false);
  const [showSpecial, setShowSpecial] = useState(false);
  const [value, setValue] = useState<string | null>("");
  const [opened, { open, close }] = useDisclosure(false);
  function setShowPatch(value: string | null) {
    setShowAllotment(value!.includes("Allotment"));
    setShowBush(value === "Bush Patches");
    setShowCactus(value === "Cactus Patches");
    setShowFruitTree(value === "Fruit Tree Patches");
    setShowHops(value === "Hops Patches");
    setShowMushroom(value === "Mushroom Patches");
    setShowTree(value === "Tree Patches");
    setShowSpecial(value === "Special Patches");
    setShowSpiritTree(value === "Spirit Tree Patches");
  }
  function handleTPModal() {
    open();
  }

  return (
    <>
      <RequiredImages />
      <TeleportFetch />
      <Modal
        className="TPModal"
        opened={opened}
        onClose={close}
        withCloseButton={false}
        scrollAreaComponent={ScrollAreaAutosize}
        styles={{
          content: {
            backgroundColor: "#2c3e50",
            maxHeight: "100vh",
            overflowY: "auto",
          },
        }}
      >
        <TeleportModalContent />
      </Modal>
      <NavList />
      <div className="TopPadding" />
      <Select
        label="Select a Patch"
        withCheckIcon={false}
        data={[
          "Allotment, Herb, and Flower Patches",
          "Bush Patches",
          "Cactus Patches",
          "Fruit Tree Patches",
          "Tree Patches",
          "Spirit Tree Patches",
          "Hops Patches",
          "Mushroom Patches",
          "Special Patches",
        ]}
        value={value}
        onChange={(value) => {
          setShowPatch(value);
          setValue(value);
        }}
      />
      <Button onClick={handleTPModal}>All Teleport Locations</Button>
      <div className="Container">
        {showAllotment && <AllotmentHerbFlowerPatches />}
        {showMushroom && <MushroomPatches />}
        {showBush && <BushList />}
        {showTree && <TreePatches />}
        {showCactus && <CactusPatches />}
        {showSpiritTree && <SpiritTreePatches />}
        {showFruitTree && <FruitTreePatches />}
        {showHops && <HopsPatches />}
        {showSpecial && <SpecialPatches />}
      </div>
    </>
  );
};
