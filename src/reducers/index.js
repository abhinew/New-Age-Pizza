import initialState from '../lib/initialState';
import { ADD_BASE_SELECTION, ADD_SAUCE_SELECTION, ADD_TOPPING_SELECTION, ADD_DELIVERY } from '../actions/ActionCreators';
import _ from "lodash";


export default (state = initialState, action = []) => {
    let newState = _.cloneDeep(state);
    
    let deliveryCharge = 0;
    switch (action.type) {
        case ADD_BASE_SELECTION: 
           let base =  _.find(newState.bases, function(base) {
                return base.type === action.payload;
            });
            newState.selection.base = base;
            
            break;
        case ADD_SAUCE_SELECTION:
            let sauce =  _.find(newState.sauces, function(sauce) {
                return sauce.name === action.payload;
            });
            newState.selection.sauce = sauce;
            
            break;
        case ADD_TOPPING_SELECTION:
            let currentIndex = newState.selection.toppings.indexOf(action.payload)
            if(currentIndex === -1) {
                newState.selection.toppings.push(action.payload)
            }  
            else {
                newState.selection.toppings.splice(currentIndex,1);
            }   
            
            break;
        case ADD_DELIVERY:
            if (newState.delivery == false)
                newState.delivery = true;    
            else
                newState.delivery = false;

            // no default
    }
    if (newState.delivery === true) {
        deliveryCharge = newState.total * 0.1;
    }
    
    newState.total = newState.selection.base.cost + newState.selection.sauce.cost + (newState.selection.toppings.length * 0.50) + deliveryCharge;
    return newState
}

