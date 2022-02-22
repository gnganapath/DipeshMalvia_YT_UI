import React from 'react';
//# Type-1.
// function FName/ComponentName() { return <div> method-1 </div> }  // use return ( <> </> for more than )
// export default ComponentName;

//# Type-2.
// export function FunctionComponent() {

// return (
//    <>
//     <div> Export default fun Name() </div>
//     <div> 3-type=> export const  Arrarow FunName = () => import Braces  component Name</div>
//  </>
// )
// }


//# Type-3.
export const  FunctionComponent = () => {

    return (         
    <>
    <div style={{border: " 1px solid red", margin: 5}}> <h5> Function component declaration/ definiiton 3 types </h5> 
        <div>1. function FName()  {}  newLine/endline export default FName/componentName; </div>
    
        <div>2. export function FName/componentName()  --> default not required in single export </div>

        <div>3.  export const  Arrarow FName/componentName = () => import Braces  componentName at importing component --> also default not required</div>
    </div>
    </>    

)
}
