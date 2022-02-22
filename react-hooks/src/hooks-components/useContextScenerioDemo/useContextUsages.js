import {React, useState } from 'react';
import ChildClassComponent from './ChildClassComponent';
import { FunctionChildComponent } from './functionChildComponent';


export function UseContextUsages(){
    const[count, setCount] = useState(0);

    const increment = () =>{
        setCount(count +1);
    }

    const decrement = () =>{
        setCount(count -1);
    }

    return(
        <div className="App border">
            <h4>UseContext - Useage ( scenerio )</h4>
            <h5> parent context Demo</h5>
            <h5> {count} </h5>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
             <div>
                <div style={{width: '50%', display: 'inline-block'}}> <ChildClassComponent count= {count} /> </div>
                <div style={{width: '50%', display: 'inline-block'}}> <FunctionChildComponent  count= {count} /> </div>   
            </div>
        </div>
    )
}