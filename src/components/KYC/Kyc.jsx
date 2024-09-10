import { IconButton } from "@mui/material";
import React, { useState } from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Submission from "../Reusable/Submission";

const Kyc = () => {
  const [box, setBox] = useState(false);
  return (
    <>
      {!box ? (
        <div className="kyc">
          <div className="companyheader">
            <h3>Company</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>
          </div>
          <div className="companynumber">
            <h5>Company Registration Number</h5>
            <input type="text" placeholder="i.e. 12345678900000" />
            <button>Verify</button>
          </div>

          <div className="companydocuments">
            <h3>Submit Following Documents To Verify KYC</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>

            <div className="documentsbox">
              {/* first box */}
              <div className="document">
                <div className="documentdetail">
                  <div className="documentimg">
                    <img src="./images/kycimg1.png" alt="icon" />
                  </div>
                  <div className="documentcontent">
                    <h5>National ID Card or Passport</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Gravida tellus.
                    </p>
                  </div>
                </div>
                <div className="documentoperation documentoperationcustom">
                  <div className="documentoperationstatus">
                    <h3>National ID Card PDF</h3>
                    <p>Upload Successfully</p>
                  </div>
                  <IconButton>
                    <CancelOutlinedIcon />
                  </IconButton>
                </div>
              </div>
              {/* second box */}
              <div className="document">
                <div className="documentdetail">
                  <div className="documentimg">
                    <img src="./images/kycimg2.png" alt="icon" />
                  </div>
                  <div className="documentcontent">
                    <h5>Company Registration Documents</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Gravida tellus.
                    </p>
                  </div>
                </div>
                <div className="documentoperation">
                  <div className="documentoperationstatus">
                    <h3>Documents PDF</h3>
                    <img src="./images/progressbarimg.png" alt="icon" />
                  </div>
                  <IconButton>
                    <CancelOutlinedIcon />
                  </IconButton>
                </div>
              </div>

              {/* third */}

              <div className="document">
                <div className="documentdetail">
                  <div className="documentimg">
                    <img src="./images/kycimg3.png" alt="icon" />
                  </div>
                  <div className="documentcontent">
                    <h5>Certified Articles of Company</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Gravida tellus.
                    </p>
                  </div>
                </div>

                <div className="upload">
                  <FileUploadOutlinedIcon />
                  <p>Upload</p>
                </div>
              </div>

              {/* fourth */}
              <div className="document">
                <div className="documentdetail">
                  <div className="documentimg">
                    <img src="./images/kycimg4.png" alt="icon" />
                  </div>
                  <div className="documentcontent">
                    <h5>
                      Send Information referring to shareholders decleration
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Gravida tellus.
                    </p>
                  </div>
                </div>

                <div className="upload">
                  <FileUploadOutlinedIcon />
                  <p>Upload</p>
                </div>
              </div>
            </div>

            <div className="profileformbtns">
              <button className="save" onClick={() => setBox(!box)}>
                Verify documents
              </button>
              <button>Cancel</button>
            </div>
          </div>
        </div>
      ) : (
        <Submission
          box={box}
          setBox={setBox}
          heading={"Your Documents Verify Successfully"}
        />
      )}
    </>
  );
};

export default Kyc;
