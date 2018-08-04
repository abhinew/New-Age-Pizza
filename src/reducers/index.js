import initialState from '../lib/initialState';
import { ADD_BASE_SELECTION } from '../actions/ActionCreators';


export default (state = initialState, action = []) => {
    let newState = {...state};
    switch (action.type) {
        case ADD_BASE_SELECTION: 
            newState.selection.base = action.payload
            return newState;
        default: 
            return newState
    }
}

