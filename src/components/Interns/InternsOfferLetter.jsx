import {
  FileDownloadOutlined,
  ReplyRounded,
  SearchRounded,
} from "@mui/icons-material";
import React from "react";
import FormatAlignLeftOutlinedIcon from "@mui/icons-material/FormatAlignLeftOutlined";
import FormatAlignJustifyOutlinedIcon from "@mui/icons-material/FormatAlignJustifyOutlined";
import FormatAlignRightOutlinedIcon from "@mui/icons-material/FormatAlignRightOutlined";
import FormatUnderlinedOutlinedIcon from "@mui/icons-material/FormatUnderlinedOutlined";
import FormatBoldOutlinedIcon from "@mui/icons-material/FormatBoldOutlined";
import FormatItalicOutlinedIcon from "@mui/icons-material/FormatItalicOutlined";
import { Link } from "react-router-dom";
const InternsOfferLetter = () => {
  return (
    <div className="internsofferletter">
      <h3>Create Offer Letter</h3>
      <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>

      <div className="searchsection">
        <div className="searchinput">
          <span>
            <SearchRounded />
            <input type="text" placeholder="Type to search" />
          </span>
          <div className="managementassessmentdownload">
            <div className="download">
              <ReplyRounded />
              <p>Share</p>
            </div>
            <div className="download">
              <FileDownloadOutlined />
              <p>Download Report</p>
            </div>
          </div>
        </div>
      </div>

      <div className="internofferletterbox">
        <div className="head">
          <img src="/images/Logo.png" alt="logo" />
          <img src="/images/company.png" alt="logo" />
        </div>

        <label htmlFor="">Candidate Name</label>
        <input type="text" placeholder="i.e Shaun" />
        <label htmlFor="">Subject </label>
        <input
          type="text"
          placeholder="i.e. Offer Letter for Sr. UX UI Designer"
        />

        <label style={{ padding: "10px 0 0" }}>Description</label>
        <div className="descriptionbox">
          <div className="descriptionboxheader">
            <div className="descriptionboxicon">
              <FormatBoldOutlinedIcon />
              <FormatUnderlinedOutlinedIcon />
              <FormatItalicOutlinedIcon />
            </div>
            <div className="descriptionboxicon">
              <FormatAlignLeftOutlinedIcon />
              <FormatAlignJustifyOutlinedIcon />
              <FormatAlignRightOutlinedIcon />
            </div>
            <div className="descriptionboxicon">
              <img src="/images/pencilimg.png" alt="icon" />
              <img src="/images/rainboimg.png" alt="icon" />
            </div>
          </div>
          <div className="descriptionboxbody">
            <h3>Lorem ipsum dolor sit amet consectetur. Quam sit ac.</h3>
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
          </div>
        </div>

        <div className="profileformbtns jobpostbtns">
          <Link relative="path" to="..">
            <button>Cancel</button>
          </Link>
          <Link relative="path" to="../internsofferdetail">
            <button className="save">Create Offer Letter</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InternsOfferLetter;
