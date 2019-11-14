import React from "react";
import { getEmployees} from "../store/storeFunctions";

const AdminPage = () => {

    return (
      <div className="account block">
          Here is my admin page

          <table >
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
                  return <tr>
                      <td>
                          {e.employee.name}
                      </td>
                      <td>
                          {e.employee.email}
                      </td>
                      <td>
                          {e.employee.bio}
                      </td>
                      <td>
                          {87}
                      </td>
                      <td>
                          <a>Send Email</a>
                      </td>
                  </tr>
              })}

              </tbody>
          </table>
      </div>
  );
};
export default AdminPage;
