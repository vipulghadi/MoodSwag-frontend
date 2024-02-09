//it contains all fieldsrelated to user auth
//note: these all fields must be store in local storage
//user_temp_number
//user_id
//user_email
//user_fullname
//user_access_token
//user_reffrsh_token
//user_phone_number
//is_login
//is_merchant
//is_verifiedy

import { createSlice } from "@reduxjs/toolkit";

const updateLocalStorage = (state) => {
    console.log("called");
    console.log(state.userCredits);

    if (!localStorage.getItem("authCredits")) {
        localStorage.setItem("authCredits", JSON.stringify(null))
    }
    localStorage.setItem("authCredits", JSON.stringify(state));
};
// Retrieve initial state from local storage if available
const initialState = {
    userTempPhoneNumber: null,
    userCredits: {
        userId: null,
        userEmail: null,
        userFullName: null,
        userAccessToken: null,
        userRefreshToken: null,
        userPhoneNumber: null,
        userIsLogin: false,
        userIsMerchant: false,
        userIsVerified: false
    }
};

const authSlice = createSlice({
    name: "authCredits",
    initialState,
    reducers: {
        setCredits: (state, action) => {
            state.userCredits = action.payload
            updateLocalStorage(state)
        },
        setTempPhoneNumber: (state, action) => {
            console.log("in the store");
            console.log(action.payload);
            state.userTempPhoneNumber = action.payload
            updateLocalStorage(state)

        }
    }
});

export const { setCredits, setTempPhoneNumber } = authSlice.actions;

export default authSlice.reducer