import {ADD_TODO, CLEAR_COMPLETED, FILTER_CHANGED, REMOVE_TODO, REVERT_COMPLETE_TODO} from "./constants";

export function addTodo(text) {
    return {
        type: ADD_TODO,
        payload: {text}
    };
}

export function revertCompleteTodo(index) {
    return {
        type: REVERT_COMPLETE_TODO,
        payload: {index}
    };
}

export function removeTodo(index) {
    return {
        type: REMOVE_TODO,
        payload: {index}
    };
}

export function clearCompleted(index) {
    return {
        type: CLEAR_COMPLETED
    };
}

export function filterChanged(filterName) {
    return {
        type: FILTER_CHANGED,
        payload: {filterName}
    };
}

