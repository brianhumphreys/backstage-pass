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
import employeeProfilePayload from "../mockData/employeeProfile";

const InitiativePage = () => {
  const location = window.location.href.split('/');
  const index = employeeProfilePayload.initiatives.findIndex(initiative => {
    console.log(location[location.length-1]);
    console.log(initiative);
    return initiative.path === location[location.length-1];
  });

  console.log('wowowow', employeeProfilePayload.initiatives[index]);

  return (
    <body>
      <div className="main-container">
        <div className="left-container container">
          <ProfileBlock account={employeeProfilePayload.initiatives[index]}/>
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
