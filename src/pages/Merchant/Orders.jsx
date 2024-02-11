import React from "react";
import Sidebar from "./Sidebar";
import ProductCard from "./components/ProductCard";
import Filters from "./components/Filters";
import OrderCard from "./components/OrderCard";

function Orders() {
  return (
    <div className="w-full flex  mt-[100px] sm:mt-[80px]  ">
      <div className="sidebar w-[70px] sm:w-3/12 ">
        <Sidebar />
      </div>

      <div className="data w-[500px]  sm:w-9/12 bg-green overflow-y-scroll scroll sm: p-5 space-y-3 bg-white">
        <div className="font-semibold flex space-x-2 outline-none">
        
          <span>Status</span>
          <select id="dummy-select" className="text-[10px] ">
            <option value="option1" className="text-red-400">Pending</option>
            <option value="option2 " className="text-green-600">Delivered</option>
            <option value="option3" className="text-orange-500">Packed</option>
          </select>
        </div>
        <div className="products h-[600px] w-[500px] sm:w-full overflow-y-scroll scroll">
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </div>
      </div>
    </div>
  );
}

export default Orders;
