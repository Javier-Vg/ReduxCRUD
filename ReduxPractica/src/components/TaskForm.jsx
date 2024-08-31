import { useSelector } from "react-redux";


function TaskForm() {
    console.log("taskform");
    const stateTasks = useSelector(state =>state.tasks)
    console.log(stateTasks);
    

  return (
    <div>TaskForm</div>
  )
}

export default TaskForm