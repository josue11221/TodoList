import React from 'react';

function TodoItem ({val}){
const {id, task } = val;
   return <li>{id}:{task}</li>
}

export default TodoItem