import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="wrapper">
      <aside className="sidebar">
        <ul className="nav-title">
          <li className="nav-header">
            <Link to="/">
              <span className="text">F.</span>
            </Link>
          </li>
        </ul>
        <ul className="nav-list">
          <li className="nav-item">
            <i className="icon ri-home-6-line "></i>
          </li>
          <li className="nav-item">
            <i className="icon ri-book-open-fill"></i>
          </li>
          <li className="nav-item">
            <i className="icon ri-message-2-line"></i>
          </li>
          <li className="nav-item">
            <i className="icon ri-profile-fill"></i>
          </li>
          <li className="nav-item">
            <i className="icon ri-settings-3-fill"></i>
          </li>
        </ul>
        <div className="nav-end"></div>
        <ul className="nav-list nav-bottom">
          <li className="nav-item">
            <i className="icon ri-login-box-line"></i>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Navbar;
