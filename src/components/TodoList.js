import React, { Component } from "react";
import { connect } from "react-redux";
import {FILTER_ALL, FILTER_COMPLITED, FILTER_ACTIVE} from "../actions/constants";
import {revertCompleteTodo, removeTodo} from "../actions";
import TodoElement from "./TodoElement";
import "../less/todo-list.less";

class TodoList extends Component {
    getList() {
        const {todos, revertCompleteTodo, removeTodo} = this.props;

        if(todos.length) {
            return <ul className="todo-list">{
                    todos.map((todo, index) =>
                    <TodoElement key={index}
                                 text={todo.text}
                                 isComplete={todo.isComplete}
                                 removeTodo={removeTodo.bind(this, index)}
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
    const {todos} = state;
    const filter = state.filters.find(filter => filter.active);

    let filteredTodos = null;
    switch (filter.name) {
        case FILTER_ACTIVE:
            filteredTodos = todos.filter(todo => !todo.isComplete);
            break;
        case FILTER_COMPLITED:
            filteredTodos = todos.filter(todo => todo.isComplete);
            break;
        case FILTER_ALL:
            filteredTodos = todos;
    }

    return {
        todos: filteredTodos
    }
}

export default connect(mapStateToProps, {revertCompleteTodo, removeTodo})(TodoList);