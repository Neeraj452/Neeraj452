import React, { Component } from 'react'
import Mounting from './Mounting-Student';

export default class Mouting extends Component {
        constructor(props)
        {
              super(props);
              console.log("App-constructore Called")
              console.log(props)
              this.state = {
                    roll:212
              };
        }

   static getDerivedStateFromProps(props,state){
         console.log("App - Get Derived State From Props")
         console.log(props,state);
         return null;
   }
      render() {
            console.log("App- render Called")
            return (
            <Mounting name="Neeraj"/>
            )
      }

      componentDidMount(){
            // Get data from  server and set the data to sate
            console.log("App - ComponentDidMount - Mouted")
      }
}
