import React, { useState } from "react";
import "./ToDo.css";

function ToDo({ id, task, handleRemove}){

    const remove = () => handleRemove(id)

    return(
        <section className="box-section">
            <div>{ task }</div>
            <button onClick={remove}>x</button>
        </section>

    )
}

export default ToDo;