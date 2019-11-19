import React from "react";
import { TodoProvider } from "./TodoContext";
import Navbar from "./components/navbar";
import TodoList from "./components/todoList";

function App() {
  return (
    <TodoProvider>
      <Navbar />
      <TodoList />
    </TodoProvider>
  );
}

export default App;
