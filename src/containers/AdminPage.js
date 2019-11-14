import React from "react";
import { getEmployees} from "../store/storeFunctions";

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
                              <strong>{87}</strong>
                          </td>
                          <td>
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
