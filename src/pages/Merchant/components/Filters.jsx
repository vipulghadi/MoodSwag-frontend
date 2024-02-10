import React from "react";
import up from '../../../assets/up.png'
function Filters() {
  return (
    <div className="w-full p-2 flex items-center space-x-2">
      <span className="font-semibold text-[25px]">Filters</span>
      <div className="brand-filter ml-[20px]">
        <select id="dummy-select" className="text-[12px]">
          <option value="" selected disabled className="">
            Brand
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="category-filter">
        <select id="dummy-select" className="text-[12px]">
          <option value="" selected disabled>
            Category
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      <div className="price-filter flex items-center space-x-1 link">
      <span className="text-[12px]">price</span>
      <img src={up} alt="" className="w-[10px] h-[10px] transform scale-y-[-1]" />
      </div>
      <div className="update-on-filter flex items-center space-x-1 link">
      <span className="text-[12px]">updated </span>
      <img src={up} alt="" className="w-[10px] h-[10px] transform scale-y-[-1]" />
      </div>
     

    </div>
  );
}

export default Filters;
