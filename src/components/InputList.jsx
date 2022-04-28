import React ,{useRef} from 'react';
import {v4 as uuid} from 'uuid';

function InputList (){
  const newTask = useRef()


  const  handleTask = () =>{
    const tasker = newTask.current.value;
    
    if(taskers === '') return;
    setArr((afterTask)=>{
      return [...afterTask, {id:uuid(),task} ] 
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