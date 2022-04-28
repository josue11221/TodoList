import React from 'react';
import TododItem from './TodoItem';

function TodoList ({tasks, toggleTask }){
const {id, task, completed} = tasks
  return(
    <>
      <ul>
        {tasks.map((val)=>
        <TododItem key= {val.id} val={val}
         toggleTask = {toggleTask}/>)}
      </ul>
    </>
  )
}

export default TodoList