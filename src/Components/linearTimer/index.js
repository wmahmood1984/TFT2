import React,{useEffect,useState} from "react";
import "./linearTimer.css";

const LinearTimer = ({time}) => {
  const [seconds, setSeconds] = useState(60);
  
    const stakeTime = Number(time);
    var currentTimeinSeconds = new Date().getTime() / 1000
    var differenceTimeinSeconds = Math.trunc(stakeTime - currentTimeinSeconds)
    console.log("time",differenceTimeinSeconds)

    var DaysRemaining = Math.trunc((differenceTimeinSeconds /60 /60/24))
    var HoursRemaining = Math.trunc((differenceTimeinSeconds /60 /60)-(DaysRemaining*24))
    var MinutesRemaining = Math.trunc((differenceTimeinSeconds /60 )-(DaysRemaining*24*60)-(HoursRemaining*60))
    var SecondsRemaining = Math.trunc((differenceTimeinSeconds )-(DaysRemaining*24*60*60)-(HoursRemaining*60*60)-(MinutesRemaining*60))



    useEffect(() => {
        let interval = null;
        
          interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
          }, 1000);

        


         return () => clearInterval(interval);
      }, [ seconds]);

  return (
    <div className="linearTimer-main-wrapper">
      <div className="uper-text-wrapper">
        <div className="start">Start</div>
        <div className="middle-timer-text">{DaysRemaining}d : {HoursRemaining}h : {MinutesRemaining}m : {SecondsRemaining}s</div>
        <div className="end">End</div>
      </div>
      <div className="timer-Line-wrapper">
        <div className="line">
          <div className="movingCircle">
            <i className="ri-arrow-right-s-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinearTimer;
