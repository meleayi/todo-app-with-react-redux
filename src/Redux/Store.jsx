import { configureStore, createSlice } from "@reduxjs/toolkit";
import React from "react";

const todosSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, content: "Learn React", completed: false },
    { id: 2, content: "Build a Todo App", completed: false },
    { id: 3, content: "Read a book", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload); // Return the filtered array
    },
    updateTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed; // Toggle the completed status
      }
    },
  },
});

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

export const { addTodo, removeTodo, updateTodo } = todosSlice.actions; // Export all actions
export default store;
