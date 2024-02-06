import { Accordion } from "@mantine/core";
import { useState } from "react";
require("./../assets/Images/Spirit Tree Patches/SpiritTreePatchPortSarim3d.png");
require("./../assets/Images/Spirit Tree Patches/ardougneTreePatch.png");
require("./../assets/Images/Spirit Tree Patches/EscentiaSpiritTreePatch.png");
require("./../assets/Images/Spirit Tree Patches/BrimhavenSpiritTreePatch3d.png");
export const SpiritTreePatches = () => {
  const [isBrimhavenComplete] = useState(false);
  const [isEscentiaComplete] = useState(false);
  const [isPortSarimComplete] = useState(false);
  const [isManorFarmComplete] = useState(false);
  return (
    <>
      <div className="TopPadding" />
      <div
        style={{ backgroundColor: "#3DA648" }}
        className="templateContainer text-center mb-8 mt-10  text-2xl rounded-md mx-3"
      >
        <h1>Spirit Tree Patches</h1>
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
          <Accordion.Control>Brimhaven North East</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/BrimhavenSpiritTreePatch3d.png"
              style={{ borderRadius: "3px", margin: "3px auto" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ margin: "0px auto", position: "relative" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1 x Spirit Tree Patch</li>
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
        <Accordion.Item value="SE Etceteria">
          <Accordion.Control>SE Etceteria</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/EscentiaSpiritTreePatch.png"
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
                  <li>1 x Spirit Tree Patch</li>
                </ol>
              </div>

              <img
                src="/dist/TreePatchReg.png"
                style={{ position: "static" }}
              />
              {isEscentiaComplete && (
                <img
                  src="./dist/TreePatchCompleted.png"
                  style={{ position: "absolute", bottom: "0px" }}
                />
              )}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="East Port Sarm">
          <Accordion.Control>East Port Sarim</Accordion.Control>
          <Accordion.Panel>
            <img
              src="./dist/SpiritTreePatchPortSarim3d.png"
              style={{ borderRadius: "3px" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1x Spirit Tree Patch</li>
                </ol>
              </div>
              <img
                src="/dist/TreePatchReg.png"
                style={{ position: "static" }}
              />
              {isPortSarimComplete && (
                <img
                  src="./dist/TreePatchCompleted.png"
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
              src="./dist/ardougneTreePatch.png"
              style={{ borderRadius: "3px" }}
            />
            <div style={{ height: "15px" }}></div>
            <div style={{ position: "relative", margin: "0px auto" }}>
              <div style={{ position: "absolute", left: "65px", top: "0px" }}>
                <ol>
                  <li>1 x Spirit Tree Patch</li>
                </ol>
              </div>

              <img
                src="/dist/TreePatchReg.png"
                style={{ position: "static" }}
              />
              {isManorFarmComplete && (
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
