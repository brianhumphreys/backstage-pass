import axios from "axios";
import React, { useState, useEffect } from "react";
import GitHubProfile from './GitHubProfile';
const GitHubBlock = ({defaultGitHubUserName}) => {
  const [gitHubData, updateGitHubData] = useState();
  const [gitHubUserName, setGitHubUserName] = useState(defaultGitHubUserName);

  const updateGitHubUserName = (event) => {
    event.preventDefault()
    setGitHubUserName(event.target.gitHubName.value)
  }

  useEffect(() => {
    axios
     .get(`https://api.github.com/users/${gitHubUserName}`)
     .then(({ data }) => {
       console.log('we did it')
       updateGitHubData(data)
       console.log(data)
     }).catch((e) => {
       updateGitHubData({})
     });
  }, [gitHubUserName]);
  return (
      <div className="tweets block">
          <h2 className="titular">
              <span className="icon zocial-GitHubBlock"></span>GitHub
          </h2>
          <div className="tweet first">
            {gitHubUserName && gitHubData.login ? <GitHubProfile gitHubData={gitHubData} /> :
              <form onSubmit={updateGitHubUserName}>
                Add your gihub Profile
                <input type="text" name="gitHubName"></input>
                <input type="submit"/>
              </form>}
          </div>
          <div className="tweet">
              <p>
                  We are in the process of pushing out all of the new CC apps!
                  We will tweet again once they are live{" "}
                  <a className="tweet-link" href="#19">
                      #CreativeCloud
                  </a>
              </p>
              <p>
                  <a className="scnd-font-color" href="#20">
                      6 hours ago
                  </a>
              </p>
          </div>
      </div>
  );
};
export default GitHubBlock;
