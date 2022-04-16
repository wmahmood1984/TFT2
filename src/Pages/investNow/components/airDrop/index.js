import React from "react";
import "./airDrop.css";

const AirDrop = () => {
  return (
    <div className="airDrop-main-wrapper">
      <h3 className="airDrop-title">Airdrops</h3>
      <p className="airDrop-below-text">
        Read the Medium post for all the details on each Airdrop program.
      </p>
      <div className="airdrops-box">
        <table>
          <tr>
            <td>Airdrop Details</td>
            <td>Your Airdrop Balance</td>
            <td>Days Left</td>
          </tr>
          <tr>
            <td>Vesting 1</td>
            <td>0</td>
            <td>
              {/* <div className="claim-button">
                <span>Claim</span>
              </div> */}
              <span>15 Days</span>
            </td>
          </tr>
          <tr>
            <td>Vesting 2</td>
            <td>0</td>
            <td>
              <div className="claim-button">
                <span>Claim</span>
              </div>
              {/* <span>15 Days</span> */}
            </td>
          </tr>
          <tr>
            <td>Vesting 3</td>
            <td>0</td>
            <td>
              {/* <div className="claim-button"> */}
              {/* <span>Claim</span> */}
              {/* </div> */}
              <span>15 Days</span>
            </td>
          </tr>
          <tr>
            <td>Vesting 4</td>
            <td>0</td>
            <td>
              {/* <div className="claim-button"> */}
              {/* <span>Claim</span> */}
              {/* </div> */}
              <span>15 Days</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default AirDrop;
