import React, {useState} from 'react';
import Parent from './Parent.js';
import './App.css';

function App() {

  let [number, setNumber] = useState(0);

  return (
    <div className="App">
      <Parent num={number} />
      <button onClick={()=> setNumber(++number)} >Update Number</button>
    </div>
  );
}

export default App;
