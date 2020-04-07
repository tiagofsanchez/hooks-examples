import React from 'react';
import ClassForm from "./classForm" 
import HooksForm from './hooksForm'
import './App.css';

const App = () => { 
  return (
    <div className="App">
      <h1>Experimenting with hooks!</h1>
      <ClassForm />
      <HooksForm />
    </div>
  );
}

export default App;
