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
        }
    }
})


export const {addTasks} = taskSlice.actions
export default taskSlice.reducer