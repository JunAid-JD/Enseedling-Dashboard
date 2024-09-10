import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Assessmentbox from "../Reusable/Assessmentbox";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import { Link } from "react-router-dom";

const Assessments = () => {
  return (
    <div className="assessments">
      <div className="assessmentsheader">
        <div>
          <h3>Enseedling Assessments</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>
        </div>
        <Link to="create">
          <button>Create New Assessment</button>
        </Link>
      </div>

      <div className="assessmentsearch">
        <SearchRoundedIcon />
        <input type="text" placeholder="Type to search" />
      </div>

      <div className="assessmentboxes">
        <Assessmentbox />
        <Assessmentbox />
        <Assessmentbox />
        <Assessmentbox />
        <Assessmentbox />
        <Assessmentbox />
        <Assessmentbox />
        <Assessmentbox />
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

export default Assessments;
