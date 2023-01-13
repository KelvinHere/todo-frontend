// Create list of tasks from passed items
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Tasks({ tasks }) {
  return (
    <section className="tasks p-0 mx-0">
      <Row className="bg-dark text-white rounded-top m-0 p-3">
        <Col className="col-1">
          <p className='mb-0'><b>Done</b></p>
        </Col>
        <Col className="col-6">
          <p className='mb-0'><b>Task</b></p>
        </Col>
        <Col>
          <p className='mb-0'><b>Importance</b></p>
        </Col>
        <Col>
          <p className='mb-0'><b>Created</b></p>
        </Col>
      </Row>
      {tasks.map(task => (
        <Row key={task.id} className='bg-secondary text-white m-0 px-3 pt-3'>
          <Col className="col-1">
            <input type="checkbox" defaultChecked={task.completed} />
          </Col>
          <Col className="col-6">
            <p className='mb-0'>{task.task}</p>
          </Col>
          <Col>
            <p className='mb-0'>{task.importance}</p>
          </Col>
          <Col>
            <p className='mb-0'>{task.created}</p>
          </Col>
        </Row>
      ))}
      <Row className='bg-secondary text-white m-0 pb-3 rounded-bottom'>
        <Col>
        </Col>
      </Row>
    </section>
  );
}

export default Tasks