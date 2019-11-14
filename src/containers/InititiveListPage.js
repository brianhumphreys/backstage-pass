import React, { useState } from "react";
// import "./EmployeeProfile.css";
import InitiativeBlock from "../components/InitiativeBlock";
import MediaBlock from "../components/MediaBlock";
import MenuBlock from "../components/MenuBlock";
import DonutChartBlock from "../components/DonutChartBlock";
import RadarChartBlock from "../components/RadarChartBlock/RadarChartBlock";
import { Link } from 'react-router-dom';
import GitHubBlock from "../components/GitHubBlock";
import EmailBlock from "../components/EmailBlock";
import LoadingBlock from "../components/LoadingBlock";
import InitiativeCards from "../components/InitiativeCards/InitiativeCards";

const InitiativePage = (initiatives) => {
  return (
    <body>
      <div className="main-container initiative-list">
        {initiatives.map(initiative => {
         return <div>
           <div className="initiative-title">
             {initiative.name}
           </div>
           <div>
             <img src={initiative.imageUrl} className="initiative-image"/>
           </div>
            <div className="initiative-bio">
              {initiative.bio}
            </div>
          </div>
        })}
      </div>
    </body>
  );
};

export default InitiativePage;
