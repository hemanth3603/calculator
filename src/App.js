import './App.css';
import Header from './components/Header.js'
import React, { useState } from 'react';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function App() {
  const [inp, setInp] = useState("");
  const [exp,setExp]=useState("");
  function handleClick(value) {
    setInp(inp + value)
  }
  function handleClear() {
    setInp("")
    setExp("")
  }
  function calculate() {
    setExp(inp)
    let outputVal = eval(inp);
    setInp(outputVal)
    
  }
  return (
    <div>
      <Header />
    <div className='cont'>
      <div className='calculator'>
        <input type='text' value={exp}  className='output'></input>
        <input type='text' value={inp} onChange={(e) => setInp(e.target.value)} className='exp'></input>
        <div className="keypad">
          <div >
            <button onClick={() => handleClear()} className="digit" style={{width:'170px'}}>AC</button>
            <button onClick={()=>setInp(inp.slice(0,-1))}  className="digit">C</button>
            <button onClick={() => handleClick("/")} className="operator">&divide;</button>
          </div>

          <div >
            <button onClick={() => handleClick("7")} className="digit">7</button>
            <button onClick={() => handleClick("8")} className="digit">8</button>
            <button onClick={() => handleClick("9")} className="digit">9</button>
            <button onClick={() => handleClick("*")} className="operator">&times;</button>
          </div>
          
          <div >
            <button onClick={() => handleClick("4")} className="digit">4</button>
            <button onClick={() => handleClick("5")} className="digit">5</button>
            <button onClick={() => handleClick("6")} className="digit">6</button>
            <button onClick={() => handleClick("-")} className="operator">&minus;</button>
          </div>
          <div >
            <button onClick={() => handleClick("1")} className="digit">1</button>
            <button onClick={() => handleClick("2")} className="digit">2</button>
            <button onClick={() => handleClick("3")} className="digit">3</button>
            <button onClick={() => handleClick("+")} className="operator">+</button>
          </div>
          <div >
            <button onClick={() => handleClick("00")} className="digit" style={{ borderBottomLeftRadius: '15px' }}>00</button>
            <button onClick={() => handleClick("0")} className="digit">0</button>
            <button onClick={() => handleClick(".")} className="digit">.</button>
            <button onClick={() => calculate()} className="fun-key" style={{ borderBottomRightRadius: '15px' }}>=</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
