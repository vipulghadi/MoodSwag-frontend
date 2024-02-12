//we have to store all filters when our page loads
// filter are
//brands
//categories
//colors
//sizes
//price

import { createSlice } from "@reduxjs/toolkit";

// const updateLocalStorage = (state) => {
//     console.log("called");
//     console.log(state.userCredits);

//     if (!localStorage.getItem("authCredits")) {
//         localStorage.setItem("authCredits", JSON.stringify(null))
//     }
//     localStorage.setItem("authCredits", JSON.stringify(state));
// };
// Retrieve initial state from local storage if available

const initialState = {
    brands: [],
    categories: [],
    colors: [],
    sizes: []
}


const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setFilters: (state, action) => {
            state = action.payload
        }
    }
});

export const { setFilters } = filterSlice.actions;

export default filterSlice.reducer