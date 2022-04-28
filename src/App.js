import React,{useState, useRef, useEffect}  from "react";
import {v4 as uuid} from 'uuid';
import TodoList from "./components/TodoList";
const KEY = "todoApp.arr"
export default function App() {
  const newTask = useRef()
  const [arr, setArr]= useState([{id:1, task:"sacar al perro", comleted:false}])

  const toggleTask = (id) =>{
    const newTodo = [...arr]
    const taskin = newTodo.find((taski)=> taski.id === id )
    taskin.completed = !taskin.completed;
    setArr(newTodo);
  }
  useEffect(()=>{
    localStorage.setItem(KEY,JSON.stringify(arr));
  },[arr])

 useEffect(()=>{
   const storeTodo = JSON.parse(localStorage.getItem(KEY))
   if(storeTodo)
   setArr(storeTodo);
 },[arr])

  const handletask = () =>{
  
    const task = newTask.current.value

    if(task === '') return;
    
    setArr((aftertask)=>{
      return [...aftertask, {id:uuid(),task}]
    })
  
  }

  const clearTask =()=>{
    const newTodo = [...arr]
    const todo= newTodo.filter((todo)=>!todo.completed)
    setArr(todo);
  }

  return (
    <div>
      <input ref ={newTask} type = 'text' 
      placeholder = 'ingrse tarea'
 />
      <button onClick ={handletask}> ✖️</button>
      <button onClick={clearTask}>🗑️</button>
      <TodoList tasks= {arr} toggleTask ={toggleTask}/>
      <div>
       tienes {arr.filter((todo)=>!todo.completed).length} tareas por acabar
      </div>
    </div>
  );
}
