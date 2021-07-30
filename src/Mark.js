import React, { Component } from 'react'

// export default class Marks extends Component {
//       render() {
//             console.log("Mark-Rendered [Child of student]")
//             return (
//                   <div>
//                         <h1>Marks Component</h1>
//                   </div>
//             )
//       }
// }


export default class Marks extends Component {
      constructor(props)
      {
            super(props);
            this.state = {
                  mroll:this.props.roll
            };
      }
       static getDerivedStateFromProps(props,state){
             console.log("get Derived Sate from props");
             if(props.roll !== state.mroll){
                   return {mroll:props.roll};
             }
             return null;
       }

      render() {
            console.log("Marks Rendered");
           
            return (
                  <div>
                        <h1>Marks Component {this.state.mroll}</h1>
                  </div>
            )
      }
}
