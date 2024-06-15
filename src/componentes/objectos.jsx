import React, { useState, useEffect } from 'react';

export default function Objectos({ tasks, setTasks }) {
  const [taskText, setTaskText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(null);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const addTask = () => {
    if (taskText.trim()) {
      setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
      setTaskText('');
    }
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  };

  const startEditing = (task) => {
    setTaskText(task.text);
    setIsEditing(true);
    setCurrentTaskId(task.id);
  };

  const editTask = () => {
    setTasks(tasks.map(task => 
      task.id === currentTaskId ? { ...task, text: taskText } : task
    ));
    setTaskText('');
    setIsEditing(false);
    setCurrentTaskId(null);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <>
      

      <div className='col-md-12 colores'>
        <label htmlFor="" className='col-md-2 m-1'>Tarea:
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            className='form-control'
          />
        </label>
        <label className='col-md-2 m-1'>
          <input
            type="button"
            className='btn btn-primary'
            onClick={isEditing ? editTask : addTask}
            value={isEditing ? "Guardar" : "Agregar"}
          />
        </label>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Tarea</th>
              <th scope="col">Completada</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              tasks.map(task => (
                <tr key={task.id}>
                  <td>{task.text}</td>
                  <td>{task.completed ? "Sí" : "No"}</td>
                  <td>
                    <label className='col-md-2 m-1'>
                      <input
                        type="button"
                        className='btn btn-danger'
                        onClick={() => deleteTask(task.id)}
                        value="Eliminar"
                      />
                    </label>
                    <label className='col-md-2 m-1'>
                      <input
                        type="button"
                        className='btn btn-warning'
                        onClick={() => startEditing(task)}
                        value="Editar"
                      />
                    </label>
                    <label className='col-md-2 m-1'>
                      <input
                        type="button"
                        className='btn btn-success'
                        onClick={() => toggleComplete(task.id)}
                        value={task.completed ? "Desmarcar" : "Completar"}
                      />
                    </label>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
}
