import React from "react";
import RadarChartBlock from "../components/RadarChartBlock/RadarChartBlock";
import initiatives from "../mockData/initiatives";
import InitiativeBlock from "../components/InitiativeBlock";
import { signedInEmployee } from "../mockData/employees";

const InitiativePage = () => {
  const location = window.location.href.split('/');
  const index = initiatives.findIndex(initiative => {
    return initiative.path === location[location.length-1];
  });

  return (
    <body>
      <div className="main-container">
        <div className="left-container container">
          <InitiativeBlock account={initiatives[index]}/>
        </div>
        <div className="middle-container container">
          <RadarChartBlock id="skills" account={signedInEmployee} initiative={initiatives[index]} comparing={true} />
        </div>
        <div className="right-container container">
        </div>
      </div>
    </body>
  );
};

export default InitiativePage;
