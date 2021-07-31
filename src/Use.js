import React, { Component } from 'react'

//export default class Use extends Component {
//       render() {
//             return (
//                   <div>
//                    <h1> WelCome To Neeraj</h1>
//                    <button> LogOut</button>
//                   </div>
//             )
//       }
// }

export default class Use extends Component {
render() {
      return (
            <div>
             <h1> WelCome To Neeraj</h1>
            
             <button onClick={this.props.clickData}>LogOut</button>
            </div>
      )
}
}
