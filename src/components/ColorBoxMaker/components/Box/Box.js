import React, { useState } from "react";
import "./Box.css";

function Box({ id, height, width, color, handleRemove}){

    const remove = () => handleRemove(id)

    return(
        <section className="box-section">
            <div style={{width: `${width}em`, height: `${height}em`, backgroundColor: `${color}`}}></div>
            <button onClick={remove}>x</button>
        </section>

    )
}

export default Box;