import {ADD_TODO, REVERT_COMPLETE_TODO} from "./constants";

export function addTodo(text) {
    return {
        type: ADD_TODO,
        payload: {text}
    };
}

export function revertCompleteTodo(todoIndex) {
    return {
        type: REVERT_COMPLETE_TODO,
        payload: {todoIndex}
    };
}

