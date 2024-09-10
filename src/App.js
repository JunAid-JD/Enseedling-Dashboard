import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Kyc from "./components/KYC/Kyc";
import NavSidebar from "./components/NavSidebar";
import Profile from "./components/Profile/Profile";
import Jobs from "./components/Jobs/Jobs";
import JopPost from "./components/Jobs/JopPost";
import JobDetail from "./components/Jobs/JobDetail";
import Assessments from "./components/Assessment/Assessments";
import CreateAssessments from "./components/Assessment/CreateAssessments";
import DetailAssessments from "./components/Assessment/DetailAssessments";
import Candidates from "./components/Candidates/Candidates";
import Management from "./components/Management/Management";
import ManagementResume from "./components/Management/ManagementResume"
import ManagementAssessment from "./components/Management/ManagementAssessment"
import ManagementShortlist from "./components/Management/ManagementShortlist"
import ManagementInterview from "./components/Management/ManagementInterview"
import ManagementProfile from "./components/Management/ManagementProfile"
import Interns from "./components/Interns/Interns";
import InternsAttendence from "./components/Interns/InternsAttendence";
import InternsSlip from "./components/Interns/InternsSlip";
import InternsAttendenceDetail from "./components/Interns/InternsAttendenceDetail";
import InternsSlipDetail from "./components/Interns/InternsSlipDetail";
import InternsFeedback from "./components/Interns/InternsFeedback";
import InternsOffer from "./components/Interns/InternsOffer";
import InternsOfferLetter from "./components/Interns/InternsOfferLetter";
import InternsOfferDetail from "./components/Interns/InternsOfferDetail";
import Payment from "./components/Payment/Payment";
import PaymentMethod from "./components/Payment/PaymentMethod";
import PaymentDetail from "./components/Payment/PaymentDetail";
import Message from "./components/Message/Message";
import Setting from "./components/Setting/Setting";
import SettingProfile from "./components/Setting/SettingProfile";
import SettingPassword from "./components/Setting/SettingPassword";
import SettingTeam from "./components/Setting/SettingTeam";
import { useState } from "react";


function App() {
  const [logout, Setlogout] = useState(false);
  return (
    <>
      <Header />
      <main>
        <NavSidebar logout={logout} Setlogout={Setlogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/kyc" element={<Kyc />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/post" element={<JopPost />} />
          <Route path="/jobs/detail" element={<JobDetail />} />
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/assessments/create" element={<CreateAssessments />} />
          <Route path="/assessments/detail" element={<DetailAssessments />} />
          <Route path="/candidates" element={<Candidates />} />

          <Route path="/management" element={<Management />} >
            <Route index element={<ManagementResume />} />
            <Route path="managementassessment" element={<ManagementAssessment />} />
            <Route path="managementshortlist" element={<ManagementShortlist />} />
            <Route path="managementinterview" element={<ManagementInterview />} />
            <Route path="managementprofile" element={<ManagementProfile />} />
          </Route>


          <Route path="/interns" element={<Interns />} >
            <Route index element={<InternsAttendence />} />
            <Route path="internattendencedetail" element={<InternsAttendenceDetail />} />
            <Route path="internslip" element={<InternsSlip />} />
            <Route path="internslipdetail" element={<InternsSlipDetail />} />
            <Route path="internsfeedback" element={<InternsFeedback />} />
            <Route path="internsoffer" element={<InternsOffer />} />
            <Route path="internsofferletter" element={<InternsOfferLetter />} />
            <Route path="internsofferdetail" element={<InternsOfferDetail />} />
          </Route>


          <Route path="/payment" element={<Payment />} />
          <Route path="/paymentmethod" element={<PaymentMethod />} />
          <Route path="/paymentdetail" element={<PaymentDetail />} />


          <Route path="/message" element={<Message />} />

          <Route path="/setting" element={<Setting />} >
            <Route index element={<SettingProfile />} />
            <Route path="settingpassword" element={<SettingPassword />} />
            <Route path="settingteam" element={<SettingTeam />} />
          </Route>


        </Routes>
      </main>
    </>
  );
}

export default App;
