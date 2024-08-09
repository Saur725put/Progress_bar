import React from "react";
import { useState, useEffect } from "react";
import {
  INTERVAL_INCREMENT,
  INTERVAL_SPEED_IN_MS,
  MAX_VALUE,
  MIN_VALUE,
} from "../constant";

export default function ProgressBar() {
  const [bar, setBar] = useState(MIN_VALUE);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("setInteval running");
      setBar((prevBarValue) => {
        if (prevBarValue >= MAX_VALUE) {
          clearInterval(interval);
        }
        return Math.min(prevBarValue + INTERVAL_INCREMENT, MAX_VALUE);
      });
    }, INTERVAL_SPEED_IN_MS);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="container">
      <div
        style={{ transform: `translateX(${bar - 100}%)` }}
        className="progress"
      ></div>
    </div>
  );
}
