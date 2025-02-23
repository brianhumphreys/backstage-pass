import React from "react";

const InitiativeBlock = ({ account }) => {
  return (
    <div className="profile block">
      <a className="add-button">
        <span className="icon entypo-plus scnd-font-color"></span>
      </a>
      <div className="profile-picture big-profile-picture clear">
        <img
          width="150px"
          alt="Anne Hathaway picture"
          src={account.imageUrl}
        />
      </div>
      <h1 className="user-name">{account.name}</h1>
      <div className="profile-description">
        <p className="scnd-font-color">{account.bio}</p>
      </div>
      <ul className="profile-options horizontal-list">
        <li>
          <a className="comments">
            <p>
              <span className="icon fontawesome-comment-alt scnd-font-color"></span>
              23
            </p>
          </a>
        </li>
        <li>
          <a className="views">
            <p>
              <span className="icon fontawesome-eye-open scnd-font-color"></span>
              841
            </p>
          </a>
        </li>
        <li>
          <a className="likes">
            <p>
              <span className="icon fontawesome-heart-empty scnd-font-color"></span>
              49
            </p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default InitiativeBlock;
