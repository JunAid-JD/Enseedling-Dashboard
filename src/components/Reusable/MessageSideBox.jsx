import React from "react";

const MessageSideBox = ({ text, img }) => {
  return (
    <div className="messagesidebox">
      <div className="messagesideboximg">
        <img src="/images/messagesidebarimg.png" alt="pogo" />
      </div>
      <div className="messagesideboxcontent">
        <div className="name">
          <h3>Bob Ziroll</h3>
          <p>{text}</p>
        </div>
        <div className="time">
          <p>12:36am</p>
          {img && <img src={img} alt="number" />}
        </div>
      </div>
    </div>
  );
};

export default MessageSideBox;
