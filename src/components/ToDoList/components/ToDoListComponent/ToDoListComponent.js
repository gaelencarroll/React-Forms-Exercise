import React, { useState } from "react";
import "./ToDoListComponent.css";
import ToDo from "../ToDo/ToDo";
import NewToDoForm from "../NewToDoForm/NewToDoForm";

function ToDoListComponent(){
    const [toDos, setToDos] = React.useState([])
    const add = toDoObj => {
        setToDos(toDos => [...toDos, toDoObj]);
      };
      const remove = id => {
        setToDos(toDos => toDos.filter(toDo => toDo.id !== id));
      };
      const toDosList = toDos.map(toDo => (
        <ToDo 
            id={toDo.id} 
            key={toDo.id} 
            task={toDo.task}
            handleRemove={remove}></ToDo>
    ))

    return(
        <section className="todo-list-section">
            <NewToDoForm createToDo={add}></NewToDoForm>
            {toDosList}
        </section>
    )
}

export default ToDoListComponent;