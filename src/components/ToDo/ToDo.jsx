import React, { useState, useEffect } from "react";

// estado = tareas[]
// estado = forms{} (si lo hago controlado)
// event submit que agregue tarea a [tareas]

const tareas = [];

const ToDo = () => {
  const [tareas, setTareas] = useState([]);
  const [entrada, setEntrada] = useState("");

  useEffect(() => {
    console.log(tareas); // Muestra las tareas cuando tareas se actualiza
  }, [tareas]); // Ejecuta el efecto cuando tareas cambia

  const handleAgregaItem = () => {
    if (entrada.trim() !== "") {
      setTareas((prevItem) => [...prevItem, entrada]);
    }
    setEntrada("");
  };

  return (
    <div>
      <h1>To Do List</h1>
      <section>
        <h2>List</h2>
        <ul style={{ listStyleType: "none" }}>
          {tareas.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                width: "300 px",
                justifyContent: "space-between",
                border: "1px solid green",
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              <input type="checkbox" name="" id="index" />
              <li>{item}</li>
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
            name=""
            id=""
            value={entrada}
            onChange={(e) => setEntrada(e.target.value)}
          />
          <button type="button" onClick={handleAgregaItem}>
            Add
          </button>
        </form>
      </section>
    </div>
  );
};

export default ToDo;
