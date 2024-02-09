import React from "react";

function CartItem() {
  return (
    <div className="w-full  h-[120px] flex border">
      <div className="image w-1/3 h-full">
        <img
          src="https://img.freepik.com/free-photo/sensual-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-blue-studio-background-holding-trendy-handbag_285396-2929.jpg"
          alt=""
          className="w-full h-full"
        />
      </div>{" "}
      <div className="info w-2/3 p-2">
        <div className="name flex justify-between items-center">
          <span className="text-[14px] font-semibold"> Addidas </span>{" "}
          <span className="text-[10px]"> REMOVE </span>{" "}
        </div>{" "}
        <div className="additional-info leading-4">
          <div className="prod-desc  text-[14px] text-gray-400">
            A new winter wear
          </div>
        </div>{" "}
        <div className="price text-[12px]"> RS .234 </div>{" "}
        <div className="quantity-and-size space-x-2 mt-2 sm:flex justify-between items-center">
          <div className="sizes text-[10px] flex justify-start items-center space-x-2">
            <input type="radio" /> <label htmlFor=""> M </label>{" "}
            <input type="radio" /> <label htmlFor=""> L </label>{" "}
            <input type="radio" /> <label htmlFor=""> XL </label>{" "}
            <input type="radio" /> <label htmlFor=""> XXL </label>{" "}
          </div>
          <div className="qty-info flex p-1 space-x-2 sm:justify-start justify-end">
            <div className="dec w-[20px] h-[20px] border border-red-400 flex justify-center items-center link">
             -
            </div>
            <div className="qty w-[20px] h-[20px] flex justify-center items-center link">
            
              1
            </div>
            <div className="inc w-[20px] h-[20px] border border-green-400 flex justify-center items-center link">
             
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
