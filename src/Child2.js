import React, { useReducer } from 'react';
import numberReducer from './NumberReducer';

const Child2 = () => {

    let [state, dispatch] = useReducer(numberReducer, 52)
    return(
        <div>
            <h1>Child 2 Component</h1>
            <h2>Child 2 counter : {state} </h2>
            <button onClick={()=> {dispatch({type:'INCREMENT'});}} >Increment</button>
            <button onClick={()=> {dispatch({type:'DECREMENT'});} } >Decrement</button>
        </div>
    );
}

export default Child2;