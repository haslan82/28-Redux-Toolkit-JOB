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
        }
    }

})

// store tanıtmak için reducer ı export et.

export default crudSlice.reducer;

export const {addTask} = crudSlice.actions;