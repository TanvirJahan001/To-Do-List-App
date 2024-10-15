import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <ul className="space-y-4">
      {todos.length > 0 ? (
        todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            index={index + 1}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))
      ) : (
        <p className="text-indigo-600 text-center">No tasks available</p>
      )}
    </ul>
  );
}

export default TodoList;
