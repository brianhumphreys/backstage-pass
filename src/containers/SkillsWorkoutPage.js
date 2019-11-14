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
                <CourseBlock/>
                <CourseBlock/>
                <CourseBlock/>
            </div>
            <div className="middle-container container">
                <CourseBlock/>
                <CourseBlock/>
                <CourseBlock/>
            </div>
            <div className="right-container container">
                <CourseBlock/>
                <CourseBlock/>
            </div>
        </div>
        </body>
    );
};

export default SkillsWorkoutPage;
