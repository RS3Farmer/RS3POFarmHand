import React, { useEffect, useRef } from "react";

const TeleportFetch: React.FC = () => {
  let teleData = useRef<any[] | null>(null);
  useEffect(() => {
    const fetchData = () => {
      try {
        const teleportData = sessionStorage.getItem("teleportData");

        if (teleportData !== null) {
          const parsedData = JSON.parse(teleportData);
          teleData.current = parsedData;
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./dist/PatchTeleports.json");
        const data = await response.json();

        window.sessionStorage.setItem("teleportData", JSON.stringify(data));
      } catch (err) {
        console.error("Error in Fetching Data", err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        {teleData.current?.map((value) => {
          return (
            <div>
              <h1>{value.location}</h1>
              <ol>
                <li>{value.teleports}</li>
              </ol>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TeleportFetch;
