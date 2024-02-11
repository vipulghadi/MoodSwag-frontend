import React from "react";
import Sidebar from "./Sidebar";
import ProductCard from "./components/ProductCard";
import Filters from "./components/Filters";

function DisplayMerchantProducts() {
  return (
    <div className="w-full flex  mt-[70px] sm:mt-[80px]  h-screen ">
      <div className="sidebar w-[70px] sm:w-3/12 ">
        <Sidebar />
      </div>

      <div className="data w-[500px]  sm:w-9/12 bg-green overflow-y-scroll scroll sm: p-5 space-y-3 bg-white">
        <Filters />
        <div className="products h-[600px] w-[500px] sm:w-full overflow-y-scroll scroll">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default DisplayMerchantProducts;
