import React from "react";
import RadarChartBlock from "../components/RadarChartBlock/RadarChartBlock";
import initiatives from "../mockData/initiatives";
import InitiativeBlock from "../components/InitiativeBlock";
import { getSignedInUser, getEmployees } from "../store/storeFunctions";

const InitiativePage = () => {
  const location = window.location.href.split('/');
  const index = initiatives.findIndex(initiative => {
    return initiative.path === location[location.length-1];
  });

  const current = getSignedInUser();
  const employees = getEmployees();
  const employeeIndex = employees.findIndex(employee => {
    return employee.name === current.name;
  });

  return (
    <body>
      <div className="main-container">
        <div className="left-container container">
          <InitiativeBlock account={initiatives[index]}/>
        </div>
        <div className="middle-container container">
          <RadarChartBlock id="skills" account={employees[employeeIndex]} initiative={initiatives[index]} comparing={true} />
        </div>
        <div className="right-container container">
        </div>
      </div>
    </body>
  );
};

export default InitiativePage;
