import React from "react";
import { Button } from "antd";

const CardDetail = ({ number, content, completed, onComplete, onDelete }) => {
  return (
    <div
      className={`flex justify-between items-center border p-4 mx-4 rounded-lg shadow-md ${
        completed
          ? "border-green-200 shadow-green-200"
          : "border-red-200 shadow-red-200"
      }`}
    >
      <div className="flex items-center">
        <span
          className={`font-bold text-lg mr-4 ${
            completed ? "line-through text-gray-500" : ""
          }`}
        >
          {number}.
        </span>
        <span className={completed ? "line-through text-gray-500" : ""}>
          {content}
        </span>
      </div>
      <div className="flex space-x-2">
        <Button type={completed ? "default" : "primary"} onClick={onComplete}>
          {completed ? "Not Complete" : "Complete"}
        </Button>
        <Button type="default" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default CardDetail;
