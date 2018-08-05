import initialState from '../lib/initialState';
import { ADD_BASE_SELECTION, ADD_SAUCE_SELECTION, ADD_TOPPING_SELECTION } from '../actions/ActionCreators';
import _ from "lodash";


export default (state = initialState, action = []) => {
    let newState = _.cloneDeep(state);
    switch (action.type) {
        case ADD_BASE_SELECTION: 
           let base =  _.find(newState.bases, function(base) {
                return base.type === action.payload;
            });
            newState.selection.base = base;
            newState.total = newState.selection.base.cost + newState.selection.sauce.cost + 3;
            break;
        case ADD_SAUCE_SELECTION:
            let sauce =  _.find(newState.sauces, function(sauce) {
                return sauce.name === action.payload;
            });
            newState.selection.sauce = sauce;
            newState.total = newState.selection.base.cost + newState.selection.sauce.cost + 3;
            break;
        case ADD_TOPPING_SELECTION:
            let currentIndex = newState.selection.toppings.indexOf(action.payload)
            console.log(currentIndex);
            if(currentIndex === -1) {
                newState.selection.toppings.push(action.payload)
            }  
            else {
                newState.selection.toppings.splice(currentIndex,1);
            }   
            newState.total = newState.selection.base.cost + newState.selection.sauce.cost + 3;
            break;
            // no default
    }
    
    return newState
}

