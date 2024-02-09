import React from "react";

function ProductCard() {
  return (
    <div className="sm:w-[200px] w-6/12 h-[350px] link bg-white  sm:mr-5 mb-2 ">
      <img
        src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23581052/2024/1/10/2cbfeb0e-7192-43cd-848e-4f465747485c1704887180892-Nautica-Men-Tshirts-8601704887180649-1.jpg"
        alt=""
        className="w-full h-[250px] object-cover"
      />
      <div className="info w-full h-full p-2">
        <div className=" brand-name font-semibold">BoohuMan</div>
        <div className=" desc text-[12px] mt-0 text-gray-500">
          texture overrate tshirt
        </div>
        <div className="price-of-product space-x-2">
          <span className="text-[13px] font-semibold">RS.1200</span>
          <span className="text-[10px] font-semibold text-gray-400">
            RS.1200
          </span>
          <span className="off-prize text-pink-500 text-[10px]">(65% OFF)</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
