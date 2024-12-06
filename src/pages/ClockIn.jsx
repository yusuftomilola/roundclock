import React from "react";
import ClockCard from "../components/ClockInCard";
import { clockedInAvatar } from "../assets";

function ClockIn() {
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
      <ClockCard
        userInfo={userInfo}
        clockInTime="10:24 AM"
        paymentRequired={false}
        isError={false}
      />
    </div>
  );
}

export default ClockIn;
