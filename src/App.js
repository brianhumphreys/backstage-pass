import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import EmployeeProfile from "./containers/EmployeeProfile";
import ManagerProfile from "./containers/ManagerProfile";
import NavigationBar from "./containers/Navigation";
// import HomePage from "./containers/HomePage";
import employeeProfilePayload from "./mockData/employeeProfile";

const App = () => {
  const Profile = employeeProfilePayload.manager
    ? ManagerProfile
    : EmployeeProfile;
  return (
    <Fragment>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Profile} />
        {/*<Route exact path="/#2" component={<div></div>} />*/}
        {/*<Route exact path="home" compoonent={HomePage} />*/}
      </Switch>
    </Fragment>
  );
};

export default App;
