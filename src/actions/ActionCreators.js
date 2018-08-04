const ADD_BASE_SELECTION = 'ADD_BASE_SELECTION';

function onBaseSelect (base) {
    console.log(base);
    return {
        type: ADD_BASE_SELECTION,
        payload: base
    }
} 

export { onBaseSelect, ADD_BASE_SELECTION };