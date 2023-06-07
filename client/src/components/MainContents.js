import React from "react";
import GeneralInfo from "./GeneralInfo";
import LiveStatics from "./LiveStatics";
import RightSide from "./RightSide";
import DeviceStatus from "./DeviceStatus";

const MainContents = () => {
  return (
    <>
      <div className="flex mt-4 ">
        <GeneralInfo />
        <LiveStatics />
        <div className="h-64">
          <RightSide />
        </div>
      </div>
      <DeviceStatus />
    </>
  );
};

export default MainContents;
