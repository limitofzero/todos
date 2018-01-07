import React, { Component } from "react";
import { connect } from "react-redux";
import "../less/info-form.less";
import {clearCompleted} from "../actions";

class InfoForm extends Component {
    getClearCompletedButton() {
        const {todoComplete, clearCompleted} = this.props;
        if(todoComplete) {
            return (
                <span className="text-btn" onClick={clearCompleted}>
                    Clear completed
                </span>
            );
        }

        return null;
    }

    render() {
         const {todoCount, todoComplete} = this.props;
         if(!todoCount) {
             return null;
         }

         return (
             <div className="info-form">
                 <div className="items-left">
                     {todoComplete + " items left"}
                 </div>
                 {this.getClearCompletedButton()}
             </div>
         );
    }
}

export default connect((state) => {
    const {todos} = state;
    return {
        todoCount: todos.length,
        todoComplete: todos.filter(todo => todo.isComplete).length
    }
}, {clearCompleted})(InfoForm);