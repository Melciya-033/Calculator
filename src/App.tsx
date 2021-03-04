import React,{useState,useEffect,useRef} from 'react';
import { setConstantValue } from 'typescript';

import './App.css';

function App() {
  const[result,setResult]=useState("");
  const inputRef=useRef(null);
  useEffect(()=>inputRef.current.focus());
  
  
  function handleClick(e){
    setResult(result+e.target.name);
  }
  function click(e){
    setResult(result+e.target.id);
  }
  
  function calculate(){
    try{
   setResult(eval(result).toString());
  }
    catch(error){
    setResult("Error");

   }

  }
  function clear(){
    setResult("");
  }
  function convert(){
   if(eval(result)>=0){
      setResult("-"+ eval(result))
    
     
    }
    else{
      setResult("+"+ eval(result))
    }
    
  }
 
  return (
    <div className="App">
      
        <input type="text" value={result} ref={inputRef}/>
        
    
    <div className="keypad">
      <button  className="Button" name="AC" onClick={clear}>AC</button>
      <button className="Button" name="+/-" onClick={convert}>+/-</button>
      <button className="Button" name="%"onClick={handleClick} >%</button>
      <button  className="Button1" name="/"onClick={handleClick}>/</button>
      <button className="Button" name="7"onClick={handleClick}>7</button>
      <button className="Button" name="8"onClick={handleClick}>8</button>
      <button  className="Button"name="9"onClick={handleClick}>9</button>
      <button  className="Button1" name="*"onClick={handleClick}>*</button>
      <button  className="Button"name="4"onClick={handleClick}>4</button>
      <button className="Button"name="5"onClick={handleClick}>5</button>
      <button className="Button" name="6"onClick={handleClick}>6</button>
      <button  className="Button1" name="-"onClick={handleClick}>-</button>
      <button className="Button" name="1"onClick={handleClick}>1</button>
      <button  className="Button"name="2"onClick={handleClick}>2</button>
      <button className="Button" name="3"onClick={handleClick}>3</button>
      <button   className="Button1"name="+"onClick={handleClick}>+</button>
      <button className="Button" id="long" name="0"onClick={handleClick} >0</button>
      <button className="Button" name="." onClick={handleClick}>.</button>
      <button className="Button1" onClick={calculate}>=</button>
      
     

    </div>
</div>
  );
}

export default App;
