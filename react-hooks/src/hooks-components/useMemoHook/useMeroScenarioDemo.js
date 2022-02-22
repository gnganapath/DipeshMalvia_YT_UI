import React, { useState } from 'react';

export const UseMemoScenarioDemo = () =>{

    const [count, setCount] = useState(1);
    const result = factorialResult(count);
    const [name, setName] = useState();

    // function increment(){ setCount(count + 1) }
    // function decrement(){ setCount(count - 1) }

    return(
        <div className="App" >
            <h5> Factorial of {count} is : {result}</h5>

            <button onClick={() =>  setCount(count + 1) }> Increment + </button>
            <button onClick={() =>  setCount(count - 1) }> Decrement - </button>
            <div>
                <h5>Another Render / seperate operation </h5>
                <label> Enter Name: </label>
                <input type="text" placeholder="Enter text" onChange={ (e)=> setName(e.target.value)} />
                Value: { name }
                <br />
                This value change fun also calling the impact to the rerender option
            </div>
        </div>
    )

}

function factorialResult(number){

    // assume/make the factorial is heavy function
    let i =0;
    while(i<200000000) i++;
    if(number < 0 ) { return -1; }
    if(number == 0 ){  return 1;  }
    return number*factorialResult(number-1);
}