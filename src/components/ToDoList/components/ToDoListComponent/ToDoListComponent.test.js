import React from "react";
import { render } from "@testing-library/react";
import ToDoListComponent from "./ToDoListComponent";

function addToDo(toDoList, task='walk the dog'){
    const taskInput = toDoList.getbyLabelText('Task');
    const submitBtn = toDoList.getByDisplayValue('Submit');
    fireEvent.change(taskInput, {target : {value:task}});
    fireEvent.click(submitBtn);
}

it('renders to do without crashing', function(){
    render(<ToDoListComponent/>)
})

it('matches snapshot', function(){
    const {asFragment} = render(<ToDoListComponent/>);
    expect(asFragment().toMatchSnapshot())
})

it('can add a new box', function(){
    const toDoList = render(<ToDoListComponent></ToDoListComponent>)
    addToDo(toDoList)
    const removeButton = toDoList.getByText('x')
    expect(removeButton).toBeInTheDocument();
})