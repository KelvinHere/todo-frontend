import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' // Bring in Bootstrap CSS

import NavbarTodo from './components/Navbar';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';
import { useState, useEffect } from 'react';
import axios from "axios";
import LoadingSpinner from './components/Loading';
import Container from 'react-bootstrap/Container';
import SortButtons from './components/SortButtons';

function App() {

  function getTasks() {
    axios.get('http://localhost:8000').then(
      (result) => {
        setTasks(result.data);
      }
    )
  }

   const updateTasks = () => {
     getTasks();
   }

  const [tasks, setTasks] = useState(null)
  useEffect(() => {
    getTasks();
  }, [])


  return (
    <div className="App">
      <NavbarTodo />

      <Container fluid>
        <h1 className='mt-3'>Tasks</h1>
        <TaskForm updateTasks={updateTasks} />
        <SortButtons setTasks={setTasks} updateTasks={updateTasks} />
        {tasks ? <Tasks tasks={tasks} updateTasks={updateTasks} /> : <LoadingSpinner />}
      </Container>
    </div>
  );
}

export default App

