import React, { useState } from "react";
// import "./EmployeeProfile.css";
import InitiativeBlock from "../components/InitiativeBlock";
import MediaBlock from "../components/MediaBlock";
import MenuBlock from "../components/MenuBlock";
import DonutChartBlock from "../components/DonutChartBlock";
import RadarChartBlock from "../components/RadarChartBlock/RadarChartBlock";
import { Link } from 'react-router-dom';
import ProfileBlock from "../components/ProfileBlock";
import GitHubBlock from "../components/GitHubBlock";
import EmailBlock from "../components/EmailBlock";
import LoadingBlock from "../components/LoadingBlock";
import employeeProfilePayload from "../mockData/employeeProfile";
import InitiativeCards from "../components/InitiativeCards/InitiativeCards";

const InitiativePage = () => {
  // console.log(employeeProfilePayload);
  const initiatives = employeeProfilePayload.initiatives;

  return (
    <body>
      <div className="main-container">
        <div className="left-container container">
          {initiatives.map((initiative, i) => {
              // console.log(initiative);
            if (i % 3 === 0) {
              return <Link key={i} to={`initiatives/${initiative.path}`}>
                  {/*{console.log(initiative)}*/}
                  <ProfileBlock account={initiative}/>
                  {/*<InitiativeCards/>*/}
              </Link>
            }
            return null;
          })}
        </div>
        <div className="middle-container container">
          {initiatives.map((initiative, i) => {
            if (i % 3 === 1) {
              return <Link key={i} to={`initiatives/${initiative.path}`}>
                  <ProfileBlock account={initiative}/>
                  {/*<InitiativeCards/>*/}
              </Link>
            }
            return null;
          })}
        </div>
        <div className="right-container container">
          {initiatives.map((initiative, i) => {
            if (i % 3 === 2) {
              return <Link key={i} to={`initiatives/${initiative.path}`}>
                  <ProfileBlock account={initiative}/>
                  {/*<InitiativeCards/>*/}
              </Link>
            }
            return null;
          })}
        </div>
      </div>
    </body>
  );
};

export default InitiativePage;
