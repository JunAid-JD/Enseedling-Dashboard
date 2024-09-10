import React, { useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";

import FormatAlignLeftOutlinedIcon from "@mui/icons-material/FormatAlignLeftOutlined";
import FormatAlignJustifyOutlinedIcon from "@mui/icons-material/FormatAlignJustifyOutlined";
import FormatAlignRightOutlinedIcon from "@mui/icons-material/FormatAlignRightOutlined";
import FormatUnderlinedOutlinedIcon from "@mui/icons-material/FormatUnderlinedOutlined";
import FormatBoldOutlinedIcon from "@mui/icons-material/FormatBoldOutlined";
import FormatItalicOutlinedIcon from "@mui/icons-material/FormatItalicOutlined";
import Submission from "../Reusable/Submission";
import { Link } from "react-router-dom";

const ManagementProfile = () => {
  const [box, setBox] = useState(false);
  return (
    <>
      {!box ? (
        <div className="Candidate Profile">
          <div className="shortlisthead">
            <div>
              <h3>Candidate Profile</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>
            </div>

            <div className="jobbtn">
              <p className="candidatebtnpara"> Sort By</p>
              <KeyboardArrowDownRoundedIcon />
            </div>
          </div>

          <div className="searchsection">
            <div className="searchinput">
              <span>
                <SearchRoundedIcon />
                <input type="text" placeholder="Type to search" />
              </span>
              <div className="managementassessmentdownload">
                <div className="download">
                  <ReplyRoundedIcon />
                  <p>Share</p>
                </div>
                <div className="download">
                  <FileDownloadOutlinedIcon />
                  <p>Download PDF</p>
                </div>
              </div>
            </div>
          </div>

          <div className="candidateprofilebox">
            <div className="candidateprofileimg">
              <img src="/images/candidateimg.png" alt="candidate" />
            </div>
            <div className="candidateprofiledetail">
              <div className="candidateprofilehead">
                <div className="name">
                  <h1>Bob Ziroll</h1>
                  <p>Web Developer</p>
                </div>
                <div className="social">
                  <img src="/images/profilesocialimg1.png" alt="social" />
                  <img src="/images/profilesocialimg2.png" alt="social" />
                  <img src="/images/profilesocialimg3.png" alt="social" />
                </div>
              </div>
              <div className="candidateprofileaddress">
                <span>
                  <img src="/images/profilemailimg.png" alt="mail" />
                  <p>Shaun.enseedling@gmail.com</p>
                </span>
                <span>
                  <img src="/images/profileidimg.png" alt="mail" />
                  <p>ID#12345678</p>
                </span>
                <span>
                  <img src="/images/profilelocationimg.png" alt="mail" />
                  <p>Islamabad, Pakistan</p>
                </span>
              </div>
              <div className="candidateprofileexperience">
                <div>
                  <h5>Experience</h5>
                  <p>4 years</p>
                </div>
                <div>
                  <h5>Previous Company</h5>
                  <p> Uconnect Technologies</p>
                </div>
                <div>
                  <h5>Hired Rate </h5>
                  <img src="/images/hirerateimg.png" alt="rate" />
                </div>
              </div>
            </div>
          </div>

          <h3>Schedule a Meeting </h3>
          <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>

          <div className="profileform">
            <label htmlFor="">Event Name</label>
            <input
              type="text"
              placeholder="i.e. Interview With Mr Shakeel Akhtar"
            />
            <div className="date">
              <div>
                <label htmlFor="">Date</label>
                <input type="text" placeholder="i.e. June 10, 2023" />
              </div>
              <div>
                <label htmlFor="">Time</label>
                <input type="text" placeholder="i.e. 2:00pm" />
              </div>
              <div>
                <label htmlFor="">Duration</label>
                <input type="text" placeholder="i.e. 1 Hours" />
              </div>
            </div>
            <span className="eventalert">
              This Event will take place on June 10, 2023 at 2:00pm to 3:00pm
            </span>
            <div className="location">
              <input type="text" placeholder="Google meet" />
              <KeyboardArrowDownRoundedIcon />
            </div>

            <div className="addguest">
              <input type="text" placeholder="Enter Email Address" />
              <div className="jobbtn">
                <AddRoundedIcon />
                <p className="candidatebtnpara">Add</p>
              </div>
            </div>
            <div className="guestimg">
              <img src="/images/profilequestimg.png" alt="quest" />
            </div>

            <div>
              <label style={{ padding: "15px 0" }}>Upload Attachment</label>
              <div className="uploadfile">
                <BackupOutlinedIcon />
                <p>
                  Browse and chose the files you want to upload from your
                  computer
                </p>
                <button>
                  <AddRoundedIcon />
                </button>
              </div>
            </div>

            <label style={{ padding: "10px 0 0" }}>Description</label>
            <div className="descriptionbox">
              <div className="descriptionboxheader">
                <div className="descriptionboxicon">
                  <FormatBoldOutlinedIcon />
                  <FormatUnderlinedOutlinedIcon />
                  <FormatItalicOutlinedIcon />
                </div>
                <div className="descriptionboxicon">
                  <FormatAlignLeftOutlinedIcon />
                  <FormatAlignJustifyOutlinedIcon />
                  <FormatAlignRightOutlinedIcon />
                </div>
                <div className="descriptionboxicon">
                  <img src="/images/pencilimg.png" alt="icon" />
                  <img src="/images/rainboimg.png" alt="icon" />
                </div>
              </div>
              <div className="descriptionboxbody">
                <h3>Lorem ipsum dolor sit amet consectetur. Quam sit ac.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Senectus nisi aliquam
                  feugiat pellentesque in viverra habitant. Nisl sapien velit
                  nec eget ipsum. Commodo et proin facilisi in. Et risus euismod
                  convallis tristique mauris feugiat. Eget eget non consequat
                  fames euismod quis vitae. Quisque ornare enim mauris elementum
                  ultrices ullamcorper proin enim. Velit fermentum at dolor
                  aliquam velit. Lectus morbi id turpis vel quisque viverra non.
                  Auctor sed gravida interdum auctor curabitur mi. Dignissim
                  habitant metus.
                </p>
              </div>
            </div>
            <div className="profileformbtns jobpostbtns">
              <Link relative="path" to="..">
                <button>Cancel</button>
              </Link>
              <button className="save" onClick={() => setBox(!box)}>
                Create Event
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Submission
          box={box}
          setBox={setBox}
          heading={"Event Created Successfully"}
        />
      )}
    </>
  );
};

export default ManagementProfile;
