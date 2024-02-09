import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer } from "./components/Footer";
import SearchPage from "./pages/SearchPage";
import Address from "./pages/Address";
import Profile from "./pages/Profile";
import Otp from "./pages/Otp";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import {setCredits,setTempPhoneNumber} from '../src/store/AuthSlice'

function App() {
  const dispatch=useDispatch()
 useEffect(()=>{
   //if local storage.authCredits is not null ,we can capture it from local stotrage

   if(JSON.parse(localStorage.getItem("authCredits"))){
    
        const credits=JSON.parse(localStorage.getItem("authCredits"))
        console.log(credits);
        console.log("in useEffect");
        
        dispatch(setCredits(credits.userCredits))
        dispatch(setTempPhoneNumber(credits.
          userTempPhoneNumber))
   }
 },[])

  return (
    <>
    <ToastContainer
    autoClose={60000}/>
      <Navbar/>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}></Route >
            <Route path="/home" element={<Home />}></Route >
            <Route path="/register" element={<Register />}></Route>
            <Route path="/verify-otp" element={<Otp />}></Route>
            <Route path="/login" element={<Login/>} ></Route>
            <Route path="checkout/cart" element={<Cart />} ></Route>
            <Route path="checkout/address" element={<Address />} ></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/search/:query" element={<SearchPage />}></Route>
            <Route path="/profile/edit" element={<Profile />}></Route>

        </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
