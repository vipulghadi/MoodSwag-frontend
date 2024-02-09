import React from "react";
import HeroSlider from "../components/HeroSlider";
import ShopByCategory from "../components/ShopByCategory/ShopByCategory";
function Home() {
  return <div className="sm:px-[40px] px-4 w-screen">
    <HeroSlider/>
    <div className="mt-[50px]"><ShopByCategory/></div>
    
  </div>;
}

export default Home;
