import { React } from "react";

export const FunctionChildComponent = ({count}) =>{
return(
    <div className="border">
        <h5> Function Child Component </h5>
        <h6>{count }</h6>
        <FChild count = {count} />
    </div>
)

}

const FChild = ( {count }) =>{
    return (
        <span className="border1">
            <h5> Function grand Child Component </h5> 
            <h6>{count }</h6>
            <p> Paa data to inner level drill down Component every component need to pass count value to child. To avoid useContext hooks </p>
        </span>
    )
}