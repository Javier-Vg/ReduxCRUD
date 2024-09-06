import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTasks, editTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

function TaskForm() {
  const [task, setTask] = useState({
    title: "default",
    description: "default", //Estos nombres deben ir iguales con los names de los inputs, para poder setear estos campos.
  });

  const dispatch = useDispatch(); //Dipara eventos
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, []);

  const handleChange = (e) => {
    setTask({
      ...task, //Ayuda a mantener el estado inicial del objeto dentro del useState.
      [e.target.name]: e.target.value, //Actualiza los valores del estado dependiendo del name del los inputs
    });
  };

  const handleSubmit = (e) => {
    //e.preventDefault();

    if(params.id){
      dispatch(editTask(task))
    } else {
        dispatch(addTasks({
          ...task,
          id: uuid(),
        })
      );
    }

    navigate("/");
    
  };

  return (
    <>
      <form>
        <input
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="Escriba aqui:"
          // value={task.title}
        />

        <textarea
          placeholder="Buenso dias."
          onChange={handleChange}
          name="description"
          // value={task.description}
        ></textarea>
      </form>

      <button onClick={handleSubmit}>Save</button>
    </>
  );
}
export default TaskForm;
