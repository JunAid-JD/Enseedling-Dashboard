import React from "react";
import { Link } from "react-router-dom";

const Logout = ({ logout, Setlogout }) => {
  return (
    <div className="logoutpopup">
      <div className="submissionbox">
        <div className="submissionicon">
          <img src="/images/logoutimg.png" alt="icon" />
        </div>
        <h3>Logout Your Account</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Cras aliquet lectus arcu </p>
        <div className="logoutbtns">
          <button className="logoutbtn" onClick={() => Setlogout(!logout)}>
            Cancel
          </button>

          <Link to="./">
            <button
              className="logoutbtn  redbtn"
              onClick={() => Setlogout(!logout)}
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logout;
