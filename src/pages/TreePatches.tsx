import { Accordion } from "@mantine/core";
import { useState } from "react";

export const TreePatches: React.FC = () => {
  const [isGnomeStrongholdCompleted] = useState(false);
  const [isLumbridgeCompleted] = useState(false);
  const [isFaladorCompleted] = useState(false);
  const [isPriffdinasCompleted] = useState(false);
  const [isTaverlyCompleted] = useState(false);
  const [isWoodcuttersGroveCompleted] = useState(false);
  return (
    <>
      <div className="TopPadding" />
      <div
        style={{ backgroundColor: "#3DA648" }}
        className="templateContainer text-center mb-8 mt-10  text-2xl rounded-md mx-3"
      >
        <h1>Tree Patches</h1>
      </div>
      <Accordion
        classNames={{ item: "templateAccordian" }}
        className="m-7"
        styles={{
          item: {
            borderColor: "#665D47",
          },
          label: {
            textAlign: "center",
            backgroundColor: "#3DA648",
            fontSize: "16px",
          },
          control: {
            borderColor: "#16a085",
            borderRadius: "3px",
            borderWidth: "2px",
            backgroundColor: "#665D47",
          },
          chevron: { backgroundColor: "#665D47" },
        }}
        variant="contained"
      >
        <Accordion.Item value="Gnome Stronghold">
          <Accordion.Control>Gnome Stronghold</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/gnomeStrongholdTreePatch.png"
              style={{ borderRadius: "3px", margin: "3px auto" }}
            />
            <div style={{ height: "15px" }}></div>
            <div
              className="Gnome Stronghold Patch"
              style={{ margin: "0px auto", position: "relative" }}
            >
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1 x Tree Patch</li>
                </ol>
              </div>
              <img
                src="/dist/TreePatchReg.png"
                style={{ position: "static" }}
              />
              {isGnomeStrongholdCompleted && (
                <img
                  src="./dist/TreePatchCompleted.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="North East Lumbridge">
          <Accordion.Control>
            Lumbridge (East of General Store)
          </Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/LumbridgeTreePatch3d.png"
              style={{ borderRadius: "3px", margin: "0px auto" }}
            />
            <div style={{ height: "15px" }}></div>
            <div
              style={{
                position: "relative",
                margin: "0px auto",
                width: "100%",
              }}
            >
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1 x Tree Patch</li>
                </ol>
              </div>
              <img
                src="/dist/TreePatchReg.png"
                style={{ position: "static" }}
              />
              {isLumbridgeCompleted && (
                <img
                  src="./dist/TreePatchCompleted.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Falador Park">
          <Accordion.Control>Falador Park</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/TreePatchFalador3d.png"
              style={{ borderRadius: "3px" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1x Tree Patch</li>
                </ol>
              </div>
              <img
                src="/dist/TreePatchReg.png"
                style={{ position: "static" }}
              />
              {isFaladorCompleted && (
                <img
                  src="./dist/TreePatchCompleted.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Priffdinas (Trahaearn District)">
          <Accordion.Control>Priffdinas (Trahaearn District)</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/TraehornTreePatch3d.png"
              style={{ borderRadius: "3px" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1 x Tree Patch</li>
                </ol>
              </div>
              <img
                src="/dist/TreePatchReg.png"
                style={{ position: "static" }}
              />
              {isPriffdinasCompleted && (
                <img
                  src="./dist/TreePatchCompleted.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="North Taverly">
          <Accordion.Control>North Taverly</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/TaverlyTreePatch3d.png"
              style={{ borderRadius: "3px" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1 x Tree Patch</li>
                </ol>
              </div>
              <img
                src="/dist/TreePatchReg.png"
                style={{ position: "static" }}
              />
              {isTaverlyCompleted && (
                <img
                  src="./dist/TreePatchCompleted.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Woodcutters Grove">
          <Accordion.Control>Woodcutters Grove</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/WoodCuttersGroveTreePatch3d.png"
              style={{ borderRadius: "3px" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1 x Tree Patch</li>
                </ol>
              </div>
              <img
                src="/dist/TreePatchReg.png"
                style={{ position: "static" }}
              />
              {isWoodcuttersGroveCompleted && (
                <img
                  src="./dist/TreePatchCompleted.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <div className="TopPadding" />
    </>
  );
};
