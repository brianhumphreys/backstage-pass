import React from 'react';
import { getSignedInUser } from "../store/storeFunctions";

const EmailBlock = () => {

    const openEmail = () => {
        window.open(`mailto:${getSignedInUser().email}`);
    };

    return  (
        <div className="join-newsletter block">
            <h2 className="titular">Email This Employee at {getSignedInUser().email}</h2>
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