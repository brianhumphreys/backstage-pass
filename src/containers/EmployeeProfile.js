import React, { useState } from 'react';
// import "./EmployeeProfile.css";
import InitiativeBlock from "../components/InitiativeBlock";
import employeeProfilePayload from '../mockData/employeeProfile';
import MediaBlock from '../components/MediaBlock';
import MenuBlock from '../components/MenuBlock';
import DonutChartBlock from '../components/DonutChartBlock';
import SocialMediaBlock from '../components/SocialMediaBlock';
import ProfileBlock from '../components/ProfileBlock';
import PlannerBlock from '../components/PlannerBlock';
import GitHubBlock from '../components/GitHubBlock';
import MoreSocialBlock from '../components/MoreSocialBlock';
import EmailBlock from '../components/EmailBlock';
import AccountBlock from '../components/AccountBlock';
import LoadingBlock from '../components/LoadingBlock';
import CalendarDayBlock from '../components/CalendarDayBlock';
import CalendarMonthBlock from '../components/CalendarMonthBlock';
import RadarChartBlock from '../components/RadarChartBlock';


const EmployeeProfile = () => {


    console.log(employeeProfilePayload);


    return (
        <body>
        <div className="main-container">


            <div className="left-container container">
                <MenuBlock/>
                <DonutChartBlock/>
                <RadarChartBlock/>
                <InitiativeBlock/>
                <MediaBlock/>
                <SocialMediaBlock/>
            </div>
            <div className="middle-container container">
                <ProfileBlock/>
                <PlannerBlock/>
                <GitHubBlock/>
                {/*<MoreSocialBlock/>*/}
            </div>
            <div className="right-container container">
                <EmailBlock/>
                <AccountBlock/>
                <LoadingBlock/>
                <CalendarDayBlock/>
                <CalendarMonthBlock/>
            </div>
        </div>
        </body>
    );
};

export default EmployeeProfile;