import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TodoState } from "../models/todo"

const initialState: TodoState = {
  todos: []
};//
const slice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: state.todos.length > 0 ? state.todos[-1].id + 1 : 1,
        name: action.payload,
        status: false,
        createdAt: new Date(),
      })
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(t => (t.id != action.payload))
    },
    modifyTodo: (state, action: PayloadAction<{ name: string, id: number }>) => {
      let todo = state.todos.find(t => (t.id == action.payload.id))
      if(todo){
        todo = {...todo, name:action.payload.name};
      }
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      let todo = state.todos.find(t => (t.id == action.payload))
      if(todo){
        todo = {...todo, status: !todo.status};
      }
    },
  },
})

