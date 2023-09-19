import React, { useState } from "react";

// estado = tareas[]
// estado = forms{} (si lo hago controlado)
// event submit que agregue tarea a [tareas]

const tareas = [];

/* [].map((tarea) => {
  return (
        <div>
            cosas
        </div>
        )
    }); */

const ToDo = () => {
  const [tareas, setTareas] = useState([]);

  const [entrada, setEntrada] = useState("");

  const handleAddTask = () => {
    setTareas([...tareas, entrada]);
    // setEntrada("");
    console.log(tareas);
  };

  return (
    <div>
      <h1>To Do List</h1>
      <section>
        <h2>List</h2>

        <ul>
          {tareas.map((tarea, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                width: "300 px",
                justifyContent: "space-between",
                border: "1px solid white",
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              <input type="checkbox" name="" id="" />
              <li>{tarea}</li>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <button>Delete</button>
                <button>Edit</button>
              </div>
            </div>
          ))}
        </ul>
      </section>
      <section>
        <form>
          <input
            type="text"
            name="entrada"
            id=""
            value={entrada}
            onChange={(e) => setEntrada(e.target.value)}
          />
          <button type="button" onClick={handleAddTask}>
            Add
          </button>
        </form>
      </section>
    </div>
  );
};

export default ToDo;
