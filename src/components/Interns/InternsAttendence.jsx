import {
  AddOutlined,
  KeyboardArrowDownRounded,
  NorthEastOutlined,
  SouthWestOutlined,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const InternsAttendence = () => {
  return (
    <div className="internsattendence">
      <h3>Request Attendance Regularization</h3>
      <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>

      <div className="internsattendencebtns">
        <div className="attendencecalenderbtns">
          <div className="calenderbtn">
            <div>
              <img src="/images/calenderimg.png" alt="id" />

              <p>June 6 2023</p>
            </div>
            <KeyboardArrowDownRounded />
          </div>
          <div className="calenderbtn">
            <div>
              <img src="/images/profileidimg.png" alt="id" />
              <p>ID-23456</p>
            </div>
            <KeyboardArrowDownRounded />
          </div>
        </div>
        <div className="jobbtn">
          <AddOutlined />
          <p className="candidatebtnpara"> Add</p>
        </div>
      </div>

      <div className="internattendencebox">
        <div className="internattendenceboxhead">
          <p>Intern Punch time</p>
          <p>Reason of Change</p>
          <p>Correction</p>
        </div>
        <div className="internattendenceboxbody">
          <div>
            <div className="attendencebtn">
              <SouthWestOutlined style={{ color: "#1C9649" }} />
              <p>10:30am</p>
              <KeyboardArrowDownRounded />
            </div>
            <div className="attendencebtn">In at 10:30 am</div>
            <div className="attendencebtn">
              <SouthWestOutlined style={{ color: "#1C9649" }} />
              <p>10:30am</p>
              <KeyboardArrowDownRounded />
            </div>
            <p>Submit</p>
          </div>
          {/* second */}
          <div>
            <div className="attendencebtn">
              <SouthWestOutlined style={{ color: "#1C9649" }} />
              <p>12:00am</p>
              <KeyboardArrowDownRounded />
            </div>
            <div className="attendencebtn">Tea Break</div>
            <div className="attendencebtn">
              <SouthWestOutlined style={{ color: "#1C9649" }} />
              <p>12:00am</p>
              <KeyboardArrowDownRounded />
            </div>
            <p>Submit</p>
          </div>
          {/* three */}
          <div>
            <div className="attendencebtn">
              <NorthEastOutlined style={{ color: "#FF0000" }} />
              <p>20:00am</p>
              <KeyboardArrowDownRounded />
            </div>
            <div className="attendencebtn">Lunch Break</div>
            <div className="attendencebtn">
              <SouthWestOutlined style={{ color: "#FF0000" }} />
              <p>20:00am</p>
              <KeyboardArrowDownRounded />
            </div>
            <p>Submit</p>
          </div>
          {/* four */}
          <div>
            <div className="attendencebtn">
              <NorthEastOutlined style={{ color: "#FF0000" }} />
              <p>5:00am</p>
              <KeyboardArrowDownRounded />
            </div>
            <div className="attendencebtn"></div>
            <div className="attendencebtn">
              <SouthWestOutlined style={{ color: "#FF0000" }} />
              <p>5:00am</p>
              <KeyboardArrowDownRounded />
            </div>
            <p>Submit</p>
          </div>
        </div>
      </div>

      <div className="profileformbtns jobpostbtns">
        <Link to="internattendencedetail">
          <button className="save">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default InternsAttendence;
