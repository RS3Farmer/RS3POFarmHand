import React, { useEffect } from "react";

const TeleportFetch: React.FC = () => {
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
  return null;
};
export default TeleportFetch;
