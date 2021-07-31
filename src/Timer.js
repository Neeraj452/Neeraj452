import React, { Component } from 'react'

export default class Timer extends Component {
      constructor(){
            super();
            this.state={
                  date: new Date()
            };
      }

      componentDidMount() {
            this.timerID = setInterval(
                () => this.setState({
                    date: new Date()
                }), 1000
            );
        }

         componentDidUpdate() {
        console.log('after update...');
    }

        componentWillUnmount() {
            clearInterval(this.timerID);
        }
    
    
      render() {
            return (
                  <>
                  <h1>Timer</h1>
                  <h2>{this.state.date.toLocaleTimeString()}</h2>
              </>
            )
      }
}
