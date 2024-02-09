import React, { useEffect, useState } from "react";

const TeleportModalContent: React.FC = () => {
  const [teleData, setTeleData] = useState<any[] | null>(null);
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
      <div className="rounded-md Patches">
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
              <div style={{ gridArea: "image", marginBottom: "20px" }}>
                <img src={value.teleImage} alt={value.teleImage} />
              </div>
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

      {/* Hops */}
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
              <div style={{ gridArea: "image", marginBottom: "20px" }}>
                <img src={value.teleImage} alt={value.teleImage} />
              </div>
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

      {/* Bush */}
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
              <div style={{ gridArea: "image", marginBottom: "20px" }}>
                <img src={value.teleImage} alt={value.teleImage} />
              </div>
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

      {/* Cactus */}
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
              <div style={{ gridArea: "image", marginBottom: "20px" }}>
                <img src={value.teleImage} alt={value.teleImage} />
              </div>
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

      {/* Mushroom */}
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
              <div style={{ gridArea: "image", marginBottom: "20px" }}>
                <img src={value.teleImage} alt={value.teleImage} />
              </div>
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

      {/* Tree */}
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
              <div style={{ gridArea: "image", marginBottom: "20px" }}>
                <img src={value.teleImage} alt={value.teleImage} />
              </div>
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

      {/* Fruit Tree */}
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
              <div style={{ gridArea: "image", marginBottom: "20px" }}>
                <img src={value.teleImage} alt={value.teleImage} />
              </div>
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

      {/* Special Patches */}
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
              <div style={{ gridArea: "image", marginBottom: "20px" }}>
                <img src={value.teleImage} alt={value.teleImage} />
              </div>
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

      {/* Spirit Tree Patches */}
      <div className="rounded-md Patches">
        <h1 className="PatchesH1 rounded-b-md text-xl">Spirit Tree Patches</h1>
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
              <div style={{ gridArea: "image", marginBottom: "20px" }}>
                <img src={value.teleImage} alt={value.teleImage} />
              </div>
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
    </>
  );
};

export default TeleportModalContent;
