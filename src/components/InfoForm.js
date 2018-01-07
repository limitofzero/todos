import React, { Component } from "react";
import { connect } from "react-redux";
import "../less/info-form.less";
import {clearCompleted, filterChanged} from "../actions";
import Filters from "./Filters";

class InfoForm extends Component {
    getClearCompletedButton() {
        const {todoComplete, clearCompleted} = this.props;
        const visStyle = {visibility: todoComplete ? "" : "hidden"};

        return (
            <span className="text-btn"
                  onClick={clearCompleted} style={visStyle}>
                    Clear completed
                </span>
        )
    }

    render() {
         const {todoCount, todoComplete, filters, filterChanged} = this.props;
         if(!todoCount) {
             return null;
         }

         return (
             <div className="info-form">
                 <div className="items-left">
                     {todoCount - todoComplete + " items left"}
                 </div>
                 <Filters filters={filters} filterClick={filterChanged}/>
                 {this.getClearCompletedButton()}
             </div>
         );
    }
}

export default connect((state) => {
    const {todos, filters} = state;
    return {
        todoCount: todos.length,
        todoComplete: todos.filter(todo => todo.isComplete).length,
        filters
    }
}, {clearCompleted, filterChanged})(InfoForm);