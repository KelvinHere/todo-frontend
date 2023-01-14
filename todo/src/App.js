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
  const [query, setQuery] = useState('')
  const [sortOrder, setSortOrder] = useState('NAME_ASC')
  useEffect(() => {
    getTasks();
  }, [sortOrder, query])

  const [tasks, setTasks] = useState(null)
  useEffect(() => {
    getTasks();
  }, []);

  function getTasks() {
    let request = 'http://localhost:8000/?q=' + query + '&sortBy=' + sortOrder;
    console.log(request);
    axios.get(request,).then(
      (result) => {
        setTasks(result.data);
      }
    )
  }

   const updateTasks = () => {
     getTasks();
   }

  return (
    <div className="App">
      <NavbarTodo />

      <Container fluid>
        <h1 className='mt-3'>Tasks</h1>
        <SortButtons setQuery={setQuery} setSortOrder={setSortOrder} />
        <TaskForm updateTasks={updateTasks} />
        {tasks ? <Tasks tasks={tasks} updateTasks={updateTasks} query={query} /> : <LoadingSpinner />}
      </Container>
    </div>
  );
}

export default App

