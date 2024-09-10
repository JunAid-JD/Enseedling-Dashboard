import React from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";

const ManagementInterview = () => {
  return (
    <div className="managementinterview">
      <div className="shortlisthead">
        <div>
          <h3>Candidate Interview List</h3>
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

      <table>
        <thead className="candidatetablehead">
          <tr>
            <td>
              <div className="tableheadfirst">
                <input type="checkbox" /> <p>Name</p>
              </div>
            </td>
            <td>Applied Position</td>
            <td>Interview Date</td>
            <td>Time</td>
            <td>Recruiter</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tbodyfirstcustom">
              <div className="tablebodyfirst">
                <input type="checkbox" />{" "}
                <img src="/images/cadidateimg.png" alt="" />
                <p>Aliza Shah</p>
              </div>
            </td>
            <td className="tbodyfirstcustom">UX UI Designer</td>
            <td className="tbodyfirstcustom">May 20, 2023</td>
            <td className="tbodyfirstcustom">2:00pm</td>
            <td className="tbodyfirstcustom">MR.X</td>
          </tr>
          {/* 2nd */}
          <tr>
            <td>
              <div className="tablebodyfirst">
                <input type="checkbox" />{" "}
                <img src="/images/cadidateimg.png" alt="" />
                <p>Aliza Shah</p>
              </div>
            </td>
            <td>Web Developer</td>
            <td>May 20, 2023</td>
            <td>2:00pm</td>
            <td>Shaun</td>
          </tr>
          {/* 3nd */}
          <tr>
            <td>
              <div className="tablebodyfirst">
                <input type="checkbox" />{" "}
                <img src="/images/cadidateimg.png" alt="" />
                <p>Aliza Shah</p>
              </div>
            </td>
            <td>UI Designer</td>
            <td>May 20, 2023</td>
            <td>2:00pm</td>
            <td>Dave Grey</td>
          </tr>
          {/* 4nd */}
          <tr>
            <td>
              <div className="tablebodyfirst">
                <input type="checkbox" />{" "}
                <img src="/images/cadidateimg.png" alt="" />
                <p>Aliza Shah</p>
              </div>
            </td>
            <td>UI Manager</td>
            <td>May 20, 2023</td>
            <td>2:00pm</td>
            <td>John Smilga</td>
          </tr>
          {/* 5nd */}
          <tr>
            <td>
              <div className="tablebodyfirst">
                <input type="checkbox" />{" "}
                <img src="/images/cadidateimg.png" alt="" />
                <p>Aliza Shah</p>
              </div>
            </td>
            <td>Content Writer</td>
            <td>May 20, 2023</td>
            <td>2:00pm</td>
            <td>Hitesh Chaudary</td>
          </tr>
          {/* 6th */}
          <tr>
            <td>
              <div className="tablebodyfirst">
                <input type="checkbox" />{" "}
                <img src="/images/cadidateimg.png" alt="" />
                <p>Aliza Shah</p>
              </div>
            </td>
            <td>Content creater</td>
            <td>May 20, 2023</td>
            <td>2:00pm</td>
            <td>Bob Ziroll</td>
          </tr>
        </tbody>
      </table>

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
  );
};

export default ManagementInterview;
