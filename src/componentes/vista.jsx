import React from 'react';
import Task from './objectos';

const TaskList = ({ tasks, deleteTask, editTask, toggleComplete }) => {
  return (
    <div>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;

