import React, { Component } from "react";
import InputForm from "./InputForm";
import "../less/todo.less"

export default class Todos extends Component {
    render(){
        return (
            <div className="todo">
                <InputForm/>
            </div>
        );
    };
}