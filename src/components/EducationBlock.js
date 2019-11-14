import axios from "axios";
import React, { useState, useEffect } from "react";
import GitHubProfile from "./GitHubProfile";
import { getUniversities, getSignedInUser, setUniversities } from "../store/storeFunctions";

const EducationBlock = ({ account }) => {
    console.log(account);

    const doStuff = () => {
        document.getElementById('upload').click();

    };
    const doStuff2 = () => {
        console.log(
            'doing stuff2'
        );
        setUniversities(account);
    };

    useEffect(() => {
        console.log("doing stuff");
    })
    // }, []);
    return (
      <div className="tweets block">
        <h2 className="titular">
          <span className="icon zocial-GitHubBlock"></span>University
        </h2>
        <div className="tweet first">
          {account.education.universities.length > 0 ? (

            <div className="input-container">
              <div>You Graduated!</div>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z" />
              </svg>
            </div>
          ) : (
            <div className="input-container">
              <form onSubmit={doStuff2}>
                <div className="input-container">
                  <div className="input-icon envelope-icon-newsletter">
                    <span className="fontawesome-envelope scnd-font-color"></span>
                  </div>
                </div>
                <input
                  id="upload"
                  hidden={true}
                  type="file"
                  name="myImage"
                  accept="image/x-png,image/gif,image/jpeg"
                  onChange={doStuff2}
                />
                <div className="subscribe button" onClick={doStuff}>
                  UPLOAD TRANSCRIPT
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    );
};
export default EducationBlock;
