import React from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";
import CandidateBox from "../Reusable/CandidateBox";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";

const ManagementShortlist = () => {
  return (
    <div className="managementshortlist">
      <div className="shortlisthead">
        <div>
          <h3>Shortlisted Candidates</h3>
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
              <p>Download Report</p>
            </div>
          </div>
        </div>
      </div>

      <div className="candidatesboxes">
        <CandidateBox />
        <CandidateBox />
        <CandidateBox />
        <CandidateBox />
        <CandidateBox />
        <CandidateBox />
        <CandidateBox />
        <CandidateBox />
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
  );
};

export default ManagementShortlist;
