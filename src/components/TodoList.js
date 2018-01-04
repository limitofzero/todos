import React, { Component } from "react";
import { connect } from "react-redux";

class TodoList extends Component {
    getList() {
        return this.props.todos.map((todo, index) =>
            <li key={index}>{todo.text}</li>
        );
    }


    render() {
        return (
            <ul>
                {this.getList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: state
    }
}

export default connect(mapStateToProps, null)(TodoList);