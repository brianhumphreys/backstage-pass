import React, { useEffect } from "react";
import "./LoginPage.css";
import {signInUser} from '../../store/storeFunctions';

const LoginPage = () => {
  return (
    <div className="signInContainer">
      <div className="frame">
        <div className="nav">
          <ul className="links">
            <li className="signin-active credentialLink"><a className="btn">Sign in</a></li>
            <li className="signup-inactive credentialLink"><a className="btn">Sign up </a></li>
          </ul>
        </div>
      <div ng-app ng-init="checked = false">
  			<form className="form-signin" action="" method="post" name="form" onSubmit={signInUser}>
          <label for="username">Username</label>
          <input className="form-styling" type="text" name="username" placeholder=""/>
          <label for="password">Password</label>
          <input className="form-styling" type="text" name="password" placeholder=""/>
          <input type="checkbox" id="checkbox"/>
          <label for="checkbox" ><span className="ui"></span>Keep me signed in</label>
          <div className="btn-animate">
            <input className="btn-signin" value="Sign in" type="submit"/>
          </div>
  			</form>
        <div>
          <div className="cover-photo"></div>
          <div className="profile-photo"></div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default LoginPage;
