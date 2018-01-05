import React from "react";
import "../less/todo-element.less";

export default function TodoList({text, isComplete, revertComplete}) {
    const completeClass = "complete" + (isComplete ? " completed" : "");

    return (
        <li className="todo-element">
            <span className={completeClass} onClick={revertComplete}></span>
            <span className="todo-text">{text}</span>
        </li>
    );
}