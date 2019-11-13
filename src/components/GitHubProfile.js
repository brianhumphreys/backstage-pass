import React from "react";

const GitHubProfile = ({gitHubData}) => {
  return (
    <div className="icon fontawesome-heart-empty scnd-font-color">
      <div>
        UserName: {gitHubData.login}
      </div>
      <div>
        Name: {gitHubData.name}
      </div>
      <div>
        Repositories: {gitHubData.public_repos}
      </div>
      <div>
        <a className="" href={'https://github.com/' + gitHubData.login}
          target="_blank">
          View Profile
        </a>
      </div>
    </div>
  );
}
export default GitHubProfile;
