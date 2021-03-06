import React, { useState } from "react";
import { observer } from "mobx-react";

function Navbar(props) {
  const [menu, setMenu] = useState(false);
  const [value, setValue] = useState("");

  const { addTodo } = props.store;

  const prepareAddTodo = e => {
    e.preventDefault();
    if (value === "") {
      alert("ISI LAH");
      return;
    }
    addTodo(value);
    setValue("");
  };

  return (
    <div className="navbar has-shadow">
      <div className="navbar-brand">
        <div className="navbar-item">
          <p className="title">Gawean</p>
        </div>

        <button
          onClick={() => setMenu(!menu)}
          className={`navbar-burger burger ${menu ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div className={`navbar-menu ${menu ? "is-active" : ""}`}>
        <div className="navbar-end">
          <div className="navbar-item">
            <form onSubmit={prepareAddTodo} className="field has-addons">
              <p className="control is-expanded">
                <input
                  value={value}
                  type="text"
                  onChange={e => setValue(e.target.value)}
                  className="input"
                />
              </p>
              <p className="control">
                <button className="button is-info has-text-weight-bold">
                  Tambah
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(Navbar);
