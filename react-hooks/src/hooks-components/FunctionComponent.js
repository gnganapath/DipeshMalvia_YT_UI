import React , { useState, useEffect } from 'react';


export function FunctionComponent() {
    const [ time, setTime ]= useState( new Date().toString());
    const [ message,   setMessage] = useState( "Function component");

    // Type-1 compomnent mounted and updated - first time adn Every method call/ variable update
    useEffect(() =>{
        console.log("Type-1 Every time function component mounted/ updated")
    })


    // Type-2 Call only once which is comonent mounted - Mostly for Fet./ Axios call 
    useEffect(() =>{
        console.log("Type-2 function component mounted only once - Axios or Fetch APi call in the initial level")
            //const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            // if(xtype.type(res.data) === 'array'){
            // this.setState({data: res.data})
            // }else{
            // console.log(new Error('Something went wrong'))
            // this.setState({data: []})
            // }
    }, []);

    // Type-3 Call only once which is comonent mounted - Mostly for Fet./ Axios call 
    useEffect(() =>{
        console.log("Type-3 Dependency based use Effect, whenver time value get changed this useEffect trigger")
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
            
        </div>
    );
}
