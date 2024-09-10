import React, { useState } from "react";
import AssessmentQuiz from "../Reusable/AssessmentQuiz";
import Submission from "../Reusable/Submission";
import { Link } from "react-router-dom";

const DetailAssessments = () => {
  const [box, setBox] = useState(false);
  return (
    <>
      {!box ? (
        <div className="assessments  detailassessment">
          <div className="quizsection">
            <h3> Previous Assessment</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>

            <AssessmentQuiz num={"1"} />
            <AssessmentQuiz num={"2"} />
            <AssessmentQuiz num={"3"} />
            <AssessmentQuiz num={"4"} />
            <AssessmentQuiz num={"5"} />
            <AssessmentQuiz num={"6"} />
            <AssessmentQuiz num={"7"} />
          </div>
          <div className="profileformbtns jobpostbtns">
            <Link relative="path" to="../create">
              <button>Cancel</button>
            </Link>
            <button className="save" onClick={() => setBox(!box)}>
              Edit
            </button>
          </div>
        </div>
      ) : (
        <Submission
          box={box}
          setBox={setBox}
          heading={"Assessment Created Successfully"}
        />
      )}
    </>
  );
};

export default DetailAssessments;
