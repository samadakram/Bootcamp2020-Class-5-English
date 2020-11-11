const numberReducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
    }
}

export default numberReducer;