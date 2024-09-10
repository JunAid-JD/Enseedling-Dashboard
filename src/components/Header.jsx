import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Badge, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import Notification from "./Notification/Notification";

const Header = () => {
  const [notification, setNotification] = useState(false);
  return (
    <header>
      <div className="headerlogo">
        {/* <img src="./images/enseedlingLogo.png" alt="logo" /> */}
        <img src="/images/Logo.png" alt="logo" />
      </div>
      <div className="searchbox">
        <IconButton>
          <SearchOutlinedIcon className="searchicon" />
        </IconButton>
        <input type="text" placeholder="Type to Search" />
      </div>
      <div className="headersetting">
        {/* <IconButton>
          <MailOutlineOutlinedIcon />
        </IconButton> */}

        <Link to="/message">
          <IconButton>
            <Badge badgeContent={2} color="primary">
              <MailOutlineOutlinedIcon />
            </Badge>
          </IconButton>
        </Link>
        {/* <Link to="/notification"> */}
        <IconButton onClick={() => setNotification(!notification)}>
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        {/* </Link> */}
        {notification && <Notification />}
        <div className="headeruser">
          <img src="./images/headerUserImg.png" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
