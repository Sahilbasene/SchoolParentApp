
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
 
export default function () {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
 
  // Function to determine if current page is ParentDashboard
  const isParentDashboard = location.pathname === "/ParentDashboard";
 
  return (
    <nav>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/holidayList" activeClassName="active">
            Holiday List
          </NavLink>
        </li>
        <li>
          <NavLink to="/feeDetails" activeClassName="active">
            FeeDetails
          </NavLink>
        </li>
        {isParentDashboard && ( // Only show "Circular" link on ParentDashboard page
          <li>
            <NavLink to="/circular" activeClassName="active">
              Circular
            </NavLink>
          </li>
        )}
      </ul>
      {/* <ul>
        <li>
          <NavLink to="/register" activeClassName="active">
            Register
          </NavLink>
        </li>
      </ul> */}
    </nav>
  );
}
 