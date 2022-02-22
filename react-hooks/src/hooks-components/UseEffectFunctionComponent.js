import React , { useState, useEffect } from 'react';
import xtype from 'xtypejs';    // xtype used to detect exact data type and value 

export function UseEffectFunctionComponent() {
    const [ time, setTime ]= useState( new Date().toString());
    const [ message,   setMessage] = useState( "Function component");

    // useEffect(() => {
    // //Runs on every render
    // });

    // Type-1 compomnent mounted and updated - first time adn Every method call/ variable update
    useEffect(() =>{
        console.log("Type-1 Every time function component mounted/ updated")
    })



    // useEffect(() => {
    // //Runs only on the first render
    // }, []);

    // Type-2 Call only once which is component mounted - Mostly for Fetch / Axios call 
    useEffect(() =>{
        console.log("Type-2 function component mounted only once - Axios or Fetch API call in the initial level")
            //const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            // if(xtype.type(res.data) === 'array'){
            // this.setState({data: res.data})
            // }else{
            // console.log(new Error('Something went wrong'))
            // this.setState({data: []})
            // }
    }, []);



    // useEffect(() => {
    //     //Runs on the first render
    //     //And any time any dependency value changes
    //     }, [prop, state]);

    // Type-3 Call only once which is component mounted - Mostly for Fetch./ Axios call 
    useEffect(() =>{
        console.log("Type-3 Dependency based use Effect, whenever time value get changed this useEffect trigger")
        const interval = setInterval(showDate, 1000);

        return() =>{
            console.log("cleanup of interval");
            clearInterval(interval)
        }
    }, [time]);   // dependency based effect call 

    const showDate = () =>{
        setTime( new Date().toString());
    }
    return (
        <div className="App">
        <h5>2.2 Function components </h5>
        <div> {time} <button onClick={showDate}> Show Date</button> </div>
        <div> time varible based Effect call. Type3->  <button onClick={ () => setMessage("Function called , particular var (time) depenndent")}>  indepenndent fun call Click</button> --> {message} </div>
            
            <h6>The useEffect Hook allows you to perform side effects in your components.

            Some examples of side effects are: fetching data, directly updating the DOM, and timers.

            useEffect accepts two arguments. The second argument is optional.

           <br /> useEffect ( function, dependency)</h6>
        </div>
    );
}
