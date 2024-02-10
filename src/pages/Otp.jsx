import React, { useState, useRef } from "react";
import { useSelector,useDispatch } from "react-redux";
import {setCredits} from '../store/AuthSlice'
import { Authentication } from "../api/authApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Otp() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpInputs = useRef([]);
  const dispatch =useDispatch()
  const navigate=useNavigate()
  //getting user phone from store
  const tempPhone = useSelector((state) => state.authState.userTempPhoneNumber);
  console.log(tempPhone);
  alert(tempPhone)
  async function verifyOtp() {
    if (tempPhone==null) {
      toast.error("invalid request")
      return;
    }
    Authentication.userVerifyOtp({ otp: otp.join(""), phone_number: tempPhone })
      .then((resp) => resp.json())
      .then((resp) => {
        //if success 
        if(resp.error=="false"){
         toast.success("login successfully")
         dispatch(setCredits({
          userId: resp.data.id,
          userEmail: resp.data.email,
          userFullName: resp.data.full_name,
          userAccessToken: resp.access_token,
          userRefreshToken: resp.refresh_token,
          userPhoneNumber: resp.data.phone_number,
          userIsLogin: true,
          userIsMerchant: resp.data.is_merchant,
          userIsVerified: true
         }))
         navigate("/home")
         
        }
        else{
          toast.error("invalid otp")
        }
      })
      .catch((error) => {
        console.log("error");
      });
  }
  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    const num = "0123456789";
    // Focus on the next input field
    if (value && index < otp.length - 1 && num.includes(value)) {
      otpInputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace to move to the previous input field
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      otpInputs.current[index - 1].focus();
    }
  };

  return (
    <div className="w-full sm:mt-[120px] mt-[200px] ">
      <div className="main  w-11/12 sm:w-4/12  p-3 border  mx-auto  sm:p-5 bg-white ">
        <img
          src="//constant.myntassets.com/pwa/assets/img/3a438cb4-c9bf-4316-b60c-c63e40a1a96d1548071106233-mobile-verification.jpg"
          alt=""
          className="w-[100px]"
        />
        <p className="font-semibold">Verify Your OTP</p>
        <p className="text-[10px] mt-[5px]">
          <span>OTP will expired</span>
          <span className="font-semibold text-[12px]">12s</span>
        </p>
        <div
          className="  mt-5 space-x-2 font-semibold
        text-[22px]"
        >
          {otp.map((digit, index) => (
            <input
              className={`p-2 border border-pink-300 outline-none w-[40px] h-[40px] text-center focus:outline-none ${
                digit ? "border-pink-400" : ""
              }`}
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              ref={(input) => (otpInputs.current[index] = input)}
              style={{ width: "40px", marginRight: "10px" }}
            />
          ))}
        </div>
        <p className="text-[12px] mt-4 link">Resend OTP</p>
        <button
          className="w-full p-2  bg-pink-500 mt-5 text-white"
          onClick={verifyOtp}
        >
          VERIFY
        </button>
      </div>
    </div>
  );
}

export default Otp;
