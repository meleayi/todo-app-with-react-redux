import React, { useState } from "react";
import { Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../../Redux/Store"; // Ensure both actions are imported

const TaskForm = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAdd = () => {
    if (task.trim()) {
      const newTodo = {
        id: todos.length + 1, // Simple ID generation
        content: task,
        completed: false,
      };
      dispatch(addTodo(newTodo));
      setTask("");
    }
  };

  const handleCompleteAll = () => {
    // Dispatch an action to update all todos to completed
    todos.forEach((todo) => {
      if (!todo.completed) {
        dispatch(updateTodo(todo.id));
      }
    });
  };

  return (
    <div className="flex flex-col p-4 space-y-4">
      <div className="flex justify-center max-w-lg mx-auto">
        <Input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          className="w-3/4 mr-2 min-w-80"
        />
        <Button type="primary" onClick={handleAdd}>
          Add
        </Button>
      </div>
      <div className="flex justify-between items-center mx-24">
        <div className="flex items-center space-x-2">
          <Button type="primary" onClick={handleCompleteAll}>
            Mark All Completed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
