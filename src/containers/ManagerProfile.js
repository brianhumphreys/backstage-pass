import React, { useState } from 'react';
import InitiativeBlock from "../components/InitiativeBlock";
import employeeProfilePayload from '../mockData/employeeProfile';
import MediaBlock from '../components/MediaBlock';
import MenuBlock from '../components/MenuBlock';
import DonutChartBlock from '../components/DonutChartBlock';
import ProfileBlock from '../components/ProfileBlock';
import GitHubBlock from '../components/GitHubBlock';
import EmailBlock from '../components/EmailBlock';
import LoadingBlock from '../components/LoadingBlock';
import RadarChartBlock from '../components/RadarChartBlock/RadarChartBlock';

const ManagerProfile = ({userData}) => {
    return (
        <body>
        <div className="main-container">
            <div className="left-container container">
                <MenuBlock/>
                <DonutChartBlock/>
                <RadarChartBlock/>
                <InitiativeBlock/>
                <MediaBlock/>
            </div>
            <div className="middle-container container">
                {/*<ProfileBlock/>*/}
                <GitHubBlock/>
            </div>
            <div className="right-container container">
                <EmailBlock/>
                <LoadingBlock/>
            </div>
        </div>
        </body>
    );
};

export default ManagerProfile;
