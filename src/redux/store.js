import { configureStore, createReducer } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import crudReducer from "./slices/crudSlice";


// configureStore- createStore farkları 
// 1. Veriler reducer ları otamatik olarak birleştirir

export default configureStore({
    reducer: { counterReducer, crudReducer },
});



