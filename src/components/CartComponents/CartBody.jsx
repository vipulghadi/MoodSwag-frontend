import React from "react";
import CartItem from "./CartItem";

function CartBody() {
  return (
    <div className="w-full h-full  space-y-2 sm:h-auto p-2  ">
      <div className="w-full flex justify-between items-center px-3">
        <span> CART </span> <span> REMOVE </span>{" "}
      </div>{" "}
      <div className="items w-full  space-y-2 h-full ">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>{" "}
    </div>
  );
}

export default CartBody;
