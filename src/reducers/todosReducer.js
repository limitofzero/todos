import {ADD_TODO} from "../actions/constants";

export default function todosReducer(state = [], action) {
    const {type, payload} = action;

    switch(type) {
        case ADD_TODO:
            return [{text: payload.text, completed: false}].concat(state);
        default:
            return state;
    }
}