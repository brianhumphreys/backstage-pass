import React, { useState } from "react";
// import "./EmployeeProfile.css";
import InitiativeBlock from "../components/InitiativeBlock";
import MediaBlock from "../components/MediaBlock";
import MenuBlock from "../components/MenuBlock";
import DonutChartBlock from "../components/DonutChartBlock";
import SocialMediaBlock from "../components/SocialMediaBlock";
import RadarChartBlock from "../components/RadarChartBlock";

const InitiativePage = () => {
  return (
    <body>
      <div className="main-container">
        <MenuBlock />
        <DonutChartBlock />
        <RadarChartBlock />
        <InitiativeBlock />
        <MediaBlock />
        <SocialMediaBlock />
      </div>
    </body>
  );
};

export default InitiativePage;
