import {FILTER_CHANGED, FILTER_ACTIVE, FILTER_ALL, FILTER_COMPLITED} from "../actions/constants";

const initialState = [
    {name: FILTER_ALL, active: true},
    {name: FILTER_ACTIVE, active: false},
    {name: FILTER_COMPLITED, active: false},
];

export default function filterReducer(state = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case FILTER_CHANGED:
            return state.map(filter => {
                filter.active = filter.name === payload.filterName;
                return filter;
            });
        default:
            return state;
    }
}