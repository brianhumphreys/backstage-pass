import React from 'react';
import MediaBlock from '../components/MediaBlock';
import MenuBlock from '../components/MenuBlock';
import DonutChartBlock from '../components/DonutChartBlock';
import ProfileBlock from '../components/ProfileBlock';
import GitHubBlock from '../components/GitHubBlock';
import EmailBlock from '../components/EmailBlock';
import SkillQuestionnaireBlock from '../components/SkillQuestionnaireBlock'
import LoadingBlock from '../components/LoadingBlock';
import RadarChartBlock from '../components/RadarChartBlock/RadarChartBlock';
import { getEmployees} from "../store/storeFunctions";
import EducationBlock from "../components/EducationBlock";

const EmployeeProfile = () => {
    const location = window.location.href.split('/');
    const employees = getEmployees()
    const index = employees.findIndex(employee => {
        return employee.name.split(' ').join('') === location[location.length-1];
    });
    const employee = employees[index];

    const getScore = (employee) =>{
        if(employee === null) return;
        const github = employee && employee.github && 10;
        const bootcamp = employee && employee.education && employee.education.bootCamp && employee.education.bootCamp.length > 0 && 10;
        const university = employee && employee.education && employee.education.universities && employee.education.universities.length > 0 && 10;
        console.log(github);
        console.log(bootcamp);
        console.log(university);
        return employee.skills.map(skill => skill.level).reduce((a, b) => a + b, 0) + github + bootcamp + university;
    };

    console.log(getScore(employee));

    const hasSkills = employee.skills.map(skill => skill.level).reduce((a, b) => a + b, 0) !== 0
    // const hasSkills = false


    return (
        <body>
        <div className="main-container">
            <div className="left-container container">
                <MenuBlock />
                <DonutChartBlock/>
                <MediaBlock/>
            </div>
            <div className="middle-container container">
                <ProfileBlock account={employee}/>
                <GitHubBlock account={employee}/>
                <EducationBlock account={employee}/>
            </div>
            <div className="right-container container">
                {
                    hasSkills ?
                        <RadarChartBlock id="employeeSkills" account={employee} comparing={false}/>
                        :
                        <SkillQuestionnaireBlock />
                }
                <EmailBlock/>
                <LoadingBlock/>
            </div>
        </div>
        </body>
    );
};

export default EmployeeProfile;
