// hem reducer ı hem reducerın aksiyonlarını createSlice methodu ile tek seferde tanımlıyoruz.

import { createSlice } from "@reduxjs/toolkit";


//? Todo slice oluşturma:

// 1. adım import { createSlice} from "reduxjs/toolkit";

// * name:slice ismi > string,
// * initialState:Başlangıç state'i,
// * reducers:Aksiyonların görevini tanımladığımız fonksiyonları ifade eder.




const counterSlice = createSlice({
    name: "counter",
    initialState: { count: 0, isDarkTheme:true},
    // state in nasıl değişeceğine karar veren fonksiyonları tanımlarız.
    reducers:{
        increase:(state)=>{
            state.count++;
        },
        decrease: (state) => {
            state.count--;
        },
        setCount: (state, action) =>{
            // console.log(state)
            // console.log(action.payload)
            state.count = action.payload;
        },
        toggleTheme: (state) => {
            console.log(state.isDarkTheme);
            state.isDarkTheme = !state.isDarkTheme;
          },
        },
      });
      //* Slice'ın oluşturduğu reducer fonksiyonunu store'a tanıtmak için export ettik.
      export default counterSlice.reducer;
      
      export const { increase, decrease, setCount, toggleTheme } =
        counterSlice.actions;