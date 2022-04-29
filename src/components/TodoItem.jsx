import React from 'react';
function TodoItem ({val, toggleTask }){
const {id, task, completed } = val;

const todoClick=()=>{
   toggleTask(id)
}
   return <li className = 'lista'><input type='checkbox' onChange={todoClick} />⏰:{task}</li>
}

export default TodoItem