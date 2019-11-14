import React from "react";
import {Link} from 'react-router-dom';
import InitiativeBlock from "../components/InitiativeBlock";
import {getInitiatives} from "../store/storeFunctions";

const InitiativeListPage = () => {
  const initiatives = getInitiatives();
  return (
    <body>
      <div className="main-container">
        <div className="left-container container">
          {initiatives.map((initiative, i) => {
            if (i % 3 === 0) {
              return <Link key={i} to={`initiatives/${initiative.path}`}>
                  <InitiativeBlock account={initiative}/>
              </Link>
            }
            return null;
          })}
        </div>
        <div className="middle-container container">
          {initiatives.map((initiative, i) => {
            if (i % 3 === 1) {
              return <Link key={i} to={`initiatives/${initiative.path}`}>
                  <InitiativeBlock account={initiative}/>
              </Link>
            }
            return null;
          })}
        </div>
        <div className="right-container container">
          {initiatives.map((initiative, i) => {
            if (i % 3 === 2) {
              return <Link key={i} to={`initiatives/${initiative.path}`}>
                  <InitiativeBlock account={initiative}/>
              </Link>
            }
            return null;
          })}
        </div>
      </div>
    </body>
  );
};

export default InitiativeListPage;
