import React from 'react';

class SheepCounter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
    };
    // this.incrementCounter = this.incrementCounter.bind(this);
    // counter ++; 
  }
  incrementCounter(){
    this.setState({counter:this.state.counter+1})
    }
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <input type="button" onClick={this.incrementCounter.bind(this)} value="Incrementar" />
      </div>
    );
  }
}

export default SheepCounter;