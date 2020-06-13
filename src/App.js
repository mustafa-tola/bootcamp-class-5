import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';


function App() {
  let value = useState(48);
  return (
    <ValueContext.Provider value={value}>
      <div>
        Hello World
        <Parent />
        {/* <button onClick={() => { setNumber(number++) }}>Update Number</button> */}
      </div>
    </ValueContext.Provider>
  );
}

export default App;
