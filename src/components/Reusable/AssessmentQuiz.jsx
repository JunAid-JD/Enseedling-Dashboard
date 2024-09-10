import { Checkbox } from "@mui/material";
import React from "react";

const AssessmentQuiz = ({ num }) => {
  return (
    <div className="assessmentquiz">
      <h5>{num}- Lorem ipsum dolor sit amet consectetur. Gravida tellus.</h5>
      <div className="option">
        <Checkbox />
        <p>Lorem ipsum dolor </p>
      </div>
      <div className="option">
        <Checkbox />
        <p>Lorem ipsum dolor </p>
      </div>
      <div className="option">
        <Checkbox />
        <p>Lorem ipsum dolor </p>
      </div>
      <div className="option">
        <Checkbox />
        <p>Lorem ipsum dolor </p>
      </div>
    </div>
  );
};

export default AssessmentQuiz;
