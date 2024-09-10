import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PlagiarismOutlinedIcon from "@mui/icons-material/PlagiarismOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import SavedSearchOutlinedIcon from "@mui/icons-material/SavedSearchOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Logout from "./Logout/Logout";

const NavSidebar = ({ logout, Setlogout }) => {
  const [Page, setPage] = useState("Home");
  const handlePageBtn = (button) => {
    setPage(button);
  };
  return (
    <div className="navsidebar">
      <nav>
        <ul>
          <NavLink exact to="/">
            <li
              onClick={() => handlePageBtn("Home")}
              className={Page === "Home" ? "activeList" : ""}
            >
              <HomeOutlinedIcon />
              <p>Home</p>
            </li>
          </NavLink>
          <NavLink exact to="/profile">
            <li
              onClick={() => handlePageBtn("Profile")}
              className={Page === "Profile" ? "activeList" : ""}
            >
              <PeopleAltOutlinedIcon />
              <p>Profile</p>
            </li>
          </NavLink>
          <NavLink exact to="/kyc">
            <li
              onClick={() => handlePageBtn("KYC")}
              className={Page === "KYC" ? "activeList" : ""}
            >
              <PermIdentityOutlinedIcon />
              <p>KYC</p>
            </li>
          </NavLink>
          <NavLink exact to="/jobs">
            <li
              onClick={() => handlePageBtn("Job")}
              className={Page === "Job" ? "activeList" : ""}
            >
              <SchoolOutlinedIcon />
              <p>Job's</p>
            </li>
          </NavLink>
          <NavLink exact to="/assessments">
            <li
              onClick={() => handlePageBtn("Assessments")}
              className={Page === "Assessments" ? "activeList" : ""}
            >
              <PlagiarismOutlinedIcon />
              <p>Assessments</p>
            </li>
          </NavLink>
          <NavLink exact to="/candidates">
            <li
              onClick={() => handlePageBtn("Candidates")}
              className={Page === "Candidates" ? "activeList" : ""}
            >
              <CheckCircleOutlinedIcon />
              <p>Applied Candidates</p>
            </li>
          </NavLink>
          <NavLink exact to="/management">
            <li
              onClick={() => handlePageBtn("Management")}
              className={Page === "Management" ? "activeList" : ""}
            >
              <SavedSearchOutlinedIcon />
              <p>Hiring Management</p>
            </li>
          </NavLink>
          <NavLink exact to="/interns">
            <li
              onClick={() => handlePageBtn("Interns")}
              className={Page === "Interns" ? "activeList" : ""}
            >
              <BusinessCenterOutlinedIcon />
              <p>Interns Management</p>
            </li>
          </NavLink>
          <NavLink exact to="/payment">
            <li
              onClick={() => handlePageBtn("Payment")}
              className={Page === "Payment" ? "activeList" : ""}
            >
              <MonetizationOnOutlinedIcon />
              <p>Payment</p>
            </li>
          </NavLink>
        </ul>
      </nav>
      <div className="logout">
        <ul>
          <NavLink exact to="/setting">
            <li
              onClick={() => handlePageBtn("Settings")}
              className={Page === "Settings" ? "activeList" : ""}
            >
              <SettingsOutlinedIcon />
              <p>Settings</p>
            </li>
          </NavLink>
          <li className="logoutActive" onClick={() => Setlogout(!logout)}>
            <LogoutOutlinedIcon />
            <p>Logout</p>
          </li>
        </ul>
        {logout && <Logout logout={logout} Setlogout={Setlogout} />}
      </div>
    </div>
  );
};

export default NavSidebar;
