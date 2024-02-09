import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import logo from "../assets/logo.png";
import { Authentication } from "../api/authApi";
import { toast } from 'react-toastify';
import CircularLoader from "../components/Loaders/CircularLoader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const validationSchema = Yup.object().shape({
  full_name: Yup.string().required("Full name is required"),
  phone_number:  Yup.string()
  .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
  .required('Phone number is required'),
  email: Yup.string().email("Invalid email").required("Email is required"),
  is_merchant: Yup.string().required("User type is required"),
});

function Register() {
  //loading and error state
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const navigate=useNavigate()


  // we have to redirect user to login page if user account created successfully
  const initialValues = {
    full_name: "",
    phone_number: "",
    email: "",
    is_merchant: "false",
  };
  const handleSubmit = (values) => {
    setLoading(true)
    Authentication.userRegister(values)
      .then((resp) => resp.json())
      .then((resp) => {
        if(resp.error=="true"){
                setIsError(true)
                setError(resp.msg)
        }
        else{
          //if success
          setSuccess(true)
          setIsError(false)
          setTimeout(()=>{
            navigate("/login")
          },1000)
        }
      })
      .catch((e) => {
        console.log(e);
      });
      setLoading(false)
  };
  return (
    <div className="mt-[80px] flex items-center justify-center">
 {  success? toast.success("account created successfully")?isError:toast.error(error):null}
    <div className="hidden">  </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="sm:w-3/12 w-11/12 bg-white p-4 sm:mt-[40px] mt-[80px] text-black">
            <img src={logo} alt="" className="w-8 mx-auto mb-3" />
            <p className="font-semibold text-center mb-5">REGISTER </p>
            <div className="w-full mb-2 ">
              <Field
                type="text"
                id="full_name"
                name="full_name"
                placeholder="Enter your full name"
                className="w-full h-full p-3  outline-none border  text-[14px] focus:border-pink-400"
              />
              {errors.full_name && touched.full_name && (
                <div className="text-[10px] mt-0 text-red-500">
                  {errors.full_name}
                </div>
              )}
            </div>

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

            <div className="w-full mb-2 ">
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full h-full p-3  outline-none border  text-[14px] focus:border-pink-400"
              />
              {errors.email && touched.email && (
                <div className="text-[10px] mt-0 text-red-500">
                  {errors.email}
                </div>
              )}
            </div>

            <div className="w-full mb-2 ">
              <Field
                as="select"
                id="is_merchant"
                name="is_merchant"
                placeholder=""
                className="w-full p-2 outline-none border mb-2 text-[14px] focus:border-pink-400"
              >
                <option value="merchant" >Merchant</option>
                <option value="customer">Customer</option>
              </Field>
              {errors.is_merchant && touched.is_merchant && (
                <div>{errors.is_merchant}</div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 text-white p-2 mt-5 font-semibold"
            >
            {loading?<CircularLoader/>: " REGISTER" }
            
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
