import React from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import { Link } from "react-router-dom";

const Jobs = () => {
  return (
    <div className="jobs">
      <div className="jobheader">
        <div>
          <h3>Job’s</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>
        </div>
        <Link exact to="post">
          <div className="jobbtn">
            <AddRoundedIcon />
            <p>Post a Job</p>
          </div>
        </Link>
      </div>
      <div className="searchsection">
        <div className="searchheader">
          <h3>Best Match</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>
        </div>
        <div className="searchinput">
          <span>
            <SearchRoundedIcon />
            <input type="text" placeholder="Type to search" />
          </span>
          <div className="jobbtn">
            <p>Sort By</p>
            <KeyboardArrowDownRoundedIcon />
          </div>
        </div>
        <div className="searchbody">
          <div className="jobsearchbox">
            <img src="./images/jobimg1.png" alt="jobimg" />
            <div className="price">Hourly: $10-$30 - Less than 30 hrs/week</div>
            <div className="time">Posted 20 hours ago</div>
            <h3>Need a UX UI Designer for our website</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Orci scelerisque turpis
              vulputate rhoncus dignissim odio pellentesque vitae.
            </p>
            <div className="searchboxbtns">
              <div className="boxbtn   boxbtn1">Design</div>
              <div className="boxbtn boxbtn2">Research</div>
              <div className="boxbtn boxbtn3">Web Design</div>
            </div>
          </div>
          {/* two */}
          <div className="jobsearchbox">
            <img src="./images/jobimg2.png" alt="jobimg" />
            <div className="price">Monthly: $500-$1000 - 5 days a week </div>
            <div className="time">Posted 5 min ago</div>
            <h3>Need a font end developer for our website</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Orci scelerisque turpis
              vulputate rhoncus dignissim odio pellentesque vitae.
            </p>
            <div className="searchboxbtns">
              <div className="boxbtn boxbtn1">Design</div>
              <div className="boxbtn boxbtn2">Research</div>
              <div className="boxbtn boxbtn3">Development</div>
            </div>
          </div>
          {/* three */}
          <div className="jobsearchbox">
            <img src="./images/jobimg3.png" alt="jobimg" />
            <div className="price">Fixed Price - Budget $500 </div>
            <div className="time">Posted 2 hours ago</div>
            <h3>Need an App Developer for our finance app</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Orci scelerisque turpis
              vulputate rhoncus dignissim odio pellentesque vitae.
            </p>
            <div className="searchboxbtns">
              <div className="boxbtn boxbtn1">Design</div>
              <div className="boxbtn boxbtn2">Figma</div>
              <div className="boxbtn boxbtn3">App Design</div>
            </div>
          </div>
        </div>
        {/* second row */}
        <div className="searchbody">
          <div className="jobsearchbox">
            <img src="./images/jobimg1.png" alt="jobimg" />
            <div className="price">Hourly: $10-$30 - Less than 30 hrs/week</div>
            <div className="time">Posted 20 hours ago</div>
            <h3>Need a UX UI Designer for our website</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Orci scelerisque turpis
              vulputate rhoncus dignissim odio pellentesque vitae.
            </p>
            <div className="searchboxbtns">
              <div className="boxbtn   boxbtn1">Design</div>
              <div className="boxbtn boxbtn2">Research</div>
              <div className="boxbtn boxbtn3">Web Design</div>
            </div>
          </div>
          {/* two */}
          <div className="jobsearchbox">
            <img src="./images/jobimg2.png" alt="jobimg" />
            <div className="price">Monthly: $500-$1000 - 5 days a week </div>
            <div className="time">Posted 5 min ago</div>
            <h3>Need a font end developer for our website</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Orci scelerisque turpis
              vulputate rhoncus dignissim odio pellentesque vitae.
            </p>
            <div className="searchboxbtns">
              <div className="boxbtn boxbtn1">Design</div>
              <div className="boxbtn boxbtn2">Research</div>
              <div className="boxbtn boxbtn3">Development</div>
            </div>
          </div>
          {/* three */}
          <div className="jobsearchbox">
            <img src="./images/jobimg3.png" alt="jobimg" />
            <div className="price">Fixed Price - Budget $500 </div>
            <div className="time">Posted 2 hours ago</div>
            <h3>Need an App Developer for our finance app</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Orci scelerisque turpis
              vulputate rhoncus dignissim odio pellentesque vitae.
            </p>
            <div className="searchboxbtns">
              <div className="boxbtn boxbtn1">Design</div>
              <div className="boxbtn boxbtn2">Figma</div>
              <div className="boxbtn boxbtn3">App Design</div>
            </div>
          </div>
        </div>

        <div className="pagination">
          <div className="paginationgbtn  paginationgbtnleft">
            <KeyboardArrowLeftRoundedIcon />
          </div>
          <div className="paginationgbtn">1</div>
          <div className="paginationgbtn">2</div>
          <div className="paginationgbtn">3</div>
          <div className="paginationgbtn">4</div>
          <div className="paginationgbtn">5</div>
          <div className="paginationgbtn">6</div>
          <div className="paginationgbtn">7</div>
          <div className="paginationgbtn">8</div>
          <div className="paginationgbtn">9</div>
          <div className="paginationgbtn paginationgbtnright">
            <KeyboardArrowRightRoundedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
