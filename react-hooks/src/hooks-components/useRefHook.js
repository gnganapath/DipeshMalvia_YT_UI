import React, { useState, useRef, useEffect } from 'react';

export default function useRefHookDemo(){

/* 
useRef:
=======
1. DOM reference - focus input textbox  - return Object - has property current
2. useRef for storing the previous state
3. hold mutable value prevent re-render of component

*/
//useRef 1. use case
const [ name, setName ] = useState("");
const inputEl = useRef("");
console.log(inputEl);
const resetInput = () => { 
    setName("");   // array fun for click the reset button
    inputEl.current.focus();  // the input element will focus the textbox
    //inputEl.current.value = "gan"   // it will get value in textbox after reset but the name variable state not get . so it's invalid
};

//useRef 2,3 use cases
const [ counter, setCounter ] = useState(0);
const previousCounterRef = useRef("");

useEffect(()=>{
    previousCounterRef.current = counter;
}, [counter]);

return (
     <div className="App" style={{border: '1px solid blue', margin: 5}}>
            <h5> 3. UseRef Hooks </h5>
            <div>
                <input ref={inputEl} name="name" autoComplete="off" type="text" value={name} onChange ={(e) => setName(e.target.value)} />
                <button onClick={resetInput} >Reset</button>
                <div> Entered Input is - {name} -</div>
                <hr />
                <div> 
                    {typeof previousCounterRef.current !== "undefined" && (<h6> previous Counter: {previousCounterRef.current} </h6>) }
                    Counter value : {counter}
                    
                    <div><button onClick= { (e) => {setCounter(Math.ceil(Math.random()* 100) )}}>random counter </button></div>
                </div>
            </div>
    </div>
)

}