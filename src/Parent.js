import React from 'react';
import Child from './Child.js';

const Parent = (props) =>{
    return(
        <div>
            <Child num={props.num} />
        </div>
    );
}

export default Parent;