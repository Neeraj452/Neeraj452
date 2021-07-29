import React, { Component } from 'react'
import Marks from './Mark';

export default class Mounting extends Component {
      render() {
            console.log("Stdent-Rendered []Child of App");
            return (
                  <div>
                        <h1>Hello Mounting {this.props.name}</h1>
                        <Marks/>
                  </div>
            )
      }
}
