import React ,{ useState } from 'react';
import xtype from 'xtypejs';    // xtype used to detect exact data type and value 

function initialValue(){
    console.log('Initial click called');
    return 0;
}

export function UseStateHookDemo() {
let egname ="ganapath";
function changeName(){
    egname = " React Name change";
}
//const [fName, setState] -> generic state varible implment. const [fName, setFName]-> used for naming convention to easy understand
const [fName, setFName] = useState("ganapath"); // string varaible default value is "ganapath"; 
const [flag, setFlag] = useState(false);  // boolean
const [steps, setSteps] = useState(0);    //number - boolean justification
const [count, setCount] = useState(0);

const [num , setNum] = useState(initialValue() )       //  useState(initialValue() => { console.log('click') return 0;} ) 

const [name, setName ] = useState("");   // empty input box value
const [names, setNames ] = useState([]);   // empty array declared

// console.log(typeof(new Date())) // object  
// console.log(typeof(['Manish', 'Manntrix', "Medium"])) // object
// console.log(typeof({ name: 'Manish', age: 26 })) // object
// console.log(typeof(/ab+c/i)) // object
// console.log(typeof(new Error('Error')))  // object

function changeStateVariable(){
    setFName("fnmae becomes state changed value using setFName() ");
    setSteps(true);     console.log(steps) // it will  true but not show in UI  {steps}
    console.log(typeof(new Date()))

    // afternpm install xtype --save *** npm pacakage installation
    //xtype.type - JS data type based type will return

    console.log(xtype.type(new Date())) // date
    console.log(xtype.type({})) // object
    console.log(xtype.type({name: "manish"})) // object

    // xtype provide exact varible values exactly with proper meaningful- nontech

    console.log(xtype({name: "manish"})) // single_prop_object
    console.log(xtype({name: "manish", age: 26})) // multi_prop_object

}

function increment(){
    console.log('every click called')
 setCount( count +1 )
//setCount( count +1 )  // adding the same twice can't increment thje variable 2 time. So to impact hte previous make the prevState to get previous state value
}

function previousStateIncrement(){
    setCount((prevState) => prevState + 1 );
    setCount((prevState) => prevState + 1 )
}

function deccrement(){
     setCount( count - 1 )
}

function initValue(){
    setNum(num +1)  // just an alternate
}

function addNames(e){
    e.preventDefault();
    setNames([...names, { id: names.length, name:name }]);
    //setNames([...names, {  name }]);  // this also work , but key error for arrya iteration gives error, {names.map((item) => ( <li}> {item.name} </li> )) }   
    setName("")
}
return (
   <div className="App" style={{border: " 1px solid green", margin: 5}}>
    <h5> useState Hooks </h5>
    <h6> manually assignment operator cann't rerder the react component, useState assing the value to variable </h6>
    <button onClick={changeName}>Change Name -> {egname} click here ""Not work""</button>
    <br />
    <button onClick={changeStateVariable}>Change State Variable Name value -> {fName}  "*** working *** </button>
    <br /> Take a look at console for detailed data <em> <strong>npm install xtype --save </strong></em>

    <h6> increment amd decrement -> {count}</h6>
    <button onClick={increment}> + </button>
    <button onClick={deccrement}> - </button>

    <button onClick={previousStateIncrement}> prevState increment + 2 </button>

    <button onClick={initValue}> Initial value {num}, changed from </button>
    <hr />
    <h5> Form Handling </h5>

    <form onSubmit={addNames}>
        <input type="text" placeholder="Add names to array string" value={name} onChange= { (e) => setName(e.target.value) } />
        <button>Add Names </button>    
        {/*<button type="submit">Add Names </button>    - default sumit convention  */}
    </form> 

    <br />
    <ul>
        {names.map((item) => ( <li key={item.id}> {item.name} </li> )) }   
    </ul>

   </div>
)
}




