
import React,{Component} from 'react'

// class Student extends Component{
//       constructor(props){
//             super(props);
//             this.state={
//                   name: "Neeraj",
//                   roll: this.props.roll
//             };
//              this.handleClick= this.handleClick.bind(this);
//       }
//       handleClick()
//       {
//             this.setState({name:"Suraj Maurya",roll:10}) 
//       }
//       render()
//       {
//             return(
//                   <>
//                   <h1>Hello Event {this.state.name } your roll Nimber {this.state.roll} </h1>
//                   <button onClick = {this.handleClick}> Click Me</button>
//                   </>
//             )
//       }
// }
// export default Student;


// Change state by Arrow Function 

class Student extends Component{
      constructor(props){
            super(props);
            this.state={
                  name: "Neeraj",
                  roll: this.props.roll
            };
             
      }
      handleClick = ()=>
      {
            this.setState((state,props) =>{
                  console.log(props.roll);

            })
      }
      render()
      {
            return(
                  <>
                  <h1>Hello Event {this.state.name } your roll Nimber {this.state.roll} </h1>
                  <button onClick = {this.handleClick}> Click Me</button>
                  </>
            )
      }
}
export default Student;