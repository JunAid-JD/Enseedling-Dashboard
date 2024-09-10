import { KeyboardArrowDown } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Submission from "../Reusable/Submission";

const SettingProfile = () => {
  const [box, setBox] = useState(false);
  return (
    <>
      {!box ? (
        <div className="settingprofile">
          <h3>Edit Your Profile</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>

          <div className="settingprofileform">
            <div className="profilephoto">
              <h5>Profile Photo</h5>
              <div>
                <img src="/images/settingprofileimg.png" alt="profile" />
                <span className="grey">Remove</span>
                <span className="blue">Change</span>
              </div>
            </div>

            <div className="names">
              <div>
                <label htmlFor="">First Name</label>
                <input type="text" placeholder="Bob" />
              </div>
              <div>
                <label htmlFor="">Middle Name</label>
                <input type="text" placeholder="Ziroll" />
              </div>
              <div>
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder="Scrimba" />
              </div>
            </div>

            <label htmlFor="">Email Address</label>
            <input type="email" placeholder="Bob@gmail.com" />

            <label htmlFor="">Write Bio</label>
            <textarea placeholder="Type Text Here" />

            <label htmlFor="">Job Title </label>
            <div className="select">
              <input type="text" placeholder="i.e. UX UI Designer" />
              <KeyboardArrowDown />
            </div>
            <div className="check">
              <Checkbox />
              <span>Show This On My Profile</span>
            </div>

            <label htmlFor="">Country </label>
            <div className="select">
              <input type="text" placeholder="i.e. Pakistan" />
              <KeyboardArrowDown />
            </div>

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

export default SettingProfile;
