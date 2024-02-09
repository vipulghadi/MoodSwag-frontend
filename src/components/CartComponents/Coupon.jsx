import React from "react";

function Coupon() {
  return <div className="w-full p-2 rounded-md border border-pink-300"> 
  <h2 className="text-[14px]">Have any Coupon code?</h2>
  <div className="add-code flex w-full mt-2 space-x-2">
  <input type="text" className="w-[100px] outline-none border-0 border-b-pink-300  text-[12px] border-b-2" /><button className="px-2 bg-pink-300 text-[12px] rounded-md text-white">apply</button></div>
  </div>;
}

export default Coupon;
