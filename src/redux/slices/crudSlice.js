import {createSlice} from "@reduxjs/toolkit"
import { v4 } from "uuid";


const initialState = {
    tasks: [
      {
        title: "title",
        author: "yazar",
        assigned_to: "ali",
        end_date: "2024-05-25",
        id: "12342384092843829034",
      },
    ],
  };
  


const crudSlice = createSlice({
    name:"crud",
    initialState,
    reducers:{
        addTask:(state, action)=>{

            // gelen task id ekledik
           action.payload.id=v4(); 

state.tasks.push(action.payload);
            //  console.log(action);
            //  console.log(state.tasks);
        },
        editTask:(state, action)=>{

            // düzenlenecek elemanın sırasını bul
       const index = state.tasks.findIndex(i=> i.id=== action.payload.id)
       console.log(index);
// elemanı güncelle
       state.tasks.splice(index, 1, action.payload);
        },

        deleteTask:(state, action)=>{
//!console.log(action)

//? 1. yöntem

// silinecek elemanın sırasını bul

// const filtered = state.tasks.filter((task)=> task.id !== action.payload);


//! elemanı sil
// state.tasks = filtered;

//? 2.yöntem


// silinecek elemanın sırasını bul
const index = state.tasks.findIndex((i)=> i.id === action.payload);

// elemanı sil
state.tasks.splice(index, 1);


        }
    }

})

// store tanıtmak için reducer ı export et.

export default crudSlice.reducer;

export const {addTask, editTask, deleteTask} = crudSlice.actions;