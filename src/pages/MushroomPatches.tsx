import { Accordion } from "@mantine/core";
import { useState } from "react";
require("./../assets/Images/Mushroom Patches/CanifisMushroomPatch.png");
require("./../assets/Images/Mushroom Patches/cityofummushroompatch3d.png");
require("./../assets/Images/Mushroom Patches/TyrawynnMushroomPatch3d.png");
require("./../assets/Images/Mushroom Patches/MushroomPatchBareBonesReg.png");
require("./../assets/Images/Mushroom Patches/MushroomPatchBareBonesComplete.png");
export const MushroomPatches: React.FC = () => {
  const [isCanifisComplete] = useState(false);
  const [isCityOfUmComplete] = useState(false);
  const [isTirannwnComplete] = useState(false);
  return (
    <>
      <div className="TopPadding" />
      <div
        style={{ backgroundColor: "#3DA648" }}
        className="templateContainer text-center mb-8 mt-10  text-2xl rounded-md mx-3"
      >
        <h1 className="">Mushroom Patches</h1>
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
        <Accordion.Item value="Canifis">
          <Accordion.Control>West of Canifis</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/CanifisMushroomPatch.png"
              style={{ borderRadius: "3px", margin: "3px auto" }}
            />{" "}
            <div style={{ height: "15px" }}></div>
            <div
              className="CanifisPatch"
              style={{ margin: "0px auto", position: "relative" }}
            >
              {" "}
              <div style={{ position: "absolute", left: "65px", top: "15px" }}>
                <ol>
                  <li>1 x Mushroom Patch</li>
                </ol>
              </div>
              <img
                src="./dist/MushroomPatchBareBonesReg.png"
                style={{ position: "static" }}
              />
              {isCanifisComplete && (
                <img
                  src="./dist/MushroomPatchBareBonesComplete.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="City of Um">
          <Accordion.Control>East of City of Um</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/cityofummushroompatch3d.png"
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
              <div style={{ position: "absolute", left: "65px", top: "15px" }}>
                <ol>
                  <li>1 x Mushroom Patch</li>
                </ol>
              </div>
              <img
                src="./dist/MushroomPatchBareBonesReg.png"
                style={{ position: "static" }}
              />
              {isCityOfUmComplete && (
                <img
                  src="./dist/MushroomPatchBareBonesComplete.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Tirannwn">
          <Accordion.Control>
            South-west of Tirannwn lodestone
          </Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/TyrawynnMushroomPatch3d.png"
              style={{ borderRadius: "3px" }}
            />{" "}
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "15px" }}>
                <ol>
                  <li>1 x Mushroom Patch</li>
                </ol>
              </div>
              <img
                src="./dist/MushroomPatchBareBonesReg.png"
                style={{ position: "static" }}
              />
              {isTirannwnComplete && (
                <img
                  src="./dist/MushroomPatchBareBonesComplete.png"
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
