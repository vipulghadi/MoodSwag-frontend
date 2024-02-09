import React from "react";
import cartlogo from '../../assets/cart.png'
function ProductDesc() {
  return  <div className="info-basic w-full p-3">
    <div className="block p-0 mt-5 leading-8">
    <p className="brand-name font-semibold text-[30px] p-0">BoohuMan</p>
<p className=" desc text-[25px]  text-gray-500">
  texture overrate tshirt
</p>
    </div>
 
<div className="price-of-product space-x-5 mt-5">
  <span className="text-[25px] font-semibold">RS.1200</span>
  <span className="text-[20px] font-semibold text-gray-400">
    RS.1200
  </span>
  <span className="off-prize text-pink-500 text-[20px]">(65% OFF)</span>
</div>

<div className="size w-full mt-5">
    <p className="text-[18px]">SIZES</p>
    <div className="flex space-x-2 mt-3">
    <div className="s w-[50px] h-[50px] border border-black rounded-full flex justify-center items-center link">XL</div>
    <div className="s w-[50px] h-[50px] border border-black rounded-full flex justify-center items-center">XL</div>
    <div className="s w-[50px] h-[50px] border border-black rounded-full flex justify-center items-center">XL</div>
    </div>
   
</div>
<div className="mt-4">
    <p className="text-[18px]">COLORS</p>
<div className="ava-colors w-full p-2 mt-2 flex space-x-4">
    <div className="red w-[15px] h-[15px] bg-red-500 rounded-full"></div>
    <div className="red w-[15px] h-[15px] bg-red-500 rounded-full"></div>
    <div className="red w-[15px] h-[15px] bg-red-500 rounded-full"></div>
    <div className="red w-[15px] h-[15px] bg-red-500 rounded-full"></div>
</div>
</div>
<div className="add-to-cart w-[250px] bg-pink-700 h-[50px] mt-5 rounded-md flex justify-center items-center text-white space-x-2 link mx-auto ml-0">
    <img src={cartlogo} alt="" className="w-[25px] mr-4 " />
ADD TO CART
</div>

  </div>
}

export default ProductDesc;
