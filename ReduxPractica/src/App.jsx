import { useDispatch, useSelector } from "react-redux"
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Modales from "./components/modales";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "../src/index.css"


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>        {/*Enrutador*/}
        <Route path="/" element={<TaskList/>}/>  
        <Route path="/create-task" element={<TaskForm/>}/>
        <Route path="/edit-task/:id" element={<TaskForm/>}/>   {/*el id es de la tarea*/}
        <Route path="/modal" element={<Modales/>}/>  
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
