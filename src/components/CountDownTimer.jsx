import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
// import "../styles/globals.css";
const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6,
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="text-[20px]">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function CountDownTimer() {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endDateTime = new Date("2023-11-01T00:00:00"); // November 1, 2023, 00:00:00
  const endTime = endDateTime.getTime() / 1000; // Convert to UNIX timestamp in seconds
  // const endTime = stratTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <div className="flex justify-between text-center pt-[40px]">
      <CountdownCircleTimer
        {...timerProps}
        size={85}
        colors="#010101"
        duration={daysDuration}
        initialRemainingTime={remainingTime}
        className="white-text-color"
      >
        {({ elapsedTime, color }) => (
          <span style={{ color: "white" }}>
            {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>

      <CountdownCircleTimer
        {...timerProps}
        size={85}
        colors="#ED1C26"
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        className="white-text-color"
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color: "white" }}>
            {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>

      <CountdownCircleTimer
        {...timerProps}
        size={85}
        colors="#ED1C26"
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        className="white-text-color"
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color: "white" }}>
            {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        size={85}
        colors="#51B747"
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        className="white-text-color"
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > 0,
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color: "white" }}>
            {renderTime("seconds", getTimeSeconds(elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
    </div>
  );
}
