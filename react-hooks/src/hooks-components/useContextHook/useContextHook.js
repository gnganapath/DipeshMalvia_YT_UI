import { React, useState } from 'react';
import CComponentChild from './CComponentChild';
import { FComponentChild } from './FComponentChild';

import { CounterContext } from './createContext/counterContext';

export const UseContextHook = () =>{

const [counter, setCounter] = useState(0);



    const increment = () =>{
        setCounter(counter +1);
    }

    const decrement = () =>{
        setCounter(counter -1);
    }

    return(
        <div className="App border">
            <h4>UseContext - Demo</h4>
            <h5> Root/parentComponent context Demo</h5>
            <h5> {counter} </h5>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
             <div>
                <CounterContext.Provider value = "Hello Context">
                    <div style={{width: '50%', display: 'inline-block'}}> <CComponentChild  counter = {counter} /> </div>
                    <div style={{width: '50%', display: 'inline-block'}}> <FComponentChild  counter = {counter}  /> </div> 
                </CounterContext.Provider>  
            </div>
        </div>
    )
}