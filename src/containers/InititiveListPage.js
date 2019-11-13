import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ProfileBlock from "../components/ProfileBlock";
import employeeProfilePayload from "../mockData/employeeProfile";

const InitiativePage = () => {
  console.log(window.location.href);
  const initiatives = employeeProfilePayload.initiatives;

  return (
    <body>
      <div className="main-container">
        <div className="left-container container">
          {initiatives.map((initiative, i) => {
            if (i % 3 == 0) {
              return <Link to={`initiatives/${initiative.name}`}>
                  <ProfileBlock account={initiative}/>;
              </Link>
            }
            return null;
          })}
        </div>
        <div className="middle-container container">
          {initiatives.map((initiative, i) => {
            if (i % 3 == 1) {
              return <Link to={`initiatives/${initiative.name}`}>
                  <ProfileBlock account={initiative}/>;
              </Link>
            }
            return null;
          })}
        </div>
        <div className="right-container container">
          {initiatives.map((initiative, i) => {
            if (i % 3 == 2) {
              return <Link to={`initiatives/${initiative.name}`}>
                  <ProfileBlock account={initiative}/>;
              </Link>
            }
            return null;
          })}
        </div>
      </div>
    </body>
  );
};

export default InitiativePage;
