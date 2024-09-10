import { CloudUploadOutlined } from "@mui/icons-material";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const activeStyles = {
  borderBottom: "2px solid #422A90",
  color: "#422A90",
  padding: ".5rem 0",
};

const Interns = () => {
  return (
    <div className="interns">
      <div className="internhead">
        <div>
          <h3>Hiring Management</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>
        </div>
        <div className="jobbtn">
          <CloudUploadOutlined />
          <p className="candidatebtnpara"> Upload</p>
        </div>
      </div>

      <nav>
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Attendance Submission
        </NavLink>

        <NavLink
          to="internslip"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Stipend Slip
        </NavLink>

        <NavLink
          to="internsfeedback"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Performance Feedback
        </NavLink>
        <NavLink
          to="internsoffer"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Offer Letter
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Interns;
