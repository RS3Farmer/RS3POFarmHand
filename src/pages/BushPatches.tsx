import { Accordion } from "@mantine/core";
import { useState } from "react";

export const BushList: React.FC = () => {
  const [showArdougneSouth] = useState(false);
  const [showChampionsGuildWest] = useState(false);
  const [showEtceteria] = useState(false);
  const [showPriffdinas] = useState(false);
  const [showRimmington] = useState(false);
  return (
    <>
      <div className="TopPadding" />
      <div
        style={{ backgroundColor: "#3DA648" }}
        className="templateContainer text-center mb-8 mt-10  text-2xl rounded-md mx-3"
      >
        <h1 className="">Bush Patches</h1>
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
        <Accordion.Item value="Ardougne South ">
          <Accordion.Control>Ardougne South</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/ArdougneSouthBushPatch.png"
              style={{ borderRadius: "3px", margin: "3px auto" }}
            />{" "}
            <div style={{ height: "15px" }}></div>
            <div
              className="CanifisPatch"
              style={{ margin: "0px auto", position: "relative" }}
            >
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1 x Bush Patch</li>
                </ol>
              </div>
              <img
                src="./dist/HerbOrFlowerPatchReg.png"
                style={{ position: "static" }}
              />
              {showArdougneSouth && (
                <img
                  src="./dist/HerbOrFlowerPatch.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Champions Guild West">
          <Accordion.Control>Champions Guild West</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/ChampionGuildBush3d.png"
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
                  <li>1 x Bush Patch</li>
                </ol>
              </div>
              <img
                src="./dist/HerbOrFlowerPatchReg.png"
                style={{ position: "static" }}
              />
              {showChampionsGuildWest && (
                <img
                  src="./dist/HerbOrFlowerPatch.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Etceteria">
          <Accordion.Control>Etceteria South-West</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/escentiaBush3d.png"
              style={{ borderRadius: "3px" }}
            />{" "}
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1x Bush Patch</li>
                </ol>
              </div>
              <img
                src="./dist/HerbOrFlowerPatchReg.png"
                style={{ position: "static" }}
              />
              {showEtceteria && (
                <img
                  src="./dist/HerbOrFlowerPatch.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Priffdinas">
          <Accordion.Control>Priffdinas (Crwys District)</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/PriffHerbBushPatch.png"
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
              {showPriffdinas && (
                <img
                  src="./dist/HerbOrFlowerPatch.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Rimmington">
          <Accordion.Control>Rimmington</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/RimmingtonBushPatch3d.png"
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
              {showRimmington && (
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
