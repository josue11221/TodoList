import React from 'react';
import TododItem from './TodoItem';
import InputList from './InputList'
function TodoList ({tasks}){
const {id, task} = tasks
  return(
    <>
      <InputList />
      <ul>
        {tasks.map((val)=>
        <TododItem val={val} />)}
      </ul>
    </>
  )
}

export default TodoList