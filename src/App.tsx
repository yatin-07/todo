import React, { useState } from 'react';
import './App.css';
import Todoform from './components/todoform/todoform';
import Todolist from './components/todolist/todolist';

const App: React.FC = () => {
  const [todos,setTodos] = React.useState([])
  const addTodo = (text) => {
    console.log(text);
  }
  return (
    <div>
      <Todoform addTodo={addTodo}/>
      <Todolist todos={todos}/>
    </div>
  );
};

export default App;
