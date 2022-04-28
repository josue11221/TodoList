import React from 'react';

function TodoItem ({val}){
const {id, task, completed } = val;
   return <li><input type='checkbox' />{id}:{task}</li>
}

export default TodoItem