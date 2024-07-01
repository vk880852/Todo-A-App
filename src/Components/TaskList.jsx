import React, { useEffect,useState } from 'react';
import {useDispatch } from 'react-redux';
import { DeleteTask,Edittask,AddTask } from '../Context/taskAction';

const TaskList = () => {
  const [tasks,setTask]=useState("");
    const dispatch=useDispatch();
  const handleDeleteTask=(index)=>{
       dispatch(DeleteTask(index));
  }
  const EditTask=(index)=>{
      dispatch(Edittask(index));
  }
  
  useEffect(()=>{
   setTask(JSON.parse(localStorage.getItem("tasks")));
  },[EditTask,handleDeleteTask,AddTask])

  return (
    <div className='container mt-5'>
      {tasks.length > 0 ? (
        <ul className="list-group">
          {tasks.map((task,index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <p>{task}</p>
              <button onClick={() => handleDeleteTask(index)} className='btn btn-primary'>Delete</button>
              <button onClick={()=>EditTask(index)} className='btn btn-primary'>Edit</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-center'>No tasks available. Add a task above.</p>
      )}
    </div>
  );
};

export default TaskList;
