import axios from "axios";
import React, { useState, useEffect } from "react";
import GitHubProfile from "./GitHubProfile";
const GitHubBlock = ({ defaultGitHubUserName }) => {
  const [gitHubData, updateGitHubData] = useState();
  const [gitHubUserName, setGitHubUserName] = useState(defaultGitHubUserName);

  const updateGitHubUserName = event => {
    event.preventDefault();
    setGitHubUserName(event.target.gitHubName.value);
  };

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${gitHubUserName}`)
      .then(({ data }) => {
        updateGitHubData(data);
      })
      .catch(e => {
        updateGitHubData({});
      });
  }, [gitHubUserName]);
  return (
    <div className="tweets block">
      <h2 className="titular">
        <span className="icon zocial-GitHubBlock"></span>GitHub
      </h2>
      <div className="tweet first">
        {gitHubUserName && gitHubData.login ? (
          <GitHubProfile gitHubData={gitHubData} />
        ) : (
          <div className="input-container">
            <form onSubmit={updateGitHubUserName}>
              <input
                type="text"
                name="gitHubName"
                placeholder="Add your gihub Profile"
              />
              <div className="input-icon envelope-icon-acount">
                <span className="fontawesome-envelope scnd-font-color"></span>
              </div>
              <input type="submit" className="subscribe button" />
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
export default GitHubBlock;
