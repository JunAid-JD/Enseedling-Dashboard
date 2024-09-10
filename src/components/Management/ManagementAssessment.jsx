import React from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const ManagementAssessment = () => {
  return (
    <div className="managementassessment">
      <h3>Assessment Accepted Candidates</h3>
      <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>

      <div className="searchsection">
        <div className="searchinput">
          <span>
            <SearchRoundedIcon />
            <input type="text" placeholder="Type to search" />
          </span>
          <div className="managementassessmentdownload">
            <div className="download">
              <FileDownloadOutlinedIcon />
              <p>Download Report</p>
            </div>
            <div className="jobbtn">
              <p className="candidatebtnpara"> Sort By</p>
              <KeyboardArrowDownRoundedIcon />
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
            <td>Assessment ID</td>
            <td>Allotted Date</td>
            <td>Submission Date</td>
            <td>Status</td>
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
            <td className="tbodyfirstcustom">Web 1213</td>
            <td className="tbodyfirstcustom">may 20, 2023</td>
            <td className="tbodyfirstcustom">May 20, 2023</td>
            <td className="tbodyfirstcustom">Accepted</td>
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
            <td>Web 1213</td>
            <td>may 20, 2023</td>
            <td>May 8, 2023</td>
            <td>Accepted</td>
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
            <td>Web 1213</td>

            <td>may 20, 2023</td>
            <td>May 8, 2023</td>
            <td>Accepted</td>
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
            <td>Web 1213</td>

            <td>may 20, 2023</td>
            <td>May 8, 2023</td>
            <td>Accepted</td>
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
            <td>Web 1213</td>

            <td>may 20, 2023</td>
            <td>May 8, 2023</td>
            <td>Accepted</td>
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
            <td>Web 1213</td>

            <td>may 20, 2023</td>
            <td>May 8, 2023</td>
            <td>Accepted</td>
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

export default ManagementAssessment;
