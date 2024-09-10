import React from "react";

const Submission = ({ box, setBox, heading }) => {
  return (
    <div className="submission">
      <div className="submissionbox">
        <div className="submissionicon">
          <img src="/images/submissionicon.png" alt="icon" />
        </div>
        <h3>{heading}</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Cras aliquet lectus arcu </p>
        <button className="submissionbtn" onClick={() => setBox(!box)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Submission;
