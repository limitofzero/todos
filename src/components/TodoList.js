import React, { Component } from "react";
import { connect } from "react-redux";
import {revertCompleteTodo} from "../actions";
import TodoElement from "./TodoElement";
import "../less/todo-list.less";

class TodoList extends Component {
    getList() {
        const {todos, revertCompleteTodo} = this.props;
        console.log(todos);
        if(todos.length) {
            return <ul className="todo-list">{
                    todos.map((todo, index) =>
                    <TodoElement key={index}
                                 text={todo.text}
                                 isComplete={todo.isComplete}
                                 revertComplete={revertCompleteTodo.bind(this, index)}/>)
            }
            </ul>;
        }

        return null;
    }


    render() {
        return (
            this.getList()
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: state
    }
}

export default connect(mapStateToProps, {revertCompleteTodo})(TodoList);