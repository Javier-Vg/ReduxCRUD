import { useDispatch, useSelector } from "react-redux"
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";


function App() {
  const taskState = useSelector(state => state.tasks)
  console.log(taskState);
  

  return (
    <>
    
     <h2>Hola mundo</h2>
     <TaskForm/>
     <TaskList/>
    </>
  )
}

export default App
