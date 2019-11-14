import React from 'react';

const MenuBlock = () => {
  return (
    <div className="menu-box block">
      <h2 className="titular">MENU BOX</h2>
      <ul className="menu-box-menu">
        <li>
          <a className="menu-box-tab">
            <span className="icon fontawesome-envelope scnd-font-color"></span>
            Messages<div className="menu-box-number">24</div>
          </a>
        </li>
        <li>
          <a className="menu-box-tab">
            <span className="icon entypo-paper-plane scnd-font-color"></span>
            Invites<div className="menu-box-number">3</div>
          </a>
        </li>
        <li>
          <a className="menu-box-tab">
            <span className="icon entypo-calendar scnd-font-color"></span>
            Events<div className="menu-box-number">5</div>
          </a>
        </li>
        <li>
          <a className="menu-box-tab">
            <span className="icon entypo-cog scnd-font-color"></span>
            Account Settings
          </a>
        </li>
        <li>
          <a className="menu-box-tab">
            <span className="icon entypo-chart-line scnd-font-color"></span>
            Statistics
          </a>
        </li>
      </ul>
    </div>
  );
};
export default MenuBlock;