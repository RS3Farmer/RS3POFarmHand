import React, { useEffect, useState } from "react";

import { Button } from "@mantine/core";
const TeleportModalContent: React.FC = () => {
  const [teleData, setTeleData] = useState<any[] | null>(null);
  const [ShowHops, setShowHops] = useState(false);
  const [ShowAllotment, setShowAllotment] = useState(false);
  const [ShowBush, setShowBush] = useState(false);
  const [ShowTree, setShowTree] = useState(false);
  const [ShowCactus, setShowCactus] = useState(false);
  const [ShowSpiritTree, setShowSpiritTree] = useState(false);
  const [ShowFruitTree, setShowFruitTree] = useState(false);
  const [ShowSpecial, setShowSpecial] = useState(false);
  const [ShowMushroom, setShowMushroom] = useState(false);
  function setShowPatch(value: string | null) {
    setShowAllotment(value === "Allotment");
    setShowBush(value === "Bush Patches");
    setShowCactus(value === "Cactus Patches");
    setShowFruitTree(value === "Fruit Tree Patches");
    setShowHops(value === "Hops Patches");
    setShowMushroom(value === "Mushroom Patches");
    setShowTree(value === "Tree Patches");
    setShowSpecial(value === "Special Patches");
    setShowSpiritTree(value === "Spirit Tree Patches");
  }
  function create_UUID() {
    var dt = new Date().getTime();
    var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
    return uuid;
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const teleportData = sessionStorage.getItem("teleportData");

        if (teleportData !== null) {
          const parsedData = JSON.parse(teleportData);
          setTeleData(parsedData);
          console.log("Teleport data loaded successfully:", parsedData);
        } else {
          console.log("No teleport data found in sessionStorage.");
        }
      } catch (error) {
        console.error("Error in parsing teleport data", error);
      }
    };

    fetchData();
  }, []);
  console.log("teleData: ", teleData);
  return (
    <>
      <h1 className="ModalTitle rounded-md text-3xl text-center">Teleports</h1>
      {/* Allotment */}
      <div>
        <Button
          variant="outline"
          size="compact-md"
          onClick={() => {
            const value = "Allotment";
            setShowPatch(value);
          }}
        >
          Show Allotment/Herb/Flower Patch Teleports
        </Button>
        <Button
          variant="outline"
          size="compact-md"
          onClick={() => {
            const value = "Bush Patches";
            setShowPatch(value);
          }}
        >
          Show Bush Patch Teleports
        </Button>
        <Button
          variant="outline"
          size="compact-md"
          onClick={() => {
            const value = "Hops Patches";
            setShowPatch(value);
          }}
        >
          Show Hops Patch Teleports
        </Button>
        <Button
          variant="outline"
          size="compact-md"
          onClick={() => {
            const value = "Tree Patches";
            setShowPatch(value);
          }}
        >
          Show Tree Patch Teleports
        </Button>
        <Button
          variant="outline"
          size="compact-md"
          onClick={() => {
            const value = "Tree Patches";
            setShowPatch(value);
          }}
        >
          Show Mushroom Patch Teleports
        </Button>
        <Button
          variant="outline"
          size="compact-md"
          onClick={() => {
            const value = "Cactus Patches";
            setShowPatch(value);
          }}
        >
          Show Cactus Patch Teleports
        </Button>
        <Button
          variant="outline"
          size="compact-md"
          onClick={() => {
            const value = "Special Patches";
            setShowPatch(value);
          }}
        >
          Show Special Patch Teleports
        </Button>
        <Button
          variant="outline"
          size="compact-md"
          onClick={() => {
            const value = "Fruit Tree Patches";
            setShowPatch(value);
          }}
        >
          Show Fruit Tree Patch Teleports
        </Button>
      </div>
      {ShowAllotment && (
        <div className="rounded-md Patches" style={{ position: "relative" }}>
          <h1 className="PatchesH1 rounded-b-md text-xl">Allotment Patches</h1>
          {teleData?.slice(0, 10).map((value) => (
            <React.Fragment key={value.id}>
              <div className="smallPadding" />
              <div
                style={{
                  display: "grid",
                  gridTemplateAreas: ` "title title""list image" `,
                  gridGap: "20px", // Increased spacing
                }}
              >
                <h2 style={{ gridArea: "title", justifySelf: "center" }}>
                  {value.location}
                </h2>

                <ol
                  className="text-sm"
                  style={{ marginTop: "20px" }} // Added spacing
                >
                  {value.teleports.value.map(
                    (teleport: string, index: number) => (
                      <>
                        <div key={create_UUID()}>
                          <li style={{ gridArea: "list" }} key={index}>
                            - {teleport}
                          </li>
                        </div>
                        <img
                          src={value.teleports.image[index]}
                          style={{ gridArea: "image" }}
                        />
                        <div style={{ height: "45px" }} />
                      </>
                    )
                  )}
                </ol>
              </div>
              <hr
                className={`HR${value.location}`}
                style={{ borderColor: "#3da648", margin: "20px 0" }}
              />
            </React.Fragment>
          ))}
        </div>
      )}

      {/* Hops */}
      {ShowHops && (
        <div className="rounded-md Patches">
          <h1 className="PatchesH1 rounded-b-md text-xl">Hops</h1>
          {teleData?.slice(10, 14)?.map((value) => (
            <React.Fragment key={value.id}>
              <div className="smallPadding" />
              <div
                style={{
                  display: "grid",
                  gridTemplateAreas: ` "title title""list image" `,
                  gridGap: "20px", // Increased spacing
                }}
              >
                <h2 style={{ gridArea: "title", justifySelf: "center" }}>
                  {value.location}
                </h2>

                <ol
                  className="text-sm"
                  style={{ marginTop: "20px" }} // Added spacing
                >
                  {value.teleports.value.map(
                    (teleport: string, index: number) => (
                      <>
                        <div key={create_UUID()}>
                          <li style={{ gridArea: "list" }} key={index}>
                            - {teleport}
                          </li>
                        </div>
                        <img
                          src={value.teleports.image[index]}
                          style={{ gridArea: "image" }}
                        />
                        <div style={{ height: "45px" }} />
                      </>
                    )
                  )}
                </ol>
              </div>
              <hr
                className={`HR${value.location}`}
                style={{ borderColor: "#3da648", margin: "20px 0" }}
              />
            </React.Fragment>
          ))}
        </div>
      )}
      {/* Bush */}
      {ShowBush && (
        <div className="rounded-md Patches">
          <h1 className="PatchesH1 rounded-b-md text-xl">Bush Patches</h1>
          {teleData?.slice(14, 19)?.map((value) => (
            <React.Fragment key={value.id}>
              <div className="smallPadding" />
              <div
                style={{
                  display: "grid",
                  gridTemplateAreas: ` "title title""list image" `,
                  gridGap: "20px", // Increased spacing
                }}
              >
                <h2 style={{ gridArea: "title", justifySelf: "center" }}>
                  {value.location}
                </h2>

                <ol
                  className="text-sm"
                  style={{ gridArea: "list", marginTop: "20px" }} // Added spacing
                >
                  {value.teleports.map((teleport: string) => {
                    return (
                      <>
                        <li key={create_UUID()}>-{teleport}</li>
                        <div style={{ height: "45px" }} />
                      </>
                    );
                  })}
                </ol>
              </div>
              <hr
                className={`HR${value.location}`}
                style={{ borderColor: "#3da648", margin: "20px 0" }}
              />
            </React.Fragment>
          ))}
        </div>
      )}
      {/* Cactus */}
      {ShowCactus && (
        <div className="rounded-md Patches">
          <h1 className="PatchesH1 rounded-b-md text-xl">Cactus Patches</h1>
          {teleData?.slice(19, 23)?.map((value) => (
            <React.Fragment key={value.id}>
              <div className="smallPadding" />
              <div
                style={{
                  display: "grid",
                  gridTemplateAreas: ` "title title""list image" `,
                  gridGap: "20px", // Increased spacing
                }}
              >
                <h2 style={{ gridArea: "title", justifySelf: "center" }}>
                  {value.location}
                </h2>

                <ol
                  className="text-sm"
                  style={{ gridArea: "list", marginTop: "20px" }} // Added spacing
                >
                  {value.teleports.map((teleport: string) => {
                    return (
                      <>
                        <li key={create_UUID()}>-{teleport}</li>
                        <div style={{ height: "45px" }} />
                      </>
                    );
                  })}
                </ol>
              </div>
              <hr
                className={`HR${value.location}`}
                style={{ borderColor: "#3da648", margin: "20px 0" }}
              />
            </React.Fragment>
          ))}
        </div>
      )}
      {/* Mushroom */}
      {ShowMushroom && (
        <div className="rounded-md Patches">
          <h1 className="PatchesH1 rounded-b-md text-xl">Mushroom Patches</h1>
          {teleData?.slice(23, 26)?.map((value) => (
            <React.Fragment key={value.id}>
              <div className="smallPadding" />
              <div
                style={{
                  display: "grid",
                  gridTemplateAreas: ` "title title""list image" `,
                  gridGap: "20px", // Increased spacing
                }}
              >
                <h2 style={{ gridArea: "title", justifySelf: "center" }}>
                  {value.location}
                </h2>

                <ol
                  className="text-sm"
                  style={{ gridArea: "list", marginTop: "20px" }} // Added spacing
                >
                  {value.teleports.map((teleport: string) => {
                    return (
                      <>
                        <li key={create_UUID()}>-{teleport}</li>

                        <div style={{ height: "45px" }} />
                      </>
                    );
                  })}
                </ol>
              </div>
              <hr
                className={`HR${value.location}`}
                style={{ borderColor: "#3da648", margin: "20px 0" }}
              />
            </React.Fragment>
          ))}
        </div>
      )}
      {/* Tree */}
      {ShowTree && (
        <div className="rounded-md Patches">
          <h1 className="PatchesH1 rounded-b-md text-xl">Tree Patches</h1>
          {teleData?.slice(26, 33)?.map((value) => (
            <React.Fragment key={value.id}>
              <div className="smallPadding" />
              <div
                style={{
                  display: "grid",
                  gridTemplateAreas: ` "title title""list image" `,
                  gridGap: "20px", // Increased spacing
                }}
              >
                <h2 style={{ gridArea: "title", justifySelf: "center" }}>
                  {value.location}
                </h2>

                <ol
                  className="text-sm"
                  style={{ gridArea: "list", marginTop: "20px" }} // Added spacing
                >
                  {value.teleports.map((teleport: string) => {
                    return (
                      <>
                        <li key={create_UUID()}>-{teleport}</li>
                        <div style={{ height: "45px" }} />
                      </>
                    );
                  })}
                </ol>
              </div>
              <hr
                className={`HR${value.location}`}
                style={{ borderColor: "#3da648", margin: "20px 0" }}
              />
            </React.Fragment>
          ))}
        </div>
      )}
      {/* Fruit Tree */}
      {ShowFruitTree && (
        <div className="rounded-md Patches">
          <h1 className="PatchesH1 rounded-b-md text-xl">Fruit Tree Patches</h1>
          {teleData?.slice(33, 40)?.map((value) => (
            <React.Fragment key={value.id}>
              <div className="smallPadding" />
              <div
                style={{
                  display: "grid",
                  gridTemplateAreas: ` "title title""list image" `,
                  gridGap: "20px", // Increased spacing
                }}
              >
                <h2 style={{ gridArea: "title", justifySelf: "center" }}>
                  {value.location}
                </h2>

                <ol
                  className="text-sm"
                  style={{ gridArea: "list", marginTop: "20px" }} // Added spacing
                >
                  {value.teleports.map((teleport: string) => {
                    return (
                      <>
                        <li key={create_UUID()}>-{teleport}</li>
                        <div style={{ height: "45px" }} />
                      </>
                    );
                  })}
                </ol>
              </div>
              <hr
                className={`HR${value.location}`}
                style={{ borderColor: "#3da648", margin: "20px 0" }}
              />
            </React.Fragment>
          ))}
        </div>
      )}
      {/* Special Patches */}
      {ShowSpecial && (
        <div className="rounded-md Patches">
          <h1 className="PatchesH1 rounded-b-md text-xl">Special Patches</h1>
          {teleData?.slice(40, 48)?.map((value) => (
            <React.Fragment key={value.id}>
              <div className="smallPadding" />
              <div
                style={{
                  display: "grid",
                  gridTemplateAreas: ` "title title""list image" `,
                  gridGap: "20px", // Increased spacing
                }}
              >
                <h2 style={{ gridArea: "title", justifySelf: "center" }}>
                  {value.location}
                </h2>

                <ol
                  className="text-sm"
                  style={{ gridArea: "list", marginTop: "20px" }} // Added spacing
                >
                  {value.teleports.map((teleport: string) => {
                    return (
                      <>
                        <li key={create_UUID()}>-{teleport}</li>
                        <div style={{ height: "45px" }} />
                      </>
                    );
                  })}
                </ol>
              </div>
              <hr
                className={`HR${value.location}`}
                style={{ borderColor: "#3da648", margin: "20px 0" }}
              />
            </React.Fragment>
          ))}
        </div>
      )}
      {/* Spirit Tree Patches */}
      {ShowSpiritTree && (
        <div className="rounded-md Patches">
          <h1 className="PatchesH1 rounded-b-md text-xl">
            Spirit Tree Patches
          </h1>
          {teleData?.slice(48)?.map((value) => (
            <React.Fragment key={value.id}>
              <div className="smallPadding" />
              <div
                style={{
                  display: "grid",
                  gridTemplateAreas: ` "title title""list image" `,
                  gridGap: "20px", // Increased spacing
                }}
              >
                <h2 style={{ gridArea: "title", justifySelf: "center" }}>
                  {value.location}
                </h2>

                <ol
                  className="text-sm"
                  style={{ gridArea: "list", marginTop: "20px" }} // Added spacing
                >
                  {value.teleports.map((teleport: any) => {
                    const value = teleport.value;
                    const image = teleport.image;
                    return (
                      <>
                        <li key={create_UUID()}>
                          -{value}
                          {image}
                        </li>
                        <div style={{ height: "45px" }} />
                      </>
                    );
                  })}
                </ol>
              </div>
              <hr
                className={`HR${value.location}`}
                style={{ borderColor: "#3da648", margin: "20px 0" }}
              />
            </React.Fragment>
          ))}
        </div>
      )}
    </>
  );
};

export default TeleportModalContent;
