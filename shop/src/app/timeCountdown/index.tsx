'use client';
import React, { useState, useEffect, useRef } from "react";

export default function FlashSalesCountdown() {
  const targetDateRef = useRef(new Date());
  if (!targetDateRef.current || targetDateRef.current.getTime() === new Date().getTime()) {
    const newTarget = new Date();
    newTarget.setDate(newTarget.getDate() + 3);
    targetDateRef.current = newTarget;
  }

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDateRef.current.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center space-x-20 pt-[20px] ml-[120px] mr-[120px]">
      <div>
        <h1 className="font-black text-[35px]">Flash Sales</h1>
      </div>

      <div className="flex space-x-7">
        <div className="flex flex-col items-center">
          <p>Days</p>
          <h1 className="text-[30px] font-black">{timeLeft.days}</h1>
        </div>
        <div className="text-[50px] text-red-500 self-end">:</div>

        <div className="flex flex-col items-center">
          <p>Hours</p>
          <h1 className="text-[30px] font-black">{timeLeft.hours}</h1>
        </div>
        <div className="text-[50px] text-red-500 self-end">:</div>

        <div className="flex flex-col items-center">
          <p>Minutes</p>
          <h1 className="text-[30px] font-black">{timeLeft.minutes}</h1>
        </div>
        <div className="text-[50px] text-red-500 self-end">:</div>

        <div className="flex flex-col items-center">
          <p>Seconds</p>
          <h1 className="text-[30px] font-black">{timeLeft.seconds}</h1>
        </div>
      </div>
    </div>
  );
}
