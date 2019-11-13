import React from 'react';
import employeeProfilePayload from "../mockData/employeeProfile";

const EmailBlock = () => {
    const openEmail = () => {
        window.open(`mailto:${employeeProfilePayload.employee.email}`);
    };

    return  (
        <div className="join-newsletter block">
            <h2 className="titular">Email This Employee at {employeeProfilePayload.employee.email}</h2>
            <div className="input-container">
                <div className="input-icon envelope-icon-newsletter">
                    <span className="fontawesome-envelope scnd-font-color"></span>
                </div>
            </div>
            <a className="subscribe button" href="#21" onClick={openEmail}>
                EMAIL
            </a>
        </div>
    );
};

export default EmailBlock;