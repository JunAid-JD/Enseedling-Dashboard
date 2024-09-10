import {
  AddOutlined,
  KeyboardArrowDownRounded,
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded,
  MoreVertOutlined,
  NorthEastOutlined,
  SouthWestOutlined,
} from "@mui/icons-material";
import React from "react";

const InternsAttendenceDetail = () => {
  return (
    <div className="internsattendencedetail">
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
        </div>
        <div className="jobbtn">
          <AddOutlined />
          <p className="candidatebtnpara"> Add</p>
        </div>
      </div>

      <table>
        <thead className="candidatetablehead">
          <tr>
            <td>Date</td>
            <td>Check In</td>
            <td>Check Out</td>

            <td>Arrival</td>
            <td>Effective Hours</td>
            <td>Gross Hours</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Wed 31 may,2023</td>
            <td>
              <div
                style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
              >
                <SouthWestOutlined style={{ color: "#1C9649" }} /> 10:00 AM
              </div>
            </td>
            <td>
              <div
                style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
              >
                <NorthEastOutlined style={{ color: "#FF0000" }} /> 5:00 PM
              </div>
            </td>
            <td>0h:4m:10s</td>
            <td>0h:0m:0s</td>
            <td>0h:0m:0s</td>
            <td>
              <MoreVertOutlined />
            </td>
          </tr>
          {/* 2nd */}
          <tr>
            <td>Wed 31 may,2023</td>
            <td>
              <div
                style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
              >
                <SouthWestOutlined style={{ color: "#1C9649" }} /> 10:00 AM
              </div>
            </td>
            <td>
              <div
                style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
              >
                <NorthEastOutlined style={{ color: "#FF0000" }} /> 5:00 PM
              </div>
            </td>
            <td>0h:4m:10s</td>
            <td>0h:0m:0s</td>
            <td>0h:0m:0s</td>
            <td>
              <MoreVertOutlined />
            </td>
          </tr>
          {/* 3nd */}
          <tr>
            <td>Wed 31 may,2023</td>
            <td>
              <div
                style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
              >
                <SouthWestOutlined style={{ color: "#1C9649" }} /> 10:00 AM
              </div>
            </td>
            <td>
              <div
                style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
              >
                <NorthEastOutlined style={{ color: "#FF0000" }} /> 5:00 PM
              </div>
            </td>
            <td>0h:4m:10s</td>
            <td>0h:0m:0s</td>
            <td>0h:0m:0s</td>
            <td>
              <MoreVertOutlined />
            </td>
          </tr>
          {/* 4nd */}
          <tr>
            <td>Wed 31 may,2023</td>
            <td>
              <div
                style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
              >
                <SouthWestOutlined style={{ color: "#1C9649" }} /> 10:00 AM
              </div>
            </td>
            <td>
              <div
                style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
              >
                <NorthEastOutlined style={{ color: "#FF0000" }} /> 5:00 PM
              </div>
            </td>
            <td>0h:4m:10s</td>
            <td>0h:0m:0s</td>
            <td>0h:0m:0s</td>
            <td>
              <MoreVertOutlined />
            </td>
          </tr>
          {/* 5nd */}
          <tr>
            <td>Wed 31 may,2023</td>
            <td>
              <div
                style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
              >
                <SouthWestOutlined style={{ color: "#1C9649" }} /> 10:00 AM
              </div>
            </td>
            <td>
              <div
                style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
              >
                <NorthEastOutlined style={{ color: "#FF0000" }} /> 5:00 PM
              </div>
            </td>
            <td>0h:4m:10s</td>
            <td>0h:0m:0s</td>
            <td>0h:0m:0s</td>
            <td>
              <MoreVertOutlined />
            </td>
          </tr>
          {/* 6th */}
          <tr>
            <td>Wed 31 may,2023</td>
            <td>
              <div
                style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
              >
                <SouthWestOutlined style={{ color: "#1C9649" }} /> 10:00 AM
              </div>
            </td>
            <td>
              <div
                style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
              >
                <NorthEastOutlined style={{ color: "#FF0000" }} /> 5:00 PM
              </div>
            </td>
            <td>0h:4m:10s</td>
            <td>0h:0m:0s</td>
            <td>0h:0m:0s</td>
            <td>
              <MoreVertOutlined />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="pagination">
        <div className="paginationgbtn  paginationgbtnleft">
          <KeyboardArrowLeftRounded />
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
          <KeyboardArrowRightRounded />
        </div>
      </div>
    </div>
  );
};

export default InternsAttendenceDetail;
