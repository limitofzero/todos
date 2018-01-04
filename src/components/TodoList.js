import React, { Component } from "react";
import { connect } from "react-redux";
import "../less/todo-list.less";

class TodoList extends Component {
    getList() {
        const {todos} = this.props;
        if(todos.length) {
            return <ul className="todo-list">
                {todos.map((todo, index) => <li key={index}>{todo.text}</li>)}
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

export default connect(mapStateToProps, null)(TodoList);