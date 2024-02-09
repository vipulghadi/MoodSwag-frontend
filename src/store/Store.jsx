import { configureStore, } from '@reduxjs/toolkit';
import authReducer from '../store/AuthSlice'


export const store = configureStore({
    reducer: {
        authState: authReducer
    }
});


export const UpdateLocalStorage = () => {
    console.log("in updated");
    const state = store.getState()
    console.log(state);
    localStorage.getItem("authCredits") == null ? localStorage.setItem("authStorage", JSON.stringify(null)) : localStorage.setItem("authCredits", JSON.stringify(state))
}