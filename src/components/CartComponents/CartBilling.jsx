import React from "react";
import Coupon from "./Coupon";

function CartBilling() {
  return (
    <div className="w-full p-2 bg-white">
      <h2 className="text-center font-semibold">CART BILLING</h2>
      <div className="coupon-section mt-4 mb-4">
        <Coupon />
      </div>
      <hr />
      <div className="bill  p-2">
        <p className="text-[12px] font-semibold">PRICE DETAILS</p>
        <div className="box text-[11px] mt-2 space-y-1">
          <div className="flex justify-between items-center ">
            <span>Total MRP</span> <span>2134</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Total Discount</span> <span>134</span>
          </div>
          <div className="flex justify-between items-center">
          <span>Coupon Discount</span> <span>134</span>
        </div>
        <div className="flex justify-between items-center">
        <span>Platform Fees</span> <span>134</span>
      </div>
      <div className="flex justify-between items-center">
      <span>Shipping Fees</span> <span>134</span>
    </div>
    <div className="flex justify-between items-center">
      <span className="font-semibold text-[14px]">Total Amount</span> <span className="font-semibold text-[14px]">134</span>
    </div>
    
        </div>
      
      </div>
      <button className="mt-[10px] px-2 py-3 w-full bg-pink-400 text-white">PLACE ORDER</button>
    </div>
  );
}

export default CartBilling;
