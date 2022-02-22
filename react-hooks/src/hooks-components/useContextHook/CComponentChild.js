import React, { Component } from 'react';
import { CounterContext } from './createContext/counterContext';

class CComponentChild extends Component{

     render(){
        return(
            <div className="border">
                <h5> class child Component </h5>
                <h6>{ this.props.counter }</h6>
                <CounterContext.Consumer>
                    { (value) => {
                        return <h6>class com- using usecontext hook --> {value} </h6>
                    }}
                </CounterContext.Consumer>
            </div>
        )
    }
}
export default CComponentChild;