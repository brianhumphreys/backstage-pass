import React, { Fragment } from "react";
import { Switch, Route } from 'react-router-dom'
import "./App.css";
import EmployeeProfile from "./containers/EmployeeProfile";
import NavigationBar from "./containers/Navigation";

const App = () => {
  return (
    <Fragment>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={EmployeeProfile} />
        <Route exact path="/#2" component={<div></div>}/>
      </Switch>
    </Fragment>
  );
};

export default App;
