import React ,{useRef} from 'react';
import {v4 as uuid} from 'uuid';

function InputList (){
  const newTask = useRef()


  const  handleTask = () =>{
    const tasker = newTask.current.value;
    
    if(tasker === '') return;
    setArr((afterTask)=>{
      const {id, task} = afterTask
      return [...afterTask, {id:uuid,task} ] 
    })
  }


  return (
    <>
      <input ref= {newTask} type="text"
      placeholder = "ingrese su nueva tarea"
    />
      <button onClick={handleTask}>+ </button>
      <button>x </button>
    </>
  )

}

export default InputList