import React from "react";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import cart from "../assets/cart.png";
import burger from "../assets/hamburger.png";
import dashboard from "../assets/dashboard.png";
function Navbar() {
  return (
    <div className="w-full bg-white z-20  h-auto shadow-sm flex justify-between items-center sm:px-5 px-2 flex-wrap py-3 sm:h-20 fixed top-0">
      <div className="left flex  justify-center items-center space-x-5 ml-3  ">
        <div className="logo flex  justify-center sm:items-end items-center ">
          <img src={burger} alt="" className="w-[20px] sm:hidden mr-5 ml-2" />
          <img src={logo} alt="" className="w-[35px] link" />
          <p className="text-2xl uppercase font-semibold">oodSwag</p>
        </div>
        <div className="categories  space-x-3 sm:flex hidden"></div>
      </div>
      <div className="right flex space-x-5">
        <div className="search hidden sm:block">
          <input
            type="text"
            className="w-96 outline-none bottom-0 bg-gray-100 px-3 py-2 text-[14px] rounded-sm"
            placeholder="search for products"
          />
        </div>
        <div className="flex sm:space-x-5 justify-center items-center ">
          <div className="flex justify-center  items-center flex-col">
            <img src={dashboard} alt="" className="w-[25px]" />
  {/*<p className="link text-[12px]">Dashboard</p>*/}
          </div>

          <div className="">
            <img
              src={profile}
              alt=""
              className="w-[30px] link sm:block hidden "
            />
          </div>
          <div>
            <img src={cart} alt="" className="w-[30px] link mr-[10px]" />
          </div>
          <p></p>
        </div>
      </div>
      <div className="w-full bg-pink-300 sm:hidden mt-2">
        <input
          type="text"
          placeholder="search product here "
          className="w-full p-2 bg-gray-100 outline-none"
        />
      </div>
    </div>
  );
}

export default Navbar;
