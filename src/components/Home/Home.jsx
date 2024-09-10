import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import SimCardDownloadOutlinedIcon from "@mui/icons-material/SimCardDownloadOutlined";

const Home = () => {
  return (
    <div className="home">
      <div className="homeheadsection">
        <h3>
          Hey Shakeel -{" "}
          <span>here’s what’s happening with your Startup company today</span>
        </h3>
        <button className="sortby">
          <p>Sort By</p>
          <KeyboardArrowDownIcon />
        </button>
      </div>
      <div className="homeboxsection">
        {/* second box */}
        <div className="homebox">
          <h5>Onboarded Interns</h5>
          <div className="homeboxstats">
            <h4>340</h4>
            <p>
              {" "}
              + 36% <ArrowUpwardIcon />
            </p>
          </div>
        </div>

        {/* second box */}
        <div className="homebox">
          <h5>Total Payment Released</h5>
          <div className="homeboxstats">
            <h4>$23,485</h4>
            <p className="low">
              {" "}
              + 14% <ArrowDownwardIcon />
            </p>
          </div>
        </div>

        {/* third box */}
        <div className="homebox">
          <h5>Shortlisted Interns</h5>
          <div className="homeboxstats">
            <h4>98</h4>
            <p className="low">
              {" "}
              + 30% <ArrowDownwardIcon />
            </p>
          </div>
        </div>

        {/* forth box */}
        <div className="homebox">
          <h5>Resume Received</h5>
          <div className="homeboxstats">
            <h4>1500</h4>
            <p>
              {" "}
              + 36% <ArrowUpwardIcon />
            </p>
          </div>
        </div>
      </div>

      <div className="homegraphsection">
        <div className="reportgraph">
          <div className="graphheader">
            <h1>Project On Going Report</h1>
            <div className="graphheaderbtns">
              <button>12 Months</button>
              <button>6 Months</button>
              <button>1 Month</button>
              <button>A Week</button>
            </div>
          </div>
          <div className="reportgraphimg">
            <img src="./images/reportchart.png" alt="chart" />
          </div>
        </div>

        <div className="progressgraph">
          <h3>Budget Allocation</h3>
          <div className="progressgraphimg">
            <h1>$23,485</h1>
            <p>
              + 36% <ArrowUpwardIcon />
            </p>
          </div>
          <div className="colorPointer">
            <p>
              {" "}
              <FiberManualRecordIcon color="primary" /> Allocated Budget
            </p>
            <p>
              <FiberManualRecordIcon color="action" /> Remaining Budget
            </p>
          </div>
        </div>
      </div>

      <div className="homereportsection">
        <div className="reportpositionsection">
          <div className="internreport">
            <div className="internreportdetail">
              <h3>Download Your Interns Report</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Auctor tristique.</p>
            </div>
            <div className="interreportbtn">
              <SimCardDownloadOutlinedIcon />
              <p>Export PDF</p>
            </div>
          </div>
          <div className="internposition">
            <h1>Current Open Position</h1>
            <div className="positions">
              {/* first */}
              <div className="position">
                <div className="positiondetail">
                  <div className="positiondetailimg">
                    <img src="./images/position1img.png" alt="position" />
                  </div>
                  <div className="positiondetailbody">
                    <h3>UX UI Designer</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Auctor tristique.
                    </p>
                  </div>
                </div>
                <div className="positiondetailbtn">Details</div>
              </div>

              {/* second */}
              <div className="position">
                <div className="positiondetail">
                  <div className="positiondetailimg">
                    <img src="./images/position2img.png" alt="position" />
                  </div>
                  <div className="positiondetailbody">
                    <h3>Web Developer</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Auctor tristique.
                    </p>
                  </div>
                </div>
                <div className="positiondetailbtn">Details</div>
              </div>
              {/* third */}
              <div className="position">
                <div className="positiondetail">
                  <div className="positiondetailimg">
                    <img src="./images/position1img.png" alt="position" />
                  </div>
                  <div className="positiondetailbody">
                    <h3>UX Manager</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Auctor tristique.
                    </p>
                  </div>
                </div>
                <div className="positiondetailbtn">Details</div>
              </div>
            </div>
          </div>
        </div>
        <div className="homenewssection">
          <h3>Enseedling News Bord</h3>
          <div className="newsbox">
            {/* first */}
            <div className="news">
              <div className="newsimg">
                <img src="./images/newsimg1.png" alt="news" />
              </div>
              <div className="newsdetail">
                <h5>UX UI Designer</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            {/* second */}
            <div className="news">
              <div className="newsimg">
                <img src="./images/newsimg2.png" alt="news" />
              </div>
              <div className="newsdetail">
                <h5>Product Designer</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            {/* third */}
            <div className="news">
              <div className="newsimg">
                <img src="./images/newsimg3.png" alt="news" />
              </div>
              <div className="newsdetail">
                <h5>WEB Developer</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            {/* forth */}
            <div className="news">
              <div className="newsimg">
                <img src="./images/newsimg4.png" alt="news" />
              </div>
              <div className="newsdetail">
                <h5>UX Manager</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

            <div className="link">View More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
