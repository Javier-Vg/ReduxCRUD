import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTasks } from "../features/tasks/taskSlice";


function TaskForm() {

  const [task, setTask] = useState({
    title: "default",
    description: "default"  //Estos nombres deben ir iguales con los names de los inputs, para poder setear estos campos.
  });

  const dispatch = useDispatch(); //Dipara eventos

  const handleChange = e => {
    setTask({
      ...task,  //Ayuda a mantener el estado inicial del objeto dentro del useState.
      [e.target.name]: e.target.value, //Actualiza los valores del estado dependiendo del name del los inputs
    })
  };
  
  const handleSubmit=(e) => {
    //e.preventDefault();
    dispatch(addTasks(task))
  };

  return (    
    <>
    <form >
      <input onChange={handleChange} name="title" type="text" placeholder="Escriba aqui:" />

      <textarea placeholder="Buenso dias." onChange={handleChange} name="description"></textarea>
    </form>

    <button onClick={handleSubmit}>Save</button>
    </>
  )
};
export default TaskForm
