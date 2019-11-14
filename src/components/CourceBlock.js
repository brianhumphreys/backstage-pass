import axios from "axios";
import React, { useState, useEffect } from "react";
import GitHubProfile from "./GitHubProfile";
import { getGitHubInfo, setGitHubInfo } from "../store/storeFunctions";

const CourseBlock = ({ account }) => {
    const upSkill = () => {
        console.log('jkfhdsjkf;hdskfajndsklfjklds');
    }
  return (
    <a href={"https://github.com/"} onClick={upSkill}>
      <div className="tweets block">
        <h2 className="titular">
          <span className="icon zocial-GitHubBlock"></span>GitHub
        </h2>
        <div className="tweet first">
          <div className="input-container">
            <div className="input-icon envelope-icon-acount">
              <span className="fontawesome-envelope scnd-font-color"></span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
export default CourseBlock;
