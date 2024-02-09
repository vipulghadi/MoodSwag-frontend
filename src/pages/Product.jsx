import React from "react";
import ProductCard from "../components/SearchedProducts/ProductCard";
import ProductImage from "../components/ProductDetails/ProductImage";
import ProductDesc from "../components/ProductDetails/ProductDesc";
import SimilarProducts from "../components/ProductDetails/SimilarProducts";
function Product() {
  return (
    <div className="w-full px-2 mt-[90px]">
      <div className="product w-full flex flex-wrap">
         {/* product image*/}
        <div className="product-img sm:w-1/2 w-full">
          <ProductImage/>
        </div>
       {/* product desc */}
        <div className="product-desc sm:w-1/2 w-full flex px-[20px]">
         <ProductDesc/>
        </div>
      </div>
      {/* similar products */}
      <div className="similar-products mt-5">
        <p className="text-center text-[20px]">SIMILAR PRODUCTS</p>
        <SimilarProducts/>
      </div>
    </div>
  );
}

export default Product;
