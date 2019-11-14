import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import EmployeeProfile from "./containers/EmployeeProfile";
import ManagerProfile from "./containers/ManagerProfile";
import NavigationBar from "./containers/Navigation";
import employees from "./mockData/employees";
import userList from "./mockData/userList";
import initiatives from "./mockData/initiatives";
import InitiativePage from "./containers/InitiativePage";
import InitiativeListPage from "./containers/InititiveListPage";

import AdminPage from "./containers/AdminPage";
const getUser = userId => {
  const user = employees[employees.findIndex(user => user.index === userId)];
  console.log(user);
  localStorage.setItem("loggedInUser", JSON.stringify(user));
  return user;
};

const App = () => {
  const user = getUser(0);
  localStorage.setItem("employees", JSON.stringify(employees));


  let loggedInUserString = localStorage.getItem("loggedInUser");
  let userData;

  const userId = parseInt(
    window.location.pathname.split("/")[
      window.location.pathname.split("/").length - 1
    ],
    10
  );
  const noUserId = Object.is(NaN, userId);

  if (noUserId) {
    userData = loggedInUserString ? JSON.parse(loggedInUserString) : getUser(0);
  } else {
    userData = getUser(userId);
  }

  const Profile = user.isManager
    ? () => ManagerProfile({ userData: userData })
    : () => EmployeeProfile({ userData: userData });
  return (
    <Fragment>
      <NavigationBar gravatar={userData.gravatar} />
      <Switch>
        <Route path="/:id?" component={Profile} />
        <Route path="/admin" component={AdminPage} />
        <Route
          exact
          path="/initiatives"
          component={() => InitiativeListPage(initiatives)}
        />
        <Route
          exact
          path="/initiatives/:initiative"
          component={InitiativePage}
        />
      </Switch>
    </Fragment>
  );
};

export default App;
