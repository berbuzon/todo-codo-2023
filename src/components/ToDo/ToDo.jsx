import React from "react";

// estado = tareas[]
// estado = forms{} (si lo hago controlado)
// event submit que agregue tarea a [tareas]

/* [].map((tarea) => {
  return (
        <div>
            cosas
        </div>
        )
    }); */

const ToDo = () => {
  return (
    <div>
      <h1>To Do List</h1>
      <section>
        <h2>List</h2>

    {
        //tareas.map(tarea)=>{}
    }
        
        <ul>
          <div
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
            <li>item1</li>
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
        </ul>
      </section>
      <section>
        <form>
          <input type="text" name="" id="" />
          <button>Add</button>
        </form>
      </section>
    </div>
  );
};

export default ToDo;
