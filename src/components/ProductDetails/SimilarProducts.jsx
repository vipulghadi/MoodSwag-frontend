import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../SearchedProducts/ProductCard";
function SimilarProducts() {
    const settings = {
        dots: true,
        speed: 4500,
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
      };
    
      return (
        <div className="w-full bg-red-100 sm:h-[170px]  mt-5  space-x-1">
          <Slider {...settings} >
          <div className="mr-3"> <ProductCard/></div>
          <div className="mr-3"> <ProductCard/></div>
          <div className="mr-3"> <ProductCard/></div>
          <div className="mr-3"> <ProductCard/></div>
          <div className="mr-3"> <ProductCard/></div>
          <div className="mr-3"> <ProductCard/></div>
          <div className="mr-3"> <ProductCard/></div>
          <div className="mr-3"> <ProductCard/></div>
        
          
          
          </Slider>
        </div>
      );
    }
    


export default SimilarProducts;
