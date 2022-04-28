import React from 'react';

function TodoItem ({val}){
const {id, task } = val;
   return <li><input type='checkbox' />{id}:{task}</li>
}

export default TodoItem