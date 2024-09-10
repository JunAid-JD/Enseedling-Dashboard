import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import './CSS/Submission.css';
import './CSS/Home.css';
import './CSS/Profile.css';
import './CSS/Navsidebar.css';
import './CSS/Header.css';
import './CSS/KYC.css';
import './CSS/Jobs.css';
import './CSS/Assessment.css';
import './CSS/Candidates.css';
import './CSS/Management.css';
import './CSS/Interns.css';
import './CSS/Payment.css';
import './CSS/Message.css';
import './CSS/Setting.css';
import './CSS/Notification.css';
import './CSS/Logout.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


