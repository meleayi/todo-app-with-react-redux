import React from "react";
import TaskTitle from "./TaskApp/TaskTitle";
import TaskForm from "./TaskApp/TaskForm";
import TaskCard from "./TaskApp/TaskCard";

const TaskApp = () => {
  const title = "Task TODO Application";
  return (
    <div className="shadow-2xl max-w-6xl text-center mx-auto mt-5">
      <TaskTitle title={title} />
      <TaskForm />
      <TaskCard />
    </div>
  );
};

export default TaskApp;
