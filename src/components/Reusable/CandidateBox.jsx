import React from "react";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { Link } from "react-router-dom";

const CandidateBox = () => {
  return (
    <Link relative="path" to="../managementprofile">
      <div className="candidatebox">
        <div className="candidateboximg">
          <img src="/images/candidateimg.png" alt="person" />
        </div>
        <div className="candidateboxcontent">
          <h5>UX UI Designer</h5>
          <div className="name">
            <h1>Bob ziroll</h1>
            <ArrowOutwardRoundedIcon />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Massa nulla sit enim id
            risus quam at. Orci in euismod quam sit diam ipsum.
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CandidateBox;
