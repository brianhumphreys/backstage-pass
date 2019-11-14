import axios from "axios";
import React, { useState, useEffect } from "react";
import GitHubProfile from "./GitHubProfile";
import { getSignedInUser, setScore } from "../store/storeFunctions";

const CourseBlock = ({ index, skill }) => {
  const upSkill = () => {
    setScore(getSignedInUser(), index);
  };
  //
    const courses = [
        "https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/",
        "https://www.udemy.com/course/master-google-chrome-developer-tools/",
        "https://www.udemy.com/course/front-end-web-development/",
        "https://www.udemy.com/course/csharp-intermediate-classes-interfaces-and-oop/",
        "https://www.udemy.com/course/learn-data-structure-algorithms-with-java-interview/",
        "https://www.udemy.com/course/profitable-currency-pair-selection-strategy-forex-trading/",
    ];
  return (
    <a href={courses[index]} onClick={upSkill}>
      <div className="tweets block">
        <h2 className="titular">
          <span className="icon zocial-GitHubBlock"></span>
          {skill}
        </h2>
        <div className="tweet first">
          <div className="profile-picture big-profile-picture clear">
            <img
              width="150px"
              alt="Anne Hathaway picture"
              src="https://firebasestorage.googleapis.com/v0/b/apple-a-day-4765c.appspot.com/o/2cfc93d7665f5d7728782700e50596e3.png?alt=media&token=d992be6d-a7bd-4b3a-b3fc-3043a46d100e"
            />
          </div>
        </div>
      </div>
    </a>
  );
};
export default CourseBlock;
