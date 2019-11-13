import React from "react";
import employeeProfilePayload from "../mockData/employeeProfile"

const AdminPage = () => {
    const employees = [employeeProfilePayload, employeeProfilePayload]

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
              {employees.map(e => {
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
