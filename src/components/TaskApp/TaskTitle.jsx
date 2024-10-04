import React from "react";

const TaskTitle = ({ title }) => {
  return (
    <>
      <h2 className="text-2xl px-4 pt-4 mt-2 mb-4 font-bold text-black">
        {title}
      </h2>
      <hr />
    </>
  );
};

export default TaskTitle;
