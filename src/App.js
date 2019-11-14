import React, {Fragment} from "react";
import {Route, Switch} from "react-router-dom";
import "./App.css";
import {getSignedInUser} from './store/storeFunctions';
import EmployeeProfile from "./containers/EmployeeProfile";
import LoginPage from "./containers/LoginPage/LoginPage";

import AdminPage from "./containers/AdminPage";
import NavigationBar from "./containers/Navigation";
import InitiativePage from "./containers/InitiativePage";
import SkillsWorkoutPage from "./containers/SkillsWorkoutPage";
import InitiativeListPage from "./containers/InititiveListPage";
import EmployeeSearchPage from "./containers/EmployeeSearchPage";
import {getEmployees} from "./store/storeFunctions";

const App = () => {
  getEmployees();
  const userData = getSignedInUser();
  return (
    <Fragment>
      {window.location.pathname === '/' ? null : <NavigationBar gravatar={userData.picture} />}
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/accounts/:id" component={EmployeeProfile} />
        <Route exact path="/accounts" component={EmployeeSearchPage}/>
        <Route exact path="/admin" component={AdminPage} />
        <Route exact path="/skillflex" component={SkillsWorkoutPage}/>
        <Route
          exact
          path="/initiatives"
          component={InitiativeListPage}
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
