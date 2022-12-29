import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' // Bring in Bootstrap CSS

import NavbarTodo from './components/Navbar';
import TaskForm from './components/TaskForm';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button"
import Toast from "react-bootstrap/Toast"


function App() {
  return (
    <div className="App">
      <NavbarTodo />
      <Container fluid>
        <Row>
          <Col className="mt-4">
            <h1>Tasks</h1>
          </Col>
        </Row>

        <Row>
          <Col className="mt-4 mb-4">
            <TaskForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

