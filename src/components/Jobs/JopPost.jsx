import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import FormatAlignLeftOutlinedIcon from "@mui/icons-material/FormatAlignLeftOutlined";
import FormatAlignJustifyOutlinedIcon from "@mui/icons-material/FormatAlignJustifyOutlined";
import FormatAlignRightOutlinedIcon from "@mui/icons-material/FormatAlignRightOutlined";
import FormatUnderlinedOutlinedIcon from "@mui/icons-material/FormatUnderlinedOutlined";
import FormatBoldOutlinedIcon from "@mui/icons-material/FormatBoldOutlined";
import FormatItalicOutlinedIcon from "@mui/icons-material/FormatItalicOutlined";
import { Link } from "react-router-dom";

const JopPost = () => {
  return (
    <div className="jobs">
      <div>
        <h3>Post a Job</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>
      </div>

      <div className="searchinput">
        <span>
          <SearchRoundedIcon />
          <input type="text" placeholder="Type to search" />
        </span>
      </div>

      <div className="jobpostform">
        <h3>Post a Job</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>
        <h3>Job Details</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>
        <form action="">
          <label htmlFor="">Job Title</label>
          <input type="text" placeholder="i.e. Sr. UX UI Designer" />
          <label htmlFor="">Job Location</label>
          <input type="text" placeholder="i.e. Islamabad, Pakistan" />

          <div className="jobtypes">
            <div>
              <label htmlFor="">Job Type</label>
              <div className="jobtype">
                <input type="text" placeholder="i.e. Freelance" />
                <KeyboardArrowDownRoundedIcon />
              </div>
            </div>
            <div>
              <label htmlFor="">Employment type</label>
              <div className="jobtype">
                <input type="text" placeholder="ii.e. Full Time" />
                <KeyboardArrowDownRoundedIcon />
              </div>
            </div>
            <div>
              <label htmlFor="">Creative Fields</label>
              <div className="jobtype">
                <input type="text" placeholder="web designer" />
                <KeyboardArrowDownRoundedIcon />
              </div>
            </div>
          </div>
          <h3>Salary</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>

          <div className="pricesection">
            <div>
              <label htmlFor="">Fixed Price</label>
              <div className="pricetype">
                <input type="text" placeholder="i.e. $1000" />
                <span>
                  <p>USD</p> <KeyboardArrowDownRoundedIcon />
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="">Price Per Hour</label>
              <div className="pricetype">
                <input type="text" placeholder="i.e. $1000" />
                <span>
                  <p>USD</p> <KeyboardArrowDownRoundedIcon />
                </span>
              </div>
            </div>
          </div>
          <h3>Public Post</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>

          <div className="descriptionsection">
            <label htmlFor="">Short Description</label>
            <input
              type="text"
              placeholder="i.e. UX UI Designer to design a website"
            />
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
          </div>
          <div className="profileformbtns jobpostbtns">
            <Link relative="path" to="..">
              <button>Cancel</button>
            </Link>
            <Link relative="path" to="../detail">
              <button className="save">Next</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JopPost;
