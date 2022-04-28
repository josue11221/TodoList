import React,{useState}  from "react";
import TodoList from "./components/TodoList";

export default function App() {
  const [arr, setArr]= useState([{id:1, task:"sacar al perro"}])


  return (
    <div>
      <TodoList tasks= {arr}/>
    </div>
  );
}
