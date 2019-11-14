import React, {useState, useEffect} from "react";

const SkillQuestionnaireBlock = () => {
    return (
        <div className="block">
            <div className="questionnaire-container">
                <div className="questionnaire-header-title">
                    <h2 className="titular">
                        Skills Questionnaire
                    </h2>
                </div>
                <form>
                    <div>
                        <div className="questionnaire-field-title">
                            <label>Have you completed a degree program in Computer Science, Computer Engineering, or Software
                                Engineering?
                            </label>
                        </div>
                        <div className="questionnaire-field-input">
                            <input type="radio" value="Yes" /><span>Yes</span>
                            <input type="radio" value="No"/><span>No</span>
                        </div>
                    </div>
                    <div>
                        <div className="questionnaire-field-title">
                            <label>Have you completed a coding boot camp?</label>
                        </div>
                        <div className="questionnaire-field-input">
                            <input type="radio" value="Yes"/><span>Yes</span>
                            <input type="radio" value="No"/><span>No</span>
                        </div>
                    </div>
                    <div>
                        <div className="questionnaire-field-title">
                            <label>Please rate your object-oriented proficiency on a scale of 1-10 (1 being beginner, 10 being expert)</label>
                        </div>
                        <div className="questionnaire-field-input">
                            <input type="radio" value="Yes"/><span> 1-3</span>
                            <input type="radio" value="No"/><span> 4-6</span>
                            <input type="radio" value="No"/><span>7-10</span>
                        </div>
                    </div>
                    <div className="questionnaire-field-title">
                        <div>
                            <label>Please rate your database design and implementation proficiency on a scale of 1-10</label>
                        </div>
                        <div className="questionnaire-field-input">
                            <input type="radio" value="Yes"/> <span>1-3</span>
                            <input type="radio" value="No"/> <span>4-6</span>
                            <input type="radio" value="No"/> <span>7-10</span>
                        </div>
                    </div>
                    <div>
                        <div className="questionnaire-field-title">
                            <label>Please rate your front-end development proficiency on a scale of 1-10</label>
                        </div>
                        <div className="questionnaire-field-input">
                            <input type="radio" value="Yes"/> <span>1-3</span>
                            <input type="radio" value="No"/> <span>4-6</span>
                            <input type="radio" value="No"/> <span>7-10</span>
                        </div>
                    </div>
                    <div>
                        <div className="questionnaire-field-title">
                            <label>Please rate your dev tool proficiency (Git, Jenkins, Docker, etc.) on a scale of 1-10Git Hub</label>
                        </div>
                        <div className="questionnaire-field-input">
                            <input type="radio" value="Yes"/> <span>1-3</span>
                            <input type="radio" value="No"/> <span>4-6</span>
                            <input type="radio" value="No"/> <span>7-10</span>
                        </div>
                    </div>
                    <div>
                        <div className="questionnaire-field-title">
                            <label>Please rate your ability to code with a pair.</label>
                        </div>
                        <div className="questionnaire-field-input">
                            <input type="radio" value="Yes"/> <span>1-3</span>
                            <input type="radio" value="No"/> <span>4-6</span>
                            <input type="radio" value="No"/> <span>7-10</span>
                        </div>
                    </div>
                    <div>
                        <div className="questionnaire-field-title">
                            <label>Please rate your algorithmic and problem solving skills</label>
                        </div>
                        <div className="questionnaire-field-input">
                            <input type="radio" value="Yes"/> <span>1-3</span>
                            <input type="radio" value="No"/> <span>4-6</span>
                            <input type="radio" value="No"/> <span>7-10</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default SkillQuestionnaireBlock;
