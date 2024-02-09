import React from "react";
import Card from "./Card";

function ShopByCategory() {

  return (
    <div className="w-full bg-black-300 mt-[50px]">
      <h2 className="text-2xl uppercase mb-4 text-center"> Shop By Category </h2>
      <div className="cate-cards flex   flex-wrap justify-center items-center">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}

export default ShopByCategory;
