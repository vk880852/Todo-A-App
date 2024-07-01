import React,{useEffect} from 'react'
import { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { AddTask, modifytask } from '../Context/taskAction.jsx'
const Task = () => {
const [taskName,setTaskName]=useState("");
const index=useSelector((state)=>state.taskAction.index);
const task=useSelector((state)=>state.taskAction.tasks);
useEffect(()=>{
   if(index!==-1)setTaskName(task[index]);
},[index])
const dispatch=useDispatch();
const handleAddTask=()=>{
    if(index===-1)
        {
           dispatch(AddTask(taskName));
        }
        else 
        {
           dispatch(modifytask(taskName));
        }
   setTaskName("");
}
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="mb-3">
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="Enter a task..."
              className="form-control"
            />
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <button onClick={handleAddTask} className="btn btn-primary w-100">
            {index === -1 ? 'Add Task' : 'Edit Task'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Task
