import React, { Component } from 'react';

class ClassComponent extends Component {
    state = {
        message : "Class component",
        time : new Date().toString(),
    }

    componentDidMount(){
        console.log("component  Did Mount")
        this.interval = setInterval(this.showDate, 1000);
    }
    componentDidUpdate(){
        console.log("Component Did Update")
    }

    componentWillUnmount(){
        console.log("Component Will Unmount / Destroy the compononent");
        clearInterval(this.interval)
    }
    showDate = () =>{
        this.setState( {time: new Date().toString()})
    }
    render() {
        return (
            <div>
              <h5>  2.1 Simple class component </h5>
              <div> {this.state.message} </div>
              <div> {this.state.time} </div>
            </div>
        );
    }
}

export default ClassComponent;