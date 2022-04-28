import React,{useState, useRef}  from "react";
import TodoList from "./components/TodoList";

export default function App() {
  const newTask = useRef()
  const [arr, setArr]= useState([{id:1, task:"sacar al perro"}])

  const handletask = () =>{
  
    const task = newTask.current.value

    if(task === '') return;
    
    setArr((aftertask)=>{
      return [...aftertask, {id:3,task}]
    })
  }

  return (
    <div>
      <input ref ={newTask} type = 'text' 
      placeholder = 'ingrse tarea' />
      <button onClick ={handletask}> +</button>
      <TodoList tasks= {arr}/>
    </div>
  );
}
