import React, { useState } from 'react';
import './app.css';
function App() {
  const [result, setResult] = useState('');

  const handleNumClick = (num) => {
    setResult(result.toString() + num.toString());
  }

  const handleEqual = () => {
    setResult(eval(result).toString());
  }

  const handleClear = () => {
    setResult('');
  }

  return (
    <div className="calculator">
      <h1 style={{textAlign:"center",backgroundColor: "lightblue"}}>CALCULATOR</h1>
      <hr/>
      <div className="result">{result}</div>
      <div className="buttons">
        <div className="button-row">
          <button onClick={() => handleNumClick(7)}>7</button>
          <button onClick={() => handleNumClick(8)}>8</button>
          <button onClick={() => handleNumClick(9)}>9</button>
          <button onClick={() => handleNumClick('/')}>/</button>
        </div>
        <div className="button-row">
          <button onClick={() => handleNumClick(4)}>4</button>
          <button onClick={() => handleNumClick(5)}>5</button>
          <button onClick={() => handleNumClick(6)}>6</button>
          <button onClick={() => handleNumClick('*')}>*</button>
        </div>
        <div className="button-row">
          <button onClick={() => handleNumClick(1)}>1</button>
          <button onClick={() => handleNumClick(2)}>2</button>
          <button onClick={() => handleNumClick(3)}>3</button>
          <button onClick={() => handleNumClick('-')}>-</button>
        </div>
        <div className="button-row">
          <button onClick={() => handleNumClick(0)}>0</button>
          <button onClick={() => handleNumClick('.')}>.</button>
          <button onClick={() => handleEqual()}>=</button>
          <button onClick={() => handleNumClick('+')}>+</button>
        </div>
        <div className="button-row">
          <button onClick={() => handleClear()}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default App;



