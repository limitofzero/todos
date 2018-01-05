import {ADD_TODO, REVERT_COMPLETE_TODO} from "../actions/constants";

export default function todosReducer(state = [], action) {
    const {type, payload} = action;

    switch(type) {
        case ADD_TODO:
            return [{text: payload.text, isComplete: false}].concat(state);
        case REVERT_COMPLETE_TODO:
            return state.map((todo, index) => {
                console.log('before check', todo, payload);
                if(index === payload.index) {
                    todo.isComplete = !todo.isComplete;
                    console.log('index is index', todo);
                }

                return todo;
            });
        default:
            return state;
    }
}