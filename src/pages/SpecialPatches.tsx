import { Accordion } from "@mantine/core";
import React, { useState } from "react";

export const SpecialPatches: React.FC = () => {
  //Anachronia
  const [isAnachroniaCompleted] = useState(false);
  //Ardougne
  const [isArdougneCompleted] = useState(false);
  //Draynor
  const [isNightShadeCompleted] = useState(false);
  const [isEvilTurnipCompleted] = useState(false);
  //Herblore Habitat
  const [isBushCompleted] = useState(false);
  const [isFlowerCompleted] = useState(false);
  const [isHerbCompleted] = useState(false);
  const [isHerb2Completed] = useState(false);
  //Livid Farm
  const [isLividFarmCompleted] = useState(false);
  //Manor Farm
  const [isBloodwoodCompleted] = useState(false);
  const [isMoneyTreeCompleted] = useState(false);
  //Priffdinas
  const [isElderTreeCompleted] = useState(false);
  const [isCrystalTreeCompleted] = useState(false);
  const [isHarmonyMossCompleted] = useState(false);
  //Tai Bwo Wannai
  const [isTaiBwoWannaiCompleted] = useState(false);
  //Taverly
  const [isTaverlyCompleted] = useState(false);
  //Tuai Leit
  const [isTuaiLeitCompleted] = useState(false);
  return (
    <>
      <div className="TopPadding" />
      <div
        style={{ backgroundColor: "#3DA648" }}
        className="templateContainer text-center mb-8 mt-10  text-2xl rounded-md mx-3"
      >
        <h1>Special Patches</h1>
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
        <Accordion.Item value="Anachronia">
          <Accordion.Control>Anachronia</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/VilebloomPatchAnachronia.png"
              style={{ borderRadius: "3px", margin: "3px auto" }}
            />
            <div style={{ height: "10px" }}></div>
            <div style={{ margin: "0px auto", position: "relative" }}>
              <div style={{ position: "absolute", left: "65px", top: "10px" }}>
                <ol>
                  <li>1 x Vilebloom Patch</li>
                </ol>
              </div>
              <div style={{ height: "15px" }}></div>

              <img
                src="./dist/HerbOrFlowerPatchReg.png"
                style={{ position: "static" }}
              />
              {isAnachroniaCompleted && (
                <img
                  src="./dist/HerbOrFlowerPatch.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Ardougne">
          <Accordion.Control>Ardougne</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/ArdougneSpecialPatch.png"
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
                  <li>1 x Vine Patch</li>
                </ol>
              </div>
              <img
                src="./dist/HerbOrFlowerPatchReg.png"
                style={{ position: "static" }}
              />
              {isArdougneCompleted && (
                <img
                  src="./dist/HerbOrFlowerPatch.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Draynor">
          <Accordion.Control>Draynor</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/NightshadePatch3d.png"
              style={{ borderRadius: "3px" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1x Nightshade Patch</li>
                </ol>
              </div>
              <img
                src="./dist/HerbOrFlowerPatchReg.png"
                style={{ position: "static" }}
              />
              {isNightShadeCompleted && (
                <img
                  src="./dist/HerbOrFlowerPatch.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
            <div style={{ height: "10px" }} />
            <hr
              style={{
                borderColor: "#3DA648",

                borderWidth: "1px",
              }}
            />
            <div style={{ height: "10px" }} />
            <img
              src="./dist/EvilturnipPatch3d.png"
              style={{ borderRadius: "3px" }}
            />
            <div style={{ height: "15px" }} />

            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1x Evil Turnip Patch</li>
                </ol>
              </div>
              <img
                src="./dist/HerbOrFlowerPatchReg.png"
                style={{ position: "static" }}
              />
              {isEvilTurnipCompleted && (
                <img
                  src="./dist/HerbOrFlowerPatch.png"
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
              src="./dist/HerbloreHabitatBushPatch.png"
              style={{ borderRadius: "3px" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1 x Bush Patch</li>
                </ol>
              </div>
              <img
                src="./dist/HerbOrFlowerPatchReg.png"
                style={{ position: "static" }}
              />
              {isBushCompleted && (
                <img
                  src="./dist/HerbOrFlowerPatch.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
            <div style={{ height: "10px" }} />
            <hr
              style={{
                borderColor: "#3DA648",

                borderWidth: "1px",
              }}
            />
            <div style={{ height: "10px" }} />
            <img
              src="./dist/HerbloreHabitatFlowerPatch.png"
              style={{ borderRadius: "3px" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1 x Flower Patch</li>
                </ol>
              </div>
              <img
                src="./dist/HerbOrFlowerPatchReg.png"
                style={{ position: "static" }}
              />
              {isFlowerCompleted && (
                <img
                  src="./dist/HerbOrFlowerPatch.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
            <div style={{ height: "10px" }} />
            <hr
              style={{
                borderColor: "#3DA648",

                borderWidth: "1px",
              }}
            />
            <div style={{ height: "10px" }} />
            <img
              src="./dist/HerbloreHabitatVineHerblorePatch.png"
              style={{ borderRadius: "3px" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1 x Herb Patch</li>
                </ol>
              </div>
              <img
                src="./dist/HerbOrFlowerPatchReg.png"
                style={{ position: "static" }}
              />
              {isHerbCompleted && (
                <img
                  src="./dist/HerbOrFlowerPatch.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
            <div style={{ height: "10px" }} />
            <hr
              style={{
                borderColor: "#3DA648",

                borderWidth: "1px",
              }}
            />
            <div style={{ height: "10px" }} />
            <img
              src="./dist/HerbloreHabitatVineHerblorePatch2.png"
              style={{ borderRadius: "3px" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div
                style={{ position: "absolute", left: "65px", bottom: "-15px" }}
              >
                <ol>
                  <li>1 x Herb Patch Across The Water</li>
                </ol>
              </div>
              <img
                src="./dist/HerbOrFlowerPatchReg.png"
                style={{ position: "static" }}
              />
              {isHerb2Completed && (
                <img
                  src="./dist/HerbOrFlowerPatch.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Livid Farm">
          <Accordion.Control>Livid Farm</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/SingleUsePlot3dLunarIsle.png"
              style={{ borderRadius: "3px" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1 x Allotment Patch(Single Use)</li>
                </ol>
              </div>

              <img
                src="./dist/SingleUseAllotmentReg.png"
                style={{ position: "static" }}
              />
              {isLividFarmCompleted && (
                <img
                  src="./dist/SingleUseAllotmentComplete.png"
                  style={{ position: "absolute", bottom: "-3px", left: "-1px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Manor Farm">
          <Accordion.Control>Manor Farm</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/ManorFarmSpecialPatches.png"
              style={{ borderRadius: "3px" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1 x Bloodwood Tree Patch</li>
                </ol>
              </div>
              <img
                src="./dist/TreePatchReg.png"
                style={{ position: "static" }}
              />
              {isBloodwoodCompleted && (
                <img
                  src="./dist/TreePatchCompleted.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1 x Money Tree Patch</li>
                </ol>
              </div>
              <img
                src="./dist/TreePatchReg.png"
                style={{ position: "static" }}
              />
              {isMoneyTreeCompleted && (
                <img
                  src="./dist/TreePatchCompleted.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Priffdinas">
          <Accordion.Control>Priffdinas</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/PriffElderTreePatch3d.png"
              style={{ borderRadius: "3px" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1 x Elder Tree</li>
                </ol>
              </div>
              <img
                src="./dist/TreePatchReg.png"
                style={{ position: "static" }}
              />
              {isElderTreeCompleted && (
                <img
                  src="./dist/TreePatchCompleted.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
            <div style={{ height: "10px" }} />
            <hr
              style={{
                borderColor: "#3DA648",

                borderWidth: "1px",
              }}
            />
            <div style={{ height: "10px" }} />
            <img
              src="./dist/CrystalTreePatchPriff3d.png"
              style={{ borderRadius: "3px" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1 x Crystal Patch</li>
                </ol>
              </div>
              <img
                src="./dist/TreePatchReg.png"
                style={{ position: "static" }}
              />
              {isCrystalTreeCompleted && (
                <img
                  src="./dist/TreePatchCompleted.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
            <div style={{ height: "10px" }} />
            <hr
              style={{
                borderColor: "#3DA648",

                borderWidth: "1px",
              }}
            />
            <div style={{ height: "10px" }} />
            <img
              src="./dist/HarmoneyMoss.png"
              style={{ borderRadius: "3px" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "-4px" }}>
                <ol>
                  <li>1 x Harmony Moss Patches</li>
                </ol>
              </div>
              <img
                src="./dist/HerbOrFlowerPatchReg.png"
                style={{ position: "static" }}
              />
              {isHarmonyMossCompleted && (
                <img
                  src="./dist/HerbOrFlowerPatch.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
            <div style={{ height: "10px" }} />
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Tuai Leit">
          <Accordion.Control>Tuai Leit</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/TuaiLeitArcBerryBushPatch3d.png"
              style={{ borderRadius: "3px" }}
            />{" "}
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1 x Bush Patch</li>
                </ol>
              </div>
              <img
                src="./dist/HerbOrFlowerPatchReg.png"
                style={{ position: "static" }}
              />
              {isTuaiLeitCompleted && (
                <img
                  src="./dist/HerbOrFlowerPatch.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Taverly">
          <Accordion.Control>Taverly</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/PotatoePatch.png"
              style={{ borderRadius: "3px" }}
            />{" "}
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1 x Potatoe Patch</li>
                </ol>
              </div>
              <img
                src="./dist/PotatoePatchReg.png"
                style={{ position: "static" }}
              />
              {isTaverlyCompleted && (
                <img
                  src="./dist/PotatoePatchComplete.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>{" "}
        <Accordion.Item value="Tai Bwo Wannai">
          <Accordion.Control>North Tai Bwo Wannai</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/calquatpatch3d.png"
              style={{ borderRadius: "3px" }}
            />{" "}
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1 x Calquat Tree Patch</li>
                </ol>
              </div>
              <img
                src="./dist/TreePatchReg.png"
                style={{ position: "static" }}
              />
              {isTaiBwoWannaiCompleted && (
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
