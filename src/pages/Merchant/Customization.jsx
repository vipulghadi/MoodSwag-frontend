import React from "react";
import Sidebar from "./Sidebar";
import plus from '../../assets/plus.png'

function Customization() {
  return   <div className="w-full  mt-[100px] p-3 flex sm:mt-[80px]">
  <div className="sidebar  sm:w-3/12  ">
    <Sidebar />
  </div>
  <div className="add-form    w-full p-2 flex  justify-center flex-col items-center  ">
  <p className="text-[20px] font-semibold mb-[20px]">Create New Brand</p>
  <form action="">
  <input type="text"  placeholder="saf" className="outline-none border border-pink-400 rounded-md p-1 w-full"/>
  <button className="w-full p-1 bg-pink-400 text-white rounded-md mt-5">Create</button>
  </form>
        
  </div>
</div>;
}

export default Customization;
