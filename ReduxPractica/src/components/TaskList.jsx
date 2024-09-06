import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link ,useParams} from "react-router-dom";


function TaskList() {
  const Tasks = useSelector (state=> state.tasks) // el "tasks" es el nombre que va en el reducer del store. 
  const dispatch = useDispatch();
 
  console.log(Tasks);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  }
  
  return (
    <div>

      <header>
        <h1>Task {Tasks.length}</h1>
        <Link to="/create-task">
          Volver.
        </Link>
      </header>

      {Tasks.map((task) => (
        <div key={task.id}>
            <h2>{task.title}</h2>
            <div>{task.description}</div>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
            <Link to={`/edit-task/:${task.id}`}>Editar</Link>
          </div>
      ))}
    </div>
  ) 
}

export default TaskList