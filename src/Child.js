import React, { useContext } from 'react';
import ValueContext from './ValueContext';

const Child = () => {
    let value = useContext(ValueContext);
    return(
        <div>
            <h1>Child Component</h1>
            <h2>CHild counter number is : {value[0]} </h2>
            <button onClick={()=> value[1](++value[0])} >Update Value</button>
            <button onClick={()=> value[1](0,value[0])} >Reset</button>
        </div>
    );
}

export default Child;