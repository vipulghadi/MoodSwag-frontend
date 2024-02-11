import React from "react";
import { Link } from "react-router-dom";
import brand from "../../assets/brand.png";
import add from "../../assets/add.png";
import lines from "../../assets/clear.png";
import chart from "../../assets/chart.png";
import line from "../../assets/clear.png";
import { useParams } from "react-router-dom";
import order from '../../assets/order.png'
function Sidebar() {


  return (
    <div className="w-full sm:p-3  ">
      <p className="text-[26px]  sm:block hidden">
        Hi Vipul
      </p>
      <div className="links  mt-5 flex flex-col sm:space-y-3  space-y-[40px]">
        <Link    to="/dashboard/products" className={`flex  space-x-3  items-center text-[14px] font-semibold p-1   hover:bg-pink-50 }` } >
        
          <img
            src={line}
            alt=""
            className=" w-[30px] sm:w-[30px] mx-auto sm:mx-0"
          />
          <span className="sm:block hidden text-center">My Products</span>
        </Link>

        <Link to='/dashboard/add-product' className="flex  space-x-3  items-center text-[14px] font-semibold p-1   hover:bg-pink-50 ">
         
          <img
            src={add}
            alt=""
            className=" w-[30px] sm:w-[30px] mx-auto sm:mx-0"
          />
          <span className="sm:block hidden text-center">Add New</span>
        </Link>

        <Link  to='/dashboard/analytics' className="flex  space-x-3  items-center text-[14px] font-semibold p-1   hover:bg-pink-50 ">
          
          <img
            src={chart}
            alt=""
            className=" w-[30px] sm:w-[30px] mx-auto sm:mx-0"
          />
          <span className="sm:block hidden text-center">Analytics</span>
        </Link>

        <Link to='/dashboard/customizations' className="flex  space-x-3  items-center text-[14px] font-semibold p-1   hover:bg-pink-50 ">
          
        <img
          src={brand}
          alt=""
          className=" w-[30px] sm:w-[30px] mx-auto sm:mx-0"
        />
        <span className="sm:block hidden text-center">My Brands</span>
      </Link>

      <Link to='/dashboard/orders' className="flex  space-x-3  items-center text-[14px] font-semibold p-1   hover:bg-pink-50 ">
          
      <img
        src={order}
        alt=""
        className=" w-[30px] sm:w-[30px] mx-auto sm:mx-0"
      />
      <span className="sm:block hidden text-center">My Orders</span>
    </Link>

        {/*<Link className="flex  space-x-3  items-center text-[14px] font-semibold p-1  rounded-2xl"> <img src={add} alt="" className="w-[30px]" /> <span>Add New</span></Link>
      <Link className="flex  space-x-3  items-center text-[14px] font-semibold p-1  rounded-2xl"> <img src={chart} alt="" className="w-[30px]" /> <span>Analytics</span></Link>
  <Link className="flex  space-x-3  items-center text-[14px] font-semibold p-1  rounded-2xl"> <img src={brand} alt="" className="w-[30px]" /> <span>My Brands</span></Link>*/}
      </div>
    </div>
  );
}

export default Sidebar;
