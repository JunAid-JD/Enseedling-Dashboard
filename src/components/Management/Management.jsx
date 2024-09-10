import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const activeStyles = {
  borderBottom: "2px solid #422A90",
  color: "#422A90",
  padding: ".5rem 0",
};

const Management = () => {
  return (
    <div className="management">
      <h3>Hiring Management</h3>
      <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>

      <nav>
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          AI Resume Filter
        </NavLink>

        <NavLink
          to="managementassessment"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Assessment Accepted
        </NavLink>

        <NavLink
          to="managementshortlist"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Shortlisted Candidate
        </NavLink>
        <NavLink
          to="managementinterview"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Interview
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Management;
