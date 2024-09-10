import React, { useState } from "react";
import { Link } from "react-router-dom";
import Submission from "../Reusable/Submission";

const SettingPassword = () => {
  const [box, setBox] = useState(false);
  return (
    <>
      {!box ? (
        <div className="settingpassword">
          <h3>Change Password</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>

          <div className="settingprofileform">
            <label htmlFor="">Old Password</label>
            <input type="text" placeholder="********" />
            <label htmlFor="">New Password</label>
            <input type="text" placeholder="********" />
            <label htmlFor="">Confirm New Password</label>
            <input type="text" placeholder="********" />

            <div className="profileformbtns jobpostbtns">
              {/* <Link relative="path" to=".."> */}
              <button className="">Cancel</button>
              {/* </Link> */}
              {/* <Link to="paymentdetail"> */}
              <button className="save" onClick={() => setBox(!box)}>
                Save
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      ) : (
        <Submission
          box={box}
          setBox={setBox}
          heading={"Setting saved Successfully"}
        />
      )}
    </>
  );
};

export default SettingPassword;
