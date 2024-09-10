import React from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AssessmentQuiz from "../Reusable/AssessmentQuiz";
import { Link } from "react-router-dom";

const CreateAssessments = () => {
  return (
    <div className="assessments">
      <div className="createassessmenthead">
        <h3>Create Assessment</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>
      </div>

      <div className="createassessmenthead">
        <h3>Assessment Details</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>
      </div>

      <div className="createassessmentform">
        <label htmlFor="">Assessment Title</label>
        <input type="text" placeholder="i.e. Assessment XYZ" />

        <div className="assessmentdate">
          <div>
            <label htmlFor="">Assign Date</label>
            <div className="dateinput">
              <input type="text" placeholder="i.e. may 30, 2023" />
              <CalendarMonthOutlinedIcon />
            </div>
          </div>
          <div>
            <label htmlFor="">Assign Date</label>
            <div className="dateinput">
              <input type="text" placeholder="i.e. dec 3, 2023" />
              <CalendarMonthOutlinedIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="skillsection">
        <h3>Skills Required</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>

        <div className="skillbox">
          <div className="skill">ux ui</div>
          <div className="skill">web design</div>
          <div className="skill">App Design</div>
          <div className="skill">Dashboard Design</div>
        </div>
      </div>

      <div className="quizsection">
        <h3> Assessment</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>

        <AssessmentQuiz num={"1"} />
        <AssessmentQuiz num={"2"} />
        <AssessmentQuiz num={"3"} />
        <AssessmentQuiz num={"4"} />
      </div>
      <div className="profileformbtns jobpostbtns">
        <Link relative="path" to="..">
          <button>Cancel</button>
        </Link>
        <Link relative="path" to="../detail">
          <button className="save">Create</button>
        </Link>
      </div>
    </div>
  );
};

export default CreateAssessments;
