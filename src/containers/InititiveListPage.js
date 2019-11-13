import React, { useState } from "react";
// import "./EmployeeProfile.css";
import InitiativeBlock from "../components/InitiativeBlock";
import MediaBlock from "../components/MediaBlock";
import MenuBlock from "../components/MenuBlock";
import DonutChartBlock from "../components/DonutChartBlock";
import SocialMediaBlock from "../components/SocialMediaBlock";
import RadarChartBlock from "../components/RadarChartBlock/RadarChartBlock";
import ProfileBlock from "../components/ProfileBlock";
import PlannerBlock from "../components/PlannerBlock";
import GitHubBlock from "../components/GitHubBlock";
import EmailBlock from "../components/EmailBlock";
import AccountBlock from "../components/AccountBlock";
import LoadingBlock from "../components/LoadingBlock";
import CalendarDayBlock from "../components/CalendarDayBlock";
import CalendarMonthBlock from "../components/CalendarMonthBlock";

const InitiativePage = () => {
    return (
        <body>
        <div className="main-container">
            <div className="left-container container">
                <ProfileBlock />
                <ProfileBlock />
                <ProfileBlock />
            </div>
            <div className="middle-container container">
                <ProfileBlock />
                <ProfileBlock />
                <ProfileBlock />
            </div>
            <div className="right-container container">
                <ProfileBlock />
                <ProfileBlock />
            </div>
        </div>
        </body>
    );
};

export default InitiativePage;