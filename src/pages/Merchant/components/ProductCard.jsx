import React from "react";

function ProductCard() {
  return (
    <div className="p-2  rounded-md flex items-center space-x-2 text-[15px] font-semibold justify-between  link ">
      <div className="flex items-center space-x-[20px] ">
        <div className="image sm:w-[40px] w-[80px] h-full">
          <img
            src="https://5.imimg.com/data5/ANDROID/Default/2022/3/VE/JE/QO/133446912/product-jpeg-500x500.jpg"
            alt=""
            className="w-full sm:rounded-full h-full"
          />
        </div>

        <div className="sm:flex sm:space-x-3">
          <div className="prod-name">
            Adidas Combos High Quality Lycra Tshirt & Lower
          </div>
          <div className="brand text-[12px]">Addidas</div>
          <div className="category text-[12px]">tshirt</div>
          <div className="stocks  text-[12px]">100Qty</div>
          <div className="price text-[15px]">₹ 124</div>
          <div className="updated on text-[12px]">02/02/2024</div>

          <div className="btns flex space-x-1 mt-[10px] sm:mt-0">
            <div className="edit bg-[#f83460] px-3 py-1 rounded-md text-white text-[12px] w-[60px]  ">
              Update
            </div>
            <div className="edit bg-red-500 px-3 py-1 rounded-md text-white text-[12px] w-[60px]">
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
