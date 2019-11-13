import axios from "axios";
import React, { useState, useEffect } from "react";
import GitHubProfile from './GitHubProfile';

// fetchGitHubData = (userName) => {
//   axios
//    .get("https://api.github.com/users/jab115")
//    .then(({ data }) => {
//      console.log('we did it')
//      // updateGitHubData(data)
//      return data
//    }).catch((e) => {
//      return {};
//      // updateGitHubData({})
//    });
// }
const GitHubBlock = ({gitHubUserName}) => {
  const [gitHubData, updateGitHubData] = useState();
  // const [ newTodoLabel, setNewTodoLabel] = useState("");

  useEffect(() => {
    axios
     .get(`https://api.github.com/users/jab115`)
     .then(({ data }) => {
       console.log('we did it')
       updateGitHubData(data)
       console.log(data)
     }).catch((e) => {
       updateGitHubData({})
     });
    // let data = fetchGitHubData(gitHubUserName)
    // console.log(data, '(((((((((((())))))))))))')
    // updateGitHubData(data)
  }, []);
  return (
      <div className="tweets block">
          <h2 className="titular">
              <span className="icon zocial-GitHubBlock"></span>GitHub
          </h2>
          <div className="tweet first">
            {gitHubData && gitHubData.login ? <GitHubProfile gitHubData={gitHubData} /> : <form onSubmit={console.log('yo')}>Add your gihub Profile</form>}
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
