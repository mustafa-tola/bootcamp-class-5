import React, {useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import ValueContext from './ValueContext';

function Child(props) {
  let value = useContext(ValueContext)
  console.log("value",value)
  let updateValue = value[1]
  return (
    <div>
        Child number {value}
        <button onClick={() => {updateValue(++value[0])}}>Update value</button>
    </div>
  );
}

export default Child;