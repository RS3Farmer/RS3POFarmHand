import { Accordion } from "@mantine/core";
import { useState } from "react";

export const FruitTreePatches = () => {
  const [isBrimhavenComplete] = useState(false);
  const [isCatherbyComplete] = useState(false);
  const [isHerbloreHabitatComplete] = useState(false);
  const [isGnomeStrongholdComplete] = useState(false);
  const [isLletyaComplete] = useState(false);
  const [isPriffdinasComplete] = useState(false);
  const [isWestTreeGnomeVillageComplete] = useState(false);
  return (
    <>
      <div className="TopPadding" />
      <div
        style={{ backgroundColor: "#3DA648" }}
        className="templateContainer text-center mb-8 mt-10  text-2xl rounded-md mx-3"
      >
        <h1>Fruit Tree Patches</h1>
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
            borderColor: "#665D47",
            borderRadius: "3px",
            borderWidth: "2px",
            backgroundColor: "#665D47",
          },
          chevron: { backgroundColor: "#665D47" },
        }}
        variant="contained"
      >
        <Accordion.Item value="North Brimhaven">
          <Accordion.Control>Brimhaven North</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/BrimHavenFruitTreePatch3d.png"
              style={{ borderRadius: "3px", margin: "3px auto" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ margin: "0px auto", position: "relative" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1 x Fruit Tree Patch</li>
                </ol>
              </div>

              <img
                src="/dist/TreePatchReg.png"
                style={{ position: "static" }}
              />
              {isBrimhavenComplete && (
                <img
                  src="./dist/TreePatchCompleted.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Catherby East">
          <Accordion.Control>Catherby East</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/CatherbyFruitTreePatch3d.png"
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
                  <li>1 x Fruit Tree Patch</li>
                </ol>
              </div>

              <img
                src="/dist/TreePatchReg.png"
                style={{ position: "static" }}
              />
              {isCatherbyComplete && (
                <img
                  src="./dist/TreePatchCompleted.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Herblore Habitat">
          <Accordion.Control>Herblore Habitat</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/FruitTreePatchHerbloreHabitat.png"
              style={{ borderRadius: "3px" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1x Fruit Tree Patch</li>
                </ol>
              </div>
              <img
                src="/dist/TreePatchReg.png"
                style={{ position: "static" }}
              />
              {isHerbloreHabitatComplete && (
                <img
                  src="./dist/TreePatchCompleted.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Gnome Stronghold">
          <Accordion.Control>Gnome Stronghold</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/FruitTreePatchGnomeStronghold3d.png"
              style={{ borderRadius: "3px" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1 x Fruit Tree Patch</li>
                </ol>
              </div>

              <img
                src="/dist/TreePatchReg.png"
                style={{ position: "static" }}
              />
              {isGnomeStrongholdComplete && (
                <img
                  src="./dist/TreePatchCompleted.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Lletya">
          <Accordion.Control>Lletya</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/LletyaFruitTreePatch3d.png"
              style={{ borderRadius: "3px" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1 x Fruit Tree Patch</li>
                </ol>
              </div>

              <img
                src="/dist/TreePatchReg.png"
                style={{ position: "static" }}
              />
              {isLletyaComplete && (
                <img
                  src="./dist/TreePatchCompleted.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Priffdinas (Meilyr District)">
          <Accordion.Control>Priffdinas (Meilyr District)</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/FruitTreePatchPriffdinas.png"
              style={{ borderRadius: "3px" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1 x Fruit Tree Patch</li>
                </ol>
              </div>

              <img
                src="/dist/TreePatchReg.png"
                style={{ position: "static" }}
              />
              {isPriffdinasComplete && (
                <img
                  src="./dist/TreePatchCompleted.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="West Tree Gnome Village">
          <Accordion.Control>West of Tree Gnome Village</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/FruitTreePatchWestGnomeVill3d.png"
              style={{ borderRadius: "3px" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1 x Fruit Tree Patch</li>
                </ol>
              </div>

              <img
                src="/dist/TreePatchReg.png"
                style={{ position: "static" }}
              />
              {isWestTreeGnomeVillageComplete && (
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
