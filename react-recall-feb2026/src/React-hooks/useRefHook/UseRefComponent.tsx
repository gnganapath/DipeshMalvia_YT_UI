import React, {useState, useRef, useEffect } from "react";

//  useRef 
// 1. DOM reference
// 2. useRef for storing the previous useState
// 3. hold mutable value prevent re-render of component


const UseRefComponent=():React.FC=>{
   const [name, setName] = useState<String>("");
   const inputEl = useRef("");
   console.log(inputEl);
   const resetInput=()=>{
       setName("");
       inputEl.current.focus();
        console.log(inputEl.current.value);
        //inputEl.current.value= "my name"; no advice and not work
   }

   const [counter, setCounter] = useState(0);
   const previousCounterRef = useRef("");
   const generateRandomNo = (e)=>{
        setCounter(Math.ceil(Math.random()*100));
   }
   useEffect(()=>{
    previousCounterRef.current = counter;
   },[counter])

    return(
        <>
            <h3> useRef hook </h3>
            Enter Name here:
            <input ref={inputEl} name="name" type="text" value={name} onChange={(e)=>setName(e.target.name)} />
            <button onClick={resetInput}> Reset</button>
            <div> Entered Name : {name} </div>

            <h3> useRef to get previous value </h3>
            <div>
                <h4> Random number : {counter} </h4>  {typeof previousCounterRef.current !== 'undefined' && ( <h4> Previous value: {previousCounterRef.current} </h4> )}
                <button onClick={(e)=> setCounter(Math.ceil(Math.random()*100)) }> Random No. </button>
            </div>

        </>
    )

}

export default UseRefComponent;