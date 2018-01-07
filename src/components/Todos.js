import React, { Component } from "react";
import InputForm from "./InputForm";
import TodoList from "./TodoList";
import InfoForm from "./InfoForm";
import "../less/todo.less"

export default class Todos extends Component {
    render(){
        return (
            <div className="todo">
                <InputForm/>
                <TodoList/>
                <InfoForm/>
            </div>
        );
    };
}