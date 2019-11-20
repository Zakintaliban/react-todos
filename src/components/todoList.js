import React from 'react'

import Todo from "./todo";
import { observer } from 'mobx-react';

// could be done as well
// @observer
function TodoList(props) {
  // Import the actions and properties
  const { todos, toggleDone, deleteTodo, filteredTodos } = props.store

  return (
    <div>
      <div className="hero is-info">
        <div className="hero-body has-text-centered">
          <p className="title is-1">{todos.length} Todos</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <input className="input" placeholder="Cari..." type="text" value={props.store.filter} onChange={(e) => props.store.filter = e.target.value} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          {filteredTodos.map(todo => (
            <Todo key={todo.id} todo={todo} toggleDone={toggleDone} deleteTodo={deleteTodo} />
          ))}
        </div>
      </section>
    </div>
  )
}

// another way of using MobX
export default observer(TodoList)