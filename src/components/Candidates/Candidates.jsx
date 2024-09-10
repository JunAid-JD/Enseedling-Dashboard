import React from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";

const Candidates = () => {
  return (
    <div className="candidates">
      <h3>Applied Candidate</h3>
      <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>

      <div className="searchsection">
        <div className="searchheader">
          <h3>Result</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>
        </div>
        <div className="searchinput">
          <span>
            <SearchRoundedIcon />
            <input type="text" placeholder="Type to search" />
          </span>
          <div className="jobbtn">
            <p className="candidatebtnpara"> Sort By</p>
            <KeyboardArrowDownRoundedIcon />
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
            <td>Job ID</td>
            <td>Applied Date</td>
            <td>Score</td>
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
            <td className="tbodyfirstcustom">#UXUI-123456</td>
            <td className="tbodyfirstcustom">May 20, 2023</td>
            <td className="tbodyfirstcustom">10/10</td>
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
            <td>#UXUI-123456</td>
            <td>May 20, 2023</td>
            <td>9/10</td>
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
            <td>#UXUI-123456</td>
            <td>May 20, 2023</td>
            <td>8/10</td>
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
            <td>#UXUI-123456</td>
            <td>May 20, 2023</td>
            <td>7/10</td>
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
            <td>#UXUI-123456</td>
            <td>May 20, 2023</td>
            <td>6/10</td>
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
            <td>#UXUI-123456</td>
            <td>May 20, 2023</td>
            <td>5/10</td>
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

export default Candidates;
