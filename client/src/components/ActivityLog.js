import React from "react";
import monitor from "../Images/monitor-tablet-and-smartohone 2.png";
import playlist from "../Images/playlist 3.png";
import command from "../Images/command-line 2.png";

const ActivityLog = () => {
  return (
    <div className="  bg-white mt-2 ml-2" style={{ width: "410px" }}>
      <div className="">
        <p className="font-semibold">Activity Logs</p>
      </div>
      <div className=" h-48 overflow-y-scroll w-full mt-4">
        <table className="table-fixed">
          <tr>
            <td>
              <img src={monitor} className="w-6 h-6 ml-2" />
            </td>
            <td>
              <p className="mt-4 ml-3 text-lg">
                Device
                <span className="text-xs ">
                  <p>FutureIK-device 3 report generated successfully</p>
                </span>
              </p>
            </td>
            <td>
              <p className="mt-4 ml-2 text-gray-600">
                16 Mar 2023,
                <span>
                  {" "}
                  <p>16:30:25 PM</p>
                </span>
              </p>
            </td>
          </tr>

          <tr>
            <td colspan="3">
              <hr class="border-gray-500 w-full mt-2" />
            </td>
          </tr>

          <tr>
            <td>
              <img src={command} className="w-6 h-6 ml-2 mt-6" />
            </td>
            <td>
              <p className="mt-2 ml-3 text-lg">
                Campaign
                <span className="text-xs ">
                  <p>FutureIK-Cinemas Published successfully</p>
                </span>
              </p>
            </td>
            <td>
              <p className="mt-2 ml-2 text-gray-600">
                16 Mar 2023,
                <span>
                  {" "}
                  <p>16:30:25 PM</p>
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td colspan="3 ">
              <hr class="border-gray-500 w-full mt-2" />
            </td>
          </tr>

          <tr>
            <td>
              <img src={playlist} className="w-6 h-6 ml-2 mt-6" />
            </td>
            <td>
              <p className="mt-2 ml-3 text-lg">
                Zones
                <span className="text-xs ">
                  <p>FutureIK-Display 1 created successfully</p>
                </span>
              </p>
            </td>
            <td>
              <p className="mt-2 ml-2 text-gray-600">
                16Mar 2023,
                <span>
                  {" "}
                  <p>16:30:25 PM</p>
                </span>
              </p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ActivityLog;
