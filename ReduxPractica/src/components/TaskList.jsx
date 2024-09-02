import { useSelector } from "react-redux"


function TaskList() {
  const Tasks = useSelector (state=> state.tasks) // el "tasks" es el nombre que va en el reducer del store. 
 
  console.log(Tasks);
  
  return (
    <div>
      {Tasks.map((task,key )=> (
          <div key={key}>
            <h2>{task.title}</h2>
            <div>{task.description}</div>
            <button>Delete</button>
          </div>
        ))}
    </div>
  ) 
}

export default TaskList