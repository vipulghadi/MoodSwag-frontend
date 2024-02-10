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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setCredits, setTempPhoneNumber } from "../src/store/AuthSlice";
import Analytics from "./pages/Merchant/Analytics";
import AddProduct from "./pages/Merchant/AddProduct";
import UpdateProduct from "./pages/Merchant/UpdateProduct";
import DisplayMerchantProducts from "./pages/Merchant/DisplayMerchantProducts";
import Customization from "./pages/Merchant/Customization";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //if local storage.authCredits is not null ,we can capture it from local stotrage
    if (JSON.parse(localStorage.getItem("authCredits")) == null) {
      console.log("here");
      localStorage.setItem("authCredits", JSON.stringify(null));
    } else if (JSON.parse(localStorage.getItem("authCredits")) != null) {
      const credits = JSON.parse(localStorage.getItem("authCredits"));
      console.log(credits);
      dispatch(setCredits(credits.userCredits));
      dispatch(setTempPhoneNumber(credits.userTempPhoneNumber));
    }
  }, []);

  return (
    <>
      <ToastContainer autoClose={60000} />
      <Navbar />
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-otp" element={<Otp />} />
          <Route path="/login" element={<Login />} />
          <Route path="checkout/cart" element={<Cart />} />
          <Route path="checkout/address" element={<Address />} />
          <Route path="/product" element={<Product />} />
          <Route path="/search/:query" element={<SearchPage />} />
          <Route path="/profile/edit" element={<Profile />} />
        </Routes>
        <Routes>
             <Route path="/dashboard/analytics" element={<Analytics/>}/>
             <Route path="/dashboard/update-product" element={<UpdateProduct/>}/>
             <Route path="/dashboard/add-product" element={<AddProduct/>}/>
             <Route path="/dashboard/products" element={<DisplayMerchantProducts/>}/>
             <Route path="/dashboard/customizations" element={<Customization/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
