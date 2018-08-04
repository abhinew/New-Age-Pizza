const ADD_BASE_SELECTION = 'ADD_BASE_SELECTION';

function onBaseSelect (base) {
    return {
        type: ADD_BASE_SELECTION,
        payload: base
    }
} 

export { onBaseSelect, ADD_BASE_SELECTION };