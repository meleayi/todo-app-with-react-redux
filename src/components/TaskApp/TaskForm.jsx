import React, { useState } from "react";
import { Button, Input, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../../Redux/Store"; // Ensure both actions are imported

const { Option } = Select;

const TaskForm = () => {
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all"); // State for the filter
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

  const filteredTodos =
    filter === "completed"
      ? todos.filter((todo) => todo.completed)
      : filter === "not_completed"
      ? todos.filter((todo) => !todo.completed)
      : todos;

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
          {/*  <Select
            value={filter}
            onChange={(value) => setFilter(value)}
            style={{ width: 200 }}
          >
            <Option value="all">Default (All)</Option>
            <Option value="completed">Completed</Option>
            <Option value="not_completed">Not Completed</Option>
          </Select> */}
          <Button type="primary" onClick={handleCompleteAll}>
            Mark All Completed
          </Button>
        </div>
        {/* <div className="flex items-center space-x-2">
          <Input placeholder="Search" className="w-40" />
          <Button type="primary">Search</Button>
        </div> */}
      </div>
    </div>
  );
};

export default TaskForm;
