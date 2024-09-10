import {
  FileDownloadOutlined,
  ReplyRounded,
  SearchRounded,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div className="payment">
      <h3>Payment Method </h3>
      <p>Lorem ipsum dolor sit amet consectetur. Gravida tellus.</p>

      <div className="paymentmethodbox">
        <div className="paymentmethod activepaymentmethod">
          <div className="method">
            <img src="/images/paymentimg1.png" alt="logo" />
            <div className="methoddetail">
              <h5 className="activehead">Visa ending in 1234</h5>
              <p>Expiry 06/2024</p>
            </div>
          </div>
          <img src="/images/checkuser.png" alt="logo" />
        </div>
        {/* 2nd */}
        <div className="paymentmethod">
          <div className="method">
            <img src="/images/paymentimg2.png" alt="logo" />
            <div className="methoddetail">
              <h5>Mastercard ending in 1234</h5>
              <p>Expiry 06/2024</p>
            </div>
          </div>
          <img src="/images/uncheckuser.png" alt="logo" />
        </div>
        {/* 3rd */}
        <div className="paymentmethod">
          <div className="method">
            <img src="/images/paymentimg3.png" alt="logo" />
            <div className="methoddetail">
              <h5>Visa ending in 1234</h5>
              <p>Expiry 06/2024</p>
            </div>
          </div>
          <img src="/images/uncheckuser.png" alt="logo" />
        </div>
        {/* 4nd */}
        <div className="paymentmethod">
          <div className="method">
            <img src="/images/paymentimg4.png" alt="logo" />
            <div className="methoddetail">
              <h5>Stripe (Visa ending 1234)</h5>
              <p>Expiry 06/2024</p>
            </div>
          </div>
          <img src="/images/uncheckuser.png" alt="logo" />
        </div>
        {/* 5nd */}
        <div className="paymentmethod">
          <div className="method">
            <img src="/images/paymentimg5.png" alt="logo" />
            <div className="methoddetail">
              <h5>PayPal (Visa ending 1234)</h5>
              <p>Expiry 06/2024</p>
            </div>
          </div>
          <img src="/images/uncheckuser.png" alt="logo" />
        </div>
        <div className="profileformbtns jobpostbtns">
          <Link relative="path" to="../paymentmethod">
            <button className="save">Add Methods</button>
          </Link>
        </div>
      </div>

      <h3>Transaction History</h3>
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

      <table>
        <thead className="candidatetablehead">
          <tr>
            <td>
              <div className="tableheadfirst">
                <input type="checkbox" /> <p>Invoice ID</p>
              </div>
            </td>
            <td>Amount</td>
            <td>Date</td>
            <td>Status</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="tablebodyfirst">
                <input type="checkbox" />
                <p className="darktext">Invoice#12345</p>
              </div>
            </td>
            <td>$25000</td>
            <td>May 20, 2023</td>
            <td className="green">Completed</td>
            <td className="downloadpart">
              <FileDownloadOutlined />
              <span>Download</span>
            </td>
          </tr>
          {/* 2nd */}
          <tr>
            <td>
              <div className="tablebodyfirst">
                <input type="checkbox" />
                <p className="darktext">Invoice#12345</p>
              </div>
            </td>
            <td>$25000</td>
            <td>May 20, 2023</td>
            <td className="green">Completed</td>
            <td className="downloadpart">
              <FileDownloadOutlined />
              <span>Download</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className="tablebodyfirst">
                <input type="checkbox" />
                <p className="darktext">Invoice#12345</p>
              </div>
            </td>
            <td>$25000</td>
            <td>May 20, 2023</td>
            <td className="red">Failed</td>
            <td className="downloadpart">
              <FileDownloadOutlined />
              <span>Download</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className="tablebodyfirst">
                <input type="checkbox" />
                <p className="darktext">Invoice#12345</p>
              </div>
            </td>
            <td>$25000</td>
            <td>May 20, 2023</td>
            <td className="blue">Pending</td>
            <td className="downloadpart">
              <FileDownloadOutlined />
              <span>Download</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className="tablebodyfirst">
                <input type="checkbox" />
                <p className="darktext">Invoice#12345</p>
              </div>
            </td>
            <td>$25000</td>
            <td>May 20, 2023</td>
            <td className="green">Completed</td>
            <td className="downloadpart">
              <FileDownloadOutlined />
              <span>Download</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className="tablebodyfirst">
                <input type="checkbox" />
                <p className="darktext">Invoice#12345</p>
              </div>
            </td>
            <td>$25000</td>
            <td>May 20, 2023</td>
            <td className="green">Completed</td>
            <td className="downloadpart">
              <FileDownloadOutlined />
              <span>Download</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Payment;
