import React from "react";
import CardDetail from "./CardDetail";
import { addTodo, removeTodo, updateTodo } from "../../Redux/Store";
import { useDispatch, useSelector } from "react-redux";

const TaskCard = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleComplete = (id) => {
    dispatch(updateTodo(id)); // Dispatch updateTodo to toggle completion status
  };

  const handleDelete = (id) => {
    dispatch(removeTodo(id)); // Dispatch removeTodo to delete the todo
  };

  return (
    <div className="space-y-4">
      {todos.map((task, index) => (
        <CardDetail
          key={task.id}
          number={index + 1}
          content={task.content}
          completed={task.completed}
          onComplete={() => handleComplete(task.id)}
          onDelete={() => handleDelete(task.id)}
        />
      ))}
    </div>
  );
};

export default TaskCard;
