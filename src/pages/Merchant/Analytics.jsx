import React from "react";
import Sidebar from "./Sidebar";
import plus from '../../assets/plus.png'

function Analytics() {
     return   <div className="w-full flex  mt-[100px] sm:mt-[80px]  h-screen">
  <div className="sidebar  sm:w-3/12 w-[70px]  ">
    <Sidebar />
  </div>

  <div className="form w-[500px]  sm:w-9/12 bg-green overflow-y-scroll scroll sm: p-5 space-y-3 bg-white">
  <p className="text-[20px] font-semibold mb-[20px]">Create New Brand</p>
  <form action="">
  <input type="text"  placeholder="saf" className="outline-none border border-pink-400 rounded-md p-1 w-full"/>
  <button className="w-full p-1 bg-pink-400 text-white rounded-md mt-5">Create</button>
  </form>
        
  </div>
</div>;;
}

export default Analytics;
