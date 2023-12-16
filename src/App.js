import './App.css';
import React,{useState} from 'react';

function App() {
  const [value,setValue]=useState('')
  
  return (
    <div className="App">
      <div className="container-calc">
        <div className="row">
          <input type="text" value = {value} className="display"></input>
        </div>
        <div className="row">
          <button className="twospan" style={{background: "#00ADB5"}} onClick={e=>setValue('')}>AC</button>
          <button style={{background: "#00ADB5"}} onClick={e=>setValue(value.slice(0,-1))}>⬅️</button>
          <button style={{background:"#F875AA"}} onClick={e => setValue(value+e.target.value)} value="/">/</button>
        </div>
        <div className="row">
          <button onClick={e => setValue(value+e.target.value)} value="7">7</button>
          <button onClick={e => setValue(value+e.target.value)} value="8">8</button>
          <button onClick={e => setValue(value+e.target.value)} value="9">9</button>
          <button style={{background:"#F875AA"}} onClick={e => setValue(value+e.target.value)} value="*">*</button>
        </div>
        <div className="row">
          <button onClick={e => setValue(value+e.target.value)} value="4">4</button>
          <button onClick={e => setValue(value+e.target.value)} value="5">5</button>
          <button onClick={e => setValue(value+e.target.value)} value="6">6</button>
          <button style={{background:"#F875AA"}} onClick={e => setValue(value+e.target.value)} value="-">-</button>
        </div>
        <div className="row">
          <button onClick={e => setValue(value+e.target.value)} value="1">1</button>
          <button onClick={e => setValue(value+e.target.value)} value="2">2</button>
          <button onClick={e => setValue(value+e.target.value)} value="3">3</button>
          <button style={{background:"#F875AA"}} onClick={e => setValue(value+e.target.value)} value="+">+</button>
        </div>
        <div className="row">
          <button style={{background:"#F875AA"}} onClick={e => setValue(value+e.target.value)} value=".">.</button>
          <button onClick={e => setValue(value+e.target.value)} value="0">0</button>
          <button className="twospan" style={{background: "#00ADB5"}} onClick={e=>setValue(eval(value))}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
