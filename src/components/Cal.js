import React from 'react'

export const Cal = ({ propsData }) => {
    return (
        <div>
            <div className="container-fluid">
       
        <div className="container">
          <form>
            {/* <div id="result-expression">{exp}</div>  */}
            <input type="text" value={propsData.result} />
            <div id="result-expression">{propsData.memory !== '0' ? 'M : '+propsData.memory  :''}</div>
          </form>
          <div className="keyPad">
            <button onClick={propsData.ClearMemory}>MC</button>
            <button onClick={propsData.SubMemory} >M&ndash;</button>  
            <button onClick={propsData.AddMemory} >M+</button>
            <button onClick={propsData.MemoryResult} >MR</button>
            <button >{"<"}-</button>
              <button onClick={propsData.ClearAll} id="clear">AC</button>
            <button onClick={propsData.BackSpace}>CE</button>  
            <button >&plusmn;</button>
            <button onClick={propsData.squareRoot} >&radic;</button>
            <button onClick={propsData.square} >x<sup>2</sup></button>
              
            <button onClick={propsData.Clicked} name="7">7</button>
                <button onClick={propsData.Clicked} name="8">8</button>
            <button onClick={propsData.Clicked} name="9">9</button>
            <button onClick={propsData.Clicked} name="/">&divide;</button>
            <button onClick={propsData.percentage}>%</button>
             
              <button onClick={propsData.Clicked} name="4">4</button>
                <button onClick={propsData.Clicked} name="5">5</button>
            <button onClick={propsData.Clicked} name="6">6</button>
            <button onClick={propsData.Clicked} name="*">&times;</button>
            <button onClick={propsData.recipkl}>1/x</button>
              
              <button onClick={propsData.Clicked} name="1">1</button>
                <button onClick={propsData.Clicked} name="2">2</button>
            <button onClick={propsData.Clicked} name="3">3</button>
            <button onClick={propsData.Clicked} name="-">&ndash;</button>
            <button onClick={propsData.Clicked} name="+">+</button>
            <button onClick={propsData.Clicked} name=".">.</button>
            
            <button onClick={propsData.Clicked} name="0">0</button>
            <button onClick={propsData.Clicked} name="00">00</button>
                
                <button onClick={propsData.Evaluate} id="result">=</button>
            </div>
        </div>
    </div>
        </div>
    )
}
