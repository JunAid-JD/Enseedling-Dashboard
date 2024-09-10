import React, { useState } from "react";
import Submission from "../Reusable/Submission";

const InternsSlipDetail = () => {
  const [box, setBox] = useState(false);
  return (
    <>
      {!box ? (
        <div className="interslipdetail">
          <h3>Stipend Slip</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>

          <div className="internslipdetailsection">
            <div className="stipendslip">
              <img src="/images/Logo.png" alt="logo" />
              <h3>Slip # GHK-123456789</h3>
              <h5>
                Receiver Email Address{" "}
                <span>Unknownx.enseedling@gmail.com</span>
              </h5>

              <div className="date">
                <h5>Issue Date</h5>
                <p>30 may, 2023</p>
              </div>
              <div className="date">
                <h5>Due Date</h5>
                <p>30 may, 2023</p>
                <span>Due in 10 Days</span>
              </div>

              <div className="fromto">
                <div>
                  <p>From</p>
                  <h5>Enseedling</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Viverra accumsan sed
                    fermentum.
                  </p>
                </div>
                <div>
                  <p>To</p>
                  <h5>Bob</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Viverra accumsan sed
                    fermentum.
                  </p>
                </div>
              </div>

              <h3>Stipend Slip Summary</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>

              <div className="totalbox">
                <div className="totalboxdetail">
                  <span>
                    <p>Amount</p>
                    <p>$1000</p>
                  </span>
                  <span>
                    <p>Earning</p>
                    <p>$1000</p>
                  </span>
                  <span>
                    <p>Deduction</p>
                    <p>$50</p>
                  </span>
                  <span>
                    <p>Net Salary</p>
                    <p>$950</p>
                  </span>
                </div>
              </div>

              <div className="profileformbtns jobpostbtns">
                {/* <Link relative="path" to=".."> */}
                <button>Cancel</button>
                {/* </Link> */}
                <button className="save" onClick={() => setBox(!box)}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Submission
          box={box}
          setBox={setBox}
          heading={"Pay Slip Send  Successfully"}
        />
      )}
    </>
  );
};

export default InternsSlipDetail;
