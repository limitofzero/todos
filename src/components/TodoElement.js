import React from "react";
import "../less/todo-element.less";

export default function TodoList({text, isComplete, revertComplete}) {
    const completeClass = "complete" + (isComplete ? " complete_completed" : "");
    const todoTextClass = "todo-text" + (isComplete ? " todo-text_completed" : "");

    return (
        <li className="todo-element">
            <span className={completeClass} onClick={revertComplete}></span>
            <span className={todoTextClass}>{text}</span>
        </li>
    );
}