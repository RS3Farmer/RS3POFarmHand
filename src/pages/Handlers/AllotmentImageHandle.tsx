interface Teleport {
  teleport: string;
}
export const AllotmentImages: React.FC<Teleport> = (props: {
  teleport: string;
}) => {
  return (
    <>
      <div id="ModifiedBotonistsMaskA" className="CatherbyAllotmentImages">
        <p>{props.teleport}</p>
        <img src="./dist/ModifiedBotonistsMask.png" alt="Catherby Allotment" />
      </div>
      {/* <div id="CatherbyLodestoneA" className="CatherbyAllotmentImages">
        <img
          src="./dist/CatherbyLodestone.png"
          alt="Catherby Allotment"
          style={{ position: "absolute", left: "145px", top: "210px" }}
        />
      </div>
      <div id="CamelotTeleportA" className="CatherbyAllotmentImages">
        <img
          src="./dist/CamelotTeleport.png"
          alt="Catherby Allotment"
          style={{ position: "absolute", left: "135px", top: "265px" }}
        />
      </div>
      <div id="CatherbyTeleportA" className="CatherbyAllotmentImages">
        <img
          src="./dist/CatherbyTeleport.png"
          alt="Catherby Allotment"
          style={{ position: "absolute", left: "255px", top: "330px" }}
        />
      </div>
      <div id="ExplorersRing3A" className="FaladorSouth">
        <img
          src="./dist/ExplorersRing3.png"
          alt="Falador South"
          style={{ position: "absolute", left: "335px", top: "520px" }}
        />
      </div>
      <div id="SouthFaladorTeleportA" className="FaladorSouth">
        <img
          src="./dist/SouthFaladorTeleport.png"
          alt="Falador South"
          style={{ position: "absolute", left: "280px", top: "582px" }}
        />
      </div>
      <div id="PortSarimlodestoneA" className="FaladorSouth">
        <img
          src="./dist/PortSarimlodestone.png"
          alt="Falador South"
          style={{ position: "absolute", left: "340px", top: "650px" }}
        />
      </div>
      <div id="CaptainsLogA" className="FaladorSouth">
        <img
          src="./dist/CaptainsLog.png"
          alt="Falador South"
          style={{ position: "absolute", left: "255px", top: "710px" }}
        />
      </div>
      <div id="ArcJournalA" className="FaladorSouth">
        <img
          src="./dist/ArcJournal.png"
          alt="Falador South"
          style={{ position: "absolute", left: "180px", top: "780px" }}
        />
      </div>
      <div id="ModifiedBlacksmithsHelmetA" className="FaladorSouth">
        <img
          src="./dist/ModifiedBlacksmithsHelmet.png"
          alt="Falador South"
          style={{ position: "absolute", left: "355px", top: "835px" }}
        />
      </div>
      <div id="FarmersHatA" className="CanifisAllotment">
        <img
          src="./dist/FarmersHat.png"
          alt="Canifis Allotment"
          style={{ position: "absolute", left: "270px", top: "1030px" }}
        />
      </div>
      <div id="EctophialA" className="Canifis Allotment">
        <img
          src="./dist/Ectophial.png"
          alt="Canifis Allotment"
          style={{ position: "absolute", left: "75px", top: "1080px" }}
        />
      </div>
      <div id="FairyRingTeleALQA" className="CanifisAllotment">
        <img
          src="./dist/FairyRingTeleALQ.png"
          alt="Canifis Allotment"
          style={{ position: "absolute", left: "145px", top: "1160px" }}
        />
      </div>
      <div id="RingOfSlayingA" className="CanifisAllotment">
        <img
          src="./dist/RingOfWealth.png"
          alt="Canifis Allotment"
          style={{ position: "absolute", left: "295px", top: "1235px" }}
        />
      </div>
      <div id="CharterShipA" className="CanifisAllotment">
        <img
          src="./dist/CharterShip.png"
          alt="Canifis Allotment"
          style={{ position: "absolute", left: "220px", top: "1265px" }}
        />
      </div>
      <div id="CanifisLodestoneA" className="Canifis Allotment">
        <img
          src="./dist/CanifisLodestone.png"
          alt="Canifis Allotment"
          style={{ position: "absolute", left: "125px", top: "1360px" }}
        />
      </div>
      <div id="SlayerCape(t)A" className="Canifis Allotment">
        <img
          src="./dist/SlayerCape(t).png"
          alt="Canifis Allotment"
          style={{ position: "absolute", left: "245px", top: "1415px" }}
        />
      </div>
      <div id="CharterShipB" className="HarmonyIsland">
        <img
          src="./dist/CharterShip.png"
          alt="Harmoney Island"
          style={{ position: "absolute", left: "225px", top: "1575px" }}
        />
      </div>
      <div id="RumA" className="HarmonyIsland">
        <img
          src="./dist/Rum.png"
          alt="Harmoney Island"
          style={{ position: "absolute", left: "175px", top: "1665px" }}
        />
      </div>
      <div id="PirateSpellA" className="HarmonyIsland">
        <img
          src="./dist/PirateSpell.png"
          alt="Harmoney Island"
          style={{ position: "absolute", left: "125px", top: "1735px" }}
        />
      </div>
      <div id="BigBookOPiracyA" className="HarmonyIsland">
        <img
          src="./dist/BigBookOPiracy.png"
          alt="Harmoney Island"
          style={{ position: "absolute", left: "125px", top: "1805px" }}
        />
      </div>
      <div id="EctophialB" className="HarmonyIsland">
        <img
          src="./dist/Ectophial.png"
          alt="Harmony Island"
          style={{ position: "absolute", left: "195px", top: "1850px" }}
        />
      </div>
      <div id="ManorFarmTeleportA" className="ManorFarm">
        <img
          src="./dist/ManorFarmTeleport.png"
          alt="Manor Farm"
          style={{ position: "absolute", left: "310px", top: "2075px" }}
        />
      </div>
      <div id="ArdougneLodestoneA" className="ManorFarm">
        <img
          src="./dist/ArdougneLodestone.png"
          alt="Manor Farm"
          style={{ position: "absolute", left: "145px", top: "2145px" }}
        />
      </div>
      <div id="ArdougneTeleportA" className="ManorFarm">
        <img
          src="./dist/ArdougneTeleport.png"
          alt="Manor Farm"
          style={{ position: "absolute", left: "145px", top: "2200px" }}
        />
      </div>
      <div id="NorthArdougneTeleA" className="ManorFarm">
        <img
          src="./dist/NorthArdougneTele.png"
          alt="Manor Farm"
          style={{ position: "absolute", left: "295px", top: "2265px" }}
        />
      </div>
      <div id="SkillsNecklaceA" className="ManorFarm">
        <img
          src="./dist/SkillsNecklace.png"
          alt="Manor Farm"
          style={{ position: "absolute", left: "215px", top: "2315px" }}
        />
      </div>
      <div id="FishingGuildTeleportA" className="ManorFarm">
        <img
          src="./dist/FishingGuildTeleport.png"
          alt="Manor Farm"
          style={{ position: "absolute", left: "275px", top: "2395px" }}
        />
      </div>
      <div id="CombatBraceletA" className="ManorFarm">
        <img
          src="./dist/CombatBracelet.png"
          alt="Manor Farm"
          style={{ position: "absolute", left: "235px", top: "2465px" }}
        />
      </div>
      <div id="FairyRingTeleBLR" className="ManorFarm">
        <img
          src="./dist/FairyRingTeleBLR.png"
          alt="Manor Farm"
          style={{ position: "absolute", left: "135px", top: "2515px" }}
        />
      </div>
      <div id="MasterArchaeologistsOutfitA" className="ManorFarm">
        <img
          src="./dist/MasterArchaeologistsOutfit.png"
          alt="Manor Farm"
          style={{ position: "absolute", left: "355px", top: "2625px" }}
        />
      </div>
      <div id="CapeOfLegendsA" className="ManorFarm">
        <img
          src="./dist/CapeOfLegends.png"
          alt="Manor Farm"
          style={{ position: "absolute", left: "235px", top: "2660px" }}
        />
      </div>
      <div id="CapeOfLegendsA" className="Priffdinas(Crwys)">
        <img
          src="./dist/CrystalTeleportSeed.png"
          alt="Manor Farm"
          style={{ position: "absolute", left: "260px", top: "2850px" }}
        />
      </div>
      <div id="CapeOfLegendsA" className="Priffdinas(Crwys)">
        <img
          src="./dist/PriffdinasLodestone.png"
          alt="Manor Farm"
          style={{ position: "absolute", left: "175px", top: "2930px" }}
        />
      </div>
      <div id="CapeOfLegendsA" className="Priffdinas(Crwys)">
        <img
          src="./dist/PriffdinasCamoOutFit.png"
          alt="Manor Farm"
          style={{ position: "absolute", left: "385px", top: "3025px" }}
        />
      </div>
      <div id="CapeOfLegendsA" className="Priffdinas(Crwys)">
        <img
          src="./dist/MasterCamoOutFit.png"
          alt="Manor Farm"
          style={{ position: "absolute", left: "305px", top: "3025px" }}
        />
      </div>
      <div id="CapeOfLegendsA" className="Priffdinas(Crwys)">
        <img
          src="./dist/SpiritTree.png"
          alt="Manor Farm"
          style={{ position: "absolute", left: "175px", top: "3110px" }}
        />
      </div>
      <div id="TrollheimFarmTeleportA" className="TrollStronghold">
        <img
          src="./dist/TrollheimFarmTeleport.png"
          alt="Troll Stronghold"
          style={{ position: "absolute", left: "75px", top: "3335px" }}
        />
      </div>
      <div id="TrollheimTeleportA" className="TrollStronghold">
        <img
          src="./dist/TrollheimTeleport.png"
          alt="Troll Stronghold"
          style={{ position: "absolute", left: "75px", top: "3455px" }}
        />
      </div>
      <div id="FairyRingTeleAJRA" className="TrollStronghold">
        <img
          src="./dist/FairyRingTeleAJR.png"
          alt="Troll Stronghold"
          style={{ position: "absolute", left: "25px", top: "3600px" }}
        />
      </div>
      <div id="PortableObeliskA" className="WildernessLvl22">
        <img
          src="./dist/PortableObelisk.png"
          alt="Wilderness Lvl 22"
          style={{ position: "absolute", left: "75px", top: "3795px" }}
        />
      </div>
      <div id="WildernessSword2A" className="WildernessLvl22">
        <img
          src="./dist/WildernessSword2.png"
          alt="Wilderness Lvl 22"
          style={{ position: "absolute", left: "75px", top: "3875px" }}
        />
      </div>
      <div id="TrollheimAgilitySCA" className="WildernessLvl22">
        <img
          src="./dist/TrollheimAgilitySC.png"
          alt="Wilderness Lvl 22"
          style={{ position: "absolute", left: "", bottom: "" }}
        />
      </div>
      <div id="DareeyakTeleportA" className="WildernessLvl22">
        <img
          src="./dist/DareeyakTeleport.png"
          alt="Wilderness Lvl 22"
          style={{ position: "absolute", left: "", bottom: "" }}
        />
      </div>
      <div id="WildernessSword1A" className="WildernessLvl38">
        <img
          src="./dist/WildernessSword1.png"
          alt="Wilderness lvl38"
          style={{ position: "absolute", left: "", bottom: "" }}
        />
      </div>
      <div id="WakaA" className="WildernessLvl38">
        <img
          src="./dist/Waka.png"
          alt="Wilderness lvl 38"
          style={{ position: "absolute", left: "", bottom: "" }}
        />
      </div>
      <div id="PortableObeliskB" className="WildernessLvl38">
        <img
          src="./dist/PortableObelisk.png"
          alt="Wilderness lvl 38"
          style={{ position: "absolute", left: "", bottom: "" }}
        />
      </div>
      <div id="WildernessLodestoneA" className="WildernessLvl38">
        <img
          src="./dist/WildernessLodestone.png"
          alt="Wilderness lvl 38"
          style={{ position: "absolute", left: "", bottom: "" }}
        />
      </div>
      <div id="EdgevilleLeverA" className="WildernessLvl38">
        <img
          src="./dist/EdgevilleLever.png"
          alt="Wilderness lvl 38"
          style={{ position: "absolute", left: "", bottom: "" }}
        />
      </div>
      <div id="" className="Garden of Kharid">
        <img
          src="./dist/MysticalSandSeed.png"
          alt="Garden of Kharid"
          style={{ position: "absolute", left: "", bottom: "" }}
        />
      </div>
      <div id="" className="Garden of Kharid">
        <img
          src="./dist/SandSeed.png"
          alt="Garden of Kharid"
          style={{ position: "absolute", left: "", bottom: "" }}
        />
      </div>
      <div id="" className="Garden of Kharid">
        <img
          src="./dist/RingOfDueling.png"
          alt="Garden of Kharid"
          style={{ position: "absolute", left: "", bottom: "" }}
        />
      </div>
      <div id="" className="GardenOfKharid">
        <img
          src="./dist/WickedHood.png"
          alt="Garden of Kharid"
          style={{ position: "absolute", left: "", bottom: "" }}
        />
      </div>
      <div id="" className="GardenOfKharid">
        <img
          src="./dist/FirealtarTeleportdetail.png"
          alt="Garden of Kharid"
          style={{ position: "absolute", left: "", bottom: "" }}
        />
      </div>
      <div id="" className="Garden of Kharid">
        <img
          src="./dist/DungeoneeringCape(t).png"
          alt="Garden of Kharid"
          style={{ position: "absolute", left: "", bottom: "" }}
        />
      </div>
      <div id="" className="Garden of Kharid">
        <img
          src="./dist/AlkharidLodeStone.png"
          alt="Garden of Kharid"
          style={{ position: "absolute", left: "", bottom: "" }}
        />
      </div> */}
    </>
  );
};
