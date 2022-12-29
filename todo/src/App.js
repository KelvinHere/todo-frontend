import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' // Bring in Bootstrap CSS

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button"
import Toast from "react-bootstrap/Toast"


function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>
            <h1>To-Do</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button>To-Do</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
