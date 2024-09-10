import { MoreVert, SearchOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import MessageSideBox from "../Reusable/MessageSideBox";

const Message = () => {
  return (
    <div className="message">
      <div className="messagesidebar">
        <h3>Messages</h3>
        <div className="messagesearchbox">
          <IconButton>
            <SearchOutlined className="searchicon" />
          </IconButton>
          <input type="text" placeholder="Type to Search" />
        </div>

        <MessageSideBox
          text={"Typing.."}
          img={"/images/messagesidebarnumber.png"}
        />
        <MessageSideBox text={"Lorem ipsum dolor sit"} />
        <MessageSideBox text={"Lorem ipsum dolor sit"} />
        <MessageSideBox text={"Lorem ipsum dolor sit"} />
        <MessageSideBox text={"Lorem ipsum dolor sit"} />
        <MessageSideBox text={"Lorem ipsum dolor sit"} />
        <MessageSideBox text={"Lorem ipsum dolor sit"} />
      </div>
      <div className="messagebody">
        <div className="messageheader">
          <div className="messageheaderuser">
            <img src="/images/messageuserimg.png" alt="user" />
            <div>
              <h3>Bob Ziroll</h3>
              <p>Typing..</p>
            </div>
          </div>
          <div className="messageheadericon">
            <img src="/images/phoneimg.png" alt="phone" />
            <img src="/images/videoimg.png" alt="phone" />
          </div>
        </div>
        <div className="messagecontent">
          <div className="user">
            <img src="/images/messageuserimg.png" alt="user" />
            <div className="usertime">
              <h3>Bob Ziroll</h3>
              <p>12:00pm</p>
            </div>
          </div>

          <div className="message">
            <div className="text">Lorem ipsum dolor sit amet consectetur. </div>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
          <div className="message">
            <div className="text">Lorem ipsum dolor sit amet consectetur. </div>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>

          <div className="timeline">
            <span className="line"></span>
            <p>Today July 03, 2023</p>
            <span className="line"></span>
          </div>

          <div className="user">
            <img src="/images/messageuserimg.png" alt="user" />
            <div className="usertime">
              <h3>Bob Ziroll</h3>
              <p>6:00pm</p>
            </div>
          </div>

          <div className="message">
            <div className="text">Lorem ipsum dolor sit amet consectetur. </div>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
          <div className="message">
            <div className="text">Lorem ipsum dolor sit amet consectetur. </div>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>

          <div className="user">
            <img src="/images/messageuserimg.png" alt="user" />
            <div className="usertime">
              <h3>Bob Ziroll</h3>
              <p>10:00pm</p>
            </div>
          </div>

          <div className="message">
            <div className="text">Lorem ipsum dolor sit amet consectetur. </div>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>
        <div className="messagefooter">
          <div className="messageinput">
            <div className="messageinputleft">
              <img src="/images/micimg.png" alt="min" />
              <input type="text" placeholder="Text Type Here..." />
            </div>
            <div className="messageinputright">
              <img src="/images/pinimg.png" alt="min" />
              <img src="/images/galleryimg.png" alt="min" />
              <img src="/images/emoji.png" alt="min" />
              <img src="/images/telegramimg.png" alt="min" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
