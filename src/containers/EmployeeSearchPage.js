import React from "react";
import { Link } from "react-router-dom";
import ProfileBlock from "../components/ProfileBlock";
import { getEmployees } from "../store/storeFunctions";
import {signedInEmployee} from "../mockData/employees";

const EmployeeSearchPage = () => {
  const employees = getEmployees();

  return (
    <body>
      <div className="main-container">
        <div className="left-container container">
          {employees.map((account, i) => {
            if (i % 3 === 0) {
              return (
                <Link key={i} to={`accounts/${account.name.split(' ').join('')}`}>
                  <ProfileBlock account={account} />
                </Link>
              );
            }
            return null;
          })}
        </div>
        <div className="middle-container container">
          {employees.map((account, i) => {
            if (i % 3 === 1) {
              return (
                <Link key={i} to={`accounts/${account.name.split(' ').join('')}`}>
                  <ProfileBlock account={account} />
                </Link>
              );
            }
            return null;
          })}
        </div>
        <div className="right-container container">
          {employees.map((account, i) => {
            if (i % 3 === 2) {
              return (
                <Link key={i} to={`accounts/${account.name.split(' ').join('')}`}>
                  <ProfileBlock account={account} />
                </Link>
              );
            }
            return null;
          })}
        </div>
      </div>
    </body>
  );
};

export default EmployeeSearchPage;
