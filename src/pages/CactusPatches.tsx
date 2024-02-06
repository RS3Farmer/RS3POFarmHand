import { Accordion } from "@mantine/core";
import { useState } from "react";
require("./../assets/Images/Cactus Patches/CactusPatchAlkharid3d.png");
require("./../assets/Images/Cactus Patches/CactusPatchanachronia3d.png");
require("./../assets/Images/Cactus Patches/HetsOasisCactusPatch3d.png");
require("./../assets/Images/Cactus Patches/MenaphosCactusPatch3d.png");
require("./../assets/Images/Cactus Patches/catctuspatchreg.png");
export const CactusPatches = () => {
  const [isAlkharidComplete] = useState(false);
  const [isAnachroniaComplete] = useState(false);
  const [isHetsOasisComplete] = useState(false);
  const [isMenaphosComplete] = useState(false);
  return (
    <>
      <div className="TopPadding" />
      <div
        style={{ backgroundColor: "#3DA648" }}
        className="templateContainer text-center mb-8 mt-10  text-2xl rounded-md mx-3"
      >
        <h1 className="">Cactus Patches</h1>
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
        <Accordion.Item value="Alkharid (north)">
          <Accordion.Control>Alkharid (North)</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/CactusPatchAlkharid3d.png"
              style={{ borderRadius: "3px", margin: "3px auto" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ margin: "0px auto", position: "relative" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1 x Cactus Patch</li>
                </ol>
              </div>

              <img
                src="/dist/TreePatchReg.png"
                style={{ position: "static" }}
              />

              {isAlkharidComplete && (
                <img
                  src="./dist/TreePatchCompleted.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="North Anachronia">
          <Accordion.Control>North Anachronia</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/CactusPatchanachronia3d.png"
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
                  <li>1 x Cactus Patch</li>
                </ol>
              </div>

              <img
                src="/dist/TreePatchReg.png"
                style={{ position: "static" }}
              />

              {isAnachroniaComplete && (
                <img
                  src="./dist/TreePatchCompleted.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Hets Oasis">
          <Accordion.Control>Hets Oasis</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/HetsOasisCactusPatch3d.png"
              style={{ borderRadius: "3px" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1x Cactus Patch</li>
                </ol>
              </div>
              <img
                src="/dist/TreePatchReg.png"
                style={{ position: "static" }}
              />
              {isHetsOasisComplete && (
                <img
                  src="./dist/TreePatchCompleted.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="West Menaphos (Imperial District)">
          <Accordion.Control>
            West Menaphos (Imperial District)
          </Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/MenaphosCactusPatch3d.png"
              style={{ borderRadius: "3px" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1 x Cactus Patch</li>
                </ol>
              </div>

              <img
                src="/dist/TreePatchReg.png"
                style={{ position: "static" }}
              />

              {isMenaphosComplete && (
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
