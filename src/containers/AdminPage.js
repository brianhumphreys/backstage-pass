import React from "react";
import { getEmployees} from "../store/storeFunctions";

const getScore = (employee) =>{
    return employee.skills.map(skill => skill.level).reduce((a, b) => a + b, 0)
}

const compare = (employee1, employee2) => {

 const score1 = employee1.props.children[3].props.children.props.children
 const score2 = employee2.props.children[3].props.children.props.children

     if (score1 === score2){
         return 0
     }else if (score1 > score2){
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
                  {getEmployees().map(e => {
                      return <tr className="admin-table-row">
                          <td>
                              {e.name}
                          </td>
                          <td>
                              {e.email}
                          </td>
                          <td>
                              {e.about}
                          </td>
                          <td>
                              <strong>{getScore(e)}</strong>
                          </td>
                          <td>
                              <button className="button" onClick={() => window.open(`mailto:test@${e.email}`)}>I'm Interested!</button>
                          </td>
                      </tr>
                  }).sort(compare)}

                  </tbody>
              </table>
          </div>
      </div>
  );
};
export default AdminPage;
