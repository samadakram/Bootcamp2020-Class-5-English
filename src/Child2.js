import React, { useReducer } from 'react';
import numberReducer from './NumberReducer';

const Child2 = () => {

    let [state, dispatch] = useReducer(numberReducer, 52)
    return(
        <div>
            <h1>Child 2 Component</h1>
            <h2>Child 2 counter : {state} </h2>
        </div>
    );
}

export default Child2;