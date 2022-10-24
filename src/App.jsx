import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import * as C from './AppStyles';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';

const App = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTask = async () => {
      const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
    
      setTasks(data)
    };

    fetchTask();
  }, [])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) return {...task, completed: !task.completed}

      return task;
    });

    setTasks(newTasks);
  }

  const handleTaskAddition = (taskTitle) => {
      const newTasks = [ 
        ...tasks, 
        {
          title: taskTitle,
          id: uuidv4(),
          completed: false,
        }
      ];

    setTasks(newTasks);
  };

  const handleTaskRemove = (taskId) => {
      const newTasks = tasks.filter(task => task.id !== taskId );

      setTasks(newTasks);
  };

  return (
    <BrowserRouter>
      <C.Container>
        <Header />
        <Routes>
        <Route path='/' element={
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks 
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskRemove={handleTaskRemove}
              />
            </>
          } />
          <Route path='/:taskTitle' element={<TaskDetails />}/>
        </Routes>
      </C.Container>
    </BrowserRouter>  
  );
}

export default App;