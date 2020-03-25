import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList.js'
import { Card, CardContent } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      {/* <CardContent> */}
        <ToDoList/>
      {/* </CardContent> */}
    </div>
  );
}

export default App;
