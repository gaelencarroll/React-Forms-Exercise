import React, { useState } from "react";
import "./BoxList.css";
import NewBoxForm from "../NewBoxForm/NewBoxForm";
import Box from "../Box/Box";

function BoxList(){
    const [boxes, setBoxes] = useState([]);
    const add = boxObj => {
        setBoxes(boxes => [...boxes, boxObj]);
      };
      const remove = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
      };

    const boxesList = boxes.map(box => (
        <Box 
            id={box.id} 
            key={box.id} 
            height={box.height} 
            width={box.width}
            color={box.color}
            handleRemove={remove}></Box>
    ))

    return(
        <section className="box-list-section">
            <NewBoxForm createBox={add}></NewBoxForm>
            {boxesList}
        </section>
    )
}

export default BoxList;