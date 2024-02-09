import React from "react";
import OrderingProcess from "../components/CartComponents/OrderingProcess";

function Address() {
  return <div className="w-full sm:mt-[100px] mt-[150px]  flex  justify-center items-center flex-col"> 
  <OrderingProcess/>
   <form action="" className="sm:w-4/12 w-11/12 border mt-4 p-3 mb-4">
   <p className="text-[12px] font-semibold">CONTACT DETAILS</p>
   <input type="text" className="w-full p-2 outline-none  border mt-2 text-[12px]" placeholder="Name*" />
   <input type="text" className="w-full p-2 outline-none  border mt-2 text-[12px]" placeholder="Mobile*" />
   <p className="text-[12px] mt-2  font-semibold">ADDRESS</p>
   <input type="text" className="w-full p-2 outline-none  border mt-2 text-[12px]" placeholder="Pincode*" />
   <input type="text" className="w-full p-2 outline-none  border mt-2 text-[12px]" placeholder="Address (House No, Building, Street, Area)**" />
   <input type="text" className="w-full p-2 outline-none  border mt-2 text-[12px]" placeholder="Locality/Town" />
   <div className="w-full flex">
   <input type="text" className="w-full p-2 outline-none  border mt-2 text-[12px]" placeholder="District" />
   <input type="text" className="w-full p-2 outline-none  border mt-2 text-[12px]" placeholder="State" /></div>
   <button className="w-full p-2 bg-pink-500 mt-4 text-white">ADD ADRRESS</button>
   </form>
  
  </div>;
}

export default Address;
