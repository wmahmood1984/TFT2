import React from "react";
import leftArrowVector from "../../../../../../Assets/leftArrowVector.png";
import rightArrowVector from "../../../../../../Assets/rightArrowVector.png";
import "./historyTable.css";

const HistoryTable = ({ tab, details }) => {
  function timetoDate(time) {
    var date = new Date(time * 1000);
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${"     "} ${date.getHours()}:${date.getMinutes()}`;
  }

  // console.log("time in history",details && timetoDate(details[0].time))

  return (
    <div className="historyTable-main-wrapper">
      <table className="history-table">
        <tr className="history-table-header">
          <td>Draw No.</td>
          <td>Date & Time</td>
          <td>Winning NO.</td>
        </tr>
        {details &&
          details.map((v, i) => {
            return (
              <tr key={i}>
                <td>{v.id}</td>
                <td>{timetoDate(v.time)}</td>
                <td>{v.winners.toString()}</td>
              </tr>
            );
          })}

        {/* <tr>
          <td style={{ borderRight: "1px solid #ccc" }}>428</td>
          <td style={{ borderRight: "1px solid #ccc" }}>dd:mm:yy, hh:mm:ss</td>
          <td>4</td>
        </tr>
        <tr>
          <td style={{ borderRight: "1px solid #ccc" }}>429</td>
          <td style={{ borderRight: "1px solid #ccc" }}>dd:mm:yy, hh:mm:ss</td>
          <td>0</td>
        </tr>
        <tr>
          <td style={{ borderRight: "1px solid #ccc" }}>430</td>
          <td style={{ borderRight: "1px solid #ccc" }}>dd:mm:yy, hh:mm:ss</td>
          <td>5</td>
        </tr>
        <tr>
          <td style={{ borderRight: "1px solid #ccc" }}>431</td>
          <td style={{ borderRight: "1px solid #ccc" }}>dd:mm:yy, hh:mm:ss</td>
          <td>7</td>
        </tr> */}
      </table>
      <div className="pagination-wrapper">
        <div className="prev-next-btn prev-btn df aic">
          <img src={leftArrowVector} alt="leftArrowVector" />
          &nbsp;
          <span>Previous</span>
        </div>
        <div className="page-numbers-wrapper">
          <div className="page-number" style={{ background: "#D45E2C" }}>
            <span>1</span>
          </div>
          <div className="page-number">
            <span>2</span>
          </div>
          <div className="page-number">
            <span>3</span>
          </div>
          <div className="page-number">
            <span>4</span>
          </div>
          <div className="page-number">
            <span>5</span>
          </div>
          <div className="page-number">
            <span>6</span>
          </div>
          {/* <div className="page-number">
            <span>...</span>
          </div> */}
        </div>
        <div className="prev-next-btn next-btn">
          <span>Next</span>
          &nbsp;
          <img src={rightArrowVector} alt="rightArrowVector" />
        </div>
      </div>
    </div>
  );
};

export default HistoryTable;
