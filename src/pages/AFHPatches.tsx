import { Accordion } from "@mantine/core";
import { useState } from "react";

//Styles
require("@mantine/core/styles/Accordion.css");
require("./../assets/index.css");

export const AllotmentHerbFlowerPatches: React.FC = () => {
  // Ardougne Patch Finished Variables
  const [isCompleteArdyUA] = useState(false);
  const [isCompleteArdyBA] = useState(false);
  const [isCompleteArdyHP] = useState(false);
  const [isCompleteArdyFP] = useState(false);
  // Canifis Patch Finished Variables
  const [isCompleteCanifisLA] = useState(false);
  const [isCompleteCanifisRA] = useState(false);
  const [isCompleteCanifisHP] = useState(false);
  const [isCompleteCanifisFP] = useState(false);
  // Catherby Patch Finished Variables
  const [isCompleteCatherbyUA] = useState(false);
  const [isCompleteCatherbyBA] = useState(false);
  const [isCompleteCatherbyHP] = useState(false);
  const [isCompleteCatherbyFP] = useState(false);
  // Falador Patch Finished Variables
  const [isCompleteFaladorLA] = useState(false);
  const [isCompleteFaladorRA] = useState(false);
  const [isCompleteFaladorHP] = useState(false);
  const [isCompleteFaladorFP] = useState(false);
  //Priffdinas Patch Finished Variables
  const [isCompletePriffHP] = useState(false);
  //Troll Stronghold Patch Finished Variables
  const [isCompleteTrollHP] = useState(false);
  //Wilderness Patch Finished Variables
  const [isCompleteWilderness22FP] = useState(false);
  const [isCompleteWilderness38FP] = useState(false);
  //Garden of Kharid Patch Finished Variables
  const [isCompleteKharidHP] = useState(false);
  //Harmony Island Patch Finished Variables
  const [isCompleteHarmonyHP] = useState(false);

  return (
    <>
      <div className="TopPadding" />
      <div
        style={{ backgroundColor: "#3DA648" }}
        className="templateContainer text-center mb-8 mt-10  text-2xl rounded-md mx-3"
      >
        <h1 className="">Allotment/Flower/Herb Patches</h1>
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
        <Accordion.Item value="Catherby">
          <Accordion.Control>Catherby</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/Catherby3dPatch.png"
              style={{ borderRadius: "3px", margin: "0px auto" }}
            />{" "}
            <div style={{ height: "15px" }}></div>
            <div
              style={{
                position: "relative",
                margin: "0px auto",
                width: "100%",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "135px",
                  bottom: "15px",
                }}
              >
                <ol>
                  <li>2 x Allotment Patches</li>
                  <li>1 x Herb Patch</li>
                  <li>1 x Flower Patch</li>
                </ol>
              </div>

              <img
                src="./dist/CatherByPatchBareBones.png"
                style={{ position: "static" }}
              />
              {isCompleteCatherbyBA && (
                <img
                  src="./dist/ArdyAllotmentBottomPatch.png"
                  style={{ position: "absolute", bottom: "7px", left: "9px" }}
                />
              )}
              {isCompleteCatherbyUA && (
                <img
                  src="./dist/ArdyAllotmentTopPatch.png"
                  style={{ position: "absolute", bottom: "63px", left: "10px" }}
                />
              )}
              {isCompleteCatherbyFP && (
                <img
                  src="./dist/HerbOrFlowerPatch.png"
                  style={{ position: "absolute", left: "41px", bottom: "40px" }}
                />
              )}
              {isCompleteCatherbyHP && (
                <img
                  src="./dist/HerbOrFlowerPatch.png"
                  style={{ position: "absolute", left: "73px", bottom: "40px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Falador South">
          <Accordion.Control>Falador South</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/Falador3dPatch.png"
              style={{ borderRadius: "3px" }}
            />{" "}
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div
                style={{
                  position: "absolute",
                  left: "135px",
                  bottom: "10px",
                }}
              >
                <ol>
                  <li>2 x Allotment Patches</li>
                  <li>1 x Herb Patch</li>
                  <li>1 x Flower Patch</li>
                </ol>
              </div>
              <img
                src="./dist/NECanifisPatchBareBones.png"
                style={{ position: "static" }}
              />
              {isCompleteFaladorRA && (
                <img
                  style={{
                    position: "absolute",
                    left: "19px",
                    bottom: "-26px",
                  }}
                  src="./dist/CanafisAllotmentCompletedR.png"
                />
              )}
              {isCompleteFaladorLA && (
                <img
                  style={{
                    position: "absolute",
                    left: "-21px",
                    bottom: "6px",
                  }}
                  className="FaladorBottomPatch"
                  src="./dist/CanafisAllotmentCompleted.png"
                />
              )}
              {isCompleteFaladorFP && (
                <img
                  style={{
                    position: "absolute",
                    left: "81px",
                    bottom: "85px",
                  }}
                  className="FaladorFlowerPatch"
                  src="./dist/HerbOrFlowerPatch.png"
                />
              )}
              {isCompleteFaladorHP && (
                <img
                  style={{
                    position: "absolute",
                    left: "49px",
                    bottom: "53px",
                  }}
                  className="FaladorHerbPatch"
                  src="./dist/HerbOrFlowerPatch.png"
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="NE Canifis/NW Port Phasmatys">
          <Accordion.Control>NE Canifis/NW Port Phasmatys</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/CanifisPatch3d.png"
              style={{ borderRadius: "3px" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div
                style={{
                  position: "absolute",
                  left: "135px",
                  bottom: "10px",
                }}
              >
                <ol>
                  <li>2 x Allotment Patches</li>
                  <li>1 x Herb Patch</li>
                  <li>1 x Flower Patch</li>
                </ol>
              </div>
              <img
                src="./dist/NECanifisPatchBareBones.png"
                style={{ position: "static" }}
              />
              {isCompleteCanifisRA && (
                <img
                  style={{
                    position: "absolute",
                    left: "19px",
                    bottom: "-26px",
                  }}
                  src="./dist/CanafisAllotmentCompletedR.png"
                />
              )}
              {isCompleteCanifisLA && (
                <img
                  style={{
                    position: "absolute",
                    left: "-21px",
                    bottom: "6px",
                  }}
                  className="canifisBottomPatch"
                  src="./dist/CanafisAllotmentCompleted.png"
                />
              )}
              {isCompleteCanifisFP && (
                <img
                  style={{
                    position: "absolute",
                    left: "81px",
                    bottom: "85px",
                  }}
                  className="canifisFlowerPatch"
                  src="./dist/HerbOrFlowerPatch.png"
                />
              )}
              {isCompleteCanifisHP && (
                <img
                  style={{
                    position: "absolute",
                    left: "49px",
                    bottom: "53px",
                  }}
                  className="canifisHerbPatch"
                  src="./dist/HerbOrFlowerPatch.png"
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Harmony Island">
          <Accordion.Control>Harmony Island</Accordion.Control>
          <Accordion.Panel>
            <img src="./dist/HarmonyIsland3dPatch.png" />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div
                style={{
                  position: "absolute",
                  left: "55px",
                  bottom: "25px",
                }}
              >
                <ol>
                  <li>1 x Allotment Patch</li>
                </ol>
              </div>
              <img
                src="./dist/HarmonyIslandAllotmentOnlyBareBones.png"
                style={{ position: "static" }}
              />
              {isCompleteHarmonyHP && (
                <img
                  src="./dist/HarmonyIslandAllotmentOnlyBareBonesCompleted.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Manor Farm">
          <Accordion.Control>Manor Farm</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/Ardy3dPatch.png"
              style={{ borderRadius: "3px", margin: "3px auto" }}
            />{" "}
            <div style={{ height: "15px" }}></div>
            <div
              className="ArdyPatch"
              style={{ margin: "0px auto", position: "relative" }}
            >
              <div style={{ position: "absolute", left: "115px", top: "10px" }}>
                <ol>
                  <li>2 x Allotment Patches</li>
                  <li>1 x Herb Patch</li>
                  <li>1 x Flower Patch</li>
                </ol>
              </div>
              <img
                src="./dist/ArdougneFarmingPatchReg.png"
                style={{ position: "static" }}
              />
              {isCompleteArdyUA && (
                <img
                  style={{
                    position: "absolute",
                    margin: "0px",
                    left: "4px",
                    bottom: "58px",
                  }}
                  src="./dist/ArdyAllotmentTopPatch.png"
                />
              )}
              {isCompleteArdyBA && (
                <img
                  style={{
                    position: "absolute",
                    left: "3px",
                    bottom: "2px",
                  }}
                  className="ardyBottomPatch"
                  src="./dist/ArdyAllotmentBottomPatch.png"
                />
              )}
              {isCompleteArdyHP && (
                <img
                  style={{
                    position: "absolute",
                    left: "35px",
                    bottom: "35px",
                  }}
                  className="ardyFlowerPatch"
                  src="./dist/HerbOrFlowerPatch.png"
                />
              )}
              {isCompleteArdyFP && (
                <img
                  style={{
                    position: "absolute",
                    left: "67px",
                    bottom: "35px",
                  }}
                  className="ardyHerbPatch"
                  src="./dist/HerbOrFlowerPatch.png"
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Prifddinas">
          <Accordion.Control>Prifddinas (Crwys District)</Accordion.Control>
          <Accordion.Panel>
            <img src="./dist/PriffHerbBushPatch.png" />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div
                style={{
                  position: "absolute",
                  left: "55px",
                  bottom: "-2px",
                }}
              >
                <ol>
                  <li>1 x Herb Patch</li>
                </ol>
              </div>
              <img
                src="./dist/HerbOrFlowerPatchReg.png"
                style={{ position: "static" }}
              />
              {isCompletePriffHP && (
                <img
                  src="./dist/HerbOrFlowerPatch.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Troll Stronghold (Roof)">
          <Accordion.Control>Troll Stronghold (Roof)</Accordion.Control>
          <Accordion.Panel>
            <img src="./dist/TrollheimHerbPatch3d.png" />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div
                style={{
                  position: "absolute",
                  left: "55px",
                  bottom: "-2px",
                }}
              >
                <ol>
                  <li>1 x Herb Patch</li>
                </ol>
              </div>
              <img
                src="./dist/HerbOrFlowerPatchReg.png"
                style={{ position: "static" }}
              />
              {isCompleteTrollHP && (
                <img
                  src="./dist/HerbOrFlowerPatch.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Wilderness (lvl 22)">
          <Accordion.Control>Wilderness (lvl 22)</Accordion.Control>
          <Accordion.Panel>
            <img src="./dist/Wildernesslvl22HerbPatch.png" />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div
                style={{
                  position: "absolute",
                  left: "55px",
                  bottom: "-2px",
                }}
              >
                <ol>
                  <li>1 x Flower Patch</li>
                </ol>
              </div>
              <img
                src="./dist/HerbOrFlowerPatchReg.png"
                style={{ position: "static" }}
              />
              {isCompleteWilderness22FP && (
                <img
                  src="./dist/HerbOrFlowerPatch.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Wilderness (lvl 38)">
          <Accordion.Control>Wilderness (lvl 38)</Accordion.Control>
          <Accordion.Panel>
            <img src="./dist/Wildernesslvl38HerbPatch3d.png" />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div
                style={{
                  position: "absolute",
                  left: "55px",
                  bottom: "-2px",
                }}
              >
                <ol>
                  <li>1 x Herb Patch</li>
                </ol>
              </div>
              <img
                src="./dist/HerbOrFlowerPatchReg.png"
                style={{ position: "static" }}
              />
              {isCompleteWilderness38FP && (
                <img
                  src="./dist/HerbOrFlowerPatch.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Garden of Kharid">
          <Accordion.Control>Garden of Kharid</Accordion.Control>
          <Accordion.Panel>
            <img src="./dist/GardenofKharidHerbPatch3d.png" />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div
                style={{
                  position: "absolute",
                  left: "55px",
                  bottom: "-2px",
                }}
              >
                <ol>
                  <li>1 x Herb Patch</li>
                </ol>
              </div>
              <img
                src="./dist/HerbOrFlowerPatchReg.png"
                style={{ position: "static" }}
              />
              {isCompleteKharidHP && (
                <img
                  src="./dist/HerbOrFlowerPatch.png"
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
