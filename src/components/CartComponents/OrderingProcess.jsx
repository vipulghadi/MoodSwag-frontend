import React from "react";

function OrderingProcess() {
  return (
    <div className="w-full  flex justify-center items-center mx-auto">
      <div className="cart-in">
        <div className="flex items-center">
          <div className="circle w-[15px] h-[15px] bg-green-500 rounded-full"></div>
          <div className="line w-[120px] h-[2px] bg-green-500"></div>
        </div>
        <span className="text-[10px]">CART</span>
      </div>
      <div className="address-in">
        <div className="flex items-center">
          <div className="circle w-[15px] h-[15px] bg-green-500 rounded-full"></div>
          <div className="line w-[120px] h-[2px] bg-green-500"></div>
        </div>
        <span className="text-[10px]">ADDRESS</span>
      </div>
      <div className="payment-in">
      <div className="flex items-center">
      <div className="circle w-[15px] h-[15px] bg-green-500 rounded-full"></div>
    </div>
    <span className="text-[10px]">PAYMENT</span></div>
    </div>
  );
}

export default OrderingProcess;
