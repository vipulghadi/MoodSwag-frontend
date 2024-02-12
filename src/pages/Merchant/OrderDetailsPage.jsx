import React from "react";
import Sidebar from "./Sidebar";
import plus from '../../assets/plus.png'
import OrderDetails from "./components/OrderDetails";

function OrderDetailsPage() {
  return (
    <div className="w-full flex  mt-[100px] sm:mt-[80px]">
      <div className="sidebar  sm:w-3/12 w-[100px]  h-screen">
        <Sidebar />
      </div>

      <div className="data w-[500px]  sm:w-9/12 bg-green overflow-y-scroll scroll sm: p-5 space-y-3 bg-white">
        <p className="text-[15px] font-semibold mb-[10px]">Order Id <span className="text-[14px] 
         text-gray-500">#sdgoj346rsg</span></p>
    <OrderDetails/>

      </div>
    </div>
  );
}

export default OrderDetailsPage;
