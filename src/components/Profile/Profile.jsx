import React, { useState } from "react";
import Submission from "../Reusable/Submission";

const Profile = () => {
  const [box, setBox] = useState(false);
  return (
    <>
      {!box ? (
        <div className="profile">
          <div className="profileheader">
            <h3>Profile</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>
          </div>
          <div className="profilelogoupload">
            <h4>Upload Startup Company Logo</h4>
            <div className="logouploadbox">
              <img src="./images/Logo.png" alt="logo" />
            </div>
            <p className="logoremove">Remove</p>
            <p className="logoupdate">Update</p>
          </div>

          <div className="profileform">
            <form action="">
              <label htmlFor="">Startup Company Name</label>
              <input type="text" placeholder="i.e. Uconnect Technologies" />

              <label htmlFor="">Business Founder Name</label>
              <input type="text" placeholder="i.e.Tom Shelby" />

              <label htmlFor="">Startup Company Address</label>
              <div className="companyaddress">
                <input type="text" placeholder="Street Address  Line 1" />
                <input type="text" placeholder="Street Address  Line 2" />
              </div>
              <div className="companyaddressdetail">
                <input type="text" placeholder="Country" />
                <input type="text" placeholder="City" />
                <input type="text" placeholder="Region" />
                <input type="text" placeholder="Postal/Code" />
              </div>

              <div className="informheading">
                <h5>Contact Information</h5>
                <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>
              </div>

              <label htmlFor="">Business Point of Contact Name</label>
              <input type="text" placeholder="i.e. Uconnect Technologies" />

              <div className="companyaddress">
                <div>
                  <label htmlFor="">Business Contact Number</label>
                  <input type="text" placeholder="i.e. +923555808111" />
                </div>
                <div>
                  <label htmlFor="">Business Email Address</label>
                  <input type="text" placeholder="i.e. bob.ux@gmail.com" />
                </div>
              </div>

              <div className="informheading">
                <h5>Social Media Accounts</h5>
                <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>
              </div>

              <label htmlFor="">Business Founder Facebook Account</label>
              <input
                type="text"
                placeholder="https://www.linkedin.com/in/bob-3a47b023b/"
              />

              <label htmlFor="">Company Linkedin Account URL</label>
              <input
                type="text"
                placeholder="https://www.linkedin.com/in/bobr-3a47b023b/"
              />

              <div className="profileformbtns">
                <button className="save" onClick={() => setBox(!box)}>
                  Save
                </button>
                <button>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <Submission
          box={box}
          setBox={setBox}
          heading={"Changes save Successfully"}
        />
      )}
    </>
  );
};

export default Profile;
