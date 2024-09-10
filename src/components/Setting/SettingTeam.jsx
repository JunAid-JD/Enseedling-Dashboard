import React from "react";
import SettingTeambox from "../Reusable/SettingTeambox";

const SettingTeam = () => {
  return (
    <div className="settingteam">
      <h3>Team you are with</h3>
      <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>

      <div className="teams">
        <div className="teambox">
          <div className="teamname">
            <img src="/images/settingprofileimg.png" alt="prolie" />
            <h2>Team Bob</h2>
          </div>
          <div className="teamstatus">
            <span className="blue">Leave</span>
          </div>
        </div>
        {/* 1st */}
        <div className="teambox">
          <div className="teamname">
            <img src="/images/settingprofileimg.png" alt="prolie" />
            <h2>Team Shaun</h2>
          </div>
          <div className="teamstatus">
            <span className="blue">Leave</span>
          </div>
        </div>
        {/* 2nd */}
        <div className="teambox">
          <div className="teamname">
            <img src="/images/settingprofileimg.png" alt="prolie" />
            <h2>Team Hitesh</h2>
          </div>
          <div className="teamstatus">
            <span className="blue">Leave</span>
          </div>
        </div>
      </div>

      <h3>Team members</h3>
      <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>

      <div className="teams">
        <SettingTeambox name={"Bob Ziroll"} />
        <SettingTeambox name={"Shaun JP"} />
        <SettingTeambox name={"Alex"} />
        <SettingTeambox name={"Harry"} />
      </div>
    </div>
  );
};

export default SettingTeam;
