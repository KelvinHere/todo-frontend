import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' // Bring in Bootstrap CSS

import NavbarTodo from './components/Navbar';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div className="App">
      <NavbarTodo />

      <Container fluid>
        <h1 className='mt-3'>Tasks</h1>
        <TaskForm />
        <Tasks />
      </Container>
    </div>
  );
}

export default App

