import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';

function TaskForm() {
  return (
    <div className="bg-dark p-3 rounded">
        <Form>
            <Form.Group controlId="formTask">
                <Row>
                    <Col sm={7} className="py-2 py-sm-0">
                        <Form.Control type="text" placeholder="Enter task..." />
                    </Col>
                    <Col sm={3} lg={4} className="py-2 py-sm-0">
                        <select class="form-select" aria-label="Importance">
                            <option selected>Importance</option>
                            <option value="1">High</option>
                            <option value="2">Medium</option>
                            <option value="3">Low</option>
                        </select>
                    </Col>
                    <Col sm={2} lg={1} className="py-2 py-sm-0">
                        <Button variant="primary" type="submit">
                            Create
                        </Button>
                    </Col>
                </Row>
            </Form.Group>
        </Form>
    </div>
  );
}

export default TaskForm;