import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

it('renders box form without crashing', function(){
    render(<NewBoxForm></NewBoxForm>)
})

it('matches snapshot', function(){
    const {asFragment} = render(<NewBoxForm></NewBoxForm>);
    expect(asFragment()).toMatchSnapshot()
})
