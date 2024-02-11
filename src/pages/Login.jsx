import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import logo from "../assets/logo.png";
import { Authentication } from "../api/authApi";
import { toast } from 'react-toastify';
import CircularLoader from "../components/Loaders/CircularLoader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { setTempPhoneNumber } from "../store/AuthSlice";

const validationSchema = Yup.object().shape({
  phone_number:  Yup.string()
  .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
  .required('Phone number is required'),
});

function Login() {
  //loading and error state
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const navigate=useNavigate()
  const dispatch = useDispatch();
  

  // we have to redirect user to login page if user account created successfully
  const initialValues = {
    phone_number: "",
  }

  const handleSubmit = (values) => {
   
    
    setLoading(true)
   
    
    Authentication.userLogin(values)
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        
        if(resp.error=="true"){
               console.log("error");
               
                setIsError(true)
                setError(resp.msg)
        }
        else{
          //if success
          alert(resp.otp)
          setSuccess(true)
          setIsError(false)
          console.log("sucess");
         
          setTimeout(()=>{
            navigate("/verify-otp")
          },1000)

       dispatch(setTempPhoneNumber(values.phone_number))
        }
      })
      .catch((e) => {
      toast.error("error")
      
      
      });
      setLoading(false)
  };
  return (
    <div className="mt-[80px] flex items-center justify-center">
      {success && toast.success("otp send to this number") }
      {isError &&  toast.error(error)}

    <div className="hidden">  </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="sm:w-3/12 w-11/12 bg-white p-4 sm:mt-[40px] mt-[80px] text-black">
            <img src={logo} alt="" className="w-8 mx-auto mb-3" />
            <p className="font-semibold text-center mb-5">LOGIN</p>
           

            <div className="w-full mb-2 ">
              <Field
                type="text"
                id="phone_number"
                name="phone_number"
                placeholder="Enter your phone"
                className="w-full h-full p-3  outline-none border  text-[14px] focus:border-pink-400"
              />
              {errors.phone_number && touched.phone_number && (
                <div className="text-[10px] mt-0 text-red-500">
                  {errors.phone_number}
                </div>
              )}
            </div>

           

          
            <button
              type="submit"
              className="w-full bg-pink-500 text-white p-2 mt-5 font-semibold"
            >
            {loading?<CircularLoader/>: " CONTINUE" }
            
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
