import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const activeStyles = {
  borderBottom: "2px solid #422A90",
  color: "#422A90",
  padding: ".5rem 0",
};

const Setting = () => {
  return (
    <div className="setting">
      <h3>Setting</h3>
      <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>

      <nav>
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Edit Profile
        </NavLink>

        <NavLink
          to="settingpassword"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Password
        </NavLink>

        <NavLink
          to="settingteam"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Team
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Setting;
