import React, { Component } from 'react';

class ChildClassComponent extends Component{

    render(){
        return(
            <div className="border">
                <h5> class child Component </h5>
                <h6>{ this.props.count }</h6>
            </div>
        )
    }
}

export default ChildClassComponent;