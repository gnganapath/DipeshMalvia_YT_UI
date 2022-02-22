import React ,{ useState, useMemo } from 'react';

export const UseMemoHooEg = () =>{
    const [count, setCount] = useState(1);
    //useMemo is similar syntax for useEffect 
    const result = useMemo(() => { return factorialResult(count) },[count] );
    const [name, setName] = useState();

    return (
        <>
            <div>
                <h5> UseMemo Hook sample</h5>
            </div>
            <div className="App" >
            <h5>case:1 --> Factorial of {count} is : {result}</h5>

            <button onClick={() =>  setCount(count + 1) }> Increment + </button>
            <button onClick={() =>  setCount(count - 1) }> Decrement - </button>
            <div>
                <h5>case:2 -->Another Render / seperate operation </h5>
                <label> Enter Name: </label>
                <input type="text" placeholder="Enter text" onChange={ (e)=> setName(e.target.value)} />
                Value: { name }
                <br />
                This value change immediately use of memo hook but render method call every time
                <br />
                The render stop for every name change - use React.memo at root level
                <DisplayName name = {name} ></DisplayName>
            </div>
        </div>
        </>
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
// destructing the props value
const DisplayName = React.memo(({name})  =>{
    console.log('render is called, only anem cahnge not increment or decrement')
    return (
    <div>Display in child component :==> { name }</div>
    )

});