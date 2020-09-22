import React, {useState} from 'react';
import './App.css';
import List from './Components/List'
import NewTask from './Components/NewTask'
import { useState } from 'react';

function App() {
  const [list, setList] = useState(['a task', 'another task', 'a third task'])

  const addTask = (task) => {
    setList([...list, task])
  }


  return (
    <div className="App">
      <NewTask addNewItem={addTask}/>
      <List listOfTodoItems={list}/>
    </div>
  );
}

export default App;
