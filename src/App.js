import React,{useState, useRef}  from "react";
import {v4 as uuid} from 'uuid';
import TodoList from "./components/TodoList";

export default function App() {
  const newTask = useRef()
  const [arr, setArr]= useState([{id:1, task:"sacar al perro", comleted:false}])

  const toggleTask = (id) =>{
    const newTodo = [...arr]
    const taskin = newTodo.find((taski)=> taski.id === id )
    taskin.completed = !taskin.completed;
    setArr(newTodo)
  }

  const handletask = () =>{
  
    const task = newTask.current.value

    if(task === '') return;
    
    seatArr((aftertask)=>{
      return [...aftertask, {id:uuid(),task}]
    })
  }

  return (
    <div>
      <input ref ={newTask} type = 'text' 
      placeholder = 'ingrse tarea'
 />
      <button onClick ={handletask}> +</button>
      <TodoList tasks= {arr} toggleTask ={toggleTask}/>
    </div>
  );
}
