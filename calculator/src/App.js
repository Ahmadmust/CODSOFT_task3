import React,{useState} from 'react';
import './App.css';


function App() {

  const [input,setInput]=useState('')
  const [result,setResult]=useState('')

  const handlebtnClick = (value)=>{
    setInput(input+value);
  }
  const handleResult = ()=>{
    try{
      setResult(eval(input).toString());
    }
    catch(error){
      setInput('Error')
    }
  }

const handleDel=()=>{
  setInput(input.toString().slice(0,-1))
}
const handleClear=()=>{
  setInput('')
  setResult('')
}

  return (
    <div className="calculator-container">
      <div className="output">
        <div className='input'>{input}</div>
        <div className='result'>{result}</div>
      </div>
      <button className='boxes-two' onClick={()=>handleClear('ac')}>AC</button>
      <button onClick={()=>handleDel('del')}>DEL</button>
      <button onClick={()=>handlebtnClick('/')}>/</button>
      <button onClick={()=>handlebtnClick('1')}>1</button>
      <button onClick={()=>handlebtnClick('2')}>2</button>
      <button onClick={()=>handlebtnClick('3')}>3</button>
      <button onClick={()=>handlebtnClick('*')}>*</button>
      <button onClick={()=>handlebtnClick('4')}>4</button>
      <button onClick={()=>handlebtnClick('5')}>5</button>
      <button onClick={()=>handlebtnClick('6')}>6</button>
      <button onClick={()=>handlebtnClick('+')}>+</button>
      <button onClick={()=>handlebtnClick('7')}>7</button>
      <button onClick={()=>handlebtnClick('8')}>8</button>
      <button onClick={()=>handlebtnClick('9')}>9</button>
      <button onClick={()=>handlebtnClick('-')}>-</button>
      <button onClick={()=>handlebtnClick('.')}>.</button>
      <button onClick={()=>handlebtnClick('0')}>0</button>
      <button className='boxes-two' onClick={()=>handleResult('=')}>=</button>
    </div>
  );
}

export default App;
