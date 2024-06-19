import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";



// configureStore- createStore farkları 
// 1. Veriler reducer ları otamatik olarak birleştirir

export default configureStore({
    reducer: { counterReducer },
});



