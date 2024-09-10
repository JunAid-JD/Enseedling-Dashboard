import React from "react";
import { Link } from "react-router-dom";

const PaymentMethod = () => {
  return (
    <div className="payment">
      <h3>Payment Method </h3>
      <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>

      <div className="paymentmethodbox">
        <h3>Update Payment Method</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>

        <div className="updatemethod">
          <div>
            <label htmlFor="">Card Holder</label>
            <input type="text" placeholder="i.e Shaun JP" />
          </div>
          <div>
            <label htmlFor="">Expire Date</label>
            <div className="custominput">
              <input type="text" placeholder="i.e. 10 July, 2023" />
              <img src="/images/calenderimg.png" alt="calender" />
            </div>
          </div>

          <div>
            <label htmlFor="">Card Number</label>
            <div className="custominput">
              <input type="text" placeholder="i.e. 10 July, 2023" />
              <img src="/images/paymentimg1.png" alt="calender" />
            </div>
          </div>
          <div>
            <label htmlFor="">OTP</label>
            <input type="text" placeholder="i.e ********" />
          </div>
        </div>
        <div className="profileformbtns jobpostbtns">
          <Link relative="path" to="..">
            <button className="">Cancel</button>
          </Link>
          <Link relative="path" to="../paymentdetail">
            <button className="save">Save & Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
