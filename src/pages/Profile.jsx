import React from "react";

function Profile() {
  return <div className="w-full mt-[130px] sm:mt-[100px] flex justify-center"> 
  <form action="" className="sm:w-5/12 w-11/12 p-3 border">
  <p className="text-[16px] font-semibold mb-5">EDIT PROFILE</p>
  <hr />
  <input type="text"  placeholder="Full Name" className="outline-none w-full border p-2 text-[14px] mt-4"/>
  <input type="text"  placeholder="Email" className="outline-none w-full border p-2 text-[14px] mt-4"/>
  <input type="text"  placeholder="Date of Birth" className="outline-none w-full border p-2 text-[14px] mt-4"/>
  <input type="text"  placeholder="Mobile" className="outline-none w-full border p-2 text-[14px] mt-4"/>
  <input type="text"  placeholder="Alternate Mobile" className="outline-none w-full border p-2 text-[14px] mt-4"/>
  <button className="w-full p-2 text-white bg-pink-500 mt-5">SAVE</button>
  
  </form>
  </div>;
}

export default Profile;
