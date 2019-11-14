import React from 'react';
import MediaBlock from '../components/MediaBlock';
import MenuBlock from '../components/MenuBlock';
import DonutChartBlock from '../components/DonutChartBlock';
import ProfileBlock from '../components/ProfileBlock';
import GitHubBlock from '../components/GitHubBlock';
import EmailBlock from '../components/EmailBlock';
import LoadingBlock from '../components/LoadingBlock';
import RadarChartBlock from '../components/RadarChartBlock/RadarChartBlock';
import CourseBlock from '../components/CourceBlock'

const SkillsWorkoutPage = ({userData}) => {
    return (
        <body>
        <div className="main-container">
            <div className="left-container container">
                <CourseBlock index={0} skill="Upgrade Database Skills"/>
                <CourseBlock index={3} skill="Upgrade OOP Skills"/>
            </div>
            <div className="middle-container container">
                <CourseBlock index={1} skill="Upgrade Devtool Skills"/>
                <CourseBlock index={4} skill="Upgrade Algorithmic Skills"/>
            </div>
            <div className="right-container container">
                <CourseBlock index={2} skill="Upgrade Frontend Skills"/>
                <CourseBlock index={5} skill="Upgrade Pairing Skills"/>
            </div>
        </div>
        </body>
    );
};

export default SkillsWorkoutPage;
