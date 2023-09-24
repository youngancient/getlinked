import { StopwatchStyles } from "@/styles/ComponentStyles/Stopwatch";
import { FunctionComponent, useEffect, useState } from "react";

interface IStopwatch {
  hours: number;
  minutes: number;
  seconds: number;
}

export const Stopwatch: FunctionComponent<IStopwatch> = ({
  hours,
  minutes,
  seconds,
}) => {
  const [remainingTime, setRemainingTime] = useState({
    hours,
    minutes,
    seconds,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      if (
        remainingTime.hours === 0 &&
        remainingTime.minutes === 0 &&
        remainingTime.seconds === 0
      ) {
        clearInterval(interval);
        // You can add a callback or logic to handle when the countdown reaches zero here
      } else {
        const updatedRemainingTime = { ...remainingTime };

        if (updatedRemainingTime.seconds === 0) {
          if (updatedRemainingTime.minutes === 0) {
            updatedRemainingTime.hours -= 1;
            updatedRemainingTime.minutes = 59;
          } else {
            updatedRemainingTime.minutes -= 1;
          }
          updatedRemainingTime.seconds = 59;
        } else {
          updatedRemainingTime.seconds -= 1;
        }

        setRemainingTime(updatedRemainingTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingTime]);
  return (
    <StopwatchStyles>
      <div className="digit">
        <p>{remainingTime.hours}</p>
        <span>H</span>
      </div>
      <div className="digit">
        <p>
          {remainingTime.minutes < 10
            ? `0${remainingTime.minutes}`
            : remainingTime.minutes}
        </p>
        <span>M</span>
      </div>
      <div className="digit">
      <p>
          {remainingTime.seconds < 10
            ? `0${remainingTime.seconds}`
            : remainingTime.seconds}
        </p>
        <span>S</span>
      </div>
    </StopwatchStyles>
  );
};
