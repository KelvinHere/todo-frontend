// Create list of tasks from passed items
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

function Tasks({ tasks, updateTasks }) {
  let completeTasks = new Array();
  let incompleteTasks = new Array();

  tasks.forEach(seperateTasks)

  function seperateTasks(task) {
    if (task.completed == true) {
      completeTasks.push(task);
    } else {
      incompleteTasks.push(task);
    }
  }
  
  const updateTask = async (task, importance, id, completedUpdate) => {
    const res = await axios.put('http://localhost:8000/'+id, {'completed': completedUpdate, 'importance': importance, 'task': task});
    updateTasks();
  }
  
  return (
    <section className="tasks p-0 mx-0">
      <p><b>In Progress</b></p>
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
      
      {incompleteTasks.map(task => (
        <Row key={task.id} className='bg-secondary text-white m-0 px-3 pt-3'>
          <Col className="col-1">
          <input type="checkbox" onClick={() => updateTask(task.task, task.importance, task.id, true)} defaultChecked={task.completed} />
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

      <br></br>
      <p><b>Completed</b></p>
      <Row className='bg-secondary text-white m-0 pb-3 rounded-top'>
        <Col>
        </Col>
      </Row>
      {completeTasks.map(task => (
        <Row key={task.id} className='bg-secondary text-white m-0 px-3 pt-3'>
          <Col className="col-1">
          <input type="checkbox" onClick={() => updateTask(task.task, task.importance, task.id, false)} defaultChecked={task.completed} />
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