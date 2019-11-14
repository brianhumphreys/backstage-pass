import React, { useState } from 'react';
// import "./EmployeeProfile.css";
import InitiativeBlock from "../components/InitiativeBlock";
import employeeProfilePayload from '../mockData/employeeProfile';
import MediaBlock from '../components/MediaBlock';
import MenuBlock from '../components/MenuBlock';
import DonutChartBlock from '../components/DonutChartBlock';
import ProfileBlock from '../components/ProfileBlock';
import GitHubBlock from '../components/GitHubBlock';
import MoreSocialBlock from '../components/MoreSocialBlock';
import EmailBlock from '../components/EmailBlock';
import LoadingBlock from '../components/LoadingBlock';
import RadarChartBlock from '../components/RadarChartBlock/RadarChartBlock';


const EmployeeProfile = () => {
    return (
        <body>
        <div className="main-container">


            <div className="left-container container">
                <MenuBlock/>
                <DonutChartBlock/>
                <LoadingBlock/>
            </div>
            <div className="middle-container container">
                <ProfileBlock/>
                <GitHubBlock/>
                <MediaBlock/>
            </div>
            <div className="right-container container">
                <RadarChartBlock/>
                <InitiativeBlock/>
                <EmailBlock/>
            </div>
        </div>
        </body>
    );
};

export default EmployeeProfile;
