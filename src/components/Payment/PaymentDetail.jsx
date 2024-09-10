import React, { useState } from "react";
import { Link } from "react-router-dom";
import Submission from "../Reusable/Submission";

const PaymentDetail = () => {
  const [box, setBox] = useState(false);
  return (
    <>
      {!box ? (
        <div className="payment">
          <h3>Payment Method </h3>
          <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>

          <div className="paymentmethodbox">
            <h3>Sending Money</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>

            <div className="paymentsendform">
              <label htmlFor="">From</label>
              <div className="custominput">
                <img src="/images/company.png" alt="company" />
                <input type="text" />
              </div>

              <label htmlFor="">To</label>
              <div className="custominput">
                <img src="/images/Logo.png" alt="company" />
                <input type="text" />
              </div>
            </div>

            <h3>Recipient</h3>
            <div className="paymentrecipientform">
              <div>
                <label htmlFor="">Intern ID</label>
                <input type="text" placeholder="I.e.   ID#12345" />
              </div>
              <div>
                <label htmlFor="">Intern Amount</label>
                <input type="text" placeholder="I.e.   $2500" />
              </div>
              <div>
                <label htmlFor="">Tax</label>
                <input type="text" placeholder="I.e.  $500" />
              </div>
              <div>
                <label htmlFor="">Total</label>
                <input type="text" placeholder="I.e.  $3000" />
              </div>
            </div>
            <div className="paymentrecipientform">
              <div>
                <label htmlFor="">Intern ID</label>
                <input type="text" placeholder="I.e.   ID#12345" />
              </div>
              <div>
                <label htmlFor="">Intern Amount</label>
                <input type="text" placeholder="I.e.   $2500" />
              </div>
              <div>
                <label htmlFor="">Tax</label>
                <input type="text" placeholder="I.e.  $500" />
              </div>
              <div>
                <label htmlFor="">Total</label>
                <input type="text" placeholder="I.e.  $3000" />
              </div>
            </div>
            <div className="paymentrecipientform">
              <div>
                <label htmlFor="">Intern ID</label>
                <input type="text" placeholder="I.e.   ID#12345" />
              </div>
              <div>
                <label htmlFor="">Intern Amount</label>
                <input type="text" placeholder="I.e.   $2500" />
              </div>
              <div>
                <label htmlFor="">Tax</label>
                <input type="text" placeholder="I.e.  $500" />
              </div>
              <div>
                <label htmlFor="">Total</label>
                <input type="text" placeholder="I.e.  $3000" />
              </div>
            </div>
            <div className="addrecipient">+ Add Recipients</div>

            <div className="paymenttotalform">
              <div>
                <label htmlFor="">Net Total</label>
                <input type="text" placeholder="I.e.  $4500" />
              </div>
              <div>
                <label htmlFor="">Tax</label>
                <input type="text" placeholder="I.e.  $1500" />
              </div>
              <div>
                <label htmlFor="">Gross Total</label>
                <input type="text" placeholder="I.e.  $6000" />
              </div>
            </div>
            <div className="profileformbtns jobpostbtns">
              <Link relative="path" to="..">
                <button className="">Cancel</button>
              </Link>

              <button className="save" onClick={() => setBox(!box)}>
                Send
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Submission
          box={box}
          setBox={setBox}
          heading={"Money Transfer Successfully"}
        />
      )}
    </>
  );
};

export default PaymentDetail;
