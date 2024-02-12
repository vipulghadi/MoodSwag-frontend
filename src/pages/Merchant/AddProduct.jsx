import React from "react";
import Sidebar from "./Sidebar";
import plus from "../../assets/plus.png";
import { useState } from "react";
function AddProduct() {
       const [productDetails, setProductDetails] = useState({
        product_name:"",
        product_image:null,
        description:"",
        base_price:null,
        discount_price:null,
        off_percentage:null,
        category:"",
        brand:"",
        items_in_stock:null,
        sizes:[],
        colors:[],
       })


  return (
    <div className="w-full flex  mt-[100px] sm:mt-[80px]  ">
      <div className="sidebar  sm:w-3/12 w-[70px] ">
        <Sidebar />
      </div>
      <div className="add-form  bg-white  p-2 flex justify-center sm:w-9/12 ">
        <form
          action=""
          className=" sm:w-1/2 space-y-2 font-semibold w-full p-1"
        >
          <p className="text-[25px] mt-4">Product Description</p>
          <input
            type="text"
            name=""
            id=""
            className="w-full p-2 outline-none border border-pink-400 rounded-md"
            placeholder="prduct name"
          />

          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            className="w-full p-2 outline-none border border-pink-400 rounded-md"
            placeholder="write about product"
          ></textarea>
          <p className="text-[17px]">Brands & Category</p>
          <div className="brand-and-category flex space-x-5">
            <div className="text-[12px] flex space-x-1 brand">
              <span>Brand :</span>
              <select id="dummy-select" className="text-[12px]">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="text-[12px] flex space-x-1 category">
              <span>Category :</span>
              <select id="dummy-select" className="text-[12px]">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>

          <div className="price-section space-y-2 ">
            <p className="text-[17px]">Price Section</p>
            <div className="flex text-[12px] space-x-1">
              <span>Original Price :</span>
              <input
                type="number"
                className=" w-[70px] px-2 outline-none border  text-[14px]"
              />
            </div>
            <div className="flex text-[12px] space-x-1">
              <span>Discount (%) :</span>
              <input
                type="number"
                className=" w-[70px] px-2 outline-none border text-[14px]"
              />
            </div>
            <div className="final-price text-[12px] space-x-2">
              <span>Final Price :</span>

              <span>200</span>
            </div>
          </div>
          <div className="avl-colors ">
            <p className="text-[17px]">Available Colors</p>
            <div className="colors-div  p-2">
              <div className="added-colors flex space-x-2">
                <select id="dummy-select" className="text-[12px]">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <img src={plus} alt="" className="w-[20px] link" />
              </div>
            </div>
          </div>
          <div className="avl-sizes">
            <p className="text-[17px]">Available Sizes</p>
            <div className="colors-div p-2">
              <div className="added-colors flex space-x-2">
                <select id="dummy-select" className="text-[12px]">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <img src={plus} alt="" className="w-[20px] link" />
              </div>
            </div>
          </div>
          <div className="items-in-stocks text-[12px]">
            <span>Items In Stocks :</span>
            <input type="text" className="p-1 border outline-none w-[50px]" />
          </div>
          <div className="item-image">
            <p className="text-[17px]">Upload Image</p>
            <input type="file" name="" id="" className="text-[12px]" />
            <img
              src="https://rukminim2.flixcart.com/image/850/1000/l0sgyvk0/t-shirt/s/y/w/xl-f-zig-zag-box-maroon-prachi-clothe-original-imagchyqgje99fmd.jpeg?q=90&crop=false"
              alt=""
              className="mt-2 w-[200px]"
            />
          </div>
          <br />
          <button className="w-full bg-pink-500 text-white p-2 mt-[53px]">
            SAVE
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
