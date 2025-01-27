import React from "react";
import Search from "./Search";
import Users from "./Users";
import Logout from "./Logout";

function Left() {
  return (
    <div className="w-full  bg-black text-gray-300">
      <Search />
      <div
        className="flex-1 overflow-y-auto"
        style={{ minHeight: "calc(92vh - 8vh)" }}
      >
        <Users />
      </div>

      <hr />
      <Logout />
    </div>
  );
}

export default Left;
