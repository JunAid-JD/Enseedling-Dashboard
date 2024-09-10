import { AddOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const InternsSlip = () => {
  return (
    <div className="internsslip">
      <h3>Create Stipend Slip</h3>
      <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>

      <div className="internslipform">
        <h3>Slip # GHK-123456789</h3>
        <h5>
          Receiver Email Address <span>Bob.enseedling@gmail.com</span>
        </h5>
        <div className="billed">
          <div>
            <label htmlFor="">Billed From</label>
            <input type="text" placeholder="i.e. ABCD Company" />
          </div>
          <div>
            <label htmlFor="">Billed To</label>
            <input type="text" placeholder="i.e. Enseedling" />
          </div>
          <div>
            <label htmlFor="">Billed For</label>
            <input type="text" placeholder="i.e. UnknownX" />
          </div>
        </div>
        <label htmlFor="">Billed Title</label>
        <input
          type="text"
          placeholder="i.e. Monthly Salary as a UX UI Designer for Ensedling"
        />
        <div className="period">
          <div>
            <label htmlFor="">For Period</label>
            <div className="calender">
              <input type="text" placeholder="i.e.25 may, 2023" />
              <img src="/images/calenderimg.png" alt="calender" />
            </div>
          </div>
          <div>
            <label htmlFor="">To Period</label>
            <div className="calender">
              <input type="text" placeholder="i.e. 10 July, 2023" />
              <img src="/images/calenderimg.png" alt="calender" />
            </div>
          </div>
        </div>
        <div className="paymentdetail">
          <h3>Payment Details</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>
        </div>
        <label htmlFor="">Currency</label>
        <input type="text" placeholder="i.e. USD" />
        <h3>Stipend</h3>
        <div className="stipend">
          <div>
            <label htmlFor="">Monthly Stipend</label>
            <input type="text" placeholder="Monthly pay" />
            <label htmlFor="">Incentives</label>
            <input type="text" placeholder="Monthly pay" />
          </div>
          <div>
            <div className="stipendprice">
              <div>
                <label htmlFor="">Price</label>
                <input type="text" placeholder="$1000" />
              </div>
              <div>
                <label htmlFor="">Quantity</label>
                <input type="text" placeholder="-" />
              </div>
              <div>
                <label htmlFor="">Total</label>
                <input type="text" placeholder="$1000" />
              </div>
            </div>
            <div className="stipendprice">
              <div>
                <label htmlFor="">Price</label>
                <input type="text" placeholder="$1000" />
              </div>
              <div>
                <label htmlFor="">Quantity</label>
                <input type="text" placeholder="-" />
              </div>
              <div>
                <label htmlFor="">Total</label>
                <input type="text" placeholder="$1000" />
              </div>
            </div>
          </div>
        </div>
        <div className="stipendtotal">
          <span>
            <AddOutlined /> Add Items
          </span>
          <span>Total Amount $1000</span>
        </div>

        <label htmlFor="">Performance Feedback</label>
        <textarea name="" placeholder="Type Text Here" />
      </div>
      <div className="profileformbtns jobpostbtns">
        {/* <Link relative="path" to=".."> */}
        <button>Cancel</button>
        {/* </Link> */}
        <Link to="../internslipdetail">
          <button className="save">Create Slip</button>
        </Link>
      </div>
    </div>
  );
};

export default InternsSlip;
