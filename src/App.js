import React, { useEffect, useState } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
      createdAt: new Date(), // Store creation time
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-500 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-lg p-8 transition-transform duration-300 ease-in-out transform ">
        <h1 className="text-4xl font-bold text-indigo-600 mb-6 text-center">
          To-Do List by Tanvir
        </h1>

        <p className="text-lg font-semibold text-gray-700 mb-4 text-center">
          Total Tasks: {todos.length}
        </p>
        <p className="text-lg font-semibold text-gray-700 mb-4 text-center">
          Completed Tasks: {todos.filter((todo) => todo.completed).length}
        </p>
        <p className="text-lg font-semibold text-gray-700 mb-4 text-center">
          Pending Tasks: {todos.filter((todo) => !todo.completed).length}
        </p>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
