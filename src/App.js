import "./App.css";
import { useState } from 'react';
import { Cal } from "./components/Cal";


function App() {
  var [result, setResult] = useState("0");
  // var [exp, setExp] = useState("");
  var [memory, setMemory] = useState("0");


  const Clicked = (e) => {
    if (result[0] === '0') {
      // setExp(exp.concat(e.target.name));
      setResult(result.slice(1).concat(e.target.name));
    } else {
      // setExp(exp.concat(e.target.name));
      setResult(result.concat(e.target.name));
    }
  }

  const ClearAll = () => {
    setResult("0");
    // setExp('');
  }
  const BackSpace = () => {
    try {
      if (result.length===1) {
      setResult("0");
      
    } else {
      setResult(result.slice(0,-1));
    }
    // setExp('');
    } catch (error) {
      setResult('0');
      // setExp('');
    }
    
    
  }
  const Evaluate = () => {
    try {
       setResult(eval(result).toString());
    } catch (error) {
      setResult("Invalid Expression");
    }
  }
 
  
  const square = (e) => {
    try {
      // setExp(exp.concat("^2"));
       setResult(Math.pow(result, 2).toString());
     } catch (error) {
       setResult('0');
      // setExp('');
     }
  }
  
  const squareRoot = (e) => {
    try {
      // setExp(exp.concat("^(1/2)"));
       setResult(Math.pow(result, 0.5).toString());
     } catch (error) {
       setResult('0');
      // setExp('');
     }
  }
  
   const percentage = (e) => {
    try {
      // setExp("");
       setResult(eval(result+"/100"));
     } catch (error) {
       setResult('0');
      // setExp('');
     }
   }
  
  const recipkl = (e) => {
    try {
      // setExp("");
       setResult(eval("1/"+result));
     } catch (error) {
       setResult('0');
      // setExp('');
     }
  }
  

  const AddMemory = () => {
    try {
      const res = parseFloat(memory) + parseFloat(result);
      setMemory(res.toString());
      setResult('0');
      
    } catch (error) {
      
    }
  }
const ClearMemory = () => {
    try {
      setMemory("0");
    } catch (error) {
      
    }
  }
  const SubMemory = () => {
    try {
      const res = parseFloat(memory) -parseFloat(result);
      setMemory(res.toString());
      
    } catch (error) {
      
    }
  }

  const MemoryResult = () => {
    try {
      if (memory !== '0')
      {
        if (result === '0') {
        setResult(memory.toString());
      } else {
        const res = eval(result.toString() + memory.toString());
        setResult(res.toString());
      }
      }  
          
    } catch (error) {
      
    }
  }
  
  const propsData = { result, memory, Clicked, ClearAll, BackSpace, Evaluate, square, squareRoot, percentage, recipkl, AddMemory, ClearMemory, SubMemory, MemoryResult };
  
  
  return (
    <>
        <Cal propsData={propsData} />
    </>
  );
}
export default App;
