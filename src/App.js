import React, {useState} from 'react';
import Parent from './Parent.js';
import ValueContext from './ValueContext';
import './App.css';

function App() {

  // let [number, setNumber] = useState(0);
  let value = useState(0);
  return (
    <ValueContext.Provider value={value} >
      <div className="App">
        <Parent />
      </div>
    </ValueContext.Provider>
  );
}

export default App;
