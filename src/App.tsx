import React from 'react';
import './App.css';
import Todoform from './components/todoform/todoform';
import Todolist from './components/todolist/todolist';

const App: React.FC = () => {
  return (
    <div>
      <Todoform />
      <Todolist />
    </div>
  );
};

export default App;
