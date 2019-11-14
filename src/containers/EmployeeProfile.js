import React from 'react';
import MediaBlock from '../components/MediaBlock';
import MenuBlock from '../components/MenuBlock';
import DonutChartBlock from '../components/DonutChartBlock';
import ProfileBlock from '../components/ProfileBlock';
import GitHubBlock from '../components/GitHubBlock';
import EmailBlock from '../components/EmailBlock';
import LoadingBlock from '../components/LoadingBlock';
import RadarChartBlock from '../components/RadarChartBlock/RadarChartBlock';
import { getEmployees} from "../store/storeFunctions";

const EmployeeProfile = () => {
    const location = window.location.href.split('/');
    const employees = getEmployees()
    const index = employees.findIndex(employee => {
        return employee.name.split(' ').join('') === location[location.length-1];
    });
    const employee = employees[index];

    return (
        <body>
        <div className="main-container">
            <div className="left-container container">
                <MenuBlock />
                <DonutChartBlock/>
                <LoadingBlock/>
            </div>
            <div className="middle-container container">
                <ProfileBlock account={employee}/>
                <GitHubBlock account={employee}/>
                <MediaBlock/>
            </div>
            <div className="right-container container">
                <RadarChartBlock id="employeeSkills" account={employee} comparing={false}/>
                <EmailBlock/>
            </div>
        </div>
        </body>
    );
};

export default EmployeeProfile;
