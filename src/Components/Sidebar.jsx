import React from "react";
import { NavLink } from "react-router-dom";
const SideNavbar = () => {
  return (
    <nav className="SideNavbar">
      <ul>
        <li>
          <NavLink to="/contacts" activeClassName="active">
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink to="/" activeClassName="active">
            Charts &amp; Map
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavbar;
