import React, { useState } from "react";
// import "./EmployeeProfile.css";
import InitiativeBlock from "../components/InitiativeBlock";
import MediaBlock from "../components/MediaBlock";
import MenuBlock from "../components/MenuBlock";
import DonutChartBlock from "../components/DonutChartBlock";
import RadarChartBlock from "../components/RadarChartBlock/RadarChartBlock";
import ProfileBlock from "../components/ProfileBlock";
import GitHubBlock from "../components/GitHubBlock";
import EmailBlock from "../components/EmailBlock";
import LoadingBlock from "../components/LoadingBlock";

const InitiativePage = () => {
  console.log(window.location.href);
  return (
    <body>
      <div className="main-container">
        <div className="left-container container">
          <ProfileBlock />
        </div>
        <div className="middle-container container">
          <RadarChartBlock id="skills"/>
        </div>
        <div className="right-container container">
          <RadarChartBlock id="otherskills"/>
        </div>
      </div>
    </body>
  );
};

export default InitiativePage;
