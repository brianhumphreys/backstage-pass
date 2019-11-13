import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import EmployeeProfile from "./containers/EmployeeProfile";
import ManagerProfile from "./containers/ManagerProfile";
import NavigationBar from "./containers/Navigation";
import employeeProfilePayload from "./mockData/employeeProfile";
import InitiativePage from "./containers/InitiativePage";
import InitiativeListPage from "./containers/InititiveListPage";

import AdminPage from "./containers/AdminPage";

const App = () => {
  const Profile = employeeProfilePayload.employee.manager
    ? ManagerProfile
    : EmployeeProfile;

  return (
    <Fragment>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route path="/initiatives" component={InitiativeListPage} />
        <Route path="/admin" component={AdminPage} />
        <Route exact path="/initiatives" component={InitiativeListPage} />
        <Route path="/initiatives/:initiative" component={InitiativePage} />
      </Switch>
    </Fragment>
  );
};

export default App;
