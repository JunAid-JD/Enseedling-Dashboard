import React, { useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import Submission from "../Reusable/Submission";
import { Link } from "react-router-dom";

const JobDetail = () => {
  const [box, setBox] = useState(false);
  return (
    <>
      {!box ? (
        <div className="jobs">
          <div>
            <h3>Post a Job</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>
          </div>

          <div className="searchinput">
            <span>
              <SearchRoundedIcon />
              <input type="text" placeholder="Type to search" />
            </span>
          </div>

          <div className="jobpostform">
            <h3>Job Details</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>

            <div className="salary_jobtype">
              <div>
                <div className="typeicon">
                  <MonetizationOnOutlinedIcon />
                  <h5>Salary</h5>
                </div>
                <div className="typebtn">$ 1000 -$ 2000</div>
              </div>
              <div>
                <div className="typeicon">
                  <BusinessCenterOutlinedIcon />
                  <h5>Job Type</h5>
                </div>
                <div className="typebtn">Freelance( Full Time)</div>
              </div>
            </div>

            <div className="jobdetaildescription">
              <h3>Description</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eget neque facilisis
                egestas in lacus ac varius. Quisque sed tincidunt nulla
                ultricies mattis enim eu. Sit eget eget pellentesque donec. Quam
                nisl at tellus dignissim eget id interdum. Vitae viverra
                maecenas nisl tortor scelerisque molestie quisque adipiscing.
                Blandit etiam pellentesque risus ipsum adipiscing convallis
                scelerisque. Nunc aliquam orci felis quam gravida euismod neque
                aliquam bibendum.
              </p>

              <h3>Requirements</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eget neque facilisis
                egestas in lacus ac varius. Quisque sed tincidunt nulla
                ultricies mattis enim eu. Sit eget eget pellentesque donec. Quam
                nisl at tellus dignissim eget id interdum. Vitae viverra
                maecenas nisl tortor scelerisque molestie quisque adipiscing.
                Blandit etiam pellentesque risus ipsum adipiscing convallis
                scelerisque. Nunc aliquam orci felis quam gravida euismod neque
                aliquam bibendum.
              </p>

              <h3>Qualification needed</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eget neque facilisis
                egestas in lacus ac varius. Quisque sed tincidunt nulla
                ultricies mattis enim eu. Sit eget eget pellentesque donec. Quam
                nisl at tellus dignissim eget id interdum. Vitae viverra
                maecenas nisl tortor scelerisque molestie quisque adipiscing.
                Blandit etiam pellentesque risus ipsum adipiscing convallis
                scelerisque. Nunc aliquam orci felis quam gravida euismod neque
                aliquam bibendum.
              </p>

              <h3>Benefits</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eget neque facilisis
                egestas in lacus ac varius. Quisque sed tincidunt nulla
                ultricies mattis enim eu. Sit eget eget pellentesque donec. Quam
                nisl at tellus dignissim eget id interdum. Vitae viverra
                maecenas nisl tortor scelerisque molestie quisque adipiscing.
                Blandit etiam pellentesque risus ipsum adipiscing convallis
                scelerisque. Nunc aliquam orci felis quam gravida euismod neque
                aliquam bibendum.
              </p>

              <h3>Experience</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eget neque facilisis
                egestas in lacus ac varius. Quisque sed tincidunt nulla
                ultricies mattis enim eu. Sit eget eget pellentesque donec. Quam
                nisl at tellus dignissim eget id interdum. Vitae viverra
                maecenas nisl tortor scelerisque molestie quisque adipiscing.
                Blandit etiam pellentesque risus ipsum adipiscing convallis
                scelerisque. Nunc aliquam orci felis quam gravida euismod neque
                aliquam bibendum.
              </p>
            </div>
            <div className="profileformbtns jobpostbtns">
              <Link relative="path" to="../post">
                <button>Cancel</button>
              </Link>
              <button className="save" onClick={() => setBox(!box)}>
                Post Job
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Submission
          box={box}
          setBox={setBox}
          heading={"Job Posted Successfully"}
        />
      )}
    </>
  );
};

export default JobDetail;
