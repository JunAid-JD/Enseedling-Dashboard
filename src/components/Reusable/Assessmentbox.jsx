import React from "react";

const Assessmentbox = () => {
  return (
    <div className="assessmentbox">
      <div className="assessmentboxhead">
        <p>Assessment Title</p>
        <h5>Agency website design</h5>
      </div>

      <div className="assessmentboxform">
        <label htmlFor="">Assessment ID</label>
        <input type="text" placeholder="I.e. WEB-1234" />

        <label htmlFor="">End Date</label>
        <input type="text" placeholder="July 04, 2023" />
      </div>
    </div>
  );
};

export default Assessmentbox;
