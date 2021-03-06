import {ADD_TODO, CLEAR_COMPLETED, REMOVE_TODO, REVERT_COMPLETE_TODO} from "../actions/constants";

export default function todosReducer(state = [], action) {
    const {type, payload} = action;

    switch(type) {
        case ADD_TODO:
            return [{text: payload.text, isComplete: false}].concat(state);
        case REVERT_COMPLETE_TODO:
            return state.map((todo, index) => {
                if(index === payload.index) {
                    todo.isComplete = !todo.isComplete;
                }

                return todo;
            });
        case REMOVE_TODO:
            return state.filter((el, index) => index !== payload.index);
        case CLEAR_COMPLETED:
            return state.filter(todo => !todo.isComplete);
        default:
            return state;
    }
}