import { BookmarkBorder } from "@mui/icons-material";
import React from "react";

const Notification = () => {
  return (
    <div className="notification">
      <div className="notificationbox">
        <div className="notificationhead">
          <h1>Notification</h1>
          <img src="/images/notificationhead.png" alt="noti" />
        </div>
        <div className="notificationstatus">
          <div>
            <p style={{ color: "black" }}>Read</p>
            <div className="box darkblue">3</div>
          </div>
          <div>
            <p>Unread</p>
            <div className="box">3</div>
          </div>
          <div>
            <p>Archive</p>
            <div className="box">3</div>
          </div>
        </div>

        <div className="notificationuser">
          <img src="/images/notificationboximg.png" alt="notific" />
          <div>
            <h1>Lorem ipsum dolor sit amet consectetur. </h1>
            <p>
              Today 12:00 am | <BookmarkBorder style={{ height: "12px" }} />
            </p>
          </div>
        </div>
        <div className="notificationuser">
          <img src="/images/notificationboximg.png" alt="notific" />
          <div>
            <h1>Lorem ipsum dolor sit amet consectetur. </h1>
            <p>
              Today 12:00 am | <BookmarkBorder style={{ height: "12px" }} />
            </p>
          </div>
        </div>
        <div className="notificationuser">
          <img src="/images/notificationboximg.png" alt="notific" />
          <div>
            <h1>Lorem ipsum dolor sit amet consectetur. </h1>
            <p>
              Today 12:00 am | <BookmarkBorder style={{ height: "12px" }} />
            </p>
          </div>
        </div>
        <div className="notificationuser">
          <img src="/images/notificationboximg.png" alt="notific" />
          <div>
            <h1>Lorem ipsum dolor sit amet consectetur. </h1>
            <p>
              Today 12:00 am | <BookmarkBorder style={{ height: "12px" }} />
            </p>
          </div>
        </div>
        <div className="notificationuser">
          <img src="/images/notificationboximg.png" alt="notific" />
          <div>
            <h1>Lorem ipsum dolor sit amet consectetur. </h1>
            <p>
              Today 12:00 am | <BookmarkBorder style={{ height: "12px" }} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
