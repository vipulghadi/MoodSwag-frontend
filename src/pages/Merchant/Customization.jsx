import React from "react";
import Sidebar from "./Sidebar";
import plus from "../../assets/plus.png";

function Customization() {
  return (
    <div className="w-full flex  mt-[100px] sm:mt-[80px]">
      <div className="sidebar  sm:w-3/12 w-[100px]  h-screen">
        <Sidebar />
      </div>

      <div className="data w-[500px]  sm:w-9/12 bg-green overflow-y-scroll scroll sm: p-5 space-y-3 bg-white">
        <p className="text-[20px] font-semibold mb-[20px]">Create New Brand</p>
        <form action="" className="">
          <input
            type="text"
            placeholder="eg. Nike"
            className="outline-none border border-pink-400 rounded-md py-1 px-2 font-semibold w-full"
          />
          <button className="w-full p-1 bg-pink-400 text-white rounded-md mt-5">
            Create
          </button>
        </form>

      </div>
    </div>
  );
}

export default Customization;
