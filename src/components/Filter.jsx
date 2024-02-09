import React from "react";
import search from "../assets/search.png";
function Filter() {
  return (
    <div className="w-full p-2">
      <div className="flex justify-between  mb-4 font-semibold text-blue-500">
        <h2 className="text-[14px] ">FILTERS</h2>
        <h2 className="text-[14px] link">CLEAR</h2>
      </div>

      <div className="human-section space-y-2 text-[12px] ">
        <input type="checkbox" /> <label htmlFor="">Men</label>
        <br />
        <input type="checkbox" /> <label htmlFor="">Women</label>
        <br />
        <input type="checkbox" /> <label htmlFor="">Boys</label>
        <br />
        <input type="checkbox" /> <label htmlFor="">Girls</label>
        <br />
        <input type="checkbox" /> <label htmlFor="">Kids</label>
        <br />
      </div>
      <div className="category-section">
        <div className="flex justify-between items-center">
          <p className="text-[14px] font-semibold mt-4 mb-3">CATEGORIES</p>
          <div className="bg-gray-200 rounded-full p-1 link">
            <img src={search} alt="" className="w-[20px]" />
          </div>
        </div>

        <div className="categories w-full h-[300px] overflow-y-scroll text-[12px] space-y-2 scroll ">
          <input type="checkbox" /> <label htmlFor="">Men</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Women</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Boys</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Girls</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Kids</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Men</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Women</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Boys</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Girls</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Kids</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Men</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Women</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Boys</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Girls</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Kids</label>
          <br />
        </div>
      </div>
      <div className="brand-section">
        <div className="flex justify-between items-center">
          <p className="text-[14px] font-semibold mt-4 mb-3">BRANDS</p>
          <div className="bg-gray-200 rounded-full p-1 link">
            <img src={search} alt="" className="w-[20px]" />
          </div>
        </div>

        <div className="categories w-full h-[300px] overflow-y-scroll text-[12px] space-y-2  scroll">
          <input type="checkbox" /> <label htmlFor="">Men</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Women</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Boys</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Girls</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Kids</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Men</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Women</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Boys</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Girls</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Kids</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Men</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Women</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Boys</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Girls</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Kids</label>
          <br />
        </div>
      </div>

      <div className="price-section">
        <div className="flex justify-between items-center">
          <p className="text-[14px] font-semibold mt-4 mb-3">PRICE</p>
        </div>
        <div className="price-ranges-bitween  w-full h-auto overflow-y-scroll text-[12px] space-y-2 scroll ">
          <input type="checkbox" /> <label htmlFor="">Kids</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Men</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Women</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Boys</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Girls</label>
          <br />
          <input type="checkbox" /> <label htmlFor="">Kids</label>
          <br />
        </div>
      </div>

      <div className="color-section">
        <div className="flex justify-between items-center">
          <p className="text-[14px] font-semibold mt-4 mb-3">COLORS</p>
          <div className="bg-gray-200 rounded-full p-1 link">
            <img src={search} alt="" className="w-[20px]" />
          </div>
        </div>
        <div className="colors  w-full h-[100px] overflow-y-scroll text-[12px] space-y-2 scroll ">
          <div className="color flex space-x-2 items-center">
            <div className="w-[14px] h-[14px] rounded-full bg-black"></div> <p>Black</p>
          </div>
          <div className="color flex space-x-2 items-center">
          <div className="w-[14px] h-[14px] rounded-full bg-blue-200"></div> <p>Black</p>
        </div>
        <div className="color flex space-x-2 items-center">
        <div className="w-[14px] h-[14px] rounded-full bg-black"></div> <p>Black</p>
      </div> <div className="color flex space-x-2 items-center">
      <div className="w-[14px] h-[14px] rounded-full bg-black"></div> <p>Black</p>
    </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
