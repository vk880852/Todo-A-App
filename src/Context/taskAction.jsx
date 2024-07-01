import { createSlice } from "@reduxjs/toolkit";
export const taskAction=createSlice({
    name:"taskAction",
    initialState:{
       index:-1,
        tasks:[],
    },
    reducers:{
        AddTask:(state,action)=>{
             state.tasks.push(action.payload);
             localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },
        DeleteTask:(state,action)=>{
              state.tasks=state.tasks.filter((task,index)=>(index!=action.payload))
              localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },
        Edittask:(state,action)=>{
            state.index=action.payload;
        },
        modifytask:(state,action)=>{
               state.tasks[state.index]=action.payload;
               localStorage.setItem("tasks", JSON.stringify(state.tasks));
               state.index=-1;
        },
       
    }
})
export const {AddTask,DeleteTask,Edittask,modifytask}=taskAction.actions
export default taskAction.reducer