import React from "react";
import { clockedInAvatar } from "../assets";
import ClockOutCard from "../components/ClockOutCard";

function ClockOut() {
  const userInfo = {
    name: "Moses Jeremiah",
    avatar: clockedInAvatar,
    email: "tony@gmail.com",
    isActive: false,
    expiryText: "24 days left (6th October)",
    space: "Hot desk H15 (Monthly)",
  };

  return (
    <div className="mx-auto max-lg:w-[90%]">
      <ClockOutCard
        userInfo={userInfo}
        clockOutTime="10:24 AM"
        totalTimeSpent="7 hours 24 Minutes  today"
      />
    </div>
  );
}

export default ClockOut;
