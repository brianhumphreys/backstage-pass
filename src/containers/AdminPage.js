import React from "react";
import { getEmployees} from "../store/storeFunctions";

const getScore = (employee) =>{
    const github = employee && employee.github && 10;
    console.log(github);
    return employee.skills.map(skill => skill.level).reduce((a, b) => a + b, 0);
}

const compare = (employee1, employee2) => {

    const score1 = getScore(employee1);
    const score2 = getScore(employee2);

     if (score1 === score2){
         return 0
     }
     else if (score1 > score2){
         return -1
     } else {
         return 1
     }
}

const AdminPage = () => {

    return (
      <div className="admin-table-container">
          <div className="admin-table">
              <table className="table">
                  <thead >
                  <tr>
                      <th>Name</th>
                      <th>E-mail</th>
                      <th>Bio</th>
                      <th>Rank</th>
                      <th>Contact</th>
                  </tr>
                  </thead>
                  <tbody>
                  {getEmployees().sort(compare).map((e, i) => {
                      console.error("=============>", getScore(e));
                      return <tr className="admin-table-row">
                          <td align="center">
                              {e.name}
                          </td>
                          <td align="center">
                              {e.email}
                          </td>
                          <td align="center">
                              {e.about}
                          </td>
                          <td align="center" >
                              <strong>{i+1}</strong>
                          </td>
                          <td align="center">
                              <button className="button" onClick={() => window.open(`mailto:test@${e.email}`)}>I'm Interested!</button>
                          </td>
                      </tr>
                  })}
                  </tbody>
              </table>
          </div>
      </div>
  );
};
export default AdminPage;
