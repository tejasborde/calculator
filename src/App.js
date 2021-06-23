import "./App.css";
import { useState} from 'react'


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
      setResult(memory);
    
      
    } catch (error) {
      
    }
  }
  
  return (
    <>
    <div className="container-fluid">
        <div className="container">
          <form>
            {/* <div id="result-expression">{exp}</div>  */}
            <input type="text" value={result} />
            <div id="result-expression">{memory !== '0' ? 'M : '+memory  :''}</div>
          </form>
          <div className="keyPad">
            <button onClick={ClearMemory}>MC</button>
            <button onClick={SubMemory} >M&ndash;</button>  
            <button onClick={AddMemory} >M+</button>
            <button onClick={MemoryResult} >MR</button>
            <button >{"<"}-</button>
              <button onClick={ClearAll} id="clear">AC</button>
            <button onClick={BackSpace}>CE</button>  
            <button >&plusmn;</button>
            <button onClick={squareRoot} >&radic;</button>
            <button onClick={square} >x<sup>2</sup></button>
              
            <button onClick={Clicked} name="7">7</button>
                <button onClick={Clicked} name="8">8</button>
            <button onClick={Clicked} name="9">9</button>
            <button onClick={Clicked} name="/">&divide;</button>
            <button onClick={percentage}>%</button>
             
              <button onClick={Clicked} name="4">4</button>
                <button onClick={Clicked} name="5">5</button>
            <button onClick={Clicked} name="6">6</button>
            <button onClick={Clicked} name="*">&times;</button>
            <button onClick={recipkl}>1/x</button>
              
              <button onClick={Clicked} name="1">1</button>
                <button onClick={Clicked} name="2">2</button>
            <button onClick={Clicked} name="3">3</button>
            <button onClick={Clicked} name="-">&ndash;</button>
            <button onClick={Clicked} name="+">+</button>
            <button onClick={Clicked} name=".">.</button>
            
            <button onClick={Clicked} name="0">0</button>
            <button onClick={Clicked} name="00">00</button>
                
                <button onClick={Evaluate} id="result">=</button>
            </div>
        </div>
    </div>

    </>
  );
}
export default App;
