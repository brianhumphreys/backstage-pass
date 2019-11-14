import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import EmployeeProfile from "./containers/EmployeeProfile";
import ManagerProfile from "./containers/ManagerProfile";
import NavigationBar from "./containers/Navigation";
import employeeProfilePayload from "./mockData/employeeProfile";
import userList from "./mockData/userList";
import initiatives from "./mockData/initiativeList";
import InitiativePage from "./containers/InitiativePage";
import InitiativeListPage from "./containers/InititiveListPage";

import AdminPage from "./containers/AdminPage";
const getUser = (userId) => {
  // userList.filter((user) => user.id === userId)[0]
  return userList[0]
};

const App = () => {
  // const userId = parseInt(window.location.pathname.split('/')[window.location.pathname.split('/').length - 1], 10);
  const userData = getUser(0)
  const Profile = employeeProfilePayload.employee.manager
  ? () => ManagerProfile({userData: userData})
  : () => EmployeeProfile({userData: userData});
  return (
    <Fragment>
      <NavigationBar gravatar={userData.gravatar}/>
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route path="/admin" component={AdminPage} />
        <Route exact path="/initiatives" component={() => InitiativeListPage(initiatives)} />
        <Route exact path="/initiatives/:initiative" component={InitiativePage} />
      </Switch>
    </Fragment>
  );
};

export default App;
