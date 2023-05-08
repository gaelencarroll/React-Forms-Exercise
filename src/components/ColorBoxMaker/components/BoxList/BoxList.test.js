import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxList, width='2', height='3', color='red'){
    const widthInput = boxList.getbyLabelText('Width');
    const heightInput = boxList.getbyLabelText('Height');
    const colorInput = boxList.getbyLabelText('Color');
    const submitBtn = boxList.getByDisplayValue('Submit');
    fireEvent.change(widthInput, {target : {value:width}})
    fireEvent.change(heightInput, {target : {value:height}})
    fireEvent.change(colorInput, {target : {value:color}})
    fireEvent.click(submitBtn);
}

it('renders box list without crashing', function(){
    render(<BoxList></BoxList>)
})

it('matches snapshot', function(){
    const {asFragment} = render(<BoxList></BoxList>);
    expect(asFragment()).toMatchSnapshot()
})

it('can add a new box', function(){
    const boxList = render(<BoxList></BoxList>)
    addBox(boxList)
    const removeButton = boxList.getByText('x')
    expect(removeButton).toBeInTheDocument();
    expect(removeButton.previousSibling).toHaveStyle(`width: 2em; height: 3em; color: red`)
})