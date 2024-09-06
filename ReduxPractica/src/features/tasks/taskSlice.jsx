import { createSlice } from "@reduxjs/toolkit";

const estadoInicial = [
    {
        title: "Redux",
        description: "Es muy  complicada",

    },
    {
        title: "Python",
        description: "Es muy easy",

    },
    {
        title: "JavaScipt",
        description: "Es muy vacilon, copia de java",

    }
]

export const taskSlice = createSlice({
    name: "tareas",
    initialState: estadoInicial,
    reducers:{
        addTasks: (state, action) => {
            state.push(action.payload)
        },
        deleteTask: (state, action) => {
            const taskFound = state.find(task => task.id === action.payload)
            if (taskFound){
                state.splice(state.indexOf(taskFound), 1) //El splice elimina el que estas antes de la coma y el numero que va despues es la cantidad a eliminar.
            }
            console.log(action);
        },
        editTask: (state, action) => {
            const {id, title, description} = action.payload

            const foundTask = state.find(task => task.id === id)
            if(foundTask){
                foundTask.title = title
                foundTask.description = description
            }
        }
    }
})


export const {addTasks, deleteTask, editTask} = taskSlice.actions
export default taskSlice.reducer