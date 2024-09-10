import {
  FileDownloadOutlined,
  KeyboardArrowDownRounded,
  SearchRounded,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const InternsOffer = () => {
  return (
    <div className="internsoffer">
      <h3>Offers</h3>
      <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>
      <div className="searchsection">
        <div className="searchinput">
          <span>
            <SearchRounded />
            <input type="text" placeholder="Type to search" />
          </span>
          <div className="managementassessmentdownload">
            <div className="download">
              <FileDownloadOutlined />
              <p>Download Report</p>
            </div>
            <div className="jobbtn">
              <p className="candidatebtnpara"> Sort By</p>
              <KeyboardArrowDownRounded />
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
            <td>Position</td>
            <td>Job ID</td>
            <td>Offer Date</td>
            <td>Department</td>
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
            <td className="tbodyfirstcustom">UX UI Designer</td>
            <td className="tbodyfirstcustom">ID#1234</td>
            <td className="tbodyfirstcustom">May 20, 2023</td>
            <td className="tbodyfirstcustom">UI / UX</td>
            <td className="tbodyfirstcustom green">Accepted</td>
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
            <td>ID#1234</td>
            <td>May 20, 2023</td>
            <td>UI / UX</td>
            <td className="red">Rejected</td>
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
            <td>ID#1234</td>
            <td>May 20, 2023</td>
            <td>UI / UX</td>
            <td className="blue">Pending</td>
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
            <td>ID#1234</td>
            <td>May 20, 2023</td>
            <td>UI / UX</td>
            <td className="green">Accepted</td>
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
            <td>ID#1234</td>
            <td>May 20, 2023</td>
            <td>UI / UX</td>
            <td className="green">Accepted</td>
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
            <td>ID#1234</td>
            <td>May 20, 2023</td>
            <td>UI / UX</td>
            <td className="green">Accepted</td>
          </tr>
        </tbody>
      </table>

      <div className="profileformbtns jobpostbtns">
        <Link relative="path" to="../internsofferletter">
          <button className="save">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default InternsOffer;
