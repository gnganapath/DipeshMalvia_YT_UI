import React, { useState, useEffect } from 'react';

const UseEffectComponent=()=>{
    // 1. Initialize state with the current time
    const [currentTime, setCurrentTime] = useState(new Date());
    const [message, setMessage] = useState<string>("functinal component");


    useEffect(()=>{
        console.log('useEffect- every event trigger');
    });
  // 2. Use useEffect to set up an interval for updates
  useEffect(() => {
    const timerId = setInterval(() => {
      // Update the state with the new current time every 1000ms (1 second)
      setCurrentTime(new Date());
    }, 1000);

    // 3. Clean up the interval when the component unmounts
    return () => {
      clearInterval(timerId);
    };
  }, []); // Empty dependency array means this effect runs once on mount

    useEffect(()=>{
        console.log('everytime time value changes');
        setCurrentTime(new Date().toString());
    },[message]);

    const changeFn=()=>{
        setMessage(" change the message");
    }
    return(
        <>
         <h3>Use Effect demo</h3>
           <div> <h1>Current Time:</h1>
             <p>{currentTime.toString()}</p> </div>
           <div> message:  {message} </div>
           <button onClick={changeFn}> Change message</button>
        </>
    )
}

export default UseEffectComponent;