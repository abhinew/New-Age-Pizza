const ADD_BASE_SELECTION = 'ADD_BASE_SELECTION';
const ADD_SAUCE_SELECTION = 'ADD_SAUCE_SELECTION';
const ADD_TOPPING_SELECTION = 'ADD_TOPPING_SELECTION';


function onBaseSelect(base) {
    return {
        type: ADD_BASE_SELECTION,
        payload: base
    }
} 

function onSauceSelect(sauce) {
    return {
        type: ADD_SAUCE_SELECTION,
        payload: sauce
    }
}

function onToppingSelect(topping) {
    
    return {
        type: ADD_TOPPING_SELECTION,
        payload: topping
    }
}

export { onBaseSelect, ADD_BASE_SELECTION, onSauceSelect, ADD_SAUCE_SELECTION, onToppingSelect, ADD_TOPPING_SELECTION };