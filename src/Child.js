import React, { useContext } from 'react';
import ValueContext from './ValueContext';

const Child = () => {
    let value = useContext(ValueContext);
    return(
        <div>
            <h1>Child Component</h1>
            <h2>CHild counter number is : {value} </h2>
        </div>
    );
}

export default Child;