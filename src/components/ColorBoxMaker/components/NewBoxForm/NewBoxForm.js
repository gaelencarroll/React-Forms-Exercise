import React, { useState } from "react";
import "./NewBoxForm.css";

function NewBoxForm({createBox}){
    const [height, setHeight] = React.useState('1');
    const [width, setWidth] = React.useState('1');
    const [color, setColor] = React.useState("");

    const gatherInput = evt => {
        evt.preventDefault();
        createBox({height, width, color})
    }

    return(
        <section>
            <h1 className="title">Add New Color Box</h1>
            <form onSubmit={gatherInput} className="form">
                <section className="height input-section">
                    <label>Height
                    <input type="text" onChange={(e) => setHeight(e.target.value)}></input>
                    </label>
                </section>
                <section className="width input-section">
                    <label>Width
                    <input type='text' onChange={(e) => setWidth(e.target.value)}></input>
                    </label>
                </section>
                <section className="color input-section">
                    <label>Color
                    <input type="color" onChange={(e) => setColor(e.target.value)}></input>
                    </label>
                </section>
                <input type='submit' value="Submit" className="submit-btn"></input>
            </form>
        </section>
    )
}

export default NewBoxForm;