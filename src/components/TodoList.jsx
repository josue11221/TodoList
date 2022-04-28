import React from 'react';
import TododItem from './TodoItem';

function TodoList ({tasks}){
const {id, task} = tasks
  return(
    <>
      <ul>
        {tasks.map((val)=>
        <TododItem key= {val.id} val={val} />)}
      </ul>
    </>
  )
}

export default TodoList