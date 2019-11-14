import React, {Fragment} from "react";
import {Route, Switch} from "react-router-dom";
import "./App.css";
import {getSignedInUser} from './store/storeFunctions';
import ManagerProfile from "./containers/ManagerProfile";
import EmployeeProfile from "./containers/EmployeeProfile";

import AdminPage from "./containers/AdminPage";
import NavigationBar from "./containers/Navigation";
import InitiativePage from "./containers/InitiativePage";
import SkillsWorkoutPage from "./containers/SkillsWorkoutPage";
import InitiativeListPage from "./containers/InititiveListPage";
import EmployeeSearchPage from "./containers/EmployeeSearchPage";

const App = () => {
  const userData = getSignedInUser();
  const Profile = userData.isManager
    ? () => ManagerProfile()
    : () => EmployeeProfile();
  return (
    <Fragment>
      <NavigationBar gravatar={userData.picture} />
      <Switch>
        <Route exact path="/accounts/:id" component={Profile} />
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
