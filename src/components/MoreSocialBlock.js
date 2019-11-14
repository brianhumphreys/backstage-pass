import React from "react";

const MoreSocialBlock = () => {
  return (
      <ul className="social block">
          <li>
              <a>
                  <div className="facebook icon">
                      <span className="zocial-facebook"></span>
                  </div>
                  <h2 className="facebook titular">SHARE TO FACEBOOK</h2>
              </a>
          </li>
          <li>
              <a>
                  <div className="twitter icon">
                      <span className="zocial-twitter"></span>
                  </div>
                  <h2 className="twitter titular">SHARE TO TWITTER</h2>
              </a>
          </li>
          <li>
              <a>
                  <div className="googleplus icon">
                      <span className="zocial-googleplus"></span>
                  </div>
                  <h2 className="googleplus titular">SHARE TO GOOGLE+</h2>
              </a>
          </li>
      </ul>

  );
};
export default MoreSocialBlock;
