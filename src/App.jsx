import React, { useState } from 'react';
import Objectos from './componentes/objectos';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <Objectos tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
