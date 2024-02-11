import React from "react";
import CartBody from "../components/CartComponents/CartBody";
import CartBilling from "../components/CartComponents/CartBilling";
import OrderingProcess from "../components/CartComponents/OrderingProcess";

function Cart() {
  return (
    <div className="w-full sm:mt-[90px] px-4 mt-[130px] ">
    <OrderingProcess/>
      <div className="main flex  justify-center flex-wrap mt-[40px] ">
        <div className="cart-items sm:w-5/12w-full bg-white">
          <CartBody />
        </div>
        <div className="cart-cost-details sm:w-4/12  w-full"><CartBilling/></div>
      </div>
    </div>
  );
}

export default Cart;
