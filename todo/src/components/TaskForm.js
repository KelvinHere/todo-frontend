import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';


function TaskForm({updateTasks}) {
    let [taskDescription, setTaskDescription] = useState('');
    let [taskImportance, setTaskImportance] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        createTask(e);
    }

    const createTask = async (e) => {
         const res = await axios.post('http://localhost:8000/',
             {
                 task: e.target[0].value,
                 importance: e.target[1].value,
                 completed: false
             })
        updateTasks();
        setTaskDescription('');
        setTaskImportance('Importance');
    }

    return (
        <section className="bg-dark p-3 rounded my-3">
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col xs={12} lg={8}>
                        <Form.Group className="mb-3 mb-lg-0" controlId="formTaskDescription">
                            <Form.Control 
                                type="text"
                                placeholder="Enter new task"
                                onChange={e => setTaskDescription(e.target.value)} 
                                value={taskDescription} />
                        </Form.Group>
                    </Col>
                    <Col xs={12} lg={2}>
                        <Form.Group className="mb-3 mb-lg-0" controlId="formImportance">
                            <Form.Select 
                                aria-label="importance-value"
                                onChange={e => setTaskImportance(e.target.value)} 
                                value={taskImportance}>
                                <option value='Importance'>Importance</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col xs={12} lg={2}>
                        <Button variant="primary" type="submit">
                            Crete New Task
                        </Button>
                    </Col>
                </Row>
            </Form>
        </section>
    );
}

export default TaskForm;