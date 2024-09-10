import React from "react";

const SettingTeambox = ({ name }) => {
  return (
    <div className="teambox">
      <div className="teamname">
        <img src="/images/settingprofileimg.png" alt="prolie" />
        <h2>{name}</h2>
      </div>
      <div className="teamstatus">
        <span className="grey">Remove</span>
        <span className="blue">Edit</span>
      </div>
    </div>
  );
};

export default SettingTeambox;
