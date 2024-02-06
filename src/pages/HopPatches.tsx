import { Accordion } from "@mantine/core";
import { useState } from "react";
require("./../assets/Images/Hops Patches/SEChampGuild3dHopsPatch.png");
require("./../assets/Images/Hops Patches/Entrana3dHopPatch.png");
require("./../assets/Images/Hops Patches/YanilleHopsPatch3d.png");
require("./../assets/Images/Hops Patches/North McGruborsWoods.png");
require("./../assets/Images/Hops Patches/HopsPatchReg.png");
require("./../assets/Images/Hops Patches/HopsPatchComplete.png");
export const HopsPatches = () => {
  const [isChampionsGuildSouthWestComplete] = useState(false);
  const [isEntranaComplete] = useState(false);
  const [isMcGruborWoodsNorthComplete] = useState(false);
  const [isYanilleComplete] = useState(false);
  return (
    <>
      <div className="TopPadding" />
      <div
        style={{ backgroundColor: "#3DA648" }}
        className="templateContainer text-center mb-8 mt-10  text-2xl rounded-md mx-3"
      >
        <h1>Hops Patches</h1>
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
        <Accordion.Item value="ChampionsGuild South-West">
          <Accordion.Control>ChampionsGuild South-West</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/SEChampGuild3dHopsPatch.png"
              style={{ borderRadius: "3px", margin: "3px auto" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ margin: "0px auto", position: "relative" }}>
              <div style={{ position: "absolute", left: "65px", top: "6px" }}>
                <ol>
                  <li>1 x Hops Patch</li>
                </ol>
              </div>

              <img
                src="/dist/HopsPatchReg.png"
                style={{ position: "static" }}
              />
              {isChampionsGuildSouthWestComplete && (
                <img
                  src="./dist/HopsPatchComplete.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Entrana">
          <Accordion.Control>Entrana</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/Entrana3dHopPatch.png"
              style={{ borderRadius: "3px" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "6px" }}>
                <ol>
                  <li>1x Hops Patch</li>
                </ol>
              </div>
              <img
                src="/dist/HopsPatchReg.png"
                style={{ position: "static" }}
              />
              {isEntranaComplete && (
                <img
                  src="./dist/HopsPatchComplete.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="McGrubor Woods North">
          <Accordion.Control>McGrubor Woods North</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/North McGruborsWoods.png"
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
              <div style={{ position: "absolute", left: "65px", top: "6px" }}>
                <ol>
                  <li>1 x Hops Patch</li>
                </ol>
              </div>

              <img
                src="/dist/HopsPatchReg.png"
                style={{ position: "static" }}
              />
              {isMcGruborWoodsNorthComplete && (
                <img
                  src="./dist/HopsPatchComplete.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Yanille">
          <Accordion.Control>Yanille</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/YanilleHopsPatch3d.png"
              style={{ borderRadius: "3px" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "6px" }}>
                <ol>
                  <li>1x Hops Patch</li>
                </ol>
              </div>
              <img
                src="/dist/HopsPatchReg.png"
                style={{ position: "static" }}
              />
              {isYanilleComplete && (
                <img
                  src="./dist/HopsPatchComplete.png"
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
