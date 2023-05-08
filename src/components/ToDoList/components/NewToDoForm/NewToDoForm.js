import React, { useState } from "react";
import "./NewToDoForm.css";

function NewToDoForm({createToDo}){
    const [task,setTask] = React.useState('');

    const gatherInput = evt => {
        evt.preventDefault();
        createToDo({task})
    }

    return(
        <section>
            <h1 className="title">Add To Do</h1>
            <form onSubmit={gatherInput} className="form">
                <section className="task input-section">
                    <label>Task
                    <input type="text" onChange={(e) => setTask(e.target.value)}></input>
                    </label>
                </section>
                <input type='submit' value="Submit" className="submit-btn"></input>
            </form>
        </section>
    )
}

export default NewToDoForm;