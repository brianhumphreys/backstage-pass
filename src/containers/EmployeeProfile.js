import React, { useState } from 'react';
// import "./EmployeeProfile.css";
import LineChartBlock from "../components/LineChartBlock";
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
import employees from "../mockData/employees";

const EmployeeProfile = ({ account }) => {
    const location = window.location.href.split('/');
    const employeeIndex = employees.findIndex(employee => {
        return employee.name.replace(/\s/g, '') === location[location.length-1];
    });

    const thisEmployee = employees[employeeIndex];

    return (
        <body>
        <div className="main-container">


            <div className="left-container container">
                <MenuBlock/>
                <DonutChartBlock/>
                <LoadingBlock/>
            </div>
            <div className="middle-container container">
                <ProfileBlock account={thisEmployee}/>
                <GitHubBlock/>
                <MediaBlock/>
            </div>
            <div className="right-container container">
                <RadarChartBlock id="employeeskill" account={thisEmployee} comparing={false}/>
                <LineChartBlock/>
                <EmailBlock/>
            </div>
        </div>
        </body>
    );
};

export default EmployeeProfile;
