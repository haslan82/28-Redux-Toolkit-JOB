import {createSlice} from "@reduxjs/toolkit"


const initialState={
    tasks:[
        {
            title:"title",
            author: "yazar",
            assigned_to:"ali",
            end_date: "2025-05-25",
            id:"1234567890",
        }
    ]
}

const crudSlice = createSlice({
    name:"crud",
    initialState,
    reducers:{
        addTask:(state, action)=>{
            console.log(state);
            console.log(action);
        }
    }

})

// store tanıtmak için reducer ı export et.

export default crudSlice.reducer;

export const {addTask} = crudSlice.actions;