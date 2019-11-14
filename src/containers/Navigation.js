import React from "react";
import { Link } from "react-router-dom";
import { signedInEmployee } from "../mockData/employees";

const NavigationBar = ({ gravatar }) => {
  return (
    <header className="block">
      <ul className="header-menu horizontal-list">
        <li>
          <Link to={`accounts/${signedInEmployee.name.split(' ').join('')}`}>
            <div className="header-menu-tab">
              <span className="icon fontawesome-user scnd-font-color"></span>
              Account
            </div>
          </Link>
        </li>
        <li>
          <Link to={`/accounts`}>
            <div className="header-menu-tab">
              <span className="icon fontawesome-user scnd-font-color"></span>
              Employees
            </div>
          </Link>
        </li>
        <li>
          <Link to="/notifications">
            <div className="header-menu-tab">
              <span className="icon fontawesome-envelope scnd-font-color"></span>
              Notifications
            </div>
          </Link>
          <a className="header-menu-number">5</a>
        </li>
        <li>
          <Link to="/initiatives">
            <div className="header-menu-tab">
              <span className="icon fontawesome-star-empty scnd-font-color"></span>
              Initiatives
            </div>
          </Link>
        </li>
      </ul>
      <div className="profile-menu">
        <p>
          Me{" "}
          <a href="#26">
            <span className="entypo-down-open scnd-font-color"></span>
          </a>
        </p>
        <div className="profile-picture small-profile-picture">
          <img width="40px" alt="Anne Hathaway picture" src={gravatar} />
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
