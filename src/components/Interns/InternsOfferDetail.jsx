import React, { useState } from "react";
import { Link } from "react-router-dom";
import Submission from "../Reusable/Submission";

const InternsOfferDetail = () => {
  const [box, setBox] = useState(false);
  return (
    <>
      {!box ? (
        <div className="internsofferdetail">
          <h3>Offer Letter</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>

          <div className="internofferletterbox">
            <div className="head">
              <img src="/images/Logo.png" alt="logo" />
              <img src="/images/company.png" alt="logo" />
            </div>

            <div className="date">
              <h1>Date 01 July 2023</h1>
            </div>
            <h1>Dear Bob Ziroll,</h1>

            <p>
              Enseedling Is Pleased to Offer you a position of Sr. UX UI
              Designer at I slamabad Pakistan.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur. Senectus nisi aliquam
              feugiat pellentesque in viverra habitant. Nisl sapien velit nec
              eget ipsum. Commodo et proin facilisi in. Et risus euismod
              convallis tristique mauris feugiat. Eget eget non consequat fames
              euismod quis vitae. Quisque ornare enim mauris elementum ultrices
              ullamcorper proin enim. Velit fermentum at dolor aliquam velit.
              Lectus morbi id turpis vel quisque viverra non. Auctor sed gravida
              interdum auctor curabitur mi. Dignissim habitant metus.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur. Senectus nisi aliquam
              feugiat pellentesque in viverra habitant. Nisl sapien velit nec
              eget ipsum. Commodo et proin facilisi in. Et risus euismod
              convallis tristique mauris feugiat. Eget eget non consequat fames
              euismod quis vitae. Quisque ornare enim mauris elementum ultrices
              ullamcorper proin enim. Velit fermentum at dolor aliquam velit.
              Lectus morbi id turpis vel quisque viverra non. Auctor sed gravida
              interdum auctor curabitur mi. Dignissim habitant metus.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur. Senectus nisi aliquam
              feugiat pellentesque in viverra habitant. Nisl sapien velit nec
              eget ipsum. Commodo et proin facilisi in. Et risus euismod
              convallis tristique mauris feugiat. Eget eget non consequat fames
              euismod quis vitae. Quisque ornare enim mauris elementum ultrices
              ullamcorper proin enim. Velit fermentum at dolor aliquam velit.
              Lectus morbi id turpis vel quisque viverra non. Auctor sed gravida
              interdum auctor curabitur mi. Dignissim habitant metus.
            </p>

            <p>We are Looking forward to having you Onboard</p>

            <div className="ending">
              <p>Thanks and Regards</p>
              <p>Enseedling</p>
            </div>
          </div>

          <div className="profileformbtns jobpostbtns">
            <Link relative="path" to="..">
              <button>Cancel</button>
            </Link>
            <button className="save" onClick={() => setBox(!box)}>
              Send
            </button>
          </div>
        </div>
      ) : (
        <Submission
          box={box}
          setBox={setBox}
          heading={"Offer Letter Send Successfully"}
        />
      )}
    </>
  );
};

export default InternsOfferDetail;
