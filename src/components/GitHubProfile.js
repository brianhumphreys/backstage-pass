import React from "react";
import { Link } from "react-router-dom";

const GitHubProfile = ({ gitHubData }) => {
  console.log("we made it", gitHubData);
  return (
    <a href={"https://github.com/" + gitHubData.githubHandle}>
      <div className="header-menu-tab">
        <div>
          <span className="scnd-font-color"></span>
          {gitHubData.githubHandle}
        </div>
        <div>
          <span className="icon fontawesome-star-empty scnd-font-color"></span>
          {gitHubData.repositories} Repositories
        </div>
      </div>

    </a>
  );
};
export default GitHubProfile;
