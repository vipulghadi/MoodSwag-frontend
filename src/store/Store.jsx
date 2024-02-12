import { configureStore, } from '@reduxjs/toolkit';
import authReducer from '../store/AuthSlice'
import filterReducer from '../store/FilterSlice'

export const store = configureStore({
    reducer: {
        authState: authReducer,
        filterState: filterReducer
    }
});