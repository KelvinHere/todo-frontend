// Create list of tasks from passed items
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Tasks() {

    let mockTasks = [
    {
        "task": "Clear out the loft",
        "completed": false,
        "importance": "Low",
        "created": "9:00am 10-12-2022"
    },
    {
        "task": "Fix car brakes",
        "completed": false,
        "importance": "High",
        "created": "9:00am 9-12-2022"
    }]
    
    return (
    <section className="tasks p-0 mx-0">
      <Row className="bg-dark text-white rounded-top m-0 p-3">
        <Col className="col-7">
          <p className='mb-0'><b>Task</b></p>
        </Col>
        <Col>
          <p className='mb-0'><b>Importance</b></p>
        </Col>
        <Col>
          <p className='mb-0'><b>Created</b></p>
        </Col>
      </Row>
      {mockTasks.map(task => (
        <Row className='bg-secondary text-white m-0 px-3 pt-3'>
          <Col className="col-7">
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