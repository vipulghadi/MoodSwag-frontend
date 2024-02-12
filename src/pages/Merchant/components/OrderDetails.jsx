import React from "react";

function OrderDetails() {
  return <div className="w-full bg-[#f4f2f4] rounded-md p-2"> 
   <div className="order-items">
   <p className="font-semibold">Order Items <hr /></p></div>
   <div className="item Details flex">
     <img src="https://i.pinimg.com/564x/89/d9/34/89d9341d4290fa56cfbe670b75686389.jpg" alt="" className="w-[100px] mt-2" />
     <div className="item-info w-full bg-green-300">
     </div>
  

   
   
   </div>
  
   <div className="delivery-address">
   <p className="font-semibold  mt-3">Delivery Address</p>
   </div>
  
   <div className="font-semibold flex space-x-2 outline-none mt-3">
   <span>Status</span>
   <select id="dummy-select" className="text-[10px] ">
     <option value="option1" className="text-red-400">Pending</option>
     <option value="option2 " className="text-green-600">Delivered</option>
     <option value="option3" className="text-orange-500">Packed</option>
   </select>
 </div>
 <div className="update-btn bg-pink-500 text-white px-2 py-1 w-[200px] text-center mt-5 link">Update</div>
  </div>;
}

export default OrderDetails;
