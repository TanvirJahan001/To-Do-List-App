import React from "react";

function TodoItem({ todo, index, toggleComplete, deleteTodo }) {
  if (!todo) return null;

  return (
    <li className="flex justify-between items-center p-5 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform">
      {/* Task number and text */}
      <div className="flex flex-col flex-1 space-y-1">
        <div className="flex items-center">
          <span className="font-semibold text-indigo-600 text-lg mr-3">
            {index}.
          </span>
          <span
            onClick={() => toggleComplete(todo.id)}
            className={`cursor-pointer text-lg ${
              todo.completed ? "line-through text-gray-400" : "text-gray-800"
            } transition-all duration-300 ease-in-out`}
          >
            {todo.text}
          </span>
        </div>
        <span className="text-sm text-gray-500">
          {new Date(todo.createdAt).toLocaleString()}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3 ml-4">
        <button
          onClick={() => toggleComplete(todo.id)}
          className={`py-2 px-4 rounded-lg text-white transition-all duration-300 ${
            todo.completed
              ? "bg-green-500 hover:bg-green-600"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {todo.completed ? "Undo" : "Done"}
        </button>

        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-all duration-300"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
