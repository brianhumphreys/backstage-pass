import React, { useState } from "react";
import RadarChartBlock from "../components/RadarChartBlock/RadarChartBlock";
import ProfileBlock from "../components/ProfileBlock";

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
