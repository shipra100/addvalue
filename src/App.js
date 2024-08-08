import './App.css';
import React, { useState } from 'react';
 

function App() {
  const [firstvalue, setFirstvalue] = useState(0);
  const [secondvalue, setSecondvalue] = useState(0);
  const [calculate, setCalculate] = useState(0);

  //logic
  let calculatenumber =(e) => {
      e.preventDefault();

      if(firstvalue===0 || secondvalue===0){
        alert('please enter a valid first and second value')
      }
      else{
        let result = parseFloat(firstvalue) + parseFloat(secondvalue);
      setCalculate(result);
      }
  }

  let reset= ()  => {
    setFirstvalue(0);
    setSecondvalue(0);
    setCalculate(0);
  }
 
  return (
    <>
    <div className='title' ><h1 >ADD VALUE</h1>
    <p>This is the addition calculator . where we add two values very easily.</p></div>
    
    <div className="App">
      <form onSubmit={calculatenumber}>
        <div className='right'>
        <label>First value</label>
          <input type='text' placeholder='Enter your first value' value={firstvalue}
          onChange={(e) => setFirstvalue(e.target.value)}/>
        </div>
        <div className='two'>
          <label>Second value</label>
          <input type='text' placeholder='Enter your second value' value={secondvalue}
          onChange={(e) => setSecondvalue(e.target.value)}/>
          </div>
        <div>  <button className='button-65' >Calculate number</button>
                          <button className='button-65' onClick={reset} type='submit'>Reset</button>
        </div>
      </form>
      <div className='left'>
        <div className='Container_num_is'>
          <h1>Total value is</h1>
          <p>{calculate}</p>
        </div>
      </div>
     
    </div>
    </>
  );
}

export default App;
