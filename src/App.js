import React from "react";
import Navbar from "./components/navbar";
import TodoList from "./components/todoList";
import {TodoStore} from './TodoStore';

function App() {
  const store = new TodoStore();
  return (
     <div>
      <Navbar store={store}/>    {/*<= Here*/}
      <TodoList store={store}/>  {/*<= Here*/}
    </div>
  );
}

export default App;
