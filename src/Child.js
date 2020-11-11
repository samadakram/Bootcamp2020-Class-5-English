import React from 'react';

const Child = (props) => {
    return(
        <div>
            <h1>Child Component</h1>
            <h2>CHild counter number is : {props.num} </h2>
        </div>
    );
}

export default Child;